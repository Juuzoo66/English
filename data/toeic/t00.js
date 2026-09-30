LE.register({
  id: 't00',
  kind: 'guide',
  title: 'Le TOEIC de A à Z',
  subtitle: 'Tout ce qu’il faut savoir sur l’épreuve, le score, le chrono et le jour J',
  level: 'A2',
  minutes: 20,
  goals: [
    'Connaître le format du TOEIC : 2 sections, 7 parties, 200 questions, environ 2 heures',
    'Comprendre ton score et ce que valent concrètement <b>B1 (550)</b> et <b>B2 (785)</b>',
    'Gérer ton temps en Reading et appliquer les 10 règles d’or',
    'Préparer ton inscription et ton jour J sans stress'
  ],
  blocks: [
    { type: 'h', text: 'Le TOEIC, c’est quoi ?' },
    { type: 'p', html: 'Le <b>TOEIC</b> (<i>Test of English for International Communication</i>) est un test d’anglais créé par <b>ETS</b>, un organisme américain spécialisé dans les examens. Celui que tu vas passer s’appelle le <b>TOEIC Listening & Reading</b> : il mesure ta capacité à <b>comprendre</b> l’anglais à l’oral (<i>listening</i> = écoute) et à l’écrit (<i>reading</i> = lecture).' },
    { type: 'p', html: 'Bonne nouvelle : tu n’as <b>ni à parler, ni à écrire</b> de texte. Il n’y a que des questions à choix multiples (tu choisis A, B, C ou D ; seulement A, B ou C en partie 2). Autre bonne nouvelle : on ne peut pas « rater » le TOEIC. Il n’y a pas de note éliminatoire : tu obtiens un <b>score</b> entre 10 et 990, qui correspond à un niveau.' },
    { type: 'p', html: 'Les situations sont tirées de la <b>vie professionnelle et quotidienne</b> : réunions, e-mails, commandes, voyages d’affaires, annonces à l’aéroport, rendez-vous chez le médecin… Pas besoin de connaître un métier précis : tout le vocabulaire utile est dans les leçons de ce site.' },
    { type: 'list', items: [
      '<b>Trouver un emploi</b> : beaucoup d’employeurs demandent un score TOEIC sur le CV.',
      '<b>Valider un diplôme</b> : de nombreuses écoles d’ingénieurs et de commerce, et certaines formations universitaires, exigent un score minimum (souvent le niveau B2).',
      '<b>Évoluer</b> dans son entreprise : mobilité, poste à l’international, promotion.',
      '<b>Prouver ton niveau</b> de façon officielle et reconnue.'
    ] },
    { type: 'box', style: 'info', title: 'Combien de temps un score reste-t-il utile ?', html: 'On considère généralement qu’un score TOEIC est valable <b>2 ans</b> : au-delà, les écoles et les employeurs demandent souvent un résultat plus récent. Vérifie toujours ce qu’exige l’organisme qui te demande le score.' },

    { type: 'h', text: 'Le format en un coup d’œil' },
    { type: 'p', html: 'Le test compte <b>200 questions</b> réparties en <b>2 sections</b> et dure <b>environ 2 heures</b>, sans pause : d’abord le <b>Listening</b> (100 questions, environ 45 minutes), puis le <b>Reading</b> (100 questions, 75 minutes). Prévois un peu plus de temps sur place pour les formalités (vérification d’identité, consignes, questionnaire).' },
    { type: 'table', head: ['Partie', 'Nom', 'Questions', 'Ce que tu entends ou lis', 'Temps'], rows: [
      ['<b>1</b>', 'Photographies', '6', 'Une photo dans ton livret + <b>4 affirmations entendues</b> (non écrites). Tu choisis celle qui décrit la photo.', 'Rythme imposé par l’audio'],
      ['<b>2</b>', 'Questions-réponses', '25', 'Une question ou une phrase + <b>3 réponses</b> (A, B, C). <b>Rien n’est écrit</b> : tout est à l’oral.', 'Rythme imposé par l’audio'],
      ['<b>3</b>', 'Conversations', '39', '<b>13 conversations</b> × 3 questions écrites. Certaines à 3 personnes, certaines avec un graphique, certaines sur l’intention d’un locuteur (« Que veut dire l’homme quand il dit… ? »).', 'Rythme imposé par l’audio'],
      ['<b>4</b>', 'Exposés', '30', '<b>10 exposés</b> d’une seule personne (message, annonce, publicité…) × 3 questions écrites. Parfois un graphique.', 'Rythme imposé par l’audio'],
      ['<b>5</b>', 'Phrases à compléter', '30', 'Une phrase avec un trou, 4 mots ou groupes de mots au choix.', '<b>10 à 12 min</b>'],
      ['<b>6</b>', 'Textes à compléter', '16', '<b>4 textes</b> courts (e-mail, note…) avec 4 trous chacun, dont un où il faut insérer une <b>phrase entière</b>.', '<b>8 à 10 min</b>'],
      ['<b>7</b>', 'Compréhension écrite', '54', '<b>29 questions</b> sur des documents simples + <b>25 questions</b> sur des ensembles de 2 ou 3 documents liés.', '<b>≈ 55 min</b>']
    ], caption: '<b>Listening</b> = parties 1 à 4 (100 questions, ≈ 45 min). <b>Reading</b> = parties 5 à 7 (100 questions, 75 min).' },
    { type: 'box', style: 'warn', title: 'Une seule écoute !', html: 'Au TOEIC, chaque enregistrement n’est diffusé <b>qu’une seule fois</b> : pas de pause, pas de retour en arrière. Et tu entendras <b>quatre accents</b> : américain, britannique, canadien et australien. C’est pour ça que les exercices d’écoute de ce site varient les voix, et qu’une leçon entière y est consacrée : « Les accents du TOEIC : américain, britannique, australien, canadien ».' },
    { type: 'box', style: 'info', title: 'Papier ou ordinateur ?', html: 'Selon le centre et la formule choisie, le test se passe <b>sur papier</b> ou <b>sur ordinateur</b> : c’est indiqué au moment de l’inscription. Sur papier, tu réponds sur une <b>feuille de réponses séparée</b> en noircissant la case A, B, C ou D, et tu ne dois <b>rien écrire sur le livret</b> de questions : entraîne-toi donc à réfléchir « dans ta tête », sans prendre de notes.' },

    { type: 'h', text: 'Le score : de 10 à 990' },
    { type: 'p', html: 'Chaque section est notée de <b>5 à 495</b> : Listening + Reading = un total de <b>10 à 990</b>. Ce n’est pas simplement « nombre de bonnes réponses × 5 » : ETS convertit ton nombre de bonnes réponses en score, avec un barème qui varie légèrement d’une version du test à l’autre.' },
    { type: 'p', html: '<b>Il n’y a pas de points négatifs</b> : une mauvaise réponse ne te fait rien perdre, exactement comme une case vide. Conclusion : <b>réponds toujours à toutes les questions</b>, même au hasard.' },
    { type: 'p', html: 'Ton certificat indique aussi ton niveau selon le <b>CECRL</b> (Cadre européen commun de référence pour les langues : l’échelle A1, A2, B1, B2, C1, C2 utilisée dans toute l’Europe). ETS publie les scores <b>minimum</b> à atteindre pour chaque niveau :' },
    { type: 'table', head: ['Niveau CECRL', 'Listening (minimum)', 'Reading (minimum)', 'Total (environ)'], rows: [
      ['A2 — élémentaire', '110', '115', '≈ 225'],
      ['<b>B1 — seuil</b>', '<b>275</b>', '<b>275</b>', '<b>≈ 550</b>'],
      ['<b>B2 — avancé</b>', '<b>400</b>', '<b>385</b>', '<b>≈ 785</b>'],
      ['C1 — autonome', '490', '455', '≈ 945']
    ], caption: 'En dessous des seuils A2, on est au niveau débutant (A1 ou moins). Le niveau est attribué <b>section par section</b>.' },

    { type: 'h', text: 'Ton objectif B1 / B2, en clair' },
    { type: 'list', items: [
      '<b>B1</b> : au moins <b>275 en Listening ET 275 en Reading</b> (total ≥ 550). Tu comprends l’essentiel de messages clairs sur des sujets familiers : travail, voyages, rendez-vous.',
      '<b>B2</b> : au moins <b>400 en Listening ET 385 en Reading</b> (total ≥ 785). Tu comprends des discussions plus complexes et tu lis vite des documents professionnels variés.',
      'À titre indicatif seulement (le barème exact n’est pas public) : 550 correspond à un peu plus de la moitié des questions réussies, 785 à environ les trois quarts.'
    ] },
    { type: 'box', style: 'warn', title: 'Attention au total', html: 'Le total ne suffit pas : c’est le niveau de <b>chaque section</b> qui compte. Exemple : 450 en Listening + 335 en Reading = 785 au total, mais le certificat indiquera <b>B2 en Listening</b> et seulement <b>B1 en Reading</b>. Travaille donc les deux sections de façon équilibrée.' },
    { type: 'box', style: 'tip', title: '7 mois : une stratégie en deux temps', html: 'Partir de débutante pour arriver à <b>B1 (550)</b> en 7 mois est un objectif <b>réaliste</b> avec 45 à 60 minutes de travail par jour. <b>B2 (785)</b> est plus <b>ambitieux</b> : il demandera de la régularité et du « bonus » (séries et podcasts en anglais, lectures). Vise d’abord 550, puis pousse vers 785 : chaque point gagné compte.' },

    { type: 'h', text: 'Gérer son temps en Reading' },
    { type: 'p', html: 'En Listening, c’est l’enregistrement qui impose le rythme. En Reading, c’est <b>toi</b> qui gères tes 75 minutes, et c’est là que beaucoup de candidats perdent des points : ils n’arrivent pas au bout de la partie 7. Voici le découpage conseillé :' },
    { type: 'table', head: ['Partie', 'Questions', 'Temps conseillé', 'Repère'], rows: [
      ['5 — Phrases à compléter', '30', '10 à 12 min', '≈ 20 secondes par phrase'],
      ['6 — Textes à compléter', '16', '8 à 10 min', '≈ 2 min par texte'],
      ['7 — Compréhension écrite', '54', '≈ 55 min', '≈ 1 min par question, lecture comprise'],
      ['<b>Total</b>', '<b>100</b>', '<b>75 min</b>', '—']
    ] },
    { type: 'box', style: 'tip', title: 'Chronomètre-toi dès maintenant', html: 'Pendant tes entraînements, mesure ton temps partie par partie : ce rythme doit devenir automatique. Si tu es en retard, ne sacrifie pas la partie 7 : mieux vaut deviner deux phrases de la partie 5 que laisser dix questions de la partie 7 sans les lire.' },

    { type: 'h', text: 'Les 10 règles d’or' },
    { type: 'list', ordered: true, items: [
      '<b>Réponds à toutes les questions.</b> Pas de points négatifs : une case vide rapporte toujours 0, une réponse au hasard a 1 chance sur 4 (1 sur 3 en partie 2). S’il reste des questions à la fin, coche une lettre au hasard.',
      '<b>Ne reste jamais bloquée.</b> Une question difficile rapporte autant qu’une facile. Tu hésites ? Choisis ta meilleure option et passe à la suivante : en Listening l’audio n’attend pas, en Reading le temps perdu te manquera à la fin.',
      '<b>Utilise les consignes pour prendre de l’avance.</b> Elles sont toujours les mêmes : pendant qu’elles sont lues, regarde les photos de la partie 1, puis, au début des parties 3 et 4, lis déjà les premières questions.',
      '<b>Lis les questions des parties 3 et 4 avant l’écoute.</b> Tu sauras quoi chercher (qui ? où ? quel problème ?). Dès que tu as répondu aux 3 questions, lis les 3 suivantes.',
      '<b>En partie 2, concentre-toi sur les 3 premiers mots</b> (<i>Where did you…?</i>, <i>Could you…?</i>) : ils annoncent le type de réponse attendu.',
      '<b>Méfie-toi des mots répétés et des sons proches.</b> Une réponse qui reprend un mot de la question ou un mot qui sonne pareil (<i>copy / coffee</i>) est très souvent un piège.',
      '<b>En partie 5, regarde d’abord les 4 options.</b> Si ce sont 4 formes du même mot (<i>decide, decision, decisive, decisively</i>), c’est une question de grammaire : pas toujours besoin de lire toute la phrase.',
      '<b>En partie 7, lis la question avant le texte</b> et va chercher l’information (nom, date, chiffre) au lieu de tout lire mot à mot.',
      '<b>Respecte ton chrono en Reading</b> : partie 5 ≈ 10–12 min, partie 6 ≈ 8–10 min, partie 7 ≈ 55 min.',
      '<b>Entraîne-toi en conditions réelles.</b> Écoute sans mettre sur pause, fais les TOEIC blancs d’une traite, et travaille un peu chaque jour plutôt que beaucoup une fois par semaine.'
    ] },

    { type: 'h', text: 'L’inscription' },
    { type: 'list', items: [
      '<b>Où ?</b> Sur le site officiel d’<b>ETS Global</b> (France), qui liste les sessions dans des centres agréés partout en France. Ton école ou ton employeur peut aussi organiser une session.',
      '<b>Quand ?</b> Choisis une date qui te laisse le temps de faire <b>au moins deux TOEIC blancs</b> complets avant, et inscris-toi plusieurs semaines à l’avance.',
      '<b>Combien ?</b> Les tarifs évoluent : consulte le site d’ETS Global. Le TOEIC peut être financé par ton <b>CPF</b> (Compte personnel de formation) : vérifie les conditions actuelles et tes droits sur <b>moncompteformation.gouv.fr</b>.',
      '<b>Ton nom</b> doit être écrit exactement comme sur la pièce d’identité que tu présenteras le jour J.'
    ] },

    { type: 'h', text: 'Le jour J : ta checklist' },
    { type: 'list', items: [
      '<b>Pièce d’identité officielle</b> en cours de validité, avec photo : <b>obligatoire</b>. Sans elle, tu ne peux pas passer le test.',
      'Ta <b>convocation</b>, et tout ce qu’elle te demande d’apporter.',
      'Arrive <b>en avance</b> (au moins 30 minutes) : les formalités prennent du temps et le stress du retard fait perdre des points.',
      '<b>Téléphone éteint et rangé</b> : aucun appareil électronique n’est autorisé (montre connectée comprise). Pas de dictionnaire ni de notes non plus.',
      'Passe aux toilettes et bois un peu avant de commencer : les deux sections s’enchaînent <b>sans pause</b>, pendant environ 2 heures.',
      'La veille : une bonne nuit de sommeil plutôt qu’une révision tardive.'
    ] },

    { type: 'h', text: 'Comment ce site te prépare à chaque partie' },
    { type: 'table', head: ['Partie', 'Leçon de stratégie', 'Leçons qui t’aident le plus'], rows: [
      ['1', 'Partie 1 — Photographies', 'Le présent continu (be + -ing) ; La voix passive'],
      ['2', 'Partie 2 — Questions-réponses', 'Les mots interrogatifs (wh- questions) ; Question tags, so / neither et réponses courtes'],
      ['3', 'Partie 3 — Conversations', 'Communication pro : e-mails, téléphone, réunions ; L’anglais parlé réel : formes faibles, liaisons, contractions'],
      ['4', 'Partie 4 — Exposés', 'Chiffres, lettres, dates et prix à l’oral ; Les accents du TOEIC : américain, britannique, australien, canadien'],
      ['5', 'Partie 5 — Phrases à compléter', 'La formation des mots : nom, verbe, adjectif, adverbe ; Les prépositions après verbes, noms et adjectifs'],
      ['6', 'Partie 6 — Textes à compléter', 'Les connecteurs logiques : although, despite, however… ; Present perfect ou prétérit ? (for, since, yet, already…)'],
      ['7', 'Partie 7 — Compréhension écrite', 'Tout le vocabulaire thématique, par exemple : Achats, commandes, livraisons et stocks ; Recrutement et ressources humaines']
    ], caption: 'Le planning semaine par semaine est détaillé dans « Mode d’emploi : réussir le TOEIC en 7 mois ».' },
    { type: 'p', html: 'Pour mesurer tes progrès : fais le « Test de niveau — version A » au début, le « Test de niveau — version B » à mi-parcours, puis le « TOEIC blanc n°1 » et le « TOEIC blanc n°2 » dans les dernières semaines. Ces TOEIC blancs sont en format réduit (environ la moitié d’un vrai test) : fais-les d’une traite, sans pause.' },

    { type: 'box', style: 'key', title: 'À retenir', html: '• <b>200 questions</b>, ≈ 2 h : Listening (parties 1–4, ≈ 45 min) puis Reading (parties 5–7, 75 min).<br>• Score de <b>10 à 990</b> ; <b>B1</b> = 275 + 275 (≈ 550), <b>B2</b> = 400 + 385 (≈ 785).<br>• <b>Pas de points négatifs</b> : réponds à tout. <b>Une seule écoute</b>, 4 accents.<br>• Reading : P5 ≈ 10–12 min, P6 ≈ 8–10 min, P7 ≈ 55 min.<br>• Jour J : <b>pièce d’identité obligatoire</b>, arrivée en avance, téléphone rangé.' }
  ],
  exercises: [
    { type: 'mcq', q: 'Combien de questions compte le TOEIC Listening & Reading ?', options: ['100', '150', '200', '250'], answer: 2, explain: '<b>200 questions</b> : 100 en Listening (parties 1 à 4) et 100 en Reading (parties 5 à 7).' },
    { type: 'mcq', q: 'Quel est le score maximum au TOEIC Listening & Reading ?', options: ['495', '900', '990', '1 000'], answer: 2, explain: 'Chaque section est notée sur <b>495</b> : 495 + 495 = <b>990</b>. Le score minimum est 10 (5 + 5).' },
    { type: 'mcq', q: 'Tu n’as aucune idée de la bonne réponse. Que fais-tu ?', options: ['Je laisse la case vide pour ne pas perdre de points.', 'Je réponds quand même : il n’y a pas de points négatifs.', 'Je demande au surveillant de réécouter l’enregistrement.'], answer: 1, explain: 'Il n’y a <b>pas de points négatifs</b> : une réponse au hasard peut rapporter des points, une case vide jamais. Et l’audio n’est diffusé qu’une seule fois.' },
    { type: 'mcq', q: 'Combien de fois entends-tu chaque enregistrement de la section Listening ?', options: ['Une seule fois', 'Deux fois', 'Autant de fois que tu veux'], answer: 0, explain: 'Chaque enregistrement n’est diffusé <b>qu’une seule fois</b>. C’est pour ça qu’il faut s’entraîner à écouter sans mettre sur pause.' },
    { type: 'mcq', q: 'Dans quelle partie n’as-tu <b>ni photo ni texte</b> sous les yeux : tu entends une question, puis trois réponses ?', options: ['Partie 1', 'Partie 2', 'Partie 3', 'Partie 4'], answer: 1, explain: 'En <b>partie 2</b> (questions-réponses), tout est à l’oral : la question et les 3 réponses (A, B, C). En partie 1, tu as une photo ; en parties 3 et 4, les questions sont écrites.' },
    { type: 'mcq', q: 'Quelle partie du TOEIC compte le plus de questions ?', options: ['Partie 2', 'Partie 3', 'Partie 5', 'Partie 7'], answer: 3, explain: 'La <b>partie 7</b> (compréhension écrite) compte <b>54 questions</b>. Viennent ensuite la partie 3 (39), la partie 5 (30) et la partie 2 (25).' },
    { type: 'mcq', q: 'Quel score minimum faut-il en Listening pour obtenir le niveau <b>B2</b> dans cette section ?', options: ['275', '385', '400', '490'], answer: 2, explain: 'D’après ETS, le B2 commence à <b>400</b> en Listening (et à 385 en Reading). 275 = B1, 490 = C1.' },
    { type: 'mcq', q: 'Quel total faut-il viser, au minimum, pour le niveau <b>B1</b> ?', options: ['400', '550', '785', '945'], answer: 1, explain: 'B1 = 275 en Listening + 275 en Reading, soit <b>environ 550</b>. 785 correspond au B2 et 945 au C1.' },
    { type: 'mcq', q: 'En Reading, combien de temps est-il conseillé de garder pour la partie 7 ?', options: ['Environ 15 minutes', 'Environ 30 minutes', 'Environ 55 minutes', 'Les 75 minutes entières'], answer: 2, explain: 'Sur 75 minutes : partie 5 ≈ 10–12 min, partie 6 ≈ 8–10 min, il reste donc <b>environ 55 minutes</b> pour les 54 questions de la partie 7.' },
    { type: 'mcq', q: 'Le jour du test, qu’est-ce qui est <b>obligatoire</b> ?', options: ['Un dictionnaire bilingue', 'Une pièce d’identité officielle avec photo', 'Ton téléphone allumé pour surveiller l’heure', 'Une calculatrice'], answer: 1, explain: 'Sans <b>pièce d’identité officielle</b> en cours de validité, tu ne peux pas passer le test. Les dictionnaires et les appareils électroniques sont interdits.' }
  ]
});
