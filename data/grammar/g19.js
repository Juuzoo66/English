LE.register({
  id: 'g19',
  kind: 'grammar',
  title: 'Le prétérit : négation et questions',
  subtitle: 'Dire ce qui ne s’est pas passé et poser des questions sur le passé avec « did »',
  level: 'A2',
  minutes: 40,
  goals: [
    "Faire une phrase négative au prétérit : <b>didn't</b> + base verbale",
    'Poser une question avec <b>did</b> et y répondre par une réponse courte',
    'Poser des questions sur le passé avec <i>where, when, what time, why…</i>',
    'Savoir quand on n’utilise <b>pas</b> <i>did</i> : <i>Who called? What happened? Were you…?</i>'
  ],
  blocks: [
    { type: 'h', text: 'Le principe : « did » fait tout le travail' },
    { type: 'p', html: 'Au présent, tu utilises <b>do / does</b> pour la négation et les questions (leçon « Le présent simple : négation et questions »). Au prétérit, c’est encore plus simple : on utilise <b>did</b>, le passé de <i>do</i>, à <b>toutes les personnes</b>. Comme <i>did</i> porte déjà la marque du passé, le verbe principal revient à sa <b>base verbale</b> (l’infinitif sans <i>to</i>).' },
    { type: 'table', head: ['Verbe', 'Affirmation', 'Négation', 'Question'], rows: [
      ['work (régulier)', 'She work<b>ed</b>.', "She <b>didn't</b> work.", '<b>Did</b> she work?'],
      ['go (irrégulier)', 'They <b>went</b>.', "They <b>didn't</b> go.", '<b>Did</b> they go?'],
      ['buy (irrégulier)', 'He <b>bought</b> it.', "He <b>didn't</b> buy it.", '<b>Did</b> he buy it?']
    ], caption: "<b>didn't</b> = <b>did not</b> (forme pleine, plus formelle, fréquente à l’écrit). Même forme pour I, you, he, she, it, we, they." },
    { type: 'examples', items: [
      { en: "I didn't receive your email.", fr: 'Je n’ai pas reçu ton e-mail.' },
      { en: "We didn't go to the conference last year.", fr: 'Nous ne sommes pas allés à la conférence l’an dernier.' },
      { en: 'Did you call the supplier?', fr: 'As-tu appelé le fournisseur ?' },
      { en: 'Did the package arrive yesterday?', fr: 'Est-ce que le colis est arrivé hier ?' }
    ] },
    { type: 'box', style: 'warn', title: 'Le piège n°1 : le passé en double', html: "Le passé se marque <b>une seule fois</b>, avec <i>did</i>. Le verbe qui suit reste à la <b>base verbale</b> :<br><span class=\"ko\">She didn't went.</span> → <span class=\"ok\">She didn't go.</span><br><span class=\"ko\">Did you saw my email?</span> → <span class=\"ok\">Did you see my email?</span><br><span class=\"ko\">He didn't called.</span> → <span class=\"ok\">He didn't call.</span>" },

    { type: 'h', text: 'Les réponses courtes' },
    { type: 'p', html: "Pour répondre à une question en <i>Did…?</i>, un simple « Yes » ou « No » paraît un peu sec. Il est plus naturel de reprendre <b>did</b> : <i>Yes, I did.</i> / <i>No, I didn't.</i> On ne répète pas le verbe principal." },
    { type: 'table', head: ['Question', 'Oui', 'Non'], rows: [
      ['Did you finish the report?', 'Yes, I <b>did</b>.', "No, I <b>didn't</b>."],
      ['Did she sign the contract?', 'Yes, she <b>did</b>.', "No, she <b>didn't</b>."],
      ['Did they pay the invoice?', 'Yes, they <b>did</b>.', "No, they <b>didn't</b>."],
      ['Did it work?', 'Yes, it <b>did</b>.', "No, it <b>didn't</b>."]
    ] },
    { type: 'box', style: 'warn', title: 'Piège : le bon auxiliaire', html: 'La question commence par <b>Did</b> ? La réponse courte utilise <b>did</b>, pas <i>do</i>, et on ne reprend pas le verbe seul :<br>Did you like the hotel? <span class="ko">Yes, I do.</span> <span class="ko">Yes, I liked.</span> → <span class="ok">Yes, I did.</span>' },
    { type: 'examples', items: [
      { en: 'Did you book the hotel? Yes, I did.', fr: 'Tu as réservé l’hôtel ? Oui.', note: 'Le français répond simplement « Oui » ou « Non » : pas d’équivalent de <i>I did</i>.' },
      { en: "Did Mr. Sato call back? No, he didn't.", fr: 'Est-ce que M. Sato a rappelé ? Non.' },
      { en: "Did the new printer work? No, it didn't.", fr: 'La nouvelle imprimante a-t-elle fonctionné ? Non.' },
      { en: 'Did the managers approve the budget? Yes, they did.', fr: 'Les responsables ont-ils approuvé le budget ? Oui.' }
    ] },

    { type: 'h', text: 'Les questions avec un mot interrogatif' },
    { type: 'p', html: 'Pour demander <i>où, quand, pourquoi, comment</i>… au passé, on place le mot interrogatif (voir la leçon « Les mots interrogatifs (wh- questions) ») juste avant <b>did</b>. L’ordre est toujours le même : <b>mot interrogatif + did + sujet + base verbale</b> ?' },
    { type: 'table', head: ['Mot interrogatif', 'did', 'Sujet', 'Base verbale…', 'Français'], rows: [
      ['Where', 'did', 'you', 'stay?', 'Où as-tu logé ?'],
      ['When', 'did', 'the shipment', 'arrive?', 'Quand la livraison est-elle arrivée ?'],
      ['What time', 'did', 'the meeting', 'start?', 'À quelle heure la réunion a-t-elle commencé ?'],
      ['Why', 'did', 'they', 'leave early?', 'Pourquoi sont-ils partis tôt ?'],
      ['How', 'did', 'she', 'get to the airport?', 'Comment est-elle allée à l’aéroport ?'],
      ['How much', 'did', 'it', 'cost?', 'Combien est-ce que ça a coûté ?']
    ] },
    { type: 'examples', items: [
      { en: 'Where did you have lunch?', fr: 'Où as-tu déjeuné ?' },
      { en: 'What did the client say?', fr: 'Qu’est-ce que le client a dit ?' },
      { en: 'How long did the training last?', fr: 'Combien de temps la formation a-t-elle duré ?' },
      { en: "Why didn't Karim come to the meeting?", fr: 'Pourquoi Karim n’est-il pas venu à la réunion ?', note: "Question négative : <b>Why didn't</b> + sujet + base verbale. Très fréquent au TOEIC !" }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : n’oublie pas « did »', html: 'En français, on peut dire « Où tu es allée ? » sans rien inverser. En anglais, la question au passé a <b>besoin de did</b> (sauf avec <i>be</i>, et quand <i>who / what</i> est le sujet) :<br><span class="ko">Where you went?</span> → <span class="ok">Where did you go?</span><br><span class="ko">What time the meeting started?</span> → <span class="ok">What time did the meeting start?</span>' },

    { type: 'h', text: 'Qui a appelé ? Que s’est-il passé ? Sans « did » !' },
    { type: 'p', html: 'Quand <b>who</b> (qui) ou <b>what</b> (qu’est-ce qui) est le <b>sujet</b> du verbe (c’est-à-dire quand on cherche <b>qui ou quoi a fait l’action</b>), on n’utilise <b>pas</b> <i>did</i>. Le verbe se met directement au prétérit, comme dans une phrase affirmative.' },
    { type: 'table', head: ['Question sur le sujet (sans did)', 'Question sur le complément (avec did)'], rows: [
      ['<b>Who called</b>? <i>Ms. Lee</i> called.<br><small>Qui a appelé ?</small>', '<b>Who did</b> you <b>call</b>? I called <i>Ms. Lee</i>.<br><small>Qui as-tu appelé ?</small>'],
      ['<b>What happened</b>? <i>The server</i> crashed.<br><small>Que s’est-il passé ?</small>', '<b>What did</b> you <b>buy</b>? I bought <i>a printer</i>.<br><small>Qu’as-tu acheté ?</small>'],
      ['<b>Who sent</b> this package? <i>Mr. Ito</i> did.<br><small>Qui a envoyé ce colis ?</small>', '<b>Who did</b> he <b>send</b> it to? He sent it to <i>Ms. Ruiz</i>.<br><small>À qui l’a-t-il envoyé ?</small>']
    ] },
    { type: 'box', style: 'tip', title: 'Comment savoir ?', html: 'Imagine la réponse. Si elle <b>remplace le sujet</b> (<i><b>Ms. Lee</b> called.</i>), pas de <i>did</i>. Si elle vient <b>après le verbe</b> (<i>I called <b>Ms. Lee</b>.</i>), il faut <i>did</i>. Et retiens par cœur deux questions ultra-fréquentes : <b>Who called?</b> et <b>What happened?</b>' },
    { type: 'examples', items: [
      { en: 'Who took my stapler?', fr: 'Qui a pris mon agrafeuse ?' },
      { en: 'What happened at the meeting?', fr: 'Que s’est-il passé à la réunion ?' },
      { en: 'Who won the contract?', fr: 'Qui a remporté le contrat ?' },
      { en: 'Which team sold the most?', fr: 'Quelle équipe a vendu le plus ?', note: 'Même règle avec <i>which</i> + nom quand il est le sujet : pas de <i>did</i>.' }
    ] },

    { type: 'h', text: 'Et « was / were » ? Jamais de « did » !' },
    { type: 'p', html: 'Rappel de la leçon « Le prétérit de « be » : was et were » : le verbe <b>be</b> se débrouille tout seul. Pour la négation, on ajoute <i>not</i> ; pour la question, on inverse le sujet et le verbe. <b>Did</b> sert pour <b>tous les autres verbes</b>.' },
    { type: 'table', head: ['Forme', 'be (was / were)', 'Autres verbes (did)'], rows: [
      ['Négation', "I <b>wasn't</b> at work.", "I <b>didn't</b> work."],
      ['Question', '<b>Were</b> you busy?', '<b>Did</b> you work late?'],
      ['Réponse courte', "Yes, I <b>was</b>. / No, I <b>wasn't</b>.", "Yes, I <b>did</b>. / No, I <b>didn't</b>."],
      ['Question wh-', 'Where <b>were</b> you?', 'Where <b>did</b> you go?']
    ] },
    { type: 'box', style: 'warn', title: 'Ne mélange pas « did » et « was / were »', html: "<span class=\"ko\">Did you were late?</span> → <span class=\"ok\">Were you late?</span><br><span class=\"ko\">He didn't was there.</span> → <span class=\"ok\">He wasn't there.</span><br><span class=\"ko\">Did the meeting was long?</span> → <span class=\"ok\">Was the meeting long?</span>" },
    { type: 'examples', items: [
      { en: "Were you at the office yesterday? No, I wasn't.", fr: 'Tu étais au bureau hier ? Non.' },
      { en: 'Did you work from home? Yes, I did.', fr: 'Tu as travaillé de chez toi ? Oui.' },
      { en: 'Was the hotel expensive?', fr: 'L’hôtel était-il cher ?' },
      { en: 'Did the hotel have a gym?', fr: 'Est-ce que l’hôtel avait une salle de sport ?' }
    ] },
    { type: 'dialog', title: 'Comment s’est passé ton voyage d’affaires ?', lines: [
      { speaker: 'W', en: 'Welcome back, Daniel! How was your business trip?', fr: 'Bon retour, Daniel ! Comment s’est passé ton voyage d’affaires ?' },
      { speaker: 'M', en: 'It was good, thanks, but a bit tiring.', fr: 'Bien, merci, mais un peu fatigant.' },
      { speaker: 'W', en: 'When did you get back?', fr: 'Quand es-tu rentré ?' },
      { speaker: 'M', en: "Last night. My flight didn't land until eleven.", fr: 'Hier soir. Mon vol n’a atterri qu’à vingt-trois heures.' },
      { speaker: 'W', en: 'Oh no! Did you meet the new distributor?', fr: 'Oh non ! Tu as rencontré le nouveau distributeur ?' },
      { speaker: 'M', en: 'Yes, I did. We had lunch together on Tuesday.', fr: 'Oui. Nous avons déjeuné ensemble mardi.' },
      { speaker: 'W', en: 'Great. Did they sign the contract?', fr: 'Super. Ils ont signé le contrat ?' },
      { speaker: 'M', en: "No, they didn't. They wanted a lower price.", fr: 'Non. Ils voulaient un prix plus bas.' },
      { speaker: 'W', en: 'I see. And what happened at the hotel? You mentioned a problem.', fr: 'Je vois. Et que s’est-il passé à l’hôtel ? Tu as parlé d’un problème.' },
      { speaker: 'M', en: 'They lost my reservation, but they found me another room.', fr: 'Ils ont perdu ma réservation, mais ils m’ont trouvé une autre chambre.' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: "La <b>Partie 2</b> est remplie de questions au passé : <i>When did the shipment arrive?</i>, <i>Who called this morning?</i>, <i>Why didn't you come to the meeting?</i> Écoute bien le <b>premier mot</b> : il annonce le type de réponse (un moment pour <i>when</i>, une personne pour <i>who</i>, une raison pour <i>why</i>). En <b>Partie 5</b>, repère <i>did / didn't / did not</i> : le verbe qui suit est <b>toujours à la base verbale</b>. Ex. : <i>The supplier did not ------- our order on time.</i> → <b>deliver</b>." },
    { type: 'box', style: 'key', title: 'À retenir', html: "• Négation : <b>didn't</b> (did not) + <b>base verbale</b> → <i>I didn't go.</i><br>• Question : <b>Did</b> + sujet + <b>base verbale</b> ? → <i>Did you see it?</i><br>• Réponses courtes : <i>Yes, I did. / No, I didn't.</i><br>• Mot interrogatif + <b>did</b> + sujet + base verbale : <i>Where did you go?</i><br>• Pas de <i>did</i> quand <i>who / what</i> est le sujet (<i>Who called? What happened?</i>) ni avec <i>was / were</i> (<i>Were you there?</i>)." }
  ],
  exercises: [
    { type: 'mcq', q: 'Je n’ai pas vu l’e-mail. → I ___ the email.', options: ["didn't see", "didn't saw", 'not saw', "don't see"], answer: 0, explain: "Négation au prétérit : <b>didn't + base verbale</b>. <i>didn't saw</i> met le passé deux fois ; <i>don't see</i> est au présent." },
    { type: 'mcq', q: '___ you finish the report yesterday?', options: ['Do', 'Did', 'Were', 'Are'], answer: 1, explain: '<i>Yesterday</i> → passé, et <i>finish</i> est un verbe « ordinaire » → question avec <b>Did</b>. <i>Were</i> ne s’emploie pas devant une base verbale (<i>Were you busy?</i>, mais pas « Were you finish »).' },
    { type: 'gap', q: 'We ___ (not / go) to the trade fair last year.', answers: ["didn't go", 'did not go'], explain: "Négation : <b>didn't</b> (ou <i>did not</i>) + base verbale <b>go</b>. Surtout pas « didn't went » !" },
    { type: 'gap', q: 'A: Did you call the client? B: Yes, I ___. <small>(réponse courte)</small>', answers: ['did'], explain: 'Réponse courte : on reprend l’auxiliaire de la question, <b>did</b>, sans répéter le verbe.' },
    { type: 'gap', q: 'A: Did Mr. Kaya sign the contract? B: No, he ___. <small>(réponse courte)</small>', answers: ["didn't", 'did not'], explain: "Réponse courte négative : <b>No, he didn't.</b> (forme pleine : <i>did not</i>)." },
    { type: 'mcq', q: 'Quelle question est correcte ?', options: ['Did she went to the meeting?', 'Did she go to the meeting?', 'Does she went to the meeting?', 'Went she to the meeting?'], answer: 1, explain: '<b>Did</b> + sujet + <b>base verbale</b> : <i>Did she go…?</i> Le passé est déjà dans <i>did</i> : pas de <i>went</i> après.' },
    { type: 'gap', q: 'Where ___ (you / stay) in Seoul last month?', answers: ['did you stay', 'were you staying'], explain: 'Mot interrogatif + <b>did</b> + sujet + base verbale : <i>Where <b>did you stay</b>…?</i> (<i>were you staying</i>, au past continuous, est aussi correct).' },
    { type: 'gap', q: 'A: When ___ (Ms. Wong / join) the company? B: Three years ago.', answers: ['did Ms. Wong join', 'did Ms Wong join'], explain: 'La réponse (<i>three years ago</i>) montre qu’on parle du passé : <i>When</i> + <b>did</b> + sujet (<i>Ms. Wong</i>) + base verbale (<b>join</b>).' },
    { type: 'mcq', q: 'What ___ at the meeting yesterday?', options: ['happened', 'did happened', 'happens', 'was happen'], answer: 0, explain: '<i>What</i> est ici le <b>sujet</b> (qu’est-ce qui s’est passé ?) : pas de <i>did</i>, le verbe se met directement au prétérit → <b>What happened?</b>' },
    { type: 'mcq', q: '___ you at the office yesterday afternoon?', options: ['Did', 'Were', 'Was', 'Do'], answer: 1, explain: 'Pas d’autre verbe dans la phrase : c’est le verbe <b>be</b>. Au passé avec <i>you</i> → <b>Were</b> you…? Jamais de <i>did</i> avec <i>was / were</i>.' },
    { type: 'order', answer: 'Why did they cancel the order?', fr: 'Pourquoi ont-ils annulé la commande ?', explain: 'Mot interrogatif (<i>Why</i>) + <b>did</b> + sujet (<i>they</i>) + base verbale (<i>cancel</i>) + complément.' },
    { type: 'order', answer: "The client didn't pay the invoice last month.", alts: ["Last month the client didn't pay the invoice."], fr: 'Le client n’a pas payé la facture le mois dernier.', explain: "Sujet + <b>didn't</b> + base verbale (<i>pay</i>) + complément + marqueur de temps." },
    { type: 'listen', accent: 'en-GB', say: 'Who called you this morning?', q: 'Quelle est la meilleure réponse ?', options: ['My manager did.', 'Yes, she called me.', "At nine o'clock."], answer: 0, explain: 'La question porte sur le <b>sujet</b> (qui a appelé ?) : on répond par une personne. <i>My manager did.</i> = « C’est mon responsable. » <i>Yes…</i> répond à une question fermée et <i>At nine</i> à <i>when</i>.' },
    { type: 'dictation', say: "We didn't have time to finish the project.", answers: ["We didn't have time to finish the project", 'We did not have time to finish the project'], explain: "<i>didn't</i> + base verbale <b>have</b> : « Nous n’avons pas eu le temps de terminer le projet. »" },
    { type: 'mcq', q: 'The client did not ------- the invoice until last Friday. <small>(style TOEIC)</small>', options: ['receive', 'received', 'receives', 'receiving'], answer: 0, explain: 'Après <b>did not</b>, toujours la <b>base verbale</b> : <i>receive</i>. Le passé est déjà marqué par <i>did</i>.' },
    { type: 'mcq', q: 'Why ------- Mr. Chen leave the conference early yesterday? <small>(style TOEIC)</small>', options: ['was', 'did', 'does', 'is'], answer: 1, explain: '<i>Yesterday</i> → passé, et <i>leave</i> est une base verbale → <b>did</b>. <i>Was</i> et <i>is</i> ne s’emploient pas devant une base verbale ; <i>does</i> est au présent.' }
  ]
});
