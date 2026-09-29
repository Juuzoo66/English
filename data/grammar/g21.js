LE.register({
  id: 'g21',
  kind: 'grammar',
  title: 'Le futur : will, be going to et présent continu',
  subtitle: 'Parler de l’avenir : décisions, projets, rendez-vous et horaires',
  level: 'A2',
  minutes: 45,
  goals: [
    'Utiliser <b>will</b> pour une décision immédiate, une promesse, une offre ou une prédiction',
    'Utiliser <b>be going to</b> pour un projet déjà décidé ou une prédiction fondée sur un indice',
    'Parler d’un rendez-vous (<i>I’m meeting the client on Friday</i>) et d’un horaire (<i>The flight leaves at 6</i>)',
    'Appliquer la règle capitale : <i>When I <b>arrive</b>, I’ll call you</i> (pas de will après when, as soon as, if…)'
  ],
  blocks: [
    { type: 'h', text: 'Le futur en anglais : plusieurs outils' },
    { type: 'p', html: 'En français, on a le futur simple (<i>je partirai</i>) et le futur proche (<i>je vais partir</i>). L’anglais, lui, n’a pas de terminaison de futur : il utilise <b>plusieurs outils</b>, et le choix dépend de la situation. Décision prise à l’instant ? Projet déjà décidé ? Rendez-vous organisé ? Horaire officiel ? Pas de panique : avec les tableaux de cette leçon, tu vas vite t’y retrouver.' },
    { type: 'examples', items: [
      { en: "I'll call you back in five minutes.", fr: 'Je te rappelle dans cinq minutes.', note: 'Décision prise à l’instant → <b>will</b>.' },
      { en: "I'm going to visit our supplier next week.", fr: 'Je vais rendre visite à notre fournisseur la semaine prochaine.', note: 'Projet déjà décidé → <b>be going to</b>.' },
      { en: "I'm meeting the client on Friday.", fr: 'Je vois le client vendredi.', note: 'Rendez-vous organisé → <b>présent continu</b>.' },
      { en: 'The flight leaves at 6 a.m.', fr: 'Le vol part à 6 heures.', note: 'Horaire officiel → <b>présent simple</b>.' }
    ] },

    { type: 'h', text: 'Will : la forme' },
    { type: 'p', html: '<b>Will</b> est un auxiliaire (un « petit verbe » qui aide le verbe principal). On le place devant la <b>base verbale</b> (l’infinitif sans <i>to</i>). Il a <b>la même forme à toutes les personnes</b> : pas de -s avec he, she, it. À l’oral, on le contracte presque toujours en <b>’ll</b>.' },
    { type: 'table', head: ['Type', 'Forme pleine', 'Forme contractée', 'Français'], rows: [
      ['Affirmation', 'I <b>will</b> call / she <b>will</b> call', 'I<b>’ll</b> call / she<b>’ll</b> call', 'j’appellerai / elle appellera'],
      ['Négation', 'we <b>will not</b> be late', 'we <b>won’t</b> be late', 'nous ne serons pas en retard'],
      ['Question', '<b>Will</b> you be at the meeting?', '—', 'Seras-tu à la réunion ?'],
      ['Réponse courte', 'Yes, I <b>will</b>. / No, I <b>will not</b>.', 'No, I <b>won’t</b>.', 'Oui. / Non.']
    ], caption: 'Comme avec <i>be</i>, on ne contracte jamais une réponse courte affirmative : <i>Yes, I will.</i> (et non « Yes, I’ll. »).' },
    { type: 'box', style: 'warn', title: 'Pièges de forme', html: '<span class="ko">She will to come.</span> → <span class="ok">She will come.</span> (pas de <i>to</i>)<br><span class="ko">He wills come.</span> / <span class="ko">He will comes.</span> → <span class="ok">He will come.</span> (pas de -s)<br>À l’oral, ne confonds pas <b>won’t</b> (qui rime avec <i>don’t</i>) et <b>want</b> (vouloir) : <i>I won’t go</i> (je n’irai pas) ≠ <i>I want to go</i> (je veux y aller).' },

    { type: 'h', text: 'Les emplois de will' },
    { type: 'list', items: [
      '<b>Décision prise sur le moment</b>, au moment où l’on parle : <i>The phone is ringing. — I’ll get it.</i>',
      '<b>Promesse</b> : <i>I’ll send you the file tonight, I promise.</i>',
      '<b>Offre</b> (proposer de faire quelque chose) : <i>Your bags look heavy. I’ll carry one.</i>',
      '<b>Prédiction</b> (ce que l’on pense ou croit), souvent avec <i>I think, I’m sure, probably</i> : <i>I think prices will go up.</i>',
      '<b>Fait futur officiel</b> (annonces, e-mails, notes de service) : <i>The conference will be held in May.</i>'
    ] },
    { type: 'examples', items: [
      { en: "The phone is ringing. — Don't worry, I'll get it.", fr: 'Le téléphone sonne. — Ne t’inquiète pas, je vais répondre.', note: 'Le français dit « je vais répondre », mais c’est une décision de dernière seconde → <b>will</b>.' },
      { en: "I'll send you the report tonight, I promise.", fr: 'Je t’enverrai le rapport ce soir, promis.' },
      { en: "I won't tell anyone.", fr: 'Je ne le dirai à personne.' },
      { en: "Those boxes look heavy. I'll help you.", fr: 'Ces cartons ont l’air lourds. Je vais t’aider.' }
    ] },
    { type: 'examples', items: [
      { en: 'I think Ms. Nakamura will get the job.', fr: 'Je pense que Mme Nakamura aura le poste.' },
      { en: 'Sales will probably increase next year.', fr: 'Les ventes vont probablement augmenter l’an prochain.', note: '<i>probably</i> se place après <i>will</i>, mais avant <i>won’t</i> : <i>It probably won’t rain.</i>' },
      { en: 'The conference will be held in May.', fr: 'La conférence aura lieu en mai.', note: '<i>will be held</i> = futur + voix passive (voir la leçon « La voix passive »). Très fréquent dans les annonces du TOEIC.' },
      { en: 'The new office will open on June 1.', fr: 'Le nouveau bureau ouvrira le 1er juin.' }
    ] },

    { type: 'h', text: 'Shall I… ? Shall we… ? : faire une proposition' },
    { type: 'p', html: '<b>Shall</b> s’utilise surtout dans des <b>questions</b> avec <b>I</b> et <b>we</b>, pour proposer quelque chose ou demander l’avis de l’autre. <i>Shall I…?</i> = « Tu veux que je… ? / Voulez-vous que je… ? » ; <i>Shall we…?</i> = « Et si on… ? / On… ? ». En anglais américain, on entend aussi <i>Should I…?</i> ou <i>Do you want me to…?</i>, mais <i>Shall I / Shall we</i> reste très courant au TOEIC.' },
    { type: 'examples', items: [
      { en: 'Shall I open the window?', fr: 'Tu veux que j’ouvre la fenêtre ?' },
      { en: 'Shall we start the meeting?', fr: 'On commence la réunion ?' },
      { en: 'Shall I book a taxi for you?', fr: 'Voulez-vous que je vous réserve un taxi ?' },
      { en: 'What time shall we meet?', fr: 'À quelle heure est-ce qu’on se retrouve ?' }
    ] },

    { type: 'h', text: 'Be going to : l’intention et l’indice' },
    { type: 'p', html: 'Formation : <b>am / is / are + going to + base verbale</b>. C’est l’équivalent du futur proche français (« je vais… »). Deux emplois :<br>• une <b>intention déjà décidée</b> avant de parler (un projet) ;<br>• une <b>prédiction fondée sur un indice visible</b> : on voit que ça va arriver.' },
    { type: 'table', head: ['Type', 'Exemple', 'Français'], rows: [
      ['Affirmation', 'I<b>’m going to</b> call the bank.', 'Je vais appeler la banque.'],
      ['Affirmation', 'She<b>’s going to</b> change jobs.', 'Elle va changer de travail.'],
      ['Négation', 'We <b>aren’t going to</b> sign the contract.', 'Nous n’allons pas signer le contrat.'],
      ['Question', '<b>Are</b> they <b>going to</b> hire someone?', 'Vont-ils embaucher quelqu’un ?']
    ], caption: 'Le verbe <b>be</b> change selon le sujet (<i>am, is, are</i>), mais <b>going to</b> + base verbale ne change jamais.' },
    { type: 'examples', items: [
      { en: "We're going to hire two new engineers this year.", fr: 'Nous allons embaucher deux nouveaux ingénieurs cette année.', note: 'Décision déjà prise.' },
      { en: "I'm going to ask for a raise.", fr: 'Je vais demander une augmentation.' },
      { en: "Look at those black clouds! It's going to rain.", fr: 'Regarde ces nuages noirs ! Il va pleuvoir.', note: 'Indice visible : les nuages.' },
      { en: "Hurry up! We're going to miss the train.", fr: 'Dépêche-toi ! On va rater le train.' }
    ] },
    { type: 'box', style: 'tip', title: 'Will ou be going to pour une décision ?', html: 'Tout dépend du <b>moment où la décision est prise</b> :<br>— <i>We’re out of paper.</i> — <i>Oh, I didn’t know. <b>I’ll order</b> some.</i> (décision prise à l’instant → <b>will</b>)<br>— <i>We’re out of paper.</i> — <i>I know. <b>I’m going to order</b> some this afternoon.</i> (décision déjà prise → <b>going to</b>)<br>Pour une simple prédiction, les deux sont souvent possibles : <i>I think it will rain.</i> / <i>I think it’s going to rain.</i>' },
    { type: 'dialog', title: 'Préparer la visite de clients', lines: [
      { speaker: 'W', en: 'Javier, the clients from Seoul are arriving tomorrow. Are you ready?', fr: 'Javier, les clients de Séoul arrivent demain. Tu es prêt ?' },
      { speaker: 'M', en: "Almost. I'm going to prepare the presentation this afternoon.", fr: 'Presque. Je vais préparer la présentation cet après-midi.' },
      { speaker: 'W', en: 'Great. Their plane lands at 9:30. Shall I book a car for them?', fr: 'Super. Leur avion atterrit à 9 h 30. Tu veux que je leur réserve une voiture ?' },
      { speaker: 'M', en: "Yes, please. And I'll call the restaurant to reserve a table.", fr: 'Oui, s’il te plaît. Et je vais appeler le restaurant pour réserver une table.' },
      { speaker: 'W', en: 'Perfect. Call me as soon as you finish the slides.', fr: 'Parfait. Appelle-moi dès que tu auras fini les diapos.' }
    ] },

    { type: 'h', text: 'Le présent continu : un rendez-vous organisé' },
    { type: 'p', html: 'Quand une action future est <b>déjà organisée</b> (une date, une heure, une autre personne, une réservation), on utilise souvent le <b>présent continu</b> (<i>be + -ing</i>, voir la leçon « Le présent continu (be + -ing) »). Le français fait pareil avec le présent : « Je vois le client vendredi. » Il faut presque toujours un <b>indicateur de temps futur</b> (<i>tomorrow, on Friday, next week</i>).' },
    { type: 'examples', items: [
      { en: "I'm meeting the client on Friday.", fr: 'Je vois le client vendredi.' },
      { en: "We're flying to Dubai next Monday.", fr: 'Nous prenons l’avion pour Dubaï lundi prochain.' },
      { en: 'What are you doing this weekend?', fr: 'Qu’est-ce que tu fais ce week-end ?' },
      { en: 'Ms. Mbeki is starting her new job on March 3.', fr: 'Mme Mbeki commence son nouveau travail le 3 mars.' }
    ] },

    { type: 'h', text: 'Le présent simple : les horaires et les programmes' },
    { type: 'p', html: 'Pour un <b>horaire officiel</b> ou un <b>programme</b> fixé à l’avance (trains, avions, cours, films, heures d’ouverture, programme d’une conférence), on utilise le <b>présent simple</b>, même pour parler du futur. Verbes typiques : <i>leave, arrive, start, begin, open, close, end</i>.' },
    { type: 'examples', items: [
      { en: 'The flight leaves at 6 a.m. tomorrow.', fr: 'Le vol part demain à 6 heures.' },
      { en: 'The train arrives in Boston at 10:45.', fr: 'Le train arrive à Boston à 10 h 45.' },
      { en: 'The training session starts at 9 on Monday.', fr: 'La formation commence lundi à 9 heures.' },
      { en: 'The store closes at 8 p.m. tonight.', fr: 'Le magasin ferme à 20 heures ce soir.' }
    ] },

    { type: 'h', text: 'La règle capitale : pas de will après when, as soon as, if…' },
    { type: 'p', html: 'Voici <b>la</b> règle que les francophones oublient le plus. Après les mots qui introduisent un moment ou une condition — <b>when</b> (quand), <b>as soon as</b> (dès que), <b>before</b> (avant que, avant de), <b>after</b> (après que, après), <b>until</b> (jusqu’à ce que), <b>once</b> (une fois que), <b>if</b> (si) — on utilise le <b>présent</b>, jamais <i>will</i>, même quand on parle du futur. <i>Will</i> reste dans l’autre partie de la phrase.' },
    { type: 'table', head: ['Français', 'Faux', 'Correct'], rows: [
      ['Quand j’<b>arriverai</b>, je t’appellerai.', '<span class="ko">When I will arrive, I’ll call you.</span>', '<span class="ok">When I <b>arrive</b>, I’ll call you.</span>'],
      ['Dès que j’<b>aurai</b> les chiffres, je t’enverrai le rapport.', '<span class="ko">As soon as I will have the figures…</span>', '<span class="ok">As soon as I <b>have</b> the figures, I’ll send you the report.</span>'],
      ['Nous attendrons jusqu’à ce que la directrice <b>arrive</b>.', '<span class="ko">We’ll wait until the director will arrive.</span>', '<span class="ok">We’ll wait until the director <b>arrives</b>.</span>'],
      ['Une fois que le contrat <b>sera signé</b>, nous commencerons.', '<span class="ko">Once the contract will be signed…</span>', '<span class="ok">Once the contract <b>is</b> signed, we’ll start.</span>'],
      ['S’il <b>pleut</b>, nous annulerons le dîner.', '<span class="ko">If it will rain…</span>', '<span class="ok">If it <b>rains</b>, we’ll cancel the dinner.</span>']
    ], caption: 'Dans la partie « quand / dès que / si… », pense <b>présent</b>, sans oublier le <b>-s</b> à la 3ᵉ personne : <i>when she <b>arrives</b></i>. Pour <i>if</i>, voir aussi la leçon « Les conditionnels 0 et 1 (if, unless, when…) ».' },
    { type: 'box', style: 'warn', title: 'Le piège « quand j’arriverai »', html: 'Le français met un futur après « quand » et « dès que » ; l’anglais, <b>jamais</b> :<br><span class="ko">I’ll call you when I will get home.</span> → <span class="ok">I’ll call you when I <b>get</b> home.</span><br>Attention, cette règle ne concerne pas les <b>questions</b> : quand <i>when</i> veut dire « quand ? », <i>will</i> est normal : <i><b>When will</b> the report be ready?</i> (Quand le rapport sera-t-il prêt ?)' },
    { type: 'examples', items: [
      { en: "When I arrive at the hotel, I'll call you.", fr: 'Quand j’arriverai à l’hôtel, je t’appellerai.' },
      { en: "As soon as the meeting ends, I'll send you the minutes.", fr: 'Dès que la réunion sera terminée, je t’enverrai le compte rendu.' },
      { en: 'Please turn off the lights before you leave.', fr: 'Merci d’éteindre les lumières avant de partir.' },
      { en: "If you need help, I'll be in my office.", fr: 'Si tu as besoin d’aide, je serai dans mon bureau.' },
      { en: "We'll start production once we receive the payment.", fr: 'Nous lancerons la production une fois que nous aurons reçu le paiement.' }
    ] },

    { type: 'h', text: 'Tableau récapitulatif' },
    { type: 'table', head: ['Situation', 'Outil', 'Exemple'], rows: [
      ['Décision prise sur le moment', '<b>will</b>', 'I’ll take the blue one.'],
      ['Promesse, offre', '<b>will</b>', 'I’ll help you. / I won’t forget.'],
      ['Prédiction (opinion)', '<b>will</b> (+ I think, probably…)', 'I think she’ll get the job.'],
      ['Fait futur officiel', '<b>will</b>', 'The office will close at 3 p.m. on Friday.'],
      ['Proposition', '<b>Shall I / Shall we…?</b>', 'Shall I call a taxi?'],
      ['Intention déjà décidée', '<b>be going to</b>', 'I’m going to learn Spanish.'],
      ['Prédiction avec un indice visible', '<b>be going to</b>', 'Look! It’s going to rain.'],
      ['Rendez-vous organisé', '<b>présent continu</b>', 'I’m seeing the dentist at 4.'],
      ['Horaire, programme', '<b>présent simple</b>', 'The bus leaves at 7:15.'],
      ['Après when, as soon as, if…', '<b>présent simple</b>', 'When I get home, I’ll call you.']
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 5</b>, deux réflexes :<br>1) un indicateur de futur (<i>next month, tomorrow, soon, next year</i>) → cherche <b>will</b> + base verbale : <i>The new policy ------- effective next month.</i> → <b>will become</b>.<br>2) après <i>when, as soon as, before, after, until, once, if</i> → <b>présent</b> : <i>Please call Mr. Haddad as soon as the shipment -------.</i> → <b>arrives</b> (et non <i>will arrive</i>).<br>En <b>Parties 3 et 4</b>, les questions <i>What will the man probably do next?</i> ou <i>What is the woman going to do?</i> trouvent leur réponse dans une phrase en <i>I’ll…</i> ou <i>I’m going to…</i>' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• <b>will</b> + base verbale : décision immédiate, promesse, offre, prédiction, fait officiel. Négation : <b>won’t</b>.<br>• <b>Shall I / Shall we…?</b> : faire une proposition.<br>• <b>be going to</b> : projet déjà décidé, prédiction avec un indice visible.<br>• <b>Présent continu</b> : rendez-vous organisé (<i>I’m meeting the client on Friday</i>). <b>Présent simple</b> : horaires (<i>The flight leaves at 6</i>).<br>• Après <b>when, as soon as, before, after, until, once, if</b> → <b>présent</b> : <i>When I arrive, I’ll call you.</i>' }
  ],
  exercises: [
    { type: 'mcq', q: 'I ___ you tomorrow morning.', options: ['will call', 'will to call', 'wills call', 'will calling'], answer: 0, explain: '<b>will</b> + base verbale : pas de <i>to</i>, pas de -s, pas de -ing.' },
    { type: 'gap', q: 'We ___ (hire) two new engineers next year. <small>(be going to)</small>', answers: ["'re going to hire", 'are going to hire'], explain: '<b>be going to</b> + base verbale ; avec <b>we</b> → <b>are going to hire</b> (contracté : <i>we’re going to hire</i>).' },
    { type: 'mcq', q: 'Those boxes look heavy. ___ I help you?', options: ['Shall', 'Will', 'Am', 'Do'], answer: 0, explain: 'Pour proposer son aide avec <b>I</b>, on dit <b>Shall I…?</b> (= Tu veux que je t’aide ?).' },
    { type: 'mcq', q: 'Look at those black clouds! It ___ rain.', options: ['is going to', 'will to', 'going to', 'is going'], answer: 0, explain: 'Prédiction fondée sur un indice visible (les nuages) → <b>is going to</b> + base verbale. Il faut les trois éléments : <i>is</i> + <i>going</i> + <i>to</i>.' },
    { type: 'mcq', q: '— Why are you buying paint? — I ___ my office this weekend. That’s my plan.', options: ['am going to paint', 'will paint', 'paint', 'painted'], answer: 0, explain: 'C’est un projet <b>déjà décidé</b> (<i>That’s my plan</i> ; la preuve : la peinture est en train d’être achetée) → <b>be going to</b>. <i>Will</i> exprimerait une décision prise à l’instant.' },
    { type: 'mcq', q: '— We don’t have any paper for the printer. — Oh, really? I didn’t know. I ___ some right now.', options: ['will order', 'ordered', 'order', 'have ordered'], answer: 0, explain: 'La personne découvre le problème et décide <b>à l’instant</b> → <b>will</b> (à l’oral : <i>I’ll order some</i>).' },
    { type: 'gap', q: 'I ___ (meet) the client on Friday at 10 — it’s in my calendar. <small>(présent continu)</small>', answers: ["'m meeting", 'am meeting'], explain: 'Rendez-vous organisé (jour, heure, noté dans l’agenda) → présent continu : <b>I’m meeting</b>.' },
    { type: 'mcq', q: 'When the manager ___ back, I’ll give her your message.', options: ['comes', 'will come', 'came', 'is going to come'], answer: 0, explain: 'Après <b>when</b> (sens futur), on utilise le <b>présent</b> : <b>comes</b>. Le futur <i>I’ll give</i> reste dans l’autre partie de la phrase.' },
    { type: 'gap', q: 'When Mr. Silva ___ (arrive), please send him to my office.', answers: ['arrives', 'has arrived'], explain: 'Après <b>when</b>, jamais <i>will</i> : présent simple <b>arrives</b>, avec le -s de la 3ᵉ personne. (<i>has arrived</i> est aussi correct.)' },
    { type: 'gap', q: 'If it ___ (rain) tomorrow, we’ll move the company picnic indoors.', answers: ['rains'], explain: 'Après <b>if</b>, on met le <b>présent</b> même pour parler de demain : <b>rains</b> (it → -s). Traduction : « S’il pleut demain, nous ferons le pique-nique de l’entreprise à l’intérieur. »' },
    { type: 'order', answer: "I'll call you when I arrive.", alts: ["When I arrive I'll call you."], fr: 'Je t’appellerai quand j’arriverai.', explain: '<b>I’ll call you</b> (futur) + <b>when I arrive</b> (présent après when). Jamais « when I will arrive ».' },
    { type: 'order', answer: 'When will the new office open?', fr: 'Quand le nouveau bureau ouvrira-t-il ?', explain: 'Ici, <i>when</i> pose une <b>question</b> : <i>will</i> est normal. Ordre : <b>When + will + sujet + base verbale ?</b>' },
    { type: 'listen', accent: 'en-CA', say: "Hi Daniel, it's Priya. I'm flying to Chicago on Tuesday, and I'm meeting the sales team on Wednesday morning. I'll call you when I get back.", q: 'Que fait Priya mercredi matin ?', options: ['Elle prend l’avion pour Chicago.', 'Elle rencontre l’équipe commerciale.', 'Elle rappelle Daniel.'], answer: 1, explain: 'Elle dit <i>I’m <b>meeting the sales team</b> on Wednesday morning</i> (rendez-vous organisé). L’avion, c’est mardi, et elle rappellera Daniel à son retour.' },
    { type: 'dictation', accent: 'en-GB', say: "We won't be late for the meeting.", answers: ["We won't be late for the meeting", 'We will not be late for the meeting'], explain: '« Nous ne serons pas en retard à la réunion. » <i>won’t</i> (= will not) rime avec <i>don’t</i> : ne le confonds pas avec <i>want</i>.' },
    { type: 'mcq', q: 'The new travel policy ------- effective next month. <small>(style TOEIC)</small>', options: ['became', 'will become', 'has become', 'becoming'], answer: 1, explain: '<i>next month</i> indique le futur → <b>will become</b>. <i>became</i> et <i>has become</i> parlent du passé ; <i>becoming</i> seul n’est pas un verbe conjugué.' },
    { type: 'mcq', q: 'Please contact Mr. Haddad as soon as the shipment -------. <small>(style TOEIC)</small>', options: ['arrives', 'will arrive', 'arrived', 'arriving'], answer: 0, explain: 'Après <b>as soon as</b> (dès que), on met le <b>présent</b> même pour le futur : <b>arrives</b>. <i>will arrive</i> est le piège classique.' }
  ]
});
