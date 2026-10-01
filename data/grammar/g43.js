LE.register({
  id: 'g43',
  kind: 'grammar',
  title: 'Question tags, so / neither et réponses courtes',
  subtitle: 'Les petits mots qui rendent ton anglais naturel : « n’est-ce pas ? », « moi aussi », « je pense que oui »',
  level: 'B1',
  minutes: 45,
  goals: [
    'Former un <b>question tag</b> avec le bon auxiliaire : <i>You work here, <b>don’t you</b>?</i>',
    'Répondre avec une <b>réponse courte</b> : <i>Yes, I have. / No, she didn’t.</i>',
    'Dire « moi aussi » et « moi non plus » : <i>So do I. / Neither can I.</i>',
    'Utiliser <i>I think so, I hope not, I’m afraid not</i> et réussir ces questions en Partie 2 du TOEIC'
  ],
  blocks: [
    { type: 'h', text: 'Les question tags : l’équivalent de « n’est-ce pas ? »' },
    { type: 'p', html: 'En français, on ajoute « n’est-ce pas ? », « hein ? » ou « non ? » à la fin d’une phrase pour demander une confirmation. Ces petits mots ne changent jamais. En anglais, cette mini-question, le <b>question tag</b>, se <b>construit</b> à partir de la phrase : on reprend son <b>auxiliaire</b> (<i>be, have, do, can, will…</i>) et son sujet sous forme de <b>pronom</b>. Les anglophones l’utilisent sans arrêt, pour vérifier une information ou simplement pour faire la conversation.' },
    { type: 'examples', items: [
      { en: "It's a nice day, isn't it?", fr: 'Il fait beau, n’est-ce pas ?' },
      { en: "You work in finance, don't you?", fr: 'Tu travailles dans la finance, non ?' },
      { en: "She hasn't called yet, has she?", fr: 'Elle n’a pas encore appelé, n’est-ce pas ?' },
      { en: "They can come tomorrow, can't they?", fr: 'Ils peuvent venir demain, non ?' }
    ] },

    { type: 'h', text: 'Les règles de formation' },
    { type: 'list', ordered: true, items: [
      'Reprends l’<b>auxiliaire</b> de la phrase (<i>be, have, can, will, should…</i>) : <i>You <b>can</b> drive, <b>can’t</b> you?</i>',
      'Phrase <b>affirmative</b> → tag <b>négatif</b> (contracté) ; phrase <b>négative</b> → tag <b>affirmatif</b> : <i>He <b>is</b> ready, <b>isn’t</b> he?</i> / <i>He <b>isn’t</b> ready, <b>is</b> he?</i>',
      'Pas d’auxiliaire (présent simple ou prétérit) → <b>do / does / did</b>, comme pour poser une question : <i>She <b>works</b> here, <b>doesn’t</b> she?</i>',
      'Le sujet du tag est toujours un <b>pronom</b> (ou <i>there</i>, voir plus bas) : <i><b>Mr. Ito</b> is here, isn’t <b>he</b>?</i> / <i><b>The report</b> is ready, isn’t <b>it</b>?</i>'
    ] },
    { type: 'table', head: ['Phrase', 'Tag', 'Pourquoi'], rows: [
      ['You’re new here,', '<b>aren’t you?</b>', 'be (are) → aren’t'],
      ['He isn’t ready,', '<b>is he?</b>', 'phrase négative → tag affirmatif'],
      ['They’ve finished,', '<b>haven’t they?</b>', 'present perfect → have'],
      ['She can drive,', '<b>can’t she?</b>', 'can → can’t'],
      ['You’ll call me,', '<b>won’t you?</b>', 'will → won’t'],
      ['We should leave now,', '<b>shouldn’t we?</b>', 'should → shouldn’t'],
      ['You work here,', '<b>don’t you?</b>', 'présent simple → do'],
      ['Mr. Ito lives in Osaka,', '<b>doesn’t he?</b>', '3ᵉ personne du singulier → does'],
      ['The meeting started late,', '<b>didn’t it?</b>', 'prétérit → did'],
      ['You didn’t see the e-mail,', '<b>did you?</b>', 'didn’t → did']
    ] },
    { type: 'box', style: 'warn', title: 'Piège : pas de « isn’t it? » passe-partout', html: 'Le tag n’est pas une formule figée comme « n’est-ce pas » : il <b>s’accorde</b> avec la phrase.<br><span class="ko">You work here, isn’t it?</span> → <span class="ok">You work here, <b>don’t you</b>?</span><br><span class="ko">She called, isn’t it?</span> → <span class="ok">She called, <b>didn’t she</b>?</span><br>Et une seule négation : si la phrase est négative, le tag est affirmatif. <span class="ko">He didn’t come, didn’t he?</span> → <span class="ok">He didn’t come, <b>did</b> he?</span>' },

    { type: 'h', text: 'Les cas particuliers' },
    { type: 'table', head: ['Cas', 'Exemple', 'À savoir'], rows: [
      ['<b>I am</b>', 'I’m late, <b>aren’t I</b>?', 'On dit <i>aren’t I</i> (et non « amn’t I »).'],
      ['<b>I’m not</b>', 'I’m not late, <b>am I</b>?', 'Règle normale.'],
      ['<b>Let’s…</b>', 'Let’s start, <b>shall we</b>?', 'Proposition → <i>shall we</i> (= d’accord ?).'],
      ['<b>Impératif</b>', 'Close the door, <b>will you</b>? / <b>could you</b>?', 'Demande polie. Aussi : <i>Don’t be late, <b>will you</b>?</i>'],
      ['<b>There is / there are</b>', 'There’s a problem, <b>isn’t there</b>?', 'On reprend <b>there</b>.'],
      ['<b>everyone, someone, no one…</b>', 'Everyone is here, <b>aren’t they</b>?', 'Pronom <b>they</b>, donc tag au pluriel.'],
      ['<b>everything, nothing, this, that</b>', 'Everything is ready, <b>isn’t it</b>?', 'Pronom <b>it</b>.'],
      ['<b>never, nothing, no one, hardly</b>', 'She never complains, <b>does she</b>?', 'Ces mots rendent la phrase <b>négative</b> → tag affirmatif.']
    ] },
    { type: 'examples', items: [
      { en: "I'm on the list, aren't I?", fr: 'Je suis sur la liste, n’est-ce pas ?' },
      { en: "Let's take a short break, shall we?", fr: 'Faisons une petite pause, d’accord ?' },
      { en: "There isn't any coffee left, is there?", fr: 'Il ne reste plus de café, c’est ça ?' },
      { en: 'Nobody has checked the figures, have they?', fr: 'Personne n’a vérifié les chiffres, n’est-ce pas ?', note: '<i>Nobody</i> = négatif → tag affirmatif, avec <i>they</i>.' },
      { en: 'Pass me the stapler, could you?', fr: 'Passe-moi l’agrafeuse, tu veux bien ?' }
    ] },

    { type: 'h', text: 'L’intonation : vraie question ou simple confirmation ?' },
    { type: 'p', html: 'La mélodie du tag change son sens :<br>• <b>Intonation montante ↗</b> : tu n’es pas sûre, c’est une <b>vraie question</b>. <i>The meeting is at ten, isn’t it? ↗</i> (Je crois que c’est à dix heures, mais je vérifie.)<br>• <b>Intonation descendante ↘</b> : tu es sûre, tu attends simplement que l’autre soit <b>d’accord</b>. <i>It’s a great hotel, isn’t it? ↘</i> (C’est un super hôtel, tu ne trouves pas ?)<br>Au TOEIC, tu n’as pas besoin de produire cette intonation, mais elle t’aide à comprendre ce que la personne attend.' },

    { type: 'h', text: 'Les réponses courtes' },
    { type: 'p', html: 'En anglais, répondre juste <i>Yes</i> ou <i>No</i> peut paraître un peu sec. On ajoute souvent une <b>réponse courte</b> : <b>Yes / No</b> + <b>pronom</b> + <b>auxiliaire</b> de la question. Dans une réponse courte affirmative, on ne contracte jamais : <i>Yes, I <b>am</b>.</i> (et pas <i>Yes, I’m.</i>)' },
    { type: 'table', head: ['Question', 'Oui', 'Non'], rows: [
      ['Are you ready?', 'Yes, I <b>am</b>.', 'No, I’<b>m not</b>.'],
      ['Does she work here?', 'Yes, she <b>does</b>.', 'No, she <b>doesn’t</b>.'],
      ['Have they arrived?', 'Yes, they <b>have</b>.', 'No, they <b>haven’t</b>.'],
      ['Did you call him?', 'Yes, I <b>did</b>.', 'No, I <b>didn’t</b>.'],
      ['Can we park here?', 'Yes, you <b>can</b>.', 'No, you <b>can’t</b>.'],
      ['Will it be ready on time?', 'Yes, it <b>will</b>.', 'No, it <b>won’t</b>.'],
      ['Is there a hotel near here?', 'Yes, there <b>is</b>.', 'No, there <b>isn’t</b>.']
    ] },
    { type: 'box', style: 'warn', title: 'Piège : répondre à une question négative', html: 'Face à une question <b>négative</b> (ou à une phrase négative suivie d’un tag), le français répond « Si ! ». L’anglais, lui, répond selon la <b>réalité</b> : <b>Yes</b> + phrase affirmative, <b>No</b> + phrase négative.<br><i>You didn’t finish the report, did you?</i> (Tu n’as pas fini le rapport, n’est-ce pas ?)<br>Tu l’as fini → <span class="ok">Yes, I did.</span> (= Si, je l’ai fini.)<br>Tu ne l’as pas fini → <span class="ok">No, I didn’t.</span><br>Jamais de mélange : <span class="ko">No, I did.</span> / <span class="ko">Yes, I didn’t.</span>' },

    { type: 'h', text: 'So et neither : « moi aussi », « moi non plus »' },
    { type: 'p', html: 'Pour dire « moi aussi » (ou « lui aussi, nous aussi… »), on utilise <b>So</b> + <b>auxiliaire</b> + <b>sujet</b>, avec inversion. Pour « moi non plus », c’est <b>Neither</b> (ou <b>Nor</b>) + <b>auxiliaire</b> + <b>sujet</b>. L’auxiliaire doit correspondre à celui de la première phrase : même verbe, même temps. Sans auxiliaire dans la phrase de départ, on utilise <b>do / does / did</b>.' },
    { type: 'table', head: ['Phrase', 'Moi aussi / Moi non plus', 'Auxiliaire repris'], rows: [
      ['I’m tired.', '<b>So am I.</b>', 'am'],
      ['I work in sales.', '<b>So do I.</b>', 'présent simple → do'],
      ['Karen went to the trade fair.', '<b>So did I.</b> / <b>So did Tom.</b>', 'prétérit → did'],
      ['I’ve finished.', '<b>So have I.</b>', 'have'],
      ['I can’t come on Friday.', '<b>Neither can I.</b> / <b>Nor can I.</b>', 'can'],
      ['I don’t like the new logo.', '<b>Neither do I.</b>', 'do'],
      ['The Paris office didn’t get the e-mail.', '<b>Neither did we.</b> / <b>Nor did we.</b>', 'did'],
      ['I won’t be at the meeting.', '<b>Neither will I.</b>', 'will']
    ] },
    { type: 'examples', items: [
      { en: "I'm starving. So am I. Let's order lunch.", fr: 'Je meurs de faim. Moi aussi. Commandons à déjeuner.' },
      { en: "I don't understand this chart. Neither do I.", fr: 'Je ne comprends pas ce graphique. Moi non plus.' },
      { en: 'Anna has worked here for ten years, and so has Luis.', fr: 'Anna travaille ici depuis dix ans, et Luis aussi.' },
      { en: "The first supplier didn't reply, and neither did the second one.", fr: 'Le premier fournisseur n’a pas répondu, et le deuxième non plus.' }
    ] },
    { type: 'box', style: 'tip', title: 'À l’oral : Me too / Me neither', html: 'Dans une conversation détendue, on entend aussi <b>Me too</b> (moi aussi) et <b>Me neither</b> (moi non plus). Pratique : pas besoin de choisir l’auxiliaire !<br>A : <i>I love this place.</i> B : <i>Me too!</i><br>A : <i>I can’t hear anything.</i> B : <i>Me neither.</i><br>Autre possibilité : <i>I don’t either</i>, <i>I can’t either</i> (moi non plus). Pour <b>ne pas</b> être d’accord, on garde l’auxiliaire, sans <i>so</i> ni <i>neither</i> : <i>I love Mondays. <b>I don’t!</b></i> / <i>I’m not tired. <b>I am!</b></i>' },
    { type: 'box', style: 'warn', title: 'Pièges de so / neither', html: '• Pour dire « moi aussi / moi non plus », l’<b>inversion</b> est obligatoire : <span class="ko">So I am.</span> / <span class="ko">Neither I can.</span> → <span class="ok">So am I.</span> / <span class="ok">Neither can I.</span><br>• Le bon <b>auxiliaire</b>, au bon temps : <span class="ko">I went to the fair. So do I.</span> → <span class="ok">So <b>did</b> I.</span><br>• Après une phrase négative, pas de <i>too</i> : <span class="ko">I don’t like it. Me too.</span> → <span class="ok">Me neither.</span> / <span class="ok">Neither do I.</span><br>• <b>Neither</b> contient déjà la négation : <span class="ko">Neither can’t I.</span> → <span class="ok">Neither can I.</span>' },

    { type: 'h', text: 'I think so, I hope not…' },
    { type: 'p', html: 'Pour répondre sans répéter toute la phrase, l’anglais utilise <b>so</b> (pour « oui ») et <b>not</b> (pour « non ») après certains verbes. <b>So</b> remplace toute la proposition : <i>Is the train on time? I think <b>so</b>.</i> (= Je pense que oui.)' },
    { type: 'table', head: ['Oui', 'Non', 'Français'], rows: [
      ['I think so.', 'I don’t think so.', 'Je pense que oui. / Je ne pense pas.'],
      ['I hope so.', 'I hope not.', 'J’espère (que oui). / J’espère que non.'],
      ['I’m afraid so.', 'I’m afraid not.', 'J’en ai bien peur. / Je crains que non.'],
      ['I guess so.', 'I guess not.', 'Je suppose que oui. / Je suppose que non.'],
      ['I believe so.', 'I don’t believe so.', 'Je crois que oui. / Je ne crois pas.']
    ], caption: 'On dit <b>I don’t think so</b> (<i>I think not</i> est très formel) mais <b>I hope not</b> (jamais <span class="ko">I don’t hope so</span>). <i>I’m afraid</i> sert à annoncer poliment une mauvaise nouvelle.' },
    { type: 'dialog', title: 'Juste avant la réunion', lines: [
      { speaker: 'W', en: "You've read the agenda, haven't you?", fr: 'Tu as lu l’ordre du jour, n’est-ce pas ?' },
      { speaker: 'M', en: "Yes, I have. We're discussing the budget first, aren't we?", fr: 'Oui. On parle d’abord du budget, c’est ça ?' },
      { speaker: 'W', en: "That's right. Mr. Sato isn't coming, is he?", fr: 'Exactement. M. Sato ne vient pas, c’est ça ?' },
      { speaker: 'M', en: "I'm afraid not. He's visiting a client all day.", fr: 'J’ai bien peur que non. Il est chez un client toute la journée.' },
      { speaker: 'W', en: "Oh well. I haven't finished my slides yet.", fr: 'Tant pis. Je n’ai pas encore fini mes diapositives.' },
      { speaker: 'M', en: "Neither have I! Let's work on them together, shall we?", fr: 'Moi non plus ! On y travaille ensemble, d’accord ?' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 2</b>, beaucoup de questions se terminent par un tag : <i>You’ve received the invoice, haven’t you?</i> Traite-les comme une question oui / non ordinaire (<i>Have you received the invoice?</i>). La bonne réponse n’est pas toujours un simple <i>Yes, I have</i> : <i>Yes, it came yesterday.</i> ou <i>Not yet, I’ll check with accounting.</i> sont d’excellentes réponses. Méfie-toi des pièges : la réponse qui reprend un mot proche de la question (<i>invoice</i> → <i>voice</i>) ou qui répond à une autre question (<i>At three o’clock.</i>).<br>En <b>Partie 5</b>, on peut te demander le tag (<i>…, ------- he?</i>) ou l’auxiliaire après <i>so / neither</i> : <i>Sales rose last year, and so ------- profits.</i> → <b>did</b>.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• Question tag = <b>auxiliaire de la phrase + pronom</b> ; affirmatif → tag négatif, négatif → tag affirmatif : <i>You’re ready, aren’t you? / She didn’t call, did she?</i><br>• Sans auxiliaire → <b>do / does / did</b>. Cas spéciaux : <i>I am → aren’t I</i>, <i>Let’s → shall we</i>, impératif → <i>will you</i>, <i>there is → isn’t there</i>, <i>everyone → they</i>.<br>• Réponse courte : <i>Yes, I have. / No, she didn’t.</i> On répond selon la réalité : <i>You didn’t…? Yes, I did!</i> (= Si !)<br>• Moi aussi : <b>So + auxiliaire + sujet</b> (<i>So do I</i>) ; moi non plus : <b>Neither / Nor + auxiliaire + sujet</b> (<i>Neither can I</i>).<br>• <i>I think so / I don’t think so, I hope so / I hope not, I’m afraid not</i>.' }
  ],
  exercises: [
    { type: 'mcq', q: "You're from Lyon, ___?", options: ["aren't you", "isn't it", "don't you"], answer: 0, explain: 'La phrase contient <b>are</b> (<i>you’re = you are</i>) et elle est affirmative → tag négatif avec le même auxiliaire : <b>aren’t you</b>.' },
    { type: 'gap', q: 'Ms. Novak works in accounting, ___?', answers: ["doesn't she", 'does she not'], explain: 'Présent simple sans auxiliaire, 3ᵉ personne (<i>works</i>) → <b>does</b> ; phrase affirmative → tag négatif : <b>doesn’t she</b>.' },
    { type: 'gap', q: "They haven't arrived yet, ___?", answers: ['have they'], explain: 'Auxiliaire <b>have</b> ; la phrase est négative (<i>haven’t</i>) → tag affirmatif : <b>have they</b>.' },
    { type: 'mcq', q: "I'm a bit late, ___?", options: ["aren't I", "isn't I", "don't I"], answer: 0, explain: 'Cas particulier : le tag de <b>I am</b> est <b>aren’t I</b>.' },
    { type: 'gap', q: "There's a meeting at three, ___?", answers: ["isn't there", 'is there not'], explain: 'Avec <b>there is</b>, on reprend <b>there</b> dans le tag : <b>isn’t there</b>.' },
    { type: 'mcq', q: 'Nobody called while I was out, ___?', options: ['did they', "didn't they", "didn't he"], answer: 0, explain: '<b>Nobody</b> rend la phrase négative → tag <b>affirmatif</b>. Pour <i>nobody, everyone, someone…</i>, le pronom du tag est <b>they</b> : <b>did they</b>.' },
    { type: 'order', answer: "Let's take a short break, shall we?", fr: 'Faisons une petite pause, d’accord ?', explain: 'Après une proposition avec <b>Let’s</b>, le tag est toujours <b>shall we</b>.' },
    { type: 'mcq', q: "A: You didn't finish the report, did you? <small>(En réalité, tu l’as terminé.)</small> B: ___", options: ['Yes, I did.', 'No, I did.', "No, I didn't.", "Yes, I didn't."], answer: 0, explain: 'On répond selon la réalité : tu l’as fini → <b>Yes, I did.</b> (= Si, je l’ai fini.) <i>Yes</i> va avec une phrase affirmative, <i>No</i> avec une phrase négative.' },
    { type: 'mcq', q: "A: I'm exhausted. B: ___", options: ['So do I.', 'So am I.', 'Neither am I.', 'Me neither.'], answer: 1, explain: 'Phrase affirmative avec <b>am</b> → « moi aussi » = <b>So am I</b>. <i>So do I</i> reprendrait un verbe au présent simple ; <i>Neither</i> et <i>Me neither</i> répondent à une phrase négative.' },
    { type: 'gap', q: "A: We've already booked our flights. B: So ___ we.", answers: ['have'], explain: 'Present perfect (<i>we’ve = we have booked</i>) → <i>So <b>have</b> we</i> (nous aussi).' },
    { type: 'mcq', q: "A: Will the shipment arrive on time? B: ___ It's stuck in customs.", options: ['I hope so.', "I'm afraid not.", 'I think so.', "I don't hope."], answer: 1, explain: 'La marchandise est bloquée en douane : c’est une mauvaise nouvelle → <b>I’m afraid not</b> (je crains que non). <i>I don’t hope</i> n’existe pas.' },
    { type: 'order', answer: 'Neither did the rest of the team.', fr: 'Le reste de l’équipe non plus (ne l’a pas reçu).', explain: '« … non plus » : <b>Neither</b> + auxiliaire (<i>did</i>) + sujet (<i>the rest of the team</i>), avec inversion.' },
    { type: 'listen', accent: 'en-GB', say: "You'll be at the training session on Monday, won't you?", q: 'Quelle est la meilleure réponse ?', options: ["Yes, I've already signed up.", "It's a long train ride.", 'Yes, he trained very hard.'], answer: 0, explain: 'La question = <i>Will you be at the training session on Monday?</i> <b>Yes, I’ve already signed up</b> (oui, je suis déjà inscrite) y répond logiquement. Les deux autres sont des pièges sonores : <i>train</i> et <i>trained</i> ressemblent à <i>training</i>, mais ne répondent pas à la question (et <i>he</i> ne correspond pas à <i>you</i>).' },
    { type: 'listen', accent: 'en-AU', say: "You've received the invoice, haven't you?", q: 'Quelle est la meilleure réponse ?', options: ['Yes, it came yesterday.', "No, I haven't invoiced you.", 'I received a voice message.'], answer: 0, explain: 'La question = <i>Have you received the invoice?</i> <b>Yes, it came yesterday</b> répond logiquement. Les deux autres réponses sont des pièges sonores (<i>invoice → invoiced, voice</i>).' },
    { type: 'mcq', q: "Mr. Alvarez hasn't signed the contract yet, -------? <small>(style TOEIC)</small>", options: ['has he', "hasn't he", 'did he', 'does he'], answer: 0, explain: 'Auxiliaire <b>has</b> (present perfect) dans une phrase <b>négative</b> → tag affirmatif : <b>has he</b>.' },
    { type: 'mcq', q: 'The sales team exceeded its target this quarter, and so ------- the marketing department. <small>(style TOEIC)</small>', options: ['did', 'does', 'was', 'is'], answer: 0, explain: '<i>exceeded</i> est au prétérit, sans auxiliaire → on reprend <b>did</b> : <i>and so <b>did</b> the marketing department</i> (et le service marketing aussi).' }
  ]
});
