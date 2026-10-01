#!/usr/bin/env node
// Affiche les questions d'un fichier SANS les corrigés (pour la résolution « à l'aveugle »).
// Usage : node tools/quiz.mjs <id|fichier> [--json]
import { loadDataFile, flatten, resolveArg, LETTERS, loadCatalog } from './lib.mjs';

const arg = process.argv[2];
const asJson = process.argv.includes('--json');
let files = [];
const cat = loadCatalog();
const mock = (cat.mock || []).find((m) => m.id === arg);
if (mock) files = mock.files;
else { const f = resolveArg(arg); if (f) files = [f]; }
if (!files.length) { console.error(`Introuvable : ${arg}`); process.exit(1); }

const out = [];
for (const file of files) {
  const [obj] = loadDataFile(file);
  const prefix = files.length > 1 ? obj.id + ':' : '';
  for (const q of flatten(obj)) {
    out.push({ key: prefix + q.key, type: q.type, prompt: q.prompt, options: q.options });
  }
}
if (asJson) { console.log(JSON.stringify(out, null, 1)); process.exit(0); }
console.log(`# ${out.length} questions. Réponds avec un JSON { "clé": "A" } (choix) ou { "clé": "texte" } (réponse écrite)\n`);
for (const q of out) {
  console.log(`## ${q.key}`);
  console.log(q.prompt.replace(/<[^>]+>/g, ''));
  if (q.options) q.options.forEach((o, i) => console.log(`   ${LETTERS[i]}) ${o.replace(/<[^>]+>/g, '')}`));
  console.log('');
}
