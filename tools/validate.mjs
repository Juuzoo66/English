#!/usr/bin/env node
// Valide les fichiers de données par rapport à docs/CONTENT_SPEC.md.
// Usage : node tools/validate.mjs            → tout le catalogue
//         node tools/validate.mjs g08 v11     → fichiers précis (id ou chemin)
//         node tools/validate.mjs --strict    → les avertissements comptent comme erreurs
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, loadCatalog, loadDataFile, catalogFiles, resolveArg, normalize } from './lib.mjs';

const args = process.argv.slice(2);
const strict = args.includes('--strict');
const targets = args.filter((a) => !a.startsWith('--'));

const LEVELS = ['A1', 'A2', 'B1', 'B2'];
const POS = ['n', 'v', 'adj', 'adv', 'prep', 'conj', 'pron', 'det', 'num', 'expr', 'pv', 'int'];
const BOX = ['tip', 'warn', 'key', 'info'];
const SPEAKERS = ['M', 'W', 'M2', 'W2', 'A', 'B'];
const SKILLS = ['word-form', 'verb', 'preposition', 'connector', 'pronoun', 'vocabulary', 'comparison', 'other'];
const ALLOWED_TAGS = ['b', 'strong', 'i', 'em', 'u', 'br', 'code', 'mark', 'small', 'sup', 'sub', 'span'];
const SPAN_CLASSES = ['en', 'fr', 'hl', 'ok', 'ko'];
const ACCENTS = ['en-US', 'en-GB', 'en-AU', 'en-CA'];
function checkAccent(o, where, E) { if (o && o.accent !== undefined && !ACCENTS.includes(o.accent)) E(`${where} : accent invalide « ${o.accent} »`); }

let errorCount = 0;
let warnCount = 0;

function check(file, errors, warnings) {
  const rel = path.relative(ROOT, path.isAbsolute(file) ? file : path.join(ROOT, file));
  if (errors.length || warnings.length) {
    console.log(`\n${errors.length ? '✗' : '⚠'} ${rel}`);
    errors.forEach((e) => console.log(`   ERREUR  ${e}`));
    warnings.forEach((w) => console.log(`   avert.  ${w}`));
  } else {
    console.log(`✓ ${rel}`);
  }
  errorCount += errors.length;
  warnCount += warnings.length;
}

