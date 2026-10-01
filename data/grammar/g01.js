LE.register({
  id: 'g01',
  kind: 'grammar',
  title: 'Le verbe « be » au présent',
  subtitle: 'Le verbe le plus important de l’anglais : être (et parfois avoir !)',
  level: 'A1',
  minutes: 30,
  goals: [
    'Conjuguer <b>be</b> au présent : <i>I am, you are, he is…</i>',
    'Utiliser les formes contractées : <i>I’m, she’s, they’re</i>',
    'Faire des phrases négatives et poser des questions avec <b>be</b>',
    'Éviter le piège de l’âge et de la faim : <i>I am 30</i>, <i>I’m hungry</i>'
  ],
  blocks: [
    { type: 'h', text: 'À quoi sert « be » ?' },
    { type: 'p', html: '<b>Be</b> veut dire <b>être</b>. C’est le verbe le plus fréquent de l’anglais : tu l’entendras dans presque toutes les phrases du TOEIC. On l’utilise pour dire qui on est, comment on va, où on est, et pour décrire les choses.' },
    { type: 'examples', items: [
      { en: 'I am Julie.', fr: 'Je suis Julie.' },
      { en: 'She is a nurse.', fr: 'Elle est infirmière.', note: 'En anglais, on met <b>a</b> devant un métier : <i>a nurse</i>, <i>an engineer</i>.' },
      { en: 'We are in the office.', fr: 'Nous sommes au bureau.' },
      { en: 'The meeting is at ten.', fr: 'La réunion est à dix heures.' }
    ] },

    { type: 'h', text: 'La conjugaison' },
    { type: 'p', html: 'Au présent, <b>be</b> a trois formes : <b>am</b>, <b>is</b> et <b>are</b>. À l’oral, on utilise presque toujours la <b>forme contractée</b> (l’apostrophe remplace une lettre).' },
    { type: 'table', head: ['Sujet', 'Forme pleine', 'Forme contractée', 'Français'], rows: [
      ['I', 'I <b>am</b>', 'I<b>’m</b>', 'je suis'],
      ['you', 'you <b>are</b>', 'you<b>’re</b>', 'tu es / vous êtes'],
      ['he', 'he <b>is</b>', 'he<b>’s</b>', 'il est (personne)'],
      ['she', 'she <b>is</b>', 'she<b>’s</b>', 'elle est (personne)'],
      ['it', 'it <b>is</b>', 'it<b>’s</b>', 'il / elle est (chose, animal)'],
      ['we', 'we <b>are</b>', 'we<b>’re</b>', 'nous sommes'],
      ['they', 'they <b>are</b>', 'they<b>’re</b>', 'ils / elles sont']
    ], caption: 'Retiens : <b>I → am</b> ; <b>he, she, it → is</b> ; <b>you, we, they → are</b>.' },
    { type: 'box', style: 'tip', title: 'Astuce mémo', html: '<b>You</b> est à la fois « tu » et « vous » : il prend toujours <b>are</b>, même quand tu parles à une seule personne.' },
    { type: 'examples', items: [
      { en: "I'm tired.", fr: 'Je suis fatiguée.' },
      { en: "You're late.", fr: 'Tu es en retard. / Vous êtes en retard.' },
      { en: "It's cold today.", fr: 'Il fait froid aujourd’hui.', note: 'Pour la météo, l’anglais dit « c’est froid » : <i>it is cold</i>.' },
      { en: "They're my colleagues.", fr: 'Ce sont mes collègues.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : « it » pour les choses', html: 'En français, une table est « elle » et un bureau est « il ». En anglais, <b>tous les objets sont « it »</b> : <i>The printer? <b>It’s</b> broken.</i> (L’imprimante ? Elle est en panne.) <b>He</b> et <b>she</b> sont réservés aux personnes (et parfois aux animaux de compagnie).' },

    { type: 'h', text: 'La forme négative' },
    { type: 'p', html: 'Pour dire « ne… pas », on ajoute simplement <b>not</b> après <b>am / is / are</b>. Deux contractions sont possibles, elles veulent dire la même chose.' },
    { type: 'table', head: ['Forme pleine', 'Contraction 1', 'Contraction 2'], rows: [
      ['I am not', 'I’m not', '(n’existe pas)'],
      ['you are not', 'you’re not', 'you aren’t'],
      ['he / she / it is not', 'he’s not', 'he isn’t'],
      ['we / they are not', 'we’re not', 'we aren’t']
    ], caption: 'Attention : « I amn’t » n’existe pas. On dit toujours <b>I’m not</b>.' },
    { type: 'examples', items: [
      { en: "I'm not ready.", fr: 'Je ne suis pas prête.' },
      { en: "He isn't at his desk.", fr: 'Il n’est pas à son bureau.' },
      { en: "We aren't open on Sundays.", fr: 'Nous ne sommes pas ouverts le dimanche.' },
      { en: "It's not expensive.", fr: 'Ce n’est pas cher.' }
    ] },

    { type: 'h', text: 'Les questions' },
    { type: 'p', html: 'Pour poser une question, on <b>inverse</b> le sujet et le verbe : <i>You are ready</i> → <i><b>Are you</b> ready?</i> C’est comme « Es-tu prête ? » en français soutenu. Pas besoin d’ajouter de mot comme « est-ce que ».' },
    { type: 'table', head: ['Affirmation', 'Question', 'Réponse courte'], rows: [
      ['You are busy.', '<b>Are you</b> busy?', 'Yes, I am. / No, I’m not.'],
      ['She is new.', '<b>Is she</b> new?', 'Yes, she is. / No, she isn’t.'],
      ['They are here.', '<b>Are they</b> here?', 'Yes, they are. / No, they aren’t.'],
      ['It is far.', '<b>Is it</b> far?', 'Yes, it is. / No, it isn’t.']
    ] },
    { type: 'box', style: 'warn', title: 'Piège : la réponse courte', html: 'Dans une réponse courte <b>affirmative</b>, on ne contracte jamais : on dit <i>Yes, I <b>am</b>.</i> et pas <i>Yes, I’m.</i> En revanche, la réponse négative se contracte : <i>No, I’m not.</i>' },
    { type: 'examples', items: [
      { en: 'Where are you from?', fr: 'D’où viens-tu ?' },
      { en: "I'm from Lyon. I'm French.", fr: 'Je viens de Lyon. Je suis française.' },
      { en: 'Is Mr. Brown in his office?', fr: 'Est-ce que M. Brown est dans son bureau ?' },
      { en: 'How are you? Fine, thanks.', fr: 'Comment vas-tu ? Bien, merci.' }
    ] },
    { type: 'dialog', title: 'Premier jour au bureau', lines: [
      { speaker: 'W', en: "Hello, I'm Sarah. Are you the new assistant?", fr: 'Bonjour, je suis Sarah. Tu es la nouvelle assistante ?' },
      { speaker: 'W2', en: "Yes, I am. I'm Emma. Nice to meet you.", fr: 'Oui. Je suis Emma. Enchantée.' },
      { speaker: 'W', en: 'Nice to meet you too. Are you from London?', fr: 'Enchantée aussi. Tu viens de Londres ?' },
      { speaker: 'W2', en: "No, I'm not. I'm from Paris.", fr: 'Non. Je viens de Paris.' }
    ] },

    { type: 'h', text: 'Quand le français dit « avoir », l’anglais dit « be »' },
    { type: 'p', html: 'C’est <b>le</b> grand piège des francophones. Pour l’âge, la faim, la soif, le chaud, le froid, la peur, la raison et le tort, l’anglais utilise <b>be</b>, pas <i>have</i>.' },
    { type: 'table', head: ['Français (avoir)', 'Anglais (be)'], rows: [
      ['J’ai 30 ans.', 'I <b>am</b> 30. / I’m 30 years old.'],
      ['J’ai faim. / J’ai soif.', 'I’m <b>hungry</b>. / I’m <b>thirsty</b>.'],
      ['J’ai chaud. / J’ai froid.', 'I’m <b>hot</b>. / I’m <b>cold</b>.'],
      ['J’ai peur.', 'I’m <b>afraid</b>. / I’m <b>scared</b>.'],
      ['Tu as raison. / Tu as tort.', 'You’re <b>right</b>. / You’re <b>wrong</b>.'],
      ['J’ai 10 minutes de retard.', 'I’m 10 minutes <b>late</b>.']
    ] },
    { type: 'box', style: 'warn', title: 'À ne jamais dire', html: '<span class="ko">I have 30 years.</span> → <span class="ok">I am 30.</span><br><span class="ko">I have hungry.</span> → <span class="ok">I’m hungry.</span>' },
    { type: 'examples', items: [
      { en: 'How old are you? I am twenty-five.', fr: 'Quel âge as-tu ? J’ai vingt-cinq ans.' },
      { en: "Are you hungry? Let's have lunch.", fr: 'Tu as faim ? Allons déjeuner.' },
      { en: "You're right, the report is late.", fr: 'Tu as raison, le rapport est en retard.' },
      { en: "Close the window, I'm cold.", fr: 'Ferme la fenêtre, j’ai froid.' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 2</b> (questions-réponses), beaucoup de questions commencent par <i>Is…?</i> ou <i>Are…?</i> : <i>Is the report ready?</i> La bonne réponse n’est pas toujours « Yes / No » : <i>Almost, give me ten minutes.</i> est une excellente réponse. En <b>Partie 5</b>, on te demandera de choisir entre <i>is</i> et <i>are</i> selon le sujet : <i>The new printers ------- in the storage room.</i> → <b>are</b>.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• <b>I am</b>, <b>he / she / it is</b>, <b>you / we / they are</b>.<br>• Négation : <b>not</b> après le verbe (<i>isn’t, aren’t, I’m not</i>).<br>• Question : on inverse (<i>Are you…? Is it…?</i>).<br>• Âge, faim, soif, chaud, froid, peur, raison, tort → <b>be</b> (<i>I’m 30, I’m hungry</i>).' }
  ],
  exercises: [
    { type: 'mcq', q: 'I ___ a teacher.', options: ['am', 'is', 'are'], answer: 0, explain: 'Avec <b>I</b>, on utilise toujours <b>am</b>.' },
    { type: 'mcq', q: 'They ___ from Spain.', options: ['is', 'am', 'are'], answer: 2, explain: '<b>They</b> (ils / elles) → <b>are</b>.' },
    { type: 'mcq', q: 'The printer ___ broken.', options: ['is', 'are', 'am'], answer: 0, explain: '<i>The printer</i> = une chose au singulier = <b>it</b> → <b>is</b>.' },
    { type: 'gap', q: 'We ___ (be) in the meeting room.', answers: ['are', "'re"], explain: '<b>We</b> → <b>are</b> (contracté : <i>we’re</i>).' },
    { type: 'gap', q: 'My manager ___ (be) very nice.', answers: ['is'], explain: '<i>My manager</i> = une personne = he / she → <b>is</b>.' },
    { type: 'mcq', q: 'Comment dit-on « J’ai 28 ans » ?', options: ['I have 28 years.', 'I am 28.', 'I have 28.', 'I am 28 year.'], answer: 1, explain: 'Pour l’âge, l’anglais utilise <b>be</b> : <i>I am 28</i> (ou <i>I am 28 years old</i>, avec un <b>s</b> à <i>years</i>).' },
    { type: 'gap', q: 'She ___ (not) at home.', answers: ["isn't", 'is not', "'s not"], explain: 'Négation de <b>is</b> : <i>is not</i> = <i>isn’t</i> (ou <i>she’s not</i>).' },
    { type: 'gap', q: 'I ___ (not) hungry, thanks.', answers: ["'m not", 'am not'], explain: 'Avec <b>I</b>, la négation est <i>I am not</i> = <i>I’m not</i>. « I amn’t » n’existe pas.' },
    { type: 'mcq', q: 'A: Are you ready? B: Yes, ___.', options: ["I'm", 'I am', 'I is', 'am I'], answer: 1, explain: 'Dans une réponse courte affirmative, on ne contracte pas : <b>Yes, I am.</b>' },
    { type: 'order', answer: 'Is the meeting at ten?', fr: 'Est-ce que la réunion est à dix heures ?', explain: 'Question avec <b>be</b> : on inverse → <b>Is</b> + sujet (<i>the meeting</i>) + reste de la phrase.' },
    { type: 'order', answer: 'We are not open on Sundays.', fr: 'Nous ne sommes pas ouverts le dimanche.', explain: 'La négation <b>not</b> se place juste après <b>are</b>.' },
    { type: 'gap', q: 'Close the door, please. I ___ cold.', answers: ['am', "'m", 'feel'], explain: '« J’ai froid » se dit <i>I am cold</i> / <i>I’m cold</i> : on utilise <b>be</b>, pas <i>have</i>. (<i>I feel cold</i> est aussi correct.)' },
    { type: 'listen', say: "Hi, I'm Tom. I'm thirty and I'm from Manchester.", q: 'Qu’as-tu entendu sur Tom ?', options: ['Il a 13 ans et vient de Manchester.', 'Il a 30 ans et vient de Manchester.', 'Il a 30 ans et vit à Londres.'], answer: 1, explain: 'Tom dit <i>I’m <b>thirty</b></i> (30, accent sur la 1ʳᵉ syllabe) et <i>I’m from <b>Manchester</b></i>.' },
    { type: 'dictation', say: "They aren't in the office today.", answers: ["They aren't in the office today", 'They are not in the office today', "They're not in the office today"], explain: '<i>aren’t</i> = <i>are not</i> : « Ils ne sont pas au bureau aujourd’hui. »' },
    { type: 'mcq', q: 'The new chairs ------- in the storage room. <small>(style TOEIC)</small>', options: ['is', 'be', 'are', 'am'], answer: 2, explain: 'Le sujet <i>The new chairs</i> est au <b>pluriel</b> (= they) → <b>are</b>.' },
    { type: 'mcq', q: 'Ms. Garcia ------- not available this afternoon. <small>(style TOEIC)</small>', options: ['are', 'is', 'am', 'be'], answer: 1, explain: '<i>Ms. Garcia</i> = une seule personne (= she) → <b>is</b>.' }
  ]
});
