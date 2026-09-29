LE.register({
  id: 'g13',
  kind: 'grammar',
  title: 'Présent simple ou présent continu ?',
  subtitle: 'Habitude ou action en cours, permanent ou temporaire : choisir le bon présent',
  level: 'A2',
  minutes: 40,
  goals: [
    'Choisir entre <b>I work</b> et <b>I’m working</b> : habitude ou maintenant, permanent ou temporaire',
    'Reconnaître les <b>verbes d’état</b>, qui ne se mettent presque jamais au continu (<i>know, want, need…</i>)',
    'Comprendre les verbes à double sens : <i>I think so</i> / <i>I’m thinking about it</i>',
    'Utiliser les marqueurs de temps pour répondre vite en Partie 5 du TOEIC'
  ],
  blocks: [
    { type: 'h', text: 'Deux présents en anglais, un seul en français' },
    { type: 'p', html: 'En français, « je travaille » sert à tout. En anglais, tu dois choisir entre deux présents : le <b>présent simple</b> (<i>I work</i> — voir « Le présent simple : la forme affirmative ») et le <b>présent continu</b> (<i>I’m working</i> — voir « Le présent continu (be + -ing) »). La question à te poser : est-ce une <b>habitude</b> ou un fait <b>permanent</b> ? Ou est-ce que ça se passe <b>maintenant</b>, de façon <b>temporaire</b> ?' },
    { type: 'table', head: ['Question', 'Présent simple', 'Présent continu'], rows: [
      ['Comment ça se forme ?', 'I <b>work</b> / she <b>works</b>', 'I<b>’m working</b> / she<b>’s working</b>'],
      ['Habitude ou maintenant ?', 'habitude, routine', 'maintenant, action en cours'],
      ['Permanent ou temporaire ?', 'permanent, stable', 'temporaire, limité dans le temps'],
      ['Et aussi…', 'vérités générales, faits', 'changements, tendances'],
      ['Exemple', 'I <b>work</b> in a bank. <small>(c’est mon métier)</small>', 'I<b>’m working</b> at home today. <small>(aujourd’hui seulement)</small>']
    ] },
    { type: 'examples', items: [
      { en: "Karim usually drives to work, but today he's taking the train.", fr: 'D’habitude, Karim va au travail en voiture, mais aujourd’hui il prend le train.' },
      { en: "I live in Lyon, but I'm staying in Montreal this month.", fr: 'J’habite à Lyon, mais je séjourne à Montréal ce mois-ci.' },
      { en: 'Water boils at 100 degrees Celsius.', fr: 'L’eau bout à 100 degrés.', note: 'Vérité générale → présent simple.' },
      { en: 'Be careful, the water is boiling!', fr: 'Attention, l’eau bout !', note: 'En ce moment → présent continu.' }
    ] },

    { type: 'h', text: 'Habitude ou maintenant ?' },
    { type: 'p', html: 'Le <b>présent simple</b> parle de ce qu’on fait <b>régulièrement</b> : tous les jours, le lundi, souvent, jamais… Le <b>présent continu</b> parle de ce qui se passe <b>maintenant</b>, au moment où l’on parle. Les <b>marqueurs de temps</b> (les petits mots qui indiquent quand) t’aident beaucoup à choisir.' },
    { type: 'table', head: ['Présent simple : habitude, routine', 'Présent continu : maintenant, temporaire'], rows: [
      ['<b>always, usually, often</b> (toujours, d’habitude, souvent)', '<b>now, right now</b> (maintenant, en ce moment même)'],
      ['<b>sometimes, rarely, never</b> (parfois, rarement, jamais)', '<b>at the moment</b> (en ce moment)'],
      ['<b>every day, every week</b> (tous les jours, toutes les semaines)', '<b>today, this week, this month</b> (aujourd’hui, cette semaine, ce mois-ci)'],
      ['<b>on Mondays, on weekends</b> (le lundi, le week-end)', '<b>currently</b> (actuellement)'],
      ['<b>once a week, twice a month</b> (une fois par semaine, deux fois par mois)', '<b>Look! Listen!</b> (Regarde ! Écoute !)']
    ], caption: 'Pour les adverbes de fréquence, revois la leçon « Les adverbes de fréquence ». Ces mots sont de précieux indices… mais c’est toujours le <b>sens</b> qui décide.' },
    { type: 'examples', items: [
      { en: "Ms. Kim usually takes the bus. Right now, she's waiting at the bus stop.", fr: 'Mme Kim prend généralement le bus. En ce moment, elle attend à l’arrêt.' },
      { en: 'We have a team meeting every Monday.', fr: 'Nous avons une réunion d’équipe tous les lundis.' },
      { en: 'Shh! The director is giving a speech.', fr: 'Chut ! La directrice fait un discours.' },
      { en: 'How often do you check your e-mails?', fr: 'À quelle fréquence consultes-tu tes e-mails ?' },
      { en: 'What are you doing right now?', fr: 'Qu’est-ce que tu fais en ce moment ?' }
    ] },
    { type: 'box', style: 'tip', title: 'Et « always » avec le présent continu ?', html: 'Tu entendras parfois <b>always</b> avec le présent continu. Ce n’est pas une habitude neutre : ça exprime un <b>agacement</b> (« il n’arrête pas de… ») : <i>He’s always losing his keys!</i> (Il perd tout le temps ses clés !) Pour une habitude normale, reste au présent simple : <i>He always takes the train.</i>' },
    { type: 'box', style: 'tip', title: 'Currently : les deux sont possibles', html: '<b>Currently</b> (actuellement) va très bien avec le présent continu (<i>We’re currently looking for a new assistant.</i>), mais aussi avec le présent simple, surtout pour décrire un poste ou une situation actuelle : <i>Ms. Diaz currently <b>manages</b> the sales team.</i> (Mme Diaz dirige actuellement l’équipe commerciale.) Au TOEIC, regarde alors la forme du verbe et l’accord avec le sujet.' },

    { type: 'h', text: 'Permanent ou temporaire ?' },
    { type: 'p', html: 'Deuxième critère : la <b>durée</b>. Le présent simple décrit une situation <b>stable</b>, qui dure : ton métier, ton domicile, l’activité d’une entreprise. Le présent continu décrit une situation <b>limitée dans le temps</b> : un remplacement, un projet, un séjour, une période particulière.' },
    { type: 'examples', items: [
      { en: 'Mei works in the finance department.', fr: 'Mei travaille au service financier.', note: 'C’est son poste : permanent.' },
      { en: "This month, she's working in the Tokyo office.", fr: 'Ce mois-ci, elle travaille au bureau de Tokyo.', note: 'Seulement ce mois-ci : temporaire.' },
      { en: 'Our company makes solar panels.', fr: 'Notre entreprise fabrique des panneaux solaires.', note: 'L’activité de l’entreprise : permanent.' },
      { en: "We're building a new factory near Dallas.", fr: 'Nous construisons une nouvelle usine près de Dallas.', note: 'Un projet en cours, qui va se terminer : temporaire.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : le présent « à tout faire » du français', html: 'Les francophones mettent souvent le présent simple partout, par réflexe :<br><span class="ko">Sorry, I can’t talk. I drive.</span> → <span class="ok">Sorry, I can’t talk. I’m driving.</span><br><span class="ko">Look! It rains.</span> → <span class="ok">Look! It’s raining.</span><br>Et attention à ces deux questions qui n’ont rien à voir :<br><b>What do you do?</b> = Quel est ton métier ? — <i>I’m an accountant.</i> (Je suis comptable.)<br><b>What are you doing?</b> = Qu’est-ce que tu fais (en ce moment) ? — <i>I’m reading.</i> (Je lis.)' },

    { type: 'h', text: 'Les verbes d’état : presque jamais au continu' },
    { type: 'p', html: 'Certains verbes ne décrivent pas une <b>action</b> (quelque chose qu’on fait) mais un <b>état</b> : ce qu’on sait, ce qu’on pense, ce qu’on veut, ce qu’on aime, ce qu’on possède. On les appelle les <b>verbes d’état</b>. Ils restent au <b>présent simple</b>, même quand on parle de maintenant : <i>I <b>know</b></i> (je sais), jamais <span class="ko">I’m knowing</span>.' },
    { type: 'table', head: ['Catégorie', 'Verbes', 'Exemple'], rows: [
      ['Savoir, penser', '<b>know</b> (savoir, connaître), <b>understand</b> (comprendre), <b>believe</b> (croire), <b>remember</b> (se souvenir), <b>mean</b> (vouloir dire)', 'I don’t <b>understand</b> this e-mail.'],
      ['Vouloir, avoir besoin', '<b>want</b> (vouloir), <b>need</b> (avoir besoin de), <b>prefer</b> (préférer)', 'We <b>need</b> more time.'],
      ['Aimer, détester', '<b>like</b> (aimer bien), <b>love</b> (adorer), <b>hate</b> (détester)', 'She <b>loves</b> her new job.'],
      ['Posséder', '<b>own</b> (posséder), <b>belong to</b> (appartenir à)', 'This laptop <b>belongs to</b> Omar.'],
      ['Autres', '<b>cost</b> (coûter), <b>seem</b> (sembler)', 'The hotel <b>seems</b> nice, but it <b>costs</b> $300 a night.']
    ], caption: 'Même avec <i>now</i> ou <i>at the moment</i> : <i>I <b>need</b> help now.</i> (et pas <span class="ko">I’m needing help</span>).' },
    { type: 'box', style: 'warn', title: 'Piège : I’m knowing, I’m wanting…', html: '<span class="ko">I’m knowing the answer.</span> → <span class="ok">I know the answer.</span><br><span class="ko">I’m wanting a coffee.</span> → <span class="ok">I want a coffee.</span><br><span class="ko">This bag is belonging to me.</span> → <span class="ok">This bag belongs to me.</span><br><span class="ko">The tickets are costing $50.</span> → <span class="ok">The tickets cost $50.</span><br>À l’oral familier, tu entendras peut-être <i>I’m loving this weather!</i> : c’est un effet de style. Au TOEIC, garde le présent simple avec ces verbes.' },
    { type: 'examples', items: [
      { en: 'I know the answer.', fr: 'Je connais la réponse.' },
      { en: 'Do you understand the problem?', fr: 'Est-ce que tu comprends le problème ?' },
      { en: 'This office belongs to Ms. Ibrahim.', fr: 'Ce bureau appartient à Mme Ibrahim.' },
      { en: 'What does "ASAP" mean? — It means "as soon as possible."', fr: 'Que veut dire « ASAP » ? — Ça veut dire « dès que possible ».' },
      { en: 'The tickets cost $45 each.', fr: 'Les billets coûtent 45 dollars chacun.' }
    ] },

    { type: 'h', text: 'Les verbes à double sens : think, have, see' },
    { type: 'p', html: 'Quelques verbes sont des verbes d’état dans un sens, et des verbes d’action dans un autre. Dans le sens « état », on utilise le présent simple ; dans le sens « action », le présent continu devient possible.' },
    { type: 'table', head: ['Verbe', 'Sens « état » → présent simple', 'Sens « action » → présent continu possible'], rows: [
      ['<b>think</b>', 'penser que, être d’avis : <i>I <b>think</b> so.</i> (Je pense que oui.) <i>I <b>think</b> it’s a good idea.</i>', 'réfléchir : <i>I’<b>m thinking</b> about it.</i> (J’y réfléchis.) <i>What <b>are</b> you <b>thinking</b> about?</i>'],
      ['<b>have</b>', 'avoir, posséder : <i>I <b>have</b> a car.</i> <i>She <b>has</b> two children.</i>', 'manger, prendre, vivre (un moment) : <i>I’<b>m having</b> lunch.</i> <i>We’<b>re having</b> a meeting.</i> <i><b>Are</b> you <b>having</b> a good time?</i>'],
      ['<b>see</b>', 'voir, comprendre : <i>I <b>see</b> the problem.</i> <i>I <b>see</b> what you mean.</i>', 'recevoir, rencontrer : <i>The doctor <b>is seeing</b> a patient.</i> (Le médecin reçoit un patient.)']
    ] },
    { type: 'examples', items: [
      { en: 'I think the price is too high.', fr: 'Je pense que le prix est trop élevé.' },
      { en: "I'm thinking about changing jobs.", fr: 'Je pense à changer de travail.', note: 'Ici, <i>think about</i> = réfléchir à, envisager : c’est une action en cours.' },
      { en: 'We have a meeting every Monday.', fr: 'Nous avons une réunion tous les lundis.', note: 'Habitude → présent simple, même dans le sens « action ».' },
      { en: 'Sorry, Ms. Novak is having a meeting right now.', fr: 'Désolée, Mme Novak est en réunion en ce moment.' },
      { en: 'I see what you mean.', fr: 'Je vois ce que tu veux dire.' },
      { en: 'The doctor is seeing a patient at the moment.', fr: 'Le médecin reçoit un patient en ce moment.' }
    ] },
    { type: 'dialog', title: 'Pause café', lines: [
      { speaker: 'M', en: 'Hi Sofia! What are you doing here? You usually work upstairs.', fr: 'Salut Sofia ! Qu’est-ce que tu fais ici ? D’habitude, tu travailles à l’étage.' },
      { speaker: 'W', en: "I know! They're painting our office this week, so I'm working down here.", fr: 'Je sais ! Ils repeignent notre bureau cette semaine, alors je travaille ici, en bas.' },
      { speaker: 'M', en: 'Do you like it?', fr: 'Ça te plaît ?' },
      { speaker: 'W', en: "Yes, it's quieter. And you? Are you still working on the Lisbon project?", fr: 'Oui, c’est plus calme. Et toi ? Tu travailles toujours sur le projet de Lisbonne ?' },
      { speaker: 'M', en: "Yes, I am. We're having some problems with a supplier, but I think we can fix them.", fr: 'Oui. On a quelques problèmes avec un fournisseur, mais je pense qu’on peut les régler.' },
      { speaker: 'W', en: 'Good luck! Do you want a coffee?', fr: 'Bon courage ! Tu veux un café ?' },
      { speaker: 'M', en: "No, thanks. I don't drink coffee. I prefer tea.", fr: 'Non, merci. Je ne bois pas de café. Je préfère le thé.' }
    ] },

    { type: 'h', text: 'Présent simple ou continu au TOEIC' },
    { type: 'box', style: 'info', title: 'Partie 5 : la méthode en 3 étapes', html: 'En <b>Partie 5</b>, on te donne souvent une phrase à trou et quatre formes du même verbe. Pour choisir vite :<br>1. <b>Le sujet</b> : singulier ou pluriel ? Élimine les formes qui ne s’accordent pas (<i>he <b>works</b></i>, <i>they <b>are</b> working</i>).<br>2. <b>Les indices de temps</b> : <i>every week, usually</i> → présent simple ; <i>now, at the moment, this week</i> → présent continu.<br>3. <b>Le verbe</b> : si c’est un verbe d’état (<i>know, need, belong…</i>), reste au présent simple.<br>Exemple : <i>The company ------- new staff every spring.</i> → <b>hires</b> (habitude + sujet singulier).' },
    { type: 'h', text: 'Comment choisir ? Le récapitulatif' },
    { type: 'list', ordered: true, items: [
      'C’est un <b>verbe d’état</b> (<i>know, want, need, like, belong…</i>) ? → <b>présent simple</b>.',
      'C’est une <b>habitude</b>, une <b>routine</b>, un fait <b>permanent</b> ou une <b>vérité générale</b> ? → <b>présent simple</b>.',
      'Ça se passe <b>maintenant</b>, c’est <b>temporaire</b> ou ça <b>évolue</b> ? → <b>présent continu</b>.',
      'Dans le doute, cherche les <b>indices</b> : <i>every, usually, on Mondays</i> → simple ; <i>now, at the moment, this week, Look!</i> → continu.'
    ] },
    { type: 'box', style: 'key', title: 'À retenir', html: '• <b>Présent simple</b> : habitude, routine, situation permanente, vérité générale (<i>I work in a bank. Water boils at 100 °C.</i>).<br>• <b>Présent continu</b> : maintenant, situation temporaire, tendance (<i>I’m working at home today. Prices are rising.</i>).<br>• Verbes d’état → présent simple : <i>know, understand, believe, want, need, prefer, like, love, hate, belong, own, cost, mean, seem, remember</i>.<br>• Double sens : <i>I think so</i> / <i>I’m thinking about it</i> ; <i>I have a car</i> / <i>I’m having lunch</i>.<br>• <b>What do you do?</b> (ton métier) ≠ <b>What are you doing?</b> (en ce moment).' }
  ],
  exercises: [
    { type: 'mcq', q: 'Karim usually ___ tennis on Saturdays.', options: ['plays', 'is playing', 'play'], answer: 0, explain: '<i>usually</i> + <i>on Saturdays</i> = une habitude → présent simple ; <i>Karim</i> = he → <b>plays</b> (avec -s).' },
    { type: 'gap', q: 'Listen! The phone ___ (ring).', answers: ['is ringing', "'s ringing"], explain: '<i>Listen!</i> → ça se passe maintenant → présent continu : <b>is ringing</b>.' },
    { type: 'gap', q: 'Our company ___ (make) office furniture and sells it in twenty countries.', answers: ['makes'], explain: 'L’activité permanente de l’entreprise → présent simple, comme <i>sells</i> ; <i>our company</i> = it → <b>makes</b>.' },
    { type: 'mcq', q: 'I ___ what you mean.', options: ['understand', 'am understanding', 'understands', 'am understand'], answer: 0, explain: '<b>understand</b> est un verbe d’état → présent simple, sans -s après <i>I</i> : <b>I understand</b>.' },
    { type: 'gap', q: 'This umbrella ___ (belong) to Mr. Sato.', answers: ['belongs'], explain: '<b>belong</b> (appartenir) est un verbe d’état → présent simple, avec -s car <i>this umbrella</i> = it.' },
    { type: 'gap', q: '— Do you want a coffee? — No, thanks. I ___ (not / want) anything right now.', answers: ["don't want", 'do not want'], explain: 'Même avec <i>right now</i>, <b>want</b> est un verbe d’état → présent simple : <b>don’t want</b>.' },
    { type: 'gap', q: "Laura can't come to the phone. She ___ (have) lunch.", answers: ['is having', "'s having"], explain: '<i>have lunch</i> = déjeuner : c’est une action, en train de se passer → <b>is having</b>. Ici, <i>have</i> ne veut pas dire « posséder ».' },
    { type: 'mcq', q: '— Is the report ready? — I ___ so. Let me check.', options: ['think', 'am thinking', 'thinks', 'thinking'], answer: 0, explain: '<i>I think so</i> (je pense que oui) exprime une opinion : <i>think</i> est ici un verbe d’état → présent simple.' },
    { type: 'gap', q: "I'm not sure about the job offer yet. At the moment, I ___ (think) about it.", answers: ["'m thinking", 'am thinking'], explain: '<i>think about</i> = réfléchir à : une action en cours (<i>at the moment</i>) → présent continu : <b>I’m thinking</b> about it.' },
    { type: 'mcq', q: 'Quelle question veut dire « Quel est ton métier ? » ?', options: ['What are you doing?', 'What do you do?', 'What are you do?', 'What do you doing?'], answer: 1, explain: '<b>What do you do?</b> (présent simple) demande le métier, une situation permanente. <i>What are you doing?</i> veut dire « Qu’est-ce que tu fais en ce moment ? ».' },
    { type: 'order', answer: 'What are you working on at the moment?', alts: ['At the moment what are you working on'], fr: 'Sur quoi travailles-tu en ce moment ?', explain: '<i>at the moment</i> → présent continu : <b>What are you working on</b>… La préposition <i>on</i> reste à la fin de la question.' },
    { type: 'order', answer: 'Do you know the new sales manager?', fr: 'Est-ce que tu connais le nouveau directeur commercial ?', explain: '<b>know</b> est un verbe d’état : question au présent simple avec <b>Do</b> (jamais <i>Are you knowing</i>).' },
    { type: 'listen', say: "Hi, it's Daniel. I usually work in the Chicago office, but this week I'm visiting clients in Mexico City.", q: 'Où est Daniel cette semaine ?', options: ['Au bureau de Chicago.', 'Chez des clients, à Mexico.', 'En vacances, à Mexico.', 'Chez lui, en télétravail.'], answer: 1, explain: '<i>I usually work in the Chicago office</i> = son habitude ; <i>but this week I’m visiting clients in Mexico City</i> = sa situation temporaire cette semaine.' },
    { type: 'mcq', q: 'Mr. Lee currently ------- the marketing team. <small>(style TOEIC)</small>', options: ['manage', 'manages', 'managing', 'are managing'], answer: 1, explain: 'Sujet singulier (<i>Mr. Lee</i> = he) → <b>manages</b>. <i>managing</i> seul est impossible sans <i>is</i>, et <i>are managing</i> ne s’accorde pas avec un sujet singulier. <i>Currently</i> s’emploie aussi avec le présent simple pour décrire un poste.' },
    { type: 'mcq', q: 'Please be quiet. A job interview ------- in Room 4 right now. <small>(style TOEIC)</small>', options: ['takes place', 'is taking place', 'take place', 'are taking place'], answer: 1, explain: '<i>right now</i> → action en cours → présent continu ; sujet singulier (<i>a job interview</i>) → <b>is taking place</b>.' },
    { type: 'mcq', q: 'Mr. Mensah ------- the answer to your question, so please ask him directly. <small>(style TOEIC)</small>', options: ['knows', 'is knowing', 'know', 'are knowing'], answer: 0, explain: '<b>know</b> est un verbe d’état → présent simple, jamais au continu ; sujet singulier (<i>Mr. Mensah</i> = he) → <b>knows</b>.' }
  ]
});
