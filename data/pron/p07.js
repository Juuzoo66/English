LE.register({
  id: 'p07',
  kind: 'pron',
  title: 'Les accents du TOEIC : américain, britannique, australien, canadien',
  subtitle: 'Reconnaître les mêmes mots, quel que soit l’accent de la personne qui parle',
  level: 'B1',
  minutes: 40,
  goals: [
    'Reconnaître les 4 familles d’accents du TOEIC et leurs différences principales',
    'Comprendre un mot malgré un r muet, un t « battu » ou un a long',
    'Connaître les mots qui changent entre l’américain et le britannique (<i>elevator / lift</i>…)',
    'Repérer les différences d’orthographe (<i>color / colour</i>) sans être déstabilisée'
  ],
  blocks: [
    { type: 'h', text: 'Pourquoi plusieurs accents au TOEIC ?' },
    { type: 'p', html: 'Le TOEIC est un test d’anglais <b>international</b> : ses enregistrements utilisent quatre grandes familles d’accents : <b>américain</b>, <b>britannique</b>, <b>canadien</b> et <b>australien</b> (ou néo-zélandais). Tu entendras donc le même mot prononcé de plusieurs façons. Bonne nouvelle : les différences sont régulières, et une fois que tu les connais, elles ne te surprennent plus.' },
    { type: 'p', html: 'C’est comme en français : une Québécoise, un Belge, une Suissesse et un Marseillais ne prononcent pas tout pareil, et pourtant tu les comprends. Tu n’as pas besoin d’imiter tous ces accents : choisis-en un pour parler (l’américain, par exemple, celui de ce site), mais apprends à les <b>reconnaître</b> tous.' },
    { type: 'table', head: ['Accent', 'Où ?', 'Ce qui le caractérise'], rows: [
      ['<b>Américain</b> (US)', 'États-Unis', 'r prononcé partout ; t entre deux voyelles qui devient un « d » rapide ; <i>can’t</i> = « kaènt »'],
      ['<b>Britannique</b> (UK)', 'Royaume-Uni', 'r muet en fin de syllabe ; t bien net ; a long dans <i>can’t</i>, <i>ask</i>, <i>bath</i>'],
      ['<b>Canadien</b> (CA)', 'Canada', 'très proche de l’américain ; <i>about</i> et <i>sorry</i> un peu différents'],
      ['<b>Australien</b> (AU) / néo-zélandais', 'Australie, Nouvelle-Zélande', 'r muet comme en UK ; le son « ay » de <i>today</i> tire vers « aï »']
    ], caption: 'On parle ici de l’accent « standard » de chaque pays, celui des voix du TOEIC. Chaque pays a aussi des accents régionaux : en Écosse, par exemple, le r se prononce.' },

    { type: 'h', text: 'Différence n°1 : le r en fin de syllabe' },
    { type: 'p', html: 'En <b>américain</b> et en <b>canadien</b>, le r se prononce partout, même en fin de mot, avec la langue recourbée vers l’arrière : <i>car</i> = « kaar ». En <b>britannique</b> et en <b>australien</b>, le r ne se prononce que devant une voyelle : en fin de syllabe, il disparaît et allonge la voyelle : <i>car</i> = « kaa », <i>water</i> = « wo-teu », <i>order</i> = « oo-deu ». Si le mot suivant commence par une voyelle, le r revient pour faire la liaison : <i>the car is ready</i> → « the kaa-riz ready ».' },
    { type: 'examples', items: [
      { en: 'Please place your order.', fr: 'Veuillez passer votre commande.', accent: 'en-US', note: 'US : les r de <i>your</i> et <i>order</i> sont bien audibles.' },
      { en: 'Please place your order.', fr: 'Veuillez passer votre commande.', accent: 'en-GB', note: 'UK : « yoo », « oo-deu » : pas de r.' },
      { en: 'Can I have a glass of water?', fr: 'Je peux avoir un verre d’eau ?', accent: 'en-US', note: 'US : <i>water</i> = « wa-deur » (t battu + r).' },
      { en: 'Can I have a glass of water?', fr: 'Je peux avoir un verre d’eau ?', accent: 'en-GB', note: 'UK : <i>water</i> = « wo-teu » (t net, pas de r) ; <i>glass</i> avec un a long : « glaass ».' },
      { en: 'The meeting is on the fourth floor.', fr: 'La réunion est au quatrième étage.', accent: 'en-AU', note: 'AU : comme en UK, <i>fourth</i> et <i>floor</i> sans r : « footh », « floo ».' }
    ] },

    { type: 'h', text: 'Différence n°2 : le t entre deux voyelles' },
    { type: 'p', html: 'En <b>américain</b> et en <b>canadien</b>, un t placé entre deux voyelles, devant une syllabe non accentuée, devient un « d » très rapide, un simple petit battement de langue : <i>water</i> → « wa-deur », <i>better</i> → « bè-deur », <i>meeting</i> → « mii-ding », <i>city</i> → « si-di ». Ça marche aussi après un r : <i>party</i> → « paar-di », <i>thirty</i> → « thur-di ». En revanche, si la syllabe qui suit le t est accentuée (<i>hotel</i>, <i>Italian</i>), le t reste net. En <b>britannique</b>, le t se prononce clairement dans tous les cas : « bè-teu », « mii-ting ». L’<b>australien</b>, lui, fait souvent comme l’américain.' },
    { type: 'examples', items: [
      { en: 'The meeting starts at eight thirty.', fr: 'La réunion commence à 8 h 30.', accent: 'en-US', note: 'US : « mii-ding », « thur-di ».' },
      { en: 'The meeting starts at eight thirty.', fr: 'La réunion commence à 8 h 30.', accent: 'en-GB', note: 'UK : « mii-ting », « theu-ti » : t bien nets, pas de r.' },
      { en: 'We need a better computer.', fr: 'Il nous faut un meilleur ordinateur.', accent: 'en-US', note: 'US : « bè-deur com-piou-deur ».' },
      { en: 'We need a better computer.', fr: 'Il nous faut un meilleur ordinateur.', accent: 'en-GB', note: 'UK : « bè-teu com-piou-teu ».' }
    ] },
    { type: 'box', style: 'tip', title: 'Quand deux mots se ressemblent', html: 'À cause de ce « d » américain, <i>writer</i> (écrivain) et <i>rider</i> (cavalier), ou <i>latter</i> (ce dernier) et <i>ladder</i> (échelle), se prononcent presque pareil aux États-Unis. Pas de panique : c’est toujours le <b>contexte</b> qui tranche.' },

    { type: 'h', text: 'Différence n°3 : quelques voyelles et quelques mots' },
    { type: 'table', head: ['Mot', 'Américain / canadien', 'Britannique / australien'], rows: [
      ['can’t', '/kænt/ « kaènt »', '/kɑːnt/ « kaannt »'],
      ['ask', '/æsk/ « aèsk »', '/ɑːsk/ « aask »'],
      ['bath', '/bæθ/ « baèth »', '/bɑːθ/ « baath »'],
      ['after', '/ˈæftər/ « aèf-teur »', '/ˈɑːftə/ « aaf-teu »'],
      ['hot', '/hɑt/ « haat » (bouche grande ouverte)', '/hɒt/ « hott » (o court, lèvres arrondies)'],
      ['job', '/dʒɑb/ « djaab »', '/dʒɒb/ « djob »'],
      ['schedule', '« <b>sk</b>è-djoul »', '« <b>sh</b>è-djoul » (UK traditionnel ; « sk- » s’entend aussi)'],
      ['la lettre Z', '« zii » aux États-Unis, mais « zèd » au Canada', '« zèd »']
    ], caption: 'Le canadien suit l’américain pour les voyelles, mais il dit « zèd » comme les Britanniques.' },
    { type: 'box', style: 'warn', title: 'Piège : le can’t britannique', html: 'Si tu as appris à repérer <i>can’t</i> grâce au « kaènt » américain, le « kaannt » britannique et australien peut te surprendre. Retiens : un <b>a long et accentué</b> = <b>can’t</b>. Le <i>can</i> affirmatif, lui, reste court et faible dans tous les accents (« keun »). Et ne compte pas sur le t final : il est souvent avalé (voir la leçon « L’anglais parlé réel : formes faibles, liaisons, contractions »).' },
    { type: 'examples', items: [
      { en: "Sorry, I can't make it on Tuesday.", fr: 'Désolée, je ne peux pas venir mardi.', accent: 'en-US', note: 'US : <i>can’t</i> = « kaènt ».' },
      { en: "Sorry, I can't make it on Tuesday.", fr: 'Désolée, je ne peux pas venir mardi.', accent: 'en-GB', note: 'UK : <i>can’t</i> = « kaannt ».' },
      { en: 'Could you ask the manager?', fr: 'Pourriez-vous demander au responsable ?', accent: 'en-GB', note: 'UK : <i>ask</i> = « aask », a long.' },
      { en: "What's the schedule for tomorrow?", fr: 'Quel est le programme de demain ?', accent: 'en-US', note: 'US : <i>schedule</i> = « skè-djoul ».' },
      { en: "What's the schedule for tomorrow?", fr: 'Quel est le programme de demain ?', accent: 'en-GB', note: 'UK : souvent « shè-djoul ».' },
      { en: 'She got a new job last month.', fr: 'Elle a trouvé un nouveau travail le mois dernier.', accent: 'en-US', note: 'US : <i>got</i> et <i>job</i> avec un « a » grand ouvert : « gaat », « djaab ».' },
      { en: 'She got a new job last month.', fr: 'Elle a trouvé un nouveau travail le mois dernier.', accent: 'en-GB', note: 'UK : un o court, lèvres arrondies : « got », « djob » ; et <i>last</i> avec un a long : « laast ».' }
    ] },

    { type: 'h', text: 'L’australien et le canadien' },
    { type: 'p', html: 'L’<b>australien</b> ressemble au britannique pour le r (muet en fin de syllabe) et pour le a long de <i>can’t</i>. Son son le plus reconnaissable : le « ay » de <i>day</i>, <i>today</i>, <i>mate</i> (copain), qui tire vers « aï » : <i>today</i> → « teu-daï », <i>mate</i> → « maït ». Les phrases affirmatives montent aussi parfois à la fin, comme une question : ne te laisse pas surprendre.' },
    { type: 'p', html: 'Le <b>canadien</b> est très proche de l’américain (r prononcé, t battu, <i>can’t</i> en « kaènt »). Deux indices : la voyelle de <i>about</i>, <i>out</i>, <i>house</i> commence plus fermée (les Américains s’amusent à la caricaturer en « a-boute ») et <i>sorry</i> se dit « sor-i », comme <i>sore</i>, plutôt que « saa-ri ».' },
    { type: 'examples', items: [
      { en: 'Good morning, mate. How are you today?', fr: 'Bonjour, mon vieux. Comment ça va aujourd’hui ?', accent: 'en-AU', note: 'AU : « maït », « teu-daï ».' },
      { en: 'The train leaves at eight today.', fr: 'Le train part à 8 h aujourd’hui.', accent: 'en-AU', note: 'AU : dans <i>eight</i> et <i>today</i>, le « ay » tire vers « aï ».' },
      { en: "Sorry, I'm about to go out.", fr: 'Désolée, je suis sur le point de sortir.', accent: 'en-CA', note: 'CA : « sor-i » ; <i>about</i> et <i>out</i> avec une voyelle plus fermée.' },
      { en: 'The house is about ten minutes out of town.', fr: 'La maison est à une dizaine de minutes de la ville.', accent: 'en-CA', note: 'CA : écoute <i>house</i>, <i>about</i> et <i>out</i>.' }
    ] },

    { type: 'h', text: 'Le vocabulaire : américain ou britannique ?' },
    { type: 'p', html: 'Certains mots du quotidien changent d’un côté à l’autre de l’Atlantique. Au TOEIC, tu peux entendre les deux : une Britannique dira <i>lift</i> là où un Américain dit <i>elevator</i>. Le plus souvent, le canadien suit l’américain et l’australien suit le britannique.' },
    { type: 'table', head: ['Français', 'Américain (US)', 'Britannique (UK)'], rows: [
      ['ascenseur', 'elevator', 'lift'],
      ['appartement', 'apartment', 'flat'],
      ['rez-de-chaussée', 'first floor', 'ground floor'],
      ['1ᵉʳ étage', 'second floor', 'first floor'],
      ['toilettes (lieu public)', 'restroom', 'toilets'],
      ['l’addition (au restaurant)', 'check', 'bill'],
      ['téléphone portable', 'cell phone', 'mobile phone'],
      ['vacances', 'vacation', 'holiday(s)'],
      ['file d’attente', 'line', 'queue'],
      ['camion', 'truck', 'lorry'],
      ['essence', 'gas', 'petrol'],
      ['parking', 'parking lot', 'car park'],
      ['CV', 'résumé', 'CV']
    ], caption: 'Au Canada, on dit aussi <i>washroom</i> pour les toilettes.' },
    { type: 'box', style: 'warn', title: 'Piège : le « first floor »', html: 'Aux États-Unis et au Canada, le <i>first floor</i> est le <b>rez-de-chaussée</b> : on compte le niveau de la rue comme le premier. Au Royaume-Uni et en Australie, le rez-de-chaussée est le <i>ground floor</i>, et le <i>first floor</i> est le 1ᵉʳ étage, comme en français. Au TOEIC, pense toujours à cette double possibilité quand on t’indique un étage.' },
    { type: 'examples', items: [
      { en: 'Take the elevator to the third floor.', fr: 'Prenez l’ascenseur jusqu’au 2ᵉ étage.', accent: 'en-US', note: 'US : <i>third floor</i> = 2ᵉ étage à la française, car le rez-de-chaussée est le <i>first floor</i>.' },
      { en: 'Take the lift to the second floor.', fr: 'Prenez l’ascenseur jusqu’au 2ᵉ étage.', accent: 'en-GB', note: 'UK : <i>lift</i> ; <i>second floor</i> = 2ᵉ étage, comme en français.' },
      { en: 'Could we have the check, please?', fr: 'Pourrions-nous avoir l’addition, s’il vous plaît ?', accent: 'en-US' },
      { en: 'Could we have the bill, please?', fr: 'Pourrions-nous avoir l’addition, s’il vous plaît ?', accent: 'en-GB' },
      { en: "I'm on vacation next week.", fr: 'Je suis en vacances la semaine prochaine.', accent: 'en-US' },
      { en: "I'm on holiday next week.", fr: 'Je suis en vacances la semaine prochaine.', accent: 'en-GB' }
    ] },
    { type: 'pairs', items: [
      { a: 'elevator', b: 'lift', note: 'US / UK : ascenseur' },
      { a: 'apartment', b: 'flat', note: 'US / UK : appartement' },
      { a: 'gas', b: 'petrol', note: 'US / UK : essence' },
      { a: 'truck', b: 'lorry', note: 'US / UK : camion' },
      { a: 'line', b: 'queue', note: 'US / UK : file d’attente ; <i>queue</i> se prononce « kiou »' },
      { a: 'cell phone', b: 'mobile phone', note: 'US / UK : portable ; en UK, <i>mobile</i> se dit « mo-baïl »' }
    ] },
    { type: 'dialog', title: 'À la réception d’un hôtel à Londres', accent: 'en-GB', lines: [
      { speaker: 'M', en: 'Good evening. I have a reservation under the name Adeyemi.', fr: 'Bonsoir. J’ai une réservation au nom d’Adeyemi.' },
      { speaker: 'W', en: "Welcome, Mr. Adeyemi. You're in room 214, on the second floor. The lift is just behind you.", fr: 'Bienvenue, monsieur Adeyemi. Vous êtes dans la chambre 214, au deuxième étage. L’ascenseur est juste derrière vous.' },
      { speaker: 'M', en: 'Thanks. Is there a car park nearby?', fr: 'Merci. Y a-t-il un parking à proximité ?' },
      { speaker: 'W', en: "Yes, there's one across the road. Breakfast is served on the ground floor from half past six.", fr: 'Oui, il y en a un de l’autre côté de la rue. Le petit-déjeuner est servi au rez-de-chaussée à partir de 6 h 30.' },
      { speaker: 'M', en: 'Perfect. Could you also book me a taxi to the airport for tomorrow morning?', fr: 'Parfait. Pourriez-vous aussi me réserver un taxi pour l’aéroport demain matin ?' },
      { speaker: 'W', en: "Of course. I'll take care of it. Here's your key card.", fr: 'Bien sûr, je m’en occupe. Voici votre carte-clé.' }
    ] },

    { type: 'h', text: 'L’orthographe : américaine ou britannique ?' },
    { type: 'p', html: 'À l’écrit (Parties 5, 6 et 7), le TOEIC utilise surtout l’orthographe américaine, mais tu peux croiser l’orthographe britannique. Les deux sont correctes : l’important est de reconnaître le mot. Voici les différences régulières.' },
    { type: 'table', head: ['Règle', 'Américain (US)', 'Britannique (UK)'], rows: [
      ['-or / -our', 'color, favor, labor', 'colour, favour, labour'],
      ['-er / -re', 'center, meter, theater', 'centre, metre, theatre'],
      ['-ize / -ise', 'organize, realize, apologize', 'organise, realise, apologise (-ize existe aussi)'],
      ['l simple / l double devant -ed, -ing', 'traveled, canceled, labeling', 'travelled, cancelled, labelling'],
      ['-og / -ogue', 'catalog, analog', 'catalogue, analogue'],
      ['-se / -ce', 'license, defense', 'licence (nom), defence'],
      ['mots isolés', 'program, check (chèque), gray, tire (pneu)', 'programme (mais <i>program</i> en informatique), cheque, grey, tyre']
    ], caption: 'En cas de doute, écris à l’américaine : c’est l’orthographe la plus fréquente au TOEIC.' },
    { type: 'box', style: 'info', title: 'Les voix de ce site', html: 'Les exemples sont lus par la synthèse vocale de ton appareil. Si ton navigateur ne propose pas de voix australienne ou canadienne, tu entendras une voix américaine ou britannique à la place : fie-toi alors aux notes sous chaque exemple. Pour entendre de vraies voix, complète avec des podcasts, des vidéos ou des bulletins d’information de ces quatre pays.' },
    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'Dans les <b>Parties 1 à 4</b>, chaque voix a l’un de ces accents, et une même conversation peut réunir un Américain et une Australienne. Les questions ne portent jamais sur l’accent lui-même : ce qui compte, c’est de reconnaître les mots malgré l’accent (<i>can’t</i> britannique, <i>water</i> américain, <i>lift</i>, <i>queue</i>, <i>ground floor</i>…). Plus tu as entendu ces variantes, moins tu perds de temps à « décoder », et plus tu gardes d’attention pour la question.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• <b>r</b> en fin de syllabe : prononcé en US / CA (« kaar »), muet en UK / AU (« kaa »).<br>• <b>t</b> entre deux voyelles : « d » rapide en US / CA (et souvent AU), net en UK (<i>water, better, meeting</i>).<br>• <b>a</b> de <i>can’t, ask, bath</i> : « aè » en US / CA, « aa » long en UK / AU. <i>schedule</i> : « sk- » US, « sh- » UK. <b>Z</b> : « zii » US, « zèd » ailleurs.<br>• Vocabulaire : <i>elevator / lift, apartment / flat, check / bill, line / queue, gas / petrol, first floor / ground floor</i>.<br>• Orthographe : <i>color / colour, center / centre, organize / organise, traveled / travelled</i>.' }
  ],
  exercises: [
    { type: 'mcq', q: 'Dans quel accent entend-on le r de <i>car</i> et de <i>water</i> ?', options: ['Britannique', 'Australien', 'Américain'], answer: 2, explain: 'En américain (et en canadien), le r se prononce partout. En britannique et en australien, il disparaît en fin de syllabe : « kaa », « wo-teu ».' },
    { type: 'mcq', q: 'Comment un Américain prononce-t-il le plus souvent <i>better</i> ?', options: ['« bè-teu », avec un t bien net', '« bè-deur », avec un « d » très rapide', '« bè-teur », avec un r roulé'], answer: 1, explain: 'En américain, le t entre deux voyelles devient un « d » battu, et le r final se prononce : « bè-deur ». « bè-teu » est la prononciation britannique.' },
    { type: 'mcq', q: 'Comment un Canadien prononce-t-il généralement la lettre <b>Z</b> ?', options: ['« zii », comme les Américains', '« zèd », comme les Britanniques'], answer: 1, explain: 'Sur ce point, le canadien suit le britannique : Z = « zèd ». « zii » est la prononciation américaine (certains jeunes Canadiens l’utilisent aussi, mais « zèd » reste la norme au Canada).' },
    { type: 'mcq', q: 'Une Britannique dit <i>lift</i>. Quel est le mot américain ?', options: ['elevator', 'escalator', 'stairs', 'ladder'], answer: 0, explain: '<i>lift</i> (UK) = <i>elevator</i> (US) = ascenseur. <i>escalator</i> = escalier mécanique, <i>stairs</i> = escalier, <i>ladder</i> = échelle.' },
    { type: 'mcq', q: 'Au restaurant, un Américain demande <i>the check</i>. Que demande un Britannique ?', options: ['the bill', 'the cheque', 'the note', 'the ticket'], answer: 0, explain: 'En britannique, l’addition se dit <i>the bill</i>. <i>cheque</i> est l’orthographe britannique du chèque bancaire, pas de l’addition.' },
    { type: 'mcq', q: 'Laquelle de ces orthographes est <b>britannique</b> ?', options: ['color', 'center', 'organise', 'traveled'], answer: 2, explain: '<i>organise</i> (-ise) est britannique ; l’américain écrit <i>organize</i>. Les trois autres sont américaines (UK : <i>colour, centre, travelled</i>).' },
    { type: 'mcq', q: 'Dans un hôtel à Londres, la réceptionniste te dit : <i>Breakfast is served on the first floor.</i> Où est servi le petit-déjeuner ?', options: ['Au rez-de-chaussée', 'Au 1ᵉʳ étage', 'Au 2ᵉ étage'], answer: 1, explain: 'Au Royaume-Uni, le rez-de-chaussée est le <i>ground floor</i> ; le <i>first floor</i> est donc le 1ᵉʳ étage, comme en français.' },
    { type: 'gap', q: 'Complète en anglais <b>britannique</b> (file d’attente) : <i>Please join the ___ at the ticket office.</i>', answers: ['queue'], explain: 'La file d’attente se dit <b>queue</b> en britannique (prononcé « kiou ») et <i>line</i> en américain.' },
    { type: 'gap', q: 'Mot américain : <i>A British driver buys petrol. An American driver buys ___.</i>', answers: ['gas', 'gasoline'], explain: '<i>petrol</i> (UK) = <b>gas</b> ou <b>gasoline</b> (US) = essence.' },
    { type: 'listen', accent: 'en-GB', say: "I'm afraid we can't change the date.", q: 'Que dit la personne ?', options: ['Ils peuvent changer la date.', 'Ils ne peuvent pas changer la date.', 'Ils ont déjà changé la date.'], answer: 1, explain: 'Accent britannique : <i>can’t</i> = « kaannt », avec un a long et accentué. <i>I’m afraid</i> (je crains que…) annonce aussi une mauvaise nouvelle.' },
    { type: 'listen', say: 'Our meeting is on the first floor.', q: 'On te dit cette phrase dans un bureau à Chicago, aux États-Unis. À quel niveau est la réunion ?', options: ['Au rez-de-chaussée', 'Au 1ᵉʳ étage', 'Au 2ᵉ étage'], answer: 0, explain: 'Aux États-Unis, le <i>first floor</i> est le rez-de-chaussée (le niveau de la rue). Un Britannique dirait <i>ground floor</i>.' },
    { type: 'listen', accent: 'en-AU', say: 'See you at the station today, mate.', q: 'Quand les deux personnes vont-elles se voir ?', options: ['Aujourd’hui', 'Demain', 'Lundi'], answer: 0, explain: 'En australien, <i>today</i> se prononce presque « teu-daï » : le « ay » tire vers « aï ». <i>mate</i> (« maït ») = copain.' },
    { type: 'dictation', accent: 'en-GB', say: 'The lift is next to the reception desk.', answers: ['The lift is next to the reception desk'], explain: '<i>lift</i> = ascenseur en britannique (US : <i>elevator</i>). Dans <i>next to</i>, les deux t fusionnent : « nex-tə ».' },
    { type: 'dictation', say: 'The meeting starts at eight thirty.', answers: ['The meeting starts at eight thirty', 'The meeting starts at eight-thirty', 'The meeting starts at 8:30', 'The meeting starts at 8.30'], explain: 'Accent américain : <i>meeting</i> = « mii-ding » et <i>thirty</i> = « thur-di », avec des t battus.' },
    { type: 'dictation', accent: 'en-AU', say: 'The train leaves at eight today.', answers: ['The train leaves at eight today', 'The train leaves at 8 today'], explain: 'Accent australien : dans <i>eight</i> (« aït ») et <i>today</i> (« teu-daï »), le « ay » tire vers « aï ».' },
    { type: 'listen', accent: 'en-CA', say: 'Sorry, the elevator is out of order. Please use the stairs.', q: 'What problem does the speaker mention?', options: ['An elevator is not working.', 'An order has been canceled.', 'The stairs are closed.', 'A meeting has been delayed.'], answer: 0, explain: '<i>out of order</i> = en panne. Piège : le mot <i>order</i> (commande) fait penser à la réponse B. Accent canadien : proche de l’américain, mais <i>sorry</i> se dit « sor-i ».' }
  ]
});
