LE.register({
  id: 'g38',
  kind: 'grammar',
  title: 'Les connecteurs logiques : although, despite, however…',
  subtitle: 'Relier tes idées avec le bon mot… et la bonne construction : la clé de nombreuses questions des Parties 5 et 6',
  level: 'B1',
  minutes: 50,
  goals: [
    'Classer les connecteurs par <b>sens</b> : opposition, cause, conséquence, addition, but, condition, temps',
    'Reconnaître leur <b>nature</b> : conjonction + sujet + verbe, préposition + nom / <i>-ing</i>, adverbe + virgule',
    'Ne plus confondre <i>although / despite / however</i>, <i>because / because of</i>, <i>so / so that / such… that</i>',
    'Employer les paires <i>both… and, either… or, neither… nor, not only… but also</i> avec le bon accord'
  ],
  blocks: [
    { type: 'h', text: 'À quoi servent les connecteurs ?' },
    { type: 'p', html: 'Les <b>connecteurs logiques</b> (ou mots de liaison) relient deux idées et indiquent le lien entre elles : « mais », « bien que », « malgré », « donc », « parce que »… Ils sont partout dans les e-mails, les rapports et les articles du TOEIC. Le piège, c’est qu’en anglais, <b>plusieurs connecteurs ont le même sens mais pas la même construction</b>. Au TOEIC, on te propose souvent quatre options qui veulent toutes dire « malgré / bien que / cependant » : une seule rentre dans la phrase. Pour choisir, pose-toi toujours <b>deux questions</b> : 1) Quel est le <b>lien logique</b> (opposition, cause…) ? 2) <b>Qu’est-ce qui suit</b> le connecteur ?' },
    { type: 'examples', items: [
      { en: 'Although the train was late, we arrived on time.', fr: 'Bien que le train ait été en retard, nous sommes arrivés à l’heure.', note: '<b>Although</b> + sujet + verbe (<i>the train was</i>).' },
      { en: 'Despite the delay, we arrived on time.', fr: 'Malgré le retard, nous sommes arrivés à l’heure.', note: '<b>Despite</b> + un nom (<i>the delay</i>), sans verbe conjugué.' },
      { en: 'The train was late. However, we arrived on time.', fr: 'Le train était en retard. Cependant, nous sommes arrivés à l’heure.', note: '<b>However</b> + virgule, au début d’une nouvelle phrase.' },
      { en: 'The train was late, but we arrived on time.', fr: 'Le train était en retard, mais nous sommes arrivés à l’heure.', note: '<b>But</b> relie deux phrases au milieu.' }
    ] },

    { type: 'h', text: 'Les trois familles grammaticales' },
    { type: 'p', html: 'Une <b>proposition</b>, c’est un groupe <b>sujet + verbe conjugué</b> (<i>it was raining</i>, <i>the client paid</i>). Selon ce qui les suit, les connecteurs appartiennent à trois grandes familles.' },
    { type: 'table', head: ['Famille', 'Ce qui suit', 'Exemples', 'Modèle'], rows: [
      ['<b>Conjonction</b>', 'une <b>proposition</b> : sujet + verbe conjugué', 'although, because, while, unless, once, so that…', '<b>Although</b> <u>it was raining</u>, we went out.'],
      ['<b>Préposition</b>', 'un <b>nom</b>, un pronom ou un verbe en <b>-ing</b> (jamais de verbe conjugué)', 'despite, because of, due to, instead of, prior to…', '<b>Despite</b> <u>the rain</u>, we went out.'],
      ['<b>Adverbe de liaison</b>', 'placé en <b>début de phrase</b> (après un point ou un point-virgule), suivi d’une <b>virgule</b>, puis une phrase complète', 'however, therefore, moreover, otherwise…', 'It was raining. <b>However,</b> we went out.']
    ], caption: 'Même sens, trois constructions différentes : c’est exactement ce que teste le TOEIC.' },
    { type: 'box', style: 'tip', title: 'Le test du verbe conjugué', html: 'Regarde ce qu’il y a entre le trou et la virgule (ou la fin de la phrase) :<br>• un <b>sujet + verbe conjugué</b> → il faut une <b>conjonction</b> (<i>although, because…</i>) ;<br>• seulement un <b>nom</b> ou un verbe en <b>-ing</b> → il faut une <b>préposition</b> (<i>despite, because of…</i>) ;<br>• le trou est en <b>début de phrase</b>, suivi d’une <b>virgule</b> et d’une phrase complète, et la phrase d’avant forme déjà une idée complète → souvent un <b>adverbe</b> (<i>however, therefore…</i>).' },

    { type: 'h', text: 'Le grand tableau : sens × nature' },
    { type: 'table', head: ['Sens', 'Conjonction + sujet + verbe', 'Préposition + nom / -ing', 'Adverbe de liaison (+ virgule)'], rows: [
      ['<b>Opposition</b><br><small>mais, bien que, malgré, cependant</small>', 'but, although, even though, though, while, whereas', 'despite, in spite of, regardless of', 'however, nevertheless'],
      ['<b>Remplacement</b><br><small>au lieu de, à la place</small>', '—', 'instead of', 'instead'],
      ['<b>Cause</b><br><small>parce que, à cause de</small>', 'because, since, as', 'because of, due to, owing to', '—'],
      ['<b>Conséquence</b><br><small>donc, par conséquent</small>', 'so <small>(après une virgule)</small>', '—', 'therefore, consequently, as a result'],
      ['<b>Addition</b><br><small>et, de plus, en plus de</small>', 'and', 'in addition to, as well as', 'moreover, furthermore, in addition'],
      ['<b>But</b><br><small>pour que, afin que</small>', 'so that, in order that', '— <small>(mais <i>to / in order to</i> + base verbale)</small>', '—'],
      ['<b>Condition</b><br><small>si, sauf si, en cas de, sinon</small>', 'if, unless, provided that', 'in case of, in the event of', 'otherwise'],
      ['<b>Temps</b><br><small>dès que, avant, pendant ce temps</small>', 'once, as soon as, when, while, before, after, until', 'prior to, during, before, after, until', 'meanwhile, in the meantime'],
      ['<b>Source, exemple</b><br><small>selon, par exemple</small>', '—', 'according to, such as', 'for example, for instance']
    ], caption: '<i>Before</i>, <i>after</i> et <i>until</i> sont à la fois conjonctions et prépositions : <i>before <b>the meeting</b></i> / <i>before <b>we meet</b></i>. <i>During</i>, lui, est seulement une préposition : <span class="ko">during we were meeting</span> → <span class="ok">while we were meeting</span>.' },

    { type: 'h', text: 'L’opposition : although, despite, however' },
    { type: 'p', html: '<b>Although</b> et <b>even though</b> (« bien que, même si ») sont suivis d’une proposition. <i>Even though</i> est plus fort, et la subordonnée décrit un fait réel. <b>Though</b> est une version plus familière d’<i>although</i> ; à l’oral, on le met aussi en fin de phrase (« pourtant, cela dit »). <b>While</b> et <b>whereas</b> (« alors que, tandis que ») comparent deux faits opposés ; en début de phrase, <i>while</i> peut aussi vouloir dire « bien que ». Attention : <i>while</i> veut aussi dire « pendant que ».' },
    { type: 'examples', items: [
      { en: 'Although the hotel was expensive, the rooms were small.', fr: 'Bien que l’hôtel soit cher, les chambres étaient petites.', note: 'Contrairement au français (« bien que » + subjonctif), l’anglais garde un verbe normal : <i>was</i>.' },
      { en: 'Even though she had a fever, Ms. Okafor came to the meeting.', fr: 'Même si elle avait de la fièvre, Mme Okafor est venue à la réunion.' },
      { en: 'Sales increased in Asia, whereas they fell in Europe.', fr: 'Les ventes ont augmenté en Asie, alors qu’elles ont baissé en Europe.' },
      { en: 'While the design is attractive, the price is too high.', fr: 'Bien que le design soit séduisant, le prix est trop élevé.' },
      { en: 'The hotel was small. It was very comfortable, though.', fr: 'L’hôtel était petit. Il était très confortable, cela dit.', note: '<i>Though</i> en fin de phrase = « pourtant, cela dit » (oral).' }
    ] },
    { type: 'p', html: '<b>Despite</b> et <b>in spite of</b> (« malgré ») sont des prépositions : ils sont suivis d’un <b>nom</b> ou d’un verbe en <b>-ing</b>. Pour mettre une proposition après, il faut ajouter <i>the fact that</i>. <b>Regardless of</b> signifie « quel que soit, sans tenir compte de ». <b>However</b> et <b>nevertheless</b> (plus formel) sont des adverbes : « cependant, néanmoins ».' },
    { type: 'examples', items: [
      { en: 'Despite the heavy rain, the outdoor event was a success.', fr: 'Malgré la forte pluie, l’événement en plein air a été un succès.' },
      { en: 'In spite of working late every night, he missed the deadline.', fr: 'Bien qu’il ait travaillé tard tous les soirs, il n’a pas respecté la date limite.', note: 'Préposition + verbe en <b>-ing</b>.' },
      { en: 'Despite the fact that prices rose, sales remained strong.', fr: 'Malgré le fait que les prix aient augmenté, les ventes sont restées bonnes.' },
      { en: 'The fee is the same regardless of the number of participants.', fr: 'Le tarif est le même quel que soit le nombre de participants.' },
      { en: 'The project was expensive. Nevertheless, it was very profitable.', fr: 'Le projet a coûté cher. Néanmoins, il a été très rentable.' }
    ] },
    { type: 'table', head: ['Conjonction', 'Préposition', 'Adverbe de liaison'], rows: [
      ['<b>Although</b> the price is high, we will buy it.', '<b>Despite</b> the high price, we will buy it.', 'The price is high. <b>However,</b> we will buy it.'],
      ['<b>Even though</b> he was tired, he kept working.', '<b>In spite of</b> being tired, he kept working.', 'He was tired. <b>Nevertheless,</b> he kept working.'],
      ['<b>Although</b> it rained, the fair was a success.', '<b>Despite</b> the rain, the fair was a success.', 'It rained. <b>However,</b> the fair was a success.']
    ], caption: 'Une même idée, trois constructions : entraîne-toi à passer d’une colonne à l’autre.' },
    { type: 'box', style: 'warn', title: 'Pièges : despite, although, however', html: '• <span class="ko">Despite it rained, …</span> → <span class="ok">Although it rained, …</span> / <span class="ok">Despite the rain, …</span> / <span class="ok">Despite the fact that it rained, …</span><br>• <span class="ko">despite of the rain</span> → <span class="ok">despite the rain</span> ou <span class="ok">in spite of the rain</span> : <b>despite</b> ne prend jamais <i>of</i>, <b>in spite</b> en prend toujours un.<br>• <span class="ko">Although the delay, …</span> → <span class="ok">Despite the delay, …</span><br>• « Même si » : <b>even though</b> pour un fait réel (<i>Even though it’s expensive, we’ll buy it.</i> → c’est cher), mais <b>even if</b> pour une simple hypothèse (<i>Even if it’s expensive, we’ll buy it.</i> → ce sera peut-être cher). <span class="ko">even although</span> n’existe pas.<br>• <span class="ko">Although, the price is high…</span> → pas de virgule après <i>although</i>. La virgule, c’est pour <b>however</b>.<br>• Ne combine pas deux connecteurs d’opposition : <span class="ko">Although it was late, but we kept working.</span> → <span class="ok">Although it was late, we kept working.</span>' },

    { type: 'h', text: 'La cause et la conséquence' },
    { type: 'p', html: 'Pour la <b>cause</b> : <b>because</b>, <b>since</b> et <b>as</b> (« parce que, puisque, comme ») + proposition ; <b>because of</b>, <b>due to</b> et <b>owing to</b> (« à cause de, en raison de ») + nom. <i>Due to</i> et <i>owing to</i> sont plus formels, très fréquents dans les annonces. Pour la <b>conséquence</b> : <b>so</b> (« donc ») relie deux propositions après une virgule ; <b>therefore</b>, <b>consequently</b> et <b>as a result</b> (« par conséquent ») commencent une nouvelle phrase.' },
    { type: 'examples', items: [
      { en: 'We canceled the picnic because it was raining.', fr: 'Nous avons annulé le pique-nique parce qu’il pleuvait.' },
      { en: 'We canceled the picnic because of the rain.', fr: 'Nous avons annulé le pique-nique à cause de la pluie.' },
      { en: 'The flight was delayed due to bad weather.', fr: 'Le vol a été retardé en raison du mauvais temps.' },
      { en: "Since you're here, can you help me with this report?", fr: 'Puisque tu es là, tu peux m’aider avec ce rapport ?', note: '<i>Since</i> veut aussi dire « depuis » : c’est le contexte qui tranche.' },
      { en: 'The printer was broken, so I used the one on the second floor.', fr: 'L’imprimante était en panne, donc j’ai utilisé celle du deuxième étage.' },
      { en: 'Demand fell sharply. As a result, the factory reduced production.', fr: 'La demande a fortement baissé. Par conséquent, l’usine a réduit sa production.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : because ou because of ?', html: '<span class="ko">The meeting was postponed because the strike.</span><br>→ <span class="ok">…because <b>of</b> the strike.</span> (+ nom)<br>→ <span class="ok">…because there was a strike.</span> (+ sujet + verbe)<br>Même logique pour <i>due to / owing to</i> : jamais de verbe conjugué après. <span class="ko">due to the train was late</span> → <span class="ok">due to the train’s late arrival</span>.' },

    { type: 'h', text: 'So, so that, such… that' },
    { type: 'table', head: ['Structure', 'Sens', 'Exemple', 'Français'], rows: [
      ['<b>, so</b> + proposition', 'conséquence (« donc »)', 'The office was closed<b>, so</b> I went home.', 'Le bureau était fermé, donc je suis rentrée.'],
      ['<b>so that</b> + proposition <small>(souvent avec can, could, will, would)</small>', 'but (« pour que, afin que »)', 'I left early <b>so that</b> I could catch the train.', 'Je suis partie tôt pour pouvoir prendre le train.'],
      ['<b>so</b> + adjectif / adverbe + <b>that</b>', 'intensité → conséquence (« si… que »)', 'The meeting was <b>so</b> long <b>that</b> I missed my train.', 'La réunion était si longue que j’ai raté mon train.'],
      ['<b>such</b> (a / an) + (adjectif +) nom + <b>that</b>', 'intensité → conséquence (« un(e) tel(le)… que, tellement de… que »)', 'It was <b>such</b> a long meeting <b>that</b> I missed my train.', 'C’était une réunion tellement longue que j’ai raté mon train.'],
      ['<b>to / in order to</b> + base verbale', 'but (« pour » + infinitif)', 'We hired two interns <b>(in order) to</b> reduce the workload.', 'Nous avons embauché deux stagiaires pour réduire la charge de travail.']
    ], caption: '<b>so</b> + adjectif ou adverbe seul (<i>so long</i>, <i>so quickly</i>) ; <b>such</b> + un nom, avec son article et son adjectif (<i>such a long meeting</i>, <i>such good results</i>). Exception : <b>so many / so much</b> + nom (<i>so many applicants that…</i>).' },
    { type: 'box', style: 'tip', title: 'Astuce : « pour » + verbe', html: '« Pour » suivi d’un verbe se dit <b>to</b> ou <b>in order to</b>, jamais <i>for to</i> : <span class="ko">I called for to confirm.</span> → <span class="ok">I called to confirm.</span> Et si le sujet change (« pour que <b>tu</b> puisses… »), on passe à <b>so that</b> : <i>I’ll send the file <b>so that</b> you can check it.</i>' },

    { type: 'h', text: 'Addition, condition, temps, remplacement' },
    { type: 'examples', items: [
      { en: 'In addition to a competitive salary, we offer flexible hours.', fr: 'En plus d’un salaire compétitif, nous proposons des horaires flexibles.', note: '<i>In addition to</i> = préposition (+ nom). <i>In addition,</i> = adverbe (+ virgule).' },
      { en: 'The software is cheap. Moreover, it is very easy to use.', fr: 'Le logiciel est bon marché. De plus, il est très facile à utiliser.' },
      { en: "You won't get a refund unless you keep the receipt.", fr: 'Tu ne seras pas remboursée sauf si tu gardes le ticket de caisse.', note: '<b>unless</b> = <i>if… not</i> (« sauf si, à moins que ») : voir la leçon « Les conditionnels 0 et 1 (if, unless, when…) ».' },
      { en: "Please send your report by Friday. Otherwise, we won't be able to discuss it at the meeting.", fr: 'Merci d’envoyer ton rapport d’ici vendredi. Sinon, nous ne pourrons pas en parler à la réunion.' }
    ] },
    { type: 'examples', items: [
      { en: 'As soon as the contract is signed, we will start the work.', fr: 'Dès que le contrat sera signé, nous commencerons les travaux.', note: 'Présent après <i>as soon as</i>, même pour parler du futur.' },
      { en: 'Once you receive the password, you can log in.', fr: 'Une fois que tu auras reçu le mot de passe, tu pourras te connecter.' },
      { en: 'All visitors must sign in prior to entering the building.', fr: 'Tous les visiteurs doivent s’enregistrer avant d’entrer dans le bâtiment.', note: '<i>prior to</i> = <i>before</i> (formel), + nom ou <b>-ing</b>.' },
      { en: 'The manager was on vacation. Meanwhile, her assistant handled the calls.', fr: 'La responsable était en vacances. Pendant ce temps, son assistante gérait les appels.' },
      { en: 'Instead of driving, Mr. Tanaka took the train.', fr: 'Au lieu de prendre la voiture, M. Tanaka a pris le train.' },
      { en: 'According to the forecast, sales will rise next quarter.', fr: 'Selon les prévisions, les ventes augmenteront le trimestre prochain.' }
    ] },
    { type: 'box', style: 'warn', title: 'Pièges des francophones', html: '• Pas de <i>will</i> après <b>once, as soon as, when, unless, before, until</b> quand ils introduisent un moment ou une condition : <span class="ko">as soon as he will arrive</span> → <span class="ok">as soon as he arrives</span>.<br>• <span class="ko">According to me, …</span> → <span class="ok">In my opinion, …</span> (<i>according to</i> sert à citer une source : <i>according to the report</i>).<br>• <b>Instead of</b> + nom / -ing, mais <b>instead</b> tout seul (souvent en fin de phrase) : <i>He didn’t drive. He took the train <b>instead</b>.</i>' },

    { type: 'h', text: 'Les paires : both… and, either… or, neither… nor, not only… but also' },
    { type: 'table', head: ['Paire', 'Sens', 'Exemple', 'Français'], rows: [
      ['<b>both</b> … <b>and</b>', 'les deux', '<b>Both</b> the manager <b>and</b> her assistant attended.', 'La responsable et son assistante étaient toutes les deux présentes.'],
      ['<b>either</b> … <b>or</b>', 'l’un ou l’autre', 'You can pay <b>either</b> by card <b>or</b> in cash.', 'Tu peux payer soit par carte, soit en espèces.'],
      ['<b>neither</b> … <b>nor</b>', 'ni l’un ni l’autre', '<b>Neither</b> the hotel <b>nor</b> the restaurant accepts checks.', 'Ni l’hôtel ni le restaurant n’acceptent les chèques.'],
      ['<b>not only</b> … <b>but also</b>', 'non seulement… mais aussi', 'The new model is <b>not only</b> faster <b>but also</b> cheaper.', 'Le nouveau modèle est non seulement plus rapide, mais aussi moins cher.']
    ] },
    { type: 'box', style: 'warn', title: 'Pièges : accord du verbe et paires mélangées', html: '• <b>both… and</b> → verbe au <b>pluriel</b> : <i>Both Ana and Luis <b>are</b> here.</i><br>• <b>either… or</b>, <b>neither… nor</b>, <b>not only… but also</b> → le verbe s’accorde avec le sujet <b>le plus proche</b> :<br><i>Neither the manager nor the <u>employees</u> <b>were</b> informed.</i> / <i>Neither the employees nor the <u>manager</u> <b>was</b> informed.</i><br>• Ne mélange pas les paires : <span class="ko">both… or</span>, <span class="ko">neither… or</span>, <span class="ko">either… nor</span>.<br>• <b>Neither</b> est déjà négatif : <span class="ko">Neither Tom nor Ana didn’t come.</span> → <span class="ok">Neither Tom nor Ana came.</span>' },

    { type: 'dialog', title: 'Le point sur les ventes', lines: [
      { speaker: 'M', en: 'How were sales last quarter?', fr: 'Comment étaient les ventes au dernier trimestre ?' },
      { speaker: 'W', en: 'Although the market was difficult, we sold more than expected.', fr: 'Bien que le marché ait été difficile, nous avons vendu plus que prévu.' },
      { speaker: 'M', en: "That's great. However, our costs went up because of the new warehouse.", fr: 'C’est super. Cependant, nos coûts ont augmenté à cause du nouvel entrepôt.' },
      { speaker: 'W', en: 'True. We need to cut spending so that we can stay profitable.', fr: 'C’est vrai. Nous devons réduire nos dépenses pour pouvoir rester rentables.' },
      { speaker: 'M', en: "I agree. As soon as the figures are ready, I'll send them to you.", fr: 'Je suis d’accord. Dès que les chiffres seront prêts, je te les enverrai.' },
      { speaker: 'W', en: "Perfect. In the meantime, I'll prepare the presentation.", fr: 'Parfait. En attendant, je vais préparer la présentation.' }
    ] },

    { type: 'h', text: 'Au TOEIC : Parties 5 et 6' },
    { type: 'box', style: 'info', title: 'La méthode en 3 étapes', html: '<b>1) La nature</b> : regarde ce qui suit le trou jusqu’à la virgule. Sujet + verbe → conjonction ; nom ou <i>-ing</i> → préposition ; trou en début de phrase + virgule + phrase complète → adverbe.<br><b>2) Le sens</b> : les deux idées s’opposent ? L’une est la cause de l’autre ? On ajoute une information ?<br><b>3) Élimine</b> les options qui ne passent pas l’un des deux tests.<br>Exemple : <i>------- the heavy traffic, Ms. Lin arrived on time.</i> (A) Although (B) Despite (C) However (D) Because of → un nom suit (<i>the heavy traffic</i>) → préposition : B ou D. Arriver à l’heure <b>malgré</b> les embouteillages → opposition → <b>Despite</b>.<br>En <b>Partie 6</b>, les adverbes de liaison (<i>however, therefore, in addition…</i>) tombent souvent en début de phrase : il faut relire la phrase <b>précédente</b> pour trouver le lien logique.' },
    { type: 'examples', items: [
      { en: 'Due to a scheduling conflict, the workshop has been moved to Thursday.', fr: 'En raison d’un conflit d’horaire, l’atelier a été déplacé à jeudi.' },
      { en: 'Although the budget was limited, the team completed the project successfully.', fr: 'Bien que le budget ait été limité, l’équipe a mené le projet à bien.' },
      { en: 'Please keep your receipt so that you can return the item if necessary.', fr: 'Merci de conserver votre ticket afin de pouvoir retourner l’article si nécessaire.' },
      { en: 'Our sales rose by 15 percent. Consequently, we will hire five new employees.', fr: 'Nos ventes ont augmenté de 15 %. Par conséquent, nous allons embaucher cinq nouveaux salariés.' }
    ] },

    { type: 'box', style: 'key', title: 'À retenir', html: '• <b>Conjonction + sujet + verbe</b> : although, even though, while, whereas, because, since, as, so that, unless, once, as soon as.<br>• <b>Préposition + nom / -ing</b> : despite, in spite of, because of, due to, owing to, instead of, in addition to, regardless of, according to, prior to.<br>• <b>Adverbe en début de phrase + virgule</b> : however, nevertheless, therefore, consequently, as a result, moreover, furthermore, in addition, otherwise, meanwhile, for example.<br>• <span class="ko">despite of</span> n’existe pas ; <i>because</i> + proposition, <i>because of</i> + nom.<br>• <b>so</b> + adjectif + that ; <b>such</b> (a) + nom + that ; <b>so that</b> = pour que.<br>• <i>either… or</i>, <i>neither… nor</i>, <i>not only… but also</i> : accord avec le sujet le plus proche ; <i>both… and</i> : pluriel.' }
  ],
  exercises: [
    { type: 'mcq', q: 'The flight was canceled ___ the storm.', options: ['because', 'because of', 'although'], answer: 1, explain: 'Après le trou, il y a seulement un nom (<i>the storm</i>), sans verbe conjugué → préposition : <b>because of</b>. <i>Because</i> demanderait sujet + verbe : <i>because there was a storm</i>.' },
    { type: 'mcq', q: '___ it was late, the team kept working.', options: ['Despite', 'Although', 'In spite of', 'However'], answer: 1, explain: 'Le trou est suivi d’une proposition (<i>it was</i> = sujet + verbe) → conjonction : <b>Although</b>. <i>Despite</i> et <i>in spite of</i> sont des prépositions (+ nom), et <i>however</i> ne relie pas deux propositions dans une même phrase.' },
    { type: 'mcq', q: 'Choisis la phrase correcte.', options: ['Despite of the delay, we finished on time.', 'Despite the delay, we finished on time.', 'Although the delay, we finished on time.', 'In spite the delay, we finished on time.'], answer: 1, explain: '<b>Despite</b> + nom, sans <i>of</i>. <i>In spite</i> exige toujours <i>of</i> (<i>in spite of the delay</i>), et <i>although</i> ne peut pas être suivi d’un simple nom.' },
    { type: 'gap', q: '___ of taking a taxi, we walked to the hotel. <small>(au lieu de)</small>', answers: ['Instead'], explain: '« Au lieu de » + verbe = <b>instead of</b> + <i>-ing</i> : <i>Instead of taking a taxi…</i>' },
    { type: 'gap', q: "You won't get a refund ___ you keep your receipt. <small>(sauf si)</small>", answers: ['unless', 'except if'], explain: '« Sauf si » = <b>unless</b> (= <i>if you don’t keep your receipt</i>). <i>Unless</i> est une conjonction : il est suivi d’un sujet + verbe (<i>you keep</i>).' },
    { type: 'gap', q: "I'll call you as soon as I ___ (arrive) at the airport.", answers: ['arrive', 'have arrived', "'ve arrived"], explain: 'Après <b>as soon as</b> (comme après <i>when, once, until</i>), on met le <b>présent</b> même pour parler du futur : <i>as soon as I arrive</i> (ou <i>have arrived</i>). Jamais <span class="ko">will arrive</span>.' },
    { type: 'gap', q: 'It was ___ a long meeting that I missed my train. <small>(tellement)</small>', answers: ['such'], explain: 'Devant un <b>nom</b> avec son article (<i>a long meeting</i>) → <b>such</b>. Avec un adjectif seul, on dirait <i>The meeting was <b>so</b> long that…</i>' },
    { type: 'gap', q: 'Neither the manager nor the employees ___ (be) informed about the change yesterday.', answers: ['were'], explain: 'Avec <b>neither… nor</b>, le verbe s’accorde avec le sujet <b>le plus proche</b> : <i>the employees</i> (pluriel) → <b>were</b>. <i>Yesterday</i> impose le prétérit.' },
    { type: 'order', answer: 'We canceled the trip because of the strike.', alts: ['Because of the strike we canceled the trip.'], fr: 'Nous avons annulé le voyage à cause de la grève.', explain: '<b>because of</b> + nom (<i>the strike</i>). On peut aussi commencer par <i>Because of the strike</i> (à l’écrit, on ajoute alors une virgule).' },
    { type: 'order', answer: 'The new software is not only faster but also cheaper.', alts: ['The new software is not only cheaper but also faster.'], fr: 'Le nouveau logiciel est non seulement plus rapide, mais aussi moins cher.', explain: '<b>not only</b> et <b>but also</b> se placent chacun juste devant l’élément qu’ils introduisent (<i>faster</i> / <i>cheaper</i>).' },
    { type: 'listen', say: "Hi Carla, it's Omar. The delivery truck broke down, so the chairs won't arrive until Thursday. However, the tables will be delivered tomorrow as planned.", accent: 'en-GB', q: 'Qu’est-ce qui sera livré demain ?', options: ['Les chaises.', 'Les tables.', 'Les chaises et les tables.'], answer: 1, explain: 'Les chaises n’arriveront que jeudi (<i>won’t arrive until Thursday</i>). <b>However</b> introduit l’opposition : <i>the tables will be delivered tomorrow</i> → les tables.' },
    { type: 'mcq', q: '------- the recent rise in fuel prices, Skyvale Airlines has increased the price of its tickets. <small>(style TOEIC)</small>', options: ['Although', 'Despite', 'Due to', 'Therefore'], answer: 2, explain: 'Un nom suit le trou (<i>the recent rise in fuel prices</i>) → préposition : <i>Despite</i> ou <i>Due to</i>. La hausse du carburant est la <b>cause</b> de la hausse des billets → <b>Due to</b> (« en raison de »). <i>Although</i> demande sujet + verbe, et <i>Therefore</i> est un adverbe (+ virgule, puis une phrase complète).' },
    { type: 'mcq', q: 'Please back up your files every day ------- no important data is lost. <small>(style TOEIC)</small>', options: ['so that', 'because of', 'in order to', 'even though'], answer: 0, explain: 'Le trou est suivi d’une proposition (<i>no important data is lost</i>) et exprime un <b>but</b> → <b>so that</b>. <i>In order to</i> est suivi d’une base verbale, <i>because of</i> d’un nom, et <i>even though</i> n’a pas de sens ici.' },
    { type: 'mcq', q: 'Sales of the new tablet were much lower than expected. -------, the company has decided to reduce production. <small>(style TOEIC)</small>', options: ['However', 'Consequently', 'Although', 'Despite'], answer: 1, explain: 'Début de phrase + virgule → adverbe de liaison : <i>However</i> ou <i>Consequently</i>. Les ventes sont faibles, <b>donc</b> on réduit la production : c’est une conséquence → <b>Consequently</b>. En Partie 6, c’est ainsi : relis toujours la phrase précédente pour trouver le lien logique.' },
    { type: 'mcq', q: 'Applicants must have ------- a university degree or at least five years of relevant experience. <small>(style TOEIC)</small>', options: ['both', 'either', 'neither', 'not only'], answer: 1, explain: 'Le mot <b>or</b> plus loin dans la phrase appelle <b>either… or</b> (« soit… soit »). <i>Both</i> va avec <i>and</i>, <i>neither</i> avec <i>nor</i>, <i>not only</i> avec <i>but also</i>.' },
    { type: 'mcq', q: 'All visitors must sign in at the front desk ------- entering the laboratory. <small>(style TOEIC)</small>', options: ['prior to', 'as soon as', 'so that', 'because'], answer: 0, explain: 'Le trou est suivi d’un verbe en <b>-ing</b> (<i>entering</i>), sans sujet → il faut une <b>préposition</b> : <b>prior to</b> (= <i>before</i>). <i>As soon as, so that</i> et <i>because</i> sont des conjonctions : elles demandent sujet + verbe conjugué.' }
  ]
});
