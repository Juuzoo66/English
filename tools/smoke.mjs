#!/usr/bin/env node
// Test de fumée dans Chromium : ouvre chaque page du site et signale les erreurs JS.
// Usage : node tools/smoke.mjs [baseUrl]   (serveur statique requis, ex. python3 -m http.server 8080)
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
let playwright;
try { playwright = require('playwright'); } catch { playwright = require('/opt/node22/lib/node_modules/playwright'); }
import { loadCatalog, catalogFiles, ROOT } from './lib.mjs';
import fs from 'node:fs';
import path from 'node:path';

const base = process.argv[2] || 'http://127.0.0.1:8080/';
const shots = process.argv.includes('--shots');
const cat = loadCatalog();
const exists = (f) => fs.existsSync(path.join(ROOT, f));

const routes = ['#/', '#/plan', '#/cours', '#/cours/prononciation', '#/cours/outils', '#/vocab', '#/toeic', '#/progres', '#/revisions'];
for (const e of [...cat.guide, ...cat.grammar, ...cat.pron]) if (exists(e.file)) { routes.push(`#/lecon/${e.id}`); routes.push(`#/lecon/${e.id}/exercices`); }
for (const e of cat.vocab) if (exists(e.file)) { routes.push(`#/vocab/${e.id}`); routes.push(`#/vocab/${e.id}/cartes`); routes.push(`#/vocab/${e.id}/quiz/en-fr`); routes.push(`#/vocab/${e.id}/quiz/ecrire`); }
if (exists('data/ref/r01.js')) routes.push('#/verbes/1', '#/verbes/all', '#/verbes/1/quiz', '#/verbes/1/cartes');
for (const e of cat.toeic) if (exists(e.file)) { routes.push(`#/toeic/${e.id}`, `#/toeic/${e.id}/serie/1`); }
for (const e of cat.mock) if (e.files.every(exists)) routes.push(`#/blanc/${e.id}`);
for (const e of cat.placement) if (exists(e.file)) routes.push(`#/test/${e.id}`, `#/test/${e.id}/go`);

const browser = await playwright.chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
await ctx.addInitScript(() => {
  localStorage.setItem('le-toeic-v1', JSON.stringify({ v: 1, onboarded: true, profile: { name: 'Test', startDate: '2026-09-29', examDate: '2027-04-29' } }));
});
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push({ route: page.url(), msg: e.message }));
page.on('console', (m) => { if (m.type() === 'error') errors.push({ route: page.url(), msg: m.text() }); });
await page.goto(base + 'index.html#/');
await page.waitForTimeout(400);
let bad = 0;
for (const r of routes) {
  await page.evaluate((h) => { location.hash = h; }, r);
  await page.waitForTimeout(250);
  const txt = await page.locator('main').innerText();
  if (/Oups|introuvable|pas encore disponible/.test(txt)) { bad++; console.log(`✗ ${r} → ${txt.slice(0, 120).replace(/\n/g, ' ')}`); }
  if (shots) await page.screenshot({ path: `/tmp/shot-${r.replace(/[^a-z0-9]+/gi, '_')}.png`, fullPage: false });
}
console.log(`${routes.length} routes testées, ${bad} en échec, ${errors.length} erreur(s) JS`);
errors.slice(0, 30).forEach((e) => console.log(`  JS: ${e.route} → ${e.msg}`));
await browser.close();
if (bad || errors.length) process.exitCode = 1;
