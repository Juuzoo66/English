LE.register({
  id: 'g33',
  kind: 'grammar',
  title: 'Les conditionnels 0 et 1 (if, unless, when…)',
  subtitle: 'Parler de ce qui se passe toujours si…, et de ce qui se passera si…',
  level: 'B1',
  minutes: 45,
  goals: [
    'Utiliser le conditionnel 0 (<i>If you press this button, the machine stops.</i>) pour les règles et les vérités générales',
    'Utiliser le conditionnel 1 (<i>If the client agrees, we will sign on Friday.</i>) pour une situation future possible',
    'Ne jamais mettre <b>will</b> après <b>if</b>, <b>when</b> ou <b>as soon as</b> pour parler du futur',
    'Choisir entre <b>if, unless, when, as long as, provided that, in case</b> et comprendre les formules des e-mails du TOEIC'
  ],
  blocks: [
    { type: 'h', text: 'À quoi servent les conditionnels 0 et 1 ?' },
    { type: 'p', html: 'Une phrase au <b>conditionnel</b> a deux parties : la <b>condition</b> (introduite par <b>if</b> = si) et la <b>conséquence</b> (la partie principale). L’anglais distingue quatre types de conditionnels, numérotés de 0 à 3. Dans cette leçon, tu vas voir les deux types « réels », ceux qui parlent de situations vraies ou possibles :' },
    { type: 'table', head: ['Type', 'Construction', 'Emploi', 'Exemple'], rows: [
      ['<b>Conditionnel 0</b>', 'If + <b>présent</b>, <b>présent</b>', 'vérités générales, règles, procédures, habitudes', '<i>If you press this button, the machine <b>stops</b>.</i>'],
      ['<b>Conditionnel 1</b>', 'If + <b>présent</b>, <b>will</b> + base verbale', 'situation <b>future</b> possible et réaliste', '<i>If the client agrees, we <b>will sign</b> on Friday.</i>']
    ], caption: 'Les conditionnels 2 et 3 (situations imaginaires et regrets) sont traités dans la leçon « Les conditionnels 2 et 3, et wish ».' },
    { type: 'box', style: 'tip', title: 'Bonne nouvelle : c’est comme en français', html: 'En français, on dit « <b>Si</b> tu <b>appuies</b>, la machine <b>s’arrête</b> » et « <b>Si</b> le client <b>accepte</b>, nous <b>signerons</b> ». Après « si », jamais de futur : personne ne dit « s’il acceptera ». L’anglais suit exactement la même logique : <b>if + présent</b>.' },

    { type: 'h', text: 'Le conditionnel 0 : les règles et les vérités générales' },
    { type: 'p', html: 'On utilise le <b>présent simple dans les deux parties</b>. La conséquence arrive <b>chaque fois</b> que la condition est remplie : c’est une loi scientifique, une règle de l’entreprise, le mode d’emploi d’une machine ou une habitude personnelle.' },
    { type: 'examples', items: [
      { en: 'If you heat water to 100 degrees Celsius, it boils.', fr: 'Si on chauffe de l’eau à 100 degrés, elle bout.' },
      { en: 'If you press this button, the machine stops.', fr: 'Si tu appuies sur ce bouton, la machine s’arrête.' },
      { en: 'If the printer runs out of paper, a red light comes on.', fr: 'Si l’imprimante n’a plus de papier, un voyant rouge s’allume.' },
      { en: 'If customers pay in cash, they get a 5% discount.', fr: 'Si les clients paient en espèces, ils ont 5 % de réduction.' },
      { en: "If I drink coffee after 4 p.m., I can't sleep.", fr: 'Si je bois du café après 16 h, je n’arrive pas à dormir.', note: 'Une habitude personnelle : c’est vrai à chaque fois.' }
    ] },
    { type: 'box', style: 'tip', title: 'Astuce : if = when', html: 'Au conditionnel 0, tu peux remplacer <b>if</b> par <b>when</b> (ou <b>whenever</b>, « chaque fois que ») sans changer le sens : <i><b>When</b> you press this button, the machine stops.</i>' },

    { type: 'h', text: 'Le conditionnel 1 : ce qui arrivera si…' },
    { type: 'p', html: 'On parle d’une situation <b>future réelle et possible</b> : peut-être qu’elle arrivera, peut-être pas. La condition est au <b>présent simple</b>, même si elle concerne le futur ; la conséquence est le plus souvent au futur avec <b>will</b>, mais on peut aussi utiliser un <b>impératif</b> (un ordre, une demande) ou un <b>modal</b> (<i>can, may, might, should, must</i>).' },
    { type: 'table', head: ['Condition (if…)', 'Conséquence', 'Exemple'], rows: [
      ['if + présent simple', '<b>will / won’t</b> + base verbale', '<i>If the client agrees, we <b>will sign</b> on Friday.</i>'],
      ['if + présent simple', '<b>impératif</b>', '<i>If you have questions, <b>please contact</b> me.</i>'],
      ['if + présent simple', '<b>can / may / might / should</b> + base verbale', '<i>If you finish early, you <b>can leave</b>.</i>'],
      ['if + présent simple (négatif)', '<b>will</b> + base verbale', '<i>If we <b>don’t hurry</b>, we’<b>ll miss</b> the train.</i>']
    ], caption: 'L’ordre est libre : <i>We will sign on Friday <b>if</b> the client agrees.</i> Quand <b>if</b> ouvre la phrase, on met une virgule entre les deux parties ; quand <b>if</b> est au milieu, pas de virgule.' },
    { type: 'examples', items: [
      { en: 'If the client agrees, we will sign on Friday.', fr: 'Si le client est d’accord, nous signerons vendredi.' },
      { en: 'If you have any questions, please contact me.', fr: 'Si tu as des questions, contacte-moi.' },
      { en: "If we don't receive the payment by Monday, we will cancel the order.", fr: 'Si nous ne recevons pas le paiement d’ici lundi, nous annulerons la commande.' },
      { en: 'You can leave early if you finish the report.', fr: 'Tu peux partir plus tôt si tu finis le rapport.' },
      { en: "If the flight is delayed, I'll call you from the airport.", fr: 'Si le vol est retardé, je t’appellerai de l’aéroport.', accent: 'en-GB' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège n°1 : jamais will après if', html: 'Dans la partie avec <b>if</b>, on ne met <b>jamais will</b> pour parler du futur, même si l’action se passera demain :<br><span class="ko">If it will rain tomorrow, we will stay inside.</span> → <span class="ok">If it rains tomorrow, we will stay inside.</span><br><span class="ko">If the price will go up, we will buy less.</span> → <span class="ok">If the price goes up, we will buy less.</span><br>Le <b>will</b> se met seulement dans la conséquence.<br><small>Seule exception, à simplement reconnaître : le <b>will</b> de politesse, qui veut dire « vouloir bien » (ce n’est pas un futur) : <i>If you will follow me, I’ll show you the lab.</i> = Si vous voulez bien me suivre, je vais vous montrer le labo.</small>' },
    { type: 'dialog', title: 'Organiser une visite', lines: [
      { speaker: 'W', en: 'Are we still meeting the clients from Lisbon on Thursday?', fr: 'On voit toujours les clients de Lisbonne jeudi ?' },
      { speaker: 'M', en: 'Yes, if their flight arrives on time.', fr: 'Oui, si leur vol arrive à l’heure.' },
      { speaker: 'W', en: "And if it's delayed?", fr: 'Et s’il est retardé ?' },
      { speaker: 'M', en: "If it's delayed, we'll move the meeting to Friday morning.", fr: 'S’il est retardé, nous déplacerons la réunion à vendredi matin.' },
      { speaker: 'W', en: 'OK. If you need help with the presentation, let me know.', fr: 'D’accord. Si tu as besoin d’aide pour la présentation, dis-le-moi.' },
      { speaker: 'M', en: "Thanks! I'll send you the slides as soon as I finish them.", fr: 'Merci ! Je t’enverrai les diapos dès que je les aurai finies.' }
    ] },

    { type: 'h', text: 'Unless = if … not (sauf si, à moins que)' },
    { type: 'p', html: '<b>Unless</b> veut dire « <b>sauf si</b> » ou « <b>à moins que</b> ». Il remplace <b>if … not</b> : le sens est négatif, mais le verbe qui suit est <b>affirmatif</b>. On le rencontre très souvent dans les règlements et les contrats.' },
    { type: 'table', head: ['Avec if … not', 'Avec unless', 'Français'], rows: [
      ['If you <b>don’t</b> hurry, you’ll miss the bus.', '<b>Unless</b> you hurry, you’ll miss the bus.', 'Si tu ne te dépêches pas, tu vas rater le bus.'],
      ['We won’t ship the order if we <b>don’t</b> receive your payment.', 'We won’t ship the order <b>unless</b> we receive your payment.', 'Nous n’expédierons pas la commande à moins de recevoir votre paiement.'],
      ['If it <b>isn’t</b> urgent, don’t call me after 6 p.m.', '<b>Unless</b> it’s urgent, don’t call me after 6 p.m.', 'Sauf si c’est urgent, ne m’appelle pas après 18 h.']
    ] },
    { type: 'examples', items: [
      { en: "Unless you have a badge, you can't enter the building.", fr: 'Tu ne peux pas entrer dans le bâtiment, sauf si tu as un badge.' },
      { en: "We'll start at nine unless someone objects.", fr: 'Nous commencerons à neuf heures, sauf si quelqu’un s’y oppose.' },
      { en: 'The discount ends on Friday unless we decide to extend it.', fr: 'La réduction se termine vendredi, à moins que nous décidions de la prolonger.' },
      { en: "Don't call the supplier unless it's urgent.", fr: 'N’appelle pas le fournisseur, sauf si c’est urgent.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : pas de double négation avec unless', html: '<b>Unless</b> contient déjà la négation. Le verbe qui suit reste donc <b>affirmatif</b> :<br><span class="ko">Unless you don’t pay, we will cancel the order.</span> → <span class="ok">Unless you pay, we will cancel the order.</span><br>Et comme après <b>if</b> : présent simple, jamais <i>will</i> (<span class="ko">unless you will pay</span>).' },

    { type: 'h', text: 'If ou when ? Possibilité ou certitude' },
    { type: 'p', html: 'Comme en français (« si » ≠ « quand »), <b>if</b> exprime une <b>possibilité</b> : ce n’est pas sûr que ça arrive. <b>When</b> exprime une <b>certitude</b> : ça va arriver, la seule question est le moment.' },
    { type: 'examples', items: [
      { en: "When I see Mr. Park tomorrow, I'll give him the file.", fr: 'Quand je verrai M. Park demain, je lui donnerai le dossier.', note: 'J’ai rendez-vous avec lui : c’est sûr.' },
      { en: "If I see Mr. Park, I'll give him the file.", fr: 'Si je vois M. Park, je lui donnerai le dossier.', note: 'Je le croiserai peut-être… ou pas.' },
      { en: "When the meeting ends, I'll call you.", fr: 'Quand la réunion sera finie, je t’appellerai.' },
      { en: "If the meeting ends early, I'll call you.", fr: 'Si la réunion finit tôt, je t’appellerai.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège n°2 : « quand » + futur en français', html: 'Là, le français et l’anglais sont différents ! Le français met le futur après « quand », « dès que », « une fois que » ; l’anglais met le <b>présent</b> (comme après <b>if</b>) :<br>« Quand je <b>serai</b> à Londres, je t’appellerai. » → <span class="ko">When I will be in London…</span> → <span class="ok">When I <b>am</b> in London, I’ll call you.</span><br>« Dès que j’<b>aurai</b> les chiffres… » → <span class="ok">As soon as I <b>have</b> the figures…</span><br>Rappel de la leçon « Le futur : will, be going to et présent continu ».' },
    { type: 'table', head: ['Mot', 'Sens', 'Exemple (présent pour parler du futur)'], rows: [
      ['<b>when</b>', 'quand, lorsque', '<i>When the delivery <b>arrives</b>, I’ll check it.</i>'],
      ['<b>as soon as</b>', 'dès que', '<i>I’ll call you as soon as I <b>land</b>.</i>'],
      ['<b>before</b>', 'avant que, avant de', '<i>Please read the contract before you <b>sign</b> it.</i>'],
      ['<b>after</b>', 'après que', '<i>After the meeting <b>ends</b>, we’ll have lunch.</i>'],
      ['<b>until</b>', 'jusqu’à ce que', '<i>We’ll wait until everyone <b>arrives</b>.</i>'],
      ['<b>once</b>', 'une fois que', '<i>Once you <b>receive</b> the code, you can log in.</i>']
    ], caption: 'Pour insister sur le fait que l’action sera <b>terminée</b>, on peut aussi mettre le present perfect : <i>I’ll call you as soon as I <b>have landed</b>.</i> (= dès que j’aurai atterri). Mais jamais <i>will</i>.' },

    { type: 'h', text: 'As long as, provided that, in case, even if' },
    { type: 'p', html: 'D’autres mots introduisent une condition. Ils suivent la même règle que <b>if</b> : <b>présent</b> après eux pour parler du futur. Ils sont très fréquents dans les contrats, les garanties et les consignes : le TOEIC les adore.' },
    { type: 'table', head: ['Mot', 'Sens', 'Exemple'], rows: [
      ['<b>as long as</b>', 'à condition que, tant que', '<i>You can work from home as long as you <b>finish</b> your tasks.</i>'],
      ['<b>provided (that)</b> / <b>providing (that)</b>', 'à condition que (plus formel)', '<i>We will deliver on Monday provided that the order <b>is</b> confirmed today.</i>'],
      ['<b>in case</b>', 'au cas où (par précaution)', '<i>Take an umbrella in case it <b>rains</b>.</i>'],
      ['<b>even if</b>', 'même si', '<i>The store will open on Monday even if the sign <b>isn’t</b> ready.</i>']
    ] },
    { type: 'examples', items: [
      { en: 'You can use the company car as long as you return it by 6 p.m.', fr: 'Tu peux utiliser la voiture de l’entreprise à condition de la rendre avant 18 h.' },
      { en: 'The bank will approve the loan provided that you send all the documents.', fr: 'La banque accordera le prêt à condition que tu envoies tous les documents.' },
      { en: "I'll bring my laptop in case the projector doesn't work.", fr: 'J’apporterai mon ordinateur portable au cas où le projecteur ne marcherait pas.', accent: 'en-AU' },
      { en: "We'll launch the product in June even if the ads aren't ready.", fr: 'Nous lancerons le produit en juin, même si les publicités ne sont pas prêtes.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : in case ≠ if', html: '<i>Take an umbrella <b>in case</b> it rains.</i> = Prends un parapluie (maintenant, par précaution), au cas où il pleuvrait.<br><i>Take an umbrella <b>if</b> it rains.</i> = Prends un parapluie seulement s’il pleut.<br>Et attention : « au cas où » est suivi du conditionnel en français (<i>au cas où il pleuvrait</i>), mais <b>in case</b> est suivi du <b>présent</b> en anglais.' },

    { type: 'h', text: 'Les formules des e-mails professionnels' },
    { type: 'p', html: 'Au TOEIC (Parties 6 et 7), les e-mails et les lettres se terminent très souvent par une phrase au conditionnel 1. Apprends-les par cœur : elles reviennent sans cesse.' },
    { type: 'examples', items: [
      { en: 'If you have any questions, do not hesitate to contact us.', fr: 'Si vous avez des questions, n’hésitez pas à nous contacter.' },
      { en: 'Please let us know if you are unable to attend.', fr: 'Merci de nous prévenir si vous ne pouvez pas venir.' },
      { en: 'If you would like more information, please visit our website.', fr: 'Si vous souhaitez plus d’informations, rendez-vous sur notre site.', note: '<i>would like</i> est une formule de politesse figée (= <i>want</i>, « souhaiter ») : ce n’est pas un futur, c’est pourquoi on peut l’avoir après <b>if</b>.' },
      { en: 'Should you need any assistance, please call our help desk.', fr: 'Si vous avez besoin d’aide, veuillez appeler notre service d’assistance.', note: 'Aperçu : <b>Should you need…</b> = <i>If you need…</i> en style très formel (inversion). Voir « Les conditionnels 2 et 3, et wish ».' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 5</b>, deux types de questions reviennent :<br>1) <b>Le temps du verbe</b> après <i>if, when, as soon as, unless</i> : <i>If the shipment ------- late, please inform the manager.</i> → <b>arrives</b> (jamais <i>will arrive</i>).<br>2) <b>Le bon connecteur</b> : <i>unless</i> (sauf si), <i>provided that</i> (à condition que), <i>in case</i> (au cas où). Lis toute la phrase pour vérifier que le sens est logique.<br>En <b>Parties 6 et 7</b>, repère les formules de fin d’e-mail : <i>If you have any questions…, Should you need…</i>' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• <b>Conditionnel 0</b> : if + présent, présent → règles et vérités générales (<i>If you press this button, the machine stops.</i>).<br>• <b>Conditionnel 1</b> : if + présent, will / impératif / modal → futur possible (<i>If the client agrees, we will sign.</i>).<br>• <b>Jamais will</b> après <i>if, unless, when, as soon as, before, after, until, once, in case</i> pour parler du futur.<br>• <b>Unless</b> = if … not (verbe affirmatif après).<br>• <b>When</b> = c’est sûr ; <b>if</b> = c’est possible.<br>• <b>As long as / provided that</b> = à condition que ; <b>in case</b> = au cas où ; <b>even if</b> = même si.' }
  ],
  exercises: [
    { type: 'mcq', q: 'If you heat ice, it ___.', options: ['melt', 'melts', 'melted', 'melting'], answer: 1, explain: 'Conditionnel 0 (vérité générale) : <b>if + présent, présent</b>. Sujet <i>it</i> → <b>melts</b> (n’oublie pas le <i>-s</i> à la 3ᵉ personne).' },
    { type: 'gap', q: 'If you ___ (press) this button, the machine stops.', answers: ['press'], explain: 'Conditionnel 0 : présent simple dans les deux parties. Sujet <i>you</i> → <b>press</b>.' },
    { type: 'mcq', q: 'If the client ___, we will sign the contract on Friday.', options: ['agrees', 'will agree', 'agreed', 'would agree'], answer: 0, explain: 'Conditionnel 1 : <b>if + présent simple</b>, <i>will</i> dans la conséquence. <i>Will agree</i> est impossible après <i>if</i>, comme « s’il acceptera » en français.' },
    { type: 'gap', q: 'If it rains tomorrow, we ___ (cancel) the visit to the factory.', answers: ['will cancel', "'ll cancel", 'are going to cancel', "'re going to cancel"], explain: 'Conditionnel 1 : la condition est au présent (<i>rains</i>), la conséquence au futur : <b>will cancel</b> (ou <i>’ll cancel</i>, <i>are going to cancel</i>).' },
    { type: 'mcq', q: 'Quelle phrase est correcte ?', options: ['If it will rain, we will stay inside.', 'If it rains, we will stay inside.', 'If it rain, we will stay inside.', 'If it will rain, we stay inside.'], answer: 1, explain: 'Conditionnel 1 : <b>if + présent</b> (<i>rains</i>), <b>will</b> + base (<i>will stay</i>). Jamais <i>will</i> après <i>if</i> ; et avec <i>it</i>, le présent prend un <b>-s</b> (<i>it rains</i>).' },
    { type: 'gap', q: 'If you don’t hurry, you’ll miss the train. = ___ you hurry, you’ll miss the train.', answers: ['unless'], explain: '<b>Unless</b> = <i>if … not</i>. Le verbe qui suit reste affirmatif : <i>Unless you hurry</i> (sauf si tu te dépêches).' },
    { type: 'mcq', q: 'The meeting finishes at 5 p.m. ___ it finishes, I’ll call you.', options: ['If', 'When', 'Unless', 'In case'], answer: 1, explain: 'La réunion va forcément se terminer (on connaît l’heure) → c’est une <b>certitude</b> : <b>when</b>. <i>If</i> exprimerait un doute.' },
    { type: 'gap', q: 'I’ll call you as soon as I ___ (land) in Tokyo.', answers: ['land', 'have landed', "'ve landed"], explain: 'Après <b>as soon as</b> (dès que), on met le <b>présent</b> pour parler du futur : <i>as soon as I <b>land</b></i>. Le français dit « dès que j’atterrirai », mais l’anglais n’accepte pas <i>will</i> ici. (<i>as soon as I have landed</i> est aussi correct.)' },
    { type: 'order', answer: 'We will sign the contract if they agree.', alts: ['If they agree we will sign the contract'], fr: 'Nous signerons le contrat s’ils sont d’accord.', explain: 'Conséquence au futur (<i>will sign</i>) + condition au présent (<i>if they agree</i>). La partie avec <i>if</i> peut aussi ouvrir la phrase.' },
    { type: 'mcq', q: 'Take your laptop ___ the projector doesn’t work.', options: ['in case', 'unless', 'although', 'because of'], answer: 0, explain: '<b>In case</b> = au cas où : on prend l’ordinateur <b>par précaution</b>. <i>Unless … doesn’t</i> ferait une double négation ; <i>although</i> (bien que) n’est pas logique ; <i>because of</i> est suivi d’un nom, pas d’une proposition.' },
    { type: 'listen', say: "If the delivery doesn't arrive by Thursday, we'll have to cancel the event.", accent: 'en-CA', q: 'Que va-t-il se passer ?', options: ['L’événement est déjà annulé.', 'L’événement sera annulé si la livraison n’arrive pas d’ici jeudi.', 'La livraison arrivera jeudi, c’est certain.'], answer: 1, explain: '<i>If the delivery <b>doesn’t arrive</b> by Thursday, we’ll have to cancel</i> : l’annulation dépend d’une condition, elle n’est pas encore décidée.' },
    { type: 'order', answer: 'What will you do if the flight is canceled?', alts: ['If the flight is canceled what will you do'], fr: 'Que feras-tu si le vol est annulé ?', explain: 'Question au conditionnel 1 : <i>What <b>will</b> you do</i> (conséquence) + <i>if the flight <b>is</b> canceled</i> (condition au présent).' },
    { type: 'dictation', say: "Unless it's urgent, please send me an email.", accent: 'en-GB', answers: ["Unless it's urgent please send me an email", "Unless it's urgent, please send me an email", 'Unless it is urgent please send me an email', 'Unless it is urgent, please send me an email'], explain: '<b>Unless</b> = sauf si : « Sauf si c’est urgent, envoie-moi un e-mail. » Le verbe après <i>unless</i> est affirmatif (<i>it’s urgent</i>).' },
    { type: 'mcq', q: 'If the shipment ------- late, please inform the warehouse manager immediately. <small>(style TOEIC)</small>', options: ['arrives', 'will arrive', 'arrival', 'arriving'], answer: 0, explain: 'Après <b>if</b>, il faut un verbe conjugué au <b>présent</b> : <b>arrives</b>. <i>Will arrive</i> est interdit après <i>if</i> ; <i>arrival</i> est un nom et <i>arriving</i> n’est pas conjugué.' },
    { type: 'mcq', q: 'The warranty will remain valid ------- the product is used according to the instructions. <small>(style TOEIC)</small>', options: ['provided that', 'unless', 'even though', 'in case'], answer: 0, explain: '<b>Provided that</b> = à condition que : la garantie reste valable <b>si</b> le produit est bien utilisé. <i>Unless</i> (sauf si) donnerait le sens contraire ; <i>even though</i> (bien que) et <i>in case</i> (au cas où) ne sont pas logiques.' },
    { type: 'mcq', q: '------- you need further assistance, please call our help desk at 555-0142. <small>(style TOEIC)</small>', options: ['Should', 'Would', 'Unless', 'Although'], answer: 0, explain: '<b>Should you need…</b> = <i>If you need…</i> : formule très fréquente dans les e-mails formels (inversion). <i>Unless</i> (sauf si) et <i>although</i> (bien que) ne sont pas logiques ; <i>Would you need</i> n’est pas une condition.' }
  ]
});
