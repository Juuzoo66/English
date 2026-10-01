LE.register({
  id: 'g14',
  kind: 'grammar',
  title: 'In, on, at : le lieu et le temps',
  subtitle: 'Trois petits mots pour dire où et quand : à 9 heures, le lundi, en mai, à la gare, au 3ᵉ étage…',
  level: 'A2',
  minutes: 35,
  goals: [
    'Choisir entre <b>at</b>, <b>on</b> et <b>in</b> pour le <b>temps</b> : <i>at 9, on Monday, in May</i>',
    'Savoir quand on ne met <b>aucune</b> préposition : <i>next week, last Friday, this morning, tomorrow</i>',
    'Choisir la bonne préposition de <b>lieu</b> : <i>at the station, in the office, on the third floor</i>',
    'Repérer ces prépositions dans les Parties 1 et 5 du TOEIC'
  ],
  blocks: [
    { type: 'h', text: 'Pourquoi ces trois petits mots ?' },
    { type: 'p', html: 'En français, on dit « <b>à</b> 9 heures », « <b>à</b> Paris », « <b>le</b> lundi », « <b>en</b> mai », « <b>au</b> troisième étage »… En anglais, trois prépositions font presque tout ce travail : <b>at</b>, <b>on</b> et <b>in</b>. Une <b>préposition</b>, c’est un petit mot qui relie un nom au reste de la phrase (comme « à », « dans », « sur »).' },
    { type: 'p', html: 'Le piège : on ne peut <b>pas</b> traduire mot à mot. « À 9 heures » = <i><b>at</b> 9</i>, mais « à Paris » = <i><b>in</b> Paris</i>. La bonne nouvelle : il y a une logique simple, du plus <b>précis</b> (<b>at</b>) au plus <b>large</b> (<b>in</b>).' },
    { type: 'examples', items: [
      { en: 'The meeting is at 10 a.m.', fr: 'La réunion est à 10 heures.', note: '<i>a.m.</i> = avant midi (le matin) ; <i>p.m.</i> = après midi (l’après-midi et le soir).' },
      { en: 'The office is closed on Sunday.', fr: 'Le bureau est fermé dimanche.' },
      { en: 'My contract ends in December.', fr: 'Mon contrat se termine en décembre.' },
      { en: 'I work in Paris.', fr: 'Je travaille à Paris.' },
      { en: "She's at the train station.", fr: 'Elle est à la gare.' }
    ] },

    { type: 'h', text: 'Le temps : l’entonnoir IN → ON → AT' },
    { type: 'p', html: 'Imagine un <b>entonnoir</b> : en haut, la partie large ; en bas, la partie étroite. <b>In</b> est en haut (les longues périodes : mois, années, saisons), <b>on</b> au milieu (les jours et les dates), <b>at</b> tout en bas (un moment précis : une heure).' },
    { type: 'table', head: ['Préposition', 'Pour…', 'Exemples'], rows: [
      ['<b>in</b> (large)', 'un mois, une année, une saison, un siècle, une partie de la journée', 'in May, in 2027, in (the) summer, in the 21st century, in the morning, in the afternoon, in the evening'],
      ['<b>on</b> (moyen)', 'un jour, une date, un jour + une partie de la journée', 'on Monday, on May 5, on my birthday, on New Year’s Day, on Monday morning, on Friday evening'],
      ['<b>at</b> (précis)', 'une heure, un moment précis', 'at 9 o’clock, at 3:30, at noon (à midi), at midnight (à minuit), at night (la nuit), at lunchtime, at the end of the day']
    ], caption: 'Pose-toi la question : c’est <b>une heure</b> (at), <b>un jour</b> (on) ou <b>une période</b> (in) ?' },
    { type: 'box', style: 'tip', title: 'Astuce mémo : l’entonnoir', html: '<b>IN</b> 2027 → <b>IN</b> May → <b>ON</b> May 5 → <b>ON</b> Monday morning → <b>AT</b> 9:30.<br>Plus tu descends dans l’entonnoir, plus c’est précis. Le mot le plus « pointu », <b>at</b>, est pour l’heure.' },
    { type: 'examples', items: [
      { en: 'The train leaves at 7:45.', fr: 'Le train part à 7 h 45.', note: 'À l’oral : <i>seven forty-five</i>.' },
      { en: "Let's meet at noon.", fr: 'Retrouvons-nous à midi.' },
      { en: 'The conference starts on May 5.', fr: 'La conférence commence le 5 mai.', note: 'À l’oral : <i>on May fifth</i> (US) ou <i>on the fifth of May</i> (UK). On écrit <i>May 5</i>, mais on dit le nombre ordinal (<i>fifth</i>, cinquième).' },
      { en: 'We have a meeting on Monday morning.', fr: 'Nous avons une réunion lundi matin.' },
      { en: 'Our store is very busy in the summer.', fr: 'Notre magasin est très fréquenté en été.' },
      { en: 'I usually read my emails in the morning.', fr: 'Je lis généralement mes e-mails le matin.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : « in the morning », « on Monday morning », « at night »', html: '• On dit <i>in the morning</i>, <i>in the afternoon</i>, <i>in the evening</i>… mais <b>at night</b> (sans <i>the</i>).<br>• Dès qu’on précise le <b>jour</b>, c’est le jour qui compte → <b>on</b> : <span class="ko">in Monday morning</span> → <span class="ok">on Monday morning</span>.<br>• « Le 5 mai » : <span class="ko">in May 5</span> → <span class="ok">on May 5</span> (une date = un jour).' },
    { type: 'box', style: 'tip', title: '« Lundi » ou « le lundi » ?', html: '« Je te vois <b>lundi</b> » (un lundi précis) = <i>See you <b>on Monday</b>.</i><br>« Le bureau est fermé <b>le lundi</b> » (tous les lundis, une habitude) = <i>The office is closed <b>on Mondays</b>.</i> (Avec un <b>s</b> au jour.)' },
    { type: 'box', style: 'info', title: 'Le week-end : américain ou britannique ?', html: 'En anglais américain : <i><b>on</b> the weekend</i> (ou <i>on weekends</i> pour une habitude). En anglais britannique : <i><b>at</b> the weekend</i> (<i>at weekends</i>). Les deux sont corrects ; au TOEIC, tu verras surtout la forme américaine. Même logique pour les fêtes : <i><b>at</b> Christmas</i> (la période de Noël), mais <i><b>on</b> Christmas Day</i> (le jour du 25 décembre).' },

    { type: 'h', text: '« In two weeks » : dans deux semaines' },
    { type: 'p', html: 'Devant une <b>durée</b>, <b>in</b> veut souvent dire <b>« dans »</b> (à partir de maintenant, dans le futur) : <i>in two weeks</i> = dans deux semaines, <i>in ten minutes</i> = dans dix minutes. Ne le confonds pas avec <b>ago</b>, qui regarde vers le passé : <i>two weeks <b>ago</b></i> = il y a deux semaines.' },
    { type: 'examples', items: [
      { en: 'The meeting starts in ten minutes.', fr: 'La réunion commence dans dix minutes.' },
      { en: 'The new office opens in two weeks.', fr: 'Le nouveau bureau ouvre dans deux semaines.' },
      { en: 'Mr. Tanaka will be back in three days.', fr: 'M. Tanaka sera de retour dans trois jours.' },
      { en: 'She can finish the report in two hours.', fr: 'Elle peut terminer le rapport en deux heures.', note: 'Ici, <i>in</i> = « en » : le temps nécessaire pour faire quelque chose.' }
    ] },

    { type: 'h', text: 'Pas de préposition devant next, last, this, every…' },
    { type: 'p', html: 'Devant <b>next</b> (prochain), <b>last</b> (dernier), <b>this</b> (ce, cette) et <b>every</b> (chaque, tous les), ainsi que devant <b>today</b>, <b>tomorrow</b>, <b>yesterday</b> et <b>tonight</b>, on ne met <b>ni at, ni on, ni in</b>. C’est l’erreur n°1 des francophones, qui traduisent « <b>la</b> semaine prochaine » ou « <b>ce</b> matin » mot à mot.' },
    { type: 'table', head: ['Français', 'Faux', 'Correct'], rows: [
      ['la semaine prochaine', '<span class="ko">in next week</span>', '<span class="ok">next week</span>'],
      ['lundi dernier', '<span class="ko">on last Monday</span>', '<span class="ok">last Monday</span>'],
      ['ce matin', '<span class="ko">in this morning</span>', '<span class="ok">this morning</span>'],
      ['tous les vendredis', '<span class="ko">on every Friday</span>', '<span class="ok">every Friday</span>'],
      ['demain après-midi', '<span class="ko">in tomorrow afternoon</span>', '<span class="ok">tomorrow afternoon</span>'],
      ['l’été dernier', '<span class="ko">in last summer</span>', '<span class="ok">last summer</span>']
    ], caption: 'Retiens : <b>next, last, this, every, today, tomorrow, yesterday, tonight</b> → <b>aucune</b> préposition.' },
    { type: 'examples', items: [
      { en: "I'm very busy this afternoon.", fr: 'Je suis très occupée cet après-midi.' },
      { en: 'We have a team meeting every Monday.', fr: 'Nous avons une réunion d’équipe tous les lundis.' },
      { en: 'The new manager arrives next week.', fr: 'Le nouveau directeur arrive la semaine prochaine.' },
      { en: 'See you tomorrow morning!', fr: 'À demain matin !' }
    ] },

    { type: 'h', text: 'Le lieu : at, in, on' },
    { type: 'p', html: 'Pour le lieu, la logique est <b>visuelle</b> : <b>at</b> = un <b>point</b> sur la carte (un endroit où l’on va, où l’on fait quelque chose) ; <b>in</b> = <b>à l’intérieur</b> d’un espace (une pièce, un bâtiment, une ville, un pays) ; <b>on</b> = <b>sur</b> une surface ou une ligne (un mur, un bureau, un étage, un côté, une rue).' },
    { type: 'table', head: ['Préposition', 'Idée', 'Exemples'], rows: [
      ['<b>at</b>', 'un point précis, un lieu d’activité', 'at the station, at the airport, at the front desk (l’accueil), at the door, at work, at home, at the meeting, at 25 Park Street (adresse avec numéro)'],
      ['<b>in</b>', 'à l’intérieur : pièce, bâtiment, ville, pays', 'in the office, in the lobby (le hall), in the conference room, in a drawer (un tiroir), in Paris, in Canada'],
      ['<b>on</b>', 'sur une surface, un étage, un côté, une rue', 'on the wall (au mur), on the desk, on the third floor, on the left / on the right, on Main Street (US)']
    ], caption: '<b>at</b> = un point • <b>in</b> = dans un volume • <b>on</b> = sur une surface.' },
    { type: 'examples', items: [
      { en: "I'm at the station. My train leaves at six.", fr: 'Je suis à la gare. Mon train part à six heures.' },
      { en: 'Please wait in the lobby.', fr: 'Merci de patienter dans le hall.' },
      { en: 'Our office is on the third floor.', fr: 'Notre bureau est au troisième étage.', note: 'Aux États-Unis, le <i>first floor</i> est le rez-de-chaussée. Un <i>third floor</i> américain correspond donc à notre 2ᵉ étage.' },
      { en: 'The calendar is on the wall.', fr: 'Le calendrier est au mur.', note: 'Le français dit « <b>au</b> mur », l’anglais dit « <b>sur</b> le mur » : <b>on</b>.' },
      { en: 'The restrooms are on the left.', fr: 'Les toilettes sont à gauche.' }
    ] },
    { type: 'box', style: 'tip', title: 'At home, at work, at school : sans « the »', html: 'Trois expressions très courantes, <b>sans article</b> : <i>at home</i> (à la maison), <i>at work</i> (au travail), <i>at school</i> (à l’école).<br><i>Ms. Diaz isn’t <b>at work</b> today. She’s <b>at home</b>.</i> (Mme Diaz n’est pas au travail aujourd’hui. Elle est chez elle.)' },

    { type: 'h', text: 'At ou in ? Un point ou l’intérieur' },
    { type: 'p', html: 'Pour un bâtiment, les deux sont parfois possibles, avec une nuance : <i><b>at</b> the hotel</i> = à l’hôtel (le lieu vu comme un point, un rendez-vous) ; <i><b>in</b> the hotel</i> = à l’intérieur du bâtiment. En revanche, pour dire où l’on est, où l’on vit ou travaille dans une <b>ville</b> ou un <b>pays</b>, c’est <b>in</b> : <span class="ko">I live at Paris.</span> → <span class="ok">I live in Paris.</span>' },
    { type: 'p', html: 'Même nuance pour une réunion : <i>He’s <b>in</b> a meeting.</i> = il est en réunion (il est occupé, à l’intérieur) ; <i>See you <b>at</b> the meeting!</i> = on se voit à la réunion (l’événement, le point de rendez-vous).' },
    { type: 'examples', items: [
      { en: "Let's meet at the hotel at eight.", fr: 'Retrouvons-nous à l’hôtel à huit heures.', note: 'Un point de rendez-vous → <b>at</b>.' },
      { en: 'There is a gym in the hotel.', fr: 'Il y a une salle de sport dans l’hôtel.', note: 'À l’intérieur du bâtiment → <b>in</b>.' },
      { en: 'Mr. Nakamura lives in Osaka.', fr: 'M. Nakamura habite à Osaka.' },
      { en: 'The contracts are in the top drawer.', fr: 'Les contrats sont dans le tiroir du haut.' },
      { en: 'We arrive in Chicago at 6 p.m.', fr: 'Nous arrivons à Chicago à 18 heures.', note: '« Arriver à » : <b>arrive in</b> + ville ou pays, <b>arrive at</b> + lieu précis (<i>arrive at the airport</i>). Jamais <span class="ko">arrive to</span>.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : les transports', html: '• <b>on</b> the bus, <b>on</b> the train, <b>on</b> the plane, <b>on</b> the subway (les transports en commun, où l’on peut marcher).<br>• <b>in</b> the car, <b>in</b> a taxi (les petits véhicules, où l’on reste assis).<br>• « En bus, en voiture » (le moyen de transport) = <b>by</b> bus, <b>by</b> car, sans article. Mais « à pied » = <b>on foot</b>.<br><span class="ko">I read the news in the bus.</span> → <span class="ok">I read the news on the bus.</span>' },
    { type: 'dialog', title: 'À l’accueil d’une entreprise', lines: [
      { speaker: 'W', en: 'Good morning. I have an appointment with Mr. Haddad at ten.', fr: 'Bonjour. J’ai rendez-vous avec M. Haddad à dix heures.' },
      { speaker: 'M', en: "Welcome to Norvik Systems. His office is on the fifth floor, but he's in a meeting right now.", fr: 'Bienvenue chez Norvik Systems. Son bureau est au cinquième étage, mais il est en réunion en ce moment.' },
      { speaker: 'W', en: "No problem. I'm a little early.", fr: 'Pas de problème. Je suis un peu en avance.' },
      { speaker: 'M', en: "Please wait here in the lobby. There's a coffee machine on the left.", fr: 'Patientez ici, dans le hall. Il y a une machine à café à gauche.' },
      { speaker: 'W', en: 'Thank you. And where are the elevators?', fr: 'Merci. Et où sont les ascenseurs ?' },
      { speaker: 'M', en: "They're at the end of the hallway, on the right.", fr: 'Ils sont au bout du couloir, à droite.' }
    ] },

    { type: 'h', text: 'Aperçu : by et until' },
    { type: 'p', html: 'Deux autres prépositions de temps reviennent sans cesse au TOEIC. Tu les approfondiras dans la leçon « Les prépositions après verbes, noms et adjectifs » ; retiens déjà la différence : <b>by</b> = <b>au plus tard</b> (une date limite, une <i>deadline</i>) ; <b>until</b> = <b>jusqu’à</b> (l’action continue jusqu’à ce moment, puis s’arrête).' },
    { type: 'examples', items: [
      { en: 'Please send me the report by Friday.', fr: 'Merci de m’envoyer le rapport d’ici vendredi (au plus tard).' },
      { en: 'I need your answer by noon.', fr: 'J’ai besoin de ta réponse d’ici midi (au plus tard).' },
      { en: 'The store is open until 9 p.m.', fr: 'Le magasin est ouvert jusqu’à 21 heures.' },
      { en: 'We work until six on Fridays.', fr: 'Nous travaillons jusqu’à six heures le vendredi.' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 1</b> (photos), les descriptions sont pleines de prépositions de lieu : <i>A painting is hanging <b>on</b> the wall.</i> / <i>Some visitors are standing <b>at</b> the reception desk.</i> / <i>People are sitting <b>in</b> the conference room.</i> Écoute bien la préposition : elle peut changer toute la scène. <i>A man is sitting <b>at</b> the desk.</i> = il est assis <b>à</b> son bureau ; <i>A man is sitting <b>on</b> the desk.</i> = il est assis <b>sur</b> le bureau !<br>En <b>Partie 5</b>, on te demandera de choisir la préposition : <i>The seminar will take place ------- the second floor.</i> → <b>on</b> ; <i>The office closes ------- 6 p.m.</i> → <b>at</b> ; <i>The results will be published ------- July.</i> → <b>in</b>.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• <b>Temps</b> : <b>at</b> + heure (<i>at 9, at noon, at night</i>) ; <b>on</b> + jour ou date (<i>on Monday, on May 5, on Monday morning</i>) ; <b>in</b> + mois, année, saison, partie de la journée (<i>in May, in 2027, in the morning</i>).<br>• <i>in two weeks</i> = <b>dans</b> deux semaines.<br>• <b>Aucune</b> préposition devant <i>next, last, this, every, today, tomorrow, yesterday, tonight</i>.<br>• <b>Lieu</b> : <b>at</b> = un point (<i>at the station, at work, at the front desk</i>) ; <b>in</b> = à l’intérieur (<i>in the office, in Paris</i>) ; <b>on</b> = une surface, un étage, un côté, un transport en commun (<i>on the wall, on the third floor, on the left, on the bus</i>).<br>• Aperçu : <b>by</b> Friday = au plus tard vendredi ; <b>until</b> Friday = jusqu’à vendredi.' }
  ],
  exercises: [
    { type: 'mcq', q: 'The meeting starts ___ 9:30.', options: ['in', 'on', 'at'], answer: 2, explain: '<i>9:30</i> est une <b>heure</b>, un moment précis → <b>at</b>.' },
    { type: 'mcq', q: 'My birthday is ___ July.', options: ['at', 'in', 'on'], answer: 1, explain: 'Un <b>mois</b> (sans jour précis) = une période → <b>in</b> : <i>in July</i>.' },
    { type: 'gap', q: 'I never answer work emails ___ night. (at, on ou in ?)', answers: ['at'], explain: 'Expression fixe : <b>at night</b> (la nuit), sans <i>the</i>. Mais on dit <i>in the morning, in the evening</i>.' },
    { type: 'gap', q: 'We have a team lunch ___ Friday afternoon. (at, on ou in ?)', answers: ['on'], explain: 'Jour + partie de la journée : c’est le <b>jour</b> qui compte → <b>on</b> Friday afternoon. Sans le jour, on dirait <i>in the afternoon</i>.' },
    { type: 'mcq', q: 'Quelle phrase est correcte ?', options: ['See you on next Monday!', 'See you next Monday!', 'See you in next Monday!', 'See you at next Monday!'], answer: 1, explain: 'Devant <b>next</b> (comme devant <i>last, this, every</i>), on ne met <b>aucune</b> préposition : <i>See you next Monday!</i>' },
    { type: 'gap', q: 'The new manager starts ___ two weeks. (at, on ou in ?)', answers: ['in'], explain: '<b>in</b> + durée = « <b>dans</b> » (dans le futur) : <i>in two weeks</i> = dans deux semaines.' },
    { type: 'mcq', q: 'Ms. Laurent lives ___ Toronto.', options: ['at', 'in', 'on'], answer: 1, explain: 'Pour dire dans quelle <b>ville</b> ou quel <b>pays</b> on vit, on utilise <b>in</b> : <i>in Toronto</i>. <span class="ko">at Toronto</span> est une erreur typique des francophones (« à Toronto »).' },
    { type: 'mcq', q: 'Our office is ___ the fifth floor.', options: ['in', 'at', 'on'], answer: 2, explain: 'Un <b>étage</b> se comporte comme une surface → <b>on</b> : <i>on the fifth floor</i> (au cinquième étage).' },
    { type: 'gap', q: 'Sorry, Mr. Obi isn\'t here today. He\'s ___ home. (at, on ou in ?)', answers: ['at'], explain: 'Expression fixe, sans article : <b>at home</b> (à la maison, chez lui). Même chose pour <i>at work</i> et <i>at school</i>.' },
    { type: 'gap', q: 'I often read the news ___ the bus. (at, on ou in ?)', answers: ['on'], explain: 'Transports en commun (bus, train, avion, métro) → <b>on</b> : <i>on the bus</i>. On dit <i>in</i> seulement pour les petits véhicules : <i>in the car, in a taxi</i>.' },
    { type: 'order', answer: 'The conference room is on the second floor.', fr: 'La salle de conférence est au deuxième étage.', explain: 'Sujet (<i>The conference room</i>) + <b>is</b> + lieu. Un étage → <b>on</b> the second floor.' },
    { type: 'order', answer: 'We have a meeting every Monday morning.', alts: ['Every Monday morning we have a meeting.'], fr: 'Nous avons une réunion tous les lundis matin.', explain: 'Pas de préposition devant <b>every</b> : <i>every Monday morning</i>. Le complément de temps se place en fin de phrase (ou au début).' },
    { type: 'listen', accent: 'en-AU', say: 'Hello, this is Karen Mbeki. Your interview is on Thursday at two thirty, in Room 12.', q: 'Quel jour et à quelle heure a lieu l’entretien ?', options: ['Tuesday, 2:30', 'Thursday, 2:30', 'Thursday, 12:30'], answer: 1, explain: '<i>on <b>Thursday</b> at <b>two thirty</b></i> = jeudi à 2 h 30. Attention au piège : <i>12</i> est le numéro de la salle (<i>in Room 12</i>), pas l’heure. <i>Thursday</i> commence par le son « th » (langue entre les dents), <i>Tuesday</i> par un simple « t ».' },
    { type: 'dictation', say: 'My flight leaves at noon on Friday.', answers: ['My flight leaves at noon on Friday'], explain: '<b>at</b> noon (une heure précise : midi) + <b>on</b> Friday (un jour). « Mon vol part vendredi à midi. »' },
    { type: 'mcq', q: 'The annual sales conference takes place ------- March 14. <small>(style TOEIC)</small>', options: ['in', 'at', 'on', 'since'], answer: 2, explain: '<i>March 14</i> est une <b>date</b> (un jour précis) → <b>on</b>. On dirait <i>in March</i> (le mois seul) mais <i>on March 14</i>.' },
    { type: 'mcq', q: 'Please check in ------- the reception desk when you arrive. <small>(style TOEIC)</small>', options: ['on', 'in', 'at', 'of'], answer: 2, explain: 'L’accueil est un <b>point précis</b> où l’on fait quelque chose (s’enregistrer, <i>check in</i>) → <b>at</b> the reception desk (à l’accueil).' }
  ]
});
