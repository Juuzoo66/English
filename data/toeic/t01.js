LE.register({
  id: 't01',
  kind: 'toeic',
  part: 1,
  title: 'Partie 1 — Photographies',
  subtitle: 'Regarder une photo, écouter 4 phrases et repérer la seule qui est vraie',
  level: 'A2',
  minutes: 30,
  goals: [
    'Connaître le déroulement de la partie 1 et ses 3 types de photos',
    'Déjouer les pièges : mot hors photo, sons proches, mauvais verbe, supposition',
    'Distinguer <i>is being done</i> (action en cours) et <i>has been done</i> (résultat)',
    'Appliquer une méthode en 4 étapes et reconnaître le vocabulaire typique des photos'
  ],
  blocks: [
    { type: 'h', text: 'Comment se passe la partie 1 ?' },
    { type: 'p', html: 'C’est la toute première partie du TOEIC : <b>6 photos</b> imprimées dans ton livret. Pour chaque photo, tu entends <b>4 affirmations</b> (A, B, C, D). Elles <b>ne sont pas écrites</b> et tu ne les entends <b>qu’une seule fois</b>. Tu choisis celle qui décrit le mieux ce que tu vois, puis tu as environ 5 secondes avant la photo suivante.' },
    { type: 'p', html: 'Sur ce site, il n’y a pas d’image : chaque photo est <b>décrite en français</b>. Lis la description comme si tu regardais la photo (qui ? que fait-il ? où sont les objets ?), puis écoute les 4 phrases sans les lire.' },
    { type: 'box', style: 'info', title: 'Pourquoi c’est une partie à ne pas rater', html: 'Seulement 6 questions, mais ce sont souvent les <b>plus accessibles</b> du test : le vocabulaire est très prévisible et les pièges se répètent. Avec de l’entraînement, vise <b>6 sur 6</b>. C’est aussi un excellent échauffement pour ton oreille avant la partie 2.' },

    { type: 'h', text: 'Les 3 types de photos' },
    { type: 'table', head: ['Type de photo', 'Ce que décrivent les phrases', 'Phrase typique'], rows: [
      ['<b>Une personne</b>', 'son action, sa position, ce qu’elle porte ou tient', '<i>The woman is typing on a keyboard.</i>'],
      ['<b>Plusieurs personnes</b>', 'ce qu’elles font ensemble, ou ce que fait l’une d’elles ; attention aux mots <i>all, everyone, both</i> (tous, les deux)', '<i>They’re sitting around a table.</i><br><i>One of the men is pointing at a screen.</i>'],
      ['<b>Objets et lieux</b> (souvent sans personne)', 'la place des objets, l’état d’un lieu → souvent une forme <b>passive</b>', '<i>Some chairs have been stacked in a corner.</i><br><i>There are some plants by the window.</i>']
    ] },
    { type: 'examples', items: [
      { en: "The man is talking on the phone.", fr: 'L’homme parle au téléphone.' },
      { en: "She's reading a document.", fr: 'Elle lit un document.' },
      { en: "He's wearing a helmet.", fr: 'Il porte un casque.', note: '<i>wear</i> = porter un vêtement ou un accessoire : c’est un <b>état</b>, pas une action.' },
      { en: "The woman is holding a cup.", fr: 'La femme tient une tasse.', accent: 'en-GB' }
    ] },
    { type: 'examples', items: [
      { en: "They're shaking hands.", fr: 'Ils se serrent la main.' },
      { en: "Some people are waiting in line.", fr: 'Des gens font la queue.', note: '<i>in line</i> (américain) = <i>in a queue</i> (britannique).' },
      { en: "Both women are looking at a laptop.", fr: 'Les deux femmes regardent un ordinateur portable.', accent: 'en-AU' },
      { en: "One of the men is pointing at a map.", fr: 'L’un des hommes montre une carte du doigt.' }
    ] },
    { type: 'examples', items: [
      { en: "Some boxes are stacked on the floor.", fr: 'Des cartons sont empilés par terre.' },
      { en: "Some documents have been left on the table.", fr: 'Des documents ont été laissés sur la table.', accent: 'en-CA' },
      { en: "The shelves are full of books.", fr: 'Les étagères sont pleines de livres.' },
      { en: "There are several cars in the parking lot.", fr: 'Il y a plusieurs voitures sur le parking.', note: '<i>parking lot</i> (américain) = <i>car park</i> (britannique). Le mot anglais <i>parking</i> seul ne désigne pas le lieu.' }
    ] },

    { type: 'h', text: 'Présent continu et passif : les formes à reconnaître' },
    { type: 'p', html: 'Les phrases de la partie 1 utilisent presque toujours le <b>présent continu</b> (<i>be + -ing</i>, voir la leçon « Le présent continu (be + -ing) ») ou le <b>passif</b> (voir « La voix passive »). Deux formes se ressemblent beaucoup à l’oral mais n’ont pas du tout le même sens : <b>is being</b> et <b>has been</b>.' },
    { type: 'table', head: ['Forme', 'Exemple', 'Sens', 'Faut-il voir une personne ?'], rows: [
      ['<b>is / are + -ing</b>', 'The man <b>is loading</b> the truck.', 'action en cours (le sujet fait l’action)', '<span class="ok">Oui</span> : celle qui fait l’action'],
      ['<b>is / are being</b> + participe passé', 'The truck <b>is being loaded</b>.', 'action en cours, vue du côté de l’objet', '<span class="ok">Oui</span> : quelqu’un doit être <b>en train</b> de le charger'],
      ['<b>has / have been</b> + participe passé', 'The truck <b>has been loaded</b>.', 'résultat : l’action est terminée', '<span class="ko">Non</span> : on voit seulement le résultat'],
      ['<b>is / are</b> + participe passé ou adjectif', 'The truck <b>is parked</b> by the door.<br>The truck <b>is full</b>.', 'état', '<span class="ko">Non</span>']
    ], caption: 'Le participe passé, c’est la 3ᵉ forme du verbe : <i>load → loaded</i>, <i>put → put</i>, <i>hang → hung</i>.' },
    { type: 'box', style: 'warn', title: 'Le piège n°1 : « is being » sans personne', html: 'Si la photo ne montre <b>personne</b>, une phrase en <b>is being / are being</b> + participe passé est presque toujours <b>fausse</b>.<br><span class="ko">The chairs are being arranged.</span> = quelqu’un est en train de disposer les chaises → impossible dans une salle vide.<br><span class="ok">The chairs have been arranged.</span> = les chaises ont été disposées → on voit le résultat.<br><small>Rare exception à connaître : <i>are being displayed</i> (être exposé, en vitrine) peut décrire des objets sans personne autour.</small>' },
    { type: 'examples', items: [
      { en: "The windows are being cleaned.", fr: 'On est en train de laver les vitres.', note: 'Il faut voir un laveur de vitres <b>en action</b>.' },
      { en: "The windows have been cleaned.", fr: 'Les vitres ont été lavées.', note: 'Résultat : pas besoin de personne sur la photo.', accent: 'en-GB' },
      { en: "A tire is being changed.", fr: 'Un pneu est en train d’être changé.', note: 'Quelqu’un travaille sur la roue au moment de la photo.' },
      { en: "The table has been set for dinner.", fr: 'La table a été mise pour le dîner.', accent: 'en-AU' }
    ] },

    { type: 'h', text: 'Les 6 pièges classiques' },
    { type: 'p', html: 'Imagine cette photo : <b>un homme tape sur le clavier de son ordinateur ; une tasse de café est posée à côté de lui.</b> Voici les phrases fausses que le TOEIC pourrait te proposer :' },
    { type: 'table', head: ['Piège', 'Phrase fausse', 'Pourquoi c’est faux'], rows: [
      ['<b>Mot entendu, mais hors action</b>', '<i>He’s drinking a cup of coffee.</i>', 'La tasse est bien là, mais il ne boit pas.'],
      ['<b>Son proche</b>', '<i>He’s making a copy.</i>', '<i>copy</i> ressemble à <i>coffee</i> : ton oreille croit reconnaître un mot de la photo.'],
      ['<b>Bon nom, mauvais verbe</b>', '<i>He’s fixing the computer.</i>', 'L’ordinateur est là, mais il ne le répare pas : il tape.'],
      ['<b>is being + participe sans personne</b>', '<i>(photo d’une salle vide)</i> <i>The chairs are being arranged.</i>', 'Personne n’est en train de disposer les chaises.'],
      ['<b>Supposition invisible</b>', '<i>He’s waiting for a client.</i>', 'Impossible de le savoir en regardant la photo : on ne décrit que ce qu’on <b>voit</b>.'],
      ['<b>Généralisation fausse</b>', '<i>(photo de réunion)</i> <i>Everyone is sitting down.</i>', 'Il suffit qu’une seule personne soit debout pour que ce soit faux.']
    ] },
    { type: 'box', style: 'warn', title: 'Porter ou mettre ? wearing ≠ putting on', html: '<b>He’s wearing a jacket.</b> = il porte une veste (état) → vrai s’il a une veste sur lui.<br><b>He’s putting on a jacket.</b> = il est en train d’<b>enfiler</b> sa veste → vrai seulement si on le voit l’enfiler.<br>Même piège avec <b>taking off</b> (enlever). Le TOEIC adore ce piège !' },
    { type: 'pairs', items: [
      { a: "He's walking.", b: "He's working.", note: 'marcher / travailler' },
      { a: 'a copy', b: 'a coffee', note: 'une photocopie / un café' },
      { a: "They're sitting at the table.", b: "They're setting the table.", note: 'être assis à table / mettre la table' },
      { a: 'a file', b: 'a pile', note: 'un dossier / une pile' },
      { a: 'glass', b: 'grass', note: 'verre, vitre / herbe' }
    ] },

    { type: 'h', text: 'La méthode en 4 étapes' },
    { type: 'list', ordered: true, items: [
      '<b>Observe</b> la photo avant l’audio (pendant les consignes et les secondes entre deux photos) : qui ? que fait-il ? où ? quels objets au premier plan ?',
      '<b>Anticipe</b> : dis-toi mentalement les mots anglais que tu t’attends à entendre (le verbe en <i>-ing</i>, le nom des objets).',
      '<b>Élimine en écoutant</b> : après chaque phrase, décide dans ta tête « vrai », « faux » ou « peut-être ». Garde ton crayon posé sur la meilleure lettre.',
      '<b>Décide et passe à la suivante</b> : la bonne réponse est celle qui est <b>100 % vraie</b> sur la photo, même si elle est simple ou ne parle que d’un détail.'
    ] },
    { type: 'box', style: 'tip', title: 'Vrai avant tout', html: 'La bonne réponse ne décrit pas toujours l’action principale : parfois, c’est un détail (<i>A jacket is hanging on a chair.</i>). Ne cherche pas la phrase « la plus complète », cherche celle qui ne contient <b>aucune erreur</b>.' },

    { type: 'h', text: 'Le vocabulaire qui revient tout le temps' },
    { type: 'table', head: ['Anglais', 'Français', 'Exemple'], rows: [
      ['<b>typing</b>', 'taper (au clavier)', 'She’s typing on a laptop.'],
      ['<b>pouring</b>', 'verser', 'He’s pouring water into a glass.'],
      ['<b>reaching for</b>', 'tendre le bras pour attraper', 'She’s reaching for a file.'],
      ['<b>handing</b>', 'tendre, remettre (à quelqu’un)', 'He’s handing a document to a colleague.'],
      ['<b>examining</b>', 'examiner', 'The mechanic is examining a tire.'],
      ['<b>holding / carrying</b>', 'tenir / porter (en se déplaçant)', 'She’s carrying a box up the stairs.'],
      ['<b>stacking / stacked</b>', 'empiler / empilé', 'Boxes are stacked against the wall.'],
      ['<b>leaning against</b>', 'appuyé contre', 'A ladder is leaning against the wall.'],
      ['<b>facing</b>', 'face à, tourné vers', 'The desks are facing the windows.'],
      ['<b>lined up</b>', 'aligné, en file', 'Some cars are lined up at the gate.'],
      ['<b>hanging</b>', 'suspendu, accroché', 'A clock is hanging on the wall.'],
      ['<b>arranged</b>', 'disposé, arrangé', 'Flowers have been arranged in a vase.'],
      ['<b>being loaded</b>', 'en train d’être chargé', 'A truck is being loaded.'],
      ['<b>kneeling</b>', 'à genoux', 'A worker is kneeling on the floor.'],
      ['<b>pushing a cart</b>', 'pousser un chariot', 'A man is pushing a cart down the aisle.'],
      ['<b>sweeping</b>', 'balayer', 'Someone is sweeping the sidewalk.']
    ] },
    { type: 'examples', items: [
      { en: "A woman is reaching for a file on the shelf.", fr: 'Une femme tend le bras pour attraper un dossier sur l’étagère.' },
      { en: "Some bicycles are lined up outside the building.", fr: 'Des vélos sont alignés devant le bâtiment.', accent: 'en-GB' },
      { en: "A man is handing a menu to a customer.", fr: 'Un homme tend un menu à un client.', accent: 'en-AU' },
      { en: "A painting is hanging above the sofa.", fr: 'Un tableau est accroché au-dessus du canapé.', accent: 'en-CA' },
      { en: "The workers are wearing safety vests.", fr: 'Les ouvriers portent des gilets de sécurité.' }
    ] },
    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'Les consignes de la partie 1 sont toujours les mêmes et durent un moment : profites-en pour <b>regarder les premières photos</b>. Ensuite, le rythme est rapide : 4 phrases, quelques secondes, photo suivante. Si tu as raté une phrase, choisis ta meilleure option et concentre-toi tout de suite sur la photo suivante.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• 6 photos, 4 phrases entendues une seule fois, <b>une seule vraie</b>.<br>• On ne décrit que ce qu’on <b>voit</b> : pas de supposition.<br>• <b>is being</b> + participe = quelqu’un est en train de le faire ; <b>has been</b> + participe = résultat visible.<br>• Pièges : mot de la photo avec le mauvais verbe, sons proches (<i>walking / working</i>), <i>everyone / all</i>, <i>wearing / putting on</i>.<br>• Méthode : observer → anticiper → éliminer → décider.' }
  ],
  sets: [
    { title: 'Série 1 — Une personne', level: 'A2', items: [
      {
        scene: 'Une femme est assise à un bureau, face à un ordinateur. Elle tape sur le clavier avec les deux mains et regarde l’écran. À côté du clavier sont posés un téléphone et une tasse.',
        statements: ["She's talking on the phone.", "She's typing on a keyboard.", "She's drinking from a cup.", "She's standing next to a desk."],
        answer: 1,
        explain: '(B) est vraie : elle tape sur le clavier (<i>type</i> = taper). (A) Le téléphone est sur le bureau, mais elle ne parle pas. (C) La tasse est là, mais elle ne boit pas. (D) Elle est <b>assise</b>, pas debout (<i>standing</i>).'
      },
      {
        scene: 'Un homme en costume marche dans la rue en tirant derrière lui une valise à roulettes fermée. Il porte des lunettes de soleil sur le nez. En arrière-plan, on voit l’entrée d’un hôtel.',
        statements: ["He's pulling a suitcase.", "He's working in a hotel.", "He's opening a suitcase.", "He's putting on his sunglasses."],
        answer: 0,
        accent: 'en-GB',
        explain: '(A) est vraie : il tire (<i>pull</i>) sa valise. (B) Piège de son : <i>working</i> ressemble à <i>walking</i>, et on entend « hotel », mais rien ne montre qu’il y travaille. (C) La valise reste fermée. (D) Il <b>porte</b> déjà ses lunettes (<i>wearing</i>) ; <i>putting on</i> voudrait dire qu’il est en train de les mettre.'
      },
      {
        scene: 'Dans la cuisine d’un bureau, une femme verse du café d’une cafetière dans une tasse posée sur le comptoir. Derrière elle, la porte du réfrigérateur est fermée.',
        statements: ["She's making copies.", "She's opening the refrigerator.", "She's washing a cup.", "She's pouring some coffee."],
        answer: 3,
        explain: '(D) est vraie : <i>pour</i> = verser. (A) Piège de son : <i>copies</i> ressemble à <i>coffee</i>. (B) Le réfrigérateur est fermé, elle ne l’ouvre pas. (C) Elle remplit la tasse, elle ne la lave pas.'
      },
      {
        scene: 'Un technicien est debout sur une échelle. Il lève les bras pour changer une ampoule au plafond. Au pied de l’échelle, une boîte à outils ouverte est posée par terre.',
        statements: ["He's carrying a ladder.", "He's standing on a ladder.", "He's closing a toolbox.", "He's painting the ceiling."],
        answer: 1,
        accent: 'en-AU',
        explain: '(B) est vraie : il est debout sur l’échelle. (A) Bon nom (<i>ladder</i>), mauvais verbe : il ne la porte pas. (C) La boîte à outils est ouverte et il n’y touche pas. (D) On entend « ceiling » (plafond), mais il change une ampoule, il ne peint pas.'
      },
      {
        scene: 'Dans une bibliothèque, une femme debout devant une étagère tend le bras pour attraper un livre sur l’étagère du haut. Elle porte un sac en bandoulière ; son autre main est vide. Il n’y a ni table ni chaise à côté d’elle.',
        statements: ["She's reading at a table.", "She's putting her bag on a shelf.", "She's reaching for a book.", "She's carrying a stack of books."],
        answer: 2,
        explain: '(C) est vraie : <i>reach for</i> = tendre le bras pour attraper. (A) Il n’y a pas de table et elle ne lit pas. (B) Son sac reste sur son épaule. (D) Son autre main est vide : elle ne porte pas de pile de livres (<i>stack</i>).'
      },
      {
        scene: 'Un homme est assis seul sur un banc dans un parc. Il lit un journal, les jambes croisées. Une mallette fermée est posée à côté de lui sur le banc. Derrière le banc, il y a des arbres.',
        statements: ["He's opening his briefcase.", "He's leaning against a tree.", "He's sitting on the grass.", "He's reading a newspaper."],
        answer: 3,
        accent: 'en-CA',
        explain: '(D) est vraie : il lit un journal. (A) La mallette (<i>briefcase</i>) est fermée, il n’y touche pas. (B) Les arbres sont derrière le banc : il n’est pas appuyé contre un arbre. (C) Il est assis sur un banc, pas sur l’herbe (<i>grass</i>).'
      }
    ] },
    { title: 'Série 2 — Plusieurs personnes', level: 'A2', items: [
      {
        scene: 'Dans une salle de réunion, quatre personnes sont assises autour d’une table ovale, leurs ordinateurs portables ouverts devant elles. Une cinquième personne, une femme, est debout au bout de la table et montre du doigt un graphique projeté sur un écran.',
        statements: ["Everyone is seated at the table.", "The woman is pointing at a screen.", "They're leaving the meeting room.", "The people are closing their laptops."],
        answer: 1,
        explain: '(B) est vraie : <i>point at</i> = montrer du doigt. (A) Piège « everyone » (tout le monde) : la femme est debout. (C) Personne ne quitte la salle. (D) Les ordinateurs sont ouverts et personne ne les ferme.'
      },
      {
        scene: 'Dans une allée d’entrepôt, deux hommes portent ensemble un grand carton, chacun le tenant par un côté. De chaque côté de l’allée, des étagères sont remplies de cartons.',
        statements: ["They're stacking boxes on a shelf.", "The shelves are empty.", "They're carrying a box together.", "One of the men is opening a box."],
        answer: 2,
        accent: 'en-GB',
        explain: '(C) est vraie : ils portent un carton ensemble. (A) <i>stack</i> = empiler : ils ne posent rien sur une étagère, ils déplacent le carton. (B) Les étagères sont pleines, pas vides. (D) Personne n’ouvre de carton.'
      },
      {
        scene: 'À la réception d’un hôtel, une réceptionniste, derrière le comptoir, tend une carte-clé à un client. De l’autre main, le client tient la poignée de sa valise.',
        statements: ["They're shaking hands.", "The man is unpacking his suitcase.", "The receptionist is typing on a computer.", "The woman is handing a key card to a guest."],
        answer: 3,
        explain: '(D) est vraie : <i>hand something to someone</i> = tendre quelque chose à quelqu’un. (A) Piège de son : <i>hands</i> ressemble à <i>handing</i>, mais ils ne se serrent pas la main. (B) Il tient sa valise, il ne la défait pas. (C) Elle tend une carte, elle ne tape pas au clavier.'
      },
      {
        scene: 'Dans un restaurant, un serveur debout verse de l’eau dans le verre d’une cliente. Deux clients sont assis à la table ; leurs menus sont fermés et posés sur la table.',
        statements: ["A waiter is pouring water into a glass.", "The customers are reading their menus.", "The waiter is clearing the table.", "The customers are getting up to leave."],
        answer: 0,
        accent: 'en-AU',
        explain: '(A) est vraie : le serveur verse (<i>pour</i>) de l’eau. (B) Les menus sont fermés : personne ne les lit. (C) <i>clear the table</i> = débarrasser : il sert de l’eau, il ne débarrasse pas. (D) Les clients restent assis.'
      },
      {
        scene: 'Dans une gare, cinq personnes font la queue, les unes derrière les autres, devant un guichet. La femme en tête de file parle à l’employé derrière la vitre. Les autres attendent debout ; certains portent un sac à dos. Aucun train n’est visible.',
        statements: ["The passengers are boarding a train.", "Some people are sitting in a waiting area.", "A woman is buying a backpack.", "People are lined up at a ticket counter."],
        answer: 3,
        explain: '(D) est vraie : <i>lined up</i> = alignés, en file. (A) Aucun train : personne ne monte à bord (<i>board</i>). (B) Ils attendent debout, pas assis. (C) On entend « backpack » (sac à dos), mais la femme parle au guichet : rien ne montre qu’elle achète un sac.'
      },
      {
        scene: 'Sur un chantier, deux ouvriers portant un casque examinent de grands plans déroulés sur une table. Au loin, à l’arrière-plan, on voit une grue.',
        statements: ["They're operating a crane.", "They're examining some plans.", "They're taking off their hard hats.", "They're building a wall."],
        answer: 1,
        accent: 'en-CA',
        explain: '(B) est vraie : ils examinent des plans. (A) La grue (<i>crane</i>) est au loin et ils ne la conduisent pas. (C) Ils <b>portent</b> leur casque (<i>wearing</i>) ; <i>taking off</i> voudrait dire qu’ils sont en train de l’enlever. (D) Ils regardent des plans, ils ne construisent pas de mur.'
      }
    ] },
    { title: 'Série 3 — Objets, lieux et formes passives', level: 'B1', items: [
      {
        scene: 'Une salle de conférence vide. Des chaises sont alignées en plusieurs rangées, tournées vers une estrade. Sur l’estrade, un micro est posé sur un pupitre. Il n’y a personne dans la salle.',
        statements: ["Chairs are being arranged in rows.", "Someone is speaking into a microphone.", "The chairs are stacked in a corner.", "Chairs have been arranged in rows."],
        answer: 3,
        accent: 'en-GB',
        explain: '(D) est vraie : <i>have been arranged</i> = ont été disposées (on voit le résultat). (A) <i>are being arranged</i> = quelqu’un est en train de les disposer : impossible, la salle est vide. (B) Personne ne parle au micro. (C) <i>stacked</i> = empilées : les chaises sont en rangées, pas en pile.'
      },
      {
        scene: 'Un camion est garé contre un quai de chargement, portes arrière grandes ouvertes. Un ouvrier fait entrer dans le camion un transpalette chargé de cartons fermés.',
        statements: ["A truck is being loaded.", "The truck is being repaired.", "The back doors of the truck are closed.", "Some boxes are being opened."],
        answer: 0,
        explain: '(A) est vraie : quelqu’un est <b>en train</b> de charger le camion, donc <i>is being loaded</i> convient. (B) Personne ne répare le camion. (C) Les portes arrière sont ouvertes. (D) Les cartons restent fermés : personne ne les ouvre.'
      },
      {
        scene: 'Un bureau vide, en fin de journée. Sur le bureau : un ordinateur portable fermé, une lampe allumée et une pile de dossiers. Une veste est accrochée au dossier de la chaise. Personne n’est présent.',
        statements: ["A laptop is being closed.", "The lamp has been turned off.", "A jacket is hanging on the back of a chair.", "Some folders have been left on the floor."],
        answer: 2,
        accent: 'en-AU',
        explain: '(C) est vraie : <i>hanging</i> = accrochée, suspendue. (A) <i>is being closed</i> suppose que quelqu’un est en train de le fermer : il n’y a personne, et il est déjà fermé. (B) La lampe est allumée. (D) Les dossiers (<i>folders</i>) sont sur le bureau, pas par terre.'
      },
      {
        scene: 'Plusieurs bateaux sont amarrés le long d’un quai en bois. L’eau est calme. Personne n’est visible. Au loin, on aperçoit des immeubles.',
        statements: ["Boats are docked along a pier.", "Some boats are being tied to the dock.", "Passengers are getting off a boat.", "The boats are sailing out to sea."],
        answer: 0,
        explain: '(A) est vraie : <i>docked</i> = amarré à quai, <i>pier</i> = quai, jetée. (B) <i>are being tied</i> = quelqu’un est en train de les attacher : il n’y a personne. (C) Aucun passager. (D) Les bateaux sont immobiles à quai, ils ne partent pas en mer.'
      },
      {
        scene: 'Une allée traverse un parc. Des bancs vides sont installés le long de l’allée. Des arbres la bordent des deux côtés, et un vélo est appuyé contre l’un d’eux. Il n’y a personne.',
        statements: ["A man is riding a bicycle.", "The benches are occupied.", "A bicycle is leaning against a tree.", "Trees are being planted along the path."],
        answer: 2,
        accent: 'en-GB',
        explain: '(C) est vraie : <i>lean against</i> = être appuyé contre. (A) Personne ne fait de vélo. (B) Les bancs sont vides (<i>occupied</i> = occupés). (D) <i>are being planted</i> = quelqu’un est en train de planter : il n’y a personne.'
      },
      {
        scene: 'La salle d’un restaurant, avant l’ouverture. Les tables sont dressées : assiettes, verres et serviettes pliées. Les chaises sont rangées sous les tables. Les lumières sont allumées, mais il n’y a personne.',
        statements: ["The tables are being set.", "The tables have been set for a meal.", "Chairs have been stacked on the tables.", "A waiter is folding napkins."],
        answer: 1,
        explain: '(B) est vraie : <i>have been set</i> = ont été mises (résultat visible). (A) <i>are being set</i> = quelqu’un est en train de mettre les tables : il n’y a personne. (C) Les chaises sont sous les tables, pas empilées dessus. (D) Il n’y a pas de serveur.'
      }
    ] }
  ]
});
