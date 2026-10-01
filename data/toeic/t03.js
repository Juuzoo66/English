LE.register({
  id: 't03',
  kind: 'toeic',
  part: 3,
  title: 'Partie 3 : Conversations',
  subtitle: 'Comprendre des dialogues du monde du travail et répondre à 3 questions écrites',
  level: 'B1',
  minutes: 50,
  goals: [
    'Connaître le format de la Partie 3 et lire les questions <b>avant</b> d’écouter',
    'Reconnaître les types de questions (sujet, lieu, problème, demande, suggestion, suite…) et savoir quoi écouter',
    'Déjouer les pièges : mot répété, sons proches, « qui fait quoi ? »',
    'Réussir les questions avec graphique, les questions d’intention et les conversations à 3 personnes'
  ],
  blocks: [
    { type: 'h', text: 'La Partie 3 en bref' },
    { type: 'p', html: 'En Partie 3, tu entends des <b>conversations</b> entre deux ou trois personnes, presque toujours au travail : une collègue qui cherche du papier, une cliente qui appelle un fournisseur, une équipe qui prépare un événement… Après chaque conversation, tu réponds à <b>3 questions</b>. Bonne nouvelle : contrairement aux Parties 1 et 2, <b>les questions et leurs 4 options sont écrites</b> dans ton livret. Tu peux donc les lire <b>avant</b> d’écouter !' },
    { type: 'table', head: ['Élément', 'Au vrai TOEIC'], rows: [
      ['Nombre de conversations', '<b>13</b>, entre 2 ou 3 personnes'],
      ['Nombre de questions', '<b>39</b> (questions 32 à 70), soit 3 par conversation'],
      ['Ce qui est écrit', 'Les questions et les 4 options (A, B, C, D), mais <b>pas</b> la conversation'],
      ['Ce qui est lu à voix haute', 'La conversation, <b>une seule fois</b>, puis les 3 questions (sans les options)'],
      ['Temps pour répondre', 'Environ <b>8 secondes</b> après la lecture de chaque question'],
      ['Questions spéciales', 'Quelques conversations à <b>3 personnes</b>, quelques questions d’<b>intention</b> (« Que veut dire l’homme quand il dit… ? ») et, en général vers la fin, des conversations avec un <b>graphique</b>']
    ], caption: 'La Partie 3 représente <b>39 des 100 questions</b> du Listening : c’est la plus grosse partie de l’épreuve d’écoute.' },

    { type: 'h', text: 'La méthode : lire avant d’écouter' },
    { type: 'p', html: 'Le secret de la Partie 3, c’est l’<b>anticipation</b>. Quand tu sais à l’avance ce qu’on va te demander, tu n’écoutes plus « tout » : tu cherches des informations précises. C’est beaucoup plus facile, même quand tu ne comprends pas chaque mot.' },
    { type: 'list', ordered: true, items: [
      '<b>Pendant les consignes</b> (<i>Directions</i>, environ 30 secondes au début de la partie) : tu les connais déjà grâce à cette leçon, alors ne les écoute pas ! Lis tout de suite les 3 questions de la première conversation.',
      '<b>Repère les mots-clés</b> de chaque question (<i>man</i> ou <i>woman</i> ? <i>problem</i>, <i>suggest</i>, <i>next</i>, <i>when</i>…) et garde-les en tête : tu n’as pas le droit d’écrire sur le livret. S’il te reste du temps, survole les options.',
      '<b>Pendant la conversation</b>, choisis tes réponses <b>au fur et à mesure</b>. N’attends pas la fin : tu aurais oublié les détails.',
      '<b>Dès la fin de la conversation</b>, vérifie tes 3 réponses en quelques secondes. Si tu hésites, choisis la plus probable et n’y pense plus.',
      '<b>Pendant que la voix lit les questions</b> (tu n’en as pas besoin, elles sont écrites !), lis déjà les 3 questions de la conversation <b>suivante</b>. Et le cycle recommence.'
    ] },
    { type: 'box', style: 'tip', title: 'Ne reste jamais bloquée', html: 'Au TOEIC, une mauvaise réponse ne te fait <b>pas perdre de points</b>. Si tu as raté une information, coche quand même une réponse et passe à la suite. Si tu t’acharnes sur une question, tu rates le début de la conversation suivante… et tu risques de perdre 3 réponses au lieu d’une.' },

    { type: 'h', text: 'Les types de questions' },
    { type: 'table', head: ['Type', 'Question typique', 'Ce que tu dois écouter'], rows: [
      ['Sujet général', 'What are the speakers mainly discussing?', 'Le <b>début</b> : les deux premières répliques annoncent presque toujours le sujet.'],
      ['Lieu', 'Where most likely are the speakers?', 'Des indices de vocabulaire : <i>receipt, size</i> → un magasin ; <i>boarding pass, gate</i> → un aéroport.'],
      ['Identité / métier', 'Who most likely is the woman? / Where does the man work?', 'Ce que la personne fait ou propose : <i>Let me check your reservation</i> → un·e réceptionniste.'],
      ['Problème', 'What problem does the man mention?', 'Les mots négatifs : <i>but, unfortunately, I’m afraid, broken, late, canceled…</i>'],
      ['Demande', 'What does the woman ask the man to do?', 'Les formules de demande : <i>Could you…? Can you…? Would you mind…? Please…</i>'],
      ['Suggestion / offre', 'What does the man suggest? / What does the woman offer to do?', '<i>Why don’t you…? You could… How about…?</i> (suggestion) ; <i>I’ll… / Let me… / I can…</i> (offre)'],
      ['Prochaine action', 'What will the woman most likely do next?', 'La <b>fin</b> : <i>I’ll go…, I’m going to…, Let’s…</i>'],
      ['Détail chiffré', 'When…? What time…? How much…? How many…?', 'Heures, dates, prix, quantités : attention aux chiffres entendus puis <b>modifiés</b>.'],
      ['Intention', 'What does the man mean when he says, "…"?', 'Le contexte <b>avant et après</b> la phrase citée : c’est lui qui donne le sens.'],
      ['Graphique', 'Look at the graphic. Which…?', 'Une information de l’audio à <b>croiser</b> avec le document.']
    ], caption: 'Reconnaître le type de question du premier coup d’œil, c’est savoir <b>quoi écouter</b>.' },
    { type: 'examples', items: [
      { en: 'What are the speakers mainly discussing?', fr: 'De quoi parlent principalement les interlocuteurs ?', note: '<i>mainly</i> = principalement. Réponse au début de la conversation.' },
      { en: 'Where does the conversation most likely take place?', fr: 'Où la conversation a-t-elle le plus probablement lieu ?', note: '<i>most likely</i> = « le plus probablement » : c’est une <b>déduction</b>, le lieu n’est pas forcément nommé.' },
      { en: 'What does the woman ask the man to do?', fr: 'Que demande la femme à l’homme de faire ?', note: 'C’est la <b>femme</b> qui demande et l’<b>homme</b> qui fera l’action.' },
      { en: 'What does the man offer to do?', fr: 'Que propose de faire l’homme ?', note: '<i>offer</i> = proposer de faire <b>soi-même</b> quelque chose (≠ <i>suggest</i> = conseiller à quelqu’un de faire quelque chose).' },
      { en: 'What will the man most likely do next?', fr: 'Que va probablement faire l’homme ensuite ?', note: 'Réponse presque toujours dans les <b>dernières</b> répliques.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : qui fait quoi ?', html: 'Lis bien <b>man</b> ou <b>woman</b> dans la question ! Un piège très fréquent : l’option décrit ce que fait l’<b>autre</b> personne. Si la femme dit <i>I’ll send the invoice</i> et l’homme <i>I’ll call the client</i>, la question <i>What will the man do?</i> proposera sûrement l’option <i>Send an invoice</i>… qui est fausse.' },
    { type: 'box', style: 'info', title: 'Les réponses suivent l’ordre de la conversation', html: 'En général, la réponse à la <b>1ʳᵉ question</b> se trouve au début de la conversation, celle de la <b>2ᵉ</b> au milieu, celle de la <b>3ᵉ</b> à la fin. Si la conversation avance et que tu n’as pas trouvé la réponse 1, ne reste pas bloquée : concentre-toi sur la 2 et choisis une réponse pour la 1 à la fin. Seule exception : les questions générales (sujet, lieu, métier) demandent parfois de comprendre l’ensemble.' },
    { type: 'table', head: ['Mot-clé de la question', 'Traduction', 'Ce qu’il faut repérer dans l’audio'], rows: [
      ['<i>mainly discussing / about / purpose</i>', 'principalement / au sujet de / but', 'le sujet, annoncé dès le début'],
      ['<i>most likely</i>', 'le plus probablement', 'des indices pour <b>déduire</b> (lieu, métier…)'],
      ['<i>work / job / occupation</i>', 'travailler / emploi / profession', 'le vocabulaire du métier'],
      ['<i>problem / concern / issue</i>', 'problème / inquiétude / souci', '<i>but, unfortunately, I’m afraid…</i>'],
      ['<i>ask / request</i>', 'demander', '<i>Could you…? Can you…? Please…</i>'],
      ['<i>suggest / recommend</i>', 'suggérer / recommander', '<i>Why don’t you…? You should… How about…?</i>'],
      ['<i>offer</i>', 'proposer (de faire soi-même) ; offrir (une réduction…)', '<i>I can… / Let me… / Shall I…? / We’ll give you…</i>'],
      ['<i>agree to</i>', 'accepter de', '<i>Sure. / No problem. / I’ll do it.</i>'],
      ['<i>next / plan to / will</i>', 'ensuite / avoir l’intention de / va', 'les dernières répliques'],
      ['<i>according to</i>', 'd’après, selon', 'les paroles de la personne citée'],
      ['<i>mean / imply</i>', 'vouloir dire / sous-entendre', 'le contexte autour de la phrase citée'],
      ['<i>Look at the graphic.</i>', 'Regarde le document.', 'l’information à croiser avec le tableau']
    ], caption: 'Les mots-clés des questions : à reconnaître en une seconde.' },

    { type: 'h', text: 'Le grand piège : le mot répété' },
    { type: 'p', html: 'Au TOEIC, la bonne option <b>reformule</b> presque toujours ce qui a été dit, avec d’autres mots : c’est une <b>paraphrase</b> (dire la même chose autrement). Un synonyme remplace un mot (<i>call</i> → <i>contact</i>), un mot général remplace un mot précis (<i>copier</i> → <i>machine</i>). À l’inverse, l’option qui reprend <b>exactement un mot entendu</b> est souvent un piège, fabriqué pour attirer ceux qui n’ont reconnu qu’un mot.' },
    { type: 'examples', items: [
      { en: 'The copier on the third floor is jammed again.', fr: 'La photocopieuse du troisième étage est encore bloquée.', note: 'Bonne option : <i>A machine is not working.</i> Piège : <i>A copier is being moved.</i>' },
      { en: "I'm afraid the hotel is fully booked that weekend.", fr: 'Je crains que l’hôtel ne soit complet ce week-end-là.', note: 'Bonne option : <i>No rooms are available.</i> Piège : <i>A book is sold out.</i> (ici, <i>booked</i> n’a rien à voir avec un livre).' },
      { en: 'Could we push the meeting back to Thursday?', fr: 'On pourrait repousser la réunion à jeudi ?', note: 'Bonne option : <i>Reschedule a meeting</i> (la reprogrammer). Piège : <i>Cancel a meeting</i> (l’annuler, ce n’est pas pareil !).' },
      { en: "I'll give the supplier a call this afternoon.", fr: 'J’appellerai le fournisseur cet après-midi.', note: 'Bonne option : <i>Contact a vendor</i> (<i>vendor</i> = <i>supplier</i> = fournisseur). Piège : <i>Give a presentation</i> (reprend <i>give</i>).' }
    ] },
    { type: 'table', head: ['Tu entends…', 'La bonne option dit…', 'Sens'], rows: [
      ["It's out of order.", 'A machine is not working.', 'c’est en panne'],
      ["I'll email you the details.", 'Send some information', 'envoyer des informations'],
      ["I'm swamped this week.", 'He has a heavy workload.', 'être débordé'],
      ["We've run out of paper.", 'Some office supplies are needed.', 'il n’y a plus de papier'],
      ["Let's grab a bite.", 'Have a meal together', 'manger un morceau ensemble'],
      ["The shipment still hasn't arrived.", 'A delivery is late.', 'la livraison est en retard'],
      ["Can you cover my shift?", 'Work in place of a colleague', 'remplacer quelqu’un'],
      ["Could you look over my report?", 'Review a document', 'relire un document'],
      ["It's on the house.", 'It is free of charge.', 'c’est offert']
    ], caption: 'Des paraphrases qui reviennent souvent : le sens est le même, les mots changent.' },
    { type: 'box', style: 'warn', title: 'Piège : les sons proches', html: 'Les pièges ne sont pas que des mots répétés : ce sont aussi des mots qui <b>se ressemblent à l’oral</b>. <i>thirteen / thirty</i>, <i>fifteen / fifty</i>, <i>Tuesday / Thursday</i>, <i>walk / work</i>, <i>copy / coffee</i>, <i>contract / contact</i>, <i>rain / train</i>… Si une option contient un mot qui « sonne comme » ce que tu as entendu mais que le sens ne colle pas avec la conversation, méfie-toi.' },

    { type: 'h', text: 'Les questions d’intention : « What does the man mean when he says… ? »' },
    { type: 'p', html: 'Ces questions citent une phrase de la conversation et te demandent ce que la personne <b>veut vraiment dire</b>. Le sens mot à mot ne suffit pas : c’est le <b>contexte</b> (ce qui est dit juste avant et juste après) qui donne la réponse. Par exemple, <i>I have a meeting in five minutes.</i> (« J’ai une réunion dans cinq minutes. ») veut souvent dire « je ne peux pas t’aider maintenant ».' },
    { type: 'examples', items: [
      { en: "That's the third time this week.", fr: 'C’est la troisième fois cette semaine.', note: 'Souvent = « ce problème se répète, ça devient agaçant ».' },
      { en: "I'd have to check with my manager.", fr: 'Il faudrait que je voie avec mon responsable.', note: '= « je ne peux pas décider seul ».' },
      { en: 'Have you seen the traffic out there?', fr: 'Tu as vu la circulation dehors ?', note: 'Souvent une excuse : « c’est pour ça que je suis en retard ».' },
      { en: 'The client arrives in an hour.', fr: 'Le client arrive dans une heure.', note: '= « il faut se dépêcher, c’est urgent ».' }
    ] },
    { type: 'box', style: 'tip', title: 'Méthode pour les questions d’intention', html: 'Quand tu lis une question <i>What does the man mean when he says, "…"?</i>, <b>mémorise la phrase citée</b> : quand tu l’entendras, tu seras prête. Écoute surtout la réplique <b>d’après</b> : la réaction de l’autre personne confirme presque toujours le sens. Et méfie-toi de l’option qui reprend les mots de la citation au sens littéral.' },

    { type: 'h', text: 'Les questions avec graphique' },
    { type: 'p', html: 'Certaines conversations sont accompagnées d’un <b>document</b> : un planning, une liste de prix, un plan d’étage, des horaires… Une des 3 questions commence alors par <i>Look at the graphic.</i> Le piège : la réponse n’est <b>pas prononcée</b> dans l’audio. Tu entends une information (un plat, un étage, un thème de conférence) et tu dois trouver dans le tableau l’information <b>qui lui correspond</b>. Astuce : avant l’audio, regarde à quelle colonne du document correspondent les options. Si les options sont des prix, n’attends pas qu’on te dise le prix : écoute quel <b>produit</b> est choisi, puis lis son prix dans le tableau.' },

    { type: 'h', text: 'Trois voix, quatre accents' },
    { type: 'p', html: 'Quelques conversations ont <b>trois interlocuteurs</b> : deux hommes et une femme, ou deux femmes et un homme. La voix l’annonce : <i>Questions 44 through 46 refer to the following conversation with three speakers.</i> Les questions utilisent alors souvent les <b>prénoms</b> (<i>What does Jonas agree to do?</i>) ou le pluriel (<i>What do the women say about…?</i>). Écoute bien quand les personnes s’appellent par leur prénom (<i>Sofia, what do you think?</i>) : c’est ce qui te permet de savoir qui parle.' },
    { type: 'p', html: 'Au TOEIC, tu entends aussi quatre accents : <b>américain</b> (le plus fréquent), <b>britannique</b>, <b>australien</b> et <b>canadien</b>. Le vocabulaire est le même, seule la prononciation change un peu. Les séries de cette leçon varient les accents (si ton navigateur possède ces voix) ; pour aller plus loin, travaille la leçon « Les accents du TOEIC : américain, britannique, australien, canadien ». Écoute et compare :' },
    { type: 'examples', items: [
      { en: "I can't make it to the party on Friday.", fr: 'Je ne pourrai pas venir à la fête vendredi.', accent: 'en-US', note: 'Américain : <i>can’t</i> sonne presque comme « kènt » ; le <i>r</i> de <i>party</i> est prononcé et le <i>t</i> ressemble à un <i>d</i> rapide.' },
      { en: "I can't make it to the party on Friday.", fr: 'Je ne pourrai pas venir à la fête vendredi.', accent: 'en-GB', note: 'Britannique : <i>can’t</i> sonne comme « kânt » (a long) ; le <i>r</i> de <i>party</i> ne s’entend pas et le <i>t</i> est bien net.' },
      { en: 'The train leaves at eight today.', fr: 'Le train part à huit heures aujourd’hui.', accent: 'en-AU', note: 'Australien : le son « ei » de <i>eight</i> et <i>today</i> tire vers « aï ».' },
      { en: "I'll be out of the office for about a week.", fr: 'Je ne serai pas au bureau pendant environ une semaine.', accent: 'en-CA', note: 'Canadien : très proche de l’américain. Petite différence : la voyelle de <i>out</i> et <i>about</i> est un peu plus fermée.' }
    ] },

    { type: 'h', text: 'Exemple commenté' },
    { type: 'p', html: 'Entraîne-toi comme au vrai test : lis d’abord les 3 questions ci-dessous, <b>puis</b> écoute la conversation (🔊) sans regarder la traduction. Choisis tes réponses, et seulement ensuite lis l’analyse.' },
    { type: 'list', ordered: true, items: [
      '<b>What are the speakers mainly discussing?</b><br>(A) A trade show brochure<br>(B) A new office location<br>(C) A printer repair<br>(D) The price of a booth',
      '<b>What problem does the man mention?</b><br>(A) The brochure is too long.<br>(B) Some information is incorrect.<br>(C) A deadline has passed.<br>(D) A booth is too small.',
      '<b>What does the woman say she will do after lunch?</b><br>(A) Update a file<br>(B) Visit a trade show<br>(C) Reserve a booth<br>(D) Contact a printing company'
    ] },
    { type: 'dialog', title: 'Conversation', lines: [
      { speaker: 'W', en: 'Hi, Daniel. Did you get a chance to look at the brochure for the trade show?', fr: 'Salut Daniel. Tu as eu le temps de regarder la brochure pour le salon ?' },
      { speaker: 'M', en: "I did. It looks great, but there's a problem with the booth number. It says we're in booth 12, but we were moved to booth 21 last week.", fr: 'Oui. Elle est très bien, mais il y a un problème avec le numéro du stand. C’est écrit qu’on est au stand 12, mais on nous a déplacés au stand 21 la semaine dernière.' },
      { speaker: 'W', en: "Oh no! And the printer's supposed to start printing them tomorrow morning.", fr: 'Oh non ! Et l’imprimeur doit commencer à les imprimer demain matin.' },
      { speaker: 'M', en: 'Then we still have time. Can you call them this afternoon and ask them to wait until we send a corrected file?', fr: 'Alors on a encore le temps. Tu peux les appeler cet après-midi et leur demander d’attendre qu’on envoie un fichier corrigé ?' },
      { speaker: 'W', en: "Sure. I'll call them right after lunch. Could you update the file in the meantime?", fr: 'Bien sûr. Je les appelle juste après le déjeuner. Tu peux mettre à jour le fichier en attendant ?' },
      { speaker: 'M', en: "No problem. I'll have it ready by three.", fr: 'Pas de problème. Il sera prêt pour 15 heures.' }
    ] },
    { type: 'list', items: [
      '<b>Question 1 → (A)</b>. Dès la 1ʳᵉ réplique : <i>the brochure for the trade show</i> (la brochure pour le salon professionnel). Piège : <b>(C)</b> reprend le mot <i>printer</i>, mais ici <i>the printer</i> désigne l’<b>imprimeur</b> (l’entreprise qui imprime), pas une imprimante en panne.',
      '<b>Question 2 → (B)</b>. L’homme dit : <i>It says we’re in booth 12, but we were moved to booth 21</i>. Un mauvais numéro de stand = <b>une information incorrecte</b> : la bonne option est une <b>paraphrase</b>. <b>(D)</b> reprend le mot <i>booth</i>, mais personne ne dit que le stand est trop petit.',
      '<b>Question 3 → (D)</b>. La femme dit : <i>I’ll call them right after lunch</i> (<i>them</i> = l’imprimeur). <i>Call</i> devient <i>contact</i> et <i>the printer</i> devient <i>a printing company</i>. Piège : <b>(A)</b> <i>Update a file</i>, c’est ce que va faire l’<b>homme</b>.'
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'Avec <b>39 questions sur 100</b>, la Partie 3 est celle qui rapporte le plus de points à l’écoute. La même méthode (lire les questions avant l’audio) te servira aussi pour la « Partie 4 : Exposés ». Pour progresser vite, réécoute chaque conversation des séries ci-dessous après la correction, jusqu’à comprendre chaque phrase, puis répète les répliques à voix haute.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• 13 conversations, 39 questions ; l’audio passe <b>une seule fois</b>, mais les questions et les options sont <b>écrites</b>.<br>• Lis les 3 questions <b>avant</b> l’audio : pendant les consignes, puis pendant la lecture des questions précédentes.<br>• Les réponses suivent l’<b>ordre</b> de la conversation ; vérifie toujours <b>qui</b> fait l’action (<i>man</i> ou <i>woman</i>).<br>• La bonne option <b>reformule</b> ; l’option qui répète un mot entendu est souvent un piège.<br>• <i>Look at the graphic</i> : croise l’audio et le document. <i>What does… mean</i> : écoute le contexte, surtout la réplique suivante.' }
  ],
  sets: [
    { title: 'Série 1 : Situations simples (bureau, magasin, réservation)', level: 'A2', items: [
      { accent: 'en-US', lines: [
        { speaker: 'W', text: "Excuse me, Mark. Do you know where the printer paper is? The tray's empty again." },
        { speaker: 'M', text: "Oh, we ran out this morning. I ordered some more, but it won't arrive until Thursday." },
        { speaker: 'W', text: "Thursday? But I need to print the sales report for the two o'clock meeting." },
        { speaker: 'M', text: 'Hmm... you could use the printer on the fourth floor. The marketing team always has extra paper.' },
        { speaker: 'W', text: "Good idea. I'll go up there now. Thanks!" },
        { speaker: 'M', text: "No problem. And if they don't have any, just let me know." }
      ], questions: [
        { q: 'What is the woman looking for?', options: ['A sales report', 'A meeting room', 'Printer paper', 'The marketing manager'], answer: 2, explain: 'La femme demande : « <i>Do you know where the printer paper is?</i> » (Tu sais où est le papier pour l’imprimante ?). Piège : <b>(A)</b>. Le rapport de ventes, c’est ce qu’elle veut imprimer, pas ce qu’elle cherche.' },
        { q: 'When will the new paper arrive?', options: ['This morning', "At two o'clock", 'On Tuesday', 'On Thursday'], answer: 3, explain: 'L’homme dit : « <i>it won’t arrive until Thursday</i> » (il n’arrivera pas avant jeudi). Attention aux sons proches : <i>Tuesday</i> (mardi) / <i>Thursday</i> (jeudi).' },
        { q: 'What will the woman most likely do next?', options: ['Order more paper', 'Go to another floor', 'Cancel a meeting', 'Call the marketing team'], answer: 1, explain: 'L’homme lui conseille l’imprimante du 4ᵉ étage et elle répond : « <i>I’ll go up there now</i> » (j’y monte tout de suite). <i>Monter au 4ᵉ étage</i> est reformulé en <i>Go to another floor</i>.' }
      ] },
      { accent: 'en-GB', lines: [
        { speaker: 'W', text: "Hi. I bought this jacket here last week, but it's too small. Can I exchange it for a bigger size?" },
        { speaker: 'M', text: 'Of course. Do you have your receipt?' },
        { speaker: 'W', text: 'Yes, here it is.' },
        { speaker: 'M', text: "Thanks. Let me check... I'm sorry, we don't have a large in blue at the moment. We've only got it in black." },
        { speaker: 'W', text: "Oh. Well, black's fine, actually. It goes with everything." },
        { speaker: 'M', text: "Great. I'll get one from the stockroom. It'll only take a minute." }
      ], questions: [
        { q: 'Where most likely are the speakers?', options: ['In a clothing store', 'In a bank', 'At a post office', 'In a restaurant'], answer: 0, explain: 'Les indices : <i>jacket</i> (veste), <i>a bigger size</i> (une taille au-dessus), <i>receipt</i> (ticket de caisse), <i>stockroom</i> (réserve). On est dans un <b>magasin de vêtements</b>, même si le mot <i>store</i> n’est jamais prononcé.' },
        { q: 'What does the man ask for?', options: ['A credit card', 'A receipt', 'A phone number', 'An order form'], answer: 1, explain: 'L’homme demande : « <i>Do you have your receipt?</i> » (Avez-vous votre ticket de caisse ?). <i>Ask for</i> = demander quelque chose.' },
        { q: 'What does the woman decide to do?', options: ['Get a refund', 'Wait for a new delivery', 'Take a jacket in a different color', 'Buy a smaller size'], answer: 2, explain: 'Il n’y a plus de taille L en bleu, seulement en noir, et elle répond : « <i>black’s fine, actually</i> ». Elle prend donc la veste dans une <b>autre couleur</b>. <b>(D)</b> est faux : elle veut une taille <b>plus grande</b> (<i>bigger</i>).' }
      ] },
      { accent: 'en-AU', lines: [
        { speaker: 'M', text: 'Good afternoon, Harbor View Restaurant. How can I help you?' },
        { speaker: 'W', text: "Hi, I'd like to book a table for Friday evening, please. For eight people." },
        { speaker: 'M', text: "Let me see... I'm sorry, we're fully booked at seven. But I could give you a table at eight thirty." },
        { speaker: 'W', text: "Eight thirty's a little late, but that's OK. The name is Haddad. Nadia Haddad." },
        { speaker: 'M', text: 'Thank you, Ms. Haddad. Is it for a special occasion?' },
        { speaker: 'W', text: "Yes, it's a dinner for a colleague who's retiring." },
        { speaker: 'M', text: "Lovely. And just so you know, there's free parking behind the building." }
      ], questions: [
        { q: 'Why is the woman calling?', options: ['To order food for delivery', 'To cancel a dinner', 'To make a reservation', 'To apply for a job'], answer: 2, explain: '« <i>I’d like to book a table</i> » = je voudrais réserver une table. <i>Book</i> (réserver) est reformulé en <i>make a reservation</i>.' },
        { q: 'What time will the dinner most likely start?', options: ['At 7:00', 'At 7:30', 'At 8:00', 'At 8:30'], answer: 3, explain: 'Le restaurant est complet à 7 heures (<i>fully booked at seven</i>) et propose « <i>a table at eight thirty</i> », que la femme accepte : « <i>that’s OK</i> ». Piège : <b>(C)</b>. On entend bien <i>eight</i>, mais c’est le nombre de personnes (<i>for eight people</i>) ; l’heure, c’est <i>eight thirty</i>.' },
        { q: 'What does the man say about the restaurant?', options: ['It has free parking.', 'It is closed on Fridays.', 'It has a new menu.', 'It offers group discounts.'], answer: 0, explain: 'À la fin, l’homme dit : « <i>there’s free parking behind the building</i> » (il y a un parking gratuit derrière le bâtiment).' }
      ] }
    ] },

    { title: 'Série 2 : Livraison, recrutement, panne informatique', level: 'B1', items: [
      { accent: 'en-US', lines: [
        { speaker: 'W', text: "Hello, this is Keiko Tanaka from Brightline Design. I'm calling about our order of office chairs. It was supposed to arrive yesterday, but we still haven't received anything." },
        { speaker: 'M', text: "I'm sorry to hear that, Ms. Tanaka. Let me look up your order... OK, I see what happened. The chairs were sent to your old address on Pine Street." },
        { speaker: 'W', text: "Oh no. We moved to Lakeside Avenue last month. I thought we'd updated our account." },
        { speaker: 'M', text: "It looks like the change wasn't saved. I'll correct it right now and arrange a new delivery for tomorrow morning." },
        { speaker: 'W', text: 'Tomorrow morning is fine. We have three new employees starting on Monday, so we really need those chairs.' },
        { speaker: 'M', text: "I understand. And to apologize for the trouble, we'll take fifteen percent off your next order." }
      ], questions: [
        { q: 'Why is the woman calling?', options: ['To order more chairs', 'To change a payment method', 'To report a late delivery', 'To schedule a job interview'], answer: 2, explain: '« <i>It was supposed to arrive yesterday, but we still haven’t received anything</i> » : la commande devait arriver hier et rien n’est arrivé. C’est une <b>livraison en retard</b>. Piège : <b>(A)</b> reprend le mot <i>chairs</i>.' },
        { q: 'What caused the problem?', options: ['The chairs were out of stock.', 'The order was sent to the wrong address.', 'A delivery truck broke down.', 'The woman forgot to pay.'], answer: 1, explain: 'L’homme explique : « <i>The chairs were sent to your old address</i> ». L’ancienne adresse = <b>la mauvaise adresse</b> (<i>the wrong address</i>) : c’est une paraphrase.' },
        { q: 'What does the man offer?', options: ['A free chair', 'A full refund', 'Free installation', 'A discount on a future order'], answer: 3, explain: '« <i>we’ll take fifteen percent off your next order</i> » = 15 % de réduction sur la <b>prochaine</b> commande, reformulé en <i>a discount on a future order</i>.' }
      ] },
      { accent: 'en-CA', lines: [
        { speaker: 'W', text: 'Hello, may I speak with Omar Farouk, please?' },
        { speaker: 'M', text: 'Speaking.' },
        { speaker: 'W', text: "Hi, Omar. This is Laura Chen from Northfield Logistics. We received your application for the warehouse supervisor position, and we'd like to invite you for an interview." },
        { speaker: 'M', text: "That's great news! Thank you." },
        { speaker: 'W', text: 'Are you available next Wednesday at ten a.m.?' },
        { speaker: 'M', text: "Wednesday morning's difficult, I'm afraid. I'm working at my current job until noon. Would the afternoon work?" },
        { speaker: 'W', text: 'Let me check... Yes, we could do two o\'clock. Oh, and please bring a copy of your forklift license.' },
        { speaker: 'M', text: "Sure, I'll bring it. Should I come to your main office?" },
        { speaker: 'W', text: "No, the interviews are at our warehouse on Route 9. I'll email you the directions today." }
      ], questions: [
        { q: 'What position has the man applied for?', options: ['Warehouse supervisor', 'Truck driver', 'Office manager', 'Sales representative'], answer: 0, explain: 'La femme dit : « <i>We received your application for the warehouse supervisor position</i> » (nous avons reçu votre candidature au poste de responsable d’entrepôt).' },
        { q: 'Why does the man ask for a different time?', options: ['He has a medical appointment.', 'He has another interview.', 'He lives far from the warehouse.', 'He will be at his current job.'], answer: 3, explain: 'Il explique : « <i>I’m working at my current job until noon</i> » (je travaille à mon poste actuel jusqu’à midi). Il demande donc un rendez-vous l’après-midi.' },
        { q: 'What does the woman say she will send?', options: ['A contract', 'Directions to a location', 'A copy of a license', 'A list of interview questions'], answer: 1, explain: '« <i>I’ll email you the directions today</i> » = je vous envoie l’itinéraire par e-mail aujourd’hui. Piège : <b>(C)</b>. C’est l’<b>homme</b> qui doit apporter la copie de son permis de cariste.' }
      ] },
      { accent: 'en-GB', lines: [
        { speaker: 'W', text: "Hi, Tom. Sorry to bother you, but my laptop keeps shutting down. It's happened three times this morning." },
        { speaker: 'M', text: 'Hmm. Have you installed the latest software update?' },
        { speaker: 'W', text: "I'm not sure. I got a message about it last week, but I was busy, so I ignored it." },
        { speaker: 'M', text: "That's probably it. The old version has a bug that makes some laptops shut down without warning." },
        { speaker: 'W', text: "Can you install the update for me now? I've got a presentation for a client at eleven." },
        { speaker: 'M', text: "It's ten forty-five." },
        { speaker: 'W', text: "Oh... right. It'll take too long, won't it?" },
        { speaker: 'M', text: "About an hour, yes. Why don't you borrow one of the spare laptops from the IT room? I'll update yours while you're in your meeting." },
        { speaker: 'W', text: "Perfect, thanks. I'll pick one up on my way." }
      ], questions: [
        { q: 'What problem does the woman mention?', options: ['She forgot her password.', 'Her laptop keeps turning off.', 'Her screen is broken.', 'She cannot connect to the Internet.'], answer: 1, explain: '« <i>my laptop keeps shutting down</i> » (mon ordinateur portable n’arrête pas de s’éteindre). <i>Shut down</i> est reformulé en <i>turn off</i>.' },
        { q: 'What does the man mean when he says, "It\'s ten forty-five"?', options: ['The woman is late for work.', 'The presentation has been moved.', 'There is not enough time for the update.', 'He is about to go on a break.'], answer: 2, explain: 'La femme veut la mise à jour <b>maintenant</b> et sa présentation est à 11 heures. En rappelant qu’il est 10 h 45, l’homme sous-entend qu’il ne reste pas assez de temps. Elle le confirme aussitôt : « <i>It’ll take too long, won’t it?</i> »' },
        { q: 'What does the man suggest?', options: ['Using a different computer', 'Buying a new battery', 'Postponing the presentation', 'Calling the client'], answer: 0, explain: '« <i>Why don’t you borrow one of the spare laptops from the IT room?</i> » (Pourquoi n’empruntes-tu pas un des portables de rechange du service informatique ?). <i>Why don’t you…?</i> introduit une suggestion.' }
      ] }
    ] },

    { title: 'Série 3 : Graphiques et imprévus (vers le B2)', level: 'B1', items: [
      { accent: 'en-US', graphic: { title: 'Green Leaf Catering: Lunch Platters', head: ['Platter', 'Serves', 'Price'], rows: [
        ['Sandwich Platter', '10 people', '$85'],
        ['Salad Platter', '10 people', '$70'],
        ['Pasta Platter', '15 people', '$120'],
        ['Deluxe Platter', '20 people', '$160']
      ] }, lines: [
        { speaker: 'M', text: "Priya, have you ordered lunch for Thursday's training session yet?" },
        { speaker: 'W', text: "Not yet. I'm looking at the caterer's menu right now. How many people are coming?" },
        { speaker: 'M', text: 'Fifteen, including the two trainers.' },
        { speaker: 'W', text: 'OK. So we could get two sandwich platters... or just one platter that serves fifteen.' },
        { speaker: 'M', text: "One platter's easier. A few people are vegetarian, though. Is that a problem?" },
        { speaker: 'W', text: 'No, the pasta comes with a vegetable sauce, so everyone can eat it.' },
        { speaker: 'M', text: "Great, let's go with that. Oh, and the session's been moved to the fourth floor, so ask them to deliver to Room 410." },
        { speaker: 'W', text: "Will do. I'll call them after lunch." }
      ], questions: [
        { q: 'What are the speakers preparing for?', options: ['A retirement party', 'A client visit', 'A job fair', 'A training session'], answer: 3, explain: 'Dès la 1ʳᵉ réplique : « <i>lunch for Thursday’s training session</i> » (le déjeuner de la formation de jeudi).' },
        { q: 'Look at the graphic. How much will the order most likely cost?', options: ['$70', '$85', '$120', '$160'], answer: 2, explain: 'Ils sont 15, veulent <b>un seul</b> plateau pour 15 personnes (<i>one platter that serves fifteen</i>) et choisissent les pâtes : la femme les propose (<i>the pasta comes with a vegetable sauce</i>) et l’homme accepte (<i>let’s go with that</i>). Dans le tableau, <i>Pasta Platter</i> = <b>120 $</b>. Le prix n’est jamais prononcé : il faut croiser l’audio et le document.' },
        { q: 'What change does the man mention?', options: ['The session will take place on a different floor.', 'More people will attend.', 'A trainer has canceled.', 'The date has been changed.'], answer: 0, explain: '« <i>the session’s been moved to the fourth floor</i> » (la formation a été déplacée au 4ᵉ étage). Piège : <b>(B)</b>. Le nombre de participants (15) ne change pas.' }
      ] },
      { accent: 'en-AU', lines: [
        { speaker: 'W', text: 'Liam, I just got a message from the airline. Our flight to Singapore tomorrow has been canceled.' },
        { speaker: 'M', text: "You're kidding. The client meeting's on Wednesday morning. What are our options?" },
        { speaker: 'W', text: "There's a flight tonight at eleven, or one on Wednesday at six a.m. that lands at noon." },
        { speaker: 'M', text: "Noon's too late. The meeting starts at nine." },
        { speaker: 'W', text: "So it's tonight, then. But I haven't packed yet, and I still have to finish the sales figures for the presentation." },
        { speaker: 'M', text: "I've already done those." },
        { speaker: 'W', text: "Really? Oh, that's a big help. Then I'll go home early and pack." },
        { speaker: 'M', text: "Good. I'll call the travel agent and change our tickets. Let's meet at the airport at nine tonight." }
      ], questions: [
        { q: 'What problem does the woman mention?', options: ['A client meeting has been postponed.', 'A flight has been canceled.', 'A hotel is fully booked.', 'Some luggage has been lost.'], answer: 1, explain: '« <i>Our flight to Singapore tomorrow has been canceled</i> » (notre vol pour Singapour de demain a été annulé). Piège : <b>(A)</b>. La réunion avec le client a toujours lieu mercredi matin.' },
        { q: 'What does the man mean when he says, "I\'ve already done those"?', options: ['He has already packed his bags.', 'He has already changed the tickets.', 'The client has approved the presentation.', 'The woman does not need to work on the sales figures.'], answer: 3, explain: 'La femme dit qu’elle doit encore finir les chiffres de ventes (<i>I still have to finish the sales figures</i>). L’homme répond qu’il les a déjà faits : elle n’a donc <b>plus besoin</b> de s’en occuper. Elle réagit : « <i>that’s a big help</i> ».' },
        { q: 'What does the man say he will do?', options: ['Pack his suitcase', 'Finish a presentation', 'Contact a travel agent', 'Call the client'], answer: 2, explain: '« <i>I’ll call the travel agent and change our tickets</i> ». <i>Call</i> devient <i>contact</i>. Piège : <b>(A)</b>. C’est la <b>femme</b> qui va rentrer faire sa valise.' }
      ] },
      { accent: 'en-US', graphic: { title: 'Marketing Conference: Friday Afternoon', head: ['Time', 'Session', 'Room'], rows: [
        ['1:00', 'Social Media Trends', 'Room A'],
        ['2:00', 'Writing Better Emails', 'Room B'],
        ['3:00', 'Customer Surveys That Work', 'Room C'],
        ['4:00', 'Building a Strong Brand', 'Room D']
      ] }, lines: [
        { speaker: 'W', text: "Hi, Kevin. Have you seen the program for Friday's marketing conference? I'm planning to go to the afternoon sessions." },
        { speaker: 'M', text: "Me too. I really wanted to see the one on social media, but I have a call with a client at one, so I'll miss it." },
        { speaker: 'W', text: "That's too bad. Well, the speaker for the branding session is my former manager, Ms. Alvarez. She's excellent." },
        { speaker: 'M', text: "Really? Then I'll definitely go to that one." },
        { speaker: 'W', text: "Great. Maybe we could get a coffee before it starts? There's a café next to the registration desk." },
        { speaker: 'M', text: "Sounds good. Let's meet there about fifteen minutes before." }
      ], questions: [
        { q: 'Why will the man miss the session on social media?', options: ['He has to give a presentation.', 'He has a call with a client.', 'He needs to register at the desk.', 'He is meeting his former manager.'], answer: 1, explain: '« <i>I have a call with a client at one, so I’ll miss it</i> » (j’ai un appel avec un client à 13 heures, donc je vais la rater). Piège : <b>(D)</b>. Ms. Alvarez est l’ancienne responsable de la <b>femme</b>, et personne ne parle de la rencontrer.' },
        { q: 'Look at the graphic. In which room will Ms. Alvarez speak?', options: ['Room A', 'Room B', 'Room C', 'Room D'], answer: 3, explain: 'La femme dit : « <i>the speaker for the branding session is my former manager, Ms. Alvarez</i> ». <i>Branding</i> (l’image de marque) → dans le tableau, <i>Building a Strong Brand</i>, en <b>salle D</b>. La salle n’est jamais prononcée : il faut croiser l’audio et le document.' },
        { q: 'What does the woman suggest?', options: ['Having coffee together', 'Leaving the conference early', 'Contacting Ms. Alvarez', 'Changing rooms'], answer: 0, explain: '« <i>Maybe we could get a coffee before it starts?</i> » (On pourrait prendre un café avant que ça commence ?). <i>Maybe we could…?</i> introduit une suggestion, reformulée en <i>Having coffee together</i>.' }
      ] }
    ] },

    { title: 'Série 4 : Conversations à trois et sous-entendus', level: 'B2', items: [
      { accent: 'en-GB', lines: [
        { speaker: 'W', text: "Raj, Jonas, thanks for coming. I've just been going through the third-quarter figures, and our travel expenses are almost thirty percent over budget." },
        { speaker: 'M', text: "Thirty percent? That's a lot more than I expected. Then again, the sales team's been visiting a lot of new clients." },
        { speaker: 'M2', text: "That's right, Helen. We've been to Madrid three times since July. But those trips brought in two new contracts." },
        { speaker: 'W', text: "I'm not saying the trips weren't useful. But head office wants us to cut costs before the end of the year." },
        { speaker: 'M', text: 'What if we replaced some of the visits with video calls? At least for follow-up meetings.' },
        { speaker: 'M2', text: 'That could work for existing clients, I suppose. But new clients usually expect to meet us in person.' },
        { speaker: 'W', text: 'Fair enough. Jonas, could you put together a list of the trips planned for next quarter and mark the ones that really need to be in person?' },
        { speaker: 'M2', text: "Sure. I'll have it on your desk by Friday." },
        { speaker: 'W', text: "Thanks. And Raj, I'd like your help presenting all this to head office." }
      ], questions: [
        { q: 'What is the conversation mainly about?', options: ['Hiring more sales staff', 'Reducing travel expenses', 'Opening an office in Madrid', 'Choosing video call software'], answer: 1, explain: 'Helen annonce que les frais de déplacement dépassent le budget de près de 30 % et que la direction veut <i>cut costs</i> (réduire les coûts). Toute la conversation porte sur la <b>réduction des frais de voyage</b>. <b>(C)</b> reprend <i>Madrid</i> et <b>(D)</b> reprend <i>video calls</i> : pièges du mot répété.' },
        { q: 'What does the woman mean when she says, "Fair enough"?', options: ["She accepts Jonas's point about new clients.", 'She thinks the budget is fair.', 'She would like to end the meeting.', 'She is pleased with the sales results.'], answer: 0, explain: 'Jonas vient d’expliquer que les nouveaux clients veulent rencontrer l’équipe en personne. <i>Fair enough</i> = « c’est juste, je comprends ton argument ». Elle lui demande d’ailleurs ensuite de repérer les voyages qui doivent vraiment se faire en personne. Piège : <b>(B)</b> reprend le mot <i>fair</i>.' },
        { q: 'What does the woman ask Jonas to do?', options: ['Contact head office', 'Visit a client in Madrid', 'Set up a video call', 'Prepare a list of upcoming trips'], answer: 3, explain: '« <i>Jonas, could you put together a list of the trips planned for next quarter…?</i> » (préparer la liste des voyages prévus au prochain trimestre). Jonas est la 2ᵉ voix d’homme : il répond « <i>Sure</i> ». Piège : <b>(A)</b>. C’est à <b>Raj</b> que Helen demande de l’aide pour la présentation à la direction.' }
      ] },
      { accent: 'en-US', graphic: { title: 'Maple Grove Business Center: Available Units', head: ['Unit', 'Floor', 'Size', 'Monthly Rent'], rows: [
        ['204', '2nd', '900 sq. ft.', '$2,400'],
        ['310', '3rd', '1,200 sq. ft.', '$3,100'],
        ['415', '4th', '1,500 sq. ft.', '$3,800'],
        ['520', '5th', '2,000 sq. ft.', '$4,900']
      ] }, lines: [
        { speaker: 'W', text: 'So, Mr. Osei, what did you think of the units we visited this morning?' },
        { speaker: 'M', text: "Honestly, they were all nice, but the one on the fifth floor is way over our budget. We can't spend more than four thousand a month." },
        { speaker: 'W', text: 'I understand. And how many people will be working in the office?' },
        { speaker: 'M', text: "Twelve right now, but we're hiring six more next year, so we'll need at least fourteen hundred square feet." },
        { speaker: 'W', text: "Then there's really only one option that works for you." },
        { speaker: 'M', text: 'I agree. My only concern is parking. Our clients come to the office quite often.' },
        { speaker: 'W', text: 'The building has its own garage, and visitors park for free.' },
        { speaker: 'M', text: "That's good to hear. Could we sign the lease this week?" },
        { speaker: 'W', text: 'Hmm... The owner is in Toronto until next Tuesday.' },
        { speaker: 'M', text: "Oh, I see. Well, a few more days won't make a big difference." }
      ], questions: [
        { q: 'Who most likely is the woman?', options: ['A real estate agent', 'A building owner', 'An interior designer', 'A parking attendant'], answer: 0, explain: 'Elle a fait visiter des bureaux au client (<i>the units we visited this morning</i>), l’aide à choisir et parle du propriétaire (<i>the owner</i>) comme d’une autre personne : c’est une <b>agente immobilière</b>. Piège : <b>(B)</b>. Le propriétaire est à Toronto.' },
        { q: 'Look at the graphic. Which unit will the man most likely rent?', options: ['Unit 204', 'Unit 310', 'Unit 415', 'Unit 520'], answer: 2, explain: 'Deux conditions : 4 000 $ par mois au maximum (<i>We can’t spend more than four thousand a month</i>) et au moins 1 400 pieds carrés (<i>at least fourteen hundred square feet</i> : on compte en centaines, 14 × 100, soit environ 130 m²). Seul le local <b>415</b> (1 500 sq. ft., 3 800 $) remplit les deux : le 520 est trop cher, le 204 et le 310 sont trop petits.' },
        { q: 'What does the woman mean when she says, "The owner is in Toronto until next Tuesday"?', options: ['The man should call the owner directly.', 'The lease cannot be signed this week.', 'The rent is likely to increase.', 'The unit will be available next Tuesday.'], answer: 1, explain: 'L’homme demande à signer le bail cette semaine (<i>Could we sign the lease this week?</i>). En répondant que le propriétaire est absent jusqu’à mardi prochain, la femme sous-entend que <b>ce ne sera pas possible cette semaine</b>. L’homme le confirme : « <i>a few more days won’t make a big difference</i> ».' }
      ] },
      { accent: 'en-US', lines: [
        { speaker: 'W', text: "Sofia, Greg, do you have a minute? I'd like to finalize the plans for the company's twentieth anniversary party." },
        { speaker: 'W2', text: "Sure, Amina. I spoke to the hotel yesterday. The ballroom's available on June twelfth, but they've raised their prices since last year." },
        { speaker: 'W', text: 'Oh? By how much?' },
        { speaker: 'W2', text: "About twenty percent. And that doesn't include the band." },
        { speaker: 'M', text: "Hmm, what about holding the party here instead? If we clear out the warehouse on the ground floor, there'd be plenty of room for two hundred people." },
        { speaker: 'W', text: "That's not a bad idea. We'd save a lot on the venue, and we could spend the money on better catering." },
        { speaker: 'W2', text: "But we'd have to rent tables, chairs, and lighting. That adds up." },
        { speaker: 'M', text: 'I can ask my contact at Brightway Event Rentals for a quote. They gave us a good price for the summer picnic.' },
        { speaker: 'W', text: "Please do. Let's compare both options at Thursday's meeting before we decide anything." }
      ], questions: [
        { q: 'What are the speakers planning?', options: ['A product launch', 'A summer picnic', 'A company anniversary party', 'A retirement dinner'], answer: 2, explain: '« <i>the plans for the company’s twentieth anniversary party</i> » (la fête des 20 ans de l’entreprise). Piège : <b>(B)</b>. Le pique-nique d’été est un événement <b>passé</b>, cité par Greg.' },
        { q: 'What problem does Sofia mention about the hotel?', options: ['Its prices have gone up.', 'Its ballroom is not available in June.', 'Its parking lot is too small.', 'It is too far from the office.'], answer: 0, explain: 'Sofia est la 2ᵉ voix de femme : c’est elle qui répond « <i>Sure, Amina</i> ». Elle dit : « <i>they’ve raised their prices since last year</i> » (ils ont augmenté leurs prix depuis l’an dernier), reformulé en <i>its prices have gone up</i>. Piège : <b>(B)</b>. La salle est justement <b>disponible</b> le 12 juin.' },
        { q: 'What does the man offer to do?', options: ['Hire a caterer', 'Book the hotel ballroom', 'Contact a band', 'Request a price estimate'], answer: 3, explain: '« <i>I can ask my contact at Brightway Event Rentals for a quote</i> » : <i>a quote</i> = un devis, reformulé en <i>a price estimate</i>. <i>I can…</i> introduit une offre. Piège : <b>(A)</b>. C’est Amina qui parle du traiteur (<i>catering</i>).' }
      ] }
    ] }
  ]
});
