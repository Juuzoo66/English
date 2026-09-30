LE.register({
  id: 't02',
  kind: 'toeic',
  part: 2,
  title: 'Partie 2 — Questions-réponses',
  subtitle: 'Entendre une question, puis choisir la seule réponse logique parmi trois',
  level: 'A2',
  minutes: 35,
  goals: [
    'Reconnaître en quelques mots le type de question : wh-, oui / non, choix, question-tag, demande, suggestion',
    'Savoir quel type de réponse attendre pour chaque mot interrogatif',
    'Repérer les réponses indirectes, très fréquentes au TOEIC',
    'Éviter les pièges : mot répété, son proche, réponse à une autre question, « yes / no » hors sujet'
  ],
  blocks: [
    { type: 'h', text: 'Comment se passe la partie 2 ?' },
    { type: 'p', html: 'La partie 2 compte <b>25 questions</b>. Pour chacune, tu entends une question (ou une simple phrase), puis <b>3 réponses</b> (A, B, C). <b>Rien n’est écrit</b> dans ton livret : ni la question, ni les réponses. Tout est entendu <b>une seule fois</b>, et tu as environ 5 secondes pour cocher avant la question suivante.' },
    { type: 'p', html: 'La personne qui pose la question et celle qui répond ont souvent des voix et des accents différents : un homme américain peut répondre à une femme britannique, par exemple.' },
    { type: 'box', style: 'info', title: 'Pourquoi cette partie est particulière', html: 'Sans photo ni texte, c’est la partie où la <b>concentration</b> compte le plus. Mais les types de questions sont peu nombreux et se reconnaissent vite : avec de l’entraînement, tu sauras dès les premiers mots quel genre de réponse chercher. Et comme il n’y a que 3 réponses, même au hasard tu as 1 chance sur 3.' },

    { type: 'h', text: 'Les types de questions' },
    { type: 'table', head: ['Type', 'Exemple', 'Ce qu’on attend'], rows: [
      ['<b>Question wh-</b> (who, where, when, what, which, why, how)', '<i>Where’s the meeting?</i>', 'une information précise (lieu, moment, personne…) — <b>jamais</b> <i>yes / no</i>'],
      ['<b>Question fermée</b> (oui / non)', '<i>Is the report ready?</i>', '<i>yes / no</i>, ou une réponse qui le sous-entend (<i>Almost.</i>)'],
      ['<b>Question à choix</b> (avec <i>or</i>)', '<i>Should we meet today or tomorrow?</i>', 'l’un des deux choix, les deux, ou aucun — en général pas <i>yes / no</i>'],
      ['<b>Question-tag</b> (… n’est-ce pas ?)', '<i>You’re coming, aren’t you?</i>', 'comme une question fermée'],
      ['<b>Affirmation</b>', '<i>The printer is out of paper.</i>', 'une réaction logique : solution, accord, surprise…'],
      ['<b>Demande</b>', '<i>Could you send me the file?</i>', 'accepter ou refuser (<i>Sure.</i> / <i>Sorry, I’m busy.</i>)'],
      ['<b>Proposition, suggestion</b>', '<i>Why don’t we take a break?</i><br><i>Would you like some help?</i>', 'accepter ou refuser (<i>Good idea.</i> / <i>Yes, please.</i> / <i>No thanks, I’m fine.</i>)']
    ] },
    { type: 'box', style: 'warn', title: '« Why don’t we…? » n’est pas une question sur la raison', html: '<b>Why don’t we / Why don’t you…?</b> = « Et si on… ? », « Tu devrais… » : c’est une <b>suggestion</b>. On y répond par <i>Good idea!</i>, <i>Sounds good.</i> ou <i>Maybe later.</i> Une réponse qui commence par <i>Because…</i> est presque toujours un piège.<br>Même chose avec <b>Would you mind…?</b> (« Ça te dérangerait de… ? ») : <i>Not at all</i> (« pas du tout ») veut dire <b>d’accord, je le fais</b> !' },

    { type: 'h', text: 'Mot interrogatif → réponse attendue' },
    { type: 'p', html: 'Le <b>premier mot</b> de la question t’indique presque toujours ce que la bonne réponse doit contenir. Révise-les dans la leçon « Les mots interrogatifs (wh- questions) ».' },
    { type: 'table', head: ['Mot', 'Sens', 'Réponse attendue', 'Exemple de bonne réponse'], rows: [
      ['<b>Who</b>', 'qui', 'une personne, un service', '<i>Ms. Chen.</i> / <i>The sales team.</i>'],
      ['<b>Whose</b>', 'à qui', 'un possesseur', '<i>It’s Kenji’s.</i>'],
      ['<b>Where</b>', 'où', 'un lieu', '<i>In the lobby.</i> / <i>On the third floor.</i>'],
      ['<b>When</b>', 'quand', 'un moment', '<i>Next Monday.</i> / <i>After lunch.</i>'],
      ['<b>What time</b>', 'à quelle heure', 'une heure', '<i>At noon.</i> / <i>Around 3:30.</i>'],
      ['<b>What</b>', 'que, quel', 'une chose, une information', '<i>A new laptop.</i>'],
      ['<b>Which</b>', 'lequel, quel (parmi plusieurs)', 'un élément d’un choix', '<i>The blue one.</i>'],
      ['<b>Why</b>', 'pourquoi', 'une raison, un but', '<i>Because the flight was delayed.</i> / <i>To meet a client.</i>'],
      ['<b>How</b>', 'comment', 'un moyen, une manière, un avis', '<i>By train.</i> / <i>It went well.</i>'],
      ['<b>How much</b>', 'combien (prix, quantité)', 'un prix, une quantité', '<i>About fifty dollars.</i>'],
      ['<b>How many</b>', 'combien (nombre)', 'un nombre', '<i>Twelve people.</i>'],
      ['<b>How long</b>', 'combien de temps', 'une durée', '<i>For two weeks.</i> / <i>About an hour.</i>'],
      ['<b>How often</b>', 'à quelle fréquence', 'une fréquence', '<i>Once a month.</i>']
    ], caption: 'Une raison ne commence pas toujours par <i>because</i> : <i>Why is the office closed? — It’s a public holiday.</i>' },
    { type: 'examples', items: [
      { en: "Who's organizing the conference? — Ms. Lindqvist is.", fr: 'Qui organise la conférence ? — C’est Mme Lindqvist.' },
      { en: "Where should I put these files? — On my desk, please.", fr: 'Où est-ce que je mets ces dossiers ? — Sur mon bureau, s’il te plaît.', accent: 'en-GB' },
      { en: "When does the flight leave? — At a quarter past six.", fr: 'Quand part le vol ? — À six heures et quart.' },
      { en: "How long will the repairs take? — About two days.", fr: 'Combien de temps dureront les réparations ? — Environ deux jours.', accent: 'en-AU' },
      { en: "Why is the office closed today? — It's a public holiday.", fr: 'Pourquoi le bureau est-il fermé aujourd’hui ? — C’est un jour férié.', accent: 'en-CA' }
    ] },

    { type: 'h', text: 'Les réponses indirectes : très fréquentes !' },
    { type: 'p', html: 'Au TOEIC, la bonne réponse <b>ne répond souvent pas directement</b>. Comme dans la vraie vie, la personne peut dire qu’elle ne sait pas, renvoyer vers quelqu’un d’autre, poser une autre question ou donner une information qui <b>sous-entend</b> la réponse. Ces réponses sont souvent la bonne option, justement parce qu’elles ne répètent aucun mot de la question.' },
    { type: 'examples', items: [
      { en: "When is the budget meeting? — I'm not sure, let me check.", fr: 'Quand a lieu la réunion budgétaire ? — Je ne suis pas sûre, je vérifie.' },
      { en: "Who's in charge of the order? — Ask Maria. She'll know.", fr: 'Qui s’occupe de la commande ? — Demande à Maria. Elle saura.', accent: 'en-GB' },
      { en: "Where's the new printer? — Didn't you get the e-mail about it?", fr: 'Où est la nouvelle imprimante ? — Tu n’as pas reçu l’e-mail à ce sujet ?', note: 'Répondre par une autre question est très courant.' },
      { en: "Is the report ready? — I'm still working on it.", fr: 'Le rapport est prêt ? — J’y travaille encore.', note: 'Ça veut dire « non », sans le dire.' },
      { en: "Are you coming to lunch? — I have to finish this first.", fr: 'Tu viens déjeuner ? — Je dois d’abord finir ça.', accent: 'en-AU' }
    ] },

    { type: 'h', text: 'Les pièges classiques' },
    { type: 'table', head: ['Piège', 'Question', 'Réponse piège', 'Pourquoi c’est faux'], rows: [
      ['<b>Répétition du même mot</b>', 'Where’s the <b>meeting</b>?', 'I enjoyed the <b>meeting</b>.', 'Même mot, mais ça ne dit pas <b>où</b>.'],
      ['<b>Son proche</b>', 'Can you make some <b>copies</b>?', 'I’d like a <b>coffee</b>.', '<i>copy</i> et <i>coffee</i> se ressemblent à l’oral.'],
      ['<b>Réponse à un autre mot interrogatif</b>', '<b>When</b> does the train leave?', 'At the station.', 'Répond à <i>Where</i>, pas à <i>When</i>.'],
      ['<b>Yes / No à une question wh-</b>', '<b>Where</b> is the file?', 'Yes, it is.', 'On ne répond jamais oui ou non à <i>where, when, who…</i>'],
      ['<b>Mauvais temps ou mauvaise personne</b>', '<b>Did you</b> call the client?', 'Yes, <b>he will</b>.', 'Question au passé sur « tu » ; réponse au futur sur « il ».']
    ] },
    { type: 'box', style: 'tip', title: 'Répétition = alarme, pas preuve', html: 'Une réponse qui reprend un mot de la question est <b>souvent</b> un piège… mais pas toujours ! <i>Is the meeting today? — No, the meeting was moved to Friday.</i> est une très bonne réponse. Quand tu entends un mot répété, <b>méfie-toi</b>, puis vérifie si la réponse a vraiment un sens.' },
    { type: 'pairs', items: [
      { a: 'copy', b: 'coffee', note: 'photocopie / café' },
      { a: 'lunch', b: 'launch', note: 'déjeuner / lancement (d’un produit)' },
      { a: 'contact', b: 'contract', note: 'contact / contrat' },
      { a: 'walk', b: 'work', note: 'marcher / travailler' },
      { a: 'where', b: 'were', note: 'où / étaient' },
      { a: 'fair', b: 'fare', note: 'salon (<i>trade fair</i>) / prix du billet : même prononciation !' }
    ] },

    { type: 'h', text: 'La méthode' },
    { type: 'list', ordered: true, items: [
      '<b>Vide ta tête</b> avant chaque question : la précédente est terminée, même si tu as hésité.',
      '<b>Capte les 3 premiers mots</b> : <i>Where did you…</i>, <i>Could you…</i>, <i>Why don’t we…</i> Ils te disent quel type de réponse attendre.',
      '<b>Élimine au fur et à mesure</b> : barre mentalement une réponse dès qu’elle ne colle pas (mauvais type d’info, <i>yes / no</i> à une question wh-, mot répété sans logique).',
      '<b>Garde la meilleure</b> : en cas de doute, préfère la réponse indirecte cohérente plutôt que celle qui répète un mot de la question.',
      '<b>Coche et passe</b> tout de suite à la suivante.'
    ] },
    { type: 'examples', items: [
      { en: "Could you help me move these boxes? — Sure, where do they go?", fr: 'Tu peux m’aider à déplacer ces cartons ? — Bien sûr, où vont-ils ?' },
      { en: "Would you like me to book a taxi? — That would be great, thanks.", fr: 'Veux-tu que je réserve un taxi ? — Ce serait super, merci.', accent: 'en-GB' },
      { en: "Why don't we order lunch in? — Good idea, I'm really hungry.", fr: 'Et si on se faisait livrer le déjeuner ? — Bonne idée, j’ai très faim.' },
      { en: "Would you mind turning off the lights? — Not at all.", fr: 'Ça te dérangerait d’éteindre les lumières ? — Pas du tout (je le fais).', accent: 'en-CA' }
    ] },
    { type: 'dialog', title: 'Quatre échanges typiques', accent: 'en-US', lines: [
      { speaker: 'W', en: "You've sent the invoice, haven't you?", fr: 'Tu as envoyé la facture, n’est-ce pas ?' },
      { speaker: 'M', en: 'Yes, this morning.', fr: 'Oui, ce matin.' },
      { speaker: 'W', en: 'Should we take a taxi or walk to the hotel?', fr: 'On prend un taxi ou on va à l’hôtel à pied ?' },
      { speaker: 'M', en: "Let's walk. It's only five minutes away.", fr: 'Allons-y à pied. C’est à cinq minutes seulement.' },
      { speaker: 'W', en: 'The projector in Room 4 is broken.', fr: 'Le projecteur de la salle 4 est en panne.' },
      { speaker: 'M', en: "I'll call the IT department.", fr: 'J’appelle le service informatique.' },
      { speaker: 'W', en: "Whose jacket is this?", fr: 'À qui est cette veste ?' },
      { speaker: 'M', en: "I think it's Omar's.", fr: 'Je crois que c’est celle d’Omar.' }
    ] },
    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: '25 questions sur les 100 du Listening : un quart de l’écoute ! C’est aussi la partie qui prépare le mieux aux conversations de la partie 3. Pour progresser, travaille les leçons « Les mots interrogatifs (wh- questions) » et « Question tags, so / neither et réponses courtes », puis entraîne-toi chaque jour avec les séries ci-dessous.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• 25 questions, 3 réponses, <b>rien d’écrit</b>, une seule écoute.<br>• Les <b>3 premiers mots</b> annoncent le type de réponse : <i>Where</i> → un lieu, <i>When</i> → un moment…<br>• Jamais <i>yes / no</i> à une question <i>wh-</i>, et presque jamais à une question à choix (<i>or</i>).<br>• <i>Why don’t we…?</i> = suggestion ; <i>Would you mind…? — Not at all.</i> = d’accord.<br>• Les réponses <b>indirectes</b> (<i>Let me check.</i> / <i>Ask Maria.</i>) sont souvent les bonnes ; les mots répétés et les sons proches sont souvent des pièges.' }
  ],
  sets: [
    { title: 'Série 1 — Who, where, when', level: 'A2', items: [
      {
        question: "Who's in charge of the new project?",
        responses: ["It starts next week.", "Ms. Tanaka is.", "Yes, it's a big project."],
        answer: 1, speakers: ['W', 'M'],
        explain: '<b>Who</b> → une personne : <i>Ms. Tanaka is</i> (c’est Mme Tanaka). (A) répond à <i>When</i>. (C) répond <i>Yes</i> à une question en <i>Who</i> et répète « project ».'
      },
      {
        question: "Where did you park your car?",
        responses: ["Behind the office building.", "Around six o'clock.", "Yes, it's a new car."],
        answer: 0, speakers: ['M', 'W'], accent: 'en-GB',
        explain: '<b>Where</b> → un lieu : derrière l’immeuble de bureaux. (B) répond à <i>When / What time</i>. (C) répond <i>Yes</i> et répète « car ».'
      },
      {
        question: "When does the training session begin?",
        responses: ["Right after lunch.", "In Conference Room B.", "The train was late."],
        answer: 0, speakers: ['W', 'M'], accent: 'en-AU',
        explain: '<b>When</b> → un moment : juste après le déjeuner. (B) répond à <i>Where</i>. (C) Piège de son : <i>train</i> ressemble à <i>training</i>.'
      },
      {
        question: "Who should I send the invoice to?",
        responses: ["By express mail.", "Yesterday afternoon.", "Mr. Alvarez in accounting."],
        answer: 2, speakers: ['M', 'W2'],
        explain: '<b>Who… to?</b> → une personne : M. Alvarez, au service comptabilité. (A) répond à <i>How</i> (comment l’envoyer). (B) répond à <i>When</i>.'
      },
      {
        question: "Where's the nearest post office?",
        responses: ["Some stamps, please.", "On Maple Street, next to the bank.", "It opens at nine."],
        answer: 1, speakers: ['W', 'M'], accent: 'en-GB',
        explain: '<b>Where</b> → un lieu : dans Maple Street, à côté de la banque. (A) Association d’idées (timbres ↔ poste), mais ce n’est pas un lieu. (C) répond à <i>What time / When</i>.'
      },
      {
        question: "When is the sales report due?",
        responses: ["On the top shelf.", "I'll report it to the manager.", "By Friday at noon."],
        answer: 2, speakers: ['M', 'W'],
        explain: '<i>due</i> = à rendre. <b>When</b> → un moment : vendredi midi au plus tard. (A) répond à <i>Where</i>. (B) répète « report », ici avec un autre sens (<i>report</i> = signaler).'
      },
      {
        question: "Who's responsible for ordering office supplies?",
        responses: ["Ask Maria. She'll know.", "Some pens and paper.", "On the second floor."],
        answer: 0, speakers: ['W', 'M'], accent: 'en-CA',
        explain: 'Réponse <b>indirecte</b> : il ne sait pas, mais il renvoie vers Maria, qui connaît la réponse. (B) répond à <i>What</i> (quelles fournitures). (C) répond à <i>Where</i>.'
      },
      {
        question: "Where can I find extra printer paper?",
        responses: ["Last Tuesday.", "In the supply closet.", "It prints in color."],
        answer: 1, speakers: ['M', 'W'],
        explain: '<b>Where</b> → un lieu : dans le placard des fournitures. (A) répond à <i>When</i>. (C) reprend l’idée d’imprimer, mais ne dit pas où trouver le papier.'
      },
      {
        question: "When will the new manager start?",
        responses: ["In the marketing department.", "Yes, she's very experienced.", "On the first of next month."],
        answer: 2, speakers: ['W', 'M'],
        explain: '<b>When</b> → un moment : le 1ᵉʳ du mois prochain. (A) répond à <i>Where</i>. (B) répond <i>Yes</i> à une question en <i>When</i>.'
      },
      {
        question: "Who left these boxes in the corridor?",
        responses: ["The delivery driver, I think.", "They're full of brochures.", "He left an hour ago."],
        answer: 0, speakers: ['M', 'W'], accent: 'en-GB',
        explain: '<b>Who</b> → une personne : le livreur, je crois. (B) répond à <i>What</i> (ce qu’il y a dedans). (C) répète « left » avec un autre sens (<i>leave</i> = partir) et ne dit pas qui a laissé les cartons.'
      }
    ] },
    { title: 'Série 2 — What, which, why, how', level: 'A2', items: [
      {
        question: "What time does the store close?",
        responses: ["It's close to the station.", "At eight on weekdays.", "Yes, it closed early."],
        answer: 1, speakers: ['W', 'M'],
        explain: '<b>What time</b> → une heure : à 8 h en semaine. (A) Piège : <i>close</i> (proche, prononcé avec un « s ») n’est pas <i>close</i> (fermer, prononcé avec un « z »). (C) répond <i>Yes</i> à une question en <i>What</i>.'
      },
      {
        question: "Which color do you prefer for the new logo?",
        responses: ["A graphic designer.", "Yes, I prefer it.", "The dark blue one."],
        answer: 2, speakers: ['M', 'W'], accent: 'en-GB',
        explain: '<b>Which</b> → un choix : le bleu foncé (<i>one</i> remplace <i>color</i>). (A) répond à <i>Who</i>. (B) répond <i>Yes</i> et répète « prefer ».'
      },
      {
        question: "Why was the staff meeting canceled?",
        responses: ["In the main conference room.", "Because the director is out sick.", "Yes, at three o'clock."],
        answer: 1, speakers: ['W', 'M2'], accent: 'en-AU',
        explain: '<b>Why</b> → une raison : parce que le directeur est malade. (A) répond à <i>Where</i>. (C) répond <i>Yes</i> et donne une heure.'
      },
      {
        question: "How did you get to the conference?",
        responses: ["I took the train.", "It was very interesting.", "Last spring."],
        answer: 0, speakers: ['M', 'W'],
        explain: '<b>How did you get to…?</b> → un moyen de transport : j’ai pris le train. (B) répond à une autre question, <i>How was the conference?</i> (c’était comment ?). (C) répond à <i>When</i>.'
      },
      {
        question: "What did you think of the new software?",
        responses: ["About two hundred dollars.", "I think so.", "It's much faster than the old one."],
        answer: 2, speakers: ['W', 'M'], accent: 'en-CA',
        explain: '<b>What did you think of…?</b> = qu’en as-tu pensé ? → un avis : il est bien plus rapide que l’ancien. (A) répond à <i>How much</i>. (B) répète « think » mais répond comme à une question oui / non.'
      },
      {
        question: "Which hotel are you staying at?",
        responses: ["The one near the convention center.", "For three nights.", "Yes, I booked a room."],
        answer: 0, speakers: ['M', 'W'],
        explain: '<b>Which</b> → un choix : celui qui est près du centre des congrès. (B) répond à <i>How long</i>. (C) répond <i>Yes</i> à une question en <i>Which</i>.'
      },
      {
        question: "Why don't we take a short break?",
        responses: ["Because I was tired.", "It broke last week.", "Good idea. Let's stop for ten minutes."],
        answer: 2, speakers: ['W', 'M'], accent: 'en-GB',
        explain: '<b>Why don’t we…?</b> n’est pas une vraie question « pourquoi » : c’est une <b>suggestion</b> (« Et si on faisait une pause ? ») → on l’accepte : bonne idée, arrêtons-nous dix minutes. (A) Piège <i>Because</i>, et au passé en plus. (B) Piège de son : <i>broke</i> ressemble à <i>break</i>.'
      },
      {
        question: "How often do you visit the Toronto office?",
        responses: ["For about a week.", "About twice a year.", "It's a very modern office."],
        answer: 1, speakers: ['M', 'W2'], accent: 'en-AU',
        explain: '<b>How often</b> → une fréquence : environ deux fois par an. (A) répond à <i>How long</i> (une durée). (C) répète « office » et décrit le bureau.'
      },
      {
        question: "How much does it cost to ship this package?",
        responses: ["About fifteen dollars.", "It'll arrive on Monday.", "The ship leaves at noon."],
        answer: 0, speakers: ['W', 'M'],
        explain: '<b>How much</b> → un prix : environ 15 dollars. (B) répond à <i>When</i>. (C) répète « ship », ici un nom (un navire), alors que <i>ship</i> veut dire « expédier » dans la question.'
      },
      {
        question: "What's the best way to contact Mr. Nguyen?",
        responses: ["Yes, he's in contact with the client.", "Send him an e-mail. He's rarely at his desk.", "He's the new sales director."],
        answer: 1, speakers: ['M', 'W'],
        explain: '<b>What’s the best way…?</b> → un moyen : envoie-lui un e-mail, il est rarement à son bureau. (A) répond <i>Yes</i> et répète « contact ». (C) répond à <i>Who is Mr. Nguyen?</i>'
      }
    ] },
    { title: 'Série 3 — Oui / non, questions-tags, questions à choix', level: 'B1', items: [
      {
        question: "Have you finished the budget report?",
        responses: ["It's a very tight budget.", "Almost. I just need to check a few numbers.", "Yes, I'd like a copy."],
        answer: 1, speakers: ['W', 'M'],
        explain: 'Réponse indirecte à une question oui / non : <i>Almost</i> (presque) = pas encore tout à fait. (A) répète « budget » sans répondre. (C) commence par <i>Yes</i>, mais « je voudrais une copie » n’a aucun rapport avec la question.'
      },
      {
        question: "Is the conference room available this afternoon?",
        responses: ["No, it's booked until five.", "Yes, the conference was great.", "About twenty people."],
        answer: 0, speakers: ['M', 'W'], accent: 'en-GB',
        explain: '<b>Is… available?</b> → oui ou non : non, elle est réservée jusqu’à 17 h. (B) commence par <i>Yes</i> mais parle d’une conférence passée : répétition de « conference ». (C) répond à <i>How many</i>.'
      },
      {
        question: "You've met our new accountant, haven't you?",
        responses: ["I'll count them again.", "Yes, we had lunch together yesterday.", "The meeting went well."],
        answer: 1, speakers: ['W', 'M'],
        explain: 'Question-tag (<i>…, haven’t you?</i> = n’est-ce pas ?) → oui : nous avons déjeuné ensemble hier. (A) Piège de son : <i>count</i> dans <i>accountant</i>. (C) Piège de son : <i>meeting</i> ressemble à <i>met</i>.'
      },
      {
        question: "Is the workshop in the morning or in the afternoon?",
        responses: ["Yes, it's a sales workshop.", "Good morning, everyone.", "It starts right after lunch."],
        answer: 2, speakers: ['M', 'W'], accent: 'en-AU',
        explain: 'Question à choix (<i>or</i>) → réponse indirecte : juste après le déjeuner, donc <b>l’après-midi</b>. (A) <i>Yes</i> ne répond pas à un choix. (B) répète « morning » sans aucun sens ici.'
      },
      {
        question: "Didn't you order more toner last week?",
        responses: ["Yes, it should arrive tomorrow.", "In alphabetical order.", "The tone was very friendly."],
        answer: 0, speakers: ['W', 'M'],
        explain: 'Question négative (<i>Didn’t you…?</i> = tu n’as pas… ?) → oui, je l’ai commandé, il devrait arriver demain. (B) répète « order » avec un autre sens (un ordre, un classement). (C) Piège de son : <i>tone</i> ressemble à <i>toner</i>.'
      },
      {
        question: "The shipment arrived this morning, didn't it?",
        responses: ["A shipping company.", "Every morning at nine.", "Yes, it's in the warehouse now."],
        answer: 2, speakers: ['M', 'W'], accent: 'en-CA',
        explain: 'Question-tag → oui : il est à l’entrepôt maintenant. (A) reprend le mot <i>ship</i> sans répondre. (B) répète « morning » et répond à <i>How often / When</i>.'
      },
      {
        question: "Would you prefer a window seat or an aisle seat?",
        responses: ["The aisle, please. I like to stretch my legs.", "Yes, I'd prefer that.", "Please close the window."],
        answer: 0, speakers: ['W', 'M2'], accent: 'en-GB',
        explain: 'Question à choix → il choisit le côté couloir (<i>aisle</i>, prononcé « aïl » : le s est muet) pour pouvoir étendre ses jambes. (B) <i>Yes</i> ne répond pas à un choix. (C) répète « window » sans répondre.'
      },
      {
        question: "Are you going to the trade show, or is Priya going?",
        responses: ["Yes, it's a great show.", "It's going well, thanks.", "We're both going."],
        answer: 2, speakers: ['M', 'W'],
        explain: 'Question à choix → réponse possible : <b>les deux</b> y vont. (A) <i>Yes</i> ne répond pas à un choix. (B) répète « going » mais répond à <i>How’s it going?</i> (comment ça va ?).'
      },
      {
        question: "Can you fix the copier, or should I call a technician?",
        responses: ["The copies are on your desk.", "Let me take a look at it first.", "I'd like a coffee, please."],
        answer: 1, speakers: ['W', 'M'], accent: 'en-AU',
        explain: 'Question à choix → réponse indirecte : laisse-moi d’abord y jeter un œil (peut-être qu’il saura la réparer). (A) Piège : <i>copies</i> ressemble à <i>copier</i>. (C) Piège de son : <i>coffee</i> / <i>copier</i>.'
      },
      {
        question: "Isn't the deadline for the proposal next Friday?",
        responses: ["I proposed a new design.", "About ten pages long.", "No, it was moved to Wednesday."],
        answer: 2, speakers: ['M', 'W'],
        explain: 'Question négative (<i>Isn’t…?</i> = ce n’est pas… ?) → non, elle a été déplacée à mercredi. (A) Piège : <i>proposed</i> reprend <i>proposal</i>. (B) répond à <i>How long</i>.'
      }
    ] },
    { title: 'Série 4 — Affirmations, demandes, suggestions et réponses indirectes', level: 'B1', items: [
      {
        question: "The printer on the third floor is out of paper again.",
        responses: ["I'll bring some up from the supply room.", "It's on the third floor.", "I printed two copies."],
        answer: 0, speakers: ['W', 'M'],
        explain: 'Affirmation → réaction logique : il propose une solution (je vais en monter de la réserve). (B) répète « third floor » sans réagir au problème. (C) reprend l’idée d’imprimer, sans lien avec le manque de papier.'
      },
      {
        question: "Could you send me the updated schedule?",
        responses: ["At the end of the corridor.", "Sure, I'll e-mail it to you right away.", "Yes, it's a busy schedule."],
        answer: 1, speakers: ['M', 'W'], accent: 'en-GB',
        explain: 'Demande polie (<i>Could you…?</i>) → accepter : bien sûr, je te l’envoie tout de suite. (A) répond à <i>Where</i>. (C) commence par <i>Yes</i> mais parle d’autre chose (un planning chargé) : répétition de « schedule ».'
      },
      {
        question: "Let's ask the caterer for a vegetarian option.",
        responses: ["It's an optional meeting.", "She asked for the check.", "Good idea. Several guests don't eat meat."],
        answer: 2, speakers: ['W', 'M'],
        explain: 'Suggestion (<i>Let’s…</i>) → accord avec une justification : plusieurs invités ne mangent pas de viande. <i>caterer</i> = traiteur. (A) Piège : <i>optional</i> ressemble à <i>option</i>. (B) reprend le verbe « ask » dans une phrase sans rapport (elle a demandé l’addition).'
      },
      {
        question: "I can't find my security badge anywhere.",
        responses: ["Did you check your coat pocket?", "The security guard is new.", "Anywhere you like."],
        answer: 0, speakers: ['M', 'W'], accent: 'en-AU',
        explain: 'Affirmation (un problème) → réponse par une question utile : as-tu regardé dans la poche de ton manteau ? (B) répète « security ». (C) répète « anywhere » (où tu veux) sans aucun sens ici.'
      },
      {
        question: "Would you mind closing the window?",
        responses: ["I closed the deal yesterday.", "Not at all. It's getting cold in here.", "Yes, it's a nice window."],
        answer: 1, speakers: ['W', 'M'],
        explain: '<i>Would you mind…?</i> = ça te dérangerait de… ? → <i>Not at all</i> (pas du tout) = <b>d’accord</b>, d’autant qu’il commence à faire froid. (A) répète « close » avec un autre sens (<i>close a deal</i> = conclure une affaire). (C) répète « window » sans répondre.'
      },
      {
        question: "Why don't you take the afternoon off? You look exhausted.",
        responses: ["The plane took off late.", "In the break room.", "Maybe I will. Thanks."],
        answer: 2, speakers: ['M', 'W2'], accent: 'en-CA',
        explain: '<i>Why don’t you…?</i> = suggestion (tu devrais prendre ton après-midi) → peut-être bien, merci. (A) Piège : <i>took off</i> (l’avion a décollé) reprend <i>take off</i> avec un autre sens. (B) répond à <i>Where</i>.'
      },
      {
        question: "The client wants to move the meeting to Thursday.",
        responses: ["Let me check my calendar.", "The movie starts at eight.", "The meeting was very productive."],
        answer: 0, speakers: ['W', 'M'], accent: 'en-GB',
        explain: 'Réponse <b>indirecte</b> : avant d’accepter, il vérifie son agenda. (B) Piège de son : <i>movie</i> ressemble à <i>move</i>. (C) répète « meeting » mais parle d’une réunion passée.'
      },
      {
        question: "Who's going to lead tomorrow's training session?",
        responses: ["About two hours long.", "It hasn't been decided yet.", "Yes, in Room 5."],
        answer: 1, speakers: ['M', 'W'],
        explain: 'Réponse <b>indirecte</b> à une question en <i>Who</i> : ça n’a pas encore été décidé. (A) répond à <i>How long</i>. (C) <i>Yes</i> à une question en <i>Who</i>, et donne un lieu.'
      },
      {
        question: "Can I borrow your stapler for a minute?",
        responses: ["Sure. It's in my top drawer.", "It's a minute past nine.", "He borrowed my car last week."],
        answer: 0, speakers: ['W', 'M'], accent: 'en-AU',
        explain: 'Demande (<i>Can I…?</i>) → accepter : bien sûr, elle est dans mon tiroir du haut. <i>stapler</i> = agrafeuse. (B) répète « minute » et donne l’heure. (C) répète « borrow » sans rapport.'
      },
      {
        question: "We've gone over budget on the marketing campaign.",
        responses: ["It's just over there.", "The market opens at eight.", "Then we'll need to cut costs somewhere else."],
        answer: 2, speakers: ['M', 'W'],
        explain: '<i>go over budget</i> = dépasser le budget → réaction logique : il faudra réduire les dépenses ailleurs. (A) répète « over » (<i>over there</i> = là-bas). (B) Piège : <i>market</i> reprend <i>marketing</i>.'
      }
    ] }
  ]
});
