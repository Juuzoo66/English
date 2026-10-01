LE.register({
  id: 'g23',
  kind: 'grammar',
  title: 'Les quantifieurs : some, any, much, many, few, little…',
  subtitle: 'Dire « combien » : du, des, beaucoup, peu, assez, trop, chaque, aucun…',
  level: 'A2',
  minutes: 45,
  goals: [
    'Choisir entre <b>some</b>, <b>any</b> et <b>no</b> selon la phrase (affirmation, négation, question, offre polie)',
    'Dire « beaucoup », « peu », « assez » et « trop » : <i>many, much, a lot of, (a) few, (a) little, enough, too many…</i>',
    'Employer <i>each, every, all, most, none, both, either, neither</i> avec le bon nom et le bon verbe',
    'Déjouer les pièges du TOEIC : <i>a number of / the number of</i>, <i>amount / number</i>'
  ],
  blocks: [
    { type: 'h', text: 'À quoi servent les quantifieurs ?' },
    { type: 'p', html: 'Les <b>quantifieurs</b> sont les petits mots qu’on place devant un nom pour dire <b>quelle quantité</b> : du, des, quelques, beaucoup, peu, assez, trop, chaque, aucun… En français, on dit « beaucoup de » aussi bien pour des clients que pour de l’argent. En anglais, le choix dépend souvent du <b>type de nom</b> : <b>dénombrable</b> (qu’on peut compter : <i>one client, two clients</i>) ou <b>indénombrable</b> (qu’on ne compte pas : <i>money, time, information</i>). Si tu hésites, relis la leçon « Le pluriel, dénombrables et indénombrables ».' },
    { type: 'table', head: ['Sens', 'Dénombrable (pluriel)', 'Indénombrable', 'Les deux'], rows: [
      ['beaucoup de', '<b>many</b> clients', '<b>much</b> money', '<b>a lot of</b> clients / money'],
      ['combien ?', '<b>How many</b> clients?', '<b>How much</b> money?', '(pas de forme commune)'],
      ['quelques, un peu de', '<b>a few</b> clients', '<b>a little</b> money', '<b>some</b> clients / money'],
      ['peu de', '<b>few</b> clients', '<b>little</b> money', '(pas de forme commune)'],
      ['trop de', '<b>too many</b> clients', '<b>too much</b> money', '(pas de forme commune)'],
      ['assez de', '(voir « Les deux »)', '(voir « Les deux »)', '<b>enough</b> clients / money'],
      ['plusieurs', '<b>several</b> clients', '(impossible)', '(pas de forme commune)']
    ], caption: 'Le réflexe : <b>many, few, several</b> → dénombrables ; <b>much, little</b> → indénombrables ; <b>a lot of, some, any, enough</b> → les deux.' },

    { type: 'h', text: 'Some, any et no' },
    { type: 'p', html: '<b>Some</b> et <b>any</b> correspondent souvent à « du, de la, des » ou « quelques ». On les met devant un nom <b>pluriel</b> ou <b>indénombrable</b>. La règle de base : <b>some</b> dans les phrases <b>affirmatives</b>, <b>any</b> dans les phrases <b>négatives</b> et les <b>questions</b>. <b>No</b> veut dire « aucun, pas de » : c’est l’équivalent de <i>not any</i>.' },
    { type: 'table', head: ['Type de phrase', 'Pluriel', 'Indénombrable', 'Français'], rows: [
      ['Affirmation', 'We have <b>some</b> boxes.', 'We have <b>some</b> paper.', 'Nous avons des cartons / du papier.'],
      ['Négation', 'We don’t have <b>any</b> boxes.', 'We don’t have <b>any</b> paper.', 'Nous n’avons pas de cartons / de papier.'],
      ['Négation avec <b>no</b>', 'We have <b>no</b> boxes.', 'We have <b>no</b> paper.', 'Nous n’avons aucun carton / pas du tout de papier.'],
      ['Question', 'Do you have <b>any</b> boxes?', 'Do you have <b>any</b> paper?', 'As-tu des cartons / du papier ?']
    ], caption: 'Une seule négation en anglais : <b>not … any</b> ou <b>no</b>, jamais les deux. <span class="ko">We don’t have no paper.</span> → <span class="ok">We don’t have any paper.</span> Après <b>no</b>, pas d’article : <i>no paper</i>, jamais <i>no a paper</i>.' },
    { type: 'p', html: 'Deux exceptions utiles : on emploie <b>some</b> dans une question quand on <b>propose</b> quelque chose ou quand on <b>demande</b> poliment (on s’attend à un « oui »). Et <b>any</b> dans une phrase affirmative veut dire « n’importe quel » ; on le trouve aussi après <b>if</b> (si). Les mots composés suivent les mêmes règles : <i>someone, something</i> / <i>anyone, anything</i> / <i>nobody, nothing</i> (voir la leçon « Les pronoms : compléments, réfléchis et indéfinis »).' },
    { type: 'examples', items: [
      { en: 'Would you like some coffee?', fr: 'Voulez-vous du café ?', note: 'Offre polie : on s’attend à un « oui » → <b>some</b>.' },
      { en: 'Could I have some water, please?', fr: 'Pourrais-je avoir de l’eau, s’il vous plaît ?', note: 'Demande polie → <b>some</b>.' },
      { en: 'If you have any questions, please contact us.', fr: 'Si vous avez des questions, n’hésitez pas à nous contacter.', note: 'Phrase très fréquente à la fin des e-mails et des annonces du TOEIC.' },
      { en: 'You can call me at any time.', fr: 'Tu peux m’appeler à n’importe quelle heure.', note: '<b>any</b> dans une phrase affirmative = « n’importe quel ».' },
      { en: 'How many tickets are left? None.', fr: 'Combien de billets reste-t-il ? Aucun.', note: '<b>None</b> = « aucun ». Il s’emploie seul ou suivi de <b>of</b> (<i>none of them</i>), jamais directement devant un nom : <i>no tickets</i>, mais <i>none</i> tout seul.' }
    ] },

    { type: 'h', text: 'Much, many, a lot of : « beaucoup de »' },
    { type: 'p', html: '<b>Many</b> s’emploie avec un nom <b>dénombrable au pluriel</b> (<i>many emails</i>), <b>much</b> avec un nom <b>indénombrable</b> (<i>much money</i>). <b>A lot of</b> (ou <b>lots of</b>, plus familier) va avec les deux. Dans la conversation, on utilise surtout <i>much</i> et <i>many</i> dans les <b>négations</b> et les <b>questions</b>, et <b>a lot of</b> dans les phrases <b>affirmatives</b>. À l’écrit (e-mails, rapports, TOEIC), <i>many</i> reste très courant à l’affirmative : <i>Many clients pay online.</i>' },
    { type: 'table', head: ['Nom', 'Affirmation', 'Négation', 'Question'], rows: [
      ['Dénombrable', 'We have <b>a lot of</b> orders.', 'We don’t have <b>many</b> orders.', 'Do you have <b>many</b> orders?'],
      ['Indénombrable', 'We have <b>a lot of</b> work.', 'We don’t have <b>much</b> work.', 'Do you have <b>much</b> work?'],
      ['Combien ?', '(uniquement en question)', '(uniquement en question)', '<b>How many</b> orders? / <b>How much</b> work?']
    ], caption: 'Pour un prix : <b>How much is it?</b> ou <b>How much does it cost?</b> (Combien ça coûte ?)' },
    { type: 'box', style: 'warn', title: 'Pièges : « much » et le « de » français', html: '• À l’affirmative, <i>much</i> tout seul devant un nom sonne bizarre à l’oral (sauf dans <i>too much, so much</i>) : <span class="ko">I have much work.</span> → <span class="ok">I have a lot of work.</span><br>• Pas de <b>of</b> après <i>many</i> et <i>much</i> devant un nom seul : <span class="ko">many of clients</span> → <span class="ok">many clients</span>. On ajoute <b>of</b> seulement devant <i>the, my, our, these…</i> : <i>many <b>of our</b> clients</i> (beaucoup de nos clients).<br>• <b>A lot</b> sans nom derrière s’emploie sans <b>of</b> : <i>Thanks <b>a lot</b>! She travels <b>a lot</b>.</i>' },
    { type: 'examples', items: [
      { en: 'We get a lot of applications every year.', fr: 'Nous recevons beaucoup de candidatures chaque année.' },
      { en: "There isn't much space in the storage room.", fr: 'Il n’y a pas beaucoup de place dans la réserve.' },
      { en: 'How many copies do you need?', fr: 'Combien d’exemplaires te faut-il ?' },
      { en: 'How much money do we have left in the budget?', fr: 'Combien d’argent nous reste-t-il dans le budget ?' },
      { en: "Don't worry, there's plenty of parking.", fr: 'Ne t’inquiète pas, il y a plein de places pour se garer.', note: '<b>plenty of</b> = beaucoup de, largement assez de (avec les deux types de noms).' }
    ] },

    { type: 'h', text: '(A) few, (a) little : la nuance qui change tout' },
    { type: 'p', html: 'Ces mots parlent d’une <b>petite quantité</b>. <b>Few</b> va avec les dénombrables au pluriel, <b>little</b> avec les indénombrables. Mais attention : la présence de <b>a</b> change le sens ! <b>Avec a</b>, c’est <b>positif</b> (« quelques, un peu de » : il y en a, ça suffit). <b>Sans a</b>, c’est <b>négatif</b> (« peu de » : pas beaucoup, pas assez).' },
    { type: 'table', head: ['Nuance', 'Dénombrable (pluriel)', 'Indénombrable', 'Sens'], rows: [
      ['Positive', '<b>a few</b> days', '<b>a little</b> time', 'quelques jours, un peu de temps : ça suffit'],
      ['Négative', '<b>few</b> days', '<b>little</b> time', 'peu de jours, peu de temps : ce n’est pas assez'],
      ['Renforcée', '<b>very few</b> / <b>only a few</b>', '<b>very little</b> / <b>only a little</b>', 'très peu de / seulement quelques, seulement un peu de']
    ], caption: 'À l’oral, <i>few</i> et <i>little</i> seuls sont assez formels : on dit plus souvent <b>not many</b> / <b>not much</b>. Attention : <b>quite a few</b> = pas mal de, un assez grand nombre. Pour comparer : <b>fewer</b> + pluriel (<i>fewer employees</i>), <b>less</b> + indénombrable (<i>less money</i>).' },
    { type: 'examples', items: [
      { en: 'I have a few questions about the contract.', fr: 'J’ai quelques questions sur le contrat.' },
      { en: 'Few people came to the presentation.', fr: 'Peu de gens sont venus à la présentation.', note: 'Sens négatif : c’est décevant.' },
      { en: 'We still have a little time before the meeting.', fr: 'Il nous reste encore un peu de temps avant la réunion.' },
      { en: 'There is little hope of finishing today.', fr: 'Il y a peu d’espoir de finir aujourd’hui.' },
      { en: 'I speak a little Spanish.', fr: 'Je parle un peu espagnol.' }
    ] },

    { type: 'h', text: 'Enough, too, too much, too many, several' },
    { type: 'p', html: '<b>Enough</b> veut dire « assez (de) ». Sa place dépend du mot qui l’accompagne : <b>avant un nom</b> (<i>enough time</i>), mais <b>après un adjectif ou un adverbe</b> (<i>big enough, fast enough</i>). <b>Too</b> veut dire « trop » et a un sens <b>négatif</b> : il y a un problème. <b>Several</b> veut dire « plusieurs » (plus que <i>a few</i>) et va seulement avec les dénombrables au pluriel.' },
    { type: 'table', head: ['Structure', 'Exemple', 'Français'], rows: [
      ['<b>enough</b> + nom', 'We don’t have <b>enough chairs</b>.', 'Nous n’avons pas assez de chaises.'],
      ['adjectif + <b>enough</b>', 'The room isn’t <b>big enough</b>.', 'La salle n’est pas assez grande.'],
      ['<b>too</b> + adjectif', 'This hotel is <b>too expensive</b>.', 'Cet hôtel est trop cher.'],
      ['<b>too much</b> + indénombrable', 'I have <b>too much work</b>.', 'J’ai trop de travail.'],
      ['<b>too many</b> + pluriel', 'We get <b>too many emails</b>.', 'Nous recevons trop d’e-mails.'],
      ['<b>several</b> + pluriel', 'I called him <b>several times</b>.', 'Je l’ai appelé plusieurs fois.'],
      ['… <b>enough to</b> / <b>too</b> … <b>to</b> + verbe', 'She’s <b>old enough to</b> drive.<br>It’s <b>too late to</b> call.', 'Elle est assez âgée pour conduire.<br>Il est trop tard pour appeler.']
    ] },
    { type: 'box', style: 'warn', title: 'Pièges : « assez » et « trop »', html: '• <span class="ko">enough big</span> → <span class="ok">big enough</span> : après un adjectif, <b>enough</b> se place <b>derrière</b>.<br>• « C’est assez cher » au sens de « plutôt cher » ne se dit pas avec <i>enough</i> : <span class="ok">It’s fairly expensive.</span> / <span class="ok">It’s pretty expensive.</span><br>• <b>Too</b> ≠ <b>very</b> : <i>The hotel is <b>very</b> expensive</i> (très cher, mais on peut le prendre) ; <i>The hotel is <b>too</b> expensive</i> (trop cher : on ne le prend pas).<br>• <span class="ko">too much people</span> → <span class="ok">too many people</span> (<i>people</i> est un pluriel dénombrable).' },
    { type: 'examples', items: [
      { en: 'Is there enough coffee for everyone?', fr: 'Y a-t-il assez de café pour tout le monde ?' },
      { en: "The text isn't big enough. Can you make it bigger?", fr: 'Le texte n’est pas assez grand. Tu peux l’agrandir ?' },
      { en: "We can't accept the order. The deadline is too short.", fr: 'Nous ne pouvons pas accepter la commande. Le délai est trop court.' },
      { en: 'There were too many people at the entrance.', fr: 'Il y avait trop de monde à l’entrée.' },
      { en: 'Several candidates applied for the job.', fr: 'Plusieurs candidats ont postulé pour le poste.' }
    ] },

    { type: 'h', text: 'Each, every, all, most, none…' },
    { type: 'p', html: '<b>Each</b> et <b>every</b> veulent dire « chaque » ou « tous les ». Ils sont suivis d’un nom au <b>singulier</b> et d’un verbe au <b>singulier</b>, même quand le français met un pluriel (« tous les employés »). <b>Each</b> insiste sur les éléments pris un par un (il peut n’y en avoir que deux) ; <b>every</b> pense au groupe entier, sans exception. Très souvent, les deux sont possibles.' },
    { type: 'examples', items: [
      { en: 'Each employee has a personal locker.', fr: 'Chaque employé a un casier personnel.', note: 'Nom au singulier (<i>employee</i>) et verbe au singulier (<i>has</i>).' },
      { en: 'Every room has a view of the sea.', fr: 'Toutes les chambres ont vue sur la mer.', note: 'Le français dit « toutes les chambres » (pluriel) ; l’anglais dit <i>every room</i> (singulier).' },
      { en: 'I check my emails every morning.', fr: 'Je consulte mes e-mails tous les matins.' },
      { en: 'Each of the rooms has a projector.', fr: 'Chacune des salles a un projecteur.', note: '<b>each of</b> + <i>the / my / these</i> + pluriel, mais verbe au <b>singulier</b>. On ne dit jamais <i>every of</i> (mais <i>every one of the rooms</i> est correct).' }
    ] },
    { type: 'table', head: ['Mot', 'En général', 'Groupe précis (+ of the / of my…)', 'Français'], rows: [
      ['all', '<b>all</b> employees', '<b>all (of) the</b> employees', 'tous les employés'],
      ['most', '<b>most</b> employees', '<b>most of the</b> employees', 'la plupart des employés'],
      ['some', '<b>some</b> employees', '<b>some of the</b> employees', 'certains employés, certains des employés'],
      ['no / none', '<b>no</b> employees', '<b>none of the</b> employees', 'aucun employé, aucun des employés'],
      ['many', '<b>many</b> employees', '<b>many of the</b> employees', 'beaucoup d’employés, beaucoup des employés']
    ], caption: '<b>All, most, some, many, no</b> + nom parlent des choses <b>en général</b> (sans <i>the</i>). Pour un <b>groupe précis</b>, on ajoute <b>of the / of my / of our…</b> (et <b>no</b> devient <b>none of</b>). Devant un pronom, <b>of</b> est obligatoire : <i>all <b>of</b> us, most <b>of</b> them, none <b>of</b> them</i>.' },
    { type: 'box', style: 'warn', title: 'Piège : « la plupart des » et « tous les jours »', html: '<span class="ko">Most of people</span> / <span class="ko">The most people</span> → <span class="ok">Most people</span> (en général).<br><span class="ko">Most of employees in our team</span> → <span class="ok">Most of the employees in our team</span> (groupe précis : il faut <b>the</b>).<br>« Tous les jours » se dit <b>every day</b> ; <i>all day</i> veut dire « toute la journée ».' },

    { type: 'h', text: 'Both, either, neither : quand il y en a deux (B1)' },
    { type: 'table', head: ['Mot', 'Sens', 'Exemple', 'Français'], rows: [
      ['<b>both</b> + pluriel', 'les deux', '<b>Both</b> candidates speak German.', 'Les deux candidats parlent allemand.'],
      ['<b>either</b> + singulier', 'l’un ou l’autre (peu importe lequel)', 'You can take <b>either</b> train.', 'Tu peux prendre n’importe lequel des deux trains.'],
      ['<b>neither</b> + singulier', 'aucun des deux', '<b>Neither</b> option is cheap.', 'Aucune des deux options n’est bon marché.'],
      ['<b>both</b> … <b>and</b> …', 'à la fois … et …', 'She speaks <b>both</b> French <b>and</b> Arabic.', 'Elle parle (à la fois) français et arabe.'],
      ['<b>either</b> … <b>or</b> …', 'soit … soit …', 'You can pay <b>either</b> by card <b>or</b> in cash.', 'Tu peux payer soit par carte, soit en espèces.'],
      ['<b>neither</b> … <b>nor</b> …', 'ni … ni …', '<b>Neither</b> Tom <b>nor</b> Ana was available.', 'Ni Tom ni Ana n’étaient disponibles.']
    ], caption: 'Avec <b>of</b> : <i>both of them, either of the rooms, neither of us</i>.' },
    { type: 'examples', items: [
      { en: 'Both printers are out of order.', fr: 'Les deux imprimantes sont en panne.' },
      { en: 'You can use either meeting room.', fr: 'Tu peux utiliser n’importe laquelle des deux salles de réunion.' },
      { en: 'Neither supplier can deliver before Friday.', fr: 'Aucun des deux fournisseurs ne peut livrer avant vendredi.' },
      { en: "I don't like either option.", fr: 'Aucune des deux options ne me plaît.', note: '<i>not … either</i> = <i>neither</i> : <i>I like neither option.</i> (plus formel). Une seule négation !' }
    ] },
    { type: 'dialog', title: 'Préparer une formation', lines: [
      { speaker: 'W', en: "Omar, do we have enough chairs for tomorrow's training?", fr: 'Omar, est-ce qu’on a assez de chaises pour la formation de demain ?' },
      { speaker: 'M', en: 'I think so. We have thirty, and only twenty-four people are coming.', fr: 'Je crois. On en a trente, et seulement vingt-quatre personnes viennent.' },
      { speaker: 'W', en: 'Great. Is there any coffee left?', fr: 'Parfait. Est-ce qu’il reste du café ?' },
      { speaker: 'M', en: "There's a little, but not much. I'll order some more.", fr: 'Il en reste un peu, mais pas beaucoup. Je vais en recommander.' },
      { speaker: 'W', en: 'And how many handouts did you print?', fr: 'Et combien de documents as-tu imprimés ?' },
      { speaker: 'M', en: 'Only a few. The printer on our floor has too many problems.', fr: 'Seulement quelques-uns. L’imprimante de notre étage a trop de problèmes.' },
      { speaker: 'W', en: 'Use either printer on the third floor. Both of them work fine.', fr: 'Utilise l’une ou l’autre des imprimantes du troisième étage. Elles marchent bien toutes les deux.' }
    ] },

    { type: 'h', text: 'Les pièges préférés du TOEIC' },
    { type: 'table', head: ['Expression', 'Nom qui suit', 'Verbe', 'Exemple'], rows: [
      ['<b>a number of</b> (plusieurs, un certain nombre de)', 'dénombrable pluriel', '<b>pluriel</b>', 'A number of employees <b>have</b> asked for training.'],
      ['<b>the number of</b> (le nombre de)', 'dénombrable pluriel', '<b>singulier</b>', 'The number of complaints <b>has</b> decreased.'],
      ['<b>the amount of</b> (la quantité de, le montant de)', 'indénombrable', '<b>singulier</b>', 'The amount of paperwork <b>is</b> incredible.'],
      ['<b>a large number of</b>', 'dénombrable pluriel', '<b>pluriel</b>', 'A large number of visitors <b>are</b> expected.'],
      ['<b>a large amount of</b> / <b>a great deal of</b>', 'indénombrable', '<b>singulier</b>', 'A great deal of money <b>was</b> spent on advertising.']
    ], caption: '<b>Number</b> → choses qu’on compte ; <b>amount</b> → quantité qu’on ne compte pas.' },
    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'La <b>Partie 5</b> teste souvent les quantifieurs. Ta méthode :<br>1) Regarde le <b>nom</b> : dénombrable ou non ? singulier ou pluriel ? <i>------- information</i> → <b>much / a little / some</b>, jamais <i>many</i> ni <i>a few</i>.<br>2) Regarde le <b>verbe</b> : <i>each / every</i> + singulier (<i>Each participant <b>receives</b>…</i>) ; <i>a number of</i> + pluriel.<br>3) Pense au sens : <i>few</i> (négatif) ou <i>a few</i> (positif) ?<br>En <b>Partie 7</b>, les e-mails se terminent souvent par <i>If you have <b>any</b> questions, …</i> et les annonces précisent : <i>Seating is limited: only <b>a few</b> seats remain.</i>' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• <b>some</b> (affirmation, offre, demande polie) / <b>any</b> (négation, question, après <i>if</i>) / <b>no</b> = <i>not any</i> (une seule négation).<br>• Dénombrables : <b>many, a few, few, several, too many</b> ; indénombrables : <b>much, a little, little, too much</b> ; les deux : <b>a lot of, some, any, enough</b>.<br>• <b>a few / a little</b> = positif ; <b>few / little</b> = négatif (peu de).<br>• <b>enough</b> + nom (<i>enough time</i>), mais adjectif + <b>enough</b> (<i>big enough</i>).<br>• <b>each / every</b> + nom singulier + verbe singulier ; <b>most people</b>, mais <b>most of the</b> + groupe précis.<br>• <b>both</b> (les deux), <b>either</b> (l’un ou l’autre), <b>neither</b> (aucun des deux).<br>• <b>a number of</b> + verbe pluriel ; <b>the number of</b> + verbe singulier ; <b>amount</b> + indénombrable.' }
  ],
  exercises: [
    { type: 'gap', q: "We don't have ___ paper for the printer. (some / any)", answers: ['any'], explain: 'Phrase négative (<i>don’t</i>) → <b>any</b>. <i>Some</i> s’emploie dans les phrases affirmatives.' },
    { type: 'mcq', q: 'Pour proposer poliment quelque chose (<i>Would you like ___ tea?</i>), on utilise normalement :', options: ['any', 'some', 'no'], answer: 1, explain: 'Dans une offre ou une demande polie, on s’attend à un « oui » → <b>some</b> : <i>Would you like some tea?</i>' },
    { type: 'gap', q: 'Sorry, there are ___ seats left on the 9 a.m. flight. (= aucune place)', answers: ['no', 'not any', 'no more'], explain: '<b>No</b> + nom = « aucun, pas de » (= <i>not any</i>) : <i>there are no seats left</i> ou <i>there aren’t any seats left</i>. Une seule négation !' },
    { type: 'mcq', q: 'How ___ employees work in this building?', options: ['much', 'many', 'a lot of'], answer: 1, explain: '<i>Employees</i> est un dénombrable au pluriel → <b>How many</b>. <i>How much</i> est réservé aux indénombrables (<i>How much money?</i>).' },
    { type: 'gap', q: "We don't have ___ time before the meeting. (much / many)", answers: ['much'], explain: '<i>Time</i> (le temps) est indénombrable → <b>much</b>. Dans une phrase négative, <i>much</i> est tout à fait naturel.' },
    { type: 'mcq', q: 'I have ___ questions about the contract. Do you have five minutes?', options: ['a little', 'a few', 'much'], answer: 1, explain: '<i>Questions</i> est un dénombrable au pluriel → <b>a few</b> (quelques). <i>A little</i> et <i>much</i> vont avec les indénombrables.' },
    { type: 'gap', q: 'Could you speak more slowly? I only speak ___ English. (un peu d’)', answers: ['a little', 'a bit of', 'a little bit of'], explain: '<i>English</i> (la langue) est indénombrable → <b>a little</b> = un peu de (sens positif). <i>A bit of</i> est aussi correct, en plus familier.' },
    { type: 'listen', accent: 'en-AU', say: 'Few people came to the training session, so we canceled the next one.', q: 'Qu’as-tu compris ?', options: ['Quelques personnes sont venues et la séance suivante est maintenue.', 'Peu de personnes sont venues, donc la séance suivante est annulée.', 'Beaucoup de personnes sont venues à la séance de formation.'], answer: 1, explain: '<b>Few</b> (sans <i>a</i>) = « peu de », sens négatif : il n’y avait presque personne. <i>We canceled the next one</i> = nous avons annulé la suivante.' },
    { type: 'gap', q: "This room isn't ___ for thirty people. (big + enough, dans le bon ordre)", answers: ['big enough'], explain: 'Avec un adjectif, <b>enough</b> se place <b>après</b> : <i>big enough</i> (assez grand). On ne dit jamais <i>enough big</i>.' },
    { type: 'mcq', q: '« Je consulte mes e-mails tous les jours. » → I check my emails ___ day.', options: ['all', 'every', 'all the'], answer: 1, explain: '« Tous les jours » = <b>every day</b> (<i>every</i> + singulier). <i>All day</i> veut dire « toute la journée », et <i>all the day</i> ne se dit pas.' },
    { type: 'order', answer: 'Each of the rooms has a projector.', fr: 'Chacune des salles a un projecteur.', explain: '<b>Each of the</b> + nom au pluriel (<i>rooms</i>), mais le verbe reste au <b>singulier</b> (<i>has</i>).' },
    { type: 'order', answer: 'Most of our clients pay by credit card.', fr: 'La plupart de nos clients paient par carte de crédit.', explain: 'Groupe précis (<i>our clients</i>) → <b>most of</b> + <i>our</i> + nom. Pour parler des clients en général, on dirait simplement <i>most clients</i>.' },
    { type: 'mcq', q: 'The support team cannot answer all the emails because it receives ------- messages every day. <small>(style TOEIC)</small>', options: ['too much', 'too many', 'too', 'very'], answer: 1, explain: '<i>Messages</i> est un dénombrable au pluriel → <b>too many</b> (trop de). <i>Too much</i> va avec les indénombrables ; <i>too</i> et <i>very</i> seuls se placent devant un adjectif, pas devant un nom.' },
    { type: 'mcq', q: 'Both hotels are near the conference center, so participants can stay at ------- hotel. <small>(style TOEIC)</small>', options: ['either', 'both', 'neither', 'all'], answer: 0, explain: '<b>Either</b> + singulier = l’un ou l’autre (peu importe lequel). <i>Both</i> et <i>all</i> demandent un nom au pluriel (<i>hotels</i>), et <i>neither</i> (aucun des deux) contredit le début de la phrase.' },
    { type: 'mcq', q: 'A number of customers ------- complained about the late deliveries. <small>(style TOEIC)</small>', options: ['has', 'have', 'is', 'was'], answer: 1, explain: '<b>A number of</b> = « plusieurs, un certain nombre de » → verbe au <b>pluriel</b> : <i>have complained</i>. Ne confonds pas avec <i>the number of</i> (le nombre de), qui prend un verbe au singulier.' },
    { type: 'mcq', q: 'The ------- of paperwork required for the new permit has decreased. <small>(style TOEIC)</small>', options: ['number', 'amount', 'many', 'few'], answer: 1, explain: '<i>Paperwork</i> (la paperasse) est indénombrable → <b>the amount of</b>. <i>The number of</i> s’emploie avec un dénombrable au pluriel (<i>the number of forms</i>).' }
  ]
});
