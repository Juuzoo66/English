LE.register({
  id: 'p02',
  kind: 'pron',
  title: 'Les consonnes piégeuses : th, h, r, w, -ng',
  subtitle: 'Les sons qui n’existent pas en français… et les lettres qui ne se prononcent pas',
  level: 'A1',
  minutes: 35,
  goals: [
    'Reconnaître et prononcer les deux sons du <b>th</b> : <i>think</i>, <i>this</i>',
    'Entendre (et dire) le <b>h</b> : <i>hair ≠ air</i>, <i>heat ≠ eat</i>',
    'Produire le <b>r</b> anglais, le <b>w</b> et le son <b>-ng</b>',
    'Ne plus te faire piéger par les consonnes finales et les lettres muettes'
  ],
  blocks: [
    { type: 'h', text: 'Pourquoi ces consonnes posent problème' },
    { type: 'p', html: 'La plupart des consonnes anglaises ressemblent aux nôtres. Mais certains sons <b>n’existent pas en français</b> (le <b>th</b>, le <b>h</b> soufflé, le <b>r</b> anglais) et beaucoup de lettres écrites <b>ne se prononcent pas</b> (<i>knife, write, listen</i>). À l’écoute, c’est un double piège : tu entends des sons que tu ne connais pas, et tu ne reconnais pas des mots que tu sais pourtant lire. Au TOEIC, <i>three</i> (trois), <i>tree</i> (arbre) et <i>free</i> (gratuit) ne mènent pas du tout à la même réponse !' },
    { type: 'table', head: ['Son', 'Exemples', 'Comment le faire', 'Erreur typique'], rows: [
      ['/θ/ (th sourd)', '<i>think, three, month</i>', 'langue entre les dents, on souffle sans faire vibrer la voix', '« sink », « tree »'],
      ['/ð/ (th sonore)', '<i>this, the, mother</i>', 'même position, mais la gorge vibre', '« zis », « ze »'],
      ['/h/', '<i>hello, hair, house</i>', 'un souffle, comme pour faire de la buée sur une vitre', '« ello », « air »'],
      ['/r/', '<i>red, very, car</i>', 'la langue se recourbe vers l’arrière sans rien toucher', 'r français, dans la gorge'],
      ['/w/', '<i>west, would, one</i>', 'un « ou » très bref qui glisse, comme dans « oui »', '« vest »'],
      ['/ŋ/ (-ng)', '<i>sing, long, working</i>', 'le « ng » de « parking », sans « gue » à la fin', '« sin-gue »']
    ] },

    { type: 'h', text: 'Le th : deux sons à connaître' },
    { type: 'p', html: 'Pour faire un <b>th</b>, place le bout de la langue <b>entre les dents</b> (on la voit un peu !), puis souffle. Il existe deux versions :<br>• <b>/θ/, sourd</b> : on souffle seulement, comme un « s » zozoté : <i>think, three, thank, month, Thursday, health</i>.<br>• <b>/ð/, sonore</b> : la gorge vibre, comme un « z » zozoté : <i>the, this, that, they, there, mother, together</i>.' },
    { type: 'examples', items: [
      { en: 'Thank you. I think so.', fr: 'Merci. Je pense que oui.', note: '/θ/ sourd : <i>thank, think</i>.' },
      { en: 'The meeting is on Thursday the third.', fr: 'La réunion est le jeudi 3.', note: '/ð/ dans <i>the</i> ; /θ/ dans <i>Thursday</i> et <i>third</i>.' },
      { en: 'This is my mother.', fr: 'Voici ma mère.', note: '/ð/ sonore : <i>this, mother</i>.' },
      { en: 'They work together every month.', fr: 'Ils travaillent ensemble tous les mois.', note: '/ð/ : <i>they, together</i> ; /θ/ : <i>month</i>.' }
    ] },
    { type: 'pairs', items: [
      { a: 'thin', b: 'tin', note: 'mince / l’étain, une boîte de conserve' },
      { a: 'three', b: 'tree', note: 'trois / un arbre' },
      { a: 'think', b: 'sink', note: 'penser / couler, un évier' },
      { a: 'thank', b: 'tank', note: 'remercier / un réservoir' },
      { a: 'mouth', b: 'mouse', note: 'la bouche / une souris' },
      { a: 'they', b: 'day', note: 'ils, elles / un jour' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : remplacer le th', html: 'Les francophones remplacent souvent le th par <b>s, z, t, d</b> ou <b>f</b>. Mais ce sont d’<b>autres mots</b> ! <i>I think</i> (je pense) devient <i>I sink</i> (je coule) ; <i>three</i> (trois) devient <i>tree</i> (arbre) ou <i>free</i> (gratuit). À l’écoute, ne confonds pas <i>Thursday</i> (jeudi) et <i>Tuesday</i> (mardi) : c’est un piège fréquent dans les plannings du TOEIC.' },
    { type: 'box', style: 'tip', title: 'Trois astuces pour t’entraîner', html: '• <b>th</b> : mets ton doigt devant ta bouche ; en disant <i>think</i>, le bout de ta langue doit presque le toucher.<br>• <b>h</b> : tiens une feuille de papier devant ta bouche ; elle doit bouger quand tu dis <i>hair</i>, mais pas quand tu dis <i>air</i>.<br>• Enregistre-toi avec ton téléphone et compare avec l’audio de la leçon.' },

    { type: 'h', text: 'Le h : on l’entend (presque toujours) !' },
    { type: 'p', html: 'En français, le h ne se prononce jamais. En anglais, il se prononce presque toujours : c’est un <b>souffle</b> léger, comme quand tu fais de la buée sur tes lunettes pour les nettoyer. Si tu oublies le h, tu changes de mot : <i>hair</i> (cheveux) devient <i>air</i> (air). À l’inverse, n’ajoute pas de h là où il n’y en a pas : <i>and</i> (et) n’est pas <i>hand</i> (la main).' },
    { type: 'pairs', items: [
      { a: 'hair', b: 'air', note: 'les cheveux / l’air' },
      { a: 'heat', b: 'eat', note: 'chauffer, la chaleur / manger' },
      { a: 'hand', b: 'and', note: 'la main / et' },
      { a: 'hold', b: 'old', note: 'tenir / vieux' },
      { a: 'hear', b: 'ear', note: 'entendre / l’oreille' },
      { a: 'hate', b: 'eight', note: 'détester / huit' }
    ] },
    { type: 'p', html: 'Il existe quelques mots où le h est <b>muet</b>, comme en français. Les plus fréquents : <i>hour</i> (heure), <i>honest</i> (honnête), <i>honor</i> (honneur) et leurs dérivés (<i>hourly, honestly</i>) ; en américain, aussi <i>herb</i> (herbe aromatique). Comme ils commencent par un son voyelle, on dit <b>an</b> devant : <i>an hour</i>, <i>an honest answer</i> (voir « Les articles : a, an, the ou rien »).' },
    { type: 'examples', items: [
      { en: 'Hello, how can I help you?', fr: 'Bonjour, comment puis-je vous aider ?', note: 'Trois h soufflés : <i>hello, how, help</i>.' },
      { en: 'The hotel is behind the hospital.', fr: 'L’hôtel est derrière l’hôpital.', note: 'Le h de <i>hotel</i> et de <i>hospital</i> se prononce, contrairement au français.' },
      { en: "We'll be there in an hour.", fr: 'Nous serons là dans une heure.', note: '<i>hour</i> : h muet, donc <b>an</b> hour. Il se prononce comme <i>our</i> (notre).' },
      { en: "He's an honest manager.", fr: 'C’est un manager honnête.', note: '<i>honest</i> : h muet → <b>an</b> honest…' }
    ] },

    { type: 'h', text: 'Le r anglais' },
    { type: 'p', html: 'Le <b>r</b> anglais ne se fait <b>ni dans la gorge</b> (comme le r français), <b>ni en roulant</b>. Recourbe légèrement le bout de la langue vers l’arrière, <b>sans toucher</b> le palais, et arrondis un peu les lèvres.<br>• En <b>américain</b>, le r se prononce partout, même en fin de mot et devant une consonne : <i>car, first, work, water</i>.<br>• En <b>britannique</b>, le r ne se prononce que devant une voyelle (<i>red, very</i>) ; <i>car</i> se dit « kââ ». Au TOEIC, tu entendras les deux.' },
    { type: 'examples', items: [
      { en: 'Turn right at the corner.', fr: 'Tourne à droite au coin de la rue.', note: 'Accent américain : on entend les deux r de <i>corner</i>.' },
      { en: "Sorry, I'm very busy right now.", fr: 'Désolée, je suis très occupée en ce moment.', note: 'Entre deux voyelles (<i>sorry, very</i>), le r se prononce dans tous les accents.' },
      { en: 'The factory is in a rural area.', fr: 'L’usine est dans une zone rurale.', note: '<i>rural</i> est difficile même pour les natifs : « ROU-rəl ». <i>area</i> = « È-ri-ə ».' },
      { en: 'Where is your car?', fr: 'Où est ta voiture ?', note: 'Accent américain : le r de <i>where</i>, <i>your</i> et <i>car</i> est prononcé.', accent: 'en-US' },
      { en: 'Where is your car?', fr: 'Où est ta voiture ?', note: 'Accent britannique : les r finaux disparaissent (« kââ »).', accent: 'en-GB' }
    ] },

    { type: 'h', text: 'Le w (et le wh)' },
    { type: 'p', html: 'Le <b>w</b> se prononce comme un « ou » très rapide qui glisse vers la voyelle suivante, comme dans « <b>ou</b>i » ou « <b>ou</b>est ». Ce n’est <b>jamais</b> un « v » : <i>west</i> (ouest) ≠ <i>vest</i> (gilet). Les mots en <b>wh</b> (<i>what, where, when, which, why</i>) se prononcent aussi avec ce « ou ». <b>Exceptions</b> : <i>who</i> (« hou »), <i>whose</i> (« houz ») et <i>whole</i> (comme <i>hole</i>) commencent par un <b>h</b>. Et <i>one</i> (un) commence par un son w : il se prononce comme <i>won</i> (a gagné).<br>Enfin, dans <i>would, could, should</i>, le <b>l</b> est muet : <i>would</i> se prononce exactement comme <i>wood</i> (le bois).' },
    { type: 'pairs', items: [
      { a: 'west', b: 'vest', note: 'l’ouest / un gilet' },
      { a: 'wine', b: 'vine', note: 'le vin / la vigne' },
      { a: 'wet', b: 'vet', note: 'mouillé / un vétérinaire' },
      { a: 'went', b: 'vent', note: 'est allé / une bouche d’aération' }
    ] },

    { type: 'h', text: 'Le son -ng /ŋ/' },
    { type: 'p', html: 'Le son /ŋ/ se fait au <b>fond de la bouche</b> : c’est le son final de « parking » ou « camping » quand on les dit à la française. À la fin d’un mot (<i>sing, long, thing</i>) et dans la terminaison <b>-ing</b> (<i>working, meeting</i>), on n’ajoute <b>pas</b> de « gue » : <i>sing</i> ≠ « sin-gue ». Ne le remplace pas non plus par un simple <b>n</b> : <i>thing</i> (une chose) ≠ <i>thin</i> (mince).' },
    { type: 'pairs', items: [
      { a: 'sin', b: 'sing', note: 'un péché / chanter' },
      { a: 'thin', b: 'thing', note: 'mince / une chose' },
      { a: 'win', b: 'wing', note: 'gagner / une aile' },
      { a: 'ran', b: 'rang', note: 'a couru / a sonné' }
    ] },
    { type: 'examples', items: [
      { en: 'Good morning, everyone!', fr: 'Bonjour à tous !', note: '<i>morning</i> : /ŋ/ final, sans « gue ».' },
      { en: "I'm working on a long report.", fr: 'Je travaille sur un long rapport.', note: '<i>working, long</i> : /ŋ/.' },
      { en: 'The meeting is starting.', fr: 'La réunion commence.', note: 'Deux /ŋ/ (<i>meeting, starting</i>)… et aucun « gue ».' },
      { en: "We're going shopping this evening.", fr: 'Nous allons faire les magasins ce soir.', note: '<i>going, shopping, evening</i> : /ŋ/.' }
    ] },

    { type: 'h', text: 'Les consonnes finales : on les prononce !' },
    { type: 'p', html: 'En français, beaucoup de consonnes finales sont muettes : « peti<b>t</b> », « troi<b>s</b> ». En anglais, on <b>prononce les consonnes finales</b>, même quand il y en a plusieurs à la suite : <i>desk</i> (« dèsk »), <i>text</i> (« tèkst »), <i>asked</i> (« askt »). Elles portent souvent du sens : le <b>-s</b> du pluriel, le <b>-ed</b> du passé (voir « Les terminaisons -s et -ed à l’oral »).' },
    { type: 'examples', items: [
      { en: 'Please send me a text.', fr: 'Envoie-moi un texto, s’il te plaît.', note: '<i>send</i> : on entend le d ; <i>text</i> : « tèkst ».' },
      { en: 'I asked for a desk near the window.', fr: 'J’ai demandé un bureau près de la fenêtre.', note: '<i>asked</i> : « askt », trois consonnes à la fin !' },
      { en: 'The shops close at six.', fr: 'Les magasins ferment à six heures.', note: '<i>shops</i> : « chops » ; <i>close</i> : « klo-ouz » ; <i>six</i> : « siks ».' },
      { en: 'She helps her clients.', fr: 'Elle aide ses clients.', note: '<i>helps</i> : « hèlps » ; <i>clients</i> : « KLAÏ-ənts ».' }
    ] },

    { type: 'h', text: 'Les lettres muettes' },
    { type: 'table', head: ['Lettre muette', 'Exemples', 'Ça sonne comme…'], rows: [
      ['<b>k</b> devant n', '<i>knife, know, knee</i>', '« naïf », « no-ou », « nii »'],
      ['<b>w</b> devant r', '<i>write, wrap</i>', '« raït », « rap »'],
      ['<b>s</b>', '<i>island</i>', '« AÏ-lənd »'],
      ['<b>d</b>', '<i>Wednesday</i>', '« OUÈNZ-déï »'],
      ['<b>t</b>', '<i>listen, castle</i>', '« LI-sən », « KA-səl »'],
      ['<b>l</b>', '<i>half, walk, talk, could</i>', '« haf », « wok », « tok », « koud »'],
      ['<b>p</b>', '<i>receipt</i>', '« ri-SIIT »'],
      ['<b>b</b>', '<i>debt, doubt, climb</i>', '« dèt », « daout », « klaïm »'],
      ['<b>gh</b>', '<i>night, eight, daughter</i>', '« naït », « éït », « DO-tər »']
    ], caption: 'À l’écoute, tu dois reconnaître le mot tel qu’il <b>sonne</b>, pas tel qu’il s’écrit.' },
    { type: 'box', style: 'warn', title: 'Piège : des mots du TOEIC aux lettres muettes', html: '<i>receipt</i> (un reçu) se dit « ri-SIIT », sans p ; <i>debt</i> (une dette) se dit « dèt », sans b ; <i>Wednesday</i> se dit en deux syllabes, sans d. Ces mots sont fréquents au TOEIC (achats, finance, plannings) : si tu attends le p, le b ou le d, tu ne les reconnaîtras pas à l’oral !' },
    { type: 'pairs', items: [
      { a: 'sheet', b: 'seat', note: 'une feuille / un siège (<i>sh</i> = le « ch » français)' },
      { a: 'she', b: 'see', note: 'elle / voir' },
      { a: 'hat', b: 'at', note: 'un chapeau / à' },
      { a: 'hill', b: 'ill', note: 'une colline / malade' },
      { a: 'three', b: 'free', note: 'trois / gratuit, libre' }
    ] },
    { type: 'dialog', title: 'Au téléphone avec l’hôtel', lines: [
      { speaker: 'W', en: 'Good morning, Hartwell Hotel. How can I help you?', fr: 'Bonjour, hôtel Hartwell. Comment puis-je vous aider ?' },
      { speaker: 'M', en: "Hi. I'd like to book a room for three nights, from Thursday.", fr: 'Bonjour. Je voudrais réserver une chambre pour trois nuits, à partir de jeudi.' },
      { speaker: 'W', en: 'Certainly. Would you like a room with a view of the river?', fr: 'Bien sûr. Voulez-vous une chambre avec vue sur la rivière ?' },
      { speaker: 'M', en: 'Yes, that would be perfect. How much is it?', fr: 'Oui, ce serait parfait. C’est combien ?' },
      { speaker: 'W', en: "It's a hundred and thirty dollars a night.", fr: 'C’est cent trente dollars la nuit.' },
      { speaker: 'M', en: "Great. I'll send you my details this morning. Thank you!", fr: 'Parfait. Je vous envoie mes coordonnées ce matin. Merci !' }
    ] },
    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 2</b>, les mauvaises réponses contiennent souvent un mot qui <b>sonne presque</b> comme un mot de la question. Exemple : <i>Who’s going to <b>hold</b> the meeting?</i> (Qui va animer la réunion ?) → piège : <i>The building is quite <b>old</b>.</i> ; bonne réponse : <i>Ms. Nakamura will.</i> Méfie-toi aussi de <i>three / tree / free</i>, <i>thirty / dirty</i>, <i>hair / air</i>. En <b>Parties 3 et 4</b>, écoute bien les jours : <i>Thursday</i> ou <i>Tuesday</i> ?' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• <b>th</b> : langue entre les dents ; /θ/ sourd (<i>think, three</i>) et /ð/ sonore (<i>this, the</i>). Jamais s, z, t, d ou f.<br>• <b>h</b> : un souffle, presque toujours prononcé (<i>hair ≠ air</i>) ; muet seulement dans <i>hour, honest, honor</i> (→ <i>an hour</i>).<br>• <b>r</b> : langue recourbée, pas de r de gorge ; prononcé en fin de mot en américain (<i>car</i>).<br>• <b>w</b> = « ou » rapide, jamais « v » ; <i>who, whose, whole</i> = son h.<br>• <b>-ng</b> /ŋ/ sans « gue » : <i>sing, working</i>.<br>• On prononce les consonnes finales (<i>desk, asked</i>), mais pas les lettres muettes (<i>knife, write, listen, receipt, debt, Wednesday</i>).' }
  ],
  exercises: [
    { type: 'listen', say: 'three', q: 'Quel mot entends-tu ?', options: ['tree', 'three', 'free'], answer: 1, explain: '<i>three</i> (trois) commence par /θ/ : la langue est entre les dents. <i>tree</i> commence par un t, <i>free</i> par un f.' },
    { type: 'listen', say: 'think', q: 'Quel mot entends-tu ?', options: ['think', 'sink'], answer: 0, explain: '<i>think</i> (penser) : /θ/, un « s » zozoté, langue entre les dents. <i>sink</i> (couler) commence par un vrai s.' },
    { type: 'listen', say: 'hair', q: 'Quel mot entends-tu ?', options: ['air', 'hair'], answer: 1, explain: 'On entend un souffle au début : <i>hair</i> (cheveux). Sans h, ce serait <i>air</i> (l’air).' },
    { type: 'listen', say: 'eat', q: 'Quel mot entends-tu ?', options: ['eat', 'heat'], answer: 0, explain: 'Pas de souffle au début : <i>eat</i> (manger). <i>heat</i> (chauffer) commence par un h soufflé.' },
    { type: 'listen', say: 'sheet', q: 'Quel mot entends-tu ?', options: ['seat', 'sheet'], answer: 1, explain: '<i>sheet</i> (feuille) commence par <i>sh</i>, comme le « ch » français. <i>seat</i> (siège) commence par un s.' },
    { type: 'listen', say: 'at', q: 'Quel mot entends-tu ?', options: ['at', 'hat'], answer: 0, explain: '<i>at</i> (à) commence directement par la voyelle. <i>hat</i> (chapeau) commence par un souffle.' },
    { type: 'mcq', q: 'Quel mot commence par le même son que <i>this</i> ?', options: ['think', 'they', 'tea', 'zoo'], answer: 1, explain: '<i>this</i> et <i>they</i> commencent par /ð/, le th <b>sonore</b> (la gorge vibre). <i>think</i> commence par le th <b>sourd</b> /θ/ ; <i>tea</i> et <i>zoo</i> n’ont pas de th.' },
    { type: 'mcq', q: 'Dans quel mot le <b>h</b> est-il muet ?', options: ['hotel', 'hour', 'happy', 'hand'], answer: 1, explain: '<i>hour</i> (heure) se prononce comme <i>our</i> : le h est muet, d’où <i>an hour</i>. Dans <i>hotel, happy, hand</i>, le h est soufflé.' },
    { type: 'mcq', q: 'Dans quel mot le <b>w</b> ne se prononce PAS ?', options: ['west', 'write', 'week', 'would'], answer: 1, explain: 'Devant un <b>r</b>, le w est muet : <i>write</i> se dit « raït ». Dans <i>west, week, would</i>, on entend le « ou » du w (dans <i>would</i>, c’est le <b>l</b> qui est muet).' },
    { type: 'mcq', q: 'Comment se prononce <i>receipt</i> (un reçu) ?', options: ['« ri-SIIPT », avec le p', '« ri-SIIT », sans le p', '« RÉ-sèpt », comme en français'], answer: 1, explain: 'Le <b>p</b> de <i>receipt</i> est muet et l’accent est sur la 2ᵉ syllabe : « ri-SIIT ».' },
    { type: 'mcq', q: 'Comment commence le mot <i>who</i> (qui) ?', options: ['Par un son « ou », comme <i>what</i>', 'Par un <b>h</b> soufflé : « hou »', 'Par un son « v » : « vou »'], answer: 1, explain: '<i>who</i>, <i>whose</i> et <i>whole</i> sont des exceptions : le <i>wh</i> se prononce /h/. Dans <i>what, where, when</i>, on entend un « ou ».' },
    { type: 'listen', say: 'He heats the soup.', q: 'Qu’as-tu entendu ?', options: ['He heats the soup.', 'He eats the soup.'], answer: 0, explain: 'On entend le souffle du <b>h</b> : <i>heats</i> (il fait chauffer la soupe). Sans h, ce serait <i>eats</i> (il mange la soupe).' },
    { type: 'listen', say: "Who's going to hold the meeting?", accent: 'en-GB', q: 'Tu entends une question (style TOEIC Partie 2). Quelle est la meilleure réponse ?', options: ['The building is quite old.', 'At three thirty.', 'Ms. Nakamura will.'], answer: 2, explain: '<i>Who</i> demande une <b>personne</b> → <i>Ms. Nakamura will.</i> <i>old</i> est un piège sonore (<i>hold</i> / <i>old</i>) ; <i>At three thirty</i> répondrait à <i>When…?</i>' },
    { type: 'dictation', say: 'I think the third one is better.', answers: ['I think the third one is better', 'I think the 3rd one is better'], explain: 'Deux th sourds /θ/ : <i>think</i> et <i>third</i>, et un th sonore /ð/ dans <i>the</i>. Traduction : « Je pense que le troisième est mieux. »' },
    { type: 'dictation', say: "We'll be there in an hour.", accent: 'en-AU', answers: ["We'll be there in an hour", 'We will be there in an hour'], explain: '<i>hour</i> a un h muet : on dit <i>an hour</i>, et le mot sonne comme <i>our</i>. Traduction : « Nous serons là dans une heure. »' },
    { type: 'dictation', say: 'Please keep your receipt.', answers: ['Please keep your receipt'], explain: '<i>receipt</i> (reçu) se prononce « ri-SIIT » : le p est muet. Traduction : « Veuillez conserver votre reçu. »' }
  ]
});
