LE.register({
  id: 'g09',
  kind: 'grammar',
  title: 'Le présent simple : négation et questions',
  subtitle: 'Dire « ne… pas » et poser des questions grâce à do et does',
  level: 'A1',
  minutes: 35,
  goals: [
    'Faire une phrase négative avec <b>don’t</b> et <b>doesn’t</b> : <i>She doesn’t work on Fridays.</i>',
    'Poser une question avec <b>Do / Does</b> et y répondre brièvement : <i>Yes, she does.</i>',
    'Poser des questions ouvertes : <i>Where do you work? What time does the store open?</i>',
    'Ne plus jamais mettre de <b>-s</b> au verbe après <i>does</i> ou <i>doesn’t</i>'
  ],
  blocks: [
    { type: 'h', text: 'Un petit mot indispensable : do' },
    { type: 'p', html: 'Avec le verbe <b>be</b>, c’était simple : on ajoute <i>not</i> (<i>I’m not tired</i>) ou on inverse (<i>Are you ready?</i>). Mais <b>tous les autres verbes</b> (<i>work, live, like, have…</i>) ont besoin d’un assistant au présent simple : <b>do</b>, qui devient <b>does</b> avec <i>he, she, it</i>.' },
    { type: 'p', html: 'Ici, <b>do</b> ne veut pas dire « faire » : c’est un <b>auxiliaire</b>, un « verbe d’aide » qui ne se traduit pas. Il sert uniquement à construire la négation et la question. C’est un peu comme « est-ce que » en français : on ne le traduit pas mot à mot, il indique juste qu’on pose une question.' },
    { type: 'examples', items: [
      { en: "I don't work on Fridays.", fr: 'Je ne travaille pas le vendredi.' },
      { en: "She doesn't speak Chinese.", fr: 'Elle ne parle pas chinois.' },
      { en: 'Do you like your job?', fr: 'Est-ce que tu aimes ton travail ?' },
      { en: 'Does he live in Boston?', fr: 'Est-ce qu’il habite à Boston ?' }
    ] },

    { type: 'h', text: 'La forme négative' },
    { type: 'p', html: 'Formule : <b>sujet + don’t / doesn’t + base verbale</b> (le verbe sans <i>to</i> et sans -s). À l’oral et dans les e-mails courants, on utilise presque toujours la forme contractée.' },
    { type: 'table', head: ['Sujet', 'Forme pleine', 'Forme contractée', 'Français'], rows: [
      ['I / you / we / they', 'I <b>do not</b> work', 'I <b>don’t</b> work', 'je ne travaille pas'],
      ['he / she / it', 'she <b>does not</b> work', 'she <b>doesn’t</b> work', 'elle ne travaille pas']
    ], caption: 'Le verbe principal (<i>work</i>) ne change jamais : c’est <b>do</b> qui devient <b>does</b>.' },
    { type: 'box', style: 'tip', title: 'Le -s change de place', html: 'À la forme affirmative, le -s de la 3ᵉ personne est sur le verbe : <i>she work<b>s</b></i>. À la forme négative, il « saute » sur l’auxiliaire : <i>she doe<b>s</b>n’t work</i>. Une phrase = <b>un seul</b> -s !' },
    { type: 'box', style: 'warn', title: 'Piège n°1 : pas de -s après doesn’t', html: '<span class="ko">She doesn’t works here.</span> → <span class="ok">She doesn’t work here.</span><br><span class="ko">He doesn’t has a car.</span> → <span class="ok">He doesn’t have a car.</span><br><span class="ko">My boss don’t like meetings.</span> → <span class="ok">My boss doesn’t like meetings.</span>' },
    { type: 'examples', items: [
      { en: "We don't open on Sundays.", fr: 'Nous n’ouvrons pas le dimanche.' },
      { en: "My manager doesn't drink coffee.", fr: 'Mon responsable ne boit pas de café.' },
      { en: "The printer doesn't work.", fr: 'L’imprimante ne marche pas.', note: 'Une chose = <b>it</b> → <b>doesn’t</b>.' },
      { en: "They don't have a car.", fr: 'Ils n’ont pas de voiture.', note: '<i>have</i> aussi a besoin de <i>don’t / doesn’t</i> (voir la leçon « Have et have got »).' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : be ou do ?', html: '<b>Be</b> se débrouille tout seul ; les autres verbes ont besoin de <b>do</b>. Ne mélange pas les deux !<br><span class="ko">I don’t tired.</span> → <span class="ok">I’m not tired.</span><br><span class="ko">She isn’t work today.</span> → <span class="ok">She doesn’t work today.</span><br><span class="ko">Are you work here?</span> → <span class="ok">Do you work here?</span>' },

    { type: 'h', text: 'Les questions fermées (réponse oui / non)' },
    { type: 'p', html: 'Formule : <b>Do / Does + sujet + base verbale</b> ? Pense à <b>Do</b> comme à un « est-ce que » placé en tête de question : <i><b>Est-ce que</b> tu travailles ici ?</i> → <i><b>Do</b> you work here?</i>' },
    { type: 'table', head: ['Affirmation', 'Question', 'Réponse courte'], rows: [
      ['You work here.', '<b>Do</b> you work here?', 'Yes, I do. / No, I don’t.'],
      ['She speaks German.', '<b>Does</b> she speak German?', 'Yes, she does. / No, she doesn’t.'],
      ['They live in Dublin.', '<b>Do</b> they live in Dublin?', 'Yes, they do. / No, they don’t.'],
      ['The store opens at nine.', '<b>Does</b> the store open at nine?', 'Yes, it does. / No, it doesn’t.']
    ], caption: 'Même règle que pour la négation : avec <b>Does</b>, le verbe reste à la base verbale (<i>Does she <b>speak</b></i>, pas <i>speaks</i>).' },
    { type: 'box', style: 'tip', title: 'Les réponses courtes', html: 'Répondre juste « Yes. » ou « No. » paraît un peu sec. On reprend l’auxiliaire : <i>Yes, I <b>do</b>.</i> / <i>No, he <b>doesn’t</b>.</i> Attention au calque du français « Oui, j’aime » : <span class="ko">Yes, I like.</span> → <span class="ok">Yes, I do.</span> ou <span class="ok">Yes, I like it.</span>' },
    { type: 'examples', items: [
      { en: 'Do you speak English? — Yes, I do.', fr: 'Tu parles anglais ? — Oui.' },
      { en: "Does Mr. Novak work on Saturdays? — No, he doesn't.", fr: 'Est-ce que M. Novak travaille le samedi ? — Non.' },
      { en: 'Do they need a taxi? — Yes, they do.', fr: 'Ils ont besoin d’un taxi ? — Oui.' },
      { en: "Does the hotel have a gym? — No, it doesn't.", fr: 'Est-ce que l’hôtel a une salle de sport ? — Non.' }
    ] },

    { type: 'h', text: 'Les questions ouvertes (avec un mot interrogatif)' },
    { type: 'p', html: 'Pour demander <b>où</b>, <b>quand</b>, <b>quoi</b>, <b>comment</b>…, on met le <b>mot interrogatif</b> au début, puis la même structure : <b>mot interrogatif + do / does + sujet + base verbale</b> ? Tu découvriras tous les mots interrogatifs dans la leçon « Les mots interrogatifs (wh- questions) ».' },
    { type: 'table', head: ['Mot interrogatif', 'Auxiliaire', 'Sujet', 'Verbe', 'Suite'], rows: [
      ['<b>Where</b> (où)', 'do', 'you', 'work', 'on Mondays?'],
      ['<b>What time</b> (à quelle heure)', 'does', 'the store', 'open', 'on Saturdays?'],
      ['<b>What</b> (que, quoi)', 'does', 'your company', 'sell', 'online?'],
      ['<b>When</b> (quand)', 'do', 'they', 'arrive', 'in Tokyo?'],
      ['<b>How</b> (comment)', 'does', 'she', 'get', 'to work?']
    ] },
    { type: 'examples', items: [
      { en: 'Where do you work? — In a bank.', fr: 'Où travailles-tu ? — Dans une banque.' },
      { en: 'What time does the store open? — At nine.', fr: 'À quelle heure le magasin ouvre-t-il ? — À neuf heures.' },
      { en: 'What does your company make? — Car parts.', fr: 'Que fabrique ton entreprise ? — Des pièces automobiles.' },
      { en: "Why does he take the train? — Because it's fast.", fr: 'Pourquoi prend-il le train ? — Parce que c’est rapide.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : l’ordre des mots', html: 'En français parlé, on dit souvent « Tu travailles où ? » ou « La réunion commence à quelle heure ? ». En anglais, c’est impossible : le mot interrogatif vient <b>en premier</b>, et on n’oublie pas <b>do / does</b>.<br><span class="ko">Where you work?</span> → <span class="ok">Where do you work?</span><br><span class="ko">What time the meeting starts?</span> → <span class="ok">What time does the meeting start?</span>' },

    { type: 'h', text: 'Aperçu : les questions sur le sujet (sans do)' },
    { type: 'p', html: 'Quand <b>who</b> (qui) ou <b>what</b> (qu’est-ce qui) est <b>le sujet</b> du verbe, on n’utilise <b>pas</b> do : on garde l’ordre de la phrase affirmative, avec le -s. <i><b>Who works</b> here?</i> = Qui travaille ici ? Compare avec <i>Who <b>do you</b> call?</i> = Qui appelles-tu ? Là, le sujet est <i>you</i>, donc on garde <b>do</b>. Tu reverras ce point dans la leçon « Les mots interrogatifs (wh- questions) ».' },
    { type: 'examples', items: [
      { en: 'Who works on Saturdays? — Linda does.', fr: 'Qui travaille le samedi ? — Linda.', note: 'Pas de <i>do</i> : <i>who</i> est le sujet. Réponse courte : <i>Linda does.</i>' },
      { en: 'Who has the key to the meeting room?', fr: 'Qui a la clé de la salle de réunion ?' },
      { en: 'What happens after the meeting?', fr: 'Que se passe-t-il après la réunion ?' },
      { en: 'Who do you call when the printer breaks?', fr: 'Qui appelles-tu quand l’imprimante tombe en panne ?', note: 'Ici, le sujet est <i>you</i> → on utilise <b>do</b>.' }
    ] },
    { type: 'dialog', title: 'À la machine à café', lines: [
      { speaker: 'M', en: 'Excuse me, do you work in the sales department?', fr: 'Excuse-moi, tu travailles au service commercial ?' },
      { speaker: 'W', en: "No, I don't. I work in accounting. Why?", fr: 'Non. Je travaille à la comptabilité. Pourquoi ?' },
      { speaker: 'M', en: "I'm new here, and I don't know anyone! What time does the cafeteria open?", fr: 'Je suis nouveau ici, et je ne connais personne ! À quelle heure ouvre la cafétéria ?' },
      { speaker: 'W', en: "At eleven thirty. But it doesn't open on Fridays.", fr: 'À onze heures et demie. Mais elle n’ouvre pas le vendredi.' },
      { speaker: 'M', en: 'Really? Where do people eat on Fridays?', fr: 'Ah bon ? Où est-ce que les gens mangent le vendredi ?' },
      { speaker: 'W', en: 'Most of us go to the café across the street. Do you want to come with us?', fr: 'La plupart d’entre nous vont au café d’en face. Tu veux venir avec nous ?' },
      { speaker: 'M', en: 'Sure! Thanks a lot.', fr: 'Avec plaisir ! Merci beaucoup.' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 2</b>, beaucoup de questions commencent par <i>Do you…?</i>, <i>Does…?</i>, <i>Where do…?</i> ou <i>What time does…?</i> Écoute bien le <b>premier mot</b> : <i>Where</i> attend un lieu, <i>What time</i> une heure. Et la bonne réponse n’est pas toujours <i>Yes / No</i> : <i>Do you have the sales figures? — Ms. Kim sent them this morning.</i> En <b>Partie 5</b>, retiens le réflexe : après <b>do / does / don’t / doesn’t</b>, toujours la <b>base verbale</b> : <i>The store does not ------- on Sundays.</i> → <b>open</b>.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• Négation : <b>don’t / doesn’t + base verbale</b> : <i>She doesn’t work.</i><br>• Question : <b>Do / Does + sujet + base verbale</b> ? <i>Does she work?</i><br>• Réponses courtes : <i>Yes, I do. / No, she doesn’t.</i><br>• Question ouverte : <b>mot interrogatif + do / does + sujet + verbe</b> : <i>Where do you work?</i><br>• Après <i>does / doesn’t</i> : <b>jamais de -s</b> au verbe.<br>• Avec <b>be</b>, pas de <i>do</i> : <i>I’m not…, Are you…?</i>' }
  ],
  exercises: [
    { type: 'mcq', q: 'She ___ work on Mondays.', options: ["don't", "doesn't", "isn't"], answer: 1, explain: '<b>She</b> = 3ᵉ personne du singulier → <b>doesn’t</b>. <i>isn’t</i> est impossible devant un verbe comme <i>work</i> : <i>be</i> ne sert pas à faire la négation des autres verbes.' },
    { type: 'mcq', q: 'I ___ like tea.', options: ["don't", "doesn't", 'am not'], answer: 0, explain: 'Avec <b>I</b>, la négation d’un verbe normal se fait avec <b>don’t</b>. <i>am not</i> va avec un adjectif ou un nom (<i>I’m not tired</i>), pas devant un verbe comme <i>like</i>.' },
    { type: 'gap', q: 'We ___ (not / open) on Sundays.', answers: ["don't open", 'do not open'], explain: '<b>We</b> → <b>don’t</b> + base verbale : <i>we don’t open</i>.' },
    { type: 'gap', q: 'My boss ___ (not / drink) coffee.', answers: ["doesn't drink", 'does not drink'], explain: '<i>My boss</i> = he / she → <b>doesn’t</b> + base verbale <i>drink</i> (sans -s).' },
    { type: 'mcq', q: 'Choisis la phrase correcte.', options: ["He doesn't works here.", "He don't work here.", "He doesn't work here.", 'He not work here.'], answer: 2, explain: 'Avec <b>he</b> → <b>doesn’t</b>, et après <i>doesn’t</i> le verbe reste à la base verbale : <i>work</i>, sans -s.' },
    { type: 'mcq', q: '___ your sister live in Montreal?', options: ['Do', 'Does', 'Is', 'Are'], answer: 1, explain: '<i>Your sister</i> = she → <b>Does</b>. <i>Is</i> est impossible : <i>live</i> est un verbe normal, il faut l’auxiliaire <i>do / does</i>.' },
    { type: 'mcq', q: '— Does Paolo work here? — Yes, ___.', options: ['he does', 'he works', 'he do', "he's"], answer: 0, explain: 'Réponse courte : on reprend l’auxiliaire de la question → <b>Yes, he does.</b>' },
    { type: 'gap', q: '— Do you have a car? — No, I ___.', answers: ["don't", 'do not'], explain: 'Réponse courte négative : on reprend l’auxiliaire <i>do</i> → <b>No, I don’t.</b>' },
    { type: 'gap', q: 'Where ___ (you / work)?', answers: ['do you work'], explain: 'Question ouverte : <b>Where + do + you + work</b> ? Ne pas oublier <i>do</i>, ni l’ordre auxiliaire → sujet → verbe.' },
    { type: 'gap', q: 'What time ___ (the store / open) on Saturdays?', answers: ['does the store open'], explain: '<i>The store</i> = it → <b>does</b>, puis le sujet, puis la base verbale <i>open</i> (sans -s).' },
    { type: 'order', answer: "My colleague doesn't speak French.", fr: 'Mon collègue ne parle pas français.', explain: 'Négation : sujet + <b>doesn’t</b> + base verbale (<i>speak</i>) + complément.' },
    { type: 'order', answer: 'Where does your brother work?', fr: 'Où travaille ton frère ?', explain: 'Mot interrogatif (<i>Where</i>) + <b>does</b> + sujet (<i>your brother</i>) + base verbale (<i>work</i>).' },
    { type: 'listen', say: "Hi, I'm Olivia. I work in a bank, but I don't work on Fridays.", q: 'Qu’as-tu entendu ?', options: ['Olivia travaille dans une banque, mais pas le vendredi.', 'Olivia travaille dans une banque seulement le vendredi.', 'Olivia ne travaille pas dans une banque.'], answer: 0, explain: '<i>I work in a bank</i> (je travaille dans une banque), <i>but I <b>don’t</b> work on Fridays</i> (mais je ne travaille pas le vendredi).', accent: 'en-AU' },
    { type: 'listen', say: 'Does the pharmacy open on Sundays?', q: 'Quelle est la réponse logique ?', options: ['Yes, it does. From ten to four.', 'Yes, it is.', "No, I don't."], answer: 0, explain: 'La question commence par <i>Does the pharmacy…</i> → on répond avec <b>it does</b>. <i>Yes, it is</i> reprend <i>be</i> au lieu de <i>do</i>, et <i>No, I don’t</i> parle de la mauvaise personne.', accent: 'en-GB' },
    { type: 'mcq', q: 'The hotel does not ------- pets in the rooms. <small>(style TOEIC)</small>', options: ['allow', 'allows', 'allowing', 'allowed'], answer: 0, explain: 'Après <b>does not</b>, on met toujours la <b>base verbale</b> : <i>allow</i>. Pas de -s, pas de -ing, pas de -ed.' },
    { type: 'mcq', q: '------- the new software work on older computers? <small>(style TOEIC)</small>', options: ['Do', 'Does', 'Is', 'Are'], answer: 1, explain: '<i>The new software</i> = it → <b>Does</b>. <i>Is / Are</i> sont impossibles car <i>work</i> est un verbe normal : il faut l’auxiliaire <i>do / does</i>.' }
  ]
});
