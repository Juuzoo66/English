/* Synthèse vocale (Web Speech API) : choix des voix par accent et par genre, lecture séquentielle. */
(function () {
  'use strict';
  const LE = window.LE;
  const synth = window.speechSynthesis;
  const supported = !!(synth && window.SpeechSynthesisUtterance);

  const FEMALE = /female|woman|samantha|victoria|karen|moira|tessa|fiona|serena|zira|susan|hazel|libby|sonia|jenny|aria|emma|olivia|ava|allison|kate|catherine|nicky|joanna|salli|kendra|kimberly|ivy|amy|natasha|clara|linda|heather|michelle|sara|google uk english female|google us english/i;
  const MALE = /\bmale\b|\bman\b|daniel|alex|fred|arthur|david|mark|george|ryan|guy|rishi|oliver|thomas|james|william|lee|liam|matthew|joey|justin|brian|russell|christopher|eric|roger|steffan|aaron|gordon|google uk english male/i;

  let voices = [];
  function refresh() {
    voices = supported ? synth.getVoices().filter((v) => /^en[-_]/i.test(v.lang)) : [];
  }
  if (supported) {
    refresh();
    if (typeof synth.addEventListener === 'function') synth.addEventListener('voiceschanged', refresh);
    else synth.onvoiceschanged = refresh;
  }

  const langOf = (v) => v.lang.replace('_', '-').toLowerCase();
  const genderOf = (v) => (FEMALE.test(v.name) && !/\bmale\b/i.test(v.name.replace(/female/i, '')) ? 'W' : MALE.test(v.name) ? 'M' : '?');

  // Renvoie {voice, pitch} pour un accent ('en-US'…) et un locuteur ('M', 'W', 'M2', 'W2').
  function pick(accent, speaker) {
    if (!voices.length) refresh();
    const want = (accent || 'en-US').toLowerCase();
    const gender = speaker ? speaker.charAt(0) : 'W';
    const alt = speaker && speaker.length > 1;
    const preferred = LE.state && LE.state.settings.voice;

    let pool = voices.filter((v) => langOf(v) === want);
    if (!pool.length && want === 'en-ca') pool = voices.filter((v) => langOf(v) === 'en-us');
    if (!pool.length && want === 'en-au') pool = voices.filter((v) => langOf(v) === 'en-gb');
    if (!pool.length) pool = voices.filter((v) => langOf(v) === 'en-us');
    if (!pool.length) pool = voices.slice();
    if (!pool.length) return { voice: null, pitch: gender === 'M' ? 0.85 : 1.1, lang: accent || 'en-US' };

    // Préférer les voix locales de bonne qualité (souvent « Natural », « Enhanced », « Google »).
    const score = (v) => (/natural|neural|enhanced|premium/i.test(v.name) ? 3 : 0) + (/google/i.test(v.name) ? 1 : 0) + (v.localService ? 1 : 0);
    pool = pool.slice().sort((a, b) => score(b) - score(a));

    const same = pool.filter((v) => genderOf(v) === gender);
    let voice;
    if (preferred && !speaker) voice = pool.find((v) => v.name === preferred);
    if (!voice) voice = same.length ? same[alt && same.length > 1 ? 1 : 0] : pool[alt && pool.length > 1 ? 1 : 0];
    // Si aucune voix du bon genre n'existe, on module la hauteur pour distinguer les locuteurs.
    let pitch = 1;
    if (!same.length || genderOf(voice) === '?') pitch = gender === 'M' ? (alt ? 0.75 : 0.85) : (alt ? 1.25 : 1.12);
    return { voice, pitch, lang: voice ? voice.lang : accent };
  }

  // Découpe un long texte en phrases (Chrome coupe parfois les énoncés longs).
  function chunks(text) {
    const parts = String(text).match(/[^.!?;:]+[.!?;:]*\s*/g) || [String(text)];
    const out = [];
    let cur = '';
    for (const p of parts) {
      if ((cur + p).length > 180 && cur) { out.push(cur.trim()); cur = p; } else cur += p;
    }
    if (cur.trim()) out.push(cur.trim());
    return out;
  }

  let token = 0;
  function speakOne(text, opts, myToken) {
    return new Promise((resolve) => {
      if (!supported || myToken !== token) return resolve(false);
      const u = new SpeechSynthesisUtterance(text);
      const p = pick(opts.accent, opts.speaker);
      if (p.voice) u.voice = p.voice;
      u.lang = p.lang || 'en-US';
      u.pitch = p.pitch;
      u.rate = (opts.rate || (LE.state && LE.state.settings.rate) || 0.95);
      let done = false;
      const finish = () => { if (!done) { done = true; clearTimeout(guard); resolve(true); } };
      u.onend = finish;
      u.onerror = finish;
      // Garde-fou si onend ne se déclenche jamais (certains navigateurs).
      const guard = setTimeout(finish, 1500 + text.length * 120);
      synth.speak(u);
    });
  }

  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  LE.speech = {
    supported,
    voices: () => (refresh(), voices),
    pick,
    stop() {
      token++;
      if (supported) synth.cancel();
      document.querySelectorAll('.speak.playing').forEach((b) => b.classList.remove('playing'));
    },
    // Lit une séquence de segments : [{text, speaker, accent, pause}]
    async play(segments, onSegment) {
      if (!supported) { LE.toast('La synthèse vocale n’est pas disponible sur ce navigateur.'); return false; }
      LE.speech.stop();
      const my = ++token;
      if (synth.paused) synth.resume();
      for (let i = 0; i < segments.length; i++) {
        const seg = segments[i];
        if (my !== token) return false;
        if (onSegment) onSegment(i);
        for (const c of chunks(seg.text)) {
          if (my !== token) return false;
          await speakOne(c, seg, my);
        }
        if (seg.pause) await wait(seg.pause);
      }
      if (onSegment && my === token) onSegment(-1);
      return my === token;
    },
    say(text, opts) {
      return LE.speech.play([Object.assign({ text }, opts || {})]);
    }
  };

  // Bouton 🔊 générique : <button class="speak" data-say="..." data-accent="en-GB" data-speaker="M">
  document.addEventListener('click', (ev) => {
    const b = ev.target.closest('.speak[data-say]');
    if (!b) return;
    ev.preventDefault();
    if (b.classList.contains('playing')) { LE.speech.stop(); return; }
    LE.speech.stop();
    b.classList.add('playing');
    LE.speech.say(b.getAttribute('data-say'), { accent: b.dataset.accent, speaker: b.dataset.speaker }).then(() => b.classList.remove('playing'));
  });

  LE.speakBtn = function (text, opts) {
    opts = opts || {};
    return `<button class="speak${opts.big ? ' big' : ''}" type="button" data-say="${LE.esc(text)}"${opts.accent ? ` data-accent="${opts.accent}"` : ''}${opts.speaker ? ` data-speaker="${opts.speaker}"` : ''} aria-label="Écouter : ${LE.esc(text)}" title="Écouter">🔊</button>`;
  };
})();
