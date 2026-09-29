// Outils partagés : chargement des fichiers de données et mise à plat des questions.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export function loadCatalog() {
  const ctx = { window: {}, console };
  ctx.window.LE = {};
  ctx.LE = ctx.window.LE;
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/catalog.js'), 'utf8'), ctx, { filename: 'data/catalog.js' });
  return ctx.LE.catalog;
}

// Charge un fichier de données ; renvoie la liste des objets passés à LE.register.
export function loadDataFile(file) {
  const abs = path.isAbsolute(file) ? file : path.join(ROOT, file);
  const src = fs.readFileSync(abs, 'utf8');
  const registered = [];
  const ctx = { console };
  ctx.LE = { register: (obj) => registered.push(obj) };
  ctx.window = { LE: ctx.LE };
  vm.createContext(ctx);
  vm.runInContext(src, ctx, { filename: path.relative(ROOT, abs), timeout: 2000 });
  // Recopie hors du contexte vm pour des comparaisons d'objets fiables.
  return JSON.parse(JSON.stringify(registered));
}

// Tous les fichiers du catalogue : [{file, entry, group}]
export function catalogFiles(catalog = loadCatalog()) {
  const out = [];
  for (const [group, entries] of Object.entries(catalog)) {
    for (const entry of entries) {
      const files = entry.files || [entry.file];
      for (const file of files) out.push({ file, entry, group });
    }
  }
  return out;
}

export function normalize(s) {
  return String(s)
    .toLowerCase()
    .replace(/[’‘`´]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[.!?]+$/g, '')
    .trim();
}

export const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

// Met à plat toutes les questions notées d'un objet enregistré.
// Chaque question : { key, type: 'choice'|'text', prompt (texte pour l'apprenant), options?, answer (index) | answers (strings) }
export function flatten(obj) {
  const qs = [];
  const exo = (e, key, context = '') => {
    const ctxTxt = context ? context + '\n' : '';
    switch (e.type) {
      case 'mcq':
        qs.push({ key, type: 'choice', prompt: ctxTxt + e.q, options: e.options, answer: e.answer });
        break;
      case 'listen':
        qs.push({ key, type: 'choice', prompt: ctxTxt + `[AUDIO] "${e.say}"\n${e.q}`, options: e.options, answer: e.answer });
        break;
      case 'gap':
        qs.push({ key, type: 'text', prompt: ctxTxt + e.q + (e.hint ? `\n(indice : ${e.hint})` : ''), answers: e.answers });
        break;
      case 'dictation':
        qs.push({ key, type: 'text', prompt: ctxTxt + `[DICTÉE] écris exactement ce que tu entends : "${e.say}"`, answers: e.answers, dictation: true });
        break;
      case 'order': {
        const words = String(e.answer).replace(/[.!?]+$/, '').split(/\s+/);
        const shuffled = [...words].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        qs.push({ key, type: 'text', prompt: ctxTxt + `Remets les mots dans l'ordre (${e.fr}) : ${shuffled.join(' / ')}`, answers: [e.answer, ...(e.alts || [])], order: true });
        break;
      }
      default:
        qs.push({ key, type: 'unknown', prompt: JSON.stringify(e) });
    }
  };
  const toeicItem = (part, it, key) => {
    if (part === 1) {
      qs.push({ key, type: 'choice', prompt: `[PHOTO] ${it.scene}\nQuelle phrase décrit le mieux la photo ?`, options: it.statements, answer: it.answer });
    } else if (part === 2) {
      qs.push({ key, type: 'choice', prompt: `Question entendue : "${it.question}"\nMeilleure réponse ?`, options: it.responses, answer: it.answer });
    } else if (part === 3 || part === 4) {
      const transcript = part === 3
        ? it.lines.map((l) => `${l.speaker}: ${l.text}`).join('\n')
        : `(${it.intro}) [${it.speaker}] ${it.text}`;
      const graphic = it.graphic ? `\n[GRAPHIQUE] ${it.graphic.title}\n${[it.graphic.head, ...it.graphic.rows].map((r) => r.join(' | ')).join('\n')}` : '';
      it.questions.forEach((q, i) => {
        qs.push({ key: `${key}.q${i + 1}`, type: 'choice', prompt: (i === 0 ? `TRANSCRIPTION :\n${transcript}${graphic}\n---\n` : '(même transcription)\n') + q.q, options: q.options, answer: q.answer });
      });
    } else if (part === 5) {
      qs.push({ key, type: 'choice', prompt: it.q, options: it.options, answer: it.answer });
    } else if (part === 6) {
      it.questions.forEach((q, i) => {
        qs.push({ key: `${key}.q${i + 1}`, type: 'choice', prompt: (i === 0 ? `TEXTE (${it.title}) :\n${it.text}\n---\n` : '(même texte)\n') + `Trou {${i + 1}}`, options: q.options, answer: q.answer });
      });
    } else if (part === 7) {
      const docs = it.docs.map((d, j) => `DOCUMENT ${j + 1} (${d.kind}${d.title ? ' — ' + d.title : ''}) :\n${d.text}`).join('\n\n');
      it.questions.forEach((q, i) => {
        qs.push({ key: `${key}.q${i + 1}`, type: 'choice', prompt: (i === 0 ? `${docs}\n---\n` : '(mêmes documents)\n') + q.q, options: q.options, answer: q.answer });
      });
    }
  };

  if (Array.isArray(obj.exercises)) obj.exercises.forEach((e, i) => exo(e, `ex${i + 1}`));
  if (obj.kind === 'placement') obj.questions.forEach((e, i) => exo(e, `q${i + 1}`, `[niveau ${e.level}]`));
  if (obj.kind === 'toeic') obj.sets.forEach((s, si) => s.items.forEach((it, ii) => toeicItem(obj.part, it, `s${si + 1}.i${ii + 1}`)));
  if (obj.kind === 'mock-section') obj.parts.forEach((p) => p.items.forEach((it, ii) => toeicItem(p.part, it, `p${p.part}.i${ii + 1}`)));
  return qs;
}

export function findFileForId(id) {
  const cat = loadCatalog();
  for (const { file, entry } of catalogFiles(cat)) {
    if (entry.id === id || path.basename(file, '.js') === id) return file;
  }
  return null;
}

export function resolveArg(arg) {
  if (!arg) return null;
  if (arg.endsWith('.js')) return arg;
  return findFileForId(arg);
}
