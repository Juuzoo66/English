LE.register({
  id: 'p06',
  kind: 'pron',
  title: 'L’anglais parlé réel : formes faibles, liaisons, contractions',
  subtitle: 'Comprendre l’anglais tel qu’on le parle vraiment, vite et « collé », comme au TOEIC',
  level: 'B1',
  minutes: 45,
  goals: [
    'Reconnaître les <b>formes faibles</b> des petits mots : <i>to, for, of, and, can, was, them…</i>',
    'Distinguer à coup sûr <b>can</b> et <b>can’t</b> à l’oral',
    'Comprendre les contractions, les liaisons et les sons qui fusionnent (<i>didja, woudja</i>)',
    'Reconnaître les formes familières : <i>gonna, wanna, gotta, kinda, lemme</i>'
  ],
  blocks: [
    { type: 'h', text: 'Pourquoi tu ne reconnais pas des mots que tu connais' },
    { type: 'p', html: 'Tu lis <i>I’m going to ask him</i> sans problème, mais à l’oral tu entends « aïm-gonna-ask-im »… C’est normal : en anglais parlé, les mots importants (noms, verbes, adjectifs) sont <b>accentués</b> et clairs, tandis que les petits mots grammaticaux sont <b>réduits</b>, collés, parfois avalés (voir la leçon « L’accent de mot et l’accent de phrase »). Ce n’est pas de l’anglais « relâché » : tout le monde parle ainsi, y compris les voix du TOEIC.' },
    { type: 'p', html: 'Le français fait exactement pareil : on dit « chuis » pour « je suis », « y a » pour « il y a », « t’as vu ? » pour « tu as vu ? ». Un étranger qui n’a appris que « je suis » dans les livres ne reconnaît pas « chuis ». Cette leçon t’apprend les « chuis » de l’anglais.' },

    { type: 'h', text: 'Les formes faibles et le son « schwa » /ə/' },
    { type: 'p', html: 'Le son le plus fréquent de l’anglais s’appelle le <b>schwa</b>, noté /ə/ : un « e » très bref et neutre, comme le « e » de « le » ou de « petit » dit très vite. Dans une phrase, les mots grammaticaux non accentués perdent leur voyelle pleine et prennent ce son /ə/ : c’est leur <b>forme faible</b>. Seuls, ou quand on insiste dessus, ils gardent leur <b>forme forte</b>.' },
    { type: 'table', head: ['Mot', 'Forme forte (seul)', 'Forme faible (dans la phrase)', 'Exemple'], rows: [
      ['to', '/tuː/ « tou »', '/tə/ « teu »', 'I need <b>to</b> go. → « I NEED-tə GO »'],
      ['for', '/fɔːr/ « for »', '/fər/ « fr »', 'It’s <b>for</b> you. → « its-fər-YOU »'],
      ['of', '/ʌv/ « euv »', '/əv/, ou /ə/ devant une consonne', 'a cup <b>of</b> tea → « ə CUP-ə TEA »'],
      ['and', '/ænd/ « ènd »', '/ən/, ou juste /n/', 'salt <b>and</b> pepper → « SALT-n-PEPPER »'],
      ['can', '/kæn/ « kèn »', '/kən/ « keun »', 'I <b>can</b> help. → « I kən HELP »'],
      ['was', '/wʌz/ « weuz »', '/wəz/ « wz »', 'He <b>was</b> late. → « he wəz LATE »'],
      ['at', '/æt/ « èt »', '/ət/ « eut »', 'See you <b>at</b> six. → « see-yə-ət SIX »'],
      ['from', '/frʌm/ « freum »', '/frəm/ « frm »', 'I’m <b>from</b> Lyon. → « aïm-frəm LYON »'],
      ['them', '/ðem/ « dhèm »', '/ðəm/, ou juste /əm/', 'Call <b>them</b>. → « CALL-əm »'],
      ['him / her', '/hɪm/ / /hɜːr/', '/ɪm/ / /ər/ (le h disparaît)', 'Ask <b>him</b>. → « ASK-im »']
    ], caption: 'Les mots en MAJUSCULES sont les mots accentués. Les formes faibles sont indiquées en prononciation américaine.' },
    { type: 'examples', items: [
      { en: "I'd like a cup of coffee.", fr: 'Je voudrais une tasse de café.', note: '« aïd-LIKE-ə-CUP-ə-COFFEE » : <i>a</i> et <i>of</i> deviennent /ə/.' },
      { en: 'We have to wait for them.', fr: 'Nous devons les attendre.', note: '<i>to</i> → /tə/, <i>for</i> → /fər/, <i>them</i> → /ðəm/ : « we HAF-tə WAIT-fər-ðəm ».' },
      { en: 'She was at the office from nine to five.', fr: 'Elle était au bureau de 9 h à 17 h.', note: '<i>was</i> → /wəz/, <i>at</i> → /ət/, <i>from</i> → /frəm/, <i>to</i> → /tə/.' },
      { en: 'Ask him if he can call her.', fr: 'Demande-lui s’il peut l’appeler.', note: '« ASK-im if he kən CALL-er » : le h de <i>him</i> et de <i>her</i> disparaît.' },
      { en: 'Sales and marketing are in Building B.', fr: 'Les services ventes et marketing sont dans le bâtiment B.', note: '<i>and</i> → /ən/ : « SALES-ən MARKETING ».' }
    ] },

    { type: 'h', text: 'Le piège majeur : can ou can’t ?' },
    { type: 'box', style: 'warn', title: 'Ne compte pas sur le t de can’t !', html: 'À l’oral, le <b>t</b> final de <i>can’t</i> est souvent à peine audible. La vraie différence est ailleurs :<br>• <b>can</b> (affirmatif) est <b>court et faible</b> : /kən/ « keun ». C’est le verbe qui suit qui est accentué : <i>I kən <b>COME</b>.</i><br>• <b>can’t</b> garde une voyelle <b>pleine et accentuée</b> : /kænt/ « kaènt » en américain, /kɑːnt/ « kaannt » en britannique : <i>I <b>CAN’T</b> come.</i><br>Donc : voyelle faible = <b>can</b> ; voyelle pleine et forte = <b>can’t</b>. Au TOEIC, une erreur ici inverse complètement le sens de la phrase !' },
    { type: 'pairs', items: [
      { a: 'I can come.', b: "I can't come.", note: '<i>can</i> faible « keun » / <i>can’t</i> fort « kaènt »' },
      { a: 'She can drive.', b: "She can't drive.", note: 'Écoute la voyelle, pas le t.' },
      { a: 'We can meet on Friday.', b: "We can't meet on Friday.", note: 'Avec <i>can</i>, c’est <i>meet</i> qui est accentué.' },
      { a: 'want', b: "won't", note: '« ouannt » (vouloir) / « wo-ount » (= will not)' }
    ] },
    { type: 'examples', items: [
      { en: 'I can send it today.', fr: 'Je peux l’envoyer aujourd’hui.', note: '<i>can</i> faible : « I kən SEND it today ».' },
      { en: "I can't send it today.", fr: 'Je ne peux pas l’envoyer aujourd’hui.', note: '<i>can’t</i> fort : « I KAÈNT send it today ».' },
      { en: "Sorry, I can't make it to the meeting.", fr: 'Désolée, je ne peux pas venir à la réunion.', accent: 'en-GB', note: 'Accent britannique : /kɑːnt/, « kaannt », avec un a long comme dans <i>car</i>.' },
      { en: 'Can you help me? Yes, I can.', fr: 'Tu peux m’aider ? Oui, je peux.', note: 'Attention : en fin de phrase et dans une réponse courte, <i>can</i> est accentué et garde sa forme forte /kæn/. Écoute donc aussi la place du mot dans la phrase.' }
    ] },

    { type: 'h', text: 'Les contractions' },
    { type: 'p', html: 'Les contractions sont partout à l’oral (et dans les e-mails informels). Au TOEIC, il faut les reconnaître instantanément, surtout <b>’d</b> et <b>’ll</b>, qui se réduisent à un tout petit son.' },
    { type: 'table', head: ['Contraction', 'Forme pleine', 'Prononciation', 'Attention'], rows: [
      ['I’d', 'I would / I had', '« aïd »', '<i>I’d like</i> = I would like ; <i>I’d finished</i> = I had finished'],
      ['we’ll', 'we will', '« wiil »', '<i>We’ll call you</i> (futur) ≠ <i>We call you</i> (habitude)'],
      ['they’ve', 'they have', '« dhéïv »', '<i>They’ve left</i> = ils sont partis (present perfect)'],
      ['would’ve', 'would have', '« wou-dəv »', 'on croit entendre « would of », mais on écrit <b>would have</b>'],
      ['won’t', 'will not', '« wo-ount » /woʊnt/', 'à ne pas confondre avec <b>want</b> /wɑːnt/ « ouannt » (vouloir)'],
      ['he’s', 'he is / he has', '« hiiz »', '<i>He’s busy</i> = he is ; <i>He’s gone</i> = he has']
    ] },
    { type: 'box', style: 'tip', title: 'I’d, she’d, we’d : would ou had ?', html: 'Regarde le verbe qui suit :<br>• <b>base verbale</b> → <i>would</i> : <i>I’d <b>like</b></i>, <i>she’d <b>prefer</b></i>.<br>• <b>participe passé</b> → <i>had</i> : <i>I’d already <b>left</b></i>, <i>we’d <b>forgotten</b></i>.<br>• Et <i>you’d better</i> = <i>you had better</i> (tu ferais mieux de).' },
    { type: 'examples', items: [
      { en: "I'd like to book a table for four.", fr: 'Je voudrais réserver une table pour quatre.', note: '<i>I’d</i> = I would (suivi de la base verbale <i>like</i>).' },
      { en: "We'll send you the invoice tomorrow.", fr: 'Nous vous enverrons la facture demain.', note: '<i>We’ll</i> = we will : tout le futur tient dans un petit « l ».' },
      { en: "They've already signed the contract.", fr: 'Ils ont déjà signé le contrat.', note: '<i>They’ve</i> = they have : le /v/ est très léger.' },
      { en: "I would've called, but my phone was dead.", fr: 'J’aurais appelé, mais mon téléphone était déchargé.', note: '<i>would’ve</i> = would have, prononcé « wou-dəv ».' },
      { en: "He won't be in the office on Monday.", fr: 'Il ne sera pas au bureau lundi.', note: '<i>won’t</i> = will not.' }
    ] },

    { type: 'h', text: 'Les liaisons : consonne + voyelle' },
    { type: 'p', html: 'Comme en français (« les‿amis »), quand un mot finit par une consonne et que le suivant commence par une voyelle, les deux se collent. Résultat : on croit entendre un seul mot inconnu. Les <b>phrasal verbs</b> (verbe + petit mot : <i>turn off, pick up</i>) sont particulièrement touchés.' },
    { type: 'examples', items: [
      { en: 'Turn it off, please.', fr: 'Éteins-le, s’il te plaît.', note: '« tur-ni-toff »' },
      { en: 'Can you pick it up at noon?', fr: 'Tu peux le récupérer à midi ?', note: '« pi-ki-tup » : trois mots, un seul bloc sonore.' },
      { en: 'Would you like an apple?', fr: 'Tu veux une pomme ?', note: '« ə-na-pple » : le n de <i>an</i> passe au mot suivant.' },
      { en: 'Please fill out the form.', fr: 'Merci de remplir le formulaire.', note: '« fi-lout the form »' },
      { en: 'You can check in at eight.', fr: 'Vous pouvez vous enregistrer à huit heures.', note: '« che-ki-nət eight »' }
    ] },

    { type: 'h', text: 'Les sons qui fusionnent ou disparaissent' },
    { type: 'p', html: 'Quand un mot finit par <b>t</b> ou <b>d</b> et que le suivant est <b>you</b> ou <b>your</b>, les deux sons fusionnent : t + y → « tch », d + y → « dj ». C’est l’<b>assimilation</b>. Et quand trois consonnes se suivent, celle du milieu (souvent un t ou un d) disparaît : c’est l’<b>élision</b>.' },
    { type: 'table', head: ['On écrit', 'On entend', 'Phénomène'], rows: [
      ['did you', '« didja » /dɪdʒə/', 'd + y → dj'],
      ['would you / could you', '« woudja » / « coudja »', 'd + y → dj'],
      ['don’t you', '« dontcha » /doʊntʃə/', 't + y → tch'],
      ['got you', '« gotcha » (= compris ! / je t’ai eu !)', 't + y → tch'],
      ['meet you', '« mii-tchou »', 't + y → tch'],
      ['next day', '« nex day »', 'le t disparaît'],
      ['last week', '« las week »', 'le t disparaît']
    ] },
    { type: 'examples', items: [
      { en: 'Did you get my email?', fr: 'Tu as reçu mon e-mail ?', note: '« didja get my email ? »' },
      { en: 'Would you like some help?', fr: 'Tu veux un coup de main ?', note: '« woudja like səm help ? »' },
      { en: "Don't you have a meeting at three?", fr: 'Tu n’as pas une réunion à 15 h ?', note: '« dontcha have ə meeting ət three ? »' },
      { en: 'The package arrived the next day.', fr: 'Le colis est arrivé le lendemain.', note: '« nex day » : le t de <i>next</i> tombe.' },
      { en: 'She left last week.', fr: 'Elle est partie la semaine dernière.', note: '« lef las week » : deux t disparaissent !' }
    ] },

    { type: 'h', text: 'Les formes familières à reconnaître' },
    { type: 'p', html: 'Dans les conversations détendues, tu entendras des formes qui ressemblent à des mots nouveaux. Tu n’as pas besoin de les utiliser, mais tu dois les <b>reconnaître</b>.' },
    { type: 'table', head: ['Forme familière', 'Forme complète', 'Exemple'], rows: [
      ['gonna', 'going to', 'I’m <b>gonna</b> be late. = I’m going to be late.'],
      ['wanna', 'want to', 'Do you <b>wanna</b> join us? = Do you want to join us?'],
      ['gotta', 'have got to (= have to)', 'I’ve <b>gotta</b> go. = I’ve got to go.'],
      ['kinda', 'kind of (= plutôt, un peu)', 'It’s <b>kinda</b> expensive. = It’s kind of expensive.'],
      ['lemme', 'let me', '<b>Lemme</b> check. = Let me check.']
    ], caption: '<i>gonna</i> remplace <i>going to</i> seulement devant un verbe (le futur). <i>I’m going to Paris</i> (un lieu) ne devient jamais « I’m gonna Paris ».' },
    { type: 'examples', items: [
      { en: "I'm gonna call the supplier after lunch.", fr: 'Je vais appeler le fournisseur après le déjeuner.' },
      { en: 'Do you wanna grab a coffee?', fr: 'Tu veux aller prendre un café ?' },
      { en: "Sorry, I've gotta go. My train leaves at six.", fr: 'Désolée, je dois y aller. Mon train part à 18 h.' },
      { en: 'Lemme check my calendar.', fr: 'Laisse-moi vérifier mon agenda.' },
      { en: 'The new software is kinda slow.', fr: 'Le nouveau logiciel est un peu lent.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : ces formes restent à l’oral', html: 'N’écris jamais <i>gonna</i>, <i>wanna</i> ou <i>would of</i> dans un e-mail professionnel : écris <i>going to</i>, <i>want to</i>, <i>would have</i>. Tu ne les trouveras pas non plus dans les textes du TOEIC Reading.' },
    { type: 'dialog', title: 'À la machine à café', lines: [
      { speaker: 'M', en: 'Hey Ngozi, did you finish the budget report?', fr: 'Salut Ngozi, tu as fini le rapport budgétaire ?' },
      { speaker: 'W', en: "Almost. I'm gonna send it to the finance team after lunch.", fr: 'Presque. Je vais l’envoyer à l’équipe finance après le déjeuner.' },
      { speaker: 'M', en: 'Great. Can you add the sales figures for March?', fr: 'Super. Tu peux ajouter les chiffres de ventes de mars ?' },
      { speaker: 'W', en: "I can't, sorry. Accounting hasn't sent them yet.", fr: 'Je ne peux pas, désolée. La comptabilité ne les a pas encore envoyés.' },
      { speaker: 'M', en: "OK, lemme call them. What time's the meeting?", fr: 'D’accord, je vais les appeler. La réunion est à quelle heure ?' },
      { speaker: 'W', en: "At three. Don't you have a call with the Tokyo office at three?", fr: 'À 15 h. Tu n’as pas un appel avec le bureau de Tokyo à 15 h ?' },
      { speaker: 'M', en: "Oh no, you're right! I'd better move it.", fr: 'Oh non, tu as raison ! Je ferais mieux de le décaler.' }
    ] },
    { type: 'box', style: 'tip', title: 'Comment entraîner ton oreille', html: 'Écoute une phrase, puis répète-la <b>exactement</b> au même rythme, avec les mêmes sons collés et réduits : c’est la technique du <i>shadowing</i> (« faire l’ombre »). Ensuite seulement, relis le texte écrit. Fais-le avec chaque exemple de cette leçon : plus tu produis toi-même « didja » ou « kən », plus vite tu les reconnais.' },
    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'Les voix du TOEIC parlent à un rythme naturel : formes faibles, liaisons et contractions sont partout, surtout en <b>Parties 2 et 3</b>. Les pièges classiques : <i>can</i> / <i>can’t</i> (le sens s’inverse !), <i>I’ll</i> / <i>I’d</i>, <i>won’t</i> / <i>want</i>, et les questions <i>Did you…?</i> / <i>Would you…?</i> qui passent très vite. Si tu reconnais « woudja » en une fraction de seconde, tu sais tout de suite qu’on te fait une proposition ou une demande polie, et tu gagnes du temps pour écouter la suite.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• Les petits mots grammaticaux sont réduits avec le son /ə/ : <i>to</i> /tə/, <i>for</i> /fər/, <i>of</i> /əv/, <i>and</i> /ən/, <i>can</i> /kən/, <i>them</i> /ðəm/.<br>• <b>can</b> = court et faible ; <b>can’t</b> = voyelle pleine et accentuée (« kaènt » US, « kaannt » UK).<br>• Contractions : <i>I’d</i> (would / had), <i>we’ll</i> (will), <i>won’t</i> (will not ≠ <i>want</i>).<br>• Liaisons (<i>pick it up</i>), fusions (<i>didja, woudja, dontcha</i>), élisions (<i>nex day</i>).<br>• <i>gonna, wanna, gotta, kinda, lemme</i> : à reconnaître, pas à écrire.' }
  ],
  exercises: [
    { type: 'mcq', q: 'Dans <i>I need to go</i>, comment se prononce normalement <b>to</b> ?', options: ['/tuː/ « tou », comme <i>two</i>', '/tə/ « teu », très bref', 'Il ne se prononce jamais'], answer: 1, explain: '<i>to</i> est un petit mot grammatical non accentué : il prend sa forme faible /tə/. La forme forte /tuː/ ne s’entend que si le mot est seul ou mis en valeur.' },
    { type: 'mcq', q: 'Dans <i>I can help you</i>, comment se prononce normalement <b>can</b> ?', options: ['/kæn/ : voyelle pleine et accentuée', '/kən/ : court et faible, c’est <i>help</i> qui est accentué', '/kænt/ : avec un t à la fin'], answer: 1, explain: 'Dans une phrase affirmative, <i>can</i> est réduit à /kən/ « keun » et c’est le verbe principal (<i>help</i>) qui porte l’accent. Une voyelle pleine et forte signalerait plutôt <i>can’t</i>.' },
    { type: 'mcq', q: 'Tu entends : « <b>didja</b> finish? ». Qu’est-ce qui a été dit ?', options: ['Did you finish?', 'Would you finish?', 'Do you finish?'], answer: 0, explain: '« didja » = <i>did you</i> : le d de <i>did</i> et le y de <i>you</i> fusionnent en « dj ». <i>Would you</i> donnerait « woudja ».' },
    { type: 'mcq', q: 'Dans <i>I’d already left when you called</i>, que signifie <b>I’d</b> ?', options: ['I would', 'I had', 'I did'], answer: 1, explain: '<i>I’d</i> est suivi de <i>left</i>, un participe passé → <b>had</b> (plus-que-parfait : « J’étais déjà parti quand tu as appelé »). <i>I’d</i> + base verbale = <i>would</i>.' },
    { type: 'gap', q: 'Écris la forme pleine : <i>We won’t be late.</i> → We ___ be late.', answers: ['will not'], explain: '<i>won’t</i> = <b>will not</b> (futur négatif). Ne le confonds pas avec <i>want</i> (vouloir) : « wo-ount » ≠ « ouannt ».' },
    { type: 'listen', say: 'Sure, I can finish it by Tuesday.', q: 'Que dit la personne ?', options: ['Elle peut le terminer d’ici mardi.', 'Elle ne peut pas le terminer d’ici mardi.', 'Elle l’a déjà terminé mardi.'], answer: 0, explain: '<i>can</i> est réduit (« I kən FI-nish ») et <i>Sure</i> annonce une réponse positive.' },
    { type: 'listen', say: "I can't attend the meeting on Friday.", q: 'La personne peut-elle assister à la réunion de vendredi ?', options: ['Oui', 'Non', 'On ne sait pas'], answer: 1, explain: '<i>can’t</i> est prononcé avec une voyelle pleine et accentuée (« kaènt »). Un <i>can</i> affirmatif aurait été court et faible (« keun »).' },
    { type: 'listen', accent: 'en-GB', say: "Sorry, we can't deliver on Saturdays.", q: 'Que comprends-tu ?', options: ['Ils livrent le samedi.', 'Ils ne livrent pas le samedi.', 'Ils livrent seulement le samedi.'], answer: 1, explain: 'En britannique, <i>can’t</i> se prononce /kɑːnt/ « kaannt », avec un a long. <i>Sorry</i> annonce aussi une réponse négative.' },
    { type: 'listen', say: "We'll send you the updated schedule.", q: 'Quand l’envoi a-t-il lieu ?', options: ['C’est une habitude : ils l’envoient régulièrement.', 'C’est dans le futur : ils vont l’envoyer.', 'C’est déjà fait : ils l’ont envoyé.'], answer: 1, explain: 'Le petit « l » de <i>We’ll</i> (= we will) marque le futur. Sans lui, <i>We send</i> serait une habitude ; <i>We sent</i> serait du passé.' },
    { type: 'listen', accent: 'en-CA', say: "I won't be able to come tomorrow.", q: 'Qu’as-tu entendu ?', options: ['I want to be able to come tomorrow.', "I won't be able to come tomorrow."], answer: 1, explain: '<i>won’t</i> /woʊnt/ se prononce « wo-ount », alors que <i>want</i> /wɑːnt/ a un « a » ouvert. De plus, <i>want</i> serait suivi de <i>to</i>.' },
    { type: 'listen', say: "I'm gonna need the figures by noon.", q: 'What does the speaker mean?', options: ['The speaker will need the figures by 12 p.m.', 'The speaker needed the figures yesterday.', 'The speaker is going to lunch at noon.'], answer: 0, explain: '<i>gonna</i> = <i>going to</i> : « Je vais avoir besoin des chiffres d’ici midi. » <i>noon</i> = midi. Le piège C reprend <i>going to</i> et <i>noon</i>, mais pas le sens.' },
    { type: 'dictation', say: 'Did you call them yesterday?', answers: ['Did you call them yesterday', "Did you call 'em yesterday"], explain: '« didja CALL-əm yesterday ? » : <i>did you</i> fusionne en « didja » et <i>them</i> se réduit à « əm ».' },
    { type: 'dictation', accent: 'en-GB', say: "I'd like a cup of coffee and a sandwich.", answers: ["I'd like a cup of coffee and a sandwich", 'I would like a cup of coffee and a sandwich'], explain: '<i>a</i> → /ə/, <i>of</i> → /ə/, <i>and</i> → /ən/ : « aïd-like-ə-cup-ə-coffee-ən-ə-sandwich ».' },
    { type: 'dictation', say: 'Can you pick it up at eight?', answers: ['Can you pick it up at eight', 'Can you pick it up at 8'], explain: 'Liaisons en chaîne : « kən-yə pi-ki-tu-pət eight ». <i>pick up</i> = aller chercher, récupérer.' },
    { type: 'dictation', accent: 'en-AU', say: 'We should have told them last week.', answers: ['We should have told them last week', "We should've told them last week"], explain: '<i>should have</i> → « shou-dəv » ; <i>them</i> → « əm » ; <i>last week</i> → « las week ». À l’écrit : <b>should have</b>, jamais « should of ».' },
    { type: 'listen', accent: 'en-GB', say: 'Would you like me to book a table for the team?', q: 'What is the speaker doing?', options: ['Making an offer', 'Refusing an invitation', 'Complaining about a reservation', 'Asking for directions'], answer: 0, explain: '« woudja like me tə book… ? » : <i>Would you like me to…?</i> (Veux-tu que je… ?) sert à <b>proposer</b> son aide. Cette tournure revient très souvent en Parties 2 et 3.' }
  ]
});
