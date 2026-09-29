LE.register({
  id: 'g08',
  kind: 'grammar',
  title: 'Le présent simple : la forme affirmative',
  subtitle: 'Parler de ses habitudes, de son travail et des vérités générales',
  level: 'A1',
  minutes: 35,
  goals: [
    'Savoir quand utiliser le présent simple : habitudes, faits permanents, vérités générales, horaires',
    'Conjuguer n’importe quel verbe au présent simple : <i>I work, she works</i>',
    'Ne plus oublier le <b>-s</b> de la 3ᵉ personne (<i>he, she, it, my boss, the company…</i>)',
    'Écrire et prononcer correctement <i>watches, goes, studies, plays, has, does</i>'
  ],
  blocks: [
    { type: 'h', text: 'À quoi sert le présent simple ?' },
    { type: 'p', html: 'Le <b>présent simple</b> sert à parler de ce qui est <b>vrai en général</b> ou de ce qu’on fait <b>régulièrement</b> : ton métier, tes habitudes, les horaires d’un train… C’est le temps de base de l’anglais, et l’un des plus fréquents au TOEIC.' },
    { type: 'list', items: [
      '<b>Les habitudes et la routine</b> : <i>I get up at seven.</i> (Je me lève à sept heures.)',
      '<b>Les faits permanents</b> (métier, lieu de vie…) : <i>She works in finance.</i> (Elle travaille dans la finance.)',
      '<b>Les vérités générales</b> : <i>The sun rises in the east.</i> (Le soleil se lève à l’est.)',
      '<b>Les horaires et les programmes</b> : <i>The train leaves at 8.</i> (Le train part à 8 h.)'
    ] },
    { type: 'p', html: 'Bonne nouvelle : il s’utilise presque comme le présent français (<i>je travaille, elle travaille</i>). Une seule différence : quand « je travaille » veut dire « je suis <b>en train de</b> travailler, en ce moment », l’anglais utilise un autre temps. Tu le verras dans la leçon « Le présent continu (be + -ing) ».' },
    { type: 'examples', items: [
      { en: 'I drink coffee every morning.', fr: 'Je bois du café tous les matins.', note: 'Une habitude.' },
      { en: 'She works in finance.', fr: 'Elle travaille dans la finance.', note: 'Un fait permanent : c’est son métier.' },
      { en: 'Water boils at 100 degrees Celsius.', fr: 'L’eau bout à 100 degrés Celsius.', note: 'Une vérité générale.' },
      { en: 'The train leaves at 8 a.m.', fr: 'Le train part à 8 h.', note: 'Un horaire officiel. <i>a.m.</i> = le matin ; <i>p.m.</i> = l’après-midi et le soir.' }
    ] },

    { type: 'h', text: 'La formation : une seule terminaison à retenir' },
    { type: 'p', html: 'On prend la <b>base verbale</b>, c’est-à-dire le verbe sans <i>to</i> (<i>work, live, speak</i>). Elle est identique pour toutes les personnes… <b>sauf</b> pour <b>he, she, it</b>, où l’on ajoute un <b>-s</b>.' },
    { type: 'table', head: ['Sujet', 'Verbe', 'Français'], rows: [
      ['I', 'work', 'je travaille'],
      ['you', 'work', 'tu travailles / vous travaillez'],
      ['he', 'work<b>s</b>', 'il travaille'],
      ['she', 'work<b>s</b>', 'elle travaille'],
      ['it', 'work<b>s</b>', 'il / elle fonctionne (une chose)'],
      ['we', 'work', 'nous travaillons'],
      ['they', 'work', 'ils / elles travaillent']
    ], caption: 'Retiens : <b>he, she, it → verbe + s</b>. Toutes les autres personnes → base verbale.' },
    { type: 'box', style: 'tip', title: 'Astuce mémo', html: 'Répète-toi : « <b>he, she, it : S obligatoire !</b> ». En français, « je travaille » et « il travaille » se prononcent pareil ; en anglais, <i>I work</i> et <i>he works</i> sont différents, à l’écrit <b>et</b> à l’oral.' },

    { type: 'h', text: 'Le -s de la 3ᵉ personne : le piège n°1' },
    { type: 'p', html: 'Le <b>-s</b> ne concerne pas seulement les mots <i>he, she, it</i>. Il s’applique à <b>tout sujet singulier</b> qu’on pourrait remplacer par <i>he</i>, <i>she</i> ou <i>it</i> : un prénom, une personne, une entreprise, un objet… En revanche, un sujet <b>pluriel</b> (= <i>they</i>) ne prend jamais de -s.' },
    { type: 'table', head: ['Sujet', 'Remplaçable par…', 'Exemple'], rows: [
      ['Anna', 'she', 'Anna work<b>s</b> in Berlin.'],
      ['my boss', 'he / she', 'My boss live<b>s</b> in Lyon.'],
      ['the company', 'it', 'The company sell<b>s</b> software.'],
      ['the printer', 'it', 'The printer make<b>s</b> a strange noise.'],
      ['everybody (tout le monde)', 'verbe au singulier, comme en français', 'Everybody like<b>s</b> the new office.'],
      ['my colleagues', 'they', 'My colleagues <b>work</b> late. (pas de -s)'],
      ['Tom and I', 'we', 'Tom and I <b>share</b> an office. (pas de -s)']
    ] },
    { type: 'box', style: 'warn', title: 'Piège n°1 des francophones', html: 'Comme on n’entend pas de -s en français (« il travaille »), on l’oublie en anglais. C’est l’une des erreurs les plus testées au TOEIC !<br><span class="ko">She work in a bank.</span> → <span class="ok">She works in a bank.</span><br><span class="ko">The managers works late.</span> → <span class="ok">The managers work late.</span><br>Ne confonds pas avec le pluriel des noms : un <b>nom</b> avec -s est au pluriel (<i>two managers</i>), mais un <b>verbe</b> avec -s va avec un sujet au <b>singulier</b> (<i>the manager works</i>).' },
    { type: 'examples', items: [
      { en: 'My boss starts work at eight.', fr: 'Mon chef commence le travail à huit heures.' },
      { en: 'The company sells office furniture.', fr: 'L’entreprise vend du mobilier de bureau.', note: '<i>The company</i> = <b>it</b> → <i>sells</i>.' },
      { en: 'Mr. Tanaka speaks three languages.', fr: 'M. Tanaka parle trois langues.' },
      { en: 'Our employees work from Monday to Friday.', fr: 'Nos employés travaillent du lundi au vendredi.', note: 'Sujet pluriel (= <b>they</b>) → pas de -s.' },
      { en: 'Everybody knows the new manager.', fr: 'Tout le monde connaît la nouvelle responsable.' }
    ] },

    { type: 'h', text: 'L’orthographe : -s, -es ou -ies ?' },
    { type: 'p', html: 'Le plus souvent, on ajoute simplement <b>-s</b>. Mais certains verbes changent un peu à l’écrit. Il y a trois règles, faciles à retenir.' },
    { type: 'table', head: ['Règle', 'Exemples'], rows: [
      ['Cas général : on ajoute <b>-s</b>', 'work → work<b>s</b>, live → live<b>s</b>, call → call<b>s</b>, make → make<b>s</b>'],
      ['Verbe terminé par <b>-s (-ss), -sh, -ch, -x</b> ou <b>-o</b> : on ajoute <b>-es</b>', 'pass → pass<b>es</b>, finish → finish<b>es</b>, watch → watch<b>es</b>, fix → fix<b>es</b>, go → go<b>es</b>, do → do<b>es</b>'],
      ['<b>Consonne + y</b> : le y devient <b>-ies</b>', 'study → stud<b>ies</b>, carry → carr<b>ies</b>, try → tr<b>ies</b>, copy → cop<b>ies</b>'],
      ['<b>Voyelle + y</b> : on ajoute juste <b>-s</b>', 'play → play<b>s</b>, pay → pay<b>s</b>, buy → buy<b>s</b>, enjoy → enjoy<b>s</b>']
    ] },
    { type: 'box', style: 'tip', title: 'Astuce pour les verbes en -y', html: 'Regarde la lettre <b>juste avant</b> le y. Si c’est une <b>voyelle</b> (a, e, o, u), le y ne bouge pas : <i>she pays, he enjoys</i>. Si c’est une <b>consonne</b>, le y devient <b>-ies</b> : <i>she studies, it copies</i>.' },

    { type: 'h', text: 'Les formes particulières : has, does, goes' },
    { type: 'table', head: ['Base verbale', 'he / she / it', 'Exemple'], rows: [
      ['have (avoir)', '<b>has</b>', 'She <b>has</b> a meeting at ten.'],
      ['do (faire)', '<b>does</b>', 'He <b>does</b> the paperwork.'],
      ['go (aller)', '<b>goes</b>', 'My boss <b>goes</b> to Paris every month.'],
      ['be (être) — rappel', '<b>is</b>', 'It <b>is</b> late.']
    ], caption: '<i>have</i> → <b>has</b> (jamais « haves ») : c’est la forme vraiment irrégulière. <i>does</i> et <i>goes</i> suivent la règle du -o. Pour <i>be</i>, revois la leçon « Le verbe « be » au présent ».' },
    { type: 'examples', items: [
      { en: 'She has two children.', fr: 'Elle a deux enfants.' },
      { en: 'The hotel has a big meeting room.', fr: 'L’hôtel a une grande salle de réunion.' },
      { en: 'He goes to the gym after work.', fr: 'Il va à la salle de sport après le travail.' },
      { en: 'Maria does the shopping on Saturdays.', fr: 'Maria fait les courses le samedi.' },
      { en: 'Kofi studies English in the evening.', fr: 'Kofi étudie l’anglais le soir.', note: 'study → stud<b>ies</b> (consonne + y).' }
    ] },

    { type: 'h', text: 'Comment prononcer le -s ?' },
    { type: 'p', html: 'Le -s se prononce de trois façons, selon le dernier <b>son</b> du verbe. Pas de panique : on te comprendra toujours, mais c’est très utile pour bien <b>entendre</b> au TOEIC. Tu approfondiras dans la leçon « Les terminaisons -s et -ed à l’oral ».' },
    { type: 'table', head: ['Son', 'Quand ?', 'Exemples'], rows: [
      ['« s » (comme dans <i>sac</i>)', 'après les sons p, t, k, f', 'stop<b>s</b>, start<b>s</b>, work<b>s</b>, laugh<b>s</b>'],
      ['« z » (comme dans <i>zéro</i>)', 'après une voyelle et la plupart des autres sons', 'play<b>s</b>, go<b>es</b>, live<b>s</b>, call<b>s</b>'],
      ['« iz » (une syllabe en plus)', 'après les sons s, z, ch, sh, dj', 'miss<b>es</b>, us<b>es</b>, watch<b>es</b>, finish<b>es</b>, manag<b>es</b>']
    ] },
    { type: 'examples', items: [
      { en: 'He works. She starts. The bus stops.', fr: 'Il travaille. Elle commence. Le bus s’arrête.', note: 'Son « s ».' },
      { en: 'She plays. He lives. It rains.', fr: 'Elle joue. Il habite. Il pleut.', note: 'Son « z ».' },
      { en: 'He watches. She finishes. The store closes.', fr: 'Il regarde. Elle finit. Le magasin ferme.', note: 'Son « iz » : une syllabe de plus.' },
      { en: 'He does. She says.', fr: 'Il fait. Elle dit.', note: 'Attention : <i>does</i> se prononce « daz » et <i>says</i> se prononce « sèz ».' }
    ] },

    { type: 'h', text: 'Les marqueurs de temps' },
    { type: 'p', html: 'Certaines expressions montrent qu’on parle d’une <b>habitude</b> : quand tu les vois, pense au présent simple. Elles se placent en général en <b>fin de phrase</b>. Les petits mots comme <i>usually</i> ou <i>often</i> se placent, eux, <b>avant le verbe</b> : tu verras tout ça dans la leçon « Les adverbes de fréquence ».' },
    { type: 'table', head: ['Expression', 'Français'], rows: [
      ['every day / every morning / every week', 'tous les jours / tous les matins / toutes les semaines'],
      ['on Mondays / on weekends', 'le lundi (chaque lundi) / le week-end'],
      ['in the morning / in the evening', 'le matin / le soir'],
      ['once a week / twice a month', 'une fois par semaine / deux fois par mois'],
      ['usually / often / always', 'd’habitude / souvent / toujours']
    ] },
    { type: 'box', style: 'warn', title: 'Piège : « le lundi »', html: 'En français, « le lundi » veut dire « tous les lundis ». En anglais, pour une habitude, on dit <b>on</b> + le jour <b>au pluriel</b> : <i>I play tennis <b>on Mondays</b>.</i> Sans -s, <i>on Monday</i> désigne en général <b>un</b> lundi précis (lundi prochain, par exemple). Et surtout pas de <i>the</i> : <span class="ko">I play tennis the Monday.</span>' },
    { type: 'examples', items: [
      { en: 'I check my email every morning.', fr: 'Je consulte mes e-mails tous les matins.' },
      { en: 'The store opens at 9 a.m. on Saturdays.', fr: 'Le magasin ouvre à 9 h le samedi.' },
      { en: 'She visits her clients twice a month.', fr: 'Elle rend visite à ses clients deux fois par mois.' },
      { en: 'We usually have lunch at noon.', fr: 'Nous déjeunons généralement à midi.' }
    ] },
    { type: 'dialog', title: 'Parle-moi de ton travail', lines: [
      { speaker: 'M', en: 'Tell me about your job, Aisha.', fr: 'Parle-moi de ton travail, Aisha.' },
      { speaker: 'W', en: 'I work for a travel agency. I organize business trips.', fr: 'Je travaille pour une agence de voyages. J’organise des voyages d’affaires.' },
      { speaker: 'M', en: 'That sounds interesting! And your brother?', fr: 'Ça a l’air intéressant ! Et ton frère ?' },
      { speaker: 'W', en: 'He teaches math at a high school. He loves his job.', fr: 'Il enseigne les maths dans un lycée. Il adore son métier.' },
      { speaker: 'M', en: 'My sister works in a hospital. She starts at six every morning!', fr: 'Ma sœur travaille dans un hôpital. Elle commence à six heures tous les matins !' },
      { speaker: 'W', en: 'Wow! My office opens at nine, so I get up at seven thirty.', fr: 'Waouh ! Mon bureau ouvre à neuf heures, alors je me lève à sept heures et demie.' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 5</b>, on te demande souvent de choisir la bonne forme du verbe : <i>Our accountant ------- the invoices every morning.</i> → <b>checks</b> (pas <i>check</i> ni <i>checking</i>). Méfie-toi des sujets longs : dans <i>The director of the two factories <b>visits</b> them every week</i>, le vrai sujet est <i>the director</i> (singulier), pas <i>factories</i>. En <b>Parties 4 et 7</b>, le présent simple sert aussi aux horaires : <i>The shuttle leaves every twenty minutes.</i>' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• Présent simple = habitudes, faits permanents, vérités générales, horaires.<br>• <b>I / you / we / they</b> + base verbale : <i>I work</i>.<br>• <b>He / she / it</b> (et tout sujet singulier) + <b>-s</b> : <i>she works, the company sells</i>.<br>• Orthographe : <i>watches, goes, does</i> ; <i>studies</i> mais <i>plays</i> ; <b>have → has</b>.<br>• Marqueurs : <i>every day, on Mondays, once a week, usually…</i>' }
  ],
  exercises: [
    { type: 'mcq', q: 'She ___ in a bank.', options: ['work', 'works', 'working'], answer: 1, explain: '<b>She</b> = 3ᵉ personne du singulier → verbe + <b>-s</b> : <i>she works</i>.' },
    { type: 'mcq', q: 'I ___ coffee every morning.', options: ['drinks', 'drink', 'drinking'], answer: 1, explain: 'Avec <b>I</b>, pas de -s : on utilise la base verbale <i>drink</i>.' },
    { type: 'mcq', q: 'My colleagues ___ at nine every day.', options: ['starts', 'start', 'starting'], answer: 1, explain: '<i>My colleagues</i> est au pluriel (= <b>they</b>) → pas de -s : <i>start</i>.' },
    { type: 'gap', q: 'Ahmed ___ (live) in Toronto with his family.', answers: ['lives'], explain: '<i>Ahmed</i> = <b>he</b> → <i>live</i> + <b>-s</b> = <b>lives</b>.' },
    { type: 'gap', q: 'The company ___ (sell) office furniture.', answers: ['sells'], explain: '<i>The company</i> = <b>it</b> → <i>sell</i> + <b>-s</b> = <b>sells</b>. C’est un fait permanent : présent simple.' },
    { type: 'mcq', q: 'Quelle phrase est correctement écrite ?', options: ['He watchs the news every evening.', 'He watches the news every evening.', 'He watchies the news every evening.'], answer: 1, explain: 'Après <b>-ch</b>, on ajoute <b>-es</b> : <i>watch → watches</i>.' },
    { type: 'gap', q: 'Carlos ___ (study) English on Tuesdays.', answers: ['studies'], explain: '<i>study</i> se termine par consonne + <b>y</b> → le y devient <b>-ies</b> : <i>studies</i>.' },
    { type: 'mcq', q: 'Tom ___ tennis on Saturdays.', options: ['plaies', 'play', 'plays', 'playes'], answer: 2, explain: '<i>Tom</i> = he → -s. <i>play</i> : voyelle (a) + y → on ajoute juste <b>-s</b> : <i>plays</i>.' },
    { type: 'gap', q: 'My boss ___ (go) to Madrid every month.', answers: ['goes'], explain: 'Verbe terminé par <b>-o</b> → on ajoute <b>-es</b> : <i>go → goes</i>.' },
    { type: 'gap', q: 'Nadia ___ (have) lunch with her team every Friday.', answers: ['has'], explain: '<i>have</i> est irrégulier : avec he / she / it, il devient <b>has</b> (jamais « haves »).' },
    { type: 'order', answer: 'She works in the marketing department.', fr: 'Elle travaille au service marketing.', explain: 'Ordre de base : sujet (<i>She</i>) + verbe avec -s (<i>works</i>) + complément.' },
    { type: 'order', answer: 'The train leaves at eight every morning.', alts: ['The train leaves every morning at eight.', 'Every morning the train leaves at eight.'], fr: 'Le train part à huit heures tous les matins.', explain: 'Un horaire → présent simple. <i>The train</i> = it → <i>leaves</i>. L’expression de temps se place en fin de phrase (ou en début, pour insister).' },
    { type: 'listen', say: 'My sister works in a hotel. She starts at six in the morning and finishes at two in the afternoon.', q: 'Qu’as-tu entendu ?', options: ['Elle travaille dans un hôtel, de 6 h à 14 h.', 'Elle travaille dans un hôpital, de 6 h à 14 h.', 'Elle travaille dans un hôtel, de 7 h à 12 h.'], answer: 0, explain: '<i>She works in a <b>hotel</b></i> (un hôtel). <i>She starts at <b>six</b> in the morning and finishes at <b>two</b> in the afternoon</i> : de 6 h à 14 h.', accent: 'en-GB' },
    { type: 'dictation', say: 'He goes to the office by bus.', answers: ['He goes to the office by bus'], explain: '<i>go</i> → <b>goes</b> avec <i>he</i>. « Il va au bureau en bus. »' },
    { type: 'mcq', q: 'The sales manager ------- the monthly report every Friday. <small>(style TOEIC)</small>', options: ['review', 'reviews', 'reviewing', 'to review'], answer: 1, explain: 'Sujet singulier (<i>the sales manager</i> = he / she) + habitude (<i>every Friday</i>) → présent simple avec <b>-s</b> : <i>reviews</i>.' },
    { type: 'mcq', q: 'The employees at our Lyon office ------- English every Tuesday. <small>(style TOEIC)</small>', options: ['studies', 'study', 'studying', 'to study'], answer: 1, explain: 'Le vrai sujet est <i>the employees</i> (pluriel = they), pas <i>office</i> → pas de -s : <b>study</b>.' }
  ]
});
