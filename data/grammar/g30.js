LE.register({
  id: 'g30',
  kind: 'grammar',
  title: 'Les adverbes et les adjectifs en -ed / -ing',
  subtitle: 'Dire comment on fait les choses et ce qu’on ressent : quickly, well, interested ou interesting ?',
  level: 'A2',
  minutes: 45,
  goals: [
    'Former un adverbe à partir d’un adjectif : <i>quick → quickly, easy → easily, good → well</i>',
    'Choisir entre adjectif et adverbe (<i>efficient</i> ou <i>efficiently</i> ?), la question n°1 de la Partie 5',
    'Placer l’adverbe au bon endroit : <i>She speaks English <b>well</b>.</i>',
    'Ne plus confondre <i>interested</i> et <i>interesting</i>, <i>bored</i> et <i>boring</i>'
  ],
  blocks: [
    { type: 'h', text: 'Adjectif ou adverbe : à quoi ça sert ?' },
    { type: 'p', html: 'L’<b>adjectif</b> décrit une personne ou une chose, c’est-à-dire un <b>nom</b> : <i>a <b>quick</b> answer</i> (une réponse rapide). L’<b>adverbe</b> décrit surtout <b>la manière</b> de faire une action, c’est-à-dire un <b>verbe</b> : <i>She answered <b>quickly</b>.</i> (Elle a répondu rapidement.) C’est exactement comme en français : <i>rapide</i> → <i>rapide<b>ment</b></i>. En anglais, la terminaison <b>-ly</b> joue le rôle de notre <b>-ment</b>.' },
    { type: 'examples', items: [
      { en: 'She is a careful driver.', fr: 'C’est une conductrice prudente.', note: '<i>careful</i> = adjectif : il décrit <i>driver</i> (un nom).' },
      { en: 'She drives carefully.', fr: 'Elle conduit prudemment.', note: '<i>carefully</i> = adverbe : il décrit <i>drives</i> (un verbe).' },
      { en: 'Mr. Tanaka gave a clear explanation.', fr: 'M. Tanaka a donné une explication claire.' },
      { en: 'Mr. Tanaka explained the problem clearly.', fr: 'M. Tanaka a expliqué le problème clairement.' }
    ] },

    { type: 'h', text: 'Former un adverbe en -ly' },
    { type: 'table', head: ['Adjectif', 'Règle', 'Adverbe', 'Français'], rows: [
      ['quick, slow, clear', '+ <b>-ly</b>', 'quick<b>ly</b>, slow<b>ly</b>, clear<b>ly</b>', 'rapidement, lentement, clairement'],
      ['careful, final', '+ <b>-ly</b> (donc deux <b>l</b>)', 'careful<b>ly</b>, final<b>ly</b>', 'soigneusement, finalement (enfin)'],
      ['polite, complete', '+ <b>-ly</b> (on garde le <b>e</b>)', 'polite<b>ly</b>, complete<b>ly</b>', 'poliment, complètement'],
      ['easy, happy, heavy', '<b>-y</b> → <b>-ily</b>', 'eas<b>ily</b>, happ<b>ily</b>, heav<b>ily</b>', 'facilement, joyeusement, fortement'],
      ['possible, simple, comfortable', '<b>-le</b> → <b>-ly</b>', 'possib<b>ly</b>, simp<b>ly</b>, comfortab<b>ly</b>', 'peut-être (éventuellement), simplement, confortablement'],
      ['basic, automatic, dramatic', '<b>-ic</b> → <b>-ically</b>', 'basic<b>ally</b>, automatic<b>ally</b>, dramatic<b>ally</b>', 'en gros (au fond), automatiquement, de façon spectaculaire']
    ], caption: 'Deux exceptions à connaître : <i>true → <b>truly</b></i> (vraiment, sincèrement), où le <b>e</b> disparaît, et <i>public → <b>publicly</b></i> (publiquement), et non <i>publically</i>.' },
    { type: 'examples', items: [
      { en: 'Please read the instructions carefully.', fr: 'Merci de lire attentivement les instructions.' },
      { en: 'You can easily book a room online.', fr: 'Tu peux facilement réserver une chambre en ligne.' },
      { en: 'The lights turn off automatically at 8 p.m.', fr: 'Les lumières s’éteignent automatiquement à 20 h.' },
      { en: 'Our sales increased dramatically last year.', fr: 'Nos ventes ont augmenté de façon spectaculaire l’année dernière.' }
    ] },
    { type: 'box', style: 'tip', title: 'Attention : certains mots en -ly sont des adjectifs', html: 'Quelques mots en <b>-ly</b> sont des <b>adjectifs</b> : <i>friendly</i> (aimable), <i>lovely</i> (charmant), <i>costly</i> (coûteux), <i>likely</i> (probable), <i>timely</i> (qui arrive au bon moment). Ils décrivent un nom : <i>a <b>friendly</b> receptionist</i> (une réceptionniste aimable). Pour l’adverbe, on dit <i>in a friendly way</i>.<br>Et <b>daily, weekly, monthly</b> sont à la fois adjectifs et adverbes : <i>a <b>weekly</b> meeting</i> (une réunion hebdomadaire), <i>we meet <b>weekly</b></i> (nous nous réunissons chaque semaine).' },

    { type: 'h', text: 'Les adverbes irréguliers' },
    { type: 'p', html: 'Quelques adverbes très fréquents ne prennent pas <b>-ly</b>. Le plus important : <b>good</b> (bon) → <b>well</b> (bien). Les autres ont <b>la même forme</b> que l’adjectif.' },
    { type: 'table', head: ['Adjectif', 'Adverbe', 'Exemple', 'Français'], rows: [
      ['good (bon)', '<b>well</b> (bien)', 'She speaks English <b>well</b>.', 'Elle parle bien anglais.'],
      ['fast (rapide)', '<b>fast</b> (vite)', 'He types very <b>fast</b>.', 'Il tape très vite.'],
      ['hard (dur, difficile)', '<b>hard</b> (dur, avec effort)', 'They work <b>hard</b>.', 'Ils travaillent dur.'],
      ['late (en retard, tardif)', '<b>late</b> (tard, en retard)', 'The train arrived <b>late</b>.', 'Le train est arrivé en retard.'],
      ['early (matinal, en avance)', '<b>early</b> (tôt)', 'I got up <b>early</b>.', 'Je me suis levée tôt.']
    ], caption: '<i>Fastly</i> n’existe pas, et on ne dit jamais <i>goodly</i> pour « bien ». Attention : <i>hardly</i> et <i>lately</i> existent, mais ils ont un <b>autre sens</b> (voir ci-dessous).' },
    { type: 'box', style: 'warn', title: 'Faux amis : hardly et lately', html: '• <b>hardly</b> = <b>à peine, presque pas</b> (et non « durement ») :<br><i>She works <b>hard</b>.</i> = Elle travaille dur.<br><i>She <b>hardly</b> works.</i> = Elle ne travaille presque pas !<br>• <b>lately</b> = <b>récemment, ces derniers temps</b> (et non « tard ») :<br><i>He arrived <b>late</b>.</i> = Il est arrivé en retard.<br><i>Have you seen him <b>lately</b>?</i> = Tu l’as vu récemment ?' },
    { type: 'examples', items: [
      { en: 'I can hardly hear you. Can you speak louder?', fr: 'Je t’entends à peine. Tu peux parler plus fort ?' },
      { en: 'We hardly slept last night.', fr: 'Nous avons à peine dormi cette nuit.' },
      { en: 'Have you talked to Noor lately?', fr: 'As-tu parlé à Noor récemment ?' },
      { en: 'Prices have gone up a lot lately.', fr: 'Les prix ont beaucoup augmenté ces derniers temps.' },
      { en: 'The meeting finished late.', fr: 'La réunion a fini tard.' }
    ] },
    { type: 'box', style: 'tip', title: 'Well, c’est aussi « en bonne santé »', html: 'Petite exception : <b>well</b> est aussi un <b>adjectif</b> qui veut dire « en bonne santé ». On peut donc dire <i>I don’t feel <b>well</b>.</i> (Je ne me sens pas bien, je suis un peu malade.) À la question <i>How are you?</i>, <i>I’m <b>good</b>, thanks</i> et <i>I’m <b>well</b>, thanks</i> sont tous les deux corrects.' },

    { type: 'h', text: 'Adjectif ou adverbe ? La question n°1 du TOEIC' },
    { type: 'p', html: 'Pour choisir, regarde <b>ce que le mot décrit</b> :<br>• <b>l’adjectif</b> décrit un <b>nom</b>. Il se place devant le nom (<i>an <b>efficient</b> team</i>) ou après les verbes d’état <b>be</b> (être), <b>seem</b> (sembler), <b>look</b> (avoir l’air), <b>feel</b> (se sentir), <b>become</b> (devenir), <b>remain</b> (rester) : <i>The team is <b>efficient</b>.</i><br>• <b>l’adverbe</b> décrit <b>tout le reste</b> : un verbe (<i>work <b>efficiently</b></i>), un adjectif (<i><b>extremely</b> efficient</i>), un participe passé (<i><b>carefully</b> prepared</i>), un autre adverbe (<i><b>very</b> quickly</i>) ou toute la phrase (<i><b>Unfortunately</b>, …</i>).' },
    { type: 'table', head: ['Le mot décrit…', 'Nature', 'Exemple', 'Français'], rows: [
      ['un nom', 'adjectif', 'an <b>efficient</b> team', 'une équipe efficace'],
      ['le sujet, après <i>be, seem, look, feel, become</i>', 'adjectif', 'The team <b>is efficient</b>.', 'L’équipe est efficace.'],
      ['un verbe (comment ?)', 'adverbe', 'The team <b>worked efficiently</b>.', 'L’équipe a travaillé efficacement.'],
      ['un adjectif', 'adverbe', 'an <b>extremely</b> efficient team', 'une équipe extrêmement efficace'],
      ['un participe passé', 'adverbe', 'a <b>carefully</b> prepared report', 'un rapport soigneusement préparé'],
      ['toute la phrase', 'adverbe', '<b>Unfortunately</b>, the flight was canceled.', 'Malheureusement, le vol a été annulé.']
    ] },
    { type: 'examples', items: [
      { en: 'Be careful! The floor is wet.', fr: 'Fais attention ! Le sol est mouillé.', note: '<i>be</i> + adjectif (<i>careful</i>).' },
      { en: 'The new manager seems very nice.', fr: 'Le nouveau responsable a l’air très sympathique.', note: '<i>seem</i> + adjectif (<i>nice</i>).' },
      { en: 'Our products are reasonably priced.', fr: 'Nos produits sont vendus à un prix raisonnable.', note: '<i>reasonably</i> décrit le participe <i>priced</i> → adverbe.' },
      { en: 'Surprisingly, sales went up in January.', fr: 'Étonnamment, les ventes ont augmenté en janvier.', note: '<i>Surprisingly</i> porte sur toute la phrase → adverbe.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : look, feel, seem + adjectif', html: 'Après <b>look</b> (avoir l’air), <b>feel</b> (se sentir), <b>seem</b> (sembler), <b>sound</b> (avoir l’air, à l’oral) et <b>become</b>, on décrit le <b>sujet</b>, pas une action : on met un <b>adjectif</b>, jamais un adverbe.<br><span class="ko">You look tiredly.</span> → <span class="ok">You look tired.</span> (Tu as l’air fatiguée.)<br><span class="ko">That sounds greatly.</span> → <span class="ok">That sounds great.</span> (Ça a l’air super.)<br>Mais <b>look at</b> (regarder) est une vraie action : <i>She looked <b>carefully</b> at the document.</i> (Elle a regardé le document attentivement.)' },

    { type: 'h', text: 'La place de l’adverbe' },
    { type: 'p', html: 'La règle d’or : l’adverbe ne se place <b>jamais entre le verbe et son complément</b> (la chose ou la personne qui suit directement le verbe). En français, on dit « Elle parle <b>bien</b> anglais » ; en anglais, on met l’adverbe <b>après</b> le complément : <i>She speaks English <b>well</b>.</i> Les adverbes en <b>-ly</b> peuvent aussi se placer <b>juste avant le verbe</b> : <i>She <b>carefully</b> read the contract.</i>' },
    { type: 'box', style: 'warn', title: 'Piège : l’adverbe coincé au milieu', html: '<span class="ko">She speaks well English.</span> → <span class="ok">She speaks English well.</span><br><span class="ko">I like very much this job.</span> → <span class="ok">I like this job very much.</span><br><span class="ko">He read carefully the contract.</span> → <span class="ok">He read the contract carefully.</span> (ou <i>He carefully read the contract.</i>)' },
    { type: 'examples', items: [
      { en: 'She speaks Spanish and Japanese very well.', fr: 'Elle parle très bien espagnol et japonais.' },
      { en: 'Please check the figures carefully.', fr: 'Merci de vérifier les chiffres attentivement.' },
      { en: 'I like my new job very much.', fr: 'J’aime beaucoup mon nouveau travail.' },
      { en: 'He quickly answered all our questions.', fr: 'Il a rapidement répondu à toutes nos questions.', note: 'Un adverbe en <b>-ly</b> peut aussi se placer juste <b>avant</b> le verbe.' }
    ] },

    { type: 'h', text: 'Les adjectifs en -ed et en -ing' },
    { type: 'p', html: 'Beaucoup d’adjectifs de sentiment existent en deux versions :<br>• <b>-ed</b> = ce que la personne <b>ressent</b> : <i>I’m <b>bored</b>.</i> (Je m’ennuie.)<br>• <b>-ing</b> = ce qui <b>provoque</b> le sentiment (une chose, une situation ou une personne) : <i>The meeting is <b>boring</b>.</i> (La réunion est ennuyeuse.)<br>Astuce : je suis <i>bor<b>ed</b></i> parce que la réunion est <i>bor<b>ing</b></i>.' },
    { type: 'table', head: ['-ed : on ressent', '-ing : ça provoque', 'Français'], rows: [
      ['interested', 'interesting', 'intéressé(e) / intéressant'],
      ['bored', 'boring', 'qui s’ennuie / ennuyeux'],
      ['tired', 'tiring', 'fatigué(e) / fatigant'],
      ['satisfied', 'satisfying', 'satisfait(e) / satisfaisant'],
      ['confused', 'confusing', 'perdu(e), qui ne comprend pas / pas clair, déroutant'],
      ['surprised', 'surprising', 'surpris(e) / surprenant'],
      ['disappointed', 'disappointing', 'déçu(e) / décevant'],
      ['excited', 'exciting', 'enthousiaste, impatient(e) / passionnant'],
      ['worried', 'worrying', 'inquiet, inquiète / inquiétant'],
      ['annoyed', 'annoying', 'agacé(e) / agaçant']
    ], caption: 'Les adjectifs en <b>-ed</b> sont souvent suivis d’une préposition : <i>interested <b>in</b>, satisfied <b>with</b>, worried <b>about</b>, excited <b>about</b>, disappointed <b>with</b></i>.' },
    { type: 'box', style: 'warn', title: 'Piège : « I’m boring »', html: 'Attention au contresens ! <span class="ko">I’m boring.</span> veut dire « Je suis ennuyeuse » (les autres s’ennuient avec moi). Pour dire « Je m’ennuie », c’est <span class="ok">I’m bored.</span><br>De même : <i>I’m interesting</i> = je suis intéressante ; <i>I’m interested</i> = ça m’intéresse. Et <i>The customer was confusing</i> = le client n’était pas clair ; <i>The customer was confused</i> = le client ne comprenait pas.' },
    { type: 'examples', items: [
      { en: 'The presentation was really interesting.', fr: 'La présentation était vraiment intéressante.' },
      { en: "I'm interested in the marketing position.", fr: 'Le poste en marketing m’intéresse.' },
      { en: 'Our customers are very satisfied with the new service.', fr: 'Nos clients sont très satisfaits du nouveau service.' },
      { en: "These instructions are confusing. I'm completely confused!", fr: 'Ces instructions ne sont pas claires. Je suis complètement perdue !' },
      { en: 'The sales results were disappointing.', fr: 'Les résultats des ventes étaient décevants.' }
    ] },

    { type: 'h', text: 'Les adverbes de degré : very, extremely, quite…' },
    { type: 'table', head: ['Adverbe', 'Sens', 'Exemple', 'Français'], rows: [
      ['<b>extremely</b>', 'extrêmement', 'extremely busy', 'extrêmement occupé(e)'],
      ['<b>very</b> / <b>really</b>', 'très, vraiment', 'very useful, really nice', 'très utile, vraiment sympa'],
      ['<b>highly</b>', 'très, vivement (avec certains mots)', 'highly recommended, highly qualified', 'vivement recommandé, très qualifié'],
      ['<b>quite</b>', 'assez, plutôt', 'quite expensive', 'assez cher'],
      ['<b>fairly</b>', 'assez, relativement', 'fairly easy', 'relativement facile'],
      ['<b>rather</b>', 'plutôt (souvent pour une critique)', 'rather slow', 'plutôt lent'],
      ['<b>slightly</b>', 'légèrement', 'slightly higher', 'légèrement plus élevé']
    ], caption: 'Ces adverbes se placent <b>devant</b> l’adjectif ou l’adverbe qu’ils modifient : <i>very <b>well</b>, extremely <b>quickly</b>, slightly <b>higher</b></i>. Nuance : en anglais américain, <b>quite</b> est souvent plus fort, proche de <i>very</i> (<i>quite expensive</i> = vraiment cher) ; <b>fairly</b> reste toujours modéré.' },
    { type: 'box', style: 'tip', title: 'Highly et very much', html: '• <b>Highly</b> (très, vivement) n’a rien à voir avec la hauteur : il s’emploie avec des mots comme <i>recommended, qualified, successful, competitive</i>. Pour la hauteur, on dit <b>high</b> : <i>The plane flew <b>high</b>.</i> (L’avion volait haut.)<br>• Devant un adjectif, on met <b>very</b>, pas <i>very much</i> : <span class="ko">very much interesting</span> → <span class="ok">very interesting</span>. <i>Very much</i> se place après le verbe et son complément : <i>I like it <b>very much</b>.</i>' },
    { type: 'dialog', title: 'Après la formation', lines: [
      { speaker: 'W', en: 'So, how was the training session this morning?', fr: 'Alors, c’était comment, la formation ce matin ?' },
      { speaker: 'M', en: 'Honestly? The first part was quite boring. The trainer spoke really fast.', fr: 'Franchement ? La première partie était assez ennuyeuse. Le formateur parlait très vite.' },
      { speaker: 'W', en: 'Oh no. Were you confused?', fr: 'Oh non. Tu étais perdu ?' },
      { speaker: 'M', en: 'A little. But the second part was really interesting. He explained the new software very clearly.', fr: 'Un peu. Mais la deuxième partie était vraiment intéressante. Il a expliqué le nouveau logiciel très clairement.' },
      { speaker: 'W', en: "Good. I'm doing the training next week, and I'm a bit worried.", fr: 'Tant mieux. Je fais la formation la semaine prochaine, et je suis un peu inquiète.' },
      { speaker: 'M', en: "Don't worry. It's fairly easy, and the trainer is extremely friendly.", fr: 'Ne t’inquiète pas. C’est relativement facile, et le formateur est extrêmement sympathique.' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 5</b>, plusieurs questions de chaque test portent sur la <b>nature du mot</b>, et le choix adjectif / adverbe est le plus fréquent. Méthode : regarde les mots <b>autour du trou</b>, pas besoin de tout traduire.<br>• devant un nom → adjectif : <i>an ------- solution</i> → <b>effective</b><br>• après <i>be, seem, become, remain</i> → adjectif : <i>The market has become very -------.</i> → <b>competitive</b><br>• après un verbe et son complément, quand la phrase est déjà complète → adverbe : <i>The team completed the project -------.</i> → <b>successfully</b><br>• entre l’auxiliaire et le participe → adverbe : <i>Sales have ------- improved.</i> → <b>significantly</b><br>• devant un adjectif ou un participe → adverbe : <i>------- recommended</i> → <b>highly</b><br>Les paires <b>-ed / -ing</b> tombent aussi souvent : <i>satisfied customers</i> (des clients satisfaits), <i>an exciting opportunity</i> (une opportunité passionnante). La leçon « La formation des mots : nom, verbe, adjectif, adverbe » t’aidera à reconnaître toutes ces terminaisons.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• Adjectif = décrit un <b>nom</b> (devant le nom ou après <i>be, seem, look, feel, become</i>). Adverbe = décrit un <b>verbe</b>, un adjectif, un autre adverbe ou la phrase.<br>• Formation : <b>-ly</b> (<i>quickly</i>) ; <b>-y → -ily</b> (<i>easily</i>) ; <b>-le → -ly</b> (<i>simply</i>) ; <b>-ic → -ically</b> (<i>automatically</i>).<br>• Irréguliers : <b>good → well</b> ; <i>fast, hard, late, early</i> ne changent pas.<br>• Faux amis : <b>hardly</b> = à peine ; <b>lately</b> = récemment.<br>• Jamais d’adverbe entre le verbe et son complément : <i>She speaks English <b>well</b>.</i><br>• <b>-ed</b> = ce qu’on ressent (<i>I’m bored</i>) ; <b>-ing</b> = ce qui le provoque (<i>It’s boring</i>).<br>• Degré : <i>slightly → fairly → very → extremely</i> (<i>quite</i> = assez, mais souvent « très » en américain) ; <i>highly recommended</i>.' }
  ],
  exercises: [
    { type: 'mcq', q: 'Please drive ___. The roads are icy.', options: ['careful', 'carefully', 'care'], answer: 1, explain: 'Le mot décrit la manière de conduire (<i>drive</i>, un verbe) → adverbe <b>carefully</b>. <i>Careful</i> est un adjectif : <i>Be careful!</i>' },
    { type: 'gap', q: 'The new software is very simple. You can install it ___ (easy).', answers: ['easily'], explain: 'Le mot décrit le verbe <i>install</i> → adverbe. <i>Easy</i> se termine par <b>-y</b> → <b>-ily</b> : <b>easily</b>.' },
    { type: 'mcq', q: 'Ms. Moreau speaks Japanese very ___.', options: ['good', 'well', 'goodly'], answer: 1, explain: '<i>Speaks</i> est un verbe → il faut un adverbe. L’adverbe de <i>good</i> est irrégulier : <b>well</b>. <i>Goodly</i> ne veut pas dire « bien ».' },
    { type: 'gap', q: 'Our team works very ___ to meet every deadline. (« dur »)', answers: ['hard'], explain: '« Travailler dur » = <b>work hard</b> : <i>hard</i> a la même forme comme adjectif et comme adverbe. Surtout pas <i>hardly</i>, qui veut dire « à peine » !' },
    { type: 'mcq', q: 'Traduis : « J’ai à peine dormi cette nuit. »', options: ['I hardly slept last night.', 'I slept hard last night.', 'I slept lately last night.'], answer: 0, explain: '« À peine » = <b>hardly</b>. C’est un faux ami : <i>hard</i> = dur, <i>hardly</i> = à peine, presque pas. <i>Lately</i> = récemment.' },
    { type: 'mcq', q: "Have you heard from Mr. Osei ___? He hasn't answered my emails for two weeks.", options: ['late', 'lately', 'lastly', 'later'], answer: 1, explain: '« Récemment, ces derniers temps » = <b>lately</b>, souvent avec le present perfect. <i>Late</i> = en retard, tard ; <i>later</i> = plus tard ; <i>lastly</i> = pour finir.' },
    { type: 'mcq', q: 'The presentation was long and slow. Honestly, I was ___.', options: ['bored', 'boring'], answer: 0, explain: 'On parle de ce que <b>je ressens</b> → <b>-ed</b> : <i>I was bored</i> (je m’ennuyais). <i>I was boring</i> voudrait dire « j’étais ennuyeuse » !' },
    { type: 'gap', q: 'The talk was very ___ (interest). I learned a lot.', answers: ['interesting'], explain: 'C’est l’exposé qui <b>provoque</b> l’intérêt → <b>-ing</b> : <i>interesting</i>. <i>Interested</i> décrit ce que ressent une personne.' },
    { type: 'gap', q: "I don't understand these instructions. They're really ___ (confuse).", answers: ['confusing'], explain: 'Les instructions <b>provoquent</b> la confusion → <b>confusing</b> (pas claires). Moi, je suis <i>confused</i> (perdue).' },
    { type: 'order', answer: 'She speaks English very well.', fr: 'Elle parle très bien anglais.', explain: 'L’adverbe (<i>very well</i>) se place <b>après</b> le complément <i>English</i>, jamais entre le verbe et son complément.' },
    { type: 'order', answer: 'We are extremely satisfied with the results.', fr: 'Nous sommes extrêmement satisfaits des résultats.', explain: '<b>Extremely</b> (adverbe de degré) se place devant l’adjectif <i>satisfied</i>. <i>Satisfied</i> en <b>-ed</b> : c’est ce que nous ressentons. Puis <i>with</i> + nom.' },
    { type: 'listen', accent: 'en-AU', say: 'The workshop was really interesting, but the room was so hot that everyone felt tired by the afternoon.', q: 'Quel a été le problème pendant l’atelier ?', options: ['Le contenu était ennuyeux.', 'Il faisait trop chaud et tout le monde était fatigué l’après-midi.', 'L’animateur parlait trop vite.', 'L’atelier a commencé en retard.'], answer: 1, explain: '<i>The workshop was really <b>interesting</b></i> : le contenu était intéressant. Le problème : <i>the room was so <b>hot</b></i> (il faisait très chaud dans la salle) et <i>everyone felt <b>tired</b></i> (tout le monde se sentait fatigué).' },
    { type: 'mcq', q: 'The accounting team worked ------- to finish the audit before the deadline. <small>(style TOEIC)</small>', options: ['efficient', 'efficiently', 'efficiency', 'efficiencies'], answer: 1, explain: 'Le trou suit le verbe <i>worked</i> et dit <b>comment</b> l’équipe a travaillé → adverbe <b>efficiently</b>. <i>Efficient</i> est un adjectif, <i>efficiency</i> un nom.' },
    { type: 'mcq', q: 'The market for electric bicycles has become very ------- in recent years. <small>(style TOEIC)</small>', options: ['competitive', 'competitively', 'compete', 'competition'], answer: 0, explain: 'Après <b>become</b> (devenir), on décrit le sujet → adjectif : <i>very</i> + <b>competitive</b>. <i>Competition</i> est un nom : <i>very competition</i> est impossible.' },
    { type: 'mcq', q: 'Most customers were ------- with the speed of our delivery service. <small>(style TOEIC)</small>', options: ['satisfy', 'satisfying', 'satisfied', 'satisfaction'], answer: 2, explain: 'Les clients <b>ressentent</b> la satisfaction → <b>-ed</b> : <i>satisfied with</i>. <i>Satisfying</i> décrirait ce qui provoque la satisfaction (<i>a satisfying result</i>).' },
    { type: 'mcq', q: 'The Lakeside Hotel is ------- recommended by business travelers for its quiet rooms. <small>(style TOEIC)</small>', options: ['high', 'highly', 'higher', 'height'], answer: 1, explain: 'Devant le participe <i>recommended</i>, il faut un adverbe de degré → <b>highly</b> (vivement recommandé). <i>High</i> concerne la hauteur et <i>height</i> est un nom.' }
  ]
});
