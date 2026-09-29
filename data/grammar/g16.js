LE.register({
  id: 'g16',
  kind: 'grammar',
  title: 'Le prétérit de « be » : was et were',
  subtitle: 'Dire « j’étais », « c’était », « il y avait » : raconter sa journée d’hier ou un voyage',
  level: 'A2',
  minutes: 35,
  goals: [
    'Conjuguer <b>be</b> au prétérit : <i>I was, you were, she was, they were</i>',
    'Faire des phrases négatives (<i>wasn’t, weren’t</i>), poser des questions et répondre brièvement',
    'Utiliser <b>there was / there were</b> et dire où et quand on est né : <i>I was born in 1995</i>',
    'Repérer les marqueurs du passé : <i>yesterday, last week, two days ago, in 2020</i>'
  ],
  blocks: [
    { type: 'h', text: 'À quoi sert « was / were » ?' },
    { type: 'p', html: 'Tu connais <b>be</b> au présent : <i>am, is, are</i> (leçon « Le verbe « be » au présent »). Au passé, il n’a que <b>deux formes</b> : <b>was</b> et <b>were</b>. C’est le <b>prétérit</b> (en anglais <i>simple past</i>) : le temps pour parler d’un moment <b>terminé</b> du passé. En français, on le traduit selon le cas par l’imparfait (« j’<b>étais</b> ») ou par le passé composé (« j’<b>ai été</b> »).' },
    { type: 'examples', items: [
      { en: 'I was at home yesterday.', fr: 'J’étais chez moi hier.' },
      { en: 'The meeting was very long.', fr: 'La réunion a été très longue.' },
      { en: 'We were in London last week.', fr: 'Nous étions à Londres la semaine dernière.' },
      { en: 'It was cold this morning.', fr: 'Il faisait froid ce matin.', note: 'Pour la météo, <i>it was</i> = « il faisait ».' }
    ] },

    { type: 'h', text: 'La conjugaison' },
    { type: 'p', html: 'La règle est simple : <b>was</b> avec <i>I, he, she, it</i> (là où le présent a <i>am</i> ou <i>is</i>) ; <b>were</b> avec <i>you, we, they</i> (là où le présent a <i>are</i>).' },
    { type: 'table', head: ['Sujet', 'Présent', 'Prétérit', 'Français'], rows: [
      ['I', 'I am', 'I <b>was</b>', 'j’étais / j’ai été'],
      ['you', 'you are', 'you <b>were</b>', 'tu étais / vous étiez'],
      ['he / she / it', 'she is', 'she <b>was</b>', 'il / elle était'],
      ['we', 'we are', 'we <b>were</b>', 'nous étions'],
      ['they', 'they are', 'they <b>were</b>', 'ils / elles étaient']
    ], caption: 'am, is → <b>was</b> ; are → <b>were</b>. À la forme affirmative, pas de forme contractée : on écrit toujours <i>I was, they were</i>.' },
    { type: 'box', style: 'tip', title: 'Astuce mémo', html: '<b>are</b> → <b>were</b> : les deux ont un <b>r</b>. <b>am / is</b> → <b>was</b> : aucun des trois n’a de r !<br>Et comme au présent, <b>you</b> prend toujours <b>were</b>, même quand tu parles à une seule personne : <i>You <b>were</b> great!</i> (Tu as été super !)' },
    { type: 'examples', items: [
      { en: 'Yesterday was a busy day at work.', fr: 'Hier, c’était une journée chargée au travail.' },
      { en: 'I was very tired after the trip.', fr: 'J’étais très fatiguée après le voyage.' },
      { en: 'You were right about the price.', fr: 'Tu avais raison pour le prix.', note: 'Comme au présent, « avoir raison » = <b>be</b> right → <i>you were right</i>.' },
      { en: 'Mr. Kowalski was in Berlin on Monday.', fr: 'M. Kowalski était à Berlin lundi.' },
      { en: 'The clients were happy with the presentation.', fr: 'Les clients étaient contents de la présentation.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : sujet pluriel → were', html: 'Regarde bien le <b>sujet</b> : <i>The <b>document was</b> on my desk.</i> (singulier) mais <i>The <b>documents were</b> on my desk.</i> (pluriel).<br>Attention à <i>people</i>, qui est <b>pluriel</b> : <i>The <b>people were</b> very nice.</i><br>Deux sujets reliés par <i>and</i> → <b>were</b> : <i>Anna and Mehdi <b>were</b> late.</i>' },

    { type: 'h', text: '« Était » ou « a été » ? Un seul mot en anglais' },
    { type: 'p', html: 'Le français hésite entre plusieurs temps du passé. L’anglais utilise simplement <b>was / were</b> dans les deux cas les plus fréquents :<br>• une <b>description</b>, un état (imparfait) : « L’hôtel <b>était</b> grand » → <i>The hotel <b>was</b> big.</i><br>• le <b>bilan</b> d’un moment terminé (passé composé) : « Le voyage <b>a été</b> excellent » → <i>The trip <b>was</b> excellent.</i>' },
    { type: 'table', head: ['Français', 'Anglais'], rows: [
      ['J’<b>étais</b> fatiguée hier soir.', 'I <b>was</b> tired last night.'],
      ['Le voyage <b>a été</b> long.', 'The trip <b>was</b> long.'],
      ['Il <b>faisait</b> chaud à Rome.', 'It <b>was</b> hot in Rome.'],
      ['<b>C’était</b> une bonne idée.', 'It <b>was</b> a good idea.'],
      ['Nous <b>avions</b> faim.', 'We <b>were</b> hungry.'],
      ['Elle <b>avait</b> 30 ans en 2020.', 'She <b>was</b> 30 in 2020.']
    ], caption: 'Et comme au présent : l’âge, la faim, le froid, la raison… se disent avec <b>be</b>, donc au passé avec <b>was / were</b>.' },
    { type: 'box', style: 'warn', title: 'Piège : « a été » n’est pas « has been »', html: 'Ne traduis pas « a été » mot à mot par <i>has been</i>. Quand le moment est <b>terminé</b> et situé dans le passé (<i>yesterday, last week…</i>), c’est <b>was / were</b> :<br><span class="ko">The meeting has been long yesterday.</span> → <span class="ok">The meeting was long yesterday.</span><br>(Tu découvriras <i>has been</i> dans la leçon « Le present perfect ».)' },

    { type: 'h', text: 'La forme négative' },
    { type: 'p', html: 'Comme au présent, on ajoute <b>not</b> après le verbe. À l’oral, on contracte presque toujours : <b>wasn’t</b> (= <i>was not</i>) et <b>weren’t</b> (= <i>were not</i>).' },
    { type: 'table', head: ['Forme pleine', 'Forme contractée', 'Français'], rows: [
      ['I was not', 'I <b>wasn’t</b>', 'je n’étais pas'],
      ['you were not', 'you <b>weren’t</b>', 'tu n’étais pas / vous n’étiez pas'],
      ['he / she / it was not', 'he <b>wasn’t</b>', 'il / elle n’était pas'],
      ['we / they were not', 'they <b>weren’t</b>', 'nous n’étions pas / ils n’étaient pas']
    ] },
    { type: 'examples', items: [
      { en: "I wasn't at the meeting yesterday.", fr: 'Je n’étais pas à la réunion hier.' },
      { en: "The hotel wasn't expensive.", fr: 'L’hôtel n’était pas cher.' },
      { en: "We weren't ready on time.", fr: 'Nous n’étions pas prêts à temps.' },
      { en: "The files weren't on the server.", fr: 'Les fichiers n’étaient pas sur le serveur.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : pas de « did » avec be', html: '<span class="ko">I didn’t be at home.</span> → <span class="ok">I wasn’t at home.</span><br><span class="ko">Did you be late?</span> → <span class="ok">Were you late?</span><br><b>Be</b> se débrouille tout seul, au passé comme au présent. <i>Did</i> sert pour les autres verbes (leçon « Le prétérit : négation et questions »).' },

    { type: 'h', text: 'Les questions et les réponses courtes' },
    { type: 'p', html: 'Pour poser une question, on <b>inverse</b> le sujet et le verbe : <i>You were late.</i> → <i><b>Were you</b> late?</i> Avec un mot interrogatif, on le place devant : <i><b>Where were</b> you? <b>How was</b> your trip?</i>' },
    { type: 'table', head: ['Question', 'Réponse courte', 'Français'], rows: [
      ['<b>Were you</b> at the office yesterday?', 'Yes, I was. / No, I wasn’t.', 'Tu étais au bureau hier ?'],
      ['<b>Was</b> the flight on time?', 'Yes, it was. / No, it wasn’t.', 'Le vol était à l’heure ?'],
      ['<b>Were</b> the clients happy?', 'Yes, they were. / No, they weren’t.', 'Les clients étaient contents ?'],
      ['<b>Where were</b> you this morning?', 'I was at the dentist.', 'Où étais-tu ce matin ?'],
      ['<b>How was</b> your weekend?', 'It was great, thanks.', 'Comment s’est passé ton week-end ?']
    ], caption: 'Attention : à la question <i><b>Were</b> you…?</i>, on répond avec <b>I was</b> : <i>Yes, I <b>was</b>.</i> / <i>No, I <b>wasn’t</b>.</i>' },
    { type: 'box', style: 'tip', title: '« How was…? » : la question star du lundi matin', html: '<b>How was…?</b> = « Comment s’est passé… ? », « C’était comment… ? ». Tu l’entendras sans arrêt au bureau : <i>How was your trip? How was the meeting? How was your weekend?</i><br>Réponses typiques : <i>It was great / fine / OK / terrible.</i>' },
    { type: 'dialog', title: 'Lundi matin, au bureau', lines: [
      { speaker: 'W', en: 'Hi, Tomás! How was your trip to Chicago?', fr: 'Salut Tomás ! Comment s’est passé ton voyage à Chicago ?' },
      { speaker: 'M', en: 'It was great, thanks. The weather was cold, but the hotel was very nice.', fr: 'Très bien, merci. Il faisait froid, mais l’hôtel était très bien.' },
      { speaker: 'W', en: 'Were the clients happy with the new product?', fr: 'Les clients étaient contents du nouveau produit ?' },
      { speaker: 'M', en: 'Yes, they were. And there were a lot of people at the trade show.', fr: 'Oui. Et il y avait beaucoup de monde au salon professionnel.' },
      { speaker: 'W', en: "Good! You weren't at the office on Friday, right?", fr: 'Super ! Tu n’étais pas au bureau vendredi, c’est ça ?' },
      { speaker: 'M', en: "No, I wasn't. My flight was late, and I was very tired!", fr: 'Non. Mon vol était en retard, et j’étais très fatigué !' }
    ] },

    { type: 'h', text: 'There was / there were : il y avait' },
    { type: 'p', html: '« Il y avait » ou « il y a eu » se dit <b>there was</b> (+ nom singulier ou indénombrable, c’est-à-dire qu’on ne peut pas compter, comme <i>traffic</i> ou <i>information</i>) et <b>there were</b> (+ nom pluriel). C’est la même logique qu’au présent (leçon « There is / there are ») : seul <b>be</b> change.' },
    { type: 'examples', items: [
      { en: 'There was a problem with the printer.', fr: 'Il y avait un problème avec l’imprimante.' },
      { en: 'There were twenty people at the meeting.', fr: 'Il y avait vingt personnes à la réunion.' },
      { en: 'There was a lot of traffic this morning.', fr: 'Il y avait beaucoup de circulation ce matin.', note: '<i>traffic</i> est indénombrable → <b>was</b>.' },
      { en: "There weren't any taxis at the airport.", fr: 'Il n’y avait pas de taxis à l’aéroport.' },
      { en: 'Were there any questions after the presentation?', fr: 'Il y a eu des questions après la présentation ?' }
    ] },

    { type: 'h', text: '« Je suis né(e) » : I was born' },
    { type: 'p', html: 'Pour dire « je suis né(e) », l’anglais utilise le <b>passé</b> : <b>I was born</b>. Logique : ta naissance est un événement terminé ! On précise ensuite avec <b>in</b> (une année, un mois, une ville, un pays) ou <b>on</b> (une date précise), comme dans la leçon « In, on, at : le lieu et le temps ».' },
    { type: 'examples', items: [
      { en: 'I was born in 1995.', fr: 'Je suis née en 1995.', note: 'À l’oral : <i>nineteen ninety-five</i>.' },
      { en: 'She was born in Casablanca.', fr: 'Elle est née à Casablanca.' },
      { en: 'My son was born on March 3, 2020.', fr: 'Mon fils est né le 3 mars 2020.', note: 'À l’oral : <i>March third, twenty twenty</i>.' },
      { en: 'Where were you born? — In Lyon.', fr: 'Où es-tu née ? — À Lyon.', note: 'Ne confonds pas <i>where</i> (où), qui rime avec <i>air</i>, et <i>were</i>, qui se prononce comme le début de <i>word</i> : ici, les deux se suivent !' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : jamais « I am born »', html: '<span class="ko">I am born in 1995.</span> → <span class="ok">I was born in 1995.</span><br><span class="ko">Where are you born?</span> → <span class="ok">Where were you born?</span><br>Le français dit « je <b>suis</b> née », mais en anglais la naissance est un événement passé : toujours <b>was / were born</b>.' },

    { type: 'h', text: 'Les marqueurs du passé' },
    { type: 'table', head: ['Anglais', 'Français', 'Exemple'], rows: [
      ['<b>yesterday</b> (morning / afternoon)', 'hier (matin / après-midi)', 'I was sick yesterday.'],
      ['<b>last</b> night / week / month / year', 'hier soir / la semaine dernière / le mois dernier / l’année dernière', 'We were in Madrid last week.'],
      ['two days / a year <b>ago</b>', 'il y a deux jours / un an', 'She was here ten minutes ago.'],
      ['<b>in</b> 2020 / <b>in</b> May', 'en 2020 / en mai', 'Our office was in Lyon in 2020.'],
      ['<b>this morning</b> (terminé)', 'ce matin', 'The train was late this morning.']
    ], caption: 'Rappel : <b>aucune</b> préposition devant <i>yesterday</i> et <i>last</i> ; <b>ago</b> se place <b>après</b> la durée (<i>two days ago</i>).' },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 5</b>, deux réflexes :<br>1) un <b>marqueur du passé</b> (<i>yesterday, last…, … ago, in 2020</i>) → <b>was / were</b>, pas <i>is / are</i> ;<br>2) regarde le <b>sujet</b> pour choisir entre <b>was</b> et <b>were</b> : <i>The results of last year’s survey ------- very positive.</i> → <b>were</b> (sujet pluriel : <i>results</i>, et pas <i>survey</i>).<br>En <b>Parties 2 et 3</b>, <i>How was…?</i> et <i>Were you…?</i> sont très fréquents : <i>How was the conference? — It was very useful.</i>' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• Prétérit de be : <b>I / he / she / it was</b> — <b>you / we / they were</b>.<br>• Négation : <b>wasn’t</b>, <b>weren’t</b> (jamais <i>didn’t be</i>).<br>• Question : on inverse (<i>Were you…? Was it…?</i>) ; réponse courte : <i>Yes, I was. / No, they weren’t.</i> ; <b>How was…?</b> = comment s’est passé… ?<br>• <b>There was</b> + singulier / <b>there were</b> + pluriel = il y avait, il y a eu.<br>• Naissance : <b>I was born</b> in 1995 (jamais <i>I am born</i>).<br>• « J’étais », « c’était », « a été », « il faisait » → souvent <b>was / were</b>.<br>• Marqueurs : <i>yesterday, last week, two days ago, in 2020</i>.' }
  ],
  exercises: [
    { type: 'mcq', q: 'I ___ at home yesterday.', options: ['was', 'were', 'am'], answer: 0, explain: '<i>Yesterday</i> → passé. Avec <b>I</b>, le prétérit de <i>be</i> est <b>was</b>.' },
    { type: 'mcq', q: 'Anna, you ___ great yesterday! Your presentation was perfect.', options: ['was', 'were', 'are'], answer: 1, explain: '<b>You</b> prend toujours <b>were</b>, même quand on parle à une seule personne. <i>Yesterday</i> exclut le présent <i>are</i>.' },
    { type: 'gap', q: 'The weather ___ (be) very nice in Lisbon last week.', answers: ['was'], explain: '<i>Last week</i> → passé ; <i>the weather</i> = singulier (= it) → <b>was</b>.' },
    { type: 'gap', q: 'We ___ (be, forme négative) at the office yesterday.', answers: ["weren't", 'were not'], explain: '<b>We</b> → <b>were</b> ; à la forme négative : <b>were not</b> = <b>weren’t</b>.' },
    { type: 'mcq', q: 'Comment dit-on « Je suis née en 1998 » ?', options: ['I am born in 1998.', 'I was born in 1998.', 'I born in 1998.', 'I were born in 1998.'], answer: 1, explain: 'La naissance est un événement passé : toujours <b>I was born</b>. <i>I am born</i> est une erreur typique des francophones.' },
    { type: 'gap', q: '— Where ___ you born? — In Montreal.', answers: ['were'], explain: 'Question au passé avec <b>you</b> → <b>were</b> : <i>Where were you born?</i> (Où es-tu né·e ?) Jamais <i>Where are you born?</i>' },
    { type: 'mcq', q: 'Comment dit-on « Tu étais au bureau hier ? »', options: ['Did you be at the office yesterday?', 'Were you at the office yesterday?', 'Was you at the office yesterday?', 'Are you at the office yesterday?'], answer: 1, explain: 'Avec <b>be</b>, pas de <i>did</i> : on inverse → <b>Were you</b>… ? <i>You</i> prend <b>were</b>, jamais <i>was</i>.' },
    { type: 'gap', q: '— Was the flight on time? — No, it ___.', answers: ["wasn't", 'was not'], explain: 'Réponse courte négative : on reprend le sujet <i>it</i> et le verbe <b>was</b> + <i>not</i> → <b>No, it wasn’t.</b>' },
    { type: 'gap', q: 'There ___ (be) a lot of people at the conference yesterday.', answers: ['were'], explain: '<i>A lot of <b>people</b></i> est pluriel → <b>there were</b> (il y avait). <i>Yesterday</i> impose le passé.' },
    { type: 'mcq', q: '— How was your trip to Seoul?<br>— ___', options: ['It was very nice, thanks.', 'By plane.', 'Yes, I was.'], answer: 0, explain: '<b>How was…?</b> demande une impression (« Comment s’est passé… ? ») → <i>It was very nice.</i> <i>By plane</i> répondrait à « Comment es-tu allé·e… ? », et on ne répond pas <i>Yes</i> à une question en <i>How</i>.' },
    { type: 'order', answer: 'Were the clients happy with the presentation?', fr: 'Les clients étaient-ils contents de la présentation ?', explain: 'Question avec <b>be</b> : on inverse → <b>Were</b> + sujet pluriel (<i>the clients</i>) + reste de la phrase.' },
    { type: 'order', answer: "I wasn't at the meeting yesterday.", alts: ["Yesterday I wasn't at the meeting."], fr: 'Je n’étais pas à la réunion hier.', explain: '<b>wasn’t</b> se place juste après le sujet <i>I</i>. Le marqueur de temps <i>yesterday</i> va en fin de phrase (ou au début).' },
    { type: 'listen', accent: 'en-CA', say: "Hi Maria, it's Ken. Sorry, I wasn't at the office yesterday. I was at a conference in Denver.", q: 'Où était Ken hier ?', options: ['Au bureau', 'À une conférence à Denver', 'En réunion avec Maria'], answer: 1, explain: 'Ken dit <i>I <b>wasn’t</b> at the office</i> (je n’étais pas au bureau), puis <i>I <b>was</b> at a conference in Denver</i>.' },
    { type: 'dictation', say: 'There were ten people at the meeting.', answers: ['There were ten people at the meeting', 'There were 10 people at the meeting'], explain: '<i>People</i> est pluriel → <b>there were</b>. « Il y avait dix personnes à la réunion. »' },
    { type: 'mcq', q: 'The sales figures for last quarter ------- better than expected. <small>(style TOEIC)</small>', options: ['was', 'were', 'is', 'be'], answer: 1, explain: 'Le sujet est <i>The sales <b>figures</b></i> (pluriel) et <i>last quarter</i> (le trimestre dernier) indique le passé → <b>were</b>.' },
    { type: 'mcq', q: 'There ------- several complaints about the new software last month. <small>(style TOEIC)</small>', options: ['was', 'were', 'is', 'be'], answer: 1, explain: '<i>Several complaints</i> (plusieurs réclamations) est pluriel et <i>last month</i> indique le passé → <b>there were</b>.' }
  ]
});
