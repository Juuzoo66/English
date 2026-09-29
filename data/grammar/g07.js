LE.register({
  id: 'g07',
  kind: 'grammar',
  title: 'Have et have got',
  subtitle: 'Dire ce qu’on a, parler de sa famille… et « prendre » un café',
  level: 'A1',
  minutes: 35,
  goals: [
    'Conjuguer <b>have</b> au présent (<i>I have, she has</i>) et reconnaître <b>have got</b>',
    'Faire des phrases négatives et des questions : <i>I don’t have…, Do you have…?, Have you got…?</i>',
    'Utiliser <b>have</b> pour des actions : <i>have breakfast, have a meeting, have a good time</i>',
    'Éviter les pièges : <i>has</i> à la 3ᵉ personne et <i>I am 30</i> (pas <i>I have 30 years</i>)'
  ],
  blocks: [
    { type: 'h', text: 'À quoi sert « have » ?' },
    { type: 'p', html: 'Le verbe <b>have</b> veut dire <b>avoir</b>. On l’utilise pour parler de ce qu’on <b>possède</b>, de sa <b>famille</b>, de son <b>apparence</b> (les yeux, les cheveux) et des <b>petits problèmes de santé</b>. Il existe aussi une variante, <b>have got</b>, qui a le même sens : elle est très courante en anglais britannique (et les Américains l’emploient aussi à l’oral, dans la conversation familière). Au TOEIC, où l’anglais américain domine, tu rencontreras surtout <b>have</b>… mais tu entendras aussi <b>have got</b> avec les voix britanniques et australiennes.' },
    { type: 'examples', items: [
      { en: 'I have a car.', fr: 'J’ai une voiture.' },
      { en: 'She has two children.', fr: 'Elle a deux enfants.' },
      { en: 'We have a new office in Toronto.', fr: 'Nous avons un nouveau bureau à Toronto.' },
      { en: 'He has blue eyes.', fr: 'Il a les yeux bleus.', note: 'Pas de <i>the</i> : on dit <i>he has blue eyes</i>, pas <i>he has the blue eyes</i>.' },
      { en: 'I have a question.', fr: 'J’ai une question.' }
    ] },

    { type: 'h', text: 'La conjugaison au présent' },
    { type: 'p', html: 'Bonne nouvelle : <b>have</b> n’a qu’une seule forme spéciale, <b>has</b>, pour <b>he, she, it</b> (et pour tout ce qu’on peut remplacer par eux : <i>my boss, the hotel</i>…). Avec <b>have got</b>, c’est pareil : <i>have got</i> devient <b>has got</b>. Les formes contractées (<i>I’ve got, she’s got</i>) s’utilisent surtout avec <b>have got</b> ; avec <b>have</b> tout seul, on dit <i>I have a car</i>, pas <i>I’ve a car</i>.' },
    { type: 'table', head: ['Sujet', 'have (US, le plus courant)', 'have got (UK)', 'Français'], rows: [
      ['I', 'I <b>have</b>', 'I<b>’ve got</b>', 'j’ai'],
      ['you', 'you <b>have</b>', 'you<b>’ve got</b>', 'tu as / vous avez'],
      ['he / she / it', 'he <b>has</b>', 'he<b>’s got</b>', 'il / elle a'],
      ['we', 'we <b>have</b>', 'we<b>’ve got</b>', 'nous avons'],
      ['they', 'they <b>have</b>', 'they<b>’ve got</b>', 'ils / elles ont']
    ], caption: 'Retiens : <b>he / she / it → has</b>. Dans <i>she’s got</i>, <b>’s</b> = <b>has</b> (et pas <i>is</i>).' },
    { type: 'box', style: 'warn', title: 'Piège : has à la 3ᵉ personne', html: '<span class="ko">She have a new job.</span> → <span class="ok">She has a new job.</span><br><span class="ko">My manager have a big office.</span> → <span class="ok">My manager has a big office.</span><br>Avec <b>he, she, it</b> ou un nom au singulier, c’est toujours <b>has</b>.' },
    { type: 'examples', items: [
      { en: 'I have two brothers and a sister.', fr: 'J’ai deux frères et une sœur.' },
      { en: 'My sister has a new job.', fr: 'Ma sœur a un nouveau travail.' },
      { en: "They've got a big house.", fr: 'Ils ont une grande maison.', accent: 'en-GB' },
      { en: "He's got long hair.", fr: 'Il a les cheveux longs.', accent: 'en-GB', note: '<i>hair</i> (les cheveux) est indénombrable : pas de <b>s</b>.' },
      { en: 'The hotel has a swimming pool.', fr: 'L’hôtel a une piscine.' }
    ] },

    { type: 'h', text: 'La négation et les questions' },
    { type: 'p', html: 'Ici, les deux formes fonctionnent différemment. Avec <b>have</b>, on utilise l’auxiliaire <b>do / does</b> (un petit mot qui aide à former la négation et la question), exactement comme avec tous les verbes au présent simple : <i>I <b>don’t</b> have…</i>, <i><b>Do</b> you have…?</i> Tu verras ce système en détail dans les leçons <i>Le présent simple : la forme affirmative</i> et <i>Le présent simple : négation et questions</i>. Avec <b>have got</b>, c’est <b>have</b> lui-même qui sert d’auxiliaire : <i>I <b>haven’t</b> got…</i>, <i><b>Have</b> you got…?</i>' },
    { type: 'table', head: ['Forme', 'have (+ do / does)', 'have got'], rows: [
      ['Affirmation', 'I have a car.<br>She has a car.', 'I’ve got a car.<br>She’s got a car.'],
      ['Négation', 'I <b>don’t have</b> a car.<br>She <b>doesn’t have</b> a car.', 'I <b>haven’t got</b> a car.<br>She <b>hasn’t got</b> a car.'],
      ['Question', '<b>Do</b> you <b>have</b> a car?<br><b>Does</b> she <b>have</b> a car?', '<b>Have</b> you <b>got</b> a car?<br><b>Has</b> she <b>got</b> a car?'],
      ['Réponse courte', 'Yes, I do. / No, I don’t.<br>Yes, she does. / No, she doesn’t.', 'Yes, I have. / No, I haven’t.<br>Yes, she has. / No, she hasn’t.']
    ], caption: 'Après <b>does</b> ou <b>doesn’t</b>, on remet <b>have</b> (jamais <i>has</i>) : <i>Does she <b>have</b>…?</i>' },
    { type: 'box', style: 'warn', title: 'Piège : ne mélange pas les deux systèmes', html: '<span class="ko">Does she has a car?</span> → <span class="ok">Does she have a car?</span><br><span class="ko">She doesn’t has a car.</span> → <span class="ok">She doesn’t have a car.</span><br><span class="ko">Do you have got a pen?</span> → <span class="ok">Do you have a pen?</span> ou <span class="ok">Have you got a pen?</span><br><span class="ko">I haven’t a car.</span> → <span class="ok">I don’t have a car.</span> ou <span class="ok">I haven’t got a car.</span><br><small>(<i>I haven’t a…</i> et <i>Have you a…?</i> existent dans de vieux textes britanniques, mais ils sont démodés.)</small>' },
    { type: 'examples', items: [
      { en: 'Do you have a pen? — Yes, I do.', fr: 'Tu as un stylo ? — Oui.' },
      { en: "Does the hotel have a gym? — No, it doesn't.", fr: 'Est-ce que l’hôtel a une salle de sport ? — Non.' },
      { en: 'Have you got a minute? — Yes, I have.', fr: 'Tu as une minute ? — Oui.', accent: 'en-GB' },
      { en: "She hasn't got a car.", fr: 'Elle n’a pas de voiture.', accent: 'en-GB' },
      { en: "We don't have any meetings today.", fr: 'Nous n’avons pas de réunion aujourd’hui.' }
    ] },
    { type: 'box', style: 'tip', title: 'Lequel choisir ?', html: 'Pour parler, utilise <b>have</b> avec <b>do / does</b> : c’est la forme la plus courante au TOEIC (anglais américain) et elle marche partout. Pour <b>have got</b>, il suffit de bien le <b>comprendre</b> quand tu l’entends. Note aussi que <i>have got</i> ne s’utilise qu’au <b>présent</b>.' },
    { type: 'dialog', title: 'Premier jour : un stylo et une réunion', lines: [
      { speaker: 'W', en: 'Excuse me, do you have a pen?', fr: 'Excuse-moi, tu as un stylo ?' },
      { speaker: 'M', en: 'Sure, here you are. Are you new here?', fr: 'Bien sûr, tiens. Tu es nouvelle ici ?' },
      { speaker: 'W', en: "Yes, I am. I'm Mei. I have a meeting with Mr. Adeyemi at ten.", fr: 'Oui. Je m’appelle Mei. J’ai une réunion avec M. Adeyemi à dix heures.' },
      { speaker: 'M', en: 'Oh, he has an office on the top floor. Do you have the room number?', fr: 'Ah, il a un bureau au dernier étage. Tu as le numéro de la salle ?' },
      { speaker: 'W', en: "No, I don't.", fr: 'Non.' },
      { speaker: 'M', en: "It's Room 512. Have a good meeting!", fr: 'C’est la salle 512. Bonne réunion !' }
    ] },

    { type: 'h', text: 'Have pour les actions : have breakfast, have a shower…' },
    { type: 'p', html: 'Dans beaucoup d’expressions, <b>have</b> ne veut pas dire « posséder », mais <b>manger, boire, prendre, faire</b> ou <b>passer (un moment)</b>. Le français dit souvent « prendre » : prendre un café → <i>have a coffee</i>. Dans ce sens, <b>have got est impossible</b> : on utilise seulement <b>have</b> (avec <i>do / does</i> pour la négation et la question). Autre différence : dans ce sens, <i>have</i> peut se mettre à la forme en -ing (<i>She’s having lunch.</i> = Elle est en train de déjeuner), ce qui est impossible quand il veut dire « posséder » (leçon <i>Le présent continu (be + -ing)</i>).' },
    { type: 'table', head: ['Expression', 'Français'], rows: [
      ['have breakfast / lunch / dinner', 'prendre le petit-déjeuner / déjeuner / dîner'],
      ['have a coffee / a drink', 'prendre un café / un verre'],
      ['have a shower / a bath', 'prendre une douche / un bain'],
      ['have a meeting', 'avoir une réunion, faire une réunion'],
      ['have a break', 'faire une pause'],
      ['have a good time', 'passer un bon moment, bien s’amuser'],
      ['have a look (at)', 'jeter un coup d’œil (à)'],
      ['Have a nice day!', 'Bonne journée !']
    ], caption: 'On dit <i>have breakfast</i> (sans article), mais <i>have <b>a</b> shower</i>. En anglais américain, on dit plus souvent <i>take a shower</i>.' },
    { type: 'examples', items: [
      { en: 'I have breakfast at seven.', fr: 'Je prends mon petit-déjeuner à sept heures.' },
      { en: 'We have a meeting every Monday.', fr: 'Nous avons une réunion tous les lundis.' },
      { en: "Let's have a coffee.", fr: 'Allons prendre un café.' },
      { en: 'She has a shower every morning.', fr: 'Elle prend une douche tous les matins.', accent: 'en-AU' },
      { en: 'Have a good weekend!', fr: 'Bon week-end !' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : pas de « have got » pour les actions', html: '<span class="ko">I’ve got breakfast at seven every day.</span> → <span class="ok">I have breakfast at seven every day.</span><br><span class="ko">She’s got a shower every morning.</span> → <span class="ok">She has a shower every morning.</span><br><small>Nuance : pour un rendez-vous noté dans l’agenda, on entend aussi <i>I’ve got a meeting at ten</i> (« j’ai une réunion à dix heures »). Mais pour une action ou une habitude, c’est toujours <b>have</b>.</small>' },

    { type: 'h', text: '« J’ai 30 ans », « j’ai faim » : c’est be !' },
    { type: 'p', html: 'Attention : le français utilise « avoir » dans des cas où l’anglais utilise <b>be</b> (tu l’as vu dans la leçon <i>Le verbe « be » au présent</i>). En revanche, pour les maladies et les douleurs, l’anglais utilise bien <b>have</b> : <i>I have a cold</i> (j’ai un rhume).' },
    { type: 'box', style: 'warn', title: 'Rappel : le piège n°1 des francophones', html: '<span class="ko">I have 30 years.</span> → <span class="ok">I am 30.</span> / <span class="ok">I’m 30 years old.</span><br><span class="ko">I have hungry.</span> → <span class="ok">I’m hungry.</span><br><span class="ko">I have cold.</span> → <span class="ok">I’m cold.</span><br><span class="ko">You have right.</span> → <span class="ok">You’re right.</span><br><small>Ne confonds pas : <i>I’m cold.</i> = j’ai froid, mais <i>I have <b>a</b> cold.</i> = j’ai un rhume.</small>' },
    { type: 'examples', items: [
      { en: 'I have a headache.', fr: 'J’ai mal à la tête.' },
      { en: 'She has a cold.', fr: 'Elle a un rhume.' },
      { en: "He's got the flu.", fr: 'Il a la grippe.', accent: 'en-GB' },
      { en: 'Do you have a fever?', fr: 'Tu as de la fièvre ?' },
      { en: 'I have a sore throat.', fr: 'J’ai mal à la gorge.' }
    ] },

    { type: 'h', text: 'Au passé : had (aperçu)' },
    { type: 'p', html: 'Au passé (le prétérit), <b>have</b> devient <b>had</b> pour <b>toutes</b> les personnes. Pour la négation et la question, on utilise <b>did</b> : <i>I <b>didn’t have</b>…</i>, <i><b>Did</b> you <b>have</b>…?</i> <i>Have got</i> n’a pas de passé : on utilise <b>had</b>. Tu verras tout cela dans les leçons sur le prétérit.' },
    { type: 'examples', items: [
      { en: 'I had a meeting yesterday.', fr: 'J’avais une réunion hier.' },
      { en: 'We had a great time in Lisbon.', fr: 'Nous avons passé un super moment à Lisbonne.' },
      { en: "She didn't have time.", fr: 'Elle n’a pas eu le temps.' },
      { en: 'Did you have lunch?', fr: 'Tu as déjeuné ?' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 5</b>, on teste souvent l’accord : <i>The new building ------- a large parking garage.</i> → <b>has</b> (singulier). Et après <i>does / doesn’t / did</i>, il faut <b>have</b> : <i>The store does not ------- this item in stock.</i> → <b>have</b>. En <b>Partie 2</b>, beaucoup de questions commencent par <i>Do you have…?</i> ou <i>Does the office have…?</i> ; la bonne réponse n’est pas toujours « Yes / No » : <i>Do you have the sales report? — It’s on your desk.</i> Plus tard, tu verras que <i>have</i> sert aussi d’auxiliaire (<i>I have finished</i>) : leçon <i>Le present perfect</i>.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• <b>I / you / we / they have</b> — <b>he / she / it has</b>.<br>• <b>have got</b> (UK) = <b>have</b> pour la possession : <i>I’ve got, she’s got</i>.<br>• Négation et question : <i>I don’t have, Does she have…?</i> (<i>have</i> après <i>does</i>) ou <i>I haven’t got, Has she got…?</i><br>• Actions (<i>have breakfast, have a shower, have a good time</i>) → <b>have</b> seulement, jamais <i>have got</i>.<br>• Âge, faim, froid… → <b>be</b> : <i>I’m 30, I’m hungry</i>. Maladies → <b>have</b> : <i>I have a cold</i>.<br>• Passé : <b>had</b> pour toutes les personnes.' }
  ],
  exercises: [
    { type: 'mcq', q: 'She ___ two children.', options: ['have', 'has', 'is'], answer: 1, explain: 'Avec <b>she</b> (3ᵉ personne du singulier), <i>have</i> devient <b>has</b>.' },
    { type: 'gap', q: 'He ___ (have got) blue eyes.', answers: ["'s got", 'has got'], explain: 'À la 3ᵉ personne, <i>have got</i> devient <b>has got</b>, contracté en <b>he’s got</b>.' },
    { type: 'mcq', q: 'Comment dit-on « Il a 45 ans et il a faim » ?', options: ['He has 45 years and he has hungry.', 'He is 45 and he is hungry.', 'He has 45 and he is hungry.', 'He is 45 years and he has hungry.'], answer: 1, explain: 'L’âge et la faim se disent avec <b>be</b> : <i>He is 45</i> (ou <i>45 years old</i>) et <i>he is hungry</i>. <i>He is 45 years</i> est incomplet : il faut <i>years <b>old</b></i>.' },
    { type: 'gap', q: 'I ___ (not / have) a car, so I take the bus to work.', answers: ["don't have", 'do not have', "haven't got", 'have not got'], explain: 'Négation de <i>have</i> : <b>don’t have</b> (ou, à l’anglaise, <b>haven’t got</b>).' },
    { type: 'gap', q: 'She ___ (not / have) a laptop, so she uses the office computer.', answers: ["doesn't have", 'does not have', "hasn't got", 'has not got'], explain: 'Avec <i>she</i> : <b>doesn’t have</b> (et pas <i>doesn’t has</i> : après <i>does</i>, on remet <i>have</i>). À l’anglaise : <b>hasn’t got</b>.' },
    { type: 'mcq', q: '___ the hotel have a swimming pool?', options: ['Do', 'Does', 'Has', 'Is'], answer: 1, explain: '<i>the hotel</i> = it → question avec <b>Does</b> + <i>have</i>. <i>Has the hotel have…?</i> est impossible (deux fois <i>have</i>).' },
    { type: 'mcq', q: '___ she got a car?', options: ['Does', 'Has', 'Have', 'Is'], answer: 1, explain: 'Avec <b>have got</b>, on inverse <i>has</i> et le sujet : <b>Has she got…?</b> (<i>she</i> → <i>has</i>, pas <i>have</i>).' },
    { type: 'gap', q: '— Do you have any brothers? — No, I ___.', answers: ["don't", 'do not'], explain: 'La question commence par <i>Do</i> → la réponse courte reprend <b>do</b> : <b>No, I don’t.</b>' },
    { type: 'mcq', q: 'I usually ___ breakfast at 7 a.m.', options: ['have', 'have got', 'has', 'am'], answer: 0, explain: '<i>have breakfast</i> est une <b>action</b> (prendre le petit-déjeuner) : <i>have got</i> est impossible ici. Avec <i>I</i> → <b>have</b>.' },
    { type: 'gap', q: 'She ___ (have) a shower every morning.', answers: ['has'], explain: 'Action habituelle → <b>have</b> (jamais <i>have got</i>), et <i>she</i> → <b>has</b>.' },
    { type: 'order', answer: 'Does your company have a website?', fr: 'Est-ce que ton entreprise a un site web ?', explain: 'Question avec <b>Does</b> + sujet (<i>your company</i>) + <b>have</b> (et pas <i>has</i>, car <i>does</i> porte déjà la 3ᵉ personne).' },
    { type: 'order', answer: 'My sister has two young children.', fr: 'Ma sœur a deux jeunes enfants.', explain: '<i>My sister</i> = she → <b>has</b> ; l’adjectif <i>young</i> se place avant le nom <i>children</i>.' },
    { type: 'listen', accent: 'en-GB', say: "Hi, I'm Priya. I've got two brothers and a sister. I haven't got any children, but I've got a lovely cat!", q: 'Qu’as-tu compris sur Priya ?', options: ['Elle a deux frères, une sœur et un chat.', 'Elle a deux sœurs, un frère et un chien.', 'Elle a deux enfants et un chat.'], answer: 0, explain: '<i>I’ve got <b>two brothers and a sister</b></i>, <i>I <b>haven’t</b> got any children</i> (pas d’enfants), <i>I’ve got a lovely <b>cat</b></i> : c’est du <i>have got</i> britannique.' },
    { type: 'dictation', accent: 'en-CA', say: 'Does she have a meeting this afternoon?', answers: ['Does she have a meeting this afternoon'], explain: 'Question avec <b>Does</b> + <i>she</i> + <b>have</b> : « Est-ce qu’elle a une réunion cet après-midi ? »' },
    { type: 'mcq', q: 'Ms. Ferreira ------- ten years of experience in marketing. <small>(style TOEIC)</small>', options: ['have', 'has', 'having', 'is'], answer: 1, explain: '<i>Ms. Ferreira</i> = une seule personne (she) → <b>has</b>. <i>Having</i> n’est pas un verbe conjugué.' },
    { type: 'mcq', q: 'Mr. Tanaka does not ------- time to meet with the clients today. <small>(style TOEIC)</small>', options: ['has', 'have', 'had', 'having'], answer: 1, explain: 'Après <i>does not</i>, le verbe reste à la base : <b>have</b>. C’est <i>does</i> qui porte la 3ᵉ personne.' }
  ]
});
