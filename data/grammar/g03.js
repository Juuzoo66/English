LE.register({
  id: 'g03',
  kind: 'grammar',
  title: 'Les articles : a, an, the ou rien',
  subtitle: 'Un, une, le, la, les… et surtout quand l’anglais ne met aucun article',
  level: 'A1',
  minutes: 35,
  goals: [
    'Choisir entre <b>a</b> et <b>an</b> en écoutant le <b>son</b> du mot (<i>an hour, a university</i>)',
    'Mettre <b>a / an</b> devant un métier : <i>She’s an engineer.</i>',
    'Utiliser <b>the</b> pour une chose précise ou unique : <i>the CEO of our company</i>',
    'Ne <b>rien</b> mettre quand on parle en général : <i>I like coffee.</i>, <i>at work</i>, <i>by car</i>'
  ],
  blocks: [
    { type: 'h', text: 'À quoi ça sert ?' },
    { type: 'p', html: 'Les articles sont les petits mots devant les noms. En français, il y en a beaucoup : <i>un, une, des, le, la, les, l’</i>. En anglais, c’est plus simple : <b>a / an</b> (un, une) et <b>the</b> (le, la, les), qui ne changent jamais selon le genre. La vraie difficulté, c’est de savoir quand l’anglais ne met <b>aucun article</b>… alors que le français en met un.' },
    { type: 'table', head: ['Français', 'Anglais', 'Exemple'], rows: [
      ['un / une', '<b>a</b> / <b>an</b>', 'a desk, an office'],
      ['le / la / les (chose précise)', '<b>the</b>', 'the desk, the offices'],
      ['des', '<b>rien</b> (ou <i>some</i>)', 'desks, some desks'],
      ['le / la / les (en général)', '<b>rien</b>', 'I like coffee.']
    ], caption: '<b>The</b> est invariable : masculin, féminin, singulier, pluriel. <b>A / an</b> veut dire « un » : jamais devant un pluriel.' },

    { type: 'h', text: 'A ou an ? Écoute le son !' },
    { type: 'p', html: 'On utilise <b>a</b> devant un <b>son</b> de consonne et <b>an</b> devant un <b>son</b> de voyelle. Attention : c’est le <b>son</b> qui compte, pas la lettre écrite. Prononce le mot à voix haute avant de choisir.' },
    { type: 'table', head: ['Mots', 'Premier son', 'Article'], rows: [
      ['book, job, car', 'consonne', '<b>a</b> book, <b>a</b> job'],
      ['apple, office, email', 'voyelle', '<b>an</b> apple, <b>an</b> office, <b>an</b> email'],
      ['hotel, house', 'consonne (le <b>h</b> se prononce)', '<b>a</b> hotel, <b>a</b> house'],
      ['hour, honest', 'voyelle (le <b>h</b> est muet)', '<b>an</b> hour, <b>an</b> honest answer'],
      ['MBA, HR, SUV', 'voyelle (on dit « èm », « eitch », « èss »)', '<b>an</b> MBA, <b>an</b> HR manager'],
      ['university, European, uniform', 'son « you » = consonne', '<b>a</b> university, <b>a</b> European company'],
      ['one-way ticket', 'son « oua » = consonne', '<b>a</b> one-way ticket']
    ] },
    { type: 'box', style: 'warn', title: 'Piège : la lettre ne compte pas, seul le son compte', html: '<span class="ok">an hour</span> (le h est muet) mais <span class="ok">a hotel</span> (le h se prononce).<br><span class="ok">an MBA</span> (on entend « èm ») mais <span class="ok">a university</span> (on entend « you »).<br><span class="ko">an European company</span> → <span class="ok">a European company</span>' },
    { type: 'examples', items: [
      { en: 'We have an hour for lunch.', fr: 'Nous avons une heure pour déjeuner.' },
      { en: "He's an HR manager.", fr: 'Il est responsable RH.' },
      { en: "It's a European company.", fr: 'C’est une entreprise européenne.' },
      { en: 'She has an MBA from a university in Montreal.', fr: 'Elle a un MBA d’une université de Montréal.' },
      { en: 'Is this an email or a letter?', fr: 'C’est un e-mail ou une lettre ?' }
    ] },

    { type: 'h', text: 'A / an devant un métier' },
    { type: 'p', html: 'En français, on dit « Elle est ingénieure », sans article. En anglais, on met <b>obligatoirement a / an</b> devant un métier au singulier. Au pluriel, pas d’article : <i>a</i> veut dire « un ».' },
    { type: 'examples', items: [
      { en: "She's an engineer.", fr: 'Elle est ingénieure.' },
      { en: 'My brother is a lawyer.', fr: 'Mon frère est avocat.' },
      { en: "I'm an accountant.", fr: 'Je suis comptable.' },
      { en: "They're doctors.", fr: 'Ils sont médecins.', note: 'Pluriel → pas de <i>a</i> : <span class="ko">They’re a doctors.</span>' }
    ] },
    { type: 'box', style: 'warn', title: 'À ne jamais dire', html: '<span class="ko">She is engineer.</span> → <span class="ok">She is an engineer.</span><br><span class="ko">I am assistant.</span> → <span class="ok">I am an assistant.</span><br><span class="ko">He is a teachers.</span> → <span class="ok">He is a teacher.</span> / <span class="ok">They are teachers.</span>' },

    { type: 'h', text: 'The : une chose précise ou unique' },
    { type: 'p', html: '<b>The</b> se prononce /ðə/, et /ði/ devant un son de voyelle (<i>the office</i>). On l’utilise quand on sait <b>de quelle chose</b> on parle :' },
    { type: 'list', items: [
      '<b>On en a déjà parlé</b> : <i>We have a printer and a scanner. <b>The</b> printer is new.</i> (1ʳᵉ fois <i>a</i>, ensuite <i>the</i>)',
      '<b>Elle est unique</b> : <i><b>the</b> sun, <b>the</b> internet, <b>the</b> CEO of our company</i> (il n’y en a qu’un)',
      '<b>La suite de la phrase la précise</b> : <i><b>the</b> file on my desk</i>, <i><b>the</b> man in the blue suit</i>',
      '<b>C’est évident dans la situation</b> : <i>Close <b>the</b> door, please.</i> (la porte de la pièce où on est)'
    ] },
    { type: 'examples', items: [
      { en: 'We have a printer and a scanner. The printer is new.', fr: 'Nous avons une imprimante et un scanner. L’imprimante est neuve.' },
      { en: 'The sun is strong today.', fr: 'Le soleil tape fort aujourd’hui.' },
      { en: 'The CEO of our company is Canadian.', fr: 'Le PDG de notre entreprise est canadien.' },
      { en: 'The file on my desk is for you.', fr: 'Le dossier sur mon bureau est pour toi.' },
      { en: 'Can you open the window, please?', fr: 'Tu peux ouvrir la fenêtre, s’il te plaît ?' }
    ] },

    { type: 'h', text: 'L’article zéro : parler en général' },
    { type: 'p', html: 'Voici <b>la</b> grande différence avec le français. Quand on parle d’une chose <b>en général</b> (toutes les choses de ce type, une matière, une idée), le français met <i>le, la, les</i>, mais l’anglais ne met <b>rien</b>. On appelle ça l’« article zéro ».' },
    { type: 'table', head: ['Français (sens général)', 'Anglais : rien', 'Faux (au sens général)'], rows: [
      ['J’aime <b>le</b> café.', 'I like <b>coffee</b>.', '<span class="ko">I like the coffee.</span>'],
      ['<b>Les</b> ordinateurs sont utiles.', '<b>Computers</b> are useful.', '<span class="ko">The computers are useful.</span>'],
      ['<b>La</b> vie est belle.', '<b>Life</b> is beautiful.', '<span class="ko">The life is beautiful.</span>'],
      ['<b>Le</b> temps, c’est de l’argent.', '<b>Time</b> is money.', '<span class="ko">The time is the money.</span>'],
      ['J’adore <b>la</b> musique.', 'I love <b>music</b>.', '<span class="ko">I love the music.</span>']
    ], caption: 'Attention : <i>I like the coffee</i> existe, mais veut dire « j’aime <b>ce</b> café-là » (un café précis, par exemple celui de ce restaurant).' },
    { type: 'box', style: 'warn', title: 'Piège n°1 des francophones', html: 'Avant de mettre <i>the</i>, pose-toi la question : je parle de ces choses <b>en général</b>, ou de choses <b>précises</b> ?<br>• En général → <b>rien</b> : <i>Managers are busy.</i> (Les managers sont occupés.)<br>• Précis → <b>the</b> : <i><b>The</b> managers of this company are busy.</i> (Les managers de cette entreprise sont occupés.)' },
    { type: 'examples', items: [
      { en: 'I love coffee.', fr: 'J’adore le café.' },
      { en: 'Meetings are often long.', fr: 'Les réunions sont souvent longues.' },
      { en: "Money isn't everything.", fr: 'L’argent ne fait pas tout.' },
      { en: 'Is English difficult?', fr: 'L’anglais, c’est difficile ?', note: 'Les langues ne prennent jamais d’article : <i>English, French, Spanish</i>.' }
    ] },

    { type: 'h', text: 'Noms propres et pays' },
    { type: 'p', html: 'Les prénoms, les villes, la plupart des pays, les langues, les jours et les mois s’emploient <b>sans article</b>. Mais certains pays prennent <b>the</b> : ceux dont le nom contient <i>States, Kingdom, Republic, Emirates</i>, et ceux dont le nom est au pluriel.' },
    { type: 'table', head: ['Sans article', 'Avec the'], rows: [
      ['France, Japan, Canada, Mexico', '<b>the</b> United States (<b>the</b> US, <b>the</b> USA)'],
      ['Paris, London, Tokyo', '<b>the</b> United Kingdom (<b>the</b> UK)'],
      ['English, French, Spanish', '<b>the</b> Netherlands, <b>the</b> Philippines'],
      ['Monday, July, Christmas', '<b>the</b> United Arab Emirates']
    ], caption: '« Je vais <b>en</b> France / <b>aux</b> États-Unis » → <i>I’m going to France / to <b>the</b> US.</i>' },
    { type: 'examples', items: [
      { en: 'Emma is from Canada.', fr: 'Emma vient du Canada.', note: '« Le Canada » → <i>Canada</i>, sans article.' },
      { en: 'Our head office is in the United States.', fr: 'Notre siège social est aux États-Unis.' },
      { en: 'He lives in the UK.', fr: 'Il habite au Royaume-Uni.' },
      { en: 'France is a beautiful country.', fr: 'La France est un beau pays.' },
      { en: 'The meeting is on Monday.', fr: 'La réunion est lundi.', note: 'Jours de la semaine : pas d’article.' }
    ] },

    { type: 'h', text: 'Repas et expressions sans article' },
    { type: 'p', html: 'Certaines expressions très courantes se construisent <b>sans article</b> en anglais, alors que le français en met un. Apprends-les comme des blocs.' },
    { type: 'table', head: ['Anglais', 'Français'], rows: [
      ['have <b>breakfast</b> / <b>lunch</b> / <b>dinner</b>', 'prendre <b>le</b> petit-déjeuner / déjeuner / dîner'],
      ['<b>at work</b> / <b>at home</b>', '<b>au</b> travail / <b>à la</b> maison'],
      ['go <b>to work</b> / go <b>home</b>', 'aller <b>au</b> travail / rentrer <b>à la</b> maison'],
      ['go <b>to bed</b>', 'aller <b>au</b> lit, se coucher'],
      ['<b>by car</b> / <b>by train</b> / <b>by plane</b>', 'en voiture / en train / en avion'],
      ['<b>on foot</b>', 'à pied']
    ], caption: 'Attention : <b>go home</b>, sans <i>to</i> ! <span class="ko">go to home</span>, <span class="ko">go to the home</span>.' },
    { type: 'examples', items: [
      { en: 'What time is lunch?', fr: 'Le déjeuner est à quelle heure ?' },
      { en: 'Ms. Osei is at work.', fr: 'Mme Osei est au travail.' },
      { en: "I'm at home today.", fr: 'Je suis à la maison aujourd’hui.' },
      { en: 'We go to work by train.', fr: 'Nous allons au travail en train.' },
      { en: "It's late. Time to go to bed!", fr: 'Il est tard. C’est l’heure d’aller au lit !' }
    ] },
    { type: 'dialog', title: 'À la machine à café', lines: [
      { speaker: 'M', en: 'Hi! Are you the new accountant?', fr: 'Salut ! Tu es la nouvelle comptable ?' },
      { speaker: 'W', en: "Yes, I am. I'm Leila. I'm an accountant from the Lyon office.", fr: 'Oui. Je m’appelle Leila. Je suis comptable, je viens du bureau de Lyon.' },
      { speaker: 'M', en: 'Welcome! Coffee or tea?', fr: 'Bienvenue ! Café ou thé ?' },
      { speaker: 'W', en: 'Coffee, please. I love coffee!', fr: 'Un café, s’il te plaît. J’adore le café !' },
      { speaker: 'M', en: 'Here you go. The coffee here is very good.', fr: 'Tiens. Le café d’ici est très bon.' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 5</b>, on te demande parfois de choisir entre <i>a, an, the</i> ou aucun article. Retiens ces réflexes : <b>an</b> devant un son de voyelle, même si un adjectif s’intercale (<i>an experienced manager</i>) ; <b>the</b> devant une chose unique ou précisée (<i>the CEO, the first floor</i>) ; <b>rien</b> devant un pluriel ou une matière pris au sens général (<i>Customers like fast delivery.</i>). À l’oral (Parties 3 et 4), <i>a</i> et <i>the</i> sont prononcés très vite : c’est normal de presque ne pas les entendre.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• <b>a</b> + son de consonne, <b>an</b> + son de voyelle : <i>an hour, an MBA, a university, a European company</i>.<br>• Métier : <b>a / an</b> obligatoire (<i>She’s an engineer.</i>).<br>• <b>the</b> = chose précise, déjà connue ou unique (<i>the sun, the CEO of our company</i>).<br>• Sens général → <b>rien</b> : <i>I like coffee. Computers are useful.</i><br>• Pays sans article, sauf <i>the US, the UK, the Netherlands</i>…<br>• Sans article : <i>have lunch, at work, at home, go home, go to bed, by car</i>.' }
  ],
  exercises: [
    { type: 'mcq', q: 'Our company has ___ office in Toronto.', options: ['a', 'an'], answer: 1, explain: '<i>Office</i> commence par un son de voyelle → <b>an</b> office.' },
    { type: 'mcq', q: 'Quel groupe est correct ?', options: ['a hour / a university', 'an hour / a university', 'an hour / an university', 'a hour / an university'], answer: 1, explain: 'C’est le <b>son</b> qui compte : le h de <i>hour</i> est muet → <b>an</b> hour ; <i>university</i> commence par le son « you » (une consonne) → <b>a</b> university.' },
    { type: 'gap', q: 'He is ___ engineer. (Il est ingénieur.)', answers: ['an'], explain: 'Devant un métier, l’anglais met toujours <b>a / an</b>. <i>Engineer</i> commence par un son de voyelle → <b>an</b>.' },
    { type: 'mcq', q: 'Comment dit-on « Elle est avocate » ?', options: ['She is lawyer.', 'She is a lawyer.', 'She is an lawyer.'], answer: 1, explain: 'Métier au singulier → <b>a / an</b> obligatoire ; <i>lawyer</i> commence par une consonne → <b>a</b> lawyer.' },
    { type: 'mcq', q: 'Comment dit-on « J’aime le café » (le café en général) ?', options: ['I like the coffee.', 'I like coffee.', 'I like the coffees.'], answer: 1, explain: 'En général → <b>aucun article</b> : <i>I like coffee.</i> <i>I like the coffee</i> voudrait dire « j’aime ce café-là ».' },
    { type: 'gap', q: 'I love ___. (la musique, en général)', answers: ['music'], explain: '« La musique » au sens général → <b>music</b>, sans <i>the</i>.' },
    { type: 'gap', q: 'We have a printer and a scanner. ___ printer is new. (article)', answers: ['The'], explain: 'On a déjà parlé de l’imprimante (<i>a printer</i>) : on sait laquelle → <b>the</b>.' },
    { type: 'mcq', q: '___ CEO of our company is from Brazil.', options: ['A', 'An', 'The'], answer: 2, explain: 'Une entreprise n’a qu’un PDG : chose <b>unique</b> et précisée (<i>of our company</i>) → <b>the</b>.' },
    { type: 'mcq', q: 'Our head office is in ___.', options: ['United States', 'the United States', 'a United States'], answer: 1, explain: 'Les pays dont le nom contient <i>States, Kingdom</i>… prennent <b>the</b> : <i>the United States</i>. Mais <i>France, Canada</i>, sans article.' },
    { type: 'gap', q: 'We go to work by ___. (en train)', answers: ['train'], explain: 'Moyen de transport : <b>by</b> + nom <b>sans article</b> → <i>by train, by car, by plane</i>.' },
    { type: 'order', answer: 'She is an engineer at a European company.', fr: 'Elle est ingénieure dans une entreprise européenne.', explain: '<b>an</b> engineer (son de voyelle) et <b>a</b> European company (son « you »).' },
    { type: 'order', answer: 'Are you at work or at home?', alts: ['Are you at home or at work?'], fr: 'Tu es au travail ou à la maison ?', explain: '<i>At work</i> et <i>at home</i> se disent <b>sans article</b>, contrairement au français (« au travail », « à la maison »).' },
    { type: 'listen', say: "Hi, I'm Kofi. I'm an accountant, and my wife is a teacher. We live in the United States.", q: 'Qu’as-tu entendu ?', options: ['Kofi est comptable et sa femme est professeure.', 'Kofi est professeur et sa femme est comptable.', 'Kofi et sa femme sont comptables.'], answer: 0, explain: 'Kofi dit <i>I’m <b>an accountant</b></i> (je suis comptable) et <i>my wife is <b>a teacher</b></i> (ma femme est professeure).' },
    { type: 'dictation', say: 'She has an interview at a university.', accent: 'en-AU', answers: ['She has an interview at a university'], explain: '« Elle a un entretien dans une université. » <b>an</b> interview (son de voyelle), <b>a</b> university (son « you »).' },
    { type: 'mcq', q: 'Ms. Lindqvist is ------- experienced HR manager. <small>(style TOEIC)</small>', options: ['a', 'an', 'any', 'much'], answer: 1, explain: 'L’article se choisit selon le mot qui le <b>suit directement</b> : <i>experienced</i> commence par un son de voyelle → <b>an</b>.' },
    { type: 'mcq', q: 'All our products are made in ------- Netherlands. <small>(style TOEIC)</small>', options: ['a', 'an', 'the', 'this'], answer: 2, explain: 'Les pays au nom pluriel prennent <b>the</b> : <i>the Netherlands</i> (les Pays-Bas).' }
  ]
});
