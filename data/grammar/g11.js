LE.register({
  id: 'g11',
  kind: 'grammar',
  title: 'Les mots interrogatifs (wh- questions)',
  subtitle: 'Poser toutes les questions ouvertes : qui, quoi, où, quand, pourquoi, comment, combien…',
  level: 'A1',
  minutes: 40,
  goals: [
    'Connaître les mots interrogatifs <b>what, which, who, whose, where, when, why, how</b> et leurs composés (<i>how much, how often, what time…</i>)',
    'Construire une question dans le bon ordre : <b>mot interrogatif + auxiliaire + sujet + verbe</b>',
    'Poser une question sur le sujet (<i>Who called?</i>) et placer la préposition à la fin (<i>Where are you from?</i>)',
    'Repérer le mot interrogatif pour trouver la bonne réponse en Partie 2 du TOEIC'
  ],
  blocks: [
    { type: 'h', text: 'À quoi servent les mots interrogatifs ?' },
    { type: 'p', html: 'Les <b>mots interrogatifs</b> servent à poser des <b>questions ouvertes</b>, c’est-à-dire des questions auxquelles on ne peut pas répondre par « oui » ou « non ». En français, ce sont « qui », « quoi », « où », « quand », « pourquoi », « comment », « combien »… En anglais, on les appelle les <b>wh- words</b>, parce que presque tous commencent par <b>wh-</b> : <i>what, where, when, why…</i>' },
    { type: 'examples', items: [
      { en: 'What is your name?', fr: 'Quel est ton nom ? / Comment t’appelles-tu ?', note: 'Pour demander le nom, l’anglais dit <b>what</b> (« quel est ton nom »), jamais <i>how</i>.' },
      { en: 'Where do you live?', fr: 'Où habites-tu ?' },
      { en: 'When is the meeting?', fr: 'Quand a lieu la réunion ?' },
      { en: 'Why are you late?', fr: 'Pourquoi es-tu en retard ?' }
    ] },

    { type: 'h', text: 'Les huit mots de base' },
    { type: 'p', html: 'Chaque mot interrogatif annonce <b>le type de réponse</b> qu’on attend : une personne, un lieu, un moment, une raison… Apprends-les avec leur réponse, c’est la meilleure façon de ne plus les confondre.' },
    { type: 'table', head: ['Mot', 'Sens', 'La réponse donne…', 'Exemple'], rows: [
      ['<b>what</b>', 'que, quoi, quel(le)', 'une chose, une information', 'What is your job? — I’m a nurse.'],
      ['<b>which</b>', 'quel(le), lequel (parmi un petit choix)', 'un choix', 'Which color, blue or black? — Blue.'],
      ['<b>who</b>', 'qui', 'une personne', 'Who is your manager? — Ms. Diallo.'],
      ['<b>whose</b>', 'à qui, de qui', 'un propriétaire', 'Whose phone is this? — It’s Tom’s.'],
      ['<b>where</b>', 'où', 'un lieu', 'Where is the bank? — Next to the station.'],
      ['<b>when</b>', 'quand', 'un moment', 'When is your flight? — On Monday.'],
      ['<b>why</b>', 'pourquoi', 'une raison', 'Why are you tired? — Because I work at night.'],
      ['<b>how</b>', 'comment', 'une manière, un état', 'How do you get to work? — By bus.']
    ], caption: '<b>Wh-</b> se prononce comme un simple « w » (le son « ou » de <i>week-end</i>) : <i>what</i> ≈ « ouatt », <i>where</i> ≈ « ouèr », <i>when</i> ≈ « ouènn ». Exception : <b>who</b> et <b>whose</b> se prononcent avec un « h » soufflé : « hou », « houz ».' },
    { type: 'box', style: 'tip', title: 'What ou which ?', html: '<b>What</b> pose une question ouverte : toutes les réponses sont possibles (<i>What is your favorite color?</i>). <b>Which</b> s’utilise quand on choisit parmi un <b>petit nombre d’options connues</b> : <i>Which color do you prefer, blue or black?</i> Dans le doute : s’il y a une liste de choix, prends <b>which</b>.' },
    { type: 'examples', items: [
      { en: 'Who is that woman?', fr: 'Qui est cette femme ?' },
      { en: 'Whose car is this?', fr: 'À qui est cette voiture ?', note: '<b>Whose</b> + nom : <i>whose car</i> = la voiture de qui. On répond souvent avec le génitif (le <b>’s</b> qui indique le possesseur) : <i>It’s Paul’s.</i> (C’est celle de Paul.) (voir la leçon « Pronoms, possessifs et génitif (’s) »).' },
      { en: 'Which train goes to the airport?', fr: 'Quel train va à l’aéroport ?' },
      { en: "Why is the store closed? — Because it's a holiday.", fr: 'Pourquoi le magasin est-il fermé ? — Parce que c’est un jour férié.', note: 'On répond à <b>why</b> avec <b>because</b> (parce que).' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : whose ou who’s ?', html: '<b>Whose</b> (à qui) et <b>who’s</b> (= <i>who is</i>, qui est) se prononcent exactement pareil : « houz ».<br><i><b>Whose</b> laptop is this?</i> = À qui est cet ordinateur ?<br><i><b>Who’s</b> your new colleague?</i> = Qui est ton nouveau collègue ?<br>À l’écrit, pose-toi la question : est-ce que je peux remplacer par <i>who is</i> ? Si oui, c’est <b>who’s</b>.' },

    { type: 'h', text: 'How et ses composés' },
    { type: 'p', html: 'Seul, <b>how</b> veut dire « comment » : <i>How are you?</i> (Comment vas-tu ?). Mais on l’associe très souvent à un autre mot pour former des questions précises : combien, combien de temps, à quelle fréquence, à quelle distance, quel âge… Ces questions sont partout au TOEIC.' },
    { type: 'table', head: ['Question', 'Sens', 'Exemple'], rows: [
      ['<b>how much</b> + nom indénombrable (qu’on ne compte pas un par un)', 'combien de (quantité)', 'How much time do we have? — Ten minutes.'],
      ['<b>how much</b> (prix)', 'combien ça coûte', 'How much is this chair? — $120.'],
      ['<b>how many</b> + nom pluriel', 'combien de (nombre)', 'How many people work here? — About fifty.'],
      ['<b>how long</b>', 'combien de temps (durée)', 'How long is the flight? — Two hours.'],
      ['<b>how often</b>', 'à quelle fréquence, tous les combien', 'How often do you travel? — Twice a month.'],
      ['<b>how far</b>', 'à quelle distance', 'How far is the hotel? — About two kilometers.'],
      ['<b>how old</b>', 'quel âge', 'How old is your son? — He’s six.']
    ], caption: 'On trouve aussi <b>how</b> + adjectif : <i>how big</i> (de quelle taille), <i>how tall</i> (de quelle hauteur ; quelle taille pour une personne)…' },
    { type: 'box', style: 'tip', title: 'How much ou how many ?', html: '<b>How many</b> + nom au <b>pluriel</b>, pour ce qu’on peut compter : <i>how many days, how many e-mails, how many people</i>.<br><b>How much</b> + nom <b>indénombrable</b> (qu’on ne compte pas un par un) : <i>how much money, how much time, how much information</i>.<br>Pour un <b>prix</b>, <b>how much</b> tout seul : <i>How much is it?</i> = <i>How much does it cost?</i> (Combien ça coûte ?). Revois « Le pluriel, dénombrables et indénombrables » si besoin.' },
    { type: 'examples', items: [
      { en: 'How much is a ticket to Boston?', fr: 'Combien coûte un billet pour Boston ?' },
      { en: 'How many languages do you speak?', fr: 'Combien de langues parles-tu ?' },
      { en: 'How long does the training last?', fr: 'Combien de temps dure la formation ?', note: '<i>last</i> = durer.' },
      { en: 'How often do you check your e-mails?', fr: 'Tous les combien consultes-tu tes e-mails ?' },
      { en: 'How far is the airport from the city center?', fr: 'À quelle distance du centre-ville se trouve l’aéroport ?' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : how long ou how often ?', html: 'Deux questions faciles à confondre à l’oral :<br><b>How long</b> demande une <b>durée</b> : <i>How long is the meeting? — One hour.</i><br><b>How often</b> demande une <b>fréquence</b> : <i>How often is the meeting? — Every Monday.</i><br>Écoute bien le deuxième mot : <i>long</i> → « combien de temps », <i>often</i> → « tous les combien ».' },

    { type: 'h', text: 'What + nom : what time, what kind of…' },
    { type: 'p', html: 'Comme « quel » en français, <b>what</b> peut être suivi d’un nom : <b>what time</b> (quelle heure), <b>what day</b> (quel jour), <b>what size</b> (quelle taille), <b>what color</b> (quelle couleur), <b>what kind of</b> (quel genre de, quel type de). Attention : <b>what time</b> demande une <b>heure précise</b> (<i>At 3:30.</i>), alors que <b>when</b> est plus large : un jour, une date, une période (<i>Next week. / In June. / After lunch.</i>). Et « Quelle heure est-il ? » se dit <b>What time is it?</b>, jamais <span class="ko">What hour is it?</span>' },
    { type: 'examples', items: [
      { en: "What time is it? — It's ten past nine.", fr: 'Quelle heure est-il ? — Il est neuf heures dix.' },
      { en: 'What time does the store open?', fr: 'À quelle heure le magasin ouvre-t-il ?' },
      { en: 'What kind of music do you like?', fr: 'Quel genre de musique aimes-tu ?' },
      { en: 'What day is the conference?', fr: 'Quel jour a lieu la conférence ?' }
    ] },

    { type: 'h', text: 'L’ordre des mots : la formule magique' },
    { type: 'p', html: 'Dans presque toutes les questions avec un mot interrogatif, l’ordre est le même : <b>mot interrogatif + auxiliaire + sujet + verbe + reste</b>. L’<b>auxiliaire</b>, c’est le petit verbe « outil » qui sert à construire la question : <b>be</b> (<i>am, is, are</i>), <b>do / does</b> au présent simple (voir « Le présent simple : négation et questions »), ou <b>can</b>.' },
    { type: 'table', head: ['Mot interrogatif', 'Auxiliaire', 'Sujet', 'Suite'], rows: [
      ['Where', '<b>do</b>', 'you', 'work?'],
      ['What time', '<b>does</b>', 'the bank', 'open?'],
      ['How many languages', '<b>can</b>', 'you', 'speak?'],
      ['Why', '<b>is</b>', 'Anna', 'late?']
    ], caption: 'Avec <b>be</b>, pas de <i>do</i> : <i>Where <b>is</b> the station?</i> Avec les autres verbes au présent, on ajoute <b>do</b> ou <b>does</b>, et le verbe reste à la base (sans -s).' },
    { type: 'box', style: 'warn', title: 'Piège : garder l’ordre du français', html: 'En français parlé, on dit souvent « Tu travailles où ? » ou « Où tu travailles ? ». En anglais, c’est impossible : il faut l’auxiliaire, placé <b>avant</b> le sujet.<br><span class="ko">Where you work?</span> → <span class="ok">Where do you work?</span><br><span class="ko">What time the bank opens?</span> → <span class="ok">What time does the bank open?</span><br><span class="ko">Where does she works?</span> → <span class="ok">Where does she work?</span> (après <i>does</i>, pas de -s)<br><span class="ko">What time it is?</span> → <span class="ok">What time is it?</span>' },

    { type: 'h', text: 'Les questions sur le sujet : Who called?' },
    { type: 'p', html: 'Exception importante : quand <b>who</b> ou <b>what</b> représente le <b>sujet</b> (la personne ou la chose qui fait l’action), on ne met <b>pas</b> d’auxiliaire <i>do / does</i>. Le verbe suit directement, comme dans une phrase normale. Compare :' },
    { type: 'table', head: ['Question', 'On cherche…', 'Réponse'], rows: [
      ['<b>Who calls</b> Maria every day?', 'la personne qui appelle (le sujet)', '<b>Her boss</b> calls Maria every day.'],
      ['<b>Who does</b> Maria <b>call</b> every day?', 'la personne appelée (le complément)', 'Maria calls <b>her mother</b> every day.'],
      ['<b>Who wants</b> coffee?', 'la personne qui veut (le sujet)', '<b>Tom</b> wants coffee.']
    ] },
    { type: 'examples', items: [
      { en: 'Who called?', fr: 'Qui a appelé ?', note: '<i>called</i> = a appelé (passé). <i>Who</i> est le sujet : pas d’auxiliaire.' },
      { en: 'Who works on Saturdays?', fr: 'Qui travaille le samedi ?', note: 'Après <i>who</i> sujet, le verbe prend un <b>-s</b>, comme après <i>he / she</i>.' },
      { en: 'What happened?', fr: 'Que s’est-il passé ?' },
      { en: 'Who knows the answer?', fr: 'Qui connaît la réponse ?' }
    ] },

    { type: 'h', text: 'La préposition à la fin de la question' },
    { type: 'p', html: 'En français, la préposition se place devant le mot interrogatif : « <b>D’</b>où viens-tu ? », « <b>Pour</b> qui est ce colis ? ». En anglais courant, elle part <b>à la fin</b> de la question. Ça paraît bizarre au début, mais c’est la façon normale de parler. (Dans une lettre très formelle, tu verras parfois <i>To <b>whom</b>…?</i> ou <i>For <b>whom</b>…?</i>, avec la préposition au début ; à l’oral, dis simplement <i>Who is it for?</i>)' },
    { type: 'examples', items: [
      { en: 'Where are you from?', fr: 'D’où viens-tu ?' },
      { en: 'Who is this package for?', fr: 'Pour qui est ce colis ?' },
      { en: 'Who do you work with?', fr: 'Avec qui travailles-tu ?' },
      { en: 'What is this tool for?', fr: 'À quoi sert cet outil ?', note: '<b>What… for?</b> = à quoi ça sert ? / pour quoi faire ?' },
      { en: 'Which floor is your office on?', fr: 'À quel étage est ton bureau ?' }
    ] },
    { type: 'dialog', title: 'À l’accueil d’un salon professionnel', lines: [
      { speaker: 'W', en: "Good morning! What's your name, please?", fr: 'Bonjour ! Quel est votre nom, s’il vous plaît ?' },
      { speaker: 'M', en: 'Karim Haddad.', fr: 'Karim Haddad.' },
      { speaker: 'W', en: 'And what company are you with?', fr: 'Et vous êtes de quelle entreprise ?' },
      { speaker: 'M', en: 'Brelmont Logistics.', fr: 'Brelmont Logistics.' },
      { speaker: 'W', en: 'How many people are with you today?', fr: 'Combien de personnes vous accompagnent aujourd’hui ?' },
      { speaker: 'M', en: 'Two. My colleagues are outside.', fr: 'Deux. Mes collègues sont dehors.' },
      { speaker: 'W', en: 'OK. Here are your three badges.', fr: 'D’accord. Voici vos trois badges.' },
      { speaker: 'M', en: 'Thank you. What time does the first talk start?', fr: 'Merci. À quelle heure commence la première conférence ?' },
      { speaker: 'W', en: 'At nine thirty, in Hall B.', fr: 'À neuf heures et demie, dans le hall B.' },
      { speaker: 'M', en: 'And where can I get a coffee?', fr: 'Et où est-ce que je peux prendre un café ?' },
      { speaker: 'W', en: 'Next to the entrance, on your left.', fr: 'À côté de l’entrée, sur votre gauche.' }
    ] },

    { type: 'h', text: 'Les mots interrogatifs au TOEIC' },
    { type: 'box', style: 'info', title: 'Partie 2 : le premier mot est la clé', html: 'En <b>Partie 2</b>, tu entends une question puis trois réponses, sans rien d’écrit. Une grande partie des questions commencent par un mot interrogatif. Stratégie n°1 : <b>concentre-toi sur les premiers mots</b> de la question. <i>When…?</i> → cherche un moment ; <i>Where…?</i> → un lieu ; <i>Who…?</i> → une personne, un service ou une entreprise ; <i>How long…?</i> → une durée. Tu peux alors éliminer les mauvaises réponses avant même de tout comprendre.' },
    { type: 'table', head: ['Tu entends…', 'Bonne réponse possible', 'Piège classique'], rows: [
      ['<b>When</b> is the next meeting?', 'Next Tuesday.', 'In Room 3. <small>(un lieu → réponse à <i>where</i>)</small>'],
      ['<b>Where</b> is the conference room?', 'On the third floor.', 'At two o’clock. <small>(une heure → <i>when</i>)</small>'],
      ['<b>Who</b> is your team leader?', 'Mr. Adeyemi.', 'Next month. <small>(un moment → <i>when</i>)</small>'],
      ['<b>Why</b> is the store closed?', 'Because it’s a holiday.', 'Yes, it is. <small>(oui / non impossible)</small>'],
      ['<b>How long</b> is the flight?', 'About six hours.', 'Twice a week. <small>(une fréquence → <i>how often</i>)</small>'],
      ['<b>How often</b> does the bus come?', 'Every fifteen minutes.', 'For fifteen minutes. <small>(une durée → <i>how long</i>)</small>'],
      ['<b>How much</b> is the ticket?', 'Forty dollars.', 'Two tickets, please. <small>(un nombre → <i>how many</i>)</small>']
    ], caption: 'Règle d’or : à une vraie question en <b>wh-</b>, on ne répond pas par <i>Yes</i> ou <i>No</i>. Élimine directement ces réponses.' },
    { type: 'box', style: 'tip', title: 'Trois astuces de pro', html: '• <b>Why don’t we…?</b> n’est pas une vraie question sur la raison : c’est une <b>suggestion</b> (« Et si on… ? »). <i>Why don’t we take a break? — Good idea!</i> Ici, pas de <i>because</i>.<br>• La bonne réponse est souvent <b>indirecte</b> : <i>When does the meeting start? — Let me check the schedule.</i> (Je vais vérifier le planning.) Elle ne donne pas l’heure, mais c’est une réponse logique.<br>• Méfie-toi des réponses qui <b>répètent un mot</b> de la question ou qui contiennent un mot au son proche : c’est souvent un piège.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• <b>what</b> quoi / quel — <b>which</b> lequel (petit choix) — <b>who</b> qui — <b>whose</b> à qui — <b>where</b> où — <b>when</b> quand — <b>why</b> pourquoi (→ <i>because</i>) — <b>how</b> comment.<br>• <b>how much</b> (prix, indénombrable), <b>how many</b> (+ pluriel), <b>how long</b> (durée), <b>how often</b> (fréquence), <b>how far</b> (distance), <b>how old</b> (âge), <b>what time</b> (heure), <b>what kind of</b> (quel genre de).<br>• Ordre : <b>wh- + auxiliaire + sujet + verbe</b> (<i>Where do you work?</i>), sauf si <i>who / what</i> est le sujet (<i>Who called?</i>).<br>• La préposition va à la fin : <i>Where are you from? Who is it for?</i><br>• TOEIC Partie 2 : écoute bien le <b>premier mot</b> et élimine les réponses hors sujet.' }
  ],
  exercises: [
    { type: 'mcq', q: '___ is your manager? — Ms. Okafor.', options: ['Where', 'Who', 'When', 'Why'], answer: 1, explain: 'La réponse est une <b>personne</b> (<i>Ms. Okafor</i>) → <b>Who</b> (qui).' },
    { type: 'mcq', q: '___ is the meeting? — On Tuesday at ten.', options: ['Who', 'Where', 'When', 'Whose'], answer: 2, explain: 'La réponse est un <b>moment</b> (un jour et une heure) → <b>When</b> (quand).' },
    { type: 'gap', q: '___ are you tired? — Because I work at night.', answers: ['Why'], explain: 'La réponse commence par <b>because</b> (parce que) : la question demande une raison → <b>Why</b> (pourquoi).' },
    { type: 'mcq', q: "___ is this laptop? — It's $850.", options: ['How many', 'How much', 'How long', 'How old'], answer: 1, explain: 'On demande un <b>prix</b> → <b>How much</b> (combien ça coûte). <i>How many</i> sert à compter des choses au pluriel.' },
    { type: 'gap', q: 'How ___ people work in your company? — About forty.', answers: ['many'], explain: '<i>people</i> est un nom pluriel qu’on peut compter → <b>how many</b>.' },
    { type: 'gap', q: "___ (à qui) bag is this? — It's Carla's.", answers: ['Whose'], explain: '« À qui » = <b>whose</b>, suivi directement du nom : <i>Whose bag…?</i> Attention à ne pas écrire <i>who’s</i> (= who is).' },
    { type: 'mcq', q: 'Tea or coffee? ___ do you prefer?', options: ['Who', 'Which', 'Where', 'Whose'], answer: 1, explain: 'On choisit entre deux options connues (thé ou café) → <b>Which</b>.' },
    { type: 'mcq', q: 'How ___ is the airport from here? — About 20 kilometers.', options: ['long', 'far', 'often', 'old'], answer: 1, explain: 'On demande une <b>distance</b> → <b>how far</b>. <i>How long</i> = combien de temps (durée), <i>how often</i> = à quelle fréquence.' },
    { type: 'gap', q: "What ___ is it? — It's three thirty.", answers: ['time'], explain: '« Quelle heure est-il ? » = <b>What time is it?</b> On ne dit jamais <i>What hour</i>.' },
    { type: 'order', answer: 'How often do you travel for work?', fr: 'À quelle fréquence voyages-tu pour le travail ?', explain: 'Ordre : <b>How often</b> + auxiliaire <b>do</b> + sujet <b>you</b> + verbe <b>travel</b> + reste (<i>for work</i>).' },
    { type: 'order', answer: 'Who is this package for?', fr: 'Pour qui est ce colis ?', explain: 'En anglais, la préposition (<b>for</b>) se place à la <b>fin</b> de la question.' },
    { type: 'mcq', q: 'Comment dit-on « Qui travaille le samedi ? » ?', options: ['Who does works on Saturdays?', 'Who works on Saturdays?', 'Who is work on Saturdays?', 'Who do work on Saturdays?'], answer: 1, explain: '<b>Who</b> est ici le sujet (la personne qui travaille) : pas d’auxiliaire, le verbe suit directement et prend un <b>-s</b>, comme après <i>he / she</i>.' },
    { type: 'gap', q: 'Where ___ (your sister / work)?', answers: ['does your sister work'], explain: 'Ordre : <b>Where</b> + <b>does</b> (car <i>your sister</i> = she) + sujet + verbe à la base, <b>sans -s</b> : <i>Where does your sister work?</i>' },
    { type: 'listen', say: 'When does the training session start?', accent: 'en-GB', q: 'Tu entends une question (style TOEIC Partie 2). Quelle est la meilleure réponse ?', options: ['In Room 204.', 'At nine thirty.', 'Yes, it does.'], answer: 1, explain: '<b>When</b> → on attend un moment : <i>At nine thirty</i>. <i>In Room 204</i> répond à <i>Where</i>, et on ne répond pas <i>Yes</i> à une question en <i>wh-</i>.' },
    { type: 'listen', say: 'How long is the lunch break?', accent: 'en-AU', q: 'Tu entends une question (style TOEIC Partie 2). Quelle est la meilleure réponse ?', options: ['Every day at noon.', 'About forty-five minutes.', 'In the cafeteria.'], answer: 1, explain: '<b>How long</b> → une <b>durée</b> : <i>About forty-five minutes</i>. <i>Every day at noon</i> répondrait à <i>How often</i> ou <i>When</i>, et <i>In the cafeteria</i> à <i>Where</i>.' },
    { type: 'listen', say: 'Why is Laura at home today?', q: 'Tu entends une question (style TOEIC Partie 2). Quelle est la meilleure réponse ?', options: ['She has a bad cold.', 'Yes, she is.', "At eight o'clock."], answer: 0, explain: '<b>Why</b> → une <b>raison</b>. <i>She has a bad cold</i> (elle a un gros rhume) explique pourquoi, même sans <i>because</i> : au TOEIC, la bonne réponse ne commence pas toujours par <i>because</i>.' }
  ]
});
