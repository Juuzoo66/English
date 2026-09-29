LE.register({
  id: 'g06',
  kind: 'grammar',
  title: 'This, that, these, those et les adjectifs',
  subtitle: 'Montrer et décrire : this office, those big boxes, a very nice hotel',
  level: 'A1',
  minutes: 35,
  goals: [
    'Choisir entre <b>this, that, these, those</b> selon la distance et le nombre',
    'Utiliser <i>This is Anna.</i> (présenter, téléphoner) et <i>this one / that one</i>',
    'Placer l’adjectif <b>avant</b> le nom et ne jamais l’accorder : <i>two big offices</i>',
    'Décrire avec plusieurs adjectifs, des noms-adjectifs (<i>a sales manager</i>) et <i>very, really, quite</i>'
  ],
  blocks: [
    { type: 'h', text: 'This, that, these, those : montrer les choses' },
    { type: 'p', html: 'En français, on dit « ce, cet, cette, ces » et on ajoute parfois « -ci » ou « -là » (ce bureau-ci, ce bureau-là). L’anglais, lui, fait <b>toujours</b> la différence entre ce qui est <b>proche</b> (ici) et ce qui est <b>loin</b> (là-bas), et entre le <b>singulier</b> et le <b>pluriel</b>. Ces quatre mots s’appellent des <b>démonstratifs</b> (des mots qui servent à « montrer »).' },
    { type: 'table', head: ['Nombre', 'Proche (ici)', 'Loin (là-bas)'], rows: [
      ['Singulier', '<b>this</b> desk — ce bureau(-ci)', '<b>that</b> desk — ce bureau(-là)'],
      ['Pluriel', '<b>these</b> desks — ces bureaux(-ci)', '<b>those</b> desks — ces bureaux(-là)']
    ], caption: 'Prononce bien : <b>this</b> (i court, s final) ≠ <b>these</b> (i long, son z final). Et <b>those</b> se prononce avec le o de <i>go</i>.' },
    { type: 'examples', items: [
      { en: 'This coffee is very hot.', fr: 'Ce café est très chaud.' },
      { en: 'That building is our head office.', fr: 'Ce bâtiment-là, c’est notre siège social.' },
      { en: 'These documents are for you.', fr: 'Ces documents sont pour toi.' },
      { en: 'Those people are from the sales team.', fr: 'Ces gens-là font partie de l’équipe commerciale.' }
    ] },
    { type: 'box', style: 'tip', title: 'Astuce mémo', html: '<b>this / these</b> vont avec <b>here</b> (ici) ; <b>that / those</b> vont avec <b>there</b> (là-bas).<br>Pour le nombre : <b>this</b> → <b>these</b> et <b>that</b> → <b>those</b> (singulier → pluriel).' },

    { type: 'h', text: 'Tout seuls : This is…, That’s…' },
    { type: 'p', html: 'Les démonstratifs s’utilisent aussi <b>sans nom</b>, comme « ceci, cela, ça ». C’est très courant pour <b>présenter quelqu’un</b> (<i>This is Kenji.</i> = Je te présente Kenji), pour <b>se présenter au téléphone</b> (<i>This is Anna speaking.</i> = Anna à l’appareil) et pour réagir (<i>That’s great!</i> = C’est génial !). À l’oral, <i>that is</i> se contracte presque toujours en <b>that’s</b>.' },
    { type: 'examples', items: [
      { en: 'This is my colleague, Kenji.', fr: 'Je te présente mon collègue, Kenji.', note: 'Pour présenter quelqu’un, on dit <b>This is…</b>, pas <i>He is…</i>.' },
      { en: 'Hello, this is Anna Kowalski speaking.', fr: 'Bonjour, Anna Kowalski à l’appareil.', note: 'Au téléphone, on se présente avec <b>This is…</b> (et pas <i>Here is…</i>, traduction mot à mot de « ici »).' },
      { en: "That's a great idea!", fr: 'C’est une excellente idée !' },
      { en: 'These are the new price lists.', fr: 'Voici les nouvelles listes de prix.' },
      { en: 'Is this your bag?', fr: 'C’est ton sac ?' }
    ] },
    { type: 'dialog', title: 'Au téléphone', lines: [
      { speaker: 'W', en: 'Good morning, Brightwave Printing. Lucia speaking.', fr: 'Bonjour, Brightwave Printing, Lucia à l’appareil.' },
      { speaker: 'M', en: 'Hi, Lucia. This is Omar Haddad from Sunfield Hotels.', fr: 'Bonjour, Lucia. Ici Omar Haddad, de Sunfield Hotels.' },
      { speaker: 'W', en: 'Hello, Omar! How are you?', fr: 'Bonjour, Omar ! Comment allez-vous ?' },
      { speaker: 'M', en: "Fine, thanks. The new brochures are here, and they're really nice!", fr: 'Bien, merci. Les nouvelles brochures sont arrivées, et elles sont vraiment belles !' },
      { speaker: 'W', en: "Oh, that's great!", fr: 'Oh, c’est super !' }
    ] },

    { type: 'h', text: 'This one, that one : ne pas répéter le nom' },
    { type: 'p', html: 'Pour ne pas répéter un nom déjà cité, on le remplace par <b>one</b> : <i>Which chair? — <b>This one</b>.</i> (Laquelle ? — Celle-ci.) Au pluriel, on dit le plus souvent <b>these</b> ou <b>those</b> tout seuls (<i>I like those.</i>) ; à l’oral, on entend aussi <b>these ones / those ones</b>. <b>One</b> s’utilise aussi après un adjectif : <i>the blue one</i> (le bleu), <i>the new ones</i> (les nouveaux).' },
    { type: 'examples', items: [
      { en: 'Which bag is yours? — That one, near the door.', fr: 'Quel sac est le tien ? — Celui-là, près de la porte.' },
      { en: 'This room is small, but that one is very big.', fr: 'Cette salle-ci est petite, mais celle-là est très grande.' },
      { en: 'These cups are dirty. Please use those ones.', fr: 'Ces tasses-ci sont sales. Utilise celles-là, s’il te plaît.', note: 'On peut aussi dire simplement <i>use those</i>.' },
      { en: 'The red folders? No, the blue ones, please.', fr: 'Les chemises rouges ? Non, les bleues, s’il te plaît.' }
    ] },
    { type: 'dialog', title: 'Au magasin de fournitures de bureau', lines: [
      { speaker: 'M', en: 'Excuse me, how much is this chair?', fr: 'Excusez-moi, combien coûte cette chaise ?' },
      { speaker: 'W', en: "This one? It's eighty-nine dollars.", fr: 'Celle-ci ? Elle coûte quatre-vingt-neuf dollars.' },
      { speaker: 'M', en: 'And that one, near the window?', fr: 'Et celle-là, près de la fenêtre ?' },
      { speaker: 'W', en: "That one is a hundred and twenty dollars. It's very comfortable.", fr: 'Celle-là coûte cent vingt dollars. Elle est très confortable.' },
      { speaker: 'M', en: 'And those small desks?', fr: 'Et ces petits bureaux-là ?' },
      { speaker: 'W', en: "Those are on sale. They're only a hundred and fifty dollars.", fr: 'Ils sont en promotion. Ils ne coûtent que cent cinquante dollars.' },
      { speaker: 'M', en: 'Great! This chair and that desk, please.', fr: 'Parfait ! Cette chaise-ci et ce bureau-là, s’il vous plaît.' }
    ] },

    { type: 'h', text: 'Les adjectifs : avant le nom et toujours invariables' },
    { type: 'p', html: 'Un <b>adjectif</b> est un mot qui décrit un nom (grand, rouge, intéressant…). En anglais, il suit deux règles très simples, mais très différentes du français :' },
    { type: 'list', ordered: true, items: [
      '<b>L’adjectif se place avant le nom</b> : <i>a red car</i> (une voiture rouge), <i>an important client</i> (un client important).',
      '<b>L’adjectif ne s’accorde jamais</b> : pas de <b>-s</b> au pluriel, pas de féminin. <i>a big office → two big offices</i> ; <i>a new manager</i> (un nouveau directeur ou une nouvelle directrice).',
      'Après <b>be</b>, il reste aussi invariable : <i>The offices are big.</i> (Les bureaux sont grands.)'
    ] },
    { type: 'table', head: ['Français', 'Anglais', 'Remarque'], rows: [
      ['une voiture <b>rouge</b>', 'a <b>red</b> car', 'adjectif avant le nom'],
      ['des voitures <b>rouges</b>', '<b>red</b> cars', 'pas de -s à l’adjectif'],
      ['une <b>grande</b> entreprise', 'a <b>big</b> company', 'pas de féminin'],
      ['Les bureaux sont <b>neufs</b>.', 'The offices are <b>new</b>.', 'invariable après <i>be</i> aussi'],
      ['un client <b>important</b>', 'an <b>important</b> client', '<i>an</i> devant un son voyelle']
    ] },
    { type: 'box', style: 'warn', title: 'Piège : ne jamais accorder l’adjectif', html: '<span class="ko">two bigs offices</span> → <span class="ok">two big offices</span><br><span class="ko">a car red</span> → <span class="ok">a red car</span><br><span class="ko">The rooms are smalls.</span> → <span class="ok">The rooms are small.</span><br>Seul le <b>nom</b> prend un <b>-s</b> au pluriel.' },
    { type: 'examples', items: [
      { en: 'She is a good engineer.', fr: 'C’est une bonne ingénieure.' },
      { en: 'These are expensive hotels.', fr: 'Ce sont des hôtels chers.' },
      { en: 'The new printers are very fast.', fr: 'Les nouvelles imprimantes sont très rapides.', accent: 'en-GB' },
      { en: "It's an easy question.", fr: 'C’est une question facile.', note: '<i>an</i>, car <i>easy</i> commence par un son voyelle (leçon <i>Les articles : a, an, the ou rien</i>).' }
    ] },

    { type: 'h', text: 'Plusieurs adjectifs : dans quel ordre ?' },
    { type: 'p', html: 'Quand il y a plusieurs adjectifs devant un nom, l’anglais suit un ordre assez fixe. Au niveau A1, retiens surtout ceci : <b>l’opinion d’abord</b> (ce que tu penses : <i>nice, beautiful</i>), <b>puis les faits</b> (taille, âge, couleur, origine, matière). Dans la vraie vie, on met rarement plus de deux ou trois adjectifs.' },
    { type: 'table', head: ['Ordre', 'Type', 'Exemples'], rows: [
      ['1', 'Opinion', 'nice, beautiful, good, comfortable'],
      ['2', 'Taille', 'big, small, large'],
      ['3', 'Âge', 'new, old, young'],
      ['4', 'Couleur', 'red, blue, black, white'],
      ['5', 'Origine', 'Italian, French, Japanese'],
      ['6', 'Matière', 'wooden (en bois), plastic, leather (en cuir), cotton'],
      ['7', 'Le nom', 'car, table, bag, company']
    ], caption: 'Exemple d’école (personne ne parle comme ça, mais l’ordre est parfait) : <i>a <b>nice big old red Italian</b> car</i>.' },
    { type: 'examples', items: [
      { en: 'a nice big old red Italian car', fr: 'une belle grande vieille voiture rouge italienne', note: 'opinion – taille – âge – couleur – origine – nom' },
      { en: 'a beautiful old building', fr: 'un beau bâtiment ancien', note: 'opinion – âge' },
      { en: 'a small Japanese company', fr: 'une petite entreprise japonaise', note: 'taille – origine' },
      { en: 'a large brown wooden table', fr: 'une grande table en bois marron', note: 'taille – couleur – matière' }
    ] },
    { type: 'box', style: 'tip', title: 'Si tu hésites', html: 'Mets l’<b>opinion</b> en premier (<i>nice, good, beautiful</i>) et garde l’<b>origine</b> et la <b>matière</b> tout près du nom : <i>a <b>nice</b> Italian <b>leather</b> bag</i>.' },

    { type: 'h', text: 'Un nom devant un nom : a sales manager' },
    { type: 'p', html: 'L’anglais utilise très souvent un <b>nom comme adjectif</b>, placé devant un autre nom. Le français, lui, utilise « de », « à » ou « en » : <i>a meeting room</i> = une salle <b>de</b> réunion. Le nom principal est le <b>dernier</b> ; le premier joue le rôle d’un adjectif, donc il reste en général <b>invariable</b>. Même chose avec un nombre : <i>a ten-dollar ticket</i> (un billet à dix dollars), avec un trait d’union et <b>sans -s</b>.' },
    { type: 'examples', items: [
      { en: 'a meeting room', fr: 'une salle de réunion' },
      { en: 'a phone number', fr: 'un numéro de téléphone', note: 'L’ordre est inversé par rapport au français : le nom principal est à la fin.' },
      { en: 'a sales manager', fr: 'un directeur commercial, une directrice commerciale', note: '<i>sales</i> (les ventes) garde son <b>s</b> : c’est une exception.' },
      { en: 'a ten-dollar ticket', fr: 'un billet à dix dollars', note: 'Nombre + nom : trait d’union et pas de <b>s</b> à <i>dollar</i>.' },
      { en: 'a two-hour meeting', fr: 'une réunion de deux heures' },
      { en: 'two meeting rooms', fr: 'deux salles de réunion', note: 'Au pluriel, seul le dernier nom prend un <b>s</b>.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : le -s va sur le dernier nom', html: '<span class="ko">two meetings rooms</span> → <span class="ok">two meeting rooms</span><br><span class="ko">a ten-dollars ticket</span> → <span class="ok">a ten-dollar ticket</span> (mais : <i>The ticket is ten dollar<b>s</b>.</i>)<br><span class="ko">the number phone</span> → <span class="ok">the phone number</span>' },

    { type: 'h', text: 'Very, really, quite : nuancer un adjectif' },
    { type: 'p', html: 'Pour renforcer ou atténuer un adjectif, place un de ces mots juste <b>devant</b> lui : <b>very</b> (très), <b>really</b> (vraiment, très courant à l’oral), <b>quite</b> (assez, plutôt ; les Américains disent souvent <b>pretty</b> dans ce sens : <i>pretty good</i>). <b>Not very</b> veut dire « pas très ». Avec un nom, l’ordre est : <i>a <b>very</b> big office</i>.' },
    { type: 'examples', items: [
      { en: 'The office is very big.', fr: 'Le bureau est très grand.' },
      { en: 'This coffee is really good!', fr: 'Ce café est vraiment bon !' },
      { en: 'The hotel is quite expensive.', fr: 'L’hôtel est assez cher.', accent: 'en-GB' },
      { en: "It's a very important meeting.", fr: 'C’est une réunion très importante.' },
      { en: "The test isn't very difficult.", fr: 'Le test n’est pas très difficile.' }
    ] },
    { type: 'box', style: 'tip', title: 'Attention : very ≠ too', html: '<b>too</b> veut dire « <b>trop</b> » : il y a un problème.<br><i>This hotel is <b>very</b> expensive.</i> (très cher : c’est un fait.)<br><i>This hotel is <b>too</b> expensive.</i> (trop cher : je ne peux pas le payer.)' },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 5</b>, tu devras choisir entre <i>this / these</i> ou <i>that / those</i> selon le nom qui suit : <i>------- documents must be signed.</i> → <b>These</b> (pluriel). On teste aussi la place de l’adjectif et les noms composés : <i>a <b>sales</b> representative</i>, <i>a <b>two-day</b> conference</i>. En <b>Parties 3 et 4</b>, les appels commencent souvent par <i>Hi, this is Mark from the accounting department.</i> : repère bien le nom et le service !' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• <b>this / these</b> = proche ; <b>that / those</b> = loin. <b>this / that</b> + singulier ; <b>these / those</b> + pluriel.<br>• <i>This is Anna.</i> pour présenter ou au téléphone ; <i>this one / that one</i> pour ne pas répéter le nom.<br>• L’adjectif se place <b>avant</b> le nom et ne prend <b>jamais de -s</b> : <i>two big offices</i>.<br>• Ordre : opinion → taille → âge → couleur → origine → matière → nom.<br>• Nom + nom : <i>a meeting room</i>, <i>a ten-dollar ticket</i> (pas de -s au premier nom).<br>• <b>very</b> (très), <b>really</b> (vraiment), <b>quite</b> (assez) + adjectif ; <b>too</b> = trop.' }
  ],
  exercises: [
    { type: 'mcq', q: "Look at ___ building over there! It's beautiful.", options: ['this', 'that', 'these', 'those'], answer: 1, explain: '<i>over there</i> (là-bas) = loin, et <i>building</i> est au singulier → <b>that</b>.' },
    { type: 'mcq', q: '___ documents here on my desk are for you.', options: ['This', 'That', 'These', 'Those'], answer: 2, explain: '<i>here</i> (ici) = proche, et <i>documents</i> est au pluriel → <b>these</b>.' },
    { type: 'gap', q: 'I really like ___ shoes over there. <small>(ces chaussures-là)</small>', answers: ['those'], explain: '<i>over there</i> = loin, et <i>shoes</i> est au pluriel → <b>those</b>.' },
    { type: 'mcq', q: 'Au téléphone, tu veux dire « Bonjour, Anna à l’appareil ». Quelle phrase est correcte ?', options: ['Hello, this is Anna speaking.', 'Hello, here is Anna speaking.', 'Hello, that is Anna speaking.', "Hello, it's Anna who speaks."], answer: 0, explain: 'Au téléphone, on se présente avec <b>This is…</b> (+ <i>speaking</i>). <i>Here is</i> est une traduction mot à mot de « ici » qui ne se dit pas.' },
    { type: 'gap', q: 'The meeting rooms are very ___ (small).', answers: ['small'], explain: 'L’adjectif est <b>invariable</b>, même après <i>are</i> : <i>The rooms are <b>small</b></i> (jamais <i>smalls</i>).' },
    { type: 'order', answer: 'This is a small Japanese company.', fr: 'C’est une petite entreprise japonaise.', explain: 'Les adjectifs se placent <b>avant</b> le nom, dans l’ordre taille (<i>small</i>) → origine (<i>Japanese</i>).' },
    { type: 'mcq', q: 'Choisis l’ordre correct :', options: ['a red beautiful car', 'a beautiful red car', 'a car beautiful red', 'a beautiful car red'], answer: 1, explain: 'Les adjectifs vont <b>avant</b> le nom, et l’opinion (<i>beautiful</i>) passe avant la couleur (<i>red</i>) : <b>a beautiful red car</b>.' },
    { type: 'gap', q: 'We need a new ___ for the team. <small>(salle de réunion)</small>', answers: ['meeting room', 'conference room'], explain: 'Nom + nom : le nom principal (<i>room</i>) est à la fin → <b>a meeting room</b> (on dit aussi <i>a conference room</i>).' },
    { type: 'mcq', q: "I don't like this bag. I prefer ___ over there.", options: ['that one', 'these ones', 'this one', 'those one'], answer: 0, explain: '<i>bag</i> est au singulier et <i>over there</i> indique la distance → <b>that one</b> (celui-là).' },
    { type: 'gap', q: 'Un billet à 10 dollars = a ___ ticket.', answers: ['ten-dollar', '10-dollar', 'ten dollar', '10 dollar'], explain: 'Nombre + nom devant un autre nom : trait d’union et <b>pas de -s</b> → <b>a ten-dollar ticket</b>.' },
    { type: 'gap', q: 'This hotel is ___ expensive. <small>(très)</small>', answers: ['very', 'really'], explain: '« Très » = <b>very</b>, placé juste devant l’adjectif. (<i>really</i>, « vraiment », est aussi accepté.)' },
    { type: 'order', answer: 'There are two new meeting rooms.', fr: 'Il y a deux nouvelles salles de réunion.', explain: 'L’adjectif <i>new</i> se place avant le groupe <i>meeting rooms</i>, et seul le dernier nom (<i>rooms</i>) prend un <b>s</b>.' },
    { type: 'listen', accent: 'en-AU', say: "Hi, this is Carlos from the Green Park Hotel. I'm calling about the two meeting rooms. The small one is free on Monday, but the big one isn't.", q: 'Qu’as-tu compris ?', options: ['Carlos appelle pour réserver une chambre.', 'La petite salle est libre lundi, mais pas la grande.', 'La grande salle est libre lundi, mais pas la petite.'], answer: 1, explain: '<i>The <b>small one</b> is free on Monday, but the <b>big one</b> isn’t</i> : la petite salle est libre, la grande ne l’est pas. <i>One</i> remplace <i>meeting room</i>.' },
    { type: 'dictation', say: 'These red folders are very cheap.', answers: ['These red folders are very cheap'], explain: '<i>These</i> (i long) + pluriel <i>folders</i> ; l’adjectif <i>red</i> est avant le nom et sans -s. « Ces chemises rouges sont très bon marché. »' },
    { type: 'mcq', q: '------- new printers in the copy room are very fast. <small>(style TOEIC)</small>', options: ['This', 'That', 'These', 'Each'], answer: 2, explain: '<i>printers</i> est au pluriel (et le verbe est <i>are</i>) → <b>These</b>. <i>This</i>, <i>that</i> et <i>each</i> vont avec un nom au singulier.' },
    { type: 'mcq', q: 'The Riverside Hotel offers ------- rooms at very low prices. <small>(style TOEIC)</small>', options: ['comfortables', 'comfortable', 'comfortably', 'a comfortable'], answer: 1, explain: 'Devant le nom <i>rooms</i>, il faut un adjectif, et il est <b>invariable</b> → <b>comfortable</b>. <i>Comfortably</i> est un adverbe, et <i>a</i> est impossible devant un pluriel.' }
  ]
});
