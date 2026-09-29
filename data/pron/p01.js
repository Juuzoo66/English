LE.register({
  id: 'p01',
  kind: 'pron',
  title: 'Les voyelles : sons courts et sons longs',
  subtitle: 'Entraîner ton oreille aux sons qui changent le sens des mots : ship ou sheep ?',
  level: 'A1',
  minutes: 35,
  goals: [
    'Distinguer les voyelles <b>courtes</b> et <b>longues</b> : <i>ship / sheep</i>, <i>full / fool</i>',
    'Reconnaître les sons de <i>cat</i>, <i>cut</i>, <i>cart</i>, <i>bed</i> et <i>bad</i>',
    'Repérer le <b>schwa</b> /ə/, la voyelle la plus fréquente de l’anglais',
    'Entendre les <b>diphtongues</b> (<i>day, go, my, now</i>) et oublier les voyelles nasales'
  ],
  blocks: [
    { type: 'h', text: 'Pourquoi les voyelles sont-elles si importantes ?' },
    { type: 'p', html: 'L’anglais n’a que <b>5 lettres voyelles</b> (a, e, i, o, u), mais une <b>vingtaine de sons voyelles</b>. Une même lettre peut donc se prononcer de plusieurs façons : le <b>a</b> de <i>cat</i>, de <i>car</i>, de <i>name</i> et de <i>about</i> n’est jamais le même son !<br>Pour le TOEIC, ton objectif n°1 est de <b>comprendre</b> : si tu ne fais pas la différence entre <i>ship</i> (bateau) et <i>sheep</i> (mouton), ou entre <i>man</i> (un homme) et <i>men</i> (des hommes), tu risques de choisir la mauvaise réponse. Ton objectif n°2 est de <b>te faire comprendre</b>. Bonne nouvelle : en entraînant ton oreille, ta prononciation s’améliore aussi.' },
    { type: 'box', style: 'tip', title: 'Comment travailler cette leçon', html: 'Écoute chaque exemple et <b>répète-le à voix haute</b>, plusieurs fois. Pour les paires de mots, écoute les deux, puis ferme les yeux et demande-toi : « Lequel est-ce ? ». Les symboles entre barres obliques (comme /iː/) viennent de l’<b>alphabet phonétique</b> des dictionnaires : inutile de les apprendre par cœur, ils sont toujours expliqués avec un son français.' },

    { type: 'h', text: 'Sons courts et sons longs' },
    { type: 'p', html: 'En français, la durée d’une voyelle ne change pas le sens d’un mot. En anglais, <b>si</b> ! Les voyelles longues (notées avec <b>ː</b>, comme /iː/) sont <b>plus longues</b> et plus <b>tendues</b>. Les voyelles courtes sont <b>brèves</b> et <b>relâchées</b> : la bouche est détendue, presque paresseuse.' },
    { type: 'table', head: ['Son court', 'Exemples', 'Son long', 'Exemples'], rows: [
      ['/ɪ/ : un « i » très bref et relâché, presque « é »', '<i>ship, sit, fill, live, it</i>', '/iː/ : comme le « i » de « lit », mais plus long, lèvres étirées (comme pour sourire)', '<i>sheep, seat, feel, leave, eat</i>'],
      ['/ʊ/ : un « ou » bref, lèvres peu arrondies', '<i>full, pull, look, good, book</i>', '/uː/ : comme le « ou » de « fou », mais plus long', '<i>fool, pool, food, soon, two</i>']
    ], caption: 'Astuce : pour le son long, tiens le son (« chiiip ») ; pour le son court, détends la bouche et coupe net.' },
    { type: 'pairs', items: [
      { a: 'ship', b: 'sheep', note: 'un bateau / un mouton' },
      { a: 'sit', b: 'seat', note: 's’asseoir / un siège' },
      { a: 'fill', b: 'feel', note: 'remplir / ressentir' },
      { a: 'to live', b: 'to leave', note: 'habiter, vivre / partir, quitter' },
      { a: 'it', b: 'eat', note: 'il, ça / manger' },
      { a: 'full', b: 'fool', note: 'plein / un idiot' },
      { a: 'pull', b: 'pool', note: 'tirer / une piscine' }
    ] },
    { type: 'examples', items: [
      { en: 'Please take a seat.', fr: 'Asseyez-vous, je vous en prie.', note: '<i>seat</i> : /iː/ long, « siiit ».' },
      { en: 'Can I sit here?', fr: 'Je peux m’asseoir ici ?', note: '<i>sit</i> : /ɪ/ court et relâché.' },
      { en: 'I live in Lyon, but I leave for Boston tomorrow.', fr: 'J’habite à Lyon, mais je pars pour Boston demain.', note: '<i>live</i> (court) = habiter ; <i>leave</i> (long) = partir.' },
      { en: 'The pool is full of people.', fr: 'La piscine est pleine de monde.', note: '<i>pool</i> : /uː/ long ; <i>full</i> : /ʊ/ court.' },
      { en: 'Pull the door, please.', fr: 'Tirez la porte, s’il vous plaît.', note: '<i>pull</i> : /ʊ/ court. Tu verras ce mot sur beaucoup de portes !' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : le /iː/ trop court', html: 'Les francophones prononcent souvent tous les « i » de la même façon, courts. Résultat : <i>leave</i> devient <i>live</i>, et <i>I want to leave</i> (je veux partir) devient <i>I want to live</i> (je veux vivre) ! Allonge aussi le /iː/ de <i>sheet</i> (feuille), <i>beach</i> (plage) et <i>piece</i> (morceau) : prononcés trop courts, ils ressemblent à… des gros mots.' },

    { type: 'h', text: 'Les sons de cat, cut, cart, bed et bad' },
    { type: 'p', html: 'Ces cinq mots ont des voyelles différentes qui, pour une oreille française, se ressemblent beaucoup. Écoute-les bien : ce sont des pièges classiques de la <b>Partie 1</b> du TOEIC (la description de photos).' },
    { type: 'table', head: ['Son', 'Mot repère', 'Comparaison française', 'Autres mots'], rows: [
      ['/æ/', '<i>cat</i>, <i>bad</i>', 'un « è » très ouvert, presque « a » : ouvre grand la bouche', '<i>man, bag, back, plan, happy</i>'],
      ['/ʌ/', '<i>cut</i>', 'un « a » bref et sourd, bouche peu ouverte, proche du « eu » de « peur » dit très vite', '<i>bus, run, cup, money, Monday</i>'],
      ['/ɑː/', '<i>cart</i>', 'comme le « â » de « pâte », long, au fond de la bouche', '<i>car, far, park, start, father</i>'],
      ['/e/', '<i>bed</i>', 'comme le « è » de « mère », mais court', '<i>men, desk, send, ten, said</i>']
    ], caption: 'En anglais américain, le <b>r</b> de <i>cart, car, park</i> se prononce (voir « Les consonnes piégeuses : th, h, r, w, -ng »).' },
    { type: 'pairs', items: [
      { a: 'cat', b: 'cut', note: 'un chat / couper' },
      { a: 'cap', b: 'cup', note: 'une casquette / une tasse' },
      { a: 'bag', b: 'bug', note: 'un sac / un insecte, un bug' },
      { a: 'cut', b: 'cart', note: 'couper / un chariot' },
      { a: 'bed', b: 'bad', note: 'un lit / mauvais' },
      { a: 'men', b: 'man', note: 'des hommes / un homme' },
      { a: 'pen', b: 'pan', note: 'un stylo / une poêle' }
    ] },
    { type: 'box', style: 'tip', title: 'Le son /ʌ/ s’écrit souvent avec un « o »', html: 'Beaucoup de mots très fréquents s’écrivent avec un <b>o</b> mais se prononcent /ʌ/, comme <i>cut</i> : <i>money, Monday, month, come, some, love, other, mother, company</i>. Ne dis pas « mo-ney » : c’est plutôt « MEU-ni ».' },
    { type: 'box', style: 'warn', title: 'Piège du TOEIC : man ou men ?', html: 'En <b>Partie 1</b>, tu choisis la phrase qui décrit une photo. <i>The <b>man</b> is reading</i> (un homme) et <i>The <b>men</b> are reading</i> (des hommes) ne décrivent pas la même photo ! Écoute la voyelle (/æ/ très ouvert pour <i>man</i>, /e/ pour <i>men</i>) <b>et</b> le verbe (<i>is</i> ou <i>are</i>). Même chose pour <i>woman</i> /ˈwʊmən/ et <i>women</i> /ˈwɪmɪn/ : c’est la <b>première</b> syllabe qui change (« OU-mən » / « OUI-min »).' },

    { type: 'h', text: 'Not ou note ? Le « o » court et le « o » qui glisse' },
    { type: 'p', html: 'Le <b>o</b> court de <i>not, hot, stop, job</i> dépend de l’accent : en <b>américain</b>, c’est un « â » ouvert, comme dans « pâte » (/ɑː/) : <i>job</i> sonne presque « djââb » ; en <b>britannique</b>, c’est un « o » court et ouvert, comme dans « bol » (/ɒ/).<br>Le <b>o</b> de <i>note, go, phone, home</i> n’est pas un « ô » français immobile : il <b>glisse</b> de « o » vers « ou » (/oʊ/).' },
    { type: 'pairs', items: [
      { a: 'not', b: 'note', note: 'ne… pas / une note, un petit mot' },
      { a: 'cost', b: 'coast', note: 'coûter / la côte' },
      { a: 'got', b: 'goat', note: 'a obtenu / une chèvre' },
      { a: 'hop', b: 'hope', note: 'sautiller / espérer' },
      { a: 'want', b: "won't", note: 'vouloir / <i>will not</i> (ne… pas, au futur)' }
    ] },
    { type: 'examples', items: [
      { en: 'The shop is not open on Sunday.', fr: 'Le magasin n’est pas ouvert le dimanche.', note: '<i>shop</i>, <i>not</i> : o court ; <i>open</i> : o qui glisse /oʊ/.' },
      { en: 'I got a new phone.', fr: 'J’ai eu un nouveau téléphone.', note: '<i>got</i> : o court ; <i>phone</i> : /oʊ/.' },
      { en: "I won't go home late.", fr: 'Je ne rentrerai pas tard.', note: '<i>won’t</i>, <i>go</i>, <i>home</i> : trois fois /oʊ/. Ne confonds pas <i>won’t</i> avec <i>want</i> (vouloir) !' },
      { en: 'Please send me a note.', fr: 'Envoie-moi un petit mot, s’il te plaît.', note: '<i>note</i> : le son glisse de « o » vers « ou ».' }
    ] },

    { type: 'h', text: 'Le schwa /ə/ : la voyelle la plus fréquente' },
    { type: 'p', html: 'Le <b>schwa</b> (prononcé « chwâ ») est un son très court et neutre, comme le « e » de « le » ou de « petit » dit à toute vitesse, la bouche complètement détendue. C’est <b>le son le plus fréquent de l’anglais</b>. On le trouve dans les syllabes <b>non accentuées</b> (les syllabes faibles), quelle que soit la lettre écrite : a, e, i, o ou u.<br><b>Pour comprendre à l’oral</b> : les syllabes avec un schwa sont très faibles, elles semblent presque disparaître. Ne cherche pas à entendre chaque voyelle ; repère plutôt la <b>syllabe forte</b>, plus longue et plus claire (tu approfondiras ce point dans « L’accent de mot et l’accent de phrase »).' },
    { type: 'table', head: ['Mot', 'À l’oral (en majuscules : la syllabe forte)', 'Où est le schwa ?'], rows: [
      ['<i>about</i>', 'ə-BAOUT', 'le <b>a</b> du début'],
      ['<i>banana</i>', 'bə-NA-nə', 'le premier et le dernier <b>a</b>'],
      ['<i>computer</i>', 'kəm-PIOU-tər', 'le <b>o</b> (et le <b>e</b> de la fin)'],
      ['<i>today</i>', 'tə-DÉÏ', 'le <b>o</b>'],
      ['<i>listen</i>', 'LI-sən', 'le <b>e</b> (et le t est muet !)'],
      ['<i>support</i>', 'sə-PORT', 'le <b>u</b>']
    ], caption: 'Des lettres différentes, mais le même son : un petit « e » neutre, noté /ə/.' },
    { type: 'examples', items: [
      { en: 'Can you send me the agenda?', fr: 'Tu peux m’envoyer l’ordre du jour ?', note: '<i>agenda</i> = « ə-DJÈN-də » : deux schwas. Attention, <i>agenda</i> = ordre du jour ; un agenda se dit <i>a planner</i> (US) ou <i>a diary</i> (UK).' },
      { en: 'My computer is slow today.', fr: 'Mon ordinateur est lent aujourd’hui.', note: '<i>computer</i> et <i>today</i> commencent par un schwa.' },
      { en: 'I need a pen and a pencil.', fr: 'J’ai besoin d’un stylo et d’un crayon.', note: 'Les petits mots <i>a</i> et <i>and</i> se réduisent aussi : « ə », « ən ».' },
      { en: 'Let me check the calendar.', fr: 'Laisse-moi vérifier le calendrier.', note: '<i>calendar</i> = « KA-lən-dər » : la première syllabe est forte, les deux autres contiennent un schwa.' }
    ] },

    { type: 'h', text: 'Les diphtongues : des voyelles qui glissent' },
    { type: 'p', html: 'Une <b>diphtongue</b> est une voyelle qui <b>glisse</b> d’un son vers un autre, dans la même syllabe. En français, « é » reste « é » du début à la fin. En anglais, le son de <i>day</i> commence par « é » et finit vers « i » : « déï ». Si tu dis <i>day</i> comme « dé », on te comprendra quand même, mais à l’écoute, tu dois reconnaître ces glissements.' },
    { type: 'table', head: ['Son', 'Comparaison française', 'Exemples'], rows: [
      ['/eɪ/', '« éï » : un « é » qui glisse vers « i »', '<i>day, name, late, great, eight</i>'],
      ['/oʊ/', '« o » qui glisse vers « ou » (en britannique /əʊ/, plus proche de « eu-ou »)', '<i>go, no, phone, home, road</i>'],
      ['/aɪ/', '« aï », comme dans « aïe ! »', '<i>my, time, five, buy, right</i>'],
      ['/aʊ/', '« aou », comme dans « caoutchouc »', '<i>now, how, out, down, house</i>'],
      ['/ɔɪ/', '« oï », comme dans « cow-boy »', '<i>boy, join, point, choice, enjoy</i>'],
      ['/ɪə/', '« i-e » en britannique ; « ir » en américain, avec le r', '<i>here, near, year, clear</i>'],
      ['/eə/', '« è-e » en britannique ; « èr » en américain, avec le r', '<i>there, where, chair, hair</i>']
    ] },
    { type: 'pairs', items: [
      { a: 'let', b: 'late', note: 'laisser / en retard' },
      { a: 'pen', b: 'pain', note: 'un stylo / une douleur' },
      { a: 'sell', b: 'sale', note: 'vendre / une vente, des soldes' },
      { a: 'wet', b: 'wait', note: 'mouillé / attendre' },
      { a: 'now', b: 'no', note: 'maintenant / non' },
      { a: 'buy', b: 'boy', note: 'acheter / un garçon' }
    ] },
    { type: 'examples', items: [
      { en: 'The train is late today.', fr: 'Le train est en retard aujourd’hui.', note: '<i>train, late, today</i> : trois fois /eɪ/ (« éï »).' },
      { en: "Don't go home alone.", fr: 'Ne rentre pas seule.', note: '<i>don’t, go, home, alone</i> : quatre fois /oʊ/.' },
      { en: 'I arrive at nine tonight.', fr: 'J’arrive à neuf heures ce soir.', note: '<i>I, arrive, nine, tonight</i> : /aɪ/ (« aï »).' },
      { en: "Let's go downtown now.", fr: 'Allons en centre-ville maintenant.', note: '<i>downtown, now</i> : /aʊ/ (« aou ») ; <i>go</i> : /oʊ/.' },
      { en: 'Our new employee really enjoys the job.', fr: 'Notre nouvel employé aime vraiment ce travail.', note: '<i>employee, enjoys</i> : /ɔɪ/ (« oï »).' }
    ] },

    { type: 'h', text: 'Pas de voyelles nasales en anglais' },
    { type: 'p', html: 'En français, « an », « on », « in », « un » sont des <b>voyelles nasales</b> : l’air passe par le nez et on n’entend pas de vrai « n ». <b>L’anglais n’en a pas.</b> On prononce une voyelle normale, <b>puis</b> un vrai <b>n</b> (ou un vrai <b>m</b>), bien articulé.' },
    { type: 'examples', items: [
      { en: 'Ten people attended the training.', fr: 'Dix personnes ont suivi la formation.', note: '<i>ten</i> = « tènn », pas « tin ».' },
      { en: "I'm on the phone.", fr: 'Je suis au téléphone.', note: '<i>on</i> : une voyelle, puis un vrai <b>n</b>, pas le « on » français.' },
      { en: 'We need more information.', fr: 'Nous avons besoin de plus d’informations.', note: '<i>information</i> = « in-fər-MÉÏ-chən » : le <b>in</b> se dit « inn », pas « ain ».' },
      { en: 'The bank is on the corner.', fr: 'La banque est au coin de la rue.', note: '<i>bank</i> : le son /æ/ de <i>cat</i>, puis un vrai « nk », pas le « an » nasal de « banque ».' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : les mots qui ressemblent au français', html: 'Les mots comme <i>information, important, restaurant, percent, content</i> sont dangereux : ton cerveau a envie de les dire « à la française », avec des voyelles nasales. En anglais, on entend toujours le <b>n</b> : <i>important</i> = « im-POR-tənt ». Au TOEIC, si tu attends « importan », tu risques de ne pas reconnaître le mot !' },
    { type: 'dialog', title: 'Dans la salle d’attente (repère seat / sit et live / leave)', lines: [
      { speaker: 'M', en: 'Excuse me, is this seat free?', fr: 'Excusez-moi, ce siège est libre ?' },
      { speaker: 'W', en: 'Yes, it is. Please sit down.', fr: 'Oui. Asseyez-vous, je vous en prie.' },
      { speaker: 'M', en: 'Thanks. Do you live here in Denver?', fr: 'Merci. Vous habitez ici, à Denver ?' },
      { speaker: 'W', en: "No, I'm just here for work. I leave on Monday.", fr: 'Non, je suis juste là pour le travail. Je repars lundi.' },
      { speaker: 'M', en: 'Me too. My flight is at nine.', fr: 'Moi aussi. Mon vol est à neuf heures.' },
      { speaker: 'W', en: "Mine's at noon. Have a good trip!", fr: 'Le mien est à midi. Bon voyage !' }
    ] },
    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'Les concepteurs du TOEIC adorent les <b>sons proches</b>. En <b>Partie 2</b>, une mauvaise réponse contient souvent un mot qui <b>ressemble</b> à un mot de la question. Exemple : <i>Where did you <b>leave</b> the report?</i> (Où as-tu laissé le rapport ?) → piège : <i>I <b>live</b> near here.</i> ; bonne réponse : <i>On your desk.</i> En <b>Partie 1</b>, fais attention à <i>man / men</i>, <i>woman / women</i>, <i>cup / cap</i>, <i>walk / work</i>.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• Voyelles <b>courtes</b> (relâchées) ≠ <b>longues</b> (tendues) : <i>ship / sheep, live / leave, full / fool, pull / pool</i>.<br>• <i>cat</i> /æ/ (très ouvert) ≠ <i>cut</i> /ʌ/ (bref, sourd) ≠ <i>cart</i> /ɑː/ (long) ; <i>bed</i> /e/ ≠ <i>bad</i> /æ/ ; <i>men</i> ≠ <i>man</i>.<br>• <i>not</i> (o court) ≠ <i>note</i> (o qui glisse, /oʊ/) ; <i>want</i> ≠ <i>won’t</i>.<br>• Le <b>schwa</b> /ə/ = petit « e » neutre des syllabes faibles : <i>about, banana, computer</i>.<br>• Les diphtongues glissent : <i>day, go, my, now, boy, here, there</i>.<br>• <b>Aucune voyelle nasale</b> : on prononce toujours le <b>n</b> (<i>ten, information</i>).' }
  ],
  exercises: [
    { type: 'mcq', q: 'Lequel de ces mots contient un son <b>long</b> /iː/ ?', options: ['ship', 'sit', 'sheep', 'fill'], answer: 2, explain: '<i>sheep</i> (mouton) a un /iː/ long et tendu : « chiiip ». <i>ship, sit, fill</i> ont un /ɪ/ court et relâché.' },
    { type: 'listen', say: 'sheep', q: 'Quel mot entends-tu ?', options: ['ship', 'sheep'], answer: 1, explain: 'Tu as entendu <i>sheep</i> (mouton) : le son est long et tendu (/iː/). <i>ship</i> (bateau) est bref et relâché.' },
    { type: 'listen', say: 'full', q: 'Quel mot entends-tu ?', options: ['full', 'fool'], answer: 0, explain: '<i>full</i> (plein) : un « ou » court /ʊ/, lèvres peu arrondies. <i>fool</i> (idiot) a un « ou » long /uː/.' },
    { type: 'listen', say: 'pool', q: 'Quel mot entends-tu ?', options: ['pool', 'pull'], answer: 0, explain: '<i>pool</i> (piscine) : « ou » long /uː/, comme dans « fou » mais tenu plus longtemps. <i>pull</i> (tirer) est bref.' },
    { type: 'listen', say: 'to leave', accent: 'en-GB', q: 'Quel verbe entends-tu ?', options: ['to live', 'to leave'], answer: 1, explain: 'Le son est long (/iː/) : <i>to leave</i> (partir, quitter). <i>to live</i> (habiter, vivre) a un /ɪ/ court.' },
    { type: 'listen', say: 'cut', q: 'Quel mot entends-tu ?', options: ['cart', 'cat', 'cut'], answer: 2, explain: '<i>cut</i> (couper) : /ʌ/, un « a » bref et sourd. <i>cat</i> a un /æ/ très ouvert ; <i>cart</i> a un « â » long (et un r en américain).' },
    { type: 'listen', say: 'bad', q: 'Quel mot entends-tu ?', options: ['bad', 'bed'], answer: 0, explain: '<i>bad</i> (mauvais) : /æ/, bouche grande ouverte. <i>bed</i> (lit) a un /e/, comme un « è » court.' },
    { type: 'listen', say: 'note', q: 'Quel mot entends-tu ?', options: ['not', 'note'], answer: 1, explain: '<i>note</i> : le « o » glisse vers « ou » (/oʊ/). Dans <i>not</i>, le « o » est court et ne glisse pas.' },
    { type: 'mcq', q: 'Quel mot contient le même son que <i>day</i> (/eɪ/, « éï ») ?', options: ['let', 'late', 'lot', 'lit'], answer: 1, explain: '<i>late</i> se prononce « léït » : même diphtongue /eɪ/ que <i>day</i>. <i>let</i> a un « è » court, <i>lot</i> un « o » court, <i>lit</i> un « i » court.' },
    { type: 'mcq', q: 'Dans lequel de ces mots entends-tu le son /ʌ/ de <i>cut</i> ?', options: ['money', 'many', 'home', 'moon'], answer: 0, explain: '<i>money</i> se prononce « MEU-ni » : le <b>o</b> se dit /ʌ/. <i>many</i> = « MÈ-ni », <i>home</i> a un /oʊ/ et <i>moon</i> un /uː/.' },
    { type: 'mcq', q: 'Dans <i>about</i>, comment se prononce le <b>a</b> du début ?', options: ['Comme le « a » de « papa »', 'Comme un petit « e » neutre et très bref (/ə/)', 'Comme « éï », le a de <i>name</i>'], answer: 1, explain: 'La première syllabe de <i>about</i> n’est pas accentuée : son <b>a</b> se réduit au schwa /ə/, un petit « e » neutre (« ə-BAOUT »).' },
    { type: 'mcq', q: 'Comment prononce-t-on <i>ten</i> (dix) ?', options: ['Comme « teint », avec une voyelle nasale et sans n', '« tènn » : un « è » bref, puis un vrai n', '« tiine », avec un i long'], answer: 1, explain: 'L’anglais n’a pas de voyelles nasales : on dit un « è » court (/e/), puis on prononce vraiment le <b>n</b>.' },
    { type: 'listen', say: 'Ask the men at the front desk.', q: 'Qu’as-tu entendu ?', options: ['Ask the men at the front desk.', 'Ask the man at the front desk.'], answer: 0, explain: '<i>men</i> (des hommes) se prononce avec /e/, comme un « è » court. <i>man</i> aurait un /æ/ très ouvert. Au TOEIC, ce détail change tout : un seul homme ou plusieurs ?' },
    { type: 'listen', say: 'Is this your cup?', accent: 'en-GB', q: 'Qu’as-tu entendu ?', options: ['Is this your cap?', 'Is this your cup?'], answer: 1, explain: '<i>cup</i> (tasse) : /ʌ/, un « a » bref et sourd. <i>cap</i> (casquette) aurait un /æ/ très ouvert, proche de « è ».' },
    { type: 'dictation', say: "I won't go home late.", answers: ["I won't go home late", 'I will not go home late'], explain: '<i>won’t</i> (= <i>will not</i>) se prononce avec le « o » qui glisse (/oʊ/), comme <i>go</i> et <i>home</i>. Ne le confonds pas avec <i>want</i> (vouloir). Traduction : « Je ne rentrerai pas tard. »' },
    { type: 'listen', say: 'Where did you leave the report?', accent: 'en-CA', q: 'Tu entends une question (style TOEIC Partie 2). Quelle est la meilleure réponse ?', options: ['I live near the office.', 'Yes, I read it.', 'On your desk.'], answer: 2, explain: 'La question porte sur un <b>lieu</b> (<i>where</i>) avec le verbe <i>leave</i> (laisser) → <i>On your desk.</i> <i>I live…</i> est un piège sonore (<i>live</i> ≠ <i>leave</i>) et <i>Yes…</i> ne répond jamais à une question en <i>where</i>.' }
  ]
});
