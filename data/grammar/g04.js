LE.register({
  id: 'g04',
  kind: 'grammar',
  title: 'Le pluriel, dénombrables et indénombrables',
  subtitle: 'Desks, companies, people… et pourquoi on ne dit jamais « informations » en anglais',
  level: 'A1',
  minutes: 35,
  goals: [
    'Former le pluriel des noms : <i>desks, boxes, companies, shelves</i>',
    'Connaître les pluriels irréguliers : <i>men, women, children, people</i>',
    'Reconnaître les noms <b>indénombrables</b> du TOEIC (<i>information, advice, equipment…</i>) : pas de <i>a</i>, pas de <b>-s</b>, verbe au singulier',
    'Compter l’indénombrable avec <b>a piece of</b> et dire <i>a ten-minute break</i> sans <b>s</b>'
  ],
  blocks: [
    { type: 'h', text: 'À quoi ça sert ?' },
    { type: 'p', html: 'Comme en français, on met en général un <b>-s</b> au pluriel. Mais en anglais, ce <b>s</b> se <b>prononce</b>, et certains mots ont un pluriel irrégulier. Surtout, beaucoup de noms que le français met au pluriel (« des informations », « des conseils », « des meubles ») ne se comptent pas en anglais. Le TOEIC adore ce piège, en <b>Partie 5</b> comme dans les e-mails de la <b>Partie 7</b>.' },

    { type: 'h', text: 'Le pluriel régulier : on ajoute -s' },
    { type: 'table', head: ['Le mot se termine par…', 'Règle', 'Exemples'], rows: [
      ['la plupart des lettres', '+ <b>s</b>', 'desk → desks, client → clients'],
      ['-s, -ss, -sh, -ch, -x', '+ <b>es</b>', 'bus → buses, class → classes, dish → dishes, box → boxes'],
      ['consonne + <b>y</b>', '<b>y</b> → <b>ies</b>', 'company → companies, city → cities'],
      ['voyelle + <b>y</b>', '+ <b>s</b>', 'day → days, key → keys'],
      ['-f / -fe (souvent)', '→ <b>ves</b>', 'shelf → shelves, knife → knives, wife → wives'],
      ['-o', '+ <b>s</b> ou + <b>es</b>', 'photo → photos, potato → potatoes']
    ], caption: 'Quelques mots en -f prennent simplement un <b>s</b> : <i>roof → roofs</i>, <i>chief → chiefs</i>. Retiens surtout <b>-ies</b> et <b>-ves</b>.' },
    { type: 'examples', items: [
      { en: 'I have two meetings today.', fr: 'J’ai deux réunions aujourd’hui.' },
      { en: 'The boxes are in the storage room.', fr: 'Les cartons sont dans la réserve.' },
      { en: 'We have offices in three cities.', fr: 'Nous avons des bureaux dans trois villes.' },
      { en: 'The shelves are full.', fr: 'Les étagères sont pleines.' }
    ] },
    { type: 'box', style: 'tip', title: 'Le -s s’entend !', html: 'Contrairement au français, le <b>-s</b> du pluriel se prononce : /s/ dans <i>desks</i>, /z/ dans <i>days</i>, et /ɪz/, avec une syllabe en plus, dans <i>boxes</i> ou <i>offices</i>. Au TOEIC, écoute bien la fin des mots : <i>the price</i> ≠ <i>the prices</i>. (Tous les détails dans la leçon « Les terminaisons -s et -ed à l’oral ».)' },

    { type: 'h', text: 'Les pluriels irréguliers' },
    { type: 'p', html: 'Quelques noms très fréquents ne prennent pas de <b>-s</b> : ils changent de forme. Ils sont peu nombreux, mais il faut les connaître par cœur.' },
    { type: 'table', head: ['Singulier', 'Pluriel', 'Français'], rows: [
      ['man', '<b>men</b>', 'homme(s)'],
      ['woman', '<b>women</b>', 'femme(s)'],
      ['child', '<b>children</b>', 'enfant(s)'],
      ['person', '<b>people</b>', 'personne(s), gens'],
      ['foot', '<b>feet</b>', 'pied(s)'],
      ['tooth', '<b>teeth</b>', 'dent(s)']
    ], caption: '<i>Woman</i> se prononce à peu près « wou-meune » et <i>women</i> « oui-mine » : la différence s’entend sur la 1ʳᵉ syllabe.' },
    { type: 'examples', items: [
      { en: 'The team has five women and three men.', fr: 'L’équipe compte cinq femmes et trois hommes.' },
      { en: 'Her children are at school.', fr: 'Ses enfants sont à l’école.' },
      { en: 'About twenty people are at the meeting.', fr: 'Environ vingt personnes sont à la réunion.' },
      { en: 'My feet are cold.', fr: 'J’ai froid aux pieds.', note: 'Un pied → <i>a foot</i> ; deux pieds → <i>two feet</i>.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : people', html: '<b>People</b> est déjà un pluriel : il prend <b>are</b> et jamais de <b>s</b>.<br><span class="ko">The people is nice.</span> → <span class="ok">The people are nice.</span><br>« Une personne » → <b>a person</b> ; « deux personnes » → <b>two people</b>. (<i>Peoples</i> existe, mais veut dire « les peuples ».)' },

    { type: 'h', text: 'Les noms toujours au pluriel' },
    { type: 'p', html: 'Certains noms sont <b>toujours pluriels</b> : ils prennent un verbe au pluriel (<i>are</i>) et on ne met jamais <i>a</i> devant.' },
    { type: 'table', head: ['Anglais', 'Français', 'Exemple'], rows: [
      ['<b>people</b>', 'les gens', 'People <b>are</b> friendly here.'],
      ['<b>police</b>', 'la police', 'The police <b>are</b> here.'],
      ['<b>clothes</b>', 'les vêtements', 'My clothes <b>are</b> in the bag.'],
      ['<b>pants</b> (US) / <b>trousers</b> (UK)', 'un pantalon', 'These pants <b>are</b> new.'],
      ['<b>glasses</b>', 'des lunettes', 'My glasses <b>are</b> on the desk.'],
      ['<b>goods</b>', 'des marchandises', 'The goods <b>are</b> in the warehouse.']
    ], caption: '« Un pantalon » se dit <b>a pair of pants</b> ; « des lunettes », <b>a pair of glasses</b>. Attention : en anglais britannique, <i>pants</i> veut dire « slip, culotte » !' },

    { type: 'h', text: 'Dénombrable ou indénombrable ?' },
    { type: 'p', html: 'Un nom <b>dénombrable</b> (en anglais <i>countable</i>) désigne une chose qu’on peut compter : <i>one chair, two chairs</i>. Un nom <b>indénombrable</b> (<i>uncountable</i>) désigne une masse, une matière ou une idée qu’on ne compte pas : <i>water, money, advice</i>. Ça change toute la phrase :' },
    { type: 'table', head: ['Question', 'Dénombrable', 'Indénombrable'], rows: [
      ['Exemples', 'a chair, a job, a suitcase', 'furniture, work, luggage'],
      ['<b>a / an</b> devant ?', 'oui : <i>a chair</i>', '<b>non</b> : <span class="ko">a furniture</span>'],
      ['Pluriel en <b>-s</b> ?', 'oui : <i>chairs</i>', '<b>non</b> : <span class="ko">furnitures</span>'],
      ['Verbe', 'singulier ou pluriel : <i>The chair is… / The chairs are…</i>', 'toujours <b>singulier</b> : <i>The furniture <b>is</b> new.</i>']
    ] },
    { type: 'box', style: 'warn', title: 'LE grand piège : « des informations »', html: 'En français, on dit « <b>des</b> informations », « <b>des</b> conseils », « <b>des</b> meubles », « <b>des</b> bagages ». En anglais, ces mots sont <b>indénombrables</b> : ni <i>a</i>, ni <b>-s</b>, et un verbe au <b>singulier</b>.<br><span class="ko">some informations</span> → <span class="ok">some information</span><br><span class="ko">an advice</span> → <span class="ok">some advice</span> / <span class="ok">a piece of advice</span><br><span class="ko">The furnitures are new.</span> → <span class="ok">The furniture is new.</span>' },

    { type: 'h', text: 'La liste essentielle du TOEIC' },
    { type: 'table', head: ['Indénombrable', 'Français', 'Exemple'], rows: [
      ['<b>information</b>', 'des informations, des renseignements', 'The information <b>is</b> on our website.'],
      ['<b>advice</b>', 'des conseils', 'Thanks for your advice.'],
      ['<b>equipment</b>', 'du matériel, des équipements', 'The new equipment <b>is</b> expensive.'],
      ['<b>furniture</b>', 'des meubles, le mobilier', 'The office furniture <b>is</b> modern.'],
      ['<b>luggage</b> / <b>baggage</b>', 'des bagages', 'My luggage <b>is</b> heavy.'],
      ['<b>news</b>', 'des nouvelles, les infos', 'The news <b>is</b> good!'],
      ['<b>research</b>', 'des recherches', 'Their research <b>is</b> important.'],
      ['<b>feedback</b>', 'des commentaires, des retours', 'Customer feedback <b>is</b> useful.'],
      ['<b>software</b>', 'des logiciels', 'The software <b>is</b> easy to use.'],
      ['<b>money</b>', 'l’argent', 'Money <b>isn’t</b> a problem.'],
      ['<b>work</b>', 'le travail', 'I have a lot of work today.'],
      ['<b>traffic</b>', 'la circulation', 'The traffic <b>is</b> bad this morning.'],
      ['<b>knowledge</b>', 'les connaissances', 'His knowledge of finance <b>is</b> impressive.'],
      ['<b>homework</b>', 'les devoirs (à la maison)', 'The homework <b>is</b> easy.']
    ], caption: 'Et aussi : <i>water, bread, rice, weather, help, progress</i>… En règle générale : pas de <i>a</i>, pas de <b>s</b>.' },
    { type: 'box', style: 'warn', title: 'Piège : « news » et « work »', html: '<b>News</b> se termine par un <b>s</b>, mais c’est un indénombrable <b>singulier</b> :<br><span class="ko">The news are good.</span> → <span class="ok">The news is good.</span><br><b>Work</b> (le travail) est indénombrable : <span class="ko">a work</span> → <span class="ok">a job</span> (un emploi) ou <span class="ok">a task</span> (une tâche). Le mot <i>works</i> existe, mais dans un autre sens : <i>works of art</i> = des œuvres d’art.' },

    { type: 'h', text: 'Compter l’indénombrable : a piece of…' },
    { type: 'p', html: 'Pour compter un indénombrable, on ajoute devant un mot « compteur » qui, lui, se compte : <b>a piece of</b> (un élément de), <b>an item of</b>, <b>a bottle of</b>, <b>a cup of</b>… C’est ce mot-là qui prend le pluriel.' },
    { type: 'table', head: ['Indénombrable', 'Pour compter', 'Français'], rows: [
      ['advice', '<b>a piece of</b> advice', 'un conseil'],
      ['information', '<b>a piece of</b> information', 'une information'],
      ['furniture', '<b>a piece of</b> furniture / <b>two pieces of</b> furniture', 'un meuble / deux meubles'],
      ['equipment', '<b>a piece of</b> equipment', 'un appareil, un équipement'],
      ['luggage', '<b>a piece of</b> luggage / <b>an item of</b> luggage', 'un bagage'],
      ['news', '<b>a piece of</b> news', 'une nouvelle'],
      ['water / coffee', '<b>a bottle of</b> water / <b>a cup of</b> coffee', 'une bouteille d’eau / une tasse de café'],
      ['paper', '<b>a sheet of</b> paper', 'une feuille de papier']
    ], caption: 'Au pluriel, c’est le compteur qui prend le <b>s</b> : <span class="ok">two pieces of advice</span>, jamais <span class="ko">two pieces of advices</span>.' },
    { type: 'examples', items: [
      { en: 'Can I give you a piece of advice?', fr: 'Je peux te donner un conseil ?' },
      { en: 'We need some information about the hotel.', fr: 'Nous avons besoin d’informations sur l’hôtel.', note: '<b>some</b> = « du, de la, des » (une quantité non précisée) : il s’emploie aussi avec les indénombrables, qui restent sans <b>s</b>.' },
      { en: 'Each passenger can bring two pieces of luggage.', fr: 'Chaque passager peut apporter deux bagages.' },
      { en: 'Two bottles of water, please.', fr: 'Deux bouteilles d’eau, s’il vous plaît.' },
      { en: 'Two coffees, please!', fr: 'Deux cafés, s’il vous plaît !', note: 'Au café, <i>a coffee</i> = une tasse de café : dans ce cas précis, le mot se compte.' }
    ] },
    { type: 'p', html: 'Pour dire « beaucoup de », on utilise <b>many</b> avec les dénombrables (<i>How many clients?</i>) et <b>much</b> avec les indénombrables (<i>How much money?</i>), ou simplement <b>a lot of</b> avec les deux (<i>a lot of clients, a lot of work</i>). Tu verras tout cela en détail dans la leçon « Les quantifieurs : some, any, much, many, few, little… ».' },

    { type: 'h', text: 'Les mots composés : a ten-minute break' },
    { type: 'p', html: 'Quand un <b>nombre + un nom</b> servent d’adjectif devant un autre nom, on les relie par un trait d’union et le nom reste au <b>singulier</b> : en anglais, un adjectif ne prend jamais de <b>s</b>.' },
    { type: 'examples', items: [
      { en: "Let's take a ten-minute break.", fr: 'Faisons une pause de dix minutes.', note: '<span class="ko">a ten-minutes break</span>' },
      { en: "It's a three-day conference.", fr: 'C’est une conférence de trois jours.' },
      { en: 'She has a two-year contract.', fr: 'Elle a un contrat de deux ans.' },
      { en: 'The break is ten minutes long.', fr: 'La pause dure dix minutes.', note: 'Ici, <i>minutes</i> n’est pas devant un nom → il garde son <b>s</b>.' }
    ] },
    { type: 'dialog', title: 'À la réception de l’hôtel', lines: [
      { speaker: 'M', en: 'Good evening. Do you have any luggage?', fr: 'Bonsoir. Vous avez des bagages ?' },
      { speaker: 'W', en: 'Yes, two pieces: this suitcase and this bag.', fr: 'Oui, deux : cette valise et ce sac.' },
      { speaker: 'M', en: "Perfect. Here's some information about the hotel.", fr: 'Parfait. Voici des informations sur l’hôtel.' },
      { speaker: 'W', en: 'Thank you. Is parking free?', fr: 'Merci. Le stationnement est gratuit ?' },
      { speaker: 'M', en: 'Yes, it is. And breakfast is from seven to ten.', fr: 'Oui. Et le petit-déjeuner est servi de 7 h à 10 h.' },
      { speaker: 'W', en: 'Great. Any advice for dinner?', fr: 'Super. Vous avez un conseil pour le dîner ?' },
      { speaker: 'M', en: 'Yes, the restaurant on the corner is excellent.', fr: 'Oui, le restaurant au coin de la rue est excellent.' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'La <b>Partie 5</b> adore ce thème. Deux réflexes :<br>1) Un nom indénombrable n’a <b>jamais</b> de <i>a</i> ni de <b>-s</b> : <i>For more -------, visit our website.</i> → <b>information</b> (pas <i>informations</i>).<br>2) Regarde le verbe : <i>The new equipment ------- expensive.</i> → <b>is</b> (singulier).<br>Les documents de la <b>Partie 7</b> parlent sans cesse de <i>luggage, equipment, furniture, feedback</i>.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• Pluriel : <b>+s</b> (desks), <b>+es</b> (boxes), <b>-ies</b> (companies), <b>-ves</b> (shelves).<br>• Irréguliers : <b>men, women, children, people, feet, teeth</b>.<br>• Toujours pluriels : <i>people, police, clothes, pants, glasses, goods</i> → <b>are</b>.<br>• Indénombrables (<i>information, advice, equipment, furniture, luggage, news, work…</i>) : pas de <i>a</i>, pas de <b>-s</b>, verbe au <b>singulier</b>.<br>• Pour compter : <b>a piece of</b> advice, <b>two pieces of</b> luggage.<br>• Nombre + nom devant un nom : <b>a ten-minute break</b> (sans s).' }
  ],
  exercises: [
    { type: 'mcq', q: 'Quel est le pluriel de <i>company</i> ?', options: ['companys', 'companies', 'companyes'], answer: 1, explain: 'Consonne + <b>y</b> (n + y) → <b>-ies</b> : <i>companies</i>.' },
    { type: 'gap', q: 'Two ___ (box) are on the table.', answers: ['boxes'], explain: 'Les mots en <b>-x</b> prennent <b>-es</b> au pluriel : <i>boxes</i>.' },
    { type: 'gap', q: 'The ___ (shelf) in the storage room are full.', answers: ['shelves'], explain: '<i>Shelf</i> se termine par <b>-f</b> → pluriel en <b>-ves</b> : <i>shelves</i>.' },
    { type: 'mcq', q: 'Quel est le pluriel de <i>child</i> ?', options: ['childs', 'childrens', 'children', 'childes'], answer: 2, explain: 'Pluriel irrégulier : <i>child</i> → <b>children</b>, sans <b>s</b>. <i>Childrens</i> n’existe pas.' },
    { type: 'mcq', q: 'Comment dit-on « trois personnes » ?', options: ['three person', 'three people', 'three peoples'], answer: 1, explain: 'Le pluriel courant de <i>person</i> est <b>people</b>. <i>Peoples</i> veut dire « des peuples ».' },
    { type: 'mcq', q: 'Quelle phrase est correcte ?', options: ['I need an information.', 'I need some informations.', 'I need some information.', 'I need informations.'], answer: 2, explain: '<i>Information</i> est <b>indénombrable</b> : jamais de <i>an</i>, jamais de <b>-s</b>.' },
    { type: 'gap', q: 'The furniture in this office ___ (be, au présent) new.', answers: ['is'], explain: '<i>Furniture</i> est indénombrable → verbe au <b>singulier</b> : <i>is</i>.' },
    { type: 'mcq', q: 'Comment dit-on « un conseil » ?', options: ['an advice', 'a piece of advice', 'an advise', 'a advice'], answer: 1, explain: '<i>Advice</i> est indénombrable : pour en compter un, on dit <b>a piece of advice</b>. <i>Advise</i> (avec un s) est le verbe « conseiller ».' },
    { type: 'gap', q: 'The news ___ (be, au présent) very good today!', answers: ['is'], explain: 'Malgré son <b>s</b>, <i>news</i> est un indénombrable <b>singulier</b> → <i>is</i>.' },
    { type: 'gap', q: 'Let\'s take a ___ break. (dix minutes, avec un trait d’union)', answers: ['ten-minute', '10-minute'], explain: 'Nombre + nom devant un autre nom = adjectif → pas de <b>s</b> : <i>a ten-minute break</i>.' },
    { type: 'order', answer: 'The new equipment is very expensive.', fr: 'Le nouveau matériel est très cher.', explain: '<i>Equipment</i> est indénombrable → pas de <b>s</b> et verbe au singulier : <b>is</b>.' },
    { type: 'order', answer: 'We need two bottles of water.', fr: 'Nous avons besoin de deux bouteilles d’eau.', explain: '<i>Water</i> ne se compte pas : c’est le compteur <b>bottle</b> qui prend le <b>s</b>.' },
    { type: 'listen', say: 'The prices are on the last page.', accent: 'en-CA', q: 'Qu’as-tu entendu ?', options: ['Le prix est à la dernière page.', 'Les prix sont à la dernière page.', 'Les prix sont à la première page.'], answer: 1, explain: 'On entend <i>prices</i> (avec une syllabe en plus, /ɪz/) et <i>are</i> : c’est un pluriel. <i>Last</i> = dernière.' },
    { type: 'dictation', say: 'The women are in the meeting room.', accent: 'en-GB', answers: ['The women are in the meeting room'], explain: '« Les femmes sont dans la salle de réunion. » <b>Women</b> (pluriel irrégulier de <i>woman</i>) + <b>are</b>.' },
    { type: 'mcq', q: 'For more -------, please visit our website. <small>(style TOEIC)</small>', options: ['information', 'informations', 'an information', 'informative'], answer: 0, explain: '<i>Information</i> est indénombrable : ni <i>an</i>, ni <b>-s</b>. <i>Informative</i> est un adjectif (instructif).' },
    { type: 'mcq', q: 'Each passenger may bring two pieces of -------. <small>(style TOEIC)</small>', options: ['luggage', 'luggages', 'baggages', 'a luggage'], answer: 0, explain: '<i>Luggage</i> (comme <i>baggage</i>) est indénombrable : on compte avec <b>pieces of</b>, et le mot lui-même ne prend jamais de <b>s</b>.' }
  ]
});
