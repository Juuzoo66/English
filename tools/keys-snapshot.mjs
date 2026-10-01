#!/usr/bin/env node
// Empreinte des corrigés (index des bonnes réponses, nombre de questions) pour vérifier qu'une
// retouche de texte n'a modifié aucune réponse. Usage : node tools/keys-snapshot.mjs > keys.json
import { loadDataFile, flatten, catalogFiles, loadCatalog } from './lib.mjs';
const out = {};
for (const { file } of catalogFiles(loadCatalog())) {
  const [o] = loadDataFile(file);
  out[o.id] = flatten(o).map((q) => (q.type === 'choice' ? `${q.key}:${q.answer}/${q.options.length}` : `${q.key}:${q.answers.length}`));
}
console.log(JSON.stringify(out));
