#!/usr/bin/env node
// Compare un fichier de réponses (JSON { clé: "A" | "texte" }) aux corrigés d'un fichier de données.
// Usage : node tools/grade.mjs <id|fichier> <answers.json>
import fs from 'node:fs';
import { loadDataFile, flatten, resolveArg, LETTERS, normalize, loadCatalog } from './lib.mjs';

const [arg, answersFile] = process.argv.slice(2);
if (!arg || !answersFile) { console.error('Usage : node tools/grade.mjs <id|fichier> <answers.json>'); process.exit(1); }
let files = [];
const cat = loadCatalog();
const mock = (cat.mock || []).find((m) => m.id === arg);
if (mock) files = mock.files;
else { const f = resolveArg(arg); if (f) files = [f]; }
const given = JSON.parse(fs.readFileSync(answersFile, 'utf8'));

let total = 0, ok = 0;
const mismatches = [];
for (const file of files) {
  const [obj] = loadDataFile(file);
  const prefix = files.length > 1 ? obj.id + ':' : '';
  for (const q of flatten(obj)) {
    const key = prefix + q.key;
    total++;
    const g = given[key];
    if (g === undefined) { mismatches.push({ key, problem: 'pas de réponse fournie' }); continue; }
    if (q.type === 'choice') {
      const idx = typeof g === 'number' ? g : LETTERS.indexOf(String(g).trim().toUpperCase().charAt(0));
      if (idx === q.answer) ok++;
      else mismatches.push({ key, problem: `réponse donnée ${LETTERS[idx] ?? g} ≠ corrigé ${LETTERS[q.answer]}`, prompt: q.prompt, options: q.options, fileAnswer: LETTERS[q.answer] });
    } else if (q.type === 'text') {
      const n = normalize(g);
      const accepted = q.answers.map(normalize);
      const loose = (s) => normalize(s).replace(/[,;:"]/g, '').replace(/\s+/g, ' ');
      if (accepted.includes(n) || (q.dictation || q.order) && q.answers.map(loose).includes(loose(g))) ok++;
      else mismatches.push({ key, problem: `réponse « ${g} » absente des réponses acceptées`, prompt: q.prompt, accepted: q.answers });
    }
  }
}
console.log(`Score : ${ok}/${total}`);
if (mismatches.length) {
  console.log(`\n${mismatches.length} divergence(s) à examiner :\n`);
  for (const m of mismatches) {
    console.log(`## ${m.key} — ${m.problem}`);
    if (m.prompt) console.log(m.prompt.replace(/<[^>]+>/g, '').split('\n').slice(-6).join('\n'));
    if (m.options) m.options.forEach((o, i) => console.log(`   ${LETTERS[i]}) ${o.replace(/<[^>]+>/g, '')}`));
    if (m.accepted) console.log(`   acceptées : ${JSON.stringify(m.accepted)}`);
    console.log('');
  }
}
