LE.register({
  id: 'g32',
  kind: 'grammar',
  title: 'Le past perfect (plus-que-parfait)',
  subtitle: 'Revenir en arrière dans un récit : ce qui s’était passé avant un autre moment du passé',
  level: 'B1',
  minutes: 40,
  goals: [
    'Former le past perfect : <b>had</b> + participe passé (<i>I had finished, she hadn’t called, Had they left?</i>)',
    'Montrer qu’une action a eu lieu <b>avant</b> une autre dans le passé (<i>When I arrived, the meeting had already started</i>)',
    'Utiliser les mots-signaux : <i>by the time, before, after, already, just, never… before</i>',
    'Découvrir le past perfect continu (<i>had been waiting</i>) et réussir les questions TOEIC de la Partie 5'
  ],
  blocks: [
    { type: 'h', text: 'À quoi sert le past perfect ?' },
    { type: 'p', html: 'Quand tu racontes quelque chose au passé, il arrive qu’une action se soit produite <b>encore plus tôt</b> que les autres. Pour le montrer, l’anglais utilise le <b>past perfect</b> : c’est « le passé du passé ». Il correspond presque exactement au <b>plus-que-parfait</b> français : <i>j’<b>avais</b> fini</i>, <i>elle <b>était</b> partie</i>.' },
    { type: 'box', style: 'tip', title: 'Bonne nouvelle', html: 'Pour une fois, l’anglais et le français fonctionnent de la même façon ! Là où le français utilise le plus-que-parfait (<i>j’avais fini, nous étions arrivés</i>), l’anglais utilise presque toujours le past perfect. Ton intuition de francophone est ici une alliée.' },
    { type: 'examples', items: [
      { en: 'When I got to the office, the meeting had already started.', fr: 'Quand je suis arrivée au bureau, la réunion avait déjà commencé.', note: 'Ordre réel : 1) la réunion commence ; 2) j’arrive. L’action la plus ancienne est au past perfect.' },
      { en: 'She had never seen the new factory before her visit.', fr: 'Elle n’avait jamais vu la nouvelle usine avant sa visite.' },
      { en: 'The client called, but Paul had left for the day.', fr: 'Le client a appelé, mais Paul était parti pour la journée.' },
      { en: 'We had sent the invoice before the end of the month.', fr: 'Nous avions envoyé la facture avant la fin du mois.' }
    ] },

    { type: 'h', text: 'La formation : had + participe passé' },
    { type: 'p', html: 'Deuxième bonne nouvelle : le past perfect a <b>une seule forme pour toutes les personnes</b>. On prend <b>had</b> (le prétérit de <i>have</i>) + le <b>participe passé</b> du verbe : la forme en <i>-ed</i> pour les verbes réguliers (<i>worked, called</i>), la 3ᵉ colonne pour les verbes irréguliers (<i>go → went → <b>gone</b></i> ; <i>write → wrote → <b>written</b></i>).' },
    { type: 'table', head: ['Forme', 'Construction', 'Exemple', 'Français'], rows: [
      ['Affirmative', 'sujet + <b>had</b> + participe passé', 'I <b>had finished</b>. / I<b>’d</b> finished.', 'J’avais fini.'],
      ['Négative', 'sujet + <b>had not</b> (<b>hadn’t</b>) + participe passé', 'She <b>hadn’t called</b>.', 'Elle n’avait pas appelé.'],
      ['Question', '<b>Had</b> + sujet + participe passé ?', '<b>Had</b> they <b>left</b>?', 'Étaient-ils partis ?'],
      ['Réponse courte', 'Yes, sujet + <b>had</b>. / No, sujet + <b>hadn’t</b>.', 'Yes, they <b>had</b>. / No, they <b>hadn’t</b>.', 'Oui. / Non.']
    ], caption: 'Même forme partout : <i>I / you / he / she / it / we / they <b>had</b> worked</i>. Contractions : <b>I’d, you’d, he’d, she’d, we’d, they’d</b> ; négation : <b>hadn’t</b>.' },
    { type: 'examples', items: [
      { en: "I'd already read the report.", fr: 'J’avais déjà lu le rapport.', note: 'Le participe <i>read</i> se prononce « red », comme le prétérit.' },
      { en: "They hadn't booked a hotel.", fr: 'Ils n’avaient pas réservé d’hôtel.' },
      { en: 'Had you worked with Ms. Rossi before?', fr: 'Avais-tu déjà travaillé avec Mme Rossi auparavant ?' },
      { en: "No, I hadn't. It was our first project together.", fr: 'Non. C’était notre premier projet ensemble.' },
      { en: 'We had had a long day, so we went home early.', fr: 'Nous avions eu une longue journée, alors nous sommes rentrés tôt.', note: '<b>had had</b> n’est pas une faute de frappe : <i>had</i> (auxiliaire) + <i>had</i> (participe passé de <i>have</i>).' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : « il était parti » = he HAD left', html: 'En français, certains verbes se conjuguent avec <b>être</b> : <i>elle <b>était</b> partie, ils <b>étaient</b> arrivés</i>. En anglais, l’auxiliaire du past perfect est <b>toujours had</b> :<br><span class="ko">They were arrived.</span> → <span class="ok">They had arrived.</span><br><span class="ko">She was left.</span> → <span class="ok">She had left.</span> (<i>She was left</i> voudrait dire « on l’a laissée ».)' },
    { type: 'box', style: 'warn', title: 'Piège : participe passé, pas prétérit', html: 'Après <b>had</b>, on met le <b>participe passé</b> (3ᵉ colonne), jamais le prétérit (2ᵉ colonne) :<br><span class="ko">I had went.</span> → <span class="ok">I had gone.</span><br><span class="ko">She had wrote the email.</span> → <span class="ok">She had written the email.</span>' },
    { type: 'box', style: 'tip', title: 'Astuce : ’d = had ou would ?', html: 'La contraction <b>’d</b> peut vouloir dire <b>had</b> ou <b>would</b>. Regarde le verbe qui suit :<br>• <b>’d + participe passé</b> → had : <i>She’d <b>finished</b>.</i> (Elle avait fini.)<br>• <b>’d + base verbale</b> → would : <i>She’d <b>finish</b>.</i> (Elle finirait.)<br>Pour les verbes dont le participe ressemble à la base (<i>put, cut, come</i>), c’est le contexte qui tranche.' },

    { type: 'h', text: 'Deux actions passées : laquelle vient en premier ?' },
    { type: 'p', html: 'Le past perfect est surtout utile quand <b>deux actions passées</b> se trouvent dans la même phrase ou la même histoire. L’action la plus <b>ancienne</b> se met au <b>past perfect</b> ; l’action plus récente se met au <b>prétérit</b> (<i>arrived, called, went</i>). Compare ces phrases : un seul petit mot change tout.' },
    { type: 'table', head: ['Phrase', 'Ordre des actions', 'Sens'], rows: [
      ['When I arrived, the meeting <b>started</b>.', '1. j’arrive → 2. la réunion commence', 'La réunion a commencé <b>au moment où</b> je suis arrivée (on m’attendait).'],
      ['When I arrived, the meeting <b>had started</b>.', '1. la réunion commence → 2. j’arrive', 'La réunion <b>avait déjà commencé</b> : je suis arrivée en retard.'],
      ['When the director came in, everyone <b>left</b>.', '1. le directeur entre → 2. tout le monde sort', 'Tout le monde est parti <b>juste après</b> son arrivée.'],
      ['When the director came in, everyone <b>had left</b>.', '1. tout le monde sort → 2. le directeur entre', 'Il n’y avait <b>plus personne</b> : tout le monde était déjà parti.']
    ], caption: 'À l’oral, <b>had</b> est souvent contracté (<i>they’d left, she’d started</i>) : tends bien l’oreille.' },
    { type: 'examples', items: [
      { en: 'When we got to the station, the train had already left.', fr: 'Quand nous sommes arrivés à la gare, le train était déjà parti.' },
      { en: "I couldn't log in because I had forgotten my password.", fr: 'Je n’ai pas pu me connecter parce que j’avais oublié mon mot de passe.', note: 'La cause (oublier) a eu lieu <b>avant</b> la conséquence (ne pas pouvoir se connecter).' },
      { en: 'Mr. Okafor was nervous because he had never given a presentation in English.', fr: 'M. Okafor était nerveux parce qu’il n’avait jamais fait de présentation en anglais.' },
      { en: 'The shop was dark. Everyone had gone home.', fr: 'Le magasin était plongé dans le noir. Tout le monde était rentré chez soi.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : ne mets pas du past perfect partout', html: 'Quand tu racontes des actions <b>dans l’ordre où elles se sont passées</b>, le prétérit suffit : <i>I arrived, turned on my computer and read my emails.</i> Le past perfect sert seulement à <b>revenir en arrière</b>.<br>Et le passé composé français ne se traduit pas par le past perfect : « Hier, j’ai fini le rapport. » → <span class="ko">Yesterday I had finished the report.</span> → <span class="ok">Yesterday I finished the report.</span>' },
    { type: 'dialog', title: 'Un voyage raté', lines: [
      { speaker: 'M', en: 'How was your trip to Toronto, Priya?', fr: 'Comment s’est passé ton voyage à Toronto, Priya ?' },
      { speaker: 'W', en: 'Terrible! When I got to the airport, my flight had already left.', fr: 'Horrible ! Quand je suis arrivée à l’aéroport, mon vol était déjà parti.' },
      { speaker: 'M', en: 'Oh no! What happened?', fr: 'Oh non ! Que s’est-il passé ?' },
      { speaker: 'W', en: 'I had written down the wrong departure time.', fr: 'J’avais noté la mauvaise heure de départ.' },
      { speaker: 'M', en: 'Had you checked in online?', fr: 'Tu avais fait l’enregistrement en ligne ?' },
      { speaker: 'W', en: "No, I hadn't. Next time, I'll check everything twice!", fr: 'Non. La prochaine fois, je vérifierai tout deux fois !' }
    ] },

    { type: 'h', text: 'Les mots-signaux du past perfect' },
    { type: 'p', html: 'Certains mots annoncent presque toujours un past perfect. Au TOEIC, repère-les tout de suite : ils te donnent la réponse.' },
    { type: 'table', head: ['Mot', 'Sens', 'Exemple'], rows: [
      ['<b>by the time</b> + prétérit', 'le temps que…, quand (déjà)', '<i>By the time I found the room, the presentation <b>had begun</b>.</i>'],
      ['<b>by</b> + date / heure', 'avant, au plus tard à / en', '<i>By noon, we <b>had answered</b> all the emails.</i>'],
      ['<b>already</b>', 'déjà', '<i>The plane <b>had already landed</b>.</i>'],
      ['<b>just</b>', 'venir de (juste avant)', '<i>She <b>had just left</b> when you called.</i>'],
      ['<b>never … before</b> / <b>ever</b>', 'jamais … auparavant / déjà (question)', '<i>I <b>had never used</b> this software before.</i>'],
      ['<b>not … yet</b>', 'pas encore', '<i>They <b>hadn’t signed</b> the contract yet.</i>'],
      ['<b>before</b> / <b>after</b>', 'avant (que) / après (que)', '<i>After he <b>had checked</b> the figures, he sent the report.</i>'],
      ['<b>It was the first time</b>', 'c’était la première fois que', '<i>It was the first time I <b>had flown</b> business class.</i>']
    ] },
    { type: 'examples', items: [
      { en: 'By the time the technician arrived, we had fixed the problem ourselves.', fr: 'Le temps que le technicien arrive, nous avions réglé le problème nous-mêmes.' },
      { en: 'She had just left when you called.', fr: 'Elle venait de partir quand tu as appelé.', note: '« Je venais de… » = <b>I had just</b> + participe passé. Au présent, « je viens de… » = <i>I have just…</i> (voir « Le present perfect »).' },
      { en: 'By 2020, the company had opened offices in six countries.', fr: 'En 2020, l’entreprise avait (déjà) ouvert des bureaux dans six pays.' },
      { en: 'It was the first time Kenji had visited the head office.', fr: 'C’était la première fois que Kenji visitait le siège.' },
      { en: "They hadn't signed the contract yet when the prices went up.", fr: 'Ils n’avaient pas encore signé le contrat quand les prix ont augmenté.' }
    ] },
    { type: 'box', style: 'tip', title: 'Avec before et after, le past perfect est facultatif', html: 'Comme <b>before</b> et <b>after</b> indiquent déjà l’ordre des actions, le prétérit est souvent suffisant :<br><i>After he <b>checked</b> the figures, he sent the report.</i> = <i>After he <b>had checked</b> the figures, he sent the report.</i><br>Les deux sont corrects ; le past perfect insiste simplement sur le fait que la première action était <b>terminée</b>.' },
    { type: 'box', style: 'warn', title: 'Piège : « c’était la première fois que… »', html: 'Le français met l’imparfait (<i>c’était la première fois que je <b>prenais</b> l’avion</i>), mais l’anglais demande le past perfect :<br><span class="ko">It was the first time I took a plane.</span> → <span class="ok">It was the first time I had taken a plane.</span><br>Au présent, c’est le present perfect : <i>It’s the first time I’ve taken a plane.</i>' },

    { type: 'h', text: 'Aperçu : le past perfect continu' },
    { type: 'p', html: 'Il existe aussi une forme continue : <b>had been</b> + verbe en <b>-ing</b>. Elle insiste sur la <b>durée</b> d’une action qui se déroulait <b>jusqu’à</b> un moment du passé, souvent avec <b>for</b> (+ durée) ou <b>since</b> (+ point de départ). C’est l’équivalent, dans le passé, du present perfect continu (voir « Le present perfect continu »).' },
    { type: 'examples', items: [
      { en: 'I had been waiting for an hour when the bus finally arrived.', fr: 'J’attendais depuis une heure quand le bus est enfin arrivé.', note: 'Le français dit « j’attendais <b>depuis</b> » (imparfait) ; l’anglais dit <b>had been waiting for</b>.' },
      { en: 'She was tired because she had been working all night.', fr: 'Elle était fatiguée parce qu’elle avait travaillé toute la nuit.' },
      { en: 'They had been negotiating since March when they finally reached an agreement.', fr: 'Ils négociaient depuis mars quand ils sont enfin parvenus à un accord.' },
      { en: 'How long had you been working there before you got promoted?', fr: 'Combien de temps avais-tu travaillé là-bas avant d’être promue ?' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : « depuis » + imparfait', html: '<span class="ko">I was waiting since two hours.</span> → <span class="ok">I had been waiting for two hours.</span><br>Rappel : <b>for</b> + durée (<i>for two hours</i>) ; <b>since</b> + point de départ (<i>since 9 a.m.</i>).' },

    { type: 'h', text: 'Aperçu : le past perfect dans le discours rapporté' },
    { type: 'p', html: 'Quand tu rapportes les paroles ou les pensées de quelqu’un au passé (<i>She said that…, I thought that…</i>), le verbe « recule » souvent d’un temps : le prétérit et le present perfect deviennent un <b>past perfect</b>. Tu verras cela en détail dans la leçon « Le discours indirect ».' },
    { type: 'examples', items: [
      { en: 'He said that he had sent the invoice.', fr: 'Il a dit qu’il avait envoyé la facture.', note: 'Paroles d’origine : <i>“I sent the invoice.”</i>' },
      { en: 'She told me she had already booked the room.', fr: 'Elle m’a dit qu’elle avait déjà réservé la salle.', note: 'Paroles d’origine : <i>“I’ve already booked the room.”</i>' },
      { en: 'The manager explained that the supplier had made a mistake.', fr: 'Le responsable a expliqué que le fournisseur avait fait une erreur.' },
      { en: 'Oh, sorry! I thought you had left.', fr: 'Oh, pardon ! Je pensais que tu étais partie.' }
    ] },
    { type: 'box', style: 'tip', title: 'Tu le reverras bientôt', html: 'La structure <b>had</b> + participe passé revient dans le conditionnel 3 et avec <i>wish</i> : <i>If I <b>had known</b>, I would have called you.</i> (Si j’avais su, je t’aurais appelé.) Voir la leçon « Les conditionnels 2 et 3, et wish ».' },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 5</b>, le past perfect apparaît surtout avec <b>by the time</b>, <b>before</b> et <b>already</b> : <i>By the time the shipment arrived, the store ------- closed.</i> → <b>had</b> (le magasin avait fermé avant l’arrivée de la livraison).<br>Méthode : 1) repère le mot-signal ; 2) vérifie que l’autre verbe est au prétérit (<i>arrived</i>) ; 3) élimine <i>has / have</i> (présent) et <i>will</i> (futur).<br>En <b>Parties 3 et 4</b>, écoute bien le petit <b>’d</b> : <i>I’d already sent it</i> = I <b>had</b> already sent it.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• Past perfect = <b>had + participe passé</b>, à toutes les personnes (<i>I’d finished, she hadn’t called, Had they left?</i>).<br>• Il exprime une action <b>antérieure</b> à un autre moment du passé : c’est le plus-que-parfait français.<br>• « Il était parti » = <i>he <b>had</b> left</i> (jamais <i>was</i>).<br>• Signaux : <b>by the time, by + date, already, just, never… before, not… yet, It was the first time</b>.<br>• Actions racontées dans l’ordre → prétérit ; retour en arrière → past perfect.<br>• Durée jusqu’à un moment passé : <b>had been + -ing</b> (<i>I had been waiting for an hour</i>).' }
  ],
  exercises: [
    { type: 'mcq', q: 'She ___ already left when I called.', options: ['was', 'had', 'has', 'did'], answer: 1, explain: 'Past perfect = <b>had</b> + participe passé (<i>left</i>) : elle était partie <b>avant</b> mon appel. En anglais, « était partie » ne se dit jamais avec <i>was</i>.' },
    { type: 'gap', q: 'A: Had they left when you arrived? B: Yes, they ___.', answers: ['had'], explain: 'Réponse courte au past perfect : on reprend l’auxiliaire <b>had</b> (<i>Yes, they had. / No, they hadn’t.</i>).' },
    { type: 'mcq', q: 'When I arrived, the meeting <b>had started</b>. Que comprends-tu ?', options: ['La réunion a commencé au moment où je suis arrivée.', 'La réunion avait déjà commencé quand je suis arrivée.', 'La réunion n’avait pas encore commencé.'], answer: 1, explain: '<b>Had started</b> (past perfect) = action <b>antérieure</b> : la réunion a commencé d’abord, puis je suis arrivée. Avec <i>started</i> (prétérit), elle aurait commencé à mon arrivée.' },
    { type: 'mcq', q: 'Comment traduire « Elle était partie. » ?', options: ['She was left.', 'She had left.', 'She has left.', 'She was leaving.'], answer: 1, explain: 'Le plus-que-parfait français se traduit par <b>had</b> + participe passé, même quand le français utilise « être ». <i>She was left</i> = on l’a laissée ; <i>She was leaving</i> = elle partait.' },
    { type: 'gap', q: 'When Ms. Diallo reached the conference room, the presentation ___ (already / begin).', answers: ['had already begun', 'had begun already'], explain: 'La présentation a commencé <b>avant</b> son arrivée → past perfect : <b>had already begun</b>. <i>Begin</i> est irrégulier : begin → began → <b>begun</b>.' },
    { type: 'gap', q: 'When the client called, Omar ___ (not / read) the email yet.', answers: ["hadn't read", 'had not read'], explain: 'À ce moment du passé, la lecture n’avait pas encore eu lieu → <b>hadn’t read</b> (<i>had not read</i>). <i>Read</i> : même orthographe aux trois formes.' },
    { type: 'mcq', q: 'Observe le ’d : « I’d already eaten when they arrived. » Ici, <b>I’d</b> = …', options: ['I would', 'I had', 'I did'], answer: 1, explain: '<b>’d + participe passé</b> (<i>eaten</i>) = <b>had</b> : « J’avais déjà mangé quand ils sont arrivés. » Avec la base verbale (<i>I’d eat</i>), ce serait <i>would</i>.' },
    { type: 'gap', q: 'She ___ (never / travel) abroad before she started this job.', answers: ['had never traveled', 'had never travelled', "'d never traveled", "'d never travelled"], explain: '<b>Never … before</b> + action passée (<i>started</i>) → past perfect : <b>had never traveled</b> (orthographe britannique : <i>travelled</i>).' },
    { type: 'order', answer: 'Had you ever used this software before?', fr: 'Avais-tu déjà utilisé ce logiciel auparavant ?', explain: 'Question au past perfect : <b>Had</b> + sujet + (<i>ever</i>) + participe passé + reste de la phrase.' },
    { type: 'listen', say: 'When Mr. Okafor got to the airport, his flight had already left, so he took a later one.', accent: 'en-GB', q: 'Qu’est-il arrivé à M. Okafor ?', options: ['Il est arrivé à l’aéroport juste avant le départ de son vol.', 'Son vol était déjà parti : il a pris un vol plus tard.', 'Son vol a été annulé à cause de la météo.'], answer: 1, explain: '<i>His flight <b>had already left</b></i> = son vol était déjà parti quand il est arrivé ; <i>he took a later one</i> = il a pris un vol plus tard.' },
    { type: 'order', answer: 'The meeting had already started when I arrived.', alts: ['When I arrived the meeting had already started', 'The meeting had started already when I arrived', 'When I arrived the meeting had started already', 'I arrived when the meeting had already started', 'I arrived when the meeting had started already'], fr: 'La réunion avait déjà commencé quand je suis arrivée.', explain: 'Action la plus ancienne (la réunion commence) → <b>had already started</b> ; action plus récente → prétérit (<i>arrived</i>). La partie avec <i>when</i> peut aussi se placer en tête de phrase.' },
    { type: 'gap', q: 'The candidates ___ (wait, forme continue) for 40 minutes when the interviewer finally arrived.', answers: ['had been waiting'], explain: 'Durée d’une action jusqu’à un moment du passé → past perfect continu : <b>had been waiting</b> (« ils attendaient depuis 40 minutes »).' },
    { type: 'dictation', say: 'She said she had lost her badge.', accent: 'en-AU', answers: ['She said she had lost her badge', "She said she'd lost her badge"], explain: 'Discours rapporté : « J’ai perdu mon badge. » devient <i>She said she <b>had lost</b> her badge.</i> (Elle a dit qu’elle avait perdu son badge.)' },
    { type: 'mcq', q: 'By the time the shipment arrived, the store ------- closed. <small>(style TOEIC)</small>', options: ['has', 'had', 'have', 'will have'], answer: 1, explain: '<b>By the time</b> + prétérit (<i>arrived</i>) → l’autre action, antérieure, est au past perfect : <b>had closed</b>. <i>Has / have</i> (présent) et <i>will have</i> (futur) ne vont pas avec un récit au passé.' },
    { type: 'mcq', q: '------- the manager arrived, the team had already set up the room. <small>(style TOEIC)</small>', options: ['Since', 'During', 'By the time', 'Until'], answer: 2, explain: '<b>By the time</b> (le temps que…) + prétérit, puis past perfect avec <i>already</i>. <i>During</i> est suivi d’un nom, pas d’une proposition ; <i>since</i> et <i>until</i> n’ont pas de sens ici.' },
    { type: 'mcq', q: 'Before the merger was announced, the two companies ------- in secret for several months. <small>(style TOEIC)</small>', options: ['have been negotiating', 'had been negotiating', 'are negotiating', 'will be negotiating'], answer: 1, explain: 'Durée (<i>for several months</i>) jusqu’à un moment passé (<i>was announced</i>) → past perfect continu : <b>had been negotiating</b>. <i>Have been negotiating</i> s’arrêterait au présent.' }
  ]
});
