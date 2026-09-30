LE.register({
  id: 'a00',
  kind: 'guide',
  title: 'Mode d’emploi : réussir le TOEIC en 7 mois',
  subtitle: 'Comment fonctionne ce site, et la méthode pour passer de débutante à B1 / B2',
  level: 'A1',
  minutes: 10,
  goals: [
    'Comprendre l’objectif : B1 = 550 points, B2 = 785 points au TOEIC',
    'Savoir quoi faire chaque jour (45 à 60 minutes suffisent)',
    'Utiliser chaque partie du site : programme, cours, vocabulaire, TOEIC, progrès'
  ],
  blocks: [
    { type: 'h', text: 'L’objectif, en clair' },
    { type: 'p', html: 'Le <b>TOEIC Listening & Reading</b> est un test d’anglais professionnel : 200 questions à choix multiples, environ 2 heures, noté sur <b>990 points</b>. La moitié est de l’<b>écoute</b> (Listening), l’autre moitié de la <b>lecture</b> (Reading). Il n’y a ni oral ni écrit à produire : tout se joue sur ta capacité à <b>comprendre</b>.' },
    { type: 'table', head: ['Niveau (CECRL)', 'Score TOEIC minimum', 'Concrètement'], rows: [
      ['A2', '≈ 225', 'Tu comprends des phrases simples et des messages courts.'],
      ['<b>B1</b>', '<b>550</b>', 'Tu comprends l’essentiel d’un e-mail, d’une annonce ou d’une conversation au travail.'],
      ['<b>B2</b>', '<b>785</b>', 'Tu comprends des documents longs et des conversations naturelles, avec des détails.'],
      ['C1', '945', 'Niveau avancé, presque tout est compris sans effort.']
    ], caption: 'Seuils publiés par ETS : B1 = 275 en Listening + 275 en Reading ; B2 = 400 + 385.' },
    { type: 'box', style: 'info', title: 'Soyons honnêtes', html: 'Partir de zéro et atteindre le <b>B1 en 7 mois</b> est tout à fait réaliste avec 45 à 60 minutes par jour. Le <b>B2</b> est ambitieux mais possible si tu ajoutes un peu d’immersion chaque jour (séries, podcasts) et que tu restes <b>régulière</b>. Ce qui fait la différence n’est pas le talent : c’est la régularité.' },

    { type: 'h', text: 'Le programme en 4 phases' },
    { type: 'table', head: ['Phase', 'Semaines', 'Objectif', 'Ce que tu fais'], rows: [
      ['1 · Fondations', '1 à 8', 'A1 → A2', 'Les bases de la grammaire, la prononciation, les 1 000 premiers mots.'],
      ['2 · Construire', '9 à 16', 'A2 → B1', 'Le passé, le futur, les modaux, le vocabulaire du bureau, les parties 1, 2 et 5 du TOEIC.'],
      ['3 · Accélérer', '17 à 25', 'B1 → B2', 'Grammaire avancée, vocabulaire TOEIC, les 7 parties du test, premier TOEIC blanc.'],
      ['4 · Sprint final', '26 à 30', 'Objectif B2', 'TOEIC blancs, révisions ciblées, vitesse, préparation du jour J.']
    ] },
    { type: 'p', html: 'Chaque semaine du <b>Programme</b> contient 4 à 7 tâches. Les leçons se cochent <b>automatiquement</b> quand tu obtiens au moins 60 % aux exercices. Les tâches libres (immersion, révision) se cochent à la main. Si tu prends du retard, pas de panique : l’accueil te rappelle ce qui reste à faire.' },

    { type: 'h', text: 'Ta séance quotidienne (45 à 60 minutes)' },
    { type: 'list', ordered: true, items: [
      '<b>10 min — Flashcards</b> : fais tes « Révisions du jour » (onglet Vocabulaire). Le site te montre chaque mot juste avant que tu l’oublies : c’est la <b>répétition espacée</b>.',
      '<b>20 min — La leçon du jour</b> : lis la leçon, écoute chaque exemple (bouton 🔊) et <b>répète à voix haute</b>.',
      '<b>10 min — Exercices</b> : fais les exercices de la leçon. Lis bien les explications quand tu te trompes : c’est là que tu apprends le plus.',
      '<b>10 min — Immersion</b> : une vidéo, un podcast ou une série en anglais. Même si tu ne comprends pas tout, ton oreille s’habitue.'
    ] },
    { type: 'box', style: 'tip', title: 'Astuce motivation', html: 'Fais ta séance <b>à la même heure</b> chaque jour (par exemple dans les transports ou après le dîner). Mieux vaut 30 minutes tous les jours que 3 heures le dimanche. La série de jours 🔥 sur l’accueil est là pour t’encourager !' },

    { type: 'h', text: 'Les rubriques du site' },
    { type: 'table', head: ['Rubrique', 'À quoi elle sert'], rows: [
      ['🏠 Accueil', 'Ta séance du jour, ta semaine en cours, le compte à rebours jusqu’au TOEIC.'],
      ['🗓️ Programme', 'Les 30 semaines, tâche par tâche. Tu vois ce qui est fait et ce qui reste.'],
      ['📘 Cours', '47 leçons de grammaire, 7 leçons de prononciation et la liste des verbes irréguliers, tout expliqué en français.'],
      ['🧠 Vocabulaire', '24 thèmes (de « saluer » à « contrats et assurances »), avec flashcards et quiz.'],
      ['🎯 TOEIC', 'La méthode et des séries d’entraînement pour les 7 parties, 2 TOEIC blancs et 2 tests de niveau.'],
      ['📈 Progrès', 'Tes statistiques, tes scores, tes réglages et la sauvegarde de ta progression.']
    ] },

    { type: 'h', text: 'Bien utiliser l’audio' },
    { type: 'p', html: 'Tous les sons du site sont produits par la <b>synthèse vocale</b> de ton téléphone ou de ton ordinateur : ce n’est pas parfait, mais c’est clair et tu peux réécouter autant de fois que tu veux. Utilise des <b>écouteurs</b>, c’est plus confortable.' },
    { type: 'list', items: [
      'Tu peux régler la <b>vitesse de la voix</b> dans Progrès › Réglages (commence lentement, puis accélère au fil des mois).',
      'Sur iPhone, active le son (le bouton silencieux coupe parfois la voix). Tu peux télécharger des voix anglaises de meilleure qualité dans Réglages › Accessibilité › Contenu énoncé › Voix.',
      'Sur Android, installe les voix anglaises dans les réglages de « Synthèse vocale » (moteur Google).',
      'Le vrai TOEIC utilise des accents américains, britanniques, canadiens et australiens : le site varie les voix quand ton appareil le permet.'
    ] },
    { type: 'examples', items: [
      { en: 'Hello! Welcome to your English course.', fr: 'Bonjour ! Bienvenue dans ton cours d’anglais.', note: 'Appuie sur 🔊 pour tester le son.' },
      { en: 'Practice a little every day.', fr: 'Entraîne-toi un peu chaque jour.' }
    ] },

    { type: 'h', text: 'Pour aller plus loin (gratuit)' },
    { type: 'list', items: [
      '<b>BBC Learning English</b> : vidéos et podcasts pour apprenants, dont « 6 Minute English » (avec transcription).',
      '<b>British Council – LearnEnglish</b> : exercices de grammaire et d’écoute classés par niveau.',
      '<b>Les séries que tu connais déjà</b> : regarde-les en VO, d’abord avec les sous-titres français, puis anglais.',
      '<b>Le site officiel du TOEIC (ETS Global)</b> : exemples de questions officielles, inscription et dates des sessions.'
    ] },

    { type: 'h', text: 'Sauvegarde ta progression' },
    { type: 'p', html: 'Ta progression est enregistrée dans <b>ce navigateur</b>, sur cet appareil. Si tu changes de téléphone, si tu vides ton navigateur ou si tu veux travailler sur ordinateur et sur mobile, va dans <b>Progrès › Sauvegarde</b> : exporte le fichier, puis importe-le sur l’autre appareil.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• Objectif : <b>550 points (B1)</b>, puis <b>785 (B2)</b>.<br>• <b>45 à 60 minutes par jour</b>, tous les jours ou presque.<br>• Chaque jour : flashcards → leçon → exercices → immersion.<br>• Commence par le <b>test de niveau</b>, puis suis le programme semaine après semaine.<br>• Tu vas y arriver. Let’s go! 🚀' }
  ],
  exercises: []
});
