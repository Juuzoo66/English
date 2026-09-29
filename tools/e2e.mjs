#!/usr/bin/env node
// Parcours de bout en bout dans Chromium : répond correctement (ou faux) aux exercices et vérifie
// le score affiché et la progression enregistrée.
// Usage : node tools/e2e.mjs [baseUrl]   (serveur statique requis)
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { loadCatalog, ROOT } from './lib.mjs';
const require = createRequire(import.meta.url);
let playwright;
try { playwright = require('playwright'); } catch { playwright = require('/opt/node22/lib/node_modules/playwright'); }

const base = process.argv[2] || 'http://127.0.0.1:8080/';
const cat = loadCatalog();
const exists = (f) => fs.existsSync(path.join(ROOT, f));
const browser = await playwright.chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1100, height: 900 } });
await ctx.addInitScript(() => {
  if (!localStorage.getItem('le-toeic-v1')) localStorage.setItem('le-toeic-v1', JSON.stringify({ v: 1, onboarded: true, profile: { name: 'E2E', startDate: '2026-09-29', examDate: '2027-04-29' }, settings: { autoplay: false, rate: 1, theme: 'auto', voice: '', newPerDay: 15 } }));
});
const page = await ctx.newPage();
page.on('dialog', (d) => d.accept());
const jsErrors = [];
page.on('pageerror', (e) => jsErrors.push(e.message));
await page.goto(base + 'index.html#/');
await page.waitForTimeout(300);
let failures = 0;
const fail = (m) => { failures++; console.log('✗ ' + m); };
const ok = (m) => console.log('✓ ' + m);
const go = async (h) => { await page.evaluate((x) => (location.hash = x), h); await page.waitForTimeout(250); };

// Répond à l'exercice affiché. `right` = répondre juste ou faux.
async function answerExercise(ex, right) {
  if (ex.type === 'mcq' || ex.type === 'listen') {
    const k = right ? ex.answer : (ex.answer + 1) % ex.options.length;
    await page.click(`.q-body button.opt[data-k="${k}"]`);
  } else if (ex.type === 'gap' || ex.type === 'dictation') {
    await page.fill('.q-body input', right ? ex.answers[0] : 'zzz wrong');
    await page.click('.q-body button[type="submit"]');
  } else if (ex.type === 'order') {
    const target = ex.answer.replace(/[.!?]+$/, '').trim().split(/\s+/);
    const chips = await page.$$eval('.chips.pool .chip', (els) => els.map((e) => e.textContent));
    const used = new Set();
    const seq = right ? target : target.slice().reverse();
    for (let w = 0; w < seq.length; w++) {
      const want = seq[w].toLowerCase();
      const j = chips.findIndex((c, idx) => !used.has(idx) && c.toLowerCase() === want);
      used.add(j);
      await page.click(`.chips.pool .chip[data-j="${j}"]`);
    }
    await page.click('[data-act="check"]');
  }
}

async function runLesson(id, rightFn) {
  await go(`#/lecon/${id}/exercices`);
  const exs = await page.evaluate((i) => LE.content[i].exercises, id);
  let expected = 0;
  for (let k = 0; k < exs.length; k++) {
    const right = rightFn(k);
    if (right) expected++;
    await answerExercise(exs[k], right);
    const fb = await page.locator('.feedback').first().getAttribute('class');
    if (!fb.includes(right ? 'ok' : 'ko')) fail(`${id} ex${k + 1} (${exs[k].type}) : attendu ${right ? 'juste' : 'faux'}, obtenu ${fb}`);
    await page.click('[data-act="next"]');
  }
  const score = await page.locator('.score-big').innerText();
  if (!score.startsWith(String(expected))) fail(`${id} : score affiché ${score.replace(/\s+/g, ' ')} ≠ ${expected}`);
  const st = await page.evaluate((i) => LE.state.lessons[i], id);
  return { st, expected, total: exs.length };
}

// 1) Toutes les leçons disponibles : 100 % de bonnes réponses → validée.
for (const e of [...cat.grammar, ...cat.pron]) {
  if (!exists(e.file)) continue;
  const { st, expected, total } = await runLesson(e.id, () => true);
  if (!st || !st.done || st.best !== 1) fail(`${e.id} : leçon non validée après ${expected}/${total}`);
  else ok(`${e.id} : ${total}/${total}, leçon validée`);
}
// 2) Une leçon avec une réponse sur deux fausse.
if (exists('data/grammar/g01.js')) {
  await page.evaluate(() => { delete LE.state.lessons.g01; });
  const { st, expected, total } = await runLesson('g01', (k) => k % 2 === 0);
  const passed = expected / total >= 0.6;
  if (!!st.done !== passed) fail(`g01 (moitié) : done=${st.done} attendu ${passed}`); else ok(`g01 : ${expected}/${total} → done=${!!st.done}`);
}

