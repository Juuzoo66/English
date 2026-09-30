# Learn English — Objectif TOEIC 🎯

Un site complet pour **apprendre l'anglais de A à Z** et passer de **débutante (A1)** à **B1 / B2 au TOEIC** en **7 mois**.

Tout est expliqué **en français**, pensé pour le téléphone, gratuit, sans compte et sans publicité.

## Ce que contient le site

| Rubrique | Contenu |
|---|---|
| 🗓️ **Programme** | 30 semaines en 4 phases (Fondations → Construire → Accélérer → Sprint final), 149 tâches qui se cochent automatiquement |
| 📘 **Cours** | 47 leçons de grammaire (du verbe *be* aux inversions du TOEIC), 7 leçons de prononciation, 147 verbes irréguliers — chaque leçon a 12 à 16 exercices corrigés et expliqués |
| 🧠 **Vocabulaire** | 24 thèmes (≈ 1 300 mots et expressions), flashcards à **répétition espacée**, quiz QCM, écoute et écriture |
| 🎯 **TOEIC** | Méthode et pièges des 7 parties, séries d'entraînement corrigées (photos, questions-réponses, conversations, exposés, phrases et textes à compléter, compréhension écrite) |
| 🏁 **TOEIC blancs** | 2 tests réduits (≈ 100 questions, ≈ 1 h) en conditions réelles, avec **score estimé sur 990** et niveau CECRL |
| 📏 **Tests de niveau** | 2 versions de 48 questions (A1 → B2) pour mesurer ses progrès |
| 📈 **Progrès** | Série de jours, statistiques, historique, réglages de la voix, sauvegarde / import de la progression |

L'audio (exemples, dialogues, écoute TOEIC) utilise la **synthèse vocale du navigateur** : accents américain, britannique, australien et canadien quand l'appareil les propose.

## Objectif et méthode

- **B1 = 550 points**, **B2 = 785 points** au TOEIC Listening & Reading (seuils publiés par ETS).
- **45 à 60 minutes par jour** : flashcards (10 min) → leçon (20 min) → exercices (10 min) → immersion (10 min).
- Commencer par le **test de niveau**, puis suivre le programme semaine après semaine.

## Utiliser le site

- **En ligne** : activer GitHub Pages (voir ci-dessous) puis ouvrir l'adresse du site sur son téléphone. On peut l'**ajouter à l'écran d'accueil** comme une application.
- **En local** : `python3 -m http.server 8080` dans le dossier, puis ouvrir <http://localhost:8080>. (Ouvrir `index.html` directement fonctionne aussi.)

La progression est enregistrée dans le navigateur (`localStorage`). Pour changer d'appareil : *Progrès › Sauvegarde › Exporter*, puis *Importer* sur l'autre appareil.

### Publier avec GitHub Pages

1. Sur GitHub : **Settings › Pages**.
2. *Source* : **Deploy from a branch**, branche **main**, dossier **/ (root)**, puis **Save**.
3. Après une minute, le site est disponible à l'adresse `https://<utilisateur>.github.io/<nom-du-dépôt>/`.

## Structure

```
index.html              page unique (application sans framework, sans étape de build)
assets/css/style.css    styles (mobile d'abord, thème clair / sombre)
assets/js/              moteur : core (stockage), speech (voix), exercises, toeic, vocab, views, app (routeur)
data/catalog.js         catalogue de tous les contenus
data/plan.js            programme des 30 semaines
data/grammar|pron|vocab|toeic|mock|placement|ref|guide/   contenus pédagogiques (un fichier par leçon)
docs/CONTENT_SPEC.md    format exact des fichiers de contenu
tools/                  validation et tests
```

## Outils de vérification

```bash
node tools/validate.mjs          # vérifie le format de tous les contenus (docs/CONTENT_SPEC.md)
node tools/check-plan.mjs        # vérifie que le programme référence bien tous les contenus
node tools/quiz.mjs g08          # affiche les questions d'une leçon sans les corrigés
node tools/grade.mjs g08 r.json  # compare des réponses aux corrigés
python3 -m http.server 8080 &    # puis :
node tools/smoke.mjs             # ouvre toutes les pages dans Chromium et signale les erreurs
node tools/e2e.mjs               # répond à tous les exercices et vérifie scores et progression
```

Chaque fichier de contenu a été rédigé puis relu par un second correcteur qui a **résolu tous les exercices à l'aveugle** avant de comparer au corrigé, afin d'éliminer les réponses fausses ou ambiguës.

---

TOEIC® est une marque déposée d'ETS. Ce site indépendant n'est ni affilié à ETS ni approuvé par ETS.
