#!/usr/bin/env node
// Vérifie la cohérence du programme (data/plan.js) avec le catalogue et les fichiers de contenu.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { ROOT, loadCatalog, loadDataFile } from './lib.mjs';

const ctx = { window: {} };
ctx.LE = ctx.window.LE = {};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/plan.js'), 'utf8'), ctx);
const plan = JSON.parse(JSON.stringify(ctx.LE.plan));
const cat = loadCatalog();
const byId = {};
for (const [g, list] of Object.entries(cat)) for (const e of list) byId[e.id] = { ...e, group: g };

let errors = 0;
const E = (m) => { errors++; console.log('✗ ' + m); };
const used = new Set();
const keys = new Set();
if (plan.weeks.length !== 30) E(`${plan.weeks.length} semaines au lieu de 30`);
plan.weeks.forEach((w, i) => {
  if (w.n !== i + 1) E(`semaine ${i + 1} : n=${w.n}`);
  const phase = plan.phases.find((p) => w.n >= p.weeks[0] && w.n <= p.weeks[1]);
  if (!phase) E(`semaine ${w.n} hors phase`);
  const seen = new Set();
  for (const t of w.tasks) {
    const key = t.ref ? (t.set ? `${t.ref}:${t.set}` : t.ref) : t.key;
    if (!key) E(`S${w.n} : tâche sans clé`);
    if (seen.has(key)) E(`S${w.n} : tâche en double ${key}`);
    seen.add(key);
    if (!t.ref) { if (keys.has(t.key)) E(`clé libre réutilisée : ${t.key}`); keys.add(t.key); continue; }
    const e = byId[t.ref];
    if (!e) { E(`S${w.n} : référence inconnue ${t.ref}`); continue; }
    used.add(t.set ? `${t.ref}:${t.set}` : t.ref);
    if (t.set) {
      if (e.group !== 'toeic') E(`S${w.n} : set sur un non-TOEIC ${t.ref}`);
      else if (fs.existsSync(path.join(ROOT, e.file))) {
        const [obj] = loadDataFile(e.file);
        if (!obj.sets[t.set - 1]) E(`S${w.n} : ${t.ref} n'a pas de série ${t.set} (${obj.sets.length} séries)`);
      }
    }
  }
});
// Tout le contenu est-il planifié ?
for (const g of ['grammar', 'pron', 'vocab', 'guide', 'mock', 'placement', 'ref', 'toeic']) {
  for (const e of cat[g]) if (!used.has(e.id)) E(`${e.id} (${e.title}) n'apparaît pas dans le programme`);
}
for (const e of cat.toeic) {
  if (!fs.existsSync(path.join(ROOT, e.file))) continue;
  const [obj] = loadDataFile(e.file);
  obj.sets.forEach((s, k) => { if (!used.has(`${e.id}:${k + 1}`)) E(`${e.id} série ${k + 1} (${s.title}) n'apparaît pas dans le programme`); });
}
console.log(errors ? `${errors} problème(s)` : `✓ Programme cohérent : ${plan.weeks.length} semaines, ${plan.weeks.reduce((a, w) => a + w.tasks.length, 0)} tâches`);
process.exitCode = errors ? 1 : 0;