// 3) Séries TOEIC : toutes les séries de toutes les parties, réponses justes.
for (const e of cat.toeic) {
  if (!exists(e.file)) continue;
  await go(`#/toeic/${e.id}`);
  const P = await page.evaluate((i) => LE.content[i], e.id);
  for (let s = 0; s < P.sets.length; s++) {
    await go(`#/toeic/${e.id}/serie/${s + 1}`);
    let total = 0;
    for (const it of P.sets[s].items) {
      const qs = await page.evaluate(([part, item]) => LE.toeicQuestions(part, item), [P.part, it]);
      for (let k = 0; k < qs.length; k++) {
        await page.click(`.item-zone .opt[data-q="${k}"][data-k="${qs[k].answer}"]`);
        total++;
      }
      if (qs.length > 1) await page.click('[data-act="check"]');
      const wrong = await page.locator('.item-zone .opt.wrong').count();
      if (wrong) fail(`${e.id} série ${s + 1} : ${wrong} option(s) marquée(s) fausse(s) alors que la bonne réponse a été choisie`);
      await page.click('[data-act="next"]');
    }
    const score = await page.locator('.score-big').innerText();
    if (!score.startsWith(String(total))) fail(`${e.id} série ${s + 1} : score ${score} ≠ ${total}`);
  }
  const rec = await page.evaluate((i) => Object.keys(LE.state.sets).filter((k) => k.startsWith(i + ':')).length, e.id);
  if (rec !== P.sets.length) fail(`${e.id} : ${rec}/${P.sets.length} séries enregistrées`); else ok(`${e.id} : ${P.sets.length} séries parcourues sans faute`);
}

// 4) Tests de niveau : tout juste → B2.
for (const e of cat.placement) {
  if (!exists(e.file)) continue;
  await go(`#/test/${e.id}/go`);
  const qs = await page.evaluate((i) => LE.content[i].questions, e.id);
  for (const q of qs) await answerExercise(q, true);
  const lvl = await page.locator('.score-big').innerText();
  if (lvl.trim() !== 'B2') fail(`${e.id} : niveau ${lvl} au lieu de B2`); else ok(`${e.id} : ${qs.length} questions, niveau B2`);
}

// 5) TOEIC blancs : tout juste → 990.
for (const e of cat.mock) {
  if (!e.files.every(exists)) continue;
  await go(`#/blanc/${e.id}`);
  await page.click('[data-act="real"]'); // écoute illimitée pour aller vite
  await page.click('[data-act="start"]');
  await page.click('[data-act="go"]');
  const screens = await page.evaluate((id) => {
    const secs = ['L', 'R'].map((s) => LE.content[`${id}-${s}`]);
    const out = [];
    secs.forEach((sec) => sec.parts.forEach((p) => p.items.forEach((it) => out.push(LE.toeicQuestions(p.part, it).map((q) => q.answer)))));
    return out;
  }, e.id);
  let n = 0;
  for (let s = 0; s < screens.length; s++) {
    for (let k = 0; k < screens[s].length; k++) { await page.click(`.item-zone .opt[data-q="${k}"][data-k="${screens[s][k]}"]`); n++; }
    await page.click('[data-act="next"]');
    if (await page.locator('[data-act="go"]').count()) await page.click('[data-act="go"]');
  }
  await page.waitForTimeout(200);
  const total = await page.locator('.score-big').innerText();
  if (!total.startsWith('990')) fail(`${e.id} : score ${total} au lieu de 990 (${n} questions)`); else ok(`${e.id} : ${n} questions, 990/990`);
}

// 6) Quiz de vocabulaire et flashcards d'un thème.
const firstVocab = cat.vocab.find((e) => exists(e.file));
if (firstVocab) {
  await go(`#/vocab/${firstVocab.id}/quiz/ecrire`);
  const exs = await page.evaluate(() => {
    // Le quiz est aléatoire : on relit les questions depuis le DOM au fur et à mesure.
    return null;
  });
  void exs;
  for (let k = 0; k < 12; k++) {
    const q = await page.locator('.q-text').innerText();
    const fr = q.match(/«\s*(.+?)\s*»/)[1];
    const en = await page.evaluate(([id, f]) => LE.allWords(LE.content[id]).find((w) => w.fr === f).en, [firstVocab.id, fr]);
    await page.fill('.q-body input', en);
    await page.click('.q-body button[type="submit"]');
    const fb = await page.locator('.feedback').getAttribute('class');
    if (!fb.includes('ok')) fail(`quiz écrire ${firstVocab.id} : « ${en} » refusé pour « ${fr} »`);
    await page.click('[data-act="next"]');
  }
  ok(`${firstVocab.id} : quiz « écrire » 12/12`);
  await go(`#/vocab/${firstVocab.id}/cartes`);
  for (let k = 0; k < 5; k++) { await page.click('[data-act="flip"]'); await page.click('[data-act="yes"]'); }
  const learned = await page.evaluate(() => Object.keys(LE.state.srs).length);
  if (learned < 5) fail(`flashcards : ${learned} cartes enregistrées`); else ok(`flashcards : ${learned} cartes enregistrées`);
}

// 7) Pages principales après activité.
for (const h of ['#/', '#/plan', '#/progres', '#/toeic', '#/vocab', '#/cours']) {
  await go(h);
  const t = await page.locator('main').innerText();
  if (/Oups/.test(t)) fail(`${h} : erreur`);
}
if (jsErrors.length) { fail(`${jsErrors.length} erreur(s) JS`); jsErrors.slice(0, 10).forEach((m) => console.log('   ' + m)); }
console.log(failures ? `\n${failures} échec(s)` : '\nTout est OK');
await browser.close();
process.exitCode = failures ? 1 : 0;
