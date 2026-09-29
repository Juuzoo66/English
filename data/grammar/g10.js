LE.register({
  id: 'g10',
  kind: 'grammar',
  title: 'Les adverbes de fréquence',
  subtitle: 'Dire à quelle fréquence on fait les choses : always, often, sometimes, never…',
  level: 'A1',
  minutes: 30,
  goals: [
    'Connaître les adverbes de fréquence, de <i>always</i> (toujours) à <i>never</i> (jamais)',
    'Les placer correctement : <b>avant</b> un verbe normal, mais <b>après</b> <i>be</i>',
    'Demander et donner une fréquence : <i>How often…? — Twice a week.</i>',
    'Utiliser <i>never</i> sans ajouter <i>not</i> ni <i>don’t</i>'
  ],
  blocks: [
    { type: 'h', text: 'À quoi servent les adverbes de fréquence ?' },
    { type: 'p', html: 'Ce sont les petits mots qui disent <b>à quelle fréquence</b> on fait quelque chose : toujours, souvent, parfois, jamais… Ils vont très souvent avec le <b>présent simple</b>, puisqu’on parle d’habitudes (revois si besoin la leçon « Le présent simple : la forme affirmative »).' },
    { type: 'examples', items: [
      { en: 'I always check my email in the morning.', fr: 'Je consulte toujours mes e-mails le matin.' },
      { en: 'She often works from home.', fr: 'Elle travaille souvent de chez elle.' },
      { en: 'We sometimes have lunch together.', fr: 'Nous déjeunons parfois ensemble.' },
      { en: 'He never takes the bus.', fr: 'Il ne prend jamais le bus.' }
    ] },

    { type: 'h', text: 'L’échelle de fréquence' },
    { type: 'table', head: ['Adverbe', 'Fréquence', 'Français'], rows: [
      ['<b>always</b>', '100 %', 'toujours'],
      ['<b>usually</b>', 'environ 90 %', 'd’habitude, généralement'],
      ['<b>often</b>', 'environ 70 %', 'souvent'],
      ['<b>sometimes</b>', 'environ 50 %', 'parfois, quelquefois'],
      ['<b>occasionally</b>', 'environ 30 %', 'de temps en temps'],
      ['<b>rarely</b> / <b>seldom</b>', 'environ 10 %', 'rarement'],
      ['<b>hardly ever</b>', 'environ 5 %', 'presque jamais'],
      ['<b>never</b>', '0 %', 'jamais']
    ], caption: 'Les pourcentages sont approximatifs. Synonymes utiles : <i>normally</i> ≈ <i>usually</i> ; <i>frequently</i> ≈ <i>often</i>. <i>Seldom</i> est plus soutenu (plus formel) que <i>rarely</i>.' },
    { type: 'box', style: 'tip', title: 'Prononciation', html: '<i>often</i> se prononce le plus souvent « o-feune » : le <b>t</b> est généralement muet. <i>usually</i> se dit à peu près « you-jou-eu-li », avec l’accent sur « you ». Écoute bien les exemples de cette leçon pour les entendre.' },

    { type: 'h', text: 'Règle n°1 : l’adverbe se place AVANT le verbe' },
    { type: 'p', html: 'Avec un verbe « normal » (<i>work, go, drink, take…</i>), l’adverbe de fréquence se place <b>entre le sujet et le verbe</b>. C’est l’inverse du français, où l’adverbe vient <b>après</b> le verbe (« je bois <b>souvent</b> du café »).' },
    { type: 'table', head: ['Sujet', 'Adverbe', 'Verbe', 'Suite'], rows: [
      ['I', '<b>always</b>', 'drink', 'coffee at breakfast.'],
      ['She', '<b>often</b>', 'works', 'late.'],
      ['They', '<b>usually</b>', 'take', 'the train.'],
      ['We', '<b>never</b>', 'eat', 'at our desks.']
    ], caption: 'Sujet + <b>adverbe</b> + verbe : <i>She <b>often</b> works late.</i> Le verbe garde son -s avec he / she / it.' },
    { type: 'box', style: 'warn', title: 'Piège n°1 des francophones', html: 'On a envie de copier l’ordre du français, mais en anglais on ne sépare <b>jamais</b> le verbe de son complément :<br><span class="ko">I drink often coffee.</span> → <span class="ok">I often drink coffee.</span><br><span class="ko">She checks always her email.</span> → <span class="ok">She always checks her email.</span><br><span class="ko">He takes sometimes the bus.</span> → <span class="ok">He sometimes takes the bus.</span>' },
    { type: 'examples', items: [
      { en: 'I usually start work at nine.', fr: 'Je commence généralement le travail à neuf heures.' },
      { en: 'Mr. Park often travels to Seoul.', fr: 'M. Park se rend souvent à Séoul.' },
      { en: 'Our team rarely works on weekends.', fr: 'Notre équipe travaille rarement le week-end.' },
      { en: 'She hardly ever takes a day off.', fr: 'Elle ne prend presque jamais de jour de congé.' }
    ] },

    { type: 'h', text: 'Règle n°2 : avec be, l’adverbe se place APRÈS' },
    { type: 'p', html: 'Avec le verbe <b>be</b> (<i>am, is, are</i>), c’est différent : l’adverbe se place <b>après</b> <i>be</i>. Ici, l’ordre ressemble au français : « elle est <b>souvent</b> en retard » → <i>she is <b>often</b> late</i>.' },
    { type: 'table', head: ['Verbe normal : adverbe AVANT', 'Verbe be : adverbe APRÈS'], rows: [
      ['She <b>often</b> works late.', 'She is <b>often</b> late.'],
      ['I <b>always</b> eat at noon.', 'I am <b>always</b> hungry at noon.'],
      ['They <b>never</b> take the bus.', 'They are <b>never</b> on time.'],
      ['He <b>usually</b> answers quickly.', 'He is <b>usually</b> very busy.']
    ] },
    { type: 'examples', items: [
      { en: "I'm always tired on Monday mornings.", fr: 'Je suis toujours fatiguée le lundi matin.' },
      { en: 'The manager is usually in her office.', fr: 'La responsable est généralement dans son bureau.' },
      { en: 'The trains are rarely late.', fr: 'Les trains sont rarement en retard.' },
      { en: "He's never at his desk after five.", fr: 'Il n’est jamais à son bureau après 17 h.' }
    ] },

    { type: 'h', text: 'Règle n°3 : avec deux verbes, l’adverbe se glisse entre les deux' },
    { type: 'p', html: 'Quand la phrase contient un <b>auxiliaire</b> (un petit « verbe d’aide » comme <i>can</i>, <i>do</i>, <i>don’t</i> ou <i>have</i>) suivi du verbe principal, l’adverbe se place <b>entre l’auxiliaire et le verbe</b>.' },
    { type: 'examples', items: [
      { en: 'You can always call me.', fr: 'Tu peux toujours m’appeler.', note: '<i>can</i> + <b>always</b> + <i>call</i>.' },
      { en: "We don't usually work on Saturdays.", fr: 'D’habitude, nous ne travaillons pas le samedi.', note: 'Négation : <i>don’t</i> + <b>usually</b> + <i>work</i>.' },
      { en: 'Do you often travel for work?', fr: 'Est-ce que tu voyages souvent pour le travail ?', note: 'Question : <i>Do</i> + sujet + <b>often</b> + <i>travel</i>.' },
      { en: 'I have never been to Japan.', fr: 'Je ne suis jamais allée au Japon.', note: 'Ce temps (le <i>present perfect</i>) viendra plus tard : retiens juste la place de <i>never</i>.' }
    ] },

    { type: 'h', text: 'Début ou fin de phrase ?' },
    { type: 'p', html: 'La place « au milieu » (règles 1 à 3) est toujours correcte. Mais <b>sometimes</b>, <b>usually</b> et <b>occasionally</b> peuvent aussi se mettre en <b>début de phrase</b>, pour insister. <b>Sometimes</b> se met aussi volontiers en <b>fin de phrase</b>. En revanche, <b>always</b> et <b>never</b> restent au milieu de la phrase (sauf dans les consignes à l’impératif : <i>Always lock the door.</i>, « Ferme toujours la porte à clé »).' },
    { type: 'examples', items: [
      { en: 'Sometimes I work from home.', fr: 'Parfois, je travaille de chez moi.' },
      { en: 'I work from home sometimes.', fr: 'Je travaille de chez moi, parfois.' },
      { en: 'Usually, the bus is on time.', fr: 'D’habitude, le bus est à l’heure.' },
      { en: 'Occasionally, we have meetings on Saturdays.', fr: 'De temps en temps, nous avons des réunions le samedi.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : never = pas de not', html: '<i>Never</i> contient déjà la négation : c’est « ne… jamais » en un seul mot. On n’ajoute donc ni <i>not</i>, ni <i>don’t / doesn’t</i> :<br><span class="ko">I don’t never drink coffee.</span> → <span class="ok">I never drink coffee.</span><br><span class="ko">She doesn’t never eat meat.</span> → <span class="ok">She never eats meat.</span> (sans <i>doesn’t</i>, le verbe reprend son <b>-s</b> !)<br>Même chose pour <i>hardly ever</i> et <i>rarely</i>, qui ont déjà un sens négatif.' },

    { type: 'h', text: 'Demander la fréquence : How often…?' },
    { type: 'p', html: '<b>How often</b> = « à quelle fréquence ? », « tous les combien ? ». La question se construit comme toutes les questions au présent simple : <i>How often <b>do</b> you…? How often <b>does</b> she…?</i> (voir la leçon « Le présent simple : négation et questions »). Pour répondre, on utilise un adverbe ou une <b>expression de fréquence</b>.' },
    { type: 'table', head: ['Expression', 'Français'], rows: [
      ['every day / every week / every month', 'tous les jours / toutes les semaines / tous les mois'],
      ['<b>once</b> a week', '<b>une fois</b> par semaine'],
      ['<b>twice</b> a month', '<b>deux fois</b> par mois'],
      ['three times a year', 'trois fois par an'],
      ['every two weeks', 'toutes les deux semaines'],
      ['on weekends / on Mondays', 'le week-end / le lundi']
    ], caption: 'Ces expressions se placent en <b>fin de phrase</b> (ou en début, pour insister) : <i>I go to the gym <b>twice a week</b>.</i>' },
    { type: 'box', style: 'tip', title: 'Once, twice, three times', html: '1 fois = <b>once</b>, 2 fois = <b>twice</b>, puis <b>three times</b>, <b>four times</b>… Et « par » se dit simplement <b>a</b> : <i>twice <b>a</b> week</i> (deux fois <b>par</b> semaine), <i>once <b>a</b> year</i> (une fois <b>par</b> an). Dans les documents officiels, tu verras aussi <b>per</b> : <i>three times per week</i>.' },
    { type: 'examples', items: [
      { en: 'How often do you go to the gym? — Twice a week.', fr: 'Tu vas à la salle de sport tous les combien ? — Deux fois par semaine.' },
      { en: 'How often does the shuttle run? — Every twenty minutes.', fr: 'La navette passe tous les combien ? — Toutes les vingt minutes.' },
      { en: 'How often do you travel for work? — Three or four times a year.', fr: 'À quelle fréquence voyages-tu pour le travail ? — Trois ou quatre fois par an.' },
      { en: 'We have a team meeting once a week, on Mondays.', fr: 'Nous avons une réunion d’équipe une fois par semaine, le lundi.' }
    ] },
    { type: 'box', style: 'tip', title: 'Do you ever…?', html: 'Dans une question, <b>ever</b> veut dire « parfois, à un moment ou à un autre » : <i>Do you <b>ever</b> work late?</i> = « Est-ce qu’il t’arrive de travailler tard ? ». On répond avec un adverbe : <i>Yes, sometimes.</i> / <i>No, never.</i>' },
    { type: 'dialog', title: 'Les habitudes de Marco', lines: [
      { speaker: 'W', en: 'How often do you work from home, Marco?', fr: 'Tu télétravailles tous les combien, Marco ?' },
      { speaker: 'M', en: 'Usually twice a week, on Tuesdays and Thursdays.', fr: 'En général deux fois par semaine, le mardi et le jeudi.' },
      { speaker: 'W', en: 'Do you ever come to the office on Fridays?', fr: 'Il t’arrive de venir au bureau le vendredi ?' },
      { speaker: 'M', en: "Sometimes, but I'm hardly ever here after four.", fr: 'Parfois, mais je ne suis presque jamais là après 16 h.' },
      { speaker: 'W', en: 'And how often do you visit the factory?', fr: 'Et tu vas à l’usine tous les combien ?' },
      { speaker: 'M', en: 'Once a month. I never miss the safety meeting.', fr: 'Une fois par mois. Je ne rate jamais la réunion sur la sécurité.' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 5</b>, on teste souvent la <b>place</b> de l’adverbe : <i>Mr. Silva ------- the sales figures on Fridays.</i> → <b>usually reviews</b> (adverbe avant le verbe, et -s au verbe). On teste aussi le <b>sens</b> : lis la phrase jusqu’au bout, car un indice comme <i>so</i> (donc) ou <i>but</i> (mais) t’aide à choisir entre une fréquence haute (<i>always</i>) et basse (<i>rarely</i>). En <b>Partie 2</b>, une question en <i>How often…?</i> attend une fréquence (<i>Every Monday. / About twice a year.</i>) : élimine les réponses qui donnent un lieu ou une heure précise.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• De 100 % à 0 % : <i>always, usually, often, sometimes, occasionally, rarely / seldom, hardly ever, never</i>.<br>• Place : <b>avant</b> un verbe normal (<i>I often drink coffee</i>), <b>après</b> be (<i>She is often late</i>), <b>entre</b> l’auxiliaire et le verbe (<i>I don’t usually work…</i>).<br>• Jamais entre le verbe et son complément : <span class="ko">I drink often coffee</span>.<br>• <i>Never</i> est déjà négatif : pas de <i>not</i> ni de <i>don’t</i>.<br>• <i>How often…?</i> → <i>every day, once a week, twice a month, three times a year</i>.' }
  ],
  exercises: [
    { type: 'mcq', q: 'Quel ordre va du plus fréquent au moins fréquent ?', options: ['always → often → sometimes → never', 'often → always → never → sometimes', 'sometimes → often → always → never'], answer: 0, explain: '<i>always</i> (100 %) → <i>often</i> (environ 70 %) → <i>sometimes</i> (environ 50 %) → <i>never</i> (0 %).' },
    { type: 'mcq', q: 'Choisis la phrase correcte.', options: ['I drink often coffee.', 'I often drink coffee.', 'I often coffee drink.'], answer: 1, explain: 'Avec un verbe normal, l’adverbe se place <b>avant le verbe</b> : <i>I <b>often</b> drink coffee</i>. On ne sépare jamais le verbe (<i>drink</i>) de son complément (<i>coffee</i>).' },
    { type: 'mcq', q: 'Choisis la phrase correcte.', options: ['He is never late for meetings.', 'He never late for meetings.', 'He is late never for meetings.'], answer: 0, explain: 'Avec <b>be</b>, l’adverbe se place <b>après</b> le verbe : <i>He is <b>never</b> late</i>. Et on ne peut pas supprimer <i>is</i>.' },
    { type: 'gap', q: 'I ___ (usually / start) work at nine.', answers: ['usually start'], explain: 'Verbe normal → adverbe <b>avant</b> le verbe : <i>I <b>usually</b> start</i>.' },
    { type: 'gap', q: 'My manager ___ (often / travel) to Asia.', answers: ['often travels'], explain: 'Adverbe avant le verbe, et <i>my manager</i> = he / she → <b>-s</b> : <i>often travels</i>.' },
    { type: 'gap', q: 'The shops ___ (usually / be) open on Sundays.', answers: ['are usually'], explain: 'Avec <b>be</b>, l’adverbe se place <b>après</b> : <i>The shops <b>are usually</b> open</i>. <i>The shops</i> = they → <i>are</i>.' },
    { type: 'gap', q: 'Ms. Ito ___ (never / eat) meat.', answers: ['never eats'], explain: '<i>Never</i> se place avant le verbe, sans <i>doesn’t</i>. Le verbe garde donc son <b>-s</b> : <i>she <b>never eats</b></i>.' },
    { type: 'gap', q: 'We visit our clients ___ a year. (trois fois)', answers: ['three times', '3 times'], explain: 'Après <i>once</i> (1 fois) et <i>twice</i> (2 fois), on dit <b>three times</b>, <i>four times</i>… + <i>a year</i> (par an).' },
    { type: 'mcq', q: '— ___ do you go to the gym? — Twice a week.', options: ['How often', 'How much', 'How long', 'What time'], answer: 0, explain: 'La réponse est une fréquence (<i>twice a week</i>) → la question est <b>How often</b> (tous les combien).' },
    { type: 'mcq', q: 'Choisis la phrase correcte.', options: ["I don't never work on Sundays.", 'I never work on Sundays.', "I never don't work on Sundays.", 'I not never work on Sundays.'], answer: 1, explain: '<i>Never</i> est déjà négatif (« ne… jamais ») : on n’ajoute ni <i>don’t</i> ni <i>not</i> → <b>I never work</b>.' },
    { type: 'order', answer: 'They hardly ever take a day off.', fr: 'Ils ne prennent presque jamais de jour de congé.', explain: '<i>Hardly ever</i> (presque jamais) se place comme <i>never</i> : entre le sujet et le verbe.' },
    { type: 'order', answer: 'How often does the airport bus run?', fr: 'Le bus de l’aéroport passe tous les combien ?', explain: '<b>How often</b> + <b>does</b> + sujet (<i>the airport bus</i>) + base verbale (<i>run</i>).' },
    { type: 'listen', say: 'I usually take the train to work, but on Fridays I sometimes drive.', q: 'Comment cette personne va-t-elle au travail le vendredi ?', options: ['Toujours en train.', 'Parfois en voiture.', 'Jamais en voiture.'], answer: 1, explain: '<i>On Fridays I <b>sometimes drive</b></i> : le vendredi, elle prend <b>parfois</b> la voiture (<i>drive</i> = conduire). En temps normal, elle prend <i>usually</i> (généralement) le train.', accent: 'en-CA' },
    { type: 'listen', say: 'How often do you visit your clients?', q: 'Quelle est la réponse logique ?', options: ['About twice a month.', 'At their main office.', 'Yes, I often do.'], answer: 0, explain: '<i>How often</i> demande une <b>fréquence</b> → <i>About twice a month</i> (environ deux fois par mois). <i>At their main office</i> répond à <i>Where</i>, et on ne répond pas <i>Yes</i> à une question en <i>How</i>.', accent: 'en-AU' },
    { type: 'mcq', q: 'Ms. Rossi ------- her e-mails before lunch. <small>(style TOEIC)</small>', options: ['checks always', 'always checks', 'always check', 'check always'], answer: 1, explain: 'L’adverbe se place <b>avant</b> le verbe, et <i>Ms. Rossi</i> = she → <b>-s</b> : <i>always checks</i>.' },
    { type: 'mcq', q: 'Customers ------- complain about our delivery service, so we are very proud of it. <small>(style TOEIC)</small>', options: ['always', 'often', 'rarely', 'usually'], answer: 2, explain: 'On est fiers du service (<i>so we are very proud</i>) → les clients se plaignent <b>rarement</b> : <i>rarely</i>. Avec <i>always, often</i> ou <i>usually</i>, la phrase n’aurait pas de sens.' }
  ]
});