function validateHtml(s, where, E) {
  if (typeof s !== 'string') { E(`${where} : chaîne attendue`); return; }
  const tagRe = /<\/?([a-zA-Z0-9]+)([^>]*)>/g;
  let m;
  while ((m = tagRe.exec(s))) {
    const tag = m[1].toLowerCase();
    const attrs = m[2].trim();
    if (!ALLOWED_TAGS.includes(tag)) E(`${where} : balise <${tag}> interdite`);
    if (attrs && !attrs.startsWith('/')) {
      const cm = /^class=["']([a-z ]+)["']$/.exec(attrs);
      if (tag !== 'span' || !cm || !cm[1].split(' ').every((c) => SPAN_CLASSES.includes(c))) E(`${where} : attribut interdit « ${attrs} » sur <${tag}>`);
    }
  }
  const stripped = s.replace(tagRe, '');
  if (/[<>]/.test(stripped)) E(`${where} : caractère < ou > littéral (utiliser → ou le mot)`);
}

function str(v) { return typeof v === 'string' && v.trim().length > 0; }

function validateChoice(o, where, E, W, { n = null, min = 2, max = 4 } = {}) {
  if (!Array.isArray(o.options)) { E(`${where} : options manquantes`); return; }
  if (n !== null && o.options.length !== n) E(`${where} : ${n} options attendues (${o.options.length})`);
  if (o.options.length < min || o.options.length > max) E(`${where} : ${min} à ${max} options attendues`);
  o.options.forEach((op, i) => { if (!str(op)) E(`${where} : option ${i} vide`); else validateHtml(op, `${where}.options[${i}]`, E); });
  const norm = o.options.map((x) => normalize(x));
  if (new Set(norm).size !== norm.length) E(`${where} : options en double`);
  if (!Number.isInteger(o.answer) || o.answer < 0 || o.answer >= o.options.length) E(`${where} : answer invalide (${o.answer})`);
  if (!str(o.explain)) E(`${where} : explain manquant`); else validateHtml(o.explain, `${where}.explain`, E);
}

function validateExercise(e, where, E, W) {
  if (!e || typeof e !== 'object') { E(`${where} : objet attendu`); return; }
  checkAccent(e, where, E);
  switch (e.type) {
    case 'mcq':
      if (!str(e.q)) E(`${where} : q manquant`); else validateHtml(e.q, `${where}.q`, E);
      validateChoice(e, where, E, W);
      break;
    case 'listen':
      if (!str(e.say)) E(`${where} : say manquant`);
      else if (/[<>]/.test(e.say)) E(`${where} : pas de html dans say`);
      if (!str(e.q)) E(`${where} : q manquant`); else validateHtml(e.q, `${where}.q`, E);
      validateChoice(e, where, E, W);
      break;
    case 'gap': {
      if (!str(e.q)) { E(`${where} : q manquant`); break; }
      validateHtml(e.q, `${where}.q`, E);
      const count = e.q.split('___').length - 1;
      if (count !== 1) E(`${where} : q doit contenir exactement un « ___ » (trouvé ${count})`);
      if (/____/.test(e.q)) E(`${where} : utiliser exactement trois tirets bas « ___ »`);
      if (!Array.isArray(e.answers) || !e.answers.length || !e.answers.every(str)) E(`${where} : answers doit être un tableau de chaînes non vide`);
      else {
        const n = e.answers.map(normalize);
        if (new Set(n).size !== n.length) W(`${where} : réponses en double après normalisation`);
        if (e.answers.some((a) => /___/.test(a))) E(`${where} : une réponse contient ___`);
      }
      if (!str(e.explain)) E(`${where} : explain manquant`); else validateHtml(e.explain, `${where}.explain`, E);
      break;
    }
    case 'order': {
      if (!str(e.answer)) { E(`${where} : answer manquant`); break; }
      const words = e.answer.replace(/[.!?]+$/, '').trim().split(/\s+/);
      if (words.length < 3 || words.length > 12) E(`${where} : 3 à 12 mots attendus (${words.length})`);
      if (/[<>]/.test(e.answer)) E(`${where} : pas de html dans answer`);
      const bag = (s) => s.replace(/[.!?]+$/, '').trim().split(/\s+/).map((w) => w.toLowerCase().replace(/[’]/g, "'")).sort().join(' ');
      (e.alts || []).forEach((a, i) => { if (bag(a) !== bag(e.answer)) E(`${where} : alts[${i}] n'utilise pas exactement les mêmes mots`); });
      if (!str(e.fr)) E(`${where} : fr manquant`);
      if (!str(e.explain)) E(`${where} : explain manquant`); else validateHtml(e.explain, `${where}.explain`, E);
      break;
    }
    case 'dictation':
      if (!str(e.say)) E(`${where} : say manquant`);
      if (!Array.isArray(e.answers) || !e.answers.length || !e.answers.every(str)) E(`${where} : answers requis`);
      if (!str(e.explain)) E(`${where} : explain manquant`); else validateHtml(e.explain, `${where}.explain`, E);
      break;
    default:
      E(`${where} : type d'exercice inconnu « ${e.type} »`);
  }
}

function validateBlocks(blocks, where, E, W, { lesson = true } = {}) {
  if (!Array.isArray(blocks) || !blocks.length) { E(`${where} : blocks manquant`); return; }
  let examples = 0, tables = 0, warns = 0, keys = 0;
  blocks.forEach((b, i) => {
    const w = `${where}[${i}](${b && b.type})`;
    if (!b || typeof b !== 'object') { E(`${w} : objet attendu`); return; }
    switch (b.type) {
      case 'h': if (!str(b.text)) E(`${w} : text manquant`); else validateHtml(b.text, w, E); break;
      case 'p': if (!str(b.html)) E(`${w} : html manquant`); else validateHtml(b.html, w, E); break;
      case 'list':
        if (!Array.isArray(b.items) || !b.items.length) E(`${w} : items manquant`);
        else b.items.forEach((it, j) => validateHtml(it, `${w}.items[${j}]`, E));
        break;
      case 'examples':
        examples++;
        if (!Array.isArray(b.items) || !b.items.length) E(`${w} : items manquant`);
        else b.items.forEach((it, j) => {
          if (!str(it.en)) E(`${w}.items[${j}] : en manquant`); else validateHtml(it.en, `${w}.items[${j}].en`, E);
          if (!str(it.fr)) E(`${w}.items[${j}] : fr manquant`); else validateHtml(it.fr, `${w}.items[${j}].fr`, E);
          if (it.note !== undefined) validateHtml(it.note, `${w}.items[${j}].note`, E);
          checkAccent(it, `${w}.items[${j}]`, E);
        });
        break;
      case 'table':
        tables++;
        if (!Array.isArray(b.head) || !b.head.length) E(`${w} : head manquant`);
        if (!Array.isArray(b.rows) || !b.rows.length) E(`${w} : rows manquant`);
        else b.rows.forEach((r, j) => {
          if (!Array.isArray(r) || r.length !== b.head.length) E(`${w}.rows[${j}] : ${b.head.length} cellules attendues`);
          else r.forEach((c, k) => validateHtml(String(c), `${w}.rows[${j}][${k}]`, E));
        });
        (b.head || []).forEach((c, k) => validateHtml(String(c), `${w}.head[${k}]`, E));
        if (b.caption !== undefined) validateHtml(b.caption, `${w}.caption`, E);
        break;
      case 'box':
        if (!BOX.includes(b.style)) E(`${w} : style invalide « ${b.style} »`);
        if (b.style === 'warn') warns++;
        if (b.style === 'key') keys++;
        if (!str(b.html)) E(`${w} : html manquant`); else validateHtml(b.html, w, E);
        if (b.title !== undefined) validateHtml(b.title, `${w}.title`, E);
        break;
      case 'dialog':
        checkAccent(b, w, E);
        if (!Array.isArray(b.lines) || b.lines.length < 2) E(`${w} : au moins 2 lignes`);
        else b.lines.forEach((l, j) => {
          if (!SPEAKERS.includes(l.speaker)) E(`${w}.lines[${j}] : speaker invalide « ${l.speaker} »`);
          if (!str(l.en) || /[<>]/.test(l.en)) E(`${w}.lines[${j}] : en manquant ou contient du html`);
          if (!str(l.fr)) E(`${w}.lines[${j}] : fr manquant`);
        });
        break;
      case 'pairs':
        if (!Array.isArray(b.items) || !b.items.length) E(`${w} : items manquant`);
        else b.items.forEach((it, j) => {
          if (!str(it.a) || !str(it.b)) E(`${w}.items[${j}] : a et b requis`);
          if (/[<>]/.test(it.a + it.b)) E(`${w}.items[${j}] : pas de html dans a/b`);
          if (it.note !== undefined) validateHtml(it.note, `${w}.items[${j}].note`, E);
        });
        break;
      default: E(`${w} : type de bloc inconnu`);
    }
  });
  if (lesson) {
    if (examples < 3) W(`${where} : au moins 3 blocs examples recommandés (${examples})`);
    if (tables < 1) W(`${where} : au moins 1 table recommandée`);
    if (warns < 1) W(`${where} : au moins 1 box warn recommandée`);
    if (keys !== 1) W(`${where} : exactement 1 box key recommandée (${keys})`);
    else if (blocks[blocks.length - 1].style !== 'key') W(`${where} : la box key devrait être le dernier bloc`);
    if (blocks.length < 12) W(`${where} : leçon courte (${blocks.length} blocs)`);
  }
}

function validateGraphic(g, where, E) {
  if (!g) return;
  if (!str(g.title)) E(`${where}.graphic : title manquant`);
  if (!Array.isArray(g.head) || !Array.isArray(g.rows)) E(`${where}.graphic : head et rows requis`);
  else g.rows.forEach((r, j) => { if (!Array.isArray(r) || r.length !== g.head.length) E(`${where}.graphic.rows[${j}] : mauvais nombre de cellules`); });
}

function validateToeicItem(part, it, where, E, W) {
  checkAccent(it, where, E);
  const Q = (qs, n, w) => {
    if (!Array.isArray(qs) || (n && qs.length !== n)) { E(`${w} : ${n || 'des'} questions attendues`); return; }
    qs.forEach((q, i) => {
      if (part !== 6) { if (!str(q.q)) E(`${w}.questions[${i}] : q manquant`); else validateHtml(q.q, `${w}.questions[${i}].q`, E); }
      validateChoice(q, `${w}.questions[${i}]`, E, W, { n: 4, min: 4, max: 4 });
    });
  };
  switch (part) {
    case 1:
      if (!str(it.scene)) E(`${where} : scene manquant`);
      if (!Array.isArray(it.statements) || it.statements.length !== 4) E(`${where} : 4 statements attendus`);
      else validateChoice({ options: it.statements, answer: it.answer, explain: it.explain }, where, E, W, { n: 4, min: 4 });
      break;
    case 2:
      if (!str(it.question)) E(`${where} : question manquante`);
      if (!Array.isArray(it.responses) || it.responses.length !== 3) E(`${where} : 3 responses attendues`);
      else validateChoice({ options: it.responses, answer: it.answer, explain: it.explain }, where, E, W, { n: 3, min: 3, max: 3 });
      if (it.speakers && (!Array.isArray(it.speakers) || !it.speakers.every((s) => SPEAKERS.includes(s)))) E(`${where} : speakers invalide`);
      break;
    case 3:
      if (!Array.isArray(it.lines) || it.lines.length < 4) E(`${where} : au moins 4 répliques`);
      else it.lines.forEach((l, j) => {
        if (!SPEAKERS.includes(l.speaker)) E(`${where}.lines[${j}] : speaker invalide`);
        if (!str(l.text) || /[<>]/.test(l.text)) E(`${where}.lines[${j}] : text manquant ou html`);
      });
      validateGraphic(it.graphic, where, E);
      Q(it.questions, 3, where);
      break;
    case 4:
      if (!str(it.intro)) E(`${where} : intro manquant`);
      if (!SPEAKERS.includes(it.speaker)) E(`${where} : speaker invalide`);
      if (!str(it.text) || /[<>]/.test(it.text)) E(`${where} : text manquant ou html`);
      validateGraphic(it.graphic, where, E);
      Q(it.questions, 3, where);
      break;
    case 5:
      if (!str(it.q)) E(`${where} : q manquant`);
      else {
        const n = it.q.split('-------').length - 1;
        if (n !== 1 || /--------/.test(it.q)) E(`${where} : le trou doit être exactement « ------- » une fois`);
        validateHtml(it.q, `${where}.q`, E);
      }
      validateChoice(it, where, E, W, { n: 4, min: 4 });
      if (!SKILLS.includes(it.skill)) E(`${where} : skill invalide « ${it.skill} »`);
      break;
    case 6: {
      if (!str(it.title)) E(`${where} : title manquant`);
      if (!str(it.text)) { E(`${where} : text manquant`); break; }
      validateHtml(it.text, `${where}.text`, E);
      for (let k = 1; k <= 4; k++) {
        const c = it.text.split(`{${k}}`).length - 1;
        if (c !== 1) E(`${where} : {${k}} doit apparaître exactement une fois (${c})`);
      }
      const idx = [1, 2, 3, 4].map((k) => it.text.indexOf(`{${k}}`));
      if (idx.some((v, i) => i && v < idx[i - 1])) E(`${where} : {1}..{4} pas dans l'ordre`);
      Q(it.questions, 4, where);
      break;
    }
    case 7:
      if (!Array.isArray(it.docs) || !it.docs.length || it.docs.length > 3) E(`${where} : 1 à 3 docs`);
      else it.docs.forEach((d, j) => {
        if (!str(d.kind)) E(`${where}.docs[${j}] : kind manquant`);
        if (!str(d.text)) E(`${where}.docs[${j}] : text manquant`); else validateHtml(d.text, `${where}.docs[${j}].text`, E);
      });
      if (!Array.isArray(it.questions) || it.questions.length < 2 || it.questions.length > 5) E(`${where} : 2 à 5 questions`);
      else Q(it.questions, 0, where);
      break;
    default:
      E(`${where} : partie inconnue ${part}`);
  }
}

function validateObject(obj, entry, group, file) {
  const errors = [];
  const warnings = [];
  const E = (m) => errors.push(m);
  const W = (m) => warnings.push(m);

  if (!obj || typeof obj !== 'object') { E('objet attendu'); return { errors, warnings }; }
  const expectKind = { guide: ['guide'], grammar: ['grammar'], pron: ['pron'], vocab: ['vocab'], ref: ['irregular'], toeic: ['toeic'], mock: ['mock-section'], placement: ['placement'] }[group];
  if (!expectKind.includes(obj.kind)) E(`kind « ${obj.kind} » inattendu (attendu : ${expectKind.join('/')})`);
  if (group !== 'mock') {
    if (obj.id !== entry.id) E(`id « ${obj.id} » ≠ catalogue « ${entry.id} »`);
    if (obj.title !== entry.title) E(`title « ${obj.title} » ≠ catalogue « ${entry.title} »`);
    if (entry.level && obj.level !== entry.level) E(`level « ${obj.level} » ≠ catalogue « ${entry.level} »`);
  }

  if (['grammar', 'pron', 'guide'].includes(obj.kind)) {
    if (!str(obj.subtitle)) E('subtitle manquant');
    if (!LEVELS.includes(obj.level)) E('level invalide');
    if (!Number.isInteger(obj.minutes) || obj.minutes < 5 || obj.minutes > 90) E('minutes invalide');
    if (!Array.isArray(obj.goals) || obj.goals.length < 2 || obj.goals.length > 5) W('goals : 2 à 4 attendus');
    else obj.goals.forEach((g, i) => validateHtml(g, `goals[${i}]`, E));
    validateBlocks(obj.blocks, 'blocks', E, W, { lesson: obj.kind !== 'guide' });
    if (!Array.isArray(obj.exercises)) E('exercises manquant');
    else {
      if (obj.kind !== 'guide' && (obj.exercises.length < 12 || obj.exercises.length > 20)) W(`12 à 16 exercices attendus (${obj.exercises.length})`);
      obj.exercises.forEach((e, i) => validateExercise(e, `exercises[${i}]`, E, W));
    }
  } else if (obj.kind === 'vocab') {
    if (!str(obj.subtitle)) E('subtitle manquant');
    if (!str(obj.intro)) E('intro manquant'); else validateHtml(obj.intro, 'intro', E);
    if (!Array.isArray(obj.groups) || obj.groups.length < 2) E('groups : au moins 2');
    else {
      const seen = new Set();
      let total = 0;
      obj.groups.forEach((g, gi) => {
        if (!str(g.title)) E(`groups[${gi}] : title manquant`);
        if (!Array.isArray(g.words) || !g.words.length) { E(`groups[${gi}] : words manquant`); return; }
        g.words.forEach((w, wi) => {
          const where = `groups[${gi}].words[${wi}] (${w && w.en})`;
          total++;
          ['en', 'fr', 'pos', 'ex', 'exfr'].forEach((k) => { if (!str(w[k])) E(`${where} : ${k} manquant`); });
          if (w.pos && !POS.includes(w.pos)) E(`${where} : pos invalide « ${w.pos} »`);
          if (w.en && /^to /i.test(w.en) && w.pos === 'v') E(`${where} : verbe sans « to »`);
          if (w.en && /[<>]/.test(w.en + (w.ex || ''))) E(`${where} : pas de html dans en/ex`);
          if (w.note !== undefined) validateHtml(w.note, `${where}.note`, E);
          const k = normalize(w.en || '');
          if (seen.has(k)) E(`${where} : doublon`);
          seen.add(k);
        });
      });
      if (total < 36 || total > 70) W(`36 à 60 mots attendus (${total})`);
    }
    if (obj.tips) obj.tips.forEach((t, i) => {
      if (!BOX.includes(t.style)) E(`tips[${i}] : style invalide`);
      if (!str(t.html)) E(`tips[${i}] : html manquant`); else validateHtml(t.html, `tips[${i}]`, E);
    });
  } else if (obj.kind === 'irregular') {
    if (!str(obj.intro)) E('intro manquant'); else validateHtml(obj.intro, 'intro', E);
    if (!Array.isArray(obj.verbs) || obj.verbs.length < 100) E('au moins 100 verbes');
    else {
      const seen = new Set();
      obj.verbs.forEach((v, i) => {
        ['base', 'past', 'pp', 'fr'].forEach((k) => { if (!str(v[k])) E(`verbs[${i}] : ${k} manquant`); });
        if (![1, 2, 3].includes(v.rank)) E(`verbs[${i}] (${v.base}) : rank 1/2/3`);
        if (seen.has(v.base)) E(`verbs[${i}] : doublon ${v.base}`);
        seen.add(v.base);
      });
    }
  } else if (obj.kind === 'toeic') {
    if (obj.part !== entry.part) E(`part ${obj.part} ≠ catalogue ${entry.part}`);
    if (!str(obj.subtitle)) E('subtitle manquant');
    if (!Array.isArray(obj.goals)) W('goals manquant');
    validateBlocks(obj.blocks, 'blocks', E, W, { lesson: true });
    if (!Array.isArray(obj.sets) || !obj.sets.length) E('sets manquant');
    else obj.sets.forEach((s, si) => {
      if (!str(s.title)) E(`sets[${si}] : title manquant`);
      if (s.level && !LEVELS.includes(s.level)) E(`sets[${si}] : level invalide`);
      if (!Array.isArray(s.items) || !s.items.length) E(`sets[${si}] : items manquant`);
      else s.items.forEach((it, ii) => validateToeicItem(obj.part, it, `sets[${si}].items[${ii}]`, E, W));
    });
  } else if (obj.kind === 'mock-section') {
    const exp = entry.files.map((f) => path.basename(f, '.js'));
    if (!exp.includes(obj.id)) E(`id « ${obj.id} » ne correspond à aucun fichier du test ${entry.id}`);
    if (obj.mock !== entry.id) E(`mock « ${obj.mock} » ≠ ${entry.id}`);
    const expectedParts = obj.section === 'listening' ? [1, 2, 3, 4] : obj.section === 'reading' ? [5, 6, 7] : null;
    if (!expectedParts) E('section doit être listening ou reading');
    else {
      const got = (obj.parts || []).map((p) => p.part);
      if (JSON.stringify(got) !== JSON.stringify(expectedParts)) E(`parts attendues ${expectedParts} (trouvé ${got})`);
    }
    if (obj.section === 'reading' && !Number.isInteger(obj.minutes)) E('minutes requis pour la section reading');
    (obj.parts || []).forEach((p) => (p.items || []).forEach((it, ii) => validateToeicItem(p.part, it, `part${p.part}.items[${ii}]`, E, W)));
  } else if (obj.kind === 'placement') {
    if (!str(obj.intro)) E('intro manquant'); else validateHtml(obj.intro, 'intro', E);
    if (!Array.isArray(obj.questions) || obj.questions.length < 32) E('au moins 32 questions');
    else {
      let last = 0;
      obj.questions.forEach((q, i) => {
        const lv = LEVELS.indexOf(q.level);
        if (lv < 0) E(`questions[${i}] : level invalide`);
        if (lv < last) E(`questions[${i}] : non trié par niveau`);
        last = Math.max(last, lv);
        if (!['mcq', 'listen'].includes(q.type)) E(`questions[${i}] : type mcq ou listen`);
        validateExercise(q, `questions[${i}]`, E, W);
      });
    }
  }
  return { errors, warnings };
}

function validateFile(file, entry, group) {
  const abs = path.join(ROOT, file);
  if (!fs.existsSync(abs)) { check(file, ['fichier manquant'], []); return; }
  let regs;
  try { regs = loadDataFile(file); } catch (e) { check(file, [`erreur de syntaxe/exécution : ${e.message}`], []); return; }
  if (regs.length !== 1) { check(file, [`LE.register doit être appelé exactement 1 fois (${regs.length})`], []); return; }
  const { errors, warnings } = validateObject(regs[0], entry, group, file);
  check(file, errors, strict ? [] : warnings);
  if (strict) { errorCount += warnings.length; warnings.forEach((w) => console.log(`   ERREUR(strict)  ${w}`)); }
}

const catalog = loadCatalog();
const all = catalogFiles(catalog);
let list = all;
if (targets.length) {
  const wanted = targets.map((t) => resolveArg(t)).filter(Boolean).map((f) => path.relative(ROOT, path.isAbsolute(f) ? f : path.join(ROOT, f)));
  list = all.filter((x) => wanted.includes(x.file));
  const missing = targets.filter((t) => !resolveArg(t));
  if (missing.length) { console.log(`Inconnu dans le catalogue : ${missing.join(', ')}`); process.exitCode = 1; }
  // Fichiers mock : accepter m01 → ses 2 fichiers
  for (const t of targets) {
    const m = (catalog.mock || []).find((x) => x.id === t);
    if (m) m.files.forEach((f) => { if (!list.find((x) => x.file === f)) list.push({ file: f, entry: m, group: 'mock' }); });
  }
} else {
  // Doublons d'id dans le catalogue
  const ids = all.map((x) => x.entry.id);
  const dup = ids.filter((id, i) => ids.indexOf(id) !== i && !all[i].entry.files);
  if (dup.length) { console.log(`Ids en double dans le catalogue : ${dup}`); errorCount++; }
}
for (const { file, entry, group } of list) validateFile(file, entry, group);
console.log(`\n${list.length} fichier(s) — ${errorCount} erreur(s), ${warnCount} avertissement(s)`);
if (errorCount) process.exitCode = 1;
