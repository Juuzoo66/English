# Contrat de contenu — Learn English, objectif TOEIC

Ce document définit **exactement** le format des fichiers de `data/`. Le moteur (`assets/js/app.js`)
et le validateur (`tools/validate.mjs`) s'appuient dessus. Tout écart casse le site.

## Public visé

- Une adulte **francophone, débutante (A1)** qui doit atteindre **B1 / B2 au TOEIC Listening & Reading**
  (B1 ≈ 550 pts, B2 ≈ 785 pts) en **7 mois** (≈ 30 semaines, 45–60 min par jour).
- Toutes les **explications sont en français**, claires, chaleureuses, tutoiement (« tu »), sans jargon inutile.
  Chaque terme technique est expliqué la première fois (ex. « le participe passé (la 3ᵉ colonne des verbes irréguliers) »).
- Les **exemples sont en anglais** avec leur traduction française.
- Anglais **standard et naturel**, orthographe **américaine** par défaut (le TOEIC utilise surtout l'américain),
  sauf leçon consacrée aux différences UK/US.
- Contexte TOEIC = monde du travail international (bureau, réunions, voyages d'affaires, RH, commandes,
  finance…). Dès le niveau A2, privilégier les exemples de ce contexte.
- **Zéro erreur tolérée** : chaque corrigé doit être incontestable, une seule bonne réponse pour les QCM.

## Format général d'un fichier

Chaque fichier est un script JS (pas de JSON pur) qui appelle **une seule fois** `LE.register({...})`
(sauf mention contraire). Pas d'autre code, pas de variables globales, pas de fonctions.

```js
LE.register({
  id: 'g08',
  kind: 'grammar',
  // ...
});
```

- Utiliser des chaînes entre apostrophes simples `'...'` et échapper les apostrophes internes (`\'`),
  **ou** des guillemets doubles `"..."` quand la chaîne contient beaucoup d'apostrophes. Pas de template literals.
- Apostrophe typographique `’` autorisée en français. En anglais, utiliser l'apostrophe droite `'`
  (don't, it's) — le moteur normalise de toute façon ’ → ' pour corriger les réponses.
- Le champ `title` doit être **identique** au titre du catalogue `data/catalog.js`.

### HTML autorisé

Les champs nommés `html` (et les cellules de tableau, les `items` de listes, `explain`, `q`) peuvent contenir
**uniquement** ces balises : `<b> <strong> <i> <em> <u> <br> <code> <mark> <small> <sup> <sub> <span>`.
Aucun attribut sauf `class` sur `<span>` (classes possibles : `en`, `fr`, `hl`, `ok`, `ko`). Pas de `<a>`, `<p>`,
`<div>`, `<ul>`, `<img>`, `<script>`, pas de style inline. Pour des paragraphes : plusieurs blocs `p`.
Caractères `<` et `>` littéraux interdits hors balises (écrire « → » au lieu de « -> »).

## 1. Leçons : `kind: 'grammar' | 'pron' | 'guide'`

```js
LE.register({
  id: 'g08',                 // = id du catalogue
  kind: 'grammar',           // 'grammar', 'pron' ou 'guide'
  title: 'Le présent simple : la forme affirmative',   // = catalogue
  subtitle: 'Parler de ses habitudes et de faits généraux',  // 1 phrase
  level: 'A1',               // 'A1' | 'A2' | 'B1' | 'B2' (= catalogue)
  minutes: 30,               // durée estimée leçon + exercices (15–60)
  goals: ['Conjuguer un verbe au présent simple', '…'],   // 2 à 4 objectifs « Tu sauras… »
  blocks: [ /* contenu de la leçon, voir ci-dessous */ ],
  exercises: [ /* 12 à 16 exercices, voir §2 (0 autorisé pour kind 'guide') */ ]
});
```

### Blocs (`blocks`)

| type | champs | rendu |
|---|---|---|
| `h` | `text` | sous-titre de section |
| `p` | `html` | paragraphe |
| `list` | `items: [html…]`, `ordered?: bool` | liste à puces / numérotée |
| `examples` | `items: [{en, fr, note?}]` | exemples avec bouton 🔊 (lecture de `en`) ; `note` = courte remarque FR (html) |
| `table` | `head: [..]`, `rows: [[..]..]`, `caption?` | tableau (cellules html) ; chaque ligne a autant de cellules que `head` |
| `box` | `style: 'tip'｜'warn'｜'key'｜'info'`, `title?`, `html` | encadré : `tip` astuce, `warn` piège pour francophones, `key` à retenir, `info` culture/TOEIC |
| `dialog` | `title?`, `lines: [{speaker, en, fr}]` | mini-dialogue lu à 2 voix. `speaker` ∈ `'M'` (homme), `'W'` (femme), `'M2'`, `'W2'` |
| `pairs` | `items: [{a, b, note?}]` | paires minimales (ship / sheep), chaque mot a un 🔊 ; `a`, `b` = mots/phrases anglais |

Règles de rédaction d'une leçon :
- Structure recommandée : 1) à quoi ça sert (avec comparaison au français) 2) formation (tableau)
  3) emplois avec exemples 4) pièges pour francophones (`box warn`) 5) lien avec le TOEIC (`box info`)
  6) « À retenir » (`box key`) en fin de leçon.
- 15 à 35 blocs. Au moins 3 blocs `examples` (≥ 4 exemples chacun). Au moins 1 `table`. Au moins 1 `warn`.
  Exactement 1 `key` en dernier bloc.
- Adapter la difficulté au niveau : A1 = phrases très courtes et vocabulaire simple.

## 2. Exercices (`exercises`)

Tous les exercices ont `explain` (html, FR) : **pourquoi** la bonne réponse est correcte (et, si utile,
pourquoi le piège principal est faux). 1 à 3 phrases.

| type | champs | notes |
|---|---|---|
| `mcq` | `q`, `options: [2–4 strings]`, `answer: index (0-based)`, `explain` | QCM. **Une seule** option défendable. Options distinctes. |
| `gap` | `q` (contient **exactement une fois** `___`), `answers: [strings]`, `explain`, `hint?` | texte à trous (1 trou). `answers` = **toutes** les réponses acceptables (formes contractées ET pleines : `"doesn't work"`, `"does not work"`). Mettre les indices dans `q` entre parenthèses, ex. `'She ___ (work) in a bank.'`. Le trou peut contenir plusieurs mots. |
| `order` | `answer` (phrase anglaise), `alts?: [strings]`, `fr`, `explain` | remettre les mots dans l'ordre. Le moteur découpe `answer` sur les espaces (4 à 10 mots, ponctuation finale ignorée, majuscules ignorées). `alts` = autres ordres **corrects** avec exactement les mêmes mots. `fr` = traduction affichée comme consigne. |
| `listen` | `say` (texte anglais lu par la synthèse vocale), `q` (question en FR ou EN), `options`, `answer`, `explain` | compréhension orale : l'apprenante n'entend que `say`. |
| `dictation` | `say`, `answers: [strings]`, `explain` | écrire ce qu'on entend (3–12 mots). Comparaison sans casse ni ponctuation. Mettre les variantes (chiffres/lettres : `"13"`, `"thirteen"`). |

Répartition conseillée pour une leçon de grammaire (12–16 exercices) : ~6 `mcq`, ~5 `gap`, 2–3 `order`, 1–2 `listen`
ou `dictation`. Progressifs : du plus facile au plus difficile. Les derniers dans le style TOEIC Partie 5.

**Accent (optionnel)** : `examples.items[]`, `dialog` (au niveau du bloc), `listen`, `dictation` et les items TOEIC des
parties 1 à 4 acceptent `accent: 'en-US' | 'en-GB' | 'en-AU' | 'en-CA'` (défaut `en-US`). Le moteur choisit une voix
de synthèse correspondante si le navigateur en a une. Au TOEIC, les 4 accents sont utilisés : varie-les dans les
items d'écoute (≈ 50 % US, 25 % GB, 15 % AU, 10 % CA).

Normalisation appliquée par le moteur pour `gap`/`dictation`/`order` : minuscules, ’ → ', espaces multiples réduits,
espaces en début/fin retirés, ponctuation finale (. ! ?) ignorée. Donc inutile de lister les variantes de casse.

## 3. Vocabulaire : `kind: 'vocab'`

```js
LE.register({
  id: 'v11', kind: 'vocab',
  title: 'Le bureau : lieux, matériel et tâches',   // = catalogue
  subtitle: '…', level: 'A2',
  intro: 'html court (1–3 phrases) : pourquoi ce thème compte pour le TOEIC',
  groups: [
    { title: 'Le matériel de bureau', words: [
      { en: 'stapler', fr: 'agrafeuse', pos: 'n', ex: 'Can I borrow your stapler?', exfr: 'Je peux emprunter ton agrafeuse ?' },
      { en: 'photocopier', fr: 'photocopieuse', pos: 'n', ex: '…', exfr: '…', note: 'aussi : copier (US)' }
    ]}
  ],
  tips: [ { style: 'warn', title: 'Faux amis', html: '…' } ]   // 1 à 3 encadrés (mêmes champs qu'un bloc box)
});
```

- `pos` ∈ `n` (nom), `v` (verbe), `adj`, `adv`, `prep`, `conj`, `pron`, `det`, `num`, `expr` (expression), `pv` (phrasal verb).
- Verbes : `en` à l'infinitif **sans** `to` (`'hire'`, pas `'to hire'`). Noms : sans article, sauf si l'article fait partie de l'expression.
- 3 à 6 groupes ; **36 à 60 mots au total**. Pas de doublon dans un même fichier.
- `fr` : traduction la plus utile dans le contexte TOEIC ; plusieurs sens séparés par « ; ».
- `ex` : phrase naturelle de 5 à 14 mots, contexte pro si possible, qui **contient le mot** (forme fléchie acceptée).
- `note` (optionnel) : prononciation piégeuse, faux ami, pluriel irrégulier, synonyme TOEIC, etc.

## 4. Verbes irréguliers : `kind: 'irregular'`

```js
LE.register({ id: 'r01', kind: 'irregular', title: 'Les verbes irréguliers', level: 'A2',
  intro: 'html',
  verbs: [ { base: 'be', past: 'was / were', pp: 'been', fr: 'être', rank: 1 } ] });
```
`rank` 1 = les ~50 plus fréquents (à connaître en premier), 2 = les ~50 suivants, 3 = le reste. 120 à 150 verbes.
Plusieurs formes possibles séparées par ` / ` (`'learned / learnt'`), forme US en premier.

## 5. Parties du TOEIC : `kind: 'toeic'`

```js
LE.register({
  id: 't05', kind: 'toeic', part: 5,
  title: 'Partie 5 — Phrases à compléter', subtitle: '…', level: 'B1',
  minutes: 40,
  goals: ['…'],
  blocks: [ /* leçon de stratégie : mêmes blocs qu'une leçon (§1) */ ],
  sets: [ { title: 'Série 1 — Nature des mots', level: 'A2', items: [ /* items de la partie */ ] }, … ]
});
```

Items selon la partie (toutes les réponses : `answer` = index 0-based ; `explain` en français) :

- **Partie 1** (photo) — on n'affiche pas d'image : on décrit la photo en français.
  `{ scene: 'Description FR précise de la photo (2–3 phrases)', statements: ['4 phrases EN'], answer, explain }`
  Les 4 phrases sont lues à l'oral. Pièges classiques : mauvais verbe, mot entendu mais hors sujet, sons proches.
- **Partie 2** (question-réponse) — `{ question: 'EN', responses: ['3 réponses EN'], answer, explain, speakers?: ['W','M'] }`
  **3 réponses** (A, B, C). Pièges : répétition d'un mot de la question, son similaire, réponse à une autre question wh-.
- **Partie 3** (conversation) — `{ lines: [{speaker: 'M'|'W'|'M2'|'W2', text}], graphic?: {title, head, rows}, questions: [ {q, options: [4], answer, explain} ×3 ] }`
  6–12 répliques. Au moins 2 conversations à 3 personnes par fichier, 2 avec `graphic` (tableau à consulter),
  2 avec une question « What does the man mean when he says, "…"? ».
- **Partie 4** (exposé) — `{ intro: 'Questions refer to the following telephone message.', speaker: 'M'|'W', text, graphic?, questions: [3] }`
  Types : message téléphonique, annonce, publicité, bulletin radio, visite guidée, discours de réunion…
- **Partie 5** (phrase à compléter) — `{ q: 'Phrase avec ------- pour le trou', options: [4], answer, explain, skill }`
  `skill` ∈ `'word-form'` (nature du mot), `'verb'` (temps/voix), `'preposition'`, `'connector'`, `'pronoun'`,
  `'vocabulary'`, `'comparison'`, `'other'`. Le trou est **exactement** `-------` (7 tirets), une fois.
- **Partie 6** (texte à compléter) — `{ title: 'Type de document (E-mail, Notice, Article…)', text, questions: [ {options: [4], answer, explain} ×4 ] }`
  `text` contient `{1}`, `{2}`, `{3}`, `{4}` (dans l'ordre) aux emplacements des trous. Une des 4 questions est
  une **insertion de phrase** (options = 4 phrases complètes). `text` peut contenir `\n` pour les retours à la ligne.
- **Partie 7** (lecture) — `{ docs: [ {kind: 'E-mail'|'Article'|'Advertisement'|'Notice'|'Text-message chain'|'Online chat'|'Form'|'Invoice'|'Letter'|'Web page'|'Memo'|'Schedule'|'Review', title?, text} ], questions: [ {q, options: [4], answer, explain} ] }`
  1 document = 2–4 questions ; 2 ou 3 documents = 5 questions. `text` : texte brut avec `\n` (html autorisé limité).
  Pour les chats, écrire chaque message sur une ligne `Name (10:02 A.M.): message`.
  Pour une question d'insertion, marquer `[1] [2] [3] [4]` dans le texte.

## 6. TOEIC blancs : `kind: 'mock-section'` (2 fichiers par test)

```js
LE.register({ id: 'm01-L', kind: 'mock-section', mock: 'm01', section: 'listening',
  parts: [ {part: 1, items: [..]}, {part: 2, items: [..]}, {part: 3, items: [..]}, {part: 4, items: [..]} ] });
LE.register({ id: 'm01-R', kind: 'mock-section', mock: 'm01', section: 'reading', minutes: 38,
  parts: [ {part: 5, items: [..]}, {part: 6, items: [..]}, {part: 7, items: [..]} ] });
```
Format réduit (≈ moitié d'un vrai TOEIC). Listening : P1 = 3 items, P2 = 12, P3 = 6 conversations (18 q), P4 = 5 exposés (15 q)
→ 48 questions. Reading : P5 = 15, P6 = 2 textes (8 q), P7 = 7 à 8 ensembles (≈ 27 q dont 1 ensemble à 2 docs et
1 à 3 docs) → ≈ 50 questions. Niveau réaliste TOEIC : mélange 30 % facile / 45 % moyen / 25 % difficile.

## 7. Tests de niveau : `kind: 'placement'`

```js
LE.register({ id: 'x01', kind: 'placement', title: 'Test de niveau — version A', minutes: 25,
  intro: 'html',
  questions: [ { level: 'A1', type: 'mcq', q, options, answer, explain }, { level: 'B2', type: 'listen', say, q, options, answer, explain }, … ] });
```
48 questions : 12 A1, 12 A2, 12 B1, 12 B2, **triées par niveau croissant**. Types `mcq` et `listen` seulement
(≈ 1/3 de `listen`). Couvre grammaire, vocabulaire, compréhension orale et écrite (courts textes dans `q`).

## Checklist qualité (appliquée par les relecteurs)

1. Anglais 100 % correct et naturel ; français correct (accents, accords).
2. Corrigés incontestables : un·e prof d'anglais ne doit trouver **aucune** autre option défendable.
3. `gap` : toutes les variantes correctes sont dans `answers` (contractions, synonymes exacts si acceptables).
4. `explain` utile et exact, en français.
5. Niveau adapté (A1 = simple !), progression du facile au difficile.
6. Pas de contenu culturel sensible, pas de marques réelles, noms de personnes/entreprises fictifs variés.
7. Respect strict du format (lancer `node tools/validate.mjs <fichier>`).
