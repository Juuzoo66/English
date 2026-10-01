LE.register({
  id: 'g42',
  kind: 'grammar',
  title: 'Used to, be used to, get used to et le causatif',
  subtitle: 'Parler de ce qui a changé, de ses habitudes, et de ce qu’on fait faire par d’autres',
  level: 'B2',
  minutes: 50,
  goals: [
    'Raconter ce qui était vrai avant avec <b>used to</b> (et <b>would</b>) : <i>I used to work in Lyon.</i>',
    'Distinguer <b>be used to</b> (être habitué à) et <b>get used to</b> (s’habituer à), suivis d’un nom ou d’un verbe en <b>-ing</b>',
    'Dire qu’on fait faire quelque chose : <i>I had my car repaired.</i>',
    'Construire sans erreur <i>have / make / let someone <b>do</b></i> et <i>get someone <b>to do</b></i>'
  ],
  blocks: [
    { type: 'h', text: 'Used to : ce qui était vrai avant (et ne l’est plus)' },
    { type: 'p', html: '<b>Used to</b> + base verbale (le verbe sans rien : <i>work, be, have</i>) sert à parler d’une <b>habitude</b> ou d’une <b>situation passée</b> qui n’existe plus aujourd’hui. En français, on utilise l’imparfait, souvent avec « avant » ou « autrefois » : « Avant, je travaillais à Lyon. » → <i>I <b>used to work</b> in Lyon.</i> Sous-entendu : ce n’est plus le cas. <i>Used to</i> a la même forme à toutes les personnes : <i>I / she / they used to</i>.' },
    { type: 'examples', items: [
      { en: 'I used to work in Lyon.', fr: 'Avant, je travaillais à Lyon.', note: 'Sous-entendu : maintenant, je travaille ailleurs.' },
      { en: 'She used to be a teacher.', fr: 'Elle était professeure avant.' },
      { en: 'We used to have an office downtown.', fr: 'Autrefois, nous avions un bureau en centre-ville.' },
      { en: 'This building used to be a factory.', fr: 'Ce bâtiment était autrefois une usine.' },
      { en: 'He used to smoke, but he gave up last year.', fr: 'Il fumait avant, mais il a arrêté l’année dernière.' }
    ] },
    { type: 'table', head: ['Forme', 'Construction', 'Exemple'], rows: [
      ['Affirmative', 'used to + base verbale', 'I <b>used to travel</b> a lot for work.'],
      ['Négative', 'didn’t use to + base verbale<br><small>ou never used to + base verbale</small>', 'I <b>didn’t use to like</b> coffee.<br>I <b>never used to like</b> coffee.'],
      ['Question', 'Did + sujet + use to + base verbale ?', '<b>Did</b> you <b>use to work</b> here?'],
      ['Question avec mot interrogatif', 'Wh- + did + sujet + use to… ?', 'Where <b>did</b> you <b>use to live</b>?'],
      ['Réponse courte', 'Yes, I did. / No, I didn’t.', 'Did she use to work in sales? Yes, she did.']
    ], caption: '<i>Used to</i> se prononce « youss-teu », avec un <b>s</b> sifflant (pas de son « z »).' },
    { type: 'box', style: 'warn', title: 'Pièges de used to', html: '• <b>Pas de présent</b> : <span class="ko">I use to get up at 7.</span> → pour une habitude actuelle, on emploie le présent simple : <span class="ok">I usually get up at 7.</span><br>• Après <b>did / didn’t</b>, on écrit <b>use to</b>, sans <i>d</i> (c’est <i>did</i> qui porte le passé) : <span class="ko">Did you used to…?</span> → <span class="ok">Did you use to…?</span><br>• Pas de <i>used to</i> pour une action <b>unique</b> ou avec une <b>durée précise</b> : <span class="ko">I used to live in Rome for two years.</span> → <span class="ok">I lived in Rome for two years.</span>' },

    { type: 'h', text: 'Would : raconter des habitudes passées' },
    { type: 'p', html: 'Pour des <b>actions répétées</b> dans le passé, on peut aussi utiliser <b>would</b> + base verbale. C’est un peu plus littéraire et très fréquent quand on raconte des souvenirs. Mais attention : <i>would</i> ne fonctionne <b>que pour les actions</b>, jamais pour les <b>états</b> (<i>be</i>, <i>have</i> au sens de « posséder », <i>live, know, like, believe…</i>). Pour un état, seul <i>used to</i> est possible. Autre condition : le cadre passé doit déjà être posé (<i>When I was a student…</i>, <i>Every Friday…</i>). Sans ce contexte, <i>I would take the bus</i> serait compris comme un conditionnel (« je prendrais le bus »).' },
    { type: 'examples', items: [
      { en: 'When I worked in Tokyo, I would take the train at six every morning.', fr: 'Quand je travaillais à Tokyo, je prenais le train à six heures tous les matins.' },
      { en: 'Every Friday, the whole team would have lunch together.', fr: 'Tous les vendredis, toute l’équipe déjeunait ensemble.', note: '<i>have lunch</i> = une action → <i>would</i> possible.' },
      { en: 'My first boss would always check every detail.', fr: 'Mon premier patron vérifiait toujours chaque détail.' },
      { en: 'I used to have a long commute.', fr: 'Avant, j’avais un long trajet pour aller au travail.', note: '<i>have a long commute</i> décrit une situation (un <b>état</b>), pas une action → <i>used to</i> seulement.' }
    ] },
    { type: 'table', head: ['Situation passée', 'used to', 'would', 'Prétérit simple'], rows: [
      ['Action répétée (habitude)', '<span class="ok">✓</span> I used to take the bus.', '<span class="ok">✓</span> I would take the bus.', '<span class="ok">✓</span> I took the bus every day.'],
      ['État (be, have, live, know…)', '<span class="ok">✓</span> I used to live in Nice.', '<span class="ko">✗</span>', '<span class="ok">✓</span> I lived in Nice.'],
      ['Action unique', '<span class="ko">✗</span>', '<span class="ko">✗</span>', '<span class="ok">✓</span> I moved to Nice in 2015.'],
      ['Durée précise, nombre de fois', '<span class="ko">✗</span>', '<span class="ko">✗</span>', '<span class="ok">✓</span> I lived there for six years.']
    ], caption: 'Le prétérit simple marche toujours ; <i>used to</i> insiste sur le fait que c’est <b>terminé</b>.' },

    { type: 'h', text: 'Be used to : être habitué à' },
    { type: 'p', html: '<b>Be used to</b> veut dire « être habitué à ». Ici, <b>to</b> est une <b>préposition</b> (comme « à » en français) : il est donc suivi d’un <b>nom</b>, d’un <b>pronom</b> ou d’un verbe en <b>-ing</b>, jamais de la base verbale. Le verbe <b>be</b> se conjugue normalement : <i>I’m used to, she was used to, they’ll be used to…</i>' },
    { type: 'examples', items: [
      { en: "I'm used to working late.", fr: 'J’ai l’habitude de travailler tard.' },
      { en: "She isn't used to the cold weather yet.", fr: 'Elle n’est pas encore habituée au froid.' },
      { en: 'Are you used to your new job?', fr: 'Tu es habituée à ton nouveau travail ?' },
      { en: 'Our agents are used to dealing with difficult customers.', fr: 'Nos conseillers ont l’habitude de gérer des clients difficiles.' }
    ] },

    { type: 'h', text: 'Get used to : s’habituer à' },
    { type: 'p', html: '<b>Get used to</b> = « s’habituer à » : c’est le <b>processus</b>, le changement. Même construction que <i>be used to</i> (nom, pronom ou <b>-ing</b>), et <b>get</b> se conjugue à tous les temps : <i>I’m getting used to…</i> (je suis en train de m’habituer), <i>I got used to…</i> (je me suis habituée), <i>You’ll get used to it.</i> (Tu t’y habitueras.)' },
    { type: 'examples', items: [
      { en: "You'll get used to the new software.", fr: 'Tu t’habitueras au nouveau logiciel.' },
      { en: "I'm slowly getting used to working in English.", fr: 'Je m’habitue peu à peu à travailler en anglais.' },
      { en: 'It took me months to get used to the noise.', fr: 'Il m’a fallu des mois pour m’habituer au bruit.' },
      { en: "I can't get used to getting up so early.", fr: 'Je n’arrive pas à m’habituer à me lever si tôt.' }
    ] },
    { type: 'table', head: ['Structure', 'Sens', 'Suivi de', 'Exemple'], rows: [
      ['<b>used to</b>', 'habitude ou état passé, terminé', 'base verbale', 'I <b>used to work</b> in Lyon.'],
      ['<b>would</b>', 'habitude passée (actions seulement)', 'base verbale', 'Every summer, we <b>would visit</b> our suppliers in Asia.'],
      ['<b>be used to</b>', 'être habitué à (un état)', 'nom / pronom / <b>-ing</b>', 'I<b>’m used to working</b> in English.'],
      ['<b>get used to</b>', 's’habituer à (un processus)', 'nom / pronom / <b>-ing</b>', 'You’ll <b>get used to</b> it.']
    ] },
    { type: 'box', style: 'warn', title: 'LE piège : to + base verbale ou to + -ing ?', html: '<span class="ko">I’m used to work late.</span> → <span class="ok">I’m used to work<b>ing</b> late.</span><br><span class="ko">I used to working late.</span> → <span class="ok">I used to <b>work</b> late.</span> (sens différent : « avant, je travaillais tard »)<br><span class="ko">I’m getting used to drive on the left.</span> → <span class="ok">I’m getting used to driv<b>ing</b> on the left.</span><br>Test rapide : si tu peux remplacer le verbe par un nom (<i>I’m used to <b>it</b></i>, <i>I’m used to <b>the noise</b></i>), c’est que <b>to</b> est une préposition → <b>-ing</b>. C’est la même logique que <i>I look forward to <b>meeting</b> you.</i>' },
    { type: 'dialog', title: 'Nouveau poste à Toronto', accent: 'en-CA', lines: [
      { speaker: 'M', en: "How's the new job in Toronto going?", fr: 'Comment se passe ton nouveau travail à Toronto ?' },
      { speaker: 'W', en: "Great, thanks! But I'm still getting used to the winters. I used to live in Marseille, so it's quite a change.", fr: 'Très bien, merci ! Mais je m’habitue encore aux hivers. Avant, je vivais à Marseille, alors ça change beaucoup.' },
      { speaker: 'M', en: 'I bet! And are you used to speaking English all day?', fr: 'J’imagine ! Et tu es habituée à parler anglais toute la journée ?' },
      { speaker: 'W', en: 'More or less. At first, I would come home exhausted every evening, but now it feels much easier.', fr: 'Plus ou moins. Au début, je rentrais épuisée tous les soirs, mais maintenant ça me paraît beaucoup plus facile.' },
      { speaker: 'M', en: "You'll get used to the cold too, don't worry.", fr: 'Tu t’habitueras au froid aussi, ne t’inquiète pas.' },
      { speaker: 'W', en: "I hope so! I've already had winter tires put on my car.", fr: 'J’espère ! J’ai déjà fait mettre des pneus neige sur ma voiture.' }
    ] },

    { type: 'h', text: 'Le causatif : faire faire quelque chose' },
    { type: 'p', html: 'Quand tu ne fais pas quelque chose toi-même mais que tu le <b>fais faire</b> par quelqu’un d’autre (souvent un professionnel), l’anglais utilise <b>have</b> ou <b>get</b> + <b>la chose</b> + <b>participe passé</b> (la forme en <i>-ed</i> ou la 3ᵉ colonne des verbes irréguliers). « J’ai fait réparer ma voiture » → <i>I <b>had</b> my car <b>repaired</b>.</i> L’ordre des mots est essentiel : la chose se place <b>entre</b> <i>have</i> et le participe passé. <i>Have</i> ou <i>get</i> se conjuguent à tous les temps : <i>I’m having…, I’ll get…, I’ve had…</i>' },
    { type: 'examples', items: [
      { en: 'I had my car repaired last week.', fr: 'J’ai fait réparer ma voiture la semaine dernière.' },
      { en: "We're getting the office painted.", fr: 'Nous faisons repeindre le bureau.' },
      { en: 'You should have your eyes tested.', fr: 'Tu devrais faire contrôler ta vue.' },
      { en: 'The company had its logo redesigned.', fr: 'L’entreprise a fait redessiner son logo.' }
    ] },
    { type: 'table', head: ['Structure', 'Sens', 'Exemple', 'Français'], rows: [
      ['<b>have</b> + chose + <b>participe passé</b>', 'faire faire (par un professionnel)', 'I <b>had</b> my laptop <b>repaired</b>.', 'J’ai fait réparer mon ordinateur portable.'],
      ['<b>get</b> + chose + <b>participe passé</b>', 'faire faire (plus familier)', 'We <b>got</b> the contract <b>translated</b>.', 'Nous avons fait traduire le contrat.'],
      ['<b>have</b> + personne + <b>base verbale</b>', 'demander à quelqu’un de faire (un service, son travail)', 'I’ll <b>have</b> my assistant <b>call</b> you.', 'Je vais demander à mon assistante de vous appeler.'],
      ['<b>get</b> + personne + <b>to</b> + base verbale', 'obtenir de quelqu’un qu’il fasse, le convaincre', 'I <b>got</b> the technician <b>to check</b> the printer.', 'J’ai réussi à faire vérifier l’imprimante par le technicien.'],
      ['<b>make</b> + personne + <b>base verbale</b>', 'obliger, forcer', 'The manager <b>made</b> us <b>redo</b> the report.', 'Le responsable nous a fait refaire le rapport.'],
      ['<b>let</b> + personne + <b>base verbale</b>', 'laisser, permettre', 'Our boss <b>lets</b> us <b>work</b> from home on Fridays.', 'Notre patron nous laisse travailler de chez nous le vendredi.']
    ], caption: 'Seul <b>get</b> + personne prend <b>to</b>. Avec <i>have, make, let</i> + personne : base verbale <b>sans to</b>.' },
    { type: 'examples', items: [
      { en: "I'll have Mr. Chen send you the contract.", fr: 'Je vais demander à M. Chen de vous envoyer le contrat.' },
      { en: 'Can you get someone to fix the air conditioning?', fr: 'Tu peux trouver quelqu’un pour réparer la climatisation ?' },
      { en: 'The trainer made us repeat the exercise.', fr: 'Le formateur nous a fait répéter l’exercice.' },
      { en: "They don't let visitors take photos in the factory.", fr: 'Ils ne laissent pas les visiteurs prendre de photos dans l’usine.' }
    ] },
    { type: 'box', style: 'warn', title: 'Pièges du causatif', html: '• L’ordre des mots change tout : <span class="ko">I had repaired my car.</span> (= j’avais réparé ma voiture moi-même : c’est un past perfect !) → <span class="ok">I had my car repaired.</span><br>• <b>Pas de to</b> après <i>make, let, have</i> + personne : <span class="ko">He made me to wait.</span> → <span class="ok">He made me wait.</span><br><span class="ko">Let me to explain.</span> → <span class="ok">Let me explain.</span><br>• <b>To obligatoire</b> après <i>get</i> + personne : <span class="ko">I got him check it.</span> → <span class="ok">I got him <b>to</b> check it.</span><br>• Au passif, <i>make</i> reprend <b>to</b> : <i>We were made <b>to</b> wait.</i> (On nous a fait attendre.) Et <i>let</i> n’a pas de passif : on dit <i>be allowed to</i>.' },
    { type: 'box', style: 'tip', title: 'Quand ça arrive sans qu’on le veuille', html: '<i>Have something done</i> sert aussi pour une chose désagréable qu’on <b>subit</b> : <i>She <b>had</b> her wallet <b>stolen</b> on the train.</i> (Elle s’est fait voler son portefeuille dans le train.) Le français dit « se faire + infinitif » : c’est la même idée.<br>Et <i>get something done</i> peut aussi vouloir dire « finir, boucler quelque chose » : <i>I need to <b>get</b> this report <b>done</b> by Friday.</i> (Je dois boucler ce rapport d’ici vendredi.)' },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'La <b>Partie 5</b> adore ces structures. Méthode : regarde ce qui suit le verbe.<br>• <i>have / get</i> + <b>chose</b> → participe passé : <i>Ms. Park had the documents ------- to the client.</i> → <b>sent</b> (les documents ne s’envoient pas tout seuls : ils <i>sont envoyés</i>).<br>• <i>have / make / let</i> + <b>personne</b> → base verbale : <i>Ms. Park had her assistant ------- the documents.</i> → <b>send</b>.<br>• <i>get</i> + personne → <b>to</b> + base verbale : <i>We got the supplier ------- the price.</i> → <b>to lower</b>.<br>• <i>be / get used to</i> → <b>-ing</b> : <i>Employees are used to ------- remotely.</i> → <b>working</b>. Même chose avec le synonyme formel <b>be accustomed to</b> + <b>-ing</b>, fréquent à l’écrit : <i>Staff are accustomed to <b>working</b> under pressure.</i><br>• <i>used to</i> seul → base verbale : <i>The building used to ------- a bank.</i> → <b>be</b>.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• <b>used to + base verbale</b> = avant (plus maintenant) : <i>I used to work in Lyon.</i> Négation <i>didn’t use to</i>, question <i>Did you use to…?</i><br>• <b>would + base verbale</b> = habitudes passées, pour les <b>actions</b> seulement.<br>• <b>be used to + nom / -ing</b> = être habitué à ; <b>get used to + nom / -ing</b> = s’habituer à : <i>I’m used to working late.</i><br>• <b>have / get + chose + participe passé</b> = faire faire : <i>I had my car repaired.</i><br>• <b>have / make / let + personne + base verbale</b> ; <b>get + personne + to + base verbale</b>.' }
  ],
  exercises: [
    { type: 'mcq', q: 'I ___ in Lyon, but now I live in Paris.', options: ['use to live', 'used to live', 'am used to living'], answer: 1, explain: 'Situation passée terminée → <b>used to + base verbale</b>. <i>Use to</i> sans <i>d</i> ne s’emploie qu’après <i>did</i>, et <i>am used to living</i> (je suis habitué à vivre) contredit la suite de la phrase.' },
    { type: 'gap', q: "This building ___ a factory, but now it's a hotel. <small>(used to + be)</small>", answers: ['used to be'], explain: 'État passé qui n’est plus vrai → <b>used to be</b> (était autrefois).' },
    { type: 'gap', q: 'I ___ coffee, but now I drink three cups a day. <small>(not / like, avec used to)</small>', answers: ["didn't use to like", 'did not use to like', 'never used to like', 'used not to like'], explain: 'Négation : <b>didn’t use to</b> + base verbale (sans <i>d</i> à <i>use</i>, car <i>did</i> porte déjà le passé). On peut aussi dire <i>I never used to like coffee</i> (ou, en anglais britannique soutenu, <i>I used not to like coffee</i>).' },
    { type: 'order', answer: 'Did you use to work in sales?', fr: 'Tu travaillais dans la vente, avant ?', explain: 'Question : <b>Did</b> + sujet + <b>use to</b> + base verbale. Après <i>did</i>, on écrit <i>use</i> sans <i>d</i>.' },
    { type: 'mcq', q: 'Every Friday, the whole team ___ lunch together at a small restaurant nearby.', options: ['would have', 'was used to have', 'use to have'], answer: 0, explain: 'Habitude passée (une <b>action</b> répétée) → <b>would</b> + base verbale est possible (tout comme <i>used to have</i>). <i>Was used to</i> serait suivi de <i>-ing</i>, et <i>use to</i> sans <i>did</i> n’existe pas.' },
    { type: 'mcq', q: "« <i>I'm used to the noise.</i> » veut dire :", options: ['J’avais l’habitude de faire du bruit.', 'Je suis habitué(e) au bruit.', 'Je m’habitue petit à petit au bruit.'], answer: 1, explain: '<b>be used to</b> = <b>être habitué à</b> (un état). « Je m’habitue » serait <i>I’m getting used to the noise</i>.' },
    { type: 'gap', q: "Don't worry, I'm used to ___ late. <small>(work)</small>", answers: ['working'], explain: 'Dans <b>be used to</b>, <i>to</i> est une préposition → verbe en <b>-ing</b> : <i>I’m used to <b>working</b> late.</i>' },
    { type: 'gap', q: 'It took me a few weeks to get used to ___ on the left. <small>(drive)</small>', answers: ['driving'], explain: '<b>get used to</b> + <b>-ing</b> (s’habituer à) : <i>get used to <b>driving</b></i>.' },
    { type: 'mcq', q: "I didn't repair my laptop myself. I ___.", options: ['had repaired it', 'had it repaired', 'repaired it had'], answer: 1, explain: 'Causatif : <b>have + chose + participe passé</b> → <i>I <b>had it repaired</b></i> (je l’ai fait réparer). <i>I had repaired it</i> est un past perfect : « je l’avais réparé moi-même ».' },
    { type: 'gap', q: "We're getting the meeting room ___ next week. <small>(paint)</small>", answers: ['painted'], explain: '<b>get + chose + participe passé</b> = faire faire : <i>getting the meeting room <b>painted</b></i> (nous faisons repeindre la salle).' },
    { type: 'mcq', q: 'The manager made us ___ the whole report.', options: ['to redo', 'redo', 'redoing', 'redone'], answer: 1, explain: '<b>make + personne + base verbale</b>, sans <i>to</i> : <i>made us <b>redo</b></i> (nous a fait refaire).' },
    { type: 'gap', q: 'I finally got the technician ___ at the printer. <small>(look)</small>', answers: ['to look'], explain: '<b>get + personne + to + base verbale</b> : <i>got the technician <b>to look</b></i>. C’est la seule structure causative avec <i>to</i>.' },
    { type: 'order', answer: 'We had the office cleaned last weekend.', alts: ['Last weekend we had the office cleaned.'], fr: 'Nous avons fait nettoyer le bureau le week-end dernier.', explain: 'Causatif : <b>had</b> + la chose (<i>the office</i>) + participe passé (<i>cleaned</i>). Le complément de temps peut aussi ouvrir la phrase.' },
    { type: 'listen', say: "When I first moved to Chicago, I wasn't used to the cold winters. I used to take a taxi everywhere. But now I've gotten used to walking, even in January.", q: 'Qu’est-ce qui est vrai aujourd’hui pour la personne qui parle ?', options: ['Elle prend un taxi pour tous ses trajets.', 'Elle s’est habituée à marcher.', 'Elle vient d’arriver à Chicago.'], answer: 1, explain: '<i>Now I’ve <b>gotten used to walking</b></i> = maintenant, je me suis habituée à marcher. <i>I <b>used to</b> take a taxi</i> = c’était avant, ce n’est plus le cas. (<i>Gotten</i> est le participe passé américain de <i>get</i>.)' },
    { type: 'mcq', q: 'Ms. Park had the documents ------- to the client by courier. <small>(style TOEIC)</small>', options: ['send', 'sent', 'sending', 'to send'], answer: 1, explain: '<b>have + chose + participe passé</b> : les documents <i>sont envoyés</i> par quelqu’un d’autre → <b>sent</b>.' },
    { type: 'mcq', q: 'Mr. Obi had his assistant ------- the revised schedule to all team members. <small>(style TOEIC)</small>', options: ['send', 'sent', 'sending', 'to send'], answer: 0, explain: 'Cette fois, <i>have</i> est suivi d’une <b>personne</b> (<i>his assistant</i>), qui fait l’action → <b>base verbale sans to</b> : <i>had his assistant <b>send</b></i>.' }
  ]
});
