LE.register({
  id: 'g25',
  kind: 'grammar',
  title: 'Present perfect ou prétérit ? (for, since, yet, already…)',
  subtitle: 'Le grand piège des francophones : traduire le passé composé et « depuis »',
  level: 'B1',
  minutes: 50,
  goals: [
    'Choisir entre <b>prétérit</b> et <b>present perfect</b> grâce aux indicateurs de temps (<i>yesterday, ago, last week</i> / <i>so far, recently, yet</i>)',
    'Traduire « depuis » : <b>for</b> + durée, <b>since</b> + point de départ, avec le present perfect (<i>I’ve worked here since 2019</i>)',
    'Poser la question <i>How long have you…?</i> et dire <i>It’s the first time I’ve…</i>',
    'Réussir les questions de temps de la Partie 5 du TOEIC'
  ],
  blocks: [
    { type: 'h', text: 'Un seul temps en français, deux en anglais' },
    { type: 'p', html: 'En français, le <b>passé composé</b> sert à tout : « J’ai rencontré M. Ito hier » et « J’ai déjà rencontré M. Ito ». En anglais, ces deux phrases utilisent <b>deux temps différents</b> : le <b>prétérit</b> (<i>I met</i>) et le <b>present perfect</b> (<i>I have met</i>). C’est l’erreur n°1 des francophones, et le TOEIC le sait ! Une seule question à te poser : <b>est-ce que je parle d’un moment passé, terminé et précis ?</b>' },
    { type: 'table', head: ['Français', 'Anglais', 'Temps', 'Pourquoi ?'], rows: [
      ['J’ai rencontré M. Ito <b>hier</b>.', 'I <b>met</b> Mr. Ito yesterday.', 'prétérit', 'moment précis et terminé (<i>hier</i>)'],
      ['J’ai <b>déjà</b> rencontré M. Ito.', 'I<b>’ve</b> already <b>met</b> Mr. Ito.', 'present perfect', 'aucun moment : c’est une expérience'],
      ['Il a quitté l’entreprise <b>en 2021</b>.', 'He <b>left</b> the company in 2021.', 'prétérit', 'date passée'],
      ['Il a quitté l’entreprise. (il n’est plus là)', 'He<b>’s left</b> the company.', 'present perfect', 'une nouvelle, un résultat présent'],
      ['Nous avons signé trois contrats <b>le mois dernier</b>.', 'We <b>signed</b> three contracts last month.', 'prétérit', 'période terminée'],
      ['Nous avons signé trois contrats <b>ce mois-ci</b>.', 'We<b>’ve signed</b> three contracts this month.', 'present perfect', 'période pas encore terminée']
    ] },
    { type: 'box', style: 'tip', title: 'La question magique : « Quand ? »', html: '• La phrase (ou le contexte) donne un moment passé <b>terminé</b> → <b>prétérit</b>.<br>• Pas de moment, ou une période qui <b>n’est pas finie</b> (qui inclut maintenant) → <b>present perfect</b>.' },

    { type: 'h', text: 'Le prétérit : un moment passé, terminé et précis' },
    { type: 'p', html: 'On emploie le prétérit quand l’action se situe à un <b>moment passé terminé</b>, qu’on le nomme (<i>yesterday, last week, in 2020, on Monday, at 9 a.m., two days ago</i>) ou que le contexte le rende évident (<i>when I was a student</i>, une histoire qu’on raconte). C’est aussi le temps des questions <b>When…?</b> et <b>What time…?</b>' },
    { type: 'examples', items: [
      { en: 'We signed the contract last Tuesday.', fr: 'Nous avons signé le contrat mardi dernier.' },
      { en: 'Ms. Ferreira joined the company three years ago.', fr: 'Mme Ferreira est entrée dans l’entreprise il y a trois ans.', note: '<b>ago</b> = « il y a » : toujours avec le prétérit.' },
      { en: 'When did you arrive? I arrived at 8:30.', fr: 'Quand es-tu arrivée ? Je suis arrivée à 8 h 30.' },
      { en: 'I worked in London when I was younger.', fr: 'J’ai travaillé à Londres quand j’étais plus jeune.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : jamais de moment précis avec le present perfect', html: '<span class="ko">I have met him yesterday.</span> → <span class="ok">I met him yesterday.</span><br><span class="ko">She has left two days ago.</span> → <span class="ok">She left two days ago.</span><br><span class="ko">When have you arrived?</span> → <span class="ok">When did you arrive?</span><br>Même si le français dit « j’ai rencontré », « elle est partie », « es-tu arrivée », l’anglais veut le <b>prétérit</b> dès qu’il y a un moment passé précis.' },

    { type: 'h', text: 'Le present perfect : sans date, ou période pas terminée' },
    { type: 'p', html: 'On emploie le present perfect quand on ne donne <b>pas de moment précis</b> (expérience, nouvelle, résultat), ou quand la période <b>n’est pas terminée</b> : <i>today, this week, this year, so far</i> (jusqu’ici), <i>recently / lately</i> (récemment, ces derniers temps)… Les mots <i>ever, never, already, yet, just</i> l’accompagnent aussi très souvent (voir la leçon « Le present perfect »).' },
    { type: 'examples', items: [
      { en: "We've received twenty applications so far.", fr: 'Nous avons reçu vingt candidatures jusqu’ici.' },
      { en: 'Have you seen Mr. Haddad today?', fr: 'As-tu vu M. Haddad aujourd’hui ?' },
      { en: 'Sales have gone up recently.', fr: 'Les ventes ont augmenté récemment.' },
      { en: "I haven't taken a single day off this month.", fr: 'Je n’ai pas pris un seul jour de congé ce mois-ci.' },
      { en: "This is the best hotel I've ever stayed in.", fr: 'C’est le meilleur hôtel dans lequel j’aie jamais séjourné.', note: 'Superlatif + <b>ever</b> → present perfect.' }
    ] },
    { type: 'table', head: ['Prétérit (période terminée)', 'Present perfect (pas de date, ou période pas terminée)'], rows: [
      ['<b>yesterday</b>', '<b>today</b>'],
      ['<b>last</b> week / month / year', '<b>this</b> week / month / year'],
      ['two days <b>ago</b>, a year <b>ago</b>', '<b>recently</b>, <b>lately</b>'],
      ['<b>in</b> 2020, <b>on</b> Monday, <b>at</b> 10 a.m.', '<b>so far</b>, <b>up to now</b>'],
      ['<b>when</b> I was a student, <b>when</b> he called', '<b>ever</b>, <b>never</b>, <b>before</b> (= auparavant)'],
      ['<b>When…?</b> <b>What time…?</b> <b>How long ago…?</b>', '<b>already</b>, <b>yet</b>, <b>just</b>'],
      ['<b>for</b> + durée terminée (<i>I lived there for two years.</i>)', '<b>for</b> / <b>since</b> jusqu’à maintenant (<i>I’ve lived here for two years.</i>)']
    ], caption: 'Le tableau de décision : cherche l’indicateur de temps, il te donne presque toujours la réponse. Nuance : <i>recently</i> s’emploie aussi avec le prétérit pour un fait précis (<i>The company recently announced a new CEO.</i>).' },
    { type: 'box', style: 'tip', title: '« This morning » : ça dépend de l’heure !', html: 'Il est 10 h (la matinée continue) : <i>I<b>’ve had</b> three coffees this morning.</i><br>Il est 15 h (la matinée est finie) : <i>I <b>had</b> three coffees this morning.</i><br>Toujours la même logique : période <b>terminée</b> → prétérit ; période <b>en cours</b> → present perfect.' },

    { type: 'h', text: 'Annoncer au present perfect, raconter au prétérit' },
    { type: 'p', html: 'Dans une conversation ou un e-mail, on commence souvent par une <b>nouvelle</b> au present perfect (pas de moment), puis on donne les <b>détails</b> au prétérit : quand, où, comment. Dès que le moment est connu, on passe au prétérit.' },
    { type: 'examples', items: [
      { en: "We've hired a new sales manager. She started on Monday.", fr: 'Nous avons embauché une nouvelle directrice commerciale. Elle a commencé lundi.' },
      { en: 'Have you ever been to Mexico? Yes, I went there last year.', fr: 'Es-tu déjà allée au Mexique ? Oui, j’y suis allée l’année dernière.' },
      { en: "I've lost my badge. I think I dropped it in the parking lot.", fr: 'J’ai perdu mon badge. Je crois que je l’ai fait tomber sur le parking.' },
      { en: 'There has been an accident on Highway 9. It happened at 7 a.m.', fr: 'Il y a eu un accident sur l’autoroute 9. C’est arrivé à 7 h.' }
    ] },

    { type: 'h', text: '« Depuis » : for, since et le present perfect' },
    { type: 'p', html: 'Deuxième grand piège : pour une situation qui a <b>commencé dans le passé et qui continue</b>, le français utilise le <b>présent</b> + « depuis » (<i>je travaille ici depuis 2019</i>). L’anglais ne peut pas utiliser le présent ici : il faut le <b>present perfect</b> (simple ou continu), car la situation relie le passé et le présent.' },
    { type: 'table', head: ['Français', 'Faux', 'Correct'], rows: [
      ['Je travaille ici depuis 2019.', '<span class="ko">I work here since 2019.</span>', 'I<b>’ve worked</b> here since 2019.<br>I<b>’ve been working</b> here since 2019.'],
      ['Je la connais depuis dix ans.', '<span class="ko">I know her since ten years.</span>', 'I<b>’ve known</b> her <b>for</b> ten years.'],
      ['Nous attendons depuis une heure.', '<span class="ko">We wait since one hour.</span>', 'We<b>’ve been waiting</b> <b>for</b> an hour.'],
      ['Il est malade depuis lundi.', '<span class="ko">He is sick since Monday.</span>', 'He<b>’s been</b> sick since Monday.']
    ] },
    { type: 'table', head: ['<b>for</b> + durée (combien de temps ?)', '<b>since</b> + point de départ (depuis quand ?)'], rows: [
      ['for two hours', 'since 9 a.m.'],
      ['for three days', 'since Monday'],
      ['for six months', 'since January'],
      ['for ten years', 'since 2016'],
      ['for a long time', 'since the meeting'],
      ['for ages (depuis une éternité)', 'since I joined the company']
    ], caption: 'Après <b>since</b>, on peut mettre une date, un jour, un événement (<i>since the meeting</i>) ou une proposition au <b>prétérit</b> (<i>since I joined the company</i> = depuis que je suis entrée dans l’entreprise).' },
    { type: 'examples', items: [
      { en: 'Mr. Petrov has been our supplier for twelve years.', fr: 'M. Petrov est notre fournisseur depuis douze ans.' },
      { en: "I haven't seen Julia since the conference.", fr: 'Je n’ai pas vu Julia depuis la conférence.' },
      { en: 'The office has been closed since Friday.', fr: 'Le bureau est fermé depuis vendredi.' },
      { en: 'She has worked here since she finished college.', fr: 'Elle travaille ici depuis qu’elle a fini ses études.', note: '<b>since</b> + proposition au prétérit (<i>she finished</i>).' },
      { en: "We've been waiting for the technician for two hours.", fr: 'Nous attendons le technicien depuis deux heures.' }
    ] },
    { type: 'box', style: 'tip', title: 'Simple ou continu ?', html: 'Avec les verbes d’action (<i>work, wait, live, study</i>), les deux formes sont possibles : <i>I’ve worked here since 2019</i> = <i>I’ve been working here since 2019</i>. La forme continue (<b>have been + -ing</b>) insiste sur la durée de l’activité.<br>Avec les verbes d’état (<i>be, have</i> au sens de « posséder », <i>know, like, own</i>), on utilise seulement la forme simple : <i>I’ve <b>known</b> her for years</i> (jamais <i>I’ve been knowing</i>). Détails dans la leçon « Le present perfect continu ».' },
    { type: 'box', style: 'warn', title: 'Piège : for, since ou ago ?', html: '• <b>ago</b> = « il y a » → prétérit : <i>I met her ten years <b>ago</b>.</i> (Je l’ai rencontrée il y a dix ans.)<br>• <b>for</b> + present perfect = « depuis » (ça continue) : <i>I<b>’ve known</b> her <b>for</b> ten years.</i> (Je la connais depuis dix ans.)<br>• <b>for</b> + prétérit = « pendant » (c’est fini) : <i>I <b>lived</b> in Rome <b>for</b> two years.</i> (J’ai vécu à Rome pendant deux ans.)<br>• <span class="ko">since ten years</span> → <span class="ok">for ten years</span> : <i>since</i> est toujours suivi d’un point de départ, jamais d’une durée.' },

    { type: 'h', text: 'How long…? et It’s the first time…' },
    { type: 'p', html: 'Pour demander « depuis combien de temps ? », on dit <b>How long</b> + present perfect : <i>How long <b>have</b> you <b>worked</b> here?</i> On répond avec <b>for</b> ou <b>since</b>. Après <b>It’s the first time</b> (c’est la première fois que…), l’anglais utilise aussi le present perfect, alors que le français met le présent.' },
    { type: 'examples', items: [
      { en: 'How long have you worked for Veloria Logistics? For five years.', fr: 'Depuis combien de temps travailles-tu chez Veloria Logistics ? Depuis cinq ans.' },
      { en: 'How long has she been the team leader? Since March.', fr: 'Depuis quand est-elle responsable d’équipe ? Depuis mars.' },
      { en: "It's the first time I've given a presentation in English.", fr: 'C’est la première fois que je fais une présentation en anglais.' },
      { en: 'This is the second time the delivery has been late this month.', fr: 'C’est la deuxième fois ce mois-ci que la livraison est en retard.' },
      { en: 'How long ago did you move here? Two years ago.', fr: 'Il y a combien de temps que tu as emménagé ici ? Il y a deux ans.', note: '<b>How long ago…?</b> (il y a combien de temps ?) → prétérit.' }
    ] },
    { type: 'box', style: 'warn', title: 'Pièges : « Depuis combien de temps… ? » et « C’est la première fois que… »', html: '<span class="ko">How long do you work here?</span> → <span class="ok">How long have you worked here?</span><br><span class="ko">Since how long…?</span> n’existe pas : on dit <b>How long…?</b><br><span class="ko">It’s the first time I come here.</span> → <span class="ok">It’s the first time I’ve come here.</span> / <span class="ok">It’s the first time I’ve been here.</span>' },
    { type: 'dialog', title: 'Un entretien d’embauche', lines: [
      { speaker: 'W', en: 'So, Mr. Osei, how long have you worked in logistics?', fr: 'Alors, monsieur Osei, depuis combien de temps travaillez-vous dans la logistique ?' },
      { speaker: 'M', en: 'For about eight years. I started as a warehouse assistant right after college.', fr: 'Depuis environ huit ans. J’ai commencé comme assistant d’entrepôt juste après mes études.' },
      { speaker: 'W', en: 'And how long have you been with your current employer?', fr: 'Et depuis quand êtes-vous chez votre employeur actuel ?' },
      { speaker: 'M', en: 'Since 2021. Before that, I worked for a shipping company in Accra.', fr: 'Depuis 2021. Avant cela, j’ai travaillé pour une compagnie de transport maritime à Accra.' },
      { speaker: 'W', en: 'Have you ever managed a team?', fr: 'Avez-vous déjà dirigé une équipe ?' },
      { speaker: 'M', en: 'Yes, I have. Last year, I led a team of twelve people on a big project.', fr: 'Oui. L’année dernière, j’ai dirigé une équipe de douze personnes sur un gros projet.' },
      { speaker: 'W', en: 'Great. Have you had a chance to look at our inventory software yet?', fr: 'Très bien. Avez-vous déjà eu l’occasion de regarder notre logiciel de gestion des stocks ?' },
      { speaker: 'M', en: "Not yet, but I've already watched a few online tutorials about it.", fr: 'Pas encore, mais j’ai déjà regardé quelques tutoriels en ligne à son sujet.' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 5</b>, les questions de temps sont très fréquentes. Méthode en 3 étapes :<br>1) Cherche l’<b>indicateur de temps</b> : <i>ago, last, yesterday, in 2019</i> → prétérit ; <i>since, for (jusqu’à maintenant), so far, yet, already</i> → present perfect.<br>2) Vérifie le <b>sujet</b> : <i>has</i> (singulier) ou <i>have</i> (pluriel).<br>3) Élimine les formes impossibles (présent simple avec <i>since</i>, present perfect avec <i>ago</i>).<br>En <b>Partie 2</b>, <i>How long have you…?</i> attend <i>For three years.</i> ou <i>Since June.</i> ; la réponse <i>Three years ago.</i> répond à une autre question (<i>When did you…?</i>) : c’est un piège classique.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• Moment passé <b>terminé et précis</b> (<i>yesterday, last…, ago, in 2020, When…?</i>) → <b>prétérit</b>.<br>• <b>Pas de moment</b> ou période <b>non terminée</b> (<i>today, this week, so far, recently, ever, never, already, yet, just</i>) → <b>present perfect</b>.<br>• « Depuis » + présent français → <b>present perfect</b> anglais : <i>I’ve worked here <b>since</b> 2019 / <b>for</b> six years</i> (jamais <i>I work here since…</i>).<br>• <b>for</b> + durée ; <b>since</b> + point de départ ; <b>ago</b> (il y a) + prétérit.<br>• <b>How long have you…?</b> et <b>It’s the first time I’ve…</b><br>• On annonce la nouvelle au present perfect, on raconte les détails au prétérit.' }
  ],
  exercises: [
    { type: 'mcq', q: 'We ___ the contract last Tuesday.', options: ['have signed', 'signed', 'have sign'], answer: 1, explain: '<i>Last Tuesday</i> = moment passé précis et terminé → <b>prétérit</b> : <i>signed</i>. Le present perfect est impossible avec une date passée.' },
    { type: 'gap', q: 'Ms. Ferreira ___ (leave) the office two hours ago.', answers: ['left'], explain: '<b>Ago</b> (il y a) → prétérit. <i>Leave</i> est irrégulier : leave → <b>left</b> → left.' },
    { type: 'gap', q: "We've had this printer ___ ten years. (for / since)", answers: ['for'], explain: '<i>Ten years</i> est une <b>durée</b> → <b>for</b>. <i>Since</i> est suivi d’un point de départ (<i>since 2016</i>).' },
    { type: 'mcq', q: 'Quelle est la bonne traduction de « Je travaille ici depuis 2019 » ?', options: ['I work here since 2019.', "I've worked here since 2019.", 'I worked here since 2019.', "I'm working here since 2019."], answer: 1, explain: 'Situation commencée dans le passé qui continue → <b>present perfect</b> + <b>since</b> (point de départ). Le présent (<i>I work, I’m working</i>) et le prétérit sont impossibles ici. <i>I’ve been working here since 2019</i> serait aussi correct.' },
    { type: 'mcq', q: 'Quelle est la bonne traduction de « Je l’ai rencontrée il y a dix ans » ?', options: ['I met her ten years ago.', "I've met her ten years ago.", "I've met her for ten years.", 'I met her since ten years.'], answer: 0, explain: '« Il y a » = <b>ago</b>, toujours avec le <b>prétérit</b> : <i>I met her ten years ago</i>. Le present perfect ne s’emploie jamais avec <i>ago</i>.' },
    { type: 'gap', q: 'A: When ___ (you / arrive) in Chicago? B: Last night.', answers: ['did you arrive'], explain: '<b>When…?</b> demande un moment précis (ici dans le passé : <i>last night</i>) → <b>prétérit</b> : <i>When did you arrive?</i> On ne dit jamais <i>When have you arrived?</i>' },
    { type: 'mcq', q: "I've lost my badge. I think I ___ it in the cafeteria at lunchtime.", options: ['have left', 'left', 'leave', 'am leaving'], answer: 1, explain: 'On annonce la nouvelle au present perfect (<i>I’ve lost</i>), puis on donne un détail avec un moment précis (<i>at lunchtime</i>) → <b>prétérit</b> : <i>left</i>.' },
    { type: 'gap', q: 'A: How long ___ (you / know) Mr. Petrov? B: Since we were in college.', answers: ['have you known'], explain: '<b>How long</b> + present perfect pour une situation qui dure encore (la réponse commence par <i>since</i>). <i>Know</i> est un verbe d’état : pas de forme en -ing. Participe passé : <b>known</b>.' },
    { type: 'gap', q: "It's the first time I ___ (be) to this conference center.", answers: ["'ve been", 'have been', "'ve ever been", 'have ever been'], explain: 'Après <b>It’s the first time</b>, on met le <b>present perfect</b> (alors que le français dit « c’est la première fois que je viens »). Participe passé de <i>be</i> : <b>been</b>.' },
    { type: 'listen', accent: 'en-CA', say: "I've lived in Montreal since 2015, but I've only worked for this company for two years.", q: 'Qu’as-tu compris ?', options: ['La personne habite à Montréal depuis deux ans.', 'La personne travaille dans cette entreprise depuis deux ans.', 'La personne a travaillé deux ans à Montréal, puis elle est partie.'], answer: 1, explain: '<i>I’ve only worked for this company <b>for two years</b></i> = elle travaille dans cette entreprise depuis deux ans (et elle y travaille toujours). Elle habite à Montréal <b>depuis 2015</b>.' },
    { type: 'order', answer: 'How long have you worked for this company?', fr: 'Depuis combien de temps travailles-tu pour cette entreprise ?', explain: 'Question : <b>How long</b> + <b>have</b> + sujet + participe passé. Jamais <i>How long do you work…?</i> pour dire « depuis combien de temps ».' },
    { type: 'order', answer: 'I have not seen her since the meeting.', alts: ['Since the meeting I have not seen her.'], fr: 'Je ne l’ai pas vue depuis la réunion.', explain: 'Négation au present perfect : <b>have not</b> + participe passé (<i>seen</i>), puis <b>since</b> + point de départ (<i>the meeting</i>).' },
    { type: 'dictation', accent: 'en-GB', say: 'We have been partners for ten years.', answers: ['We have been partners for ten years', "We've been partners for ten years", 'We have been partners for 10 years', "We've been partners for 10 years"], explain: '« Nous sommes partenaires depuis dix ans. » Situation qui continue → present perfect (<i>have been</i>) + <b>for</b> + durée.' },
    { type: 'mcq', q: 'Mr. Tanaka ------- as our regional director since last April. <small>(style TOEIC)</small>', options: ['served', 'has served', 'serves', 'is serving'], answer: 1, explain: '<b>Since</b> + point de départ, et la situation continue → <b>present perfect</b> : <i>has served</i>. Attention : <i>last April</i> fait penser au prétérit, mais ici c’est le point de départ après <i>since</i>.' },
    { type: 'mcq', q: 'So far this year, the factory ------- more than 40,000 units. <small>(style TOEIC)</small>', options: ['produced', 'has produced', 'produces', 'was producing'], answer: 1, explain: '<b>So far this year</b> (jusqu’ici cette année) = période pas terminée → <b>present perfect</b> : <i>has produced</i>.' },
    { type: 'mcq', q: 'Sales have increased steadily ------- the new manager arrived. <small>(style TOEIC)</small>', options: ['for', 'since', 'ago', 'during'], answer: 1, explain: '<b>Since</b> + proposition au prétérit (<i>the new manager arrived</i>) = point de départ. <i>For</i> est suivi d’une durée, <i>during</i> d’un nom, et <i>ago</i> se place après une durée (<i>two years ago</i>).' }
  ]
});
