LE.register({
  id: 'g26',
  kind: 'grammar',
  title: 'Obligation et conseil : must, have to, should',
  subtitle: 'Dire ce qu’on doit faire, ce qui est interdit, ce qui n’est pas obligatoire et ce qu’il vaut mieux faire',
  level: 'A2',
  minutes: 40,
  goals: [
    'Exprimer une obligation avec <b>must</b> et <b>have to</b>, au présent, au passé (<i>had to</i>) et au futur (<i>will have to</i>)',
    'Ne plus jamais confondre <b>mustn’t</b> (c’est interdit) et <b>don’t have to</b> (ce n’est pas obligatoire)',
    'Donner un conseil avec <b>should</b>, <b>shouldn’t</b> et <b>ought to</b>',
    'Comprendre les formules des règlements du TOEIC : <i>be required to, be allowed to, be supposed to</i>'
  ],
  blocks: [
    { type: 'h', text: 'Un seul verbe en français, plusieurs en anglais' },
    { type: 'p', html: 'En français, le verbe <b>devoir</b> sert à tout : « Je <b>dois</b> partir » (obligation), « Tu <b>devrais</b> te reposer » (conseil), « Tu ne <b>dois</b> pas fumer ici » (interdiction). L’anglais, lui, choisit un mot différent selon la <b>force</b> de l’obligation et selon <b>qui</b> l’impose. C’est un point essentiel au TOEIC : règlements, consignes de sécurité, notes de service et conseils sont partout.' },
    { type: 'table', head: ['Français', 'Anglais', 'Sens'], rows: [
      ['Je <b>dois</b> finir ce rapport.', 'I <b>must</b> finish this report. / I <b>have to</b> finish this report.', 'obligation'],
      ['Tu ne <b>dois</b> pas fumer ici.', 'You <b>mustn’t</b> smoke here.', 'interdiction'],
      ['Tu n’es pas <b>obligée</b> de venir.', 'You <b>don’t have to</b> come.', 'absence d’obligation'],
      ['Tu <b>devrais</b> te reposer.', 'You <b>should</b> rest.', 'conseil']
    ], caption: 'Retiens dès maintenant : la phrase négative change complètement de sens selon qu’on part de <b>must</b> ou de <b>have to</b>.' },

    { type: 'h', text: 'Les règles des modaux' },
    { type: 'p', html: '<b>Must</b> et <b>should</b> (comme <i>can</i>, <i>will</i>, <i>may</i>…) sont des <b>modaux</b> : de petits verbes auxiliaires qui ajoutent une nuance (obligation, conseil, possibilité…) au verbe principal. Ils obéissent tous à quatre règles très simples :' },
    { type: 'list', ordered: true, items: [
      'Ils sont suivis de la <b>base verbale</b> (l’infinitif sans <i>to</i>) : <i>You must <b>wear</b> a badge.</i>',
      'Ils ne prennent <b>jamais de -s</b>, même avec <i>he, she, it</i> : <i>She <b>must</b> leave.</i> (et pas <span class="ko">she musts</span>)',
      'Ils ne sont <b>jamais suivis de to</b> : <span class="ko">You should to call him.</span> → <span class="ok">You should call him.</span>',
      'Ils n’utilisent <b>pas do / does / did</b> : négation avec <b>not</b> (<i>You <b>shouldn’t</b> worry.</i>) et question par inversion (<i><b>Should I</b> call him?</i>).'
    ] },
    { type: 'box', style: 'warn', title: 'Piège : « have to » n’est pas un modal', html: '<b>Have to</b> veut dire « devoir », mais il se conjugue comme un <b>verbe ordinaire</b> : il prend un <b>-s</b> (<i>she <b>has to</b></i>), il a besoin de <b>do / does / did</b> à la négation et à la question (<i>She <b>doesn’t have to</b> come. <b>Does</b> she <b>have to</b> come?</i>) et il a un passé (<i>had to</i>).<br><span class="ko">She have to work.</span> → <span class="ok">She has to work.</span><br><span class="ko">Have you to work?</span> → <span class="ok">Do you have to work?</span>' },

    { type: 'h', text: 'Must : une obligation forte' },
    { type: 'p', html: '<b>Must</b> exprime une obligation forte. On le rencontre surtout <b>à l’écrit</b> (règlements, panneaux, consignes, contrats) ou quand c’est <b>la personne qui parle</b> qui décide que c’est nécessaire. Il n’a qu’une seule forme : pas de passé et pas de futur avec <i>will</i> (on verra plus bas comment faire).' },
    { type: 'examples', items: [
      { en: 'All visitors must sign in at the front desk.', fr: 'Tous les visiteurs doivent s’enregistrer à l’accueil.', note: 'Une règle écrite : c’est l’emploi typique de <b>must</b>.' },
      { en: 'Passengers must show their boarding pass at the gate.', fr: 'Les passagers doivent présenter leur carte d’embarquement à la porte.' },
      { en: "I must call my sister tonight. It's her birthday.", fr: 'Il faut que j’appelle ma sœur ce soir. C’est son anniversaire.', note: 'C’est moi qui décide que c’est important : obligation personnelle.' },
      { en: 'You must try this restaurant. The food is excellent!', fr: 'Il faut absolument que tu essaies ce restaurant. La cuisine est excellente !', note: '<b>Must</b> sert aussi à faire une recommandation très enthousiaste.' }
    ] },

    { type: 'h', text: 'Have to : l’obligation qui vient de l’extérieur' },
    { type: 'p', html: '<b>Have to</b> (<b>has to</b> avec <i>he, she, it</i>) exprime une obligation <b>imposée de l’extérieur</b> : par une loi, par le chef, par la situation. On n’a pas le choix. C’est la forme <b>la plus courante à l’oral</b>, surtout en anglais américain. À la forme affirmative, <i>must</i> et <i>have to</i> sont très souvent interchangeables. Dans un style familier, tu entendras aussi <b>have got to</b> : <i>I<b>’ve got to</b> go.</i> = <i>I have to go.</i> (Il faut que j’y aille.)' },
    { type: 'table', head: ['Temps', 'Affirmation', 'Négation', 'Question'], rows: [
      ['Présent (I, you, we, they)', 'I <b>have to</b> work.', 'I <b>don’t have to</b> work.', '<b>Do</b> I <b>have to</b> work?'],
      ['Présent (he, she, it)', 'She <b>has to</b> work.', 'She <b>doesn’t have to</b> work.', '<b>Does</b> she <b>have to</b> work?'],
      ['Passé', 'We <b>had to</b> wait.', 'We <b>didn’t have to</b> wait.', '<b>Did</b> we <b>have to</b> wait?'],
      ['Futur', 'You’<b>ll have to</b> wait.', 'You <b>won’t have to</b> wait.', '<b>Will</b> you <b>have to</b> wait?']
    ], caption: '<b>Must</b> n’a pas de passé : « j’ai dû » se dit <b>I had to</b>. Pas de futur non plus : « je devrai » se dit <b>I will have to</b> (<span class="ko">I will must</span> n’existe pas).' },
    { type: 'examples', items: [
      { en: 'I have to work late tonight.', fr: 'Je dois travailler tard ce soir.', note: 'À l’oral, <b>have to</b> se prononce presque « <b>haf-teu</b> », et <b>has to</b> « <b>has-teu</b> ».' },
      { en: 'Ms. Okafor has to be at the airport at six.', fr: 'Mme Okafor doit être à l’aéroport à six heures.' },
      { en: 'Do we have to wear a tie to the dinner?', fr: 'Est-ce qu’on doit porter une cravate pour le dîner ?' },
      { en: 'We had to cancel the meeting yesterday.', fr: 'Nous avons dû annuler la réunion hier.' },
      { en: "You'll have to fill out this form.", fr: 'Tu devras remplir ce formulaire.', accent: 'en-GB' }
    ] },

    { type: 'h', text: 'Le piège n°1 : mustn’t ≠ don’t have to' },
    { type: 'p', html: 'À la forme affirmative, <i>must</i> ≈ <i>have to</i>. Mais à la forme <b>négative</b>, le sens change complètement ! C’est l’erreur la plus fréquente des francophones sur ce sujet, et un classique des tests.' },
    { type: 'table', head: ['Forme', 'Sens', 'En français', 'Exemple'], rows: [
      ['<b>mustn’t</b> (must not)', '<span class="ko">interdiction</span> : c’est défendu', 'Il ne faut pas… / Tu n’as pas le droit de…', '<i>You <b>mustn’t</b> park here.</i> (C’est interdit.)'],
      ['<b>don’t have to</b>', '<span class="ok">absence d’obligation</span> : tu as le choix', 'Tu n’es pas obligée de… / Pas besoin de…', '<i>You <b>don’t have to</b> come.</i> (Viens si tu veux.)']
    ], caption: 'Au passé : pas d’obligation → <b>didn’t have to</b> (<i>We didn’t have to pay.</i> = Nous n’avons pas eu besoin de payer) ; interdiction → <b>couldn’t</b> ou <b>wasn’t / weren’t allowed to</b> (<i>We weren’t allowed to take photos.</i> = Nous n’avions pas le droit de prendre de photos).' },
    { type: 'box', style: 'warn', title: 'Piège : « Tu ne dois pas… »', html: '« Tu ne dois pas fumer ici » = c’est <b>interdit</b> → <span class="ok">You mustn’t smoke here.</span><br><span class="ko">You don’t have to smoke here.</span> voudrait dire « Tu n’es pas obligée de fumer ici » !<br>Prononciation : dans <b>mustn’t</b>, le premier <b>t</b> est muet → « <b>meu-sseunt</b> ». En anglais américain, à l’oral, on dit plutôt <i>you <b>can’t</b> park here</i> ou <i>you’re <b>not allowed to</b> park here</i> ; <i>must not</i> reste très courant à l’écrit.' },
    { type: 'examples', items: [
      { en: 'You mustn\'t use your phone during the exam.', fr: 'Tu ne dois pas utiliser ton téléphone pendant l’examen.', accent: 'en-GB' },
      { en: 'Employees must not share their passwords.', fr: 'Les employés ne doivent pas communiquer leur mot de passe.', note: 'Forme pleine <b>must not</b> : typique d’un règlement écrit.' },
      { en: "You don't have to print the tickets. You can show them on your phone.", fr: 'Tu n’as pas besoin d’imprimer les billets. Tu peux les montrer sur ton téléphone.' },
      { en: "Tomorrow is a holiday, so I don't have to get up early.", fr: 'Demain, c’est férié, donc je ne suis pas obligée de me lever tôt.' }
    ] },

    { type: 'h', text: 'Need to, don’t need to, needn’t' },
    { type: 'p', html: '<b>Need to</b> (avoir besoin de, devoir) exprime une <b>nécessité</b> ; il se conjugue comme un verbe ordinaire (<i>she <b>needs to</b></i>). <b>Don’t need to</b> a le même sens que <i>don’t have to</i> : ce n’est pas nécessaire. <b>Needn’t</b> (sans <i>to</i>, c’est un modal) veut dire la même chose, mais il est plutôt britannique et un peu formel.' },
    { type: 'examples', items: [
      { en: 'I need to talk to you.', fr: 'Il faut que je te parle.' },
      { en: 'She needs to renew her passport before June.', fr: 'Elle doit renouveler son passeport avant juin.' },
      { en: "You don't need to bring anything. We have everything.", fr: 'Tu n’as besoin de rien apporter. Nous avons tout ce qu’il faut.' },
      { en: "You needn't worry. Everything is ready.", fr: 'Tu n’as pas besoin de t’inquiéter. Tout est prêt.', accent: 'en-GB' }
    ] },

    { type: 'h', text: 'Should, shouldn’t et ought to : le conseil' },
    { type: 'p', html: '<b>Should</b> = « tu devrais », « il faudrait ». C’est un <b>conseil</b> ou une recommandation, pas une obligation. <b>Shouldn’t</b> = « tu ne devrais pas ». <b>Ought to</b> a le même sens que <i>should</i>, en un peu plus formel et plus rare ; c’est le seul de ces mots qui contient <b>to</b>. Pour demander conseil : <i><b>Should I</b>…?</i> (Est-ce que je devrais… ?) Plus fort encore : <b>had better</b> (souvent contracté en <b>’d better</b>) + base verbale = « tu ferais mieux de », avec l’idée qu’il y aura un problème sinon. Malgré <i>had</i>, le sens est présent ou futur.' },
    { type: 'examples', items: [
      { en: 'You should rest. You look tired.', fr: 'Tu devrais te reposer. Tu as l’air fatiguée.' },
      { en: "You shouldn't drink coffee so late.", fr: 'Tu ne devrais pas boire de café si tard.' },
      { en: 'Should I call the client now? — Yes, I think you should.', fr: 'Est-ce que je devrais appeler le client maintenant ? — Oui, je pense que tu devrais.' },
      { en: 'I think you should apply for the job.', fr: 'Je pense que tu devrais postuler à ce poste.', note: 'Pour donner un conseil de façon douce : <b>I think you should…</b>' },
      { en: 'We ought to leave now if we want to catch the train.', fr: 'Nous devrions partir maintenant si nous voulons attraper le train.', accent: 'en-AU' },
      { en: "You'd better hurry. The store closes in ten minutes.", fr: 'Tu ferais mieux de te dépêcher. Le magasin ferme dans dix minutes.', note: '<b>’d better</b> = <i>had better</i> : un conseil fort, presque un avertissement.' }
    ] },

    { type: 'h', text: 'Les formules des règlements : required, allowed, supposed' },
    { type: 'p', html: 'Dans les notes de service, les règlements et les annonces du TOEIC, on trouve très souvent des expressions construites avec <b>be</b> (conjugué) + un participe passé (la 3ᵉ colonne des verbes) + <b>to</b> + base verbale.' },
    { type: 'table', head: ['Expression', 'Sens', 'Exemple'], rows: [
      ['<b>be required to</b>', 'être tenu(e) de, devoir (obligation officielle)', '<i>Employees <b>are required to</b> wear badges.</i>'],
      ['<b>be allowed to</b> / <b>be permitted to</b>', 'avoir le droit de, être autorisé(e) à', '<i>Visitors <b>are allowed to</b> take photos in the lobby.</i>'],
      ['<b>be not allowed to</b>', 'ne pas avoir le droit de', '<i>You <b>are not allowed to</b> smoke in the building.</i>'],
      ['<b>be supposed to</b>', 'être censé(e) (c’est ce qui est prévu ou attendu)', '<i>The train <b>is supposed to</b> arrive at 9:15.</i>']
    ], caption: 'N’oublie jamais le verbe <b>be</b> : <span class="ko">Employees required to wear badges.</span> → <span class="ok">Employees <b>are</b> required to wear badges.</span>' },
    { type: 'examples', items: [
      { en: 'Employees are required to wear their badges at all times.', fr: 'Les employés sont tenus de porter leur badge en permanence.' },
      { en: 'All applicants are required to submit two references.', fr: 'Tous les candidats doivent fournir deux références.' },
      { en: 'Guests are not allowed to bring food into the pool area.', fr: 'Les clients n’ont pas le droit d’apporter de la nourriture dans l’espace piscine.' },
      { en: "I'm supposed to meet Mr. Tanaka at ten, but he's late.", fr: 'Je suis censée voir M. Tanaka à dix heures, mais il est en retard.', note: '<b>Be supposed to</b> : ce qui est prévu… mais qui ne se passe pas toujours comme prévu !' },
      { en: "You weren't supposed to tell anyone!", fr: 'Tu n’étais censé le dire à personne !', accent: 'en-CA' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : « supposed to » ≠ « supposer »', html: '<i>I <b>suppose</b> he’s right.</i> = Je <b>suppose</b> qu’il a raison.<br><i>I’m <b>supposed to</b> call him.</i> = Je suis <b>censée</b> l’appeler.<br>Et n’oublie pas <b>be</b> : <span class="ko">I supposed to call him.</span> → <span class="ok">I’m supposed to call him.</span>' },

    { type: 'h', text: 'Synthèse : de l’interdiction à l’obligation' },
    { type: 'table', head: ['Force', 'Anglais', 'Français'], rows: [
      ['Interdit', '<b>mustn’t</b> / <b>can’t</b> / <b>be not allowed to</b>', 'Il est interdit de… / Tu n’as pas le droit de…'],
      ['Déconseillé', '<b>shouldn’t</b>', 'Tu ne devrais pas…'],
      ['Pas obligatoire', '<b>don’t have to</b> / <b>don’t need to</b> / <b>needn’t</b>', 'Tu n’es pas obligée de… / Pas besoin de…'],
      ['Conseillé', '<b>should</b> / <b>ought to</b>', 'Tu devrais… / Il faudrait…'],
      ['Conseil fort (sinon, problème)', '<b>had better</b> (’d better)', 'Tu ferais mieux de…'],
      ['Obligatoire', '<b>must</b> / <b>have to</b> / <b>need to</b> / <b>be required to</b>', 'Tu dois… / Il faut…']
    ] },
    { type: 'dialog', title: 'Premier jour : le règlement intérieur', accent: 'en-GB', lines: [
      { speaker: 'W', en: 'Welcome to Norvell Logistics, Daniel. Let me explain a few rules.', fr: 'Bienvenue chez Norvell Logistics, Daniel. Laisse-moi t’expliquer quelques règles.' },
      { speaker: 'M', en: 'Great. Do I have to wear a uniform?', fr: 'Parfait. Est-ce que je dois porter un uniforme ?' },
      { speaker: 'W', en: "No, you don't have to wear a uniform, but you must wear your badge at all times.", fr: 'Non, tu n’es pas obligé de porter un uniforme, mais tu dois porter ton badge en permanence.' },
      { speaker: 'M', en: 'OK. Can I park in front of the building?', fr: 'D’accord. Je peux me garer devant le bâtiment ?' },
      { speaker: 'W', en: "No, you mustn't park there. It's for visitors. You should use the car park behind the warehouse.", fr: 'Non, tu ne dois pas te garer là. C’est pour les visiteurs. Tu devrais utiliser le parking derrière l’entrepôt.' },
      { speaker: 'M', en: 'And what time am I supposed to start?', fr: 'Et à quelle heure suis-je censé commencer ?' },
      { speaker: 'W', en: 'At half past eight. And on Fridays, everyone is required to attend the team meeting at nine.', fr: 'À huit heures et demie. Et le vendredi, tout le monde est tenu d’assister à la réunion d’équipe à neuf heures.' },
      { speaker: 'M', en: 'Got it. Thanks for your help.', fr: 'Compris. Merci pour ton aide.' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: '<b>Partie 7</b> : les notes de service et les avis sont pleins de <i>must</i>, <i>are required to</i>, <i>are not permitted to</i>. Une question typique : <i>What are employees <b>required to</b> do?</i><br><b>Parties 3 et 4</b> : on te demande souvent ce que quelqu’un conseille ou doit faire : <i>What does the woman say the man <b>should</b> do?</i> Écoute bien <i>should</i>, <i>have to</i>, <i>need to</i>.<br><b>Partie 5</b> : après un modal, toujours la <b>base verbale</b> : <i>All employees must ------- the safety training.</i> → <b>complete</b> (et pas <i>completes</i> ni <i>to complete</i>).' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• Modaux (<b>must, should</b>) : + base verbale, pas de -s, pas de <i>to</i>, pas de <i>do</i>.<br>• <b>Have to / has to</b> se conjugue comme un verbe normal : <i>does she have to…? / had to / will have to</i>.<br>• <b>mustn’t</b> = interdit ≠ <b>don’t have to</b> = pas obligatoire.<br>• Conseil : <b>should / shouldn’t / ought to</b> ; conseil fort : <b>had better</b>.<br>• Règlements : <b>be required to</b> (obligation), <b>be allowed to</b> (permission), <b>be supposed to</b> (être censé).' }
  ],
  exercises: [
    { type: 'mcq', q: 'She ___ wear a uniform at work.', options: ['have to', 'has to', 'musts'], answer: 1, explain: 'Avec <b>she</b>, <i>have to</i> prend un -s : <b>has to</b>. <i>Musts</i> n’existe pas : un modal ne prend jamais de -s (on dirait <i>she must wear</i>).' },
    { type: 'mcq', q: 'You should ___ a doctor.', options: ['see', 'to see', 'seeing', 'sees'], answer: 0, explain: 'Après un modal comme <b>should</b>, on met la <b>base verbale</b>, sans <i>to</i> et sans -s : <i>You should <b>see</b> a doctor.</i>' },
    { type: 'mcq', q: 'The sign says "NO SMOKING." You ___ smoke here.', options: ["mustn't", "don't have to", "don't need to"], answer: 0, explain: 'Le panneau indique une <b>interdiction</b> → <b>mustn’t</b>. <i>Don’t have to</i> et <i>don’t need to</i> voudraient dire « tu n’es pas obligée de fumer ici ».' },
    { type: 'mcq', q: 'Comment dit-on « Tu n’es pas obligée de venir » ?', options: ["You mustn't come.", "You don't have to come.", "You shouldn't come.", "You haven't to come."], answer: 1, explain: 'Absence d’obligation → <b>don’t have to</b>. <i>You mustn’t come</i> = tu n’as pas le droit de venir ; <i>You shouldn’t come</i> = tu ne devrais pas venir ; <i>haven’t to</i> est incorrect.' },
    { type: 'gap', q: 'Yesterday I ___ (have to) stay at the office until 9 p.m.', answers: ['had to'], explain: '<i>Yesterday</i> → passé. <i>Must</i> n’a pas de passé : on utilise <b>had to</b> (pour toutes les personnes).' },
    { type: 'gap', q: 'You look tired. You ___ go to bed earlier. (conseil : « tu devrais »)', answers: ['should', 'ought to'], explain: '« Tu devrais » = un conseil → <b>should</b> (ou, plus formel, <b>ought to</b>).' },
    { type: 'gap', q: '___ your sister have to work on Saturdays? (présent)', answers: ['Does'], explain: '<i>Have to</i> n’est pas un modal : la question se fait avec <b>do / does</b>. Avec <i>your sister</i> (= she) → <b>Does</b> your sister have to…?' },
    { type: 'gap', q: "It's a holiday tomorrow, so we ___ (not / have to) go to work.", answers: ["don't have to", 'do not have to', "won't have to", 'will not have to'], explain: 'Ce n’est pas une interdiction, c’est une <b>absence d’obligation</b> → <b>don’t have to</b> (ou <b>won’t have to</b>, puisqu’on parle de demain).' },
    { type: 'mcq', q: 'What time ___ supposed to start work?', options: ['we are', 'are we', 'do we', 'we'], answer: 1, explain: '<b>Be supposed to</b> se construit avec <b>be</b> : pour la question, on inverse <b>be</b> et le sujet → <i>What time <b>are we</b> supposed to start?</i>' },
    { type: 'mcq', q: 'Employees ___ required to wear safety glasses in the factory.', options: ['is', 'are', 'have', 'must'], answer: 1, explain: '<b>Be required to</b> : il faut le verbe <b>be</b>. <i>Employees</i> est pluriel → <b>are</b> required to.' },
    { type: 'order', answer: "You don't have to bring your laptop.", fr: 'Tu n’es pas obligée d’apporter ton ordinateur portable.', explain: 'Absence d’obligation : sujet + <b>don’t have to</b> + base verbale (<i>bring</i>) + complément.' },
    { type: 'order', answer: 'Visitors must sign in at the front desk.', fr: 'Les visiteurs doivent s’enregistrer à l’accueil.', explain: 'Règle écrite → <b>must</b> + base verbale (<i>sign in</i>), puis le lieu (<i>at the front desk</i>).' },
    { type: 'listen', say: "Hi Karen, it's Paul. Just a reminder: you don't have to come to the office tomorrow, but you must send me the budget by noon.", accent: 'en-GB', q: 'Que doit faire Karen demain ?', options: ['Venir au bureau avant midi.', 'Envoyer le budget avant midi.', 'Appeler Paul avant midi.', 'Venir au bureau et envoyer le budget.'], answer: 1, explain: '<i>You <b>don’t have to</b> come to the office</i> = elle n’est pas obligée de venir. <i>You <b>must</b> send me the budget by noon</i> = elle doit envoyer le budget avant midi.' },
    { type: 'dictation', say: "You shouldn't leave your bag here.", answers: ["You shouldn't leave your bag here", 'You should not leave your bag here'], explain: '<i>shouldn’t</i> = <i>should not</i> : « Tu ne devrais pas laisser ton sac ici. » C’est un conseil (ou un avertissement poli).' },
    { type: 'mcq', q: 'The dress code is casual on Fridays, so employees ------- wear a suit. <small>(style TOEIC)</small>', options: ["mustn't", "don't have to", 'have to', 'must'], answer: 1, explain: 'La tenue est décontractée le vendredi : le costume n’est <b>pas obligatoire</b> → <b>don’t have to</b>. <i>Mustn’t</i> voudrait dire que le costume est interdit, ce qui n’est pas logique.' },
    { type: 'mcq', q: 'All staff members must ------- the online safety training by June 30. <small>(style TOEIC)</small>', options: ['complete', 'completes', 'completing', 'to complete'], answer: 0, explain: 'Après le modal <b>must</b> → <b>base verbale</b> : <i>must <b>complete</b></i>. Pas de -s, pas de -ing, pas de <i>to</i>.' }
  ]
});
