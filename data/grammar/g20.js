LE.register({
  id: 'g20',
  kind: 'grammar',
  title: 'Le past continuous',
  subtitle: 'Raconter ce qui était en train de se passer à un moment du passé',
  level: 'A2',
  minutes: 35,
  goals: [
    'Former le past continuous : <b>was / were + verbe-ing</b>',
    'Décrire une action en cours à un moment précis du passé : <i>At 10 a.m., I was talking to a client.</i>',
    'Raconter une action interrompue avec <b>when</b> et des actions simultanées avec <b>while</b>',
    'Choisir entre past continuous et prétérit, et éviter le piège de l’imparfait'
  ],
  blocks: [
    { type: 'h', text: 'À quoi sert le past continuous ?' },
    { type: 'p', html: 'Le <b>past continuous</b> (ou « prétérit continu ») sert à dire qu’une action <b>était en train de se passer</b> à un moment du passé. C’est le cousin du présent continu (<i>I am working</i> = je suis en train de travailler), transporté dans le passé : <i>I <b>was working</b></i> = j’étais en train de travailler, je travaillais.' },
    { type: 'p', html: 'Imagine une photo prise hier à 10 heures : le past continuous décrit ce que les gens <b>faisaient</b> sur la photo. En français, on le traduit le plus souvent par l’<b>imparfait</b> (<i>je travaillais</i>) ou par « être en train de ».' },
    { type: 'examples', items: [
      { en: 'At 10 a.m., I was talking to a client.', fr: 'À 10 heures, j’étais en train de parler à un client.' },
      { en: 'It was raining this morning.', fr: 'Il pleuvait ce matin.' },
      { en: 'What were you doing yesterday at 6 p.m.?', fr: 'Que faisais-tu hier à 18 heures ?' },
      { en: 'We were having lunch when the manager called.', fr: 'Nous étions en train de déjeuner quand le directeur a appelé.' }
    ] },

    { type: 'h', text: 'La formation : was / were + verbe-ing' },
    { type: 'p', html: 'On prend le verbe <b>be au prétérit</b> (<i>was</i> ou <i>were</i>, voir la leçon « Le prétérit de « be » : was et were ») et on ajoute le verbe en <b>-ing</b>, exactement comme au présent continu. Un seul choix à faire : <b>was</b> ou <b>were</b>, selon le sujet.' },
    { type: 'table', head: ['Sujet', 'Affirmation', 'Négation', 'Question'], rows: [
      ['I', 'I <b>was</b> working', 'I <b>wasn’t</b> working', '<b>Was</b> I working?'],
      ['he / she / it', 'she <b>was</b> working', 'she <b>wasn’t</b> working', '<b>Was</b> she working?'],
      ['you', 'you <b>were</b> working', 'you <b>weren’t</b> working', '<b>Were</b> you working?'],
      ['we / they', 'they <b>were</b> working', 'they <b>weren’t</b> working', '<b>Were</b> they working?']
    ], caption: 'Retiens : <b>I, he, she, it → was</b> ; <b>you, we, they → were</b>. <i>wasn’t</i> = was not ; <i>weren’t</i> = were not.' },
    { type: 'box', style: 'tip', title: 'Rappel : l’orthographe du -ing', html: 'Les règles sont les mêmes qu’au présent continu :<br>• le <b>e</b> muet final tombe : <i>make → making</i>, <i>write → writing</i> ;<br>• verbe d’une syllabe terminé par consonne + <b>une seule</b> voyelle + consonne : on double la dernière consonne : <i>stop → stopping</i>, <i>plan → planning</i>, <i>run → running</i> (mais jamais w, x, y : <i>fix → fixing</i>) ;<br>• <b>-ie</b> devient <b>-ying</b> : <i>lie → lying</i>, <i>tie → tying</i>.' },
    { type: 'examples', items: [
      { en: "I wasn't listening. Can you repeat that?", fr: 'Je n’écoutais pas. Tu peux répéter ?' },
      { en: "The machines weren't working this morning.", fr: 'Les machines ne fonctionnaient pas ce matin.', note: '<i>work</i> veut aussi dire « fonctionner » pour une machine.' },
      { en: 'Were you waiting for me? — Yes, I was.', fr: 'Tu m’attendais ? — Oui.', note: 'Réponse courte : on reprend seulement <i>was / were</i> : <i>Yes, I was. / No, I wasn’t.</i>' },
      { en: 'Why was Mr. Chen waiting outside?', fr: 'Pourquoi M. Chen attendait-il dehors ?' }
    ] },

    { type: 'h', text: 'Emploi 1 : une action en cours à un moment précis' },
    { type: 'p', html: 'On fait un « arrêt sur image » à un moment précis du passé : l’action avait <b>déjà commencé</b> et <b>n’était pas encore finie</b>. Marqueurs typiques : <i>at 10 a.m.</i>, <i>at that time</i> (à ce moment-là), <i>at this time yesterday</i> (hier à la même heure), <i>all morning</i> (toute la matinée).' },
    { type: 'examples', items: [
      { en: 'At 9 a.m., Ms. Rossi was checking her e-mails.', fr: 'À 9 heures, Mme Rossi consultait ses e-mails.' },
      { en: 'At this time last week, we were flying to Singapore.', fr: 'La semaine dernière à la même heure, nous étions dans l’avion pour Singapour.' },
      { en: 'At noon, the whole team was having lunch in the cafeteria.', fr: 'À midi, toute l’équipe déjeunait à la cafétéria.' },
      { en: 'What were you doing at 3 p.m. yesterday? — I was writing a report.', fr: 'Que faisais-tu hier à 15 heures ? — J’étais en train d’écrire un rapport.' }
    ] },

    { type: 'h', text: 'Emploi 2 : une action interrompue (when + prétérit)' },
    { type: 'p', html: 'C’est l’emploi le plus fréquent pour raconter une histoire : une action <b>longue</b> est en cours (past continuous) quand une action <b>courte</b> se produit et l’interrompt. L’action courte se met au <b>prétérit</b> (<i>called, rang, arrived</i>) et elle est souvent introduite par <b>when</b> (quand).' },
    { type: 'table', head: ['Action longue, en cours (past continuous)', 'Action courte (when + prétérit)', 'Français'], rows: [
      ['I <b>was driving</b> to work', 'when the phone <b>rang</b>.', 'Je conduisais… quand le téléphone a sonné.'],
      ['She <b>was giving</b> a presentation', 'when the projector <b>stopped</b> working.', 'Elle faisait une présentation… quand le projecteur est tombé en panne.'],
      ['We <b>were having</b> lunch', 'when the fire alarm <b>went off</b>.', 'Nous déjeunions… quand l’alarme incendie s’est déclenchée.'],
      ['They <b>were waiting</b> for the train', 'when it <b>started</b> to snow.', 'Ils attendaient le train… quand il a commencé à neiger.']
    ], caption: 'On peut inverser l’ordre : <i>When the phone rang, I was driving.</i> Mets une virgule quand la phrase commence par <i>when</i>.' },
    { type: 'examples', items: [
      { en: 'When I arrived, Mr. Okafor was talking on the phone.', fr: 'Quand je suis arrivée, M. Okafor était au téléphone.' },
      { en: 'I was reading the contract when I noticed a mistake.', fr: 'Je lisais le contrat quand j’ai remarqué une erreur.' },
      { en: 'The customer was complaining when the manager came in.', fr: 'Le client était en train de se plaindre quand la responsable est entrée.' },
      { en: 'Kofi was working in Toronto when he met his wife.', fr: 'Kofi travaillait à Toronto quand il a rencontré sa femme.' }
    ] },

    { type: 'h', text: 'Emploi 3 : deux actions en même temps (while)' },
    { type: 'p', html: '<b>While</b> veut dire « pendant que ». Il introduit une action <b>longue</b>, donc il est presque toujours suivi du past continuous. On l’utilise pour deux actions longues <b>simultanées</b> (les deux au past continuous), ou pour une action longue pendant laquelle une action courte se produit.' },
    { type: 'examples', items: [
      { en: 'While I was preparing the slides, Kenji was booking the meeting room.', fr: 'Pendant que je préparais les diapos, Kenji réservait la salle de réunion.' },
      { en: 'While the manager was speaking, everyone was taking notes.', fr: 'Pendant que la directrice parlait, tout le monde prenait des notes.' },
      { en: 'Someone called while you were having lunch.', fr: 'Quelqu’un a appelé pendant que tu déjeunais.' },
      { en: 'I met Ms. Duval while I was working in Brussels.', fr: 'J’ai rencontré Mme Duval quand je travaillais à Bruxelles.' }
    ] },
    { type: 'box', style: 'tip', title: 'When ou while ?', html: 'Règle pratique, la plus sûre : <b>when + action courte</b> (prétérit) ; <b>while + action longue</b> (past continuous).<br><i>I was driving <b>when</b> the phone <b>rang</b>.</i><br><i>The phone rang <b>while</b> I <b>was driving</b>.</i><br>Les deux phrases racontent la même chose : seul le point de vue change.' },
    { type: 'box', style: 'warn', title: 'Piège : while ou during ?', html: '<b>While</b> et <b>during</b> se traduisent tous les deux par « pendant », mais :<br>• <b>while</b> + sujet + verbe : <i>while <b>we were having</b> the meeting</i> ;<br>• <b>during</b> + nom : <i>during <b>the meeting</b></i>.<br><span class="ko">during we were having lunch</span> → <span class="ok">while we were having lunch</span> ou <span class="ok">during lunch</span>. C’est une question très classique de la Partie 5 du TOEIC.' },

    { type: 'h', text: 'Past continuous ou prétérit ?' },
    { type: 'p', html: 'Pour une francophone, l’analogie la plus utile est : <b>past continuous ≈ imparfait</b> (le décor, ce qui était en cours) et <b>prétérit ≈ passé composé</b> (l’événement, ce qui s’est passé et qui est terminé). Compare :' },
    { type: 'examples', items: [
      { en: 'When the director arrived, we were discussing the budget.', fr: 'Quand le directeur est arrivé, nous discutions du budget.', note: 'La discussion avait <b>déjà commencé</b> avant son arrivée.' },
      { en: 'When the director arrived, we discussed the budget.', fr: 'Quand le directeur est arrivé, nous avons discuté du budget.', note: 'Il est arrivé, <b>puis</b> nous avons commencé à discuter.' },
      { en: 'I was reading the report on the train.', fr: 'Je lisais le rapport dans le train.', note: 'Action en cours : on ne sait pas si je l’ai fini.' },
      { en: 'I read the report on the train.', fr: 'J’ai lu le rapport dans le train.', note: 'Action complète et terminée (<i>read</i> au prétérit se prononce comme <i>red</i>).' }
    ] },
    { type: 'p', html: 'Mais attention, l’analogie a ses <b>limites</b> : l’imparfait français sert aussi à parler des <b>habitudes passées</b> et des <b>états</b> (être, avoir, savoir, vouloir…). Dans ces cas-là, l’anglais n’utilise <b>pas</b> le past continuous, mais le <b>prétérit</b>.' },
    { type: 'table', head: ['Français (imparfait)', 'Anglais', 'Pourquoi ?'], rows: [
      ['Je <b>travaillais</b> quand il a appelé.', 'I <b>was working</b> when he called.', 'action en cours → past continuous'],
      ['Chaque été, nous <b>allions</b> en Italie.', 'Every summer, we <b>went</b> to Italy.', 'habitude → prétérit'],
      ['Il <b>avait</b> une voiture de fonction.', 'He <b>had</b> a company car.', 'possession (un état) → prétérit'],
      ['Je ne <b>savais</b> pas.', 'I <b>didn’t know</b>.', 'verbe d’état → prétérit'],
      ['Le bureau <b>était</b> grand.', 'The office <b>was</b> big.', 'description avec <i>be</i> → <i>was</i>']
    ], caption: 'Pour une habitude passée, tu peux aussi utiliser <i>used to</i> : <i>We used to go to Italy.</i> (voir la leçon « Used to, be used to, get used to et le causatif »).' },
    { type: 'box', style: 'warn', title: 'Piège : l’imparfait d’habitude', html: '<span class="ko">When I lived in Lyon, I was often taking the train to Paris.</span><br><span class="ok">When I lived in Lyon, I often took the train to Paris.</span><br>Une action <b>répétée</b> (avec <i>often, usually, every day, every summer</i>…) se met au <b>prétérit</b>, même si le français dit « je prenais ».' },

    { type: 'h', text: 'Les verbes d’état : jamais au continu' },
    { type: 'p', html: 'Comme au présent (voir la leçon « Présent simple ou présent continu ? »), les <b>verbes d’état</b> ne prennent pas la forme en -ing : ils décrivent une situation, pas une action. Les principaux : <i>know</i> (savoir, connaître), <i>understand</i> (comprendre), <i>want</i> (vouloir), <i>need</i> (avoir besoin de), <i>like / love / hate</i> (aimer / adorer / détester), <i>prefer</i> (préférer), <i>believe</i> (croire), <i>own</i> (posséder), <i>belong</i> (appartenir), <i>seem</i> (sembler), <i>mean</i> (signifier).<br><span class="ko">I was knowing</span> → <span class="ok">I knew</span> ; <span class="ko">She was wanting</span> → <span class="ok">She wanted</span>.<br>Attention à <b>have</b> : au sens de « posséder », c’est un verbe d’état (<i>He <b>had</b> a company car.</i>) ; mais <i>have lunch</i> (déjeuner) ou <i>have a meeting</i> (être en réunion) sont des actions : <i>We <b>were having</b> lunch</i> est donc correct.' },
    { type: 'examples', items: [
      { en: "I didn't know the answer.", fr: 'Je ne connaissais pas la réponse.' },
      { en: 'She wanted a bigger office.', fr: 'Elle voulait un bureau plus grand.' },
      { en: 'We needed more time.', fr: 'Nous avions besoin de plus de temps.' },
      { en: 'They seemed very happy with the results.', fr: 'Ils semblaient très contents des résultats.' }
    ] },

    { type: 'dialog', title: 'Un appel manqué', lines: [
      { speaker: 'W', en: 'Hi Marco, I tried to call you at eleven. Where were you?', fr: 'Salut Marco, j’ai essayé de t’appeler à onze heures. Où étais-tu ?' },
      { speaker: 'M', en: 'Sorry, Aisha. I was meeting a client, so my phone was off.', fr: 'Désolé, Aisha. J’étais en rendez-vous avec un client, donc mon téléphone était éteint.' },
      { speaker: 'W', en: 'No problem. And this afternoon? I called again at three.', fr: 'Pas de souci. Et cet après-midi ? J’ai rappelé à quinze heures.' },
      { speaker: 'M', en: 'At three? I was driving back to the office. What were you calling about?', fr: 'À quinze heures ? J’étais en voiture, je rentrais au bureau. Tu appelais pour quoi ?' },
      { speaker: 'W', en: "The printer wasn't working, but Sofia fixed it while you were driving.", fr: 'L’imprimante ne marchait pas, mais Sofia l’a réparée pendant que tu conduisais.' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 5</b>, repère les indices : <i>at 10 a.m. yesterday</i>, <i>at that time</i>, <i>while</i>, ou <i>when</i> + prétérit → past continuous. Exemple : <i>Ms. Novak ------- a presentation when the power went out.</i> → <b>was giving</b>. Vérifie aussi l’accord : <i>The engineers <b>were</b> testing…</i> (pluriel) mais <i>The engineer <b>was</b> testing…</i> (singulier).<br>Dans les <b>Parties 3 et 4</b>, les gens racontent souvent un petit incident : <i>I was driving to the office when my car broke down.</i> La question peut porter sur ce qu’ils faisaient (l’action longue) ou sur le problème (l’action courte).' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• Formation : <b>was / were + verbe-ing</b> (<i>I was working, they were waiting</i>).<br>• Action <b>en cours</b> à un moment du passé : <i>At 10 a.m., I was talking to a client.</i><br>• Action longue <b>interrompue</b> : <i>I was driving <b>when</b> the phone <b>rang</b>.</i><br>• Actions simultanées : <b>while</b> + past continuous ; <b>during</b> + nom.<br>• Habitudes passées et verbes d’état (<i>know, want, need…</i>) → <b>prétérit</b>, même si le français dit « je savais ».' }
  ],
  exercises: [
    { type: 'mcq', q: 'At 9 p.m. last night, I ___ TV at home.', options: ['was watching', 'were watching', 'am watching', 'watching'], answer: 0, explain: 'Moment précis du passé (<i>at 9 p.m. last night</i>) + action en cours → past continuous. Avec <b>I</b> → <b>was watching</b>.' },
    { type: 'gap', q: 'The two engineers ___ (test) the new machine when the power went out.', answers: ['were testing'], explain: 'Action longue interrompue par la coupure de courant. Sujet pluriel (<i>the two engineers</i> = they) → <b>were testing</b>.' },
    { type: 'gap', q: '— What were you doing at 10 a.m.? — I ___ (talk) to a client.', answers: ['was talking'], explain: 'On répond avec le temps de la question : action en cours à 10 heures → <b>was talking</b> (avec I → was).' },
    { type: 'gap', q: 'Don’t worry, you didn’t wake me up. I ___ (not / sleep) when you called.', answers: ["wasn't sleeping", 'was not sleeping'], explain: 'Négation : <b>wasn’t</b> (= was not) + -ing. « Je ne dormais pas » au moment de ton appel.' },
    { type: 'order', answer: 'What were you doing at nine?', fr: 'Qu’est-ce que tu faisais à neuf heures ?', explain: 'Question : mot interrogatif (<i>What</i>) + <b>were</b> + sujet + verbe-ing + moment.' },
    { type: 'mcq', q: 'I was driving to work when my phone ___.', options: ['rang', 'rings', 'has rung', 'will ring'], answer: 0, explain: 'L’action courte qui interrompt l’action longue se met au <b>prétérit</b> : <i>rang</i> (prétérit irrégulier de <i>ring</i>).' },
    { type: 'gap', q: 'Leila ___ (make) photocopies when the fire alarm went off.', answers: ['was making'], explain: 'Action longue interrompue par l’alarme → <b>was making</b>. Orthographe : <i>make</i> perd son <b>e</b> → <i>making</i>.' },
    { type: 'mcq', q: '___ I was preparing the report, my colleague was answering e-mails.', options: ['During', 'While', 'Meanwhile', 'Then'], answer: 1, explain: '<b>While</b> (pendant que) + sujet + verbe : deux actions longues simultanées. <i>During</i> est suivi d’un nom, pas d’un sujet + verbe.' },
    { type: 'mcq', q: 'The fire alarm went off ___ the meeting.', options: ['while', 'during', 'when'], answer: 1, explain: '<i>the meeting</i> est un <b>nom</b> sans verbe → <b>during</b>. Avec un verbe, on dirait <i>while we were having the meeting</i>.' },
    { type: 'order', answer: 'I was talking to a client when you called.', alts: ['When you called I was talking to a client.'], fr: 'J’étais en train de parler à un client quand tu as appelé.', explain: 'Action longue (<b>was talking</b>) interrompue par une action courte (<b>when you called</b>). On peut aussi commencer par <i>When you called</i>.' },
    { type: 'mcq', q: 'Traduis : « Je ne connaissais pas son nom. »', options: ["I didn't know his name.", "I wasn't knowing his name.", "I wasn't know his name.", "I don't know his name."], answer: 0, explain: '<i>know</i> est un <b>verbe d’état</b> : jamais de -ing. L’imparfait « je ne connaissais pas » se traduit par le prétérit <b>didn’t know</b>.' },
    { type: 'mcq', q: 'Traduis : « Chaque été, nous allions en Italie. »', options: ['Every summer, we were going to Italy.', 'Every summer, we went to Italy.', 'Every summer, we go to Italy.'], answer: 1, explain: 'Habitude passée (<i>every summer</i>) → <b>prétérit</b> : <i>we went</i> (ou <i>we used to go</i>). L’imparfait d’habitude ne se traduit pas par le past continuous.' },
    { type: 'listen', accent: 'en-GB', say: "Sorry I missed your call this morning. I was driving to the airport, and I couldn't answer the phone.", q: 'Pourquoi la personne n’a-t-elle pas répondu au téléphone ?', options: ['Elle était en réunion avec un client.', 'Elle conduisait pour aller à l’aéroport.', 'Elle était dans l’avion.'], answer: 1, explain: 'Elle dit <i>I <b>was driving</b> to the airport</i> : elle était en train de conduire au moment de l’appel.' },
    { type: 'dictation', accent: 'en-AU', say: 'We were waiting for the client.', answers: ['We were waiting for the client'], explain: '« Nous attendions le client. » À l’oral, <i>were</i> est souvent prononcé faiblement, presque « wer ».' },
    { type: 'mcq', q: 'Mr. Delgado ------- a presentation when the projector stopped working. <small>(style TOEIC)</small>', options: ['gives', 'was giving', 'has given', 'will give'], answer: 1, explain: 'Action longue en cours, interrompue par une action courte au prétérit (<i>when the projector stopped</i>) → <b>was giving</b>.' },
    { type: 'mcq', q: 'The accountants ------- the annual budget when the auditors arrived. <small>(style TOEIC)</small>', options: ['was reviewing', 'were reviewing', 'are reviewing', 'reviewing'], answer: 1, explain: 'Action en cours interrompue par <i>when the auditors arrived</i> → past continuous. Sujet pluriel (<i>the accountants</i>) → <b>were</b> reviewing. <i>Reviewing</i> seul n’est pas un verbe conjugué.' }
  ]
});
