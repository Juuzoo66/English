LE.register({
  id: 'g05',
  kind: 'grammar',
  title: 'There is / there are',
  subtitle: 'Dire « il y a » : décrire un bureau, un hôtel, une ville',
  level: 'A1',
  minutes: 30,
  goals: [
    'Dire « il y a » avec <b>there is</b> (singulier) et <b>there are</b> (pluriel)',
    'Faire des phrases négatives et poser des questions : <i>There isn’t…, Is there…?, How many… are there?</i>',
    'Ne plus confondre <b>there’s</b> (il y a) et <b>it’s</b> (c’est, il est)',
    'Reconnaître <i>there was, there were</i> et <i>there will be</i> au passé et au futur'
  ],
  blocks: [
    { type: 'h', text: 'À quoi sert « there is / there are » ?' },
    { type: 'p', html: 'En français, on dit « il y a » pour signaler qu’une chose existe ou se trouve quelque part : « il y a une banque », « il y a trois salles ». En anglais, on utilise <b>there</b> + le verbe <b>be</b> (vu dans la leçon <i>Le verbe « be » au présent</i>). Et comme <b>be</b> s’accorde, il y a deux formes : <b>there is</b> devant un nom au singulier et <b>there are</b> devant un nom au pluriel.' },
    { type: 'examples', items: [
      { en: 'There is a printer in the office.', fr: 'Il y a une imprimante dans le bureau.' },
      { en: 'There are two meeting rooms on this floor.', fr: 'Il y a deux salles de réunion à cet étage.' },
      { en: "There's a café near the hotel.", fr: 'Il y a un café près de l’hôtel.', note: '<i>There’s</i> = <i>there is</i> : c’est la forme la plus courante à l’oral.' },
      { en: 'There are twenty people in my team.', fr: 'Il y a vingt personnes dans mon équipe.' },
      { en: 'There are two train stations in my town.', fr: 'Il y a deux gares dans ma ville.' }
    ] },

    { type: 'h', text: 'La formation' },
    { type: 'p', html: 'Mot à mot, <i>there is</i> veut dire « là est ». Le mot <b>there</b> ne change jamais : c’est <b>be</b> qui change selon le nom qui suit. Au singulier, on contracte très souvent : <b>there’s</b>. Au pluriel, on écrit <b>there are</b> en entier.' },
    { type: 'table', head: ['Forme', 'Singulier', 'Pluriel'], rows: [
      ['Affirmation', 'There <b>is</b> a bank. / There<b>’s</b> a bank.', 'There <b>are</b> two banks.'],
      ['Négation', 'There <b>isn’t</b> a bank. / There’s <b>no</b> bank.', 'There <b>aren’t</b> any banks. / There are <b>no</b> banks.'],
      ['Question', '<b>Is there</b> a bank?', '<b>Are there</b> any banks?'],
      ['Réponse courte', 'Yes, there is. / No, there isn’t.', 'Yes, there are. / No, there aren’t.']
    ], caption: 'Retiens : <b>there is</b> + singulier ; <b>there are</b> + pluriel.' },
    { type: 'box', style: 'tip', title: 'Et avec un nom indénombrable ?', html: 'Les noms indénombrables (ceux qu’on ne peut pas compter : <i>water, coffee, information, money</i>) se comportent comme un singulier : <i>There <b>is</b> some coffee in the kitchen.</i> Tu retrouves ces noms dans la leçon <i>Le pluriel, dénombrables et indénombrables</i>.' },

    { type: 'h', text: 'Singulier ou pluriel ? Regarde le nom qui suit' },
    { type: 'p', html: 'Pour choisir entre <b>is</b> et <b>are</b>, regarde le nom juste après. Quand il y a une liste, on accorde en général avec le <b>premier nom</b> de la liste.' },
    { type: 'examples', items: [
      { en: 'There is a desk and two chairs in the room.', fr: 'Il y a un bureau et deux chaises dans la pièce.', note: 'Premier nom au singulier (<i>a desk</i>) → <b>is</b>.' },
      { en: 'There are two chairs and a desk in the room.', fr: 'Il y a deux chaises et un bureau dans la pièce.', note: 'Premier nom au pluriel (<i>two chairs</i>) → <b>are</b>.' },
      { en: 'There are a lot of people in the lobby.', fr: 'Il y a beaucoup de monde dans le hall.', note: '<i>a lot of</i> + pluriel (<i>people</i>) → <b>are</b>.' },
      { en: 'There is a lot of work today.', fr: 'Il y a beaucoup de travail aujourd’hui.', note: '<i>a lot of</i> + indénombrable (<i>work</i>) → <b>is</b>.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : « il y a » ne change pas… mais « there is » si !', html: 'En français, « il y a » est toujours pareil. En anglais, il faut accorder : <span class="ko">There is three hotels.</span> → <span class="ok">There are three hotels.</span><br>Ne traduis pas non plus « il y a » par <i>it has</i> ou <i>they are</i> : <span class="ko">It has two banks.</span> <span class="ko">They are two banks.</span> → <span class="ok">There are two banks.</span> (<i>there</i> et <i>they’re</i> se prononcent pareil, mais <i>they’re</i> veut dire « ils sont ».)<br><small>À l’oral, tu entendras parfois <i>there’s</i> + pluriel (<i>there’s two banks</i>) : c’est du langage familier, à éviter à l’écrit et au TOEIC.</small>' },

    { type: 'h', text: 'La forme négative' },
    { type: 'p', html: 'Pour dire « il n’y a pas de… », deux solutions : <b>there isn’t a…</b> / <b>there aren’t any…</b> (avec <b>not</b>), ou <b>there’s no…</b> / <b>there are no…</b> (avec <b>no</b>, un peu plus fort, comme « il n’y a aucun… »). Après <b>no</b>, pas d’article : <i>There’s no bank.</i>, jamais <i>no a bank</i>.' },
    { type: 'examples', items: [
      { en: "There isn't a parking lot near the office.", fr: 'Il n’y a pas de parking près du bureau.', note: '<i>parking lot</i> (US) = <i>car park</i> (UK) = un parking.' },
      { en: "There aren't any taxis at the station.", fr: 'Il n’y a pas de taxis à la gare.' },
      { en: "There's no coffee in the kitchen.", fr: 'Il n’y a pas de café dans la cuisine.' },
      { en: 'There are no meetings on Friday.', fr: 'Il n’y a aucune réunion vendredi.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : une seule négation', html: 'En anglais, on ne met qu’<b>une</b> négation : soit <b>not</b>, soit <b>no</b>, jamais les deux.<br><span class="ko">There isn’t no coffee.</span> → <span class="ok">There isn’t any coffee.</span> ou <span class="ok">There’s no coffee.</span>' },

    { type: 'h', text: 'Les questions et les réponses courtes' },
    { type: 'p', html: 'Comme avec <b>be</b>, on inverse : <i>There is…</i> → <b>Is there…?</b> ; <i>There are…</i> → <b>Are there…?</b> Pour demander un nombre, on dit <b>How many</b> + nom au pluriel + <b>are there</b> ? Dans la réponse courte affirmative, on ne contracte pas : <i>Yes, there <b>is</b>.</i> (jamais <i>Yes, there’s.</i>)' },
    { type: 'table', head: ['Question', 'Réponse', 'Français'], rows: [
      ['<b>Is there</b> a gym in the hotel?', 'Yes, there is. / No, there isn’t.', 'Est-ce qu’il y a une salle de sport dans l’hôtel ?'],
      ['<b>Are there</b> any shops near here?', 'Yes, there are. / No, there aren’t.', 'Est-ce qu’il y a des magasins près d’ici ?'],
      ['<b>Is there</b> any milk?', 'Yes, there is. / No, there isn’t.', 'Est-ce qu’il y a du lait ?'],
      ['<b>How many</b> rooms <b>are there</b>?', 'There are fifty. / Fifty.', 'Combien de chambres y a-t-il ?']
    ], caption: 'Ordre de la question : <b>How many + nom au pluriel + are there</b> ? Avec un nom indénombrable, on dit <b>How much</b> : <i>How much coffee is there?</i> (Combien de café y a-t-il ?)' },
    { type: 'examples', items: [
      { en: 'Is there a bus to the airport? — Yes, there is.', fr: 'Est-ce qu’il y a un bus pour l’aéroport ? — Oui.' },
      { en: "Are there any questions? — No, there aren't.", fr: 'Est-ce qu’il y a des questions ? — Non.' },
      { en: 'How many floors are there in this building? — There are twelve.', fr: 'Combien d’étages y a-t-il dans ce bâtiment ? — Il y en a douze.' },
      { en: "Is there Wi-Fi in the rooms? — Yes, there is. It's free.", fr: 'Il y a le wifi dans les chambres ? — Oui. C’est gratuit.', accent: 'en-GB' }
    ] },
    { type: 'dialog', title: 'À la réception de l’hôtel', lines: [
      { speaker: 'M', en: 'Good evening. Is there a restaurant in the hotel?', fr: 'Bonsoir. Est-ce qu’il y a un restaurant dans l’hôtel ?' },
      { speaker: 'W', en: "Yes, there is. It's next to the lobby.", fr: 'Oui. Il est à côté du hall.' },
      { speaker: 'M', en: 'Great. Are there any shops near here?', fr: 'Super. Est-ce qu’il y a des magasins près d’ici ?' },
      { speaker: 'W', en: "There's a small supermarket across the street, but there aren't any big stores.", fr: 'Il y a une petite supérette en face, mais il n’y a pas de grands magasins.' },
      { speaker: 'M', en: 'And is there a bus to the airport?', fr: 'Et est-ce qu’il y a un bus pour l’aéroport ?' },
      { speaker: 'W', en: "No, there isn't, but there are always taxis in front of the hotel.", fr: 'Non, mais il y a toujours des taxis devant l’hôtel.' }
    ] },

    { type: 'h', text: 'Some et any : une première approche' },
    { type: 'p', html: 'Devant un nom au pluriel ou un indénombrable, on ajoute souvent <b>some</b> (des, quelques, du) dans les phrases affirmatives, et <b>any</b> dans les négations et les questions. On peut aussi ne rien mettre : <i>There are chairs in the room.</i> Tu approfondiras tout cela dans la leçon <i>Les quantifieurs : some, any, much, many, few, little…</i>' },
    { type: 'table', head: ['Nom', 'Affirmation', 'Négation', 'Question'], rows: [
      ['Pluriel', 'There are <b>some</b> chairs.', 'There aren’t <b>any</b> chairs.', 'Are there <b>any</b> chairs?'],
      ['Indénombrable', 'There is <b>some</b> water.', 'There isn’t <b>any</b> water.', 'Is there <b>any</b> water?']
    ], caption: '<b>some</b> → phrase affirmative ; <b>any</b> → négation et question.' },

    { type: 'h', text: 'There’s ou it’s ?' },
    { type: 'p', html: 'En français, on dit souvent « il y a… », puis « il est… » ou « c’est… ». L’anglais fait pareil : <b>there’s</b> présente une chose pour la <b>première fois</b> (elle existe, elle est là) ; ensuite, on en parle avec <b>it’s</b> (singulier) ou <b>they’re</b> (pluriel) pour la décrire ou la situer.' },
    { type: 'examples', items: [
      { en: "There's a café on Main Street. It's near the station.", fr: 'Il y a un café dans Main Street. Il est près de la gare.' },
      { en: "There's a message for you. It's from Mr. Tanaka.", fr: 'Il y a un message pour toi. C’est de la part de M. Tanaka.' },
      { en: "There's a problem with the printer. It's out of paper.", fr: 'Il y a un problème avec l’imprimante. Elle n’a plus de papier.' },
      { en: "There are two hotels near the airport. They're both very expensive.", fr: 'Il y a deux hôtels près de l’aéroport. Ils sont tous les deux très chers.', note: 'Au pluriel : <i>there are</i>, puis <b>they’re</b>.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : « il y a » + une durée', html: 'Quand « il y a » parle du passé (« il y a deux ans »), l’anglais n’utilise pas <i>there is</i>, mais <b>ago</b>, placé après la durée :<br><span class="ko">There is two years, I started.</span> → <span class="ok">I started two years <b>ago</b>.</span> (J’ai commencé il y a deux ans.)<br>Tu verras cette structure avec le prétérit (leçon <i>Le prétérit des verbes réguliers</i>).' },

    { type: 'h', text: 'Au passé et au futur : un aperçu' },
    { type: 'p', html: '<b>There</b> ne bouge pas : seul <b>be</b> change de temps. Au passé : <b>there was</b> (singulier) / <b>there were</b> (pluriel). Au futur : <b>there will be</b> (singulier et pluriel). Tu les étudieras plus tard (leçons <i>Le prétérit de « be » : was et were</i> et <i>Le futur : will, be going to et présent continu</i>), mais apprends déjà à les reconnaître.' },
    { type: 'examples', items: [
      { en: 'There was a meeting yesterday.', fr: 'Il y avait une réunion hier.' },
      { en: 'There were ten people at the meeting.', fr: 'Il y avait dix personnes à la réunion.' },
      { en: 'There will be a party on Friday.', fr: 'Il y aura une fête vendredi.' },
      { en: "There won't be a meeting next week.", fr: 'Il n’y aura pas de réunion la semaine prochaine.', note: '<i>won’t</i> = <i>will not</i>.' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 1</b> (photos), beaucoup de phrases commencent par <i>There is / There are</i> : <i>There are some chairs around a table.</i> <i>There’s a lamp on the desk.</i> Vérifie bien le <b>nombre</b> et le <b>lieu</b> : s’il n’y a qu’une chaise sur la photo, <i>There are some chairs…</i> est faux ! En <b>Partie 5</b>, on te demande souvent de choisir entre <i>is</i> et <i>are</i> : <i>There ------- a new printer on the second floor.</i> → <b>is</b>. Et en <b>Partie 7</b>, les annonces utilisent <i>There will be…</i> : <i>There will be a fire drill on Tuesday.</i> (Il y aura un exercice d’évacuation mardi.)' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• <b>There is</b> (<i>there’s</i>) + singulier ou indénombrable ; <b>there are</b> + pluriel.<br>• Négation : <i>there isn’t / there aren’t any</i> ou <i>there’s no / there are no</i> (une seule négation !).<br>• Question : <i>Is there…? Are there…? How many + pluriel + are there?</i> — Réponse : <i>Yes, there is. / No, there aren’t.</i><br>• <b>There’s</b> présente une chose ; <b>it’s</b> la décrit ensuite.<br>• Passé : <i>there was / there were</i> ; futur : <i>there will be</i>. « Il y a deux ans » = <i>two years <b>ago</b></i>.' }
  ],
  exercises: [
    { type: 'mcq', q: 'There ___ a printer in my office.', options: ['is', 'are', 'am'], answer: 0, explain: '<i>a printer</i> est au singulier → <b>there is</b>.' },
    { type: 'gap', q: 'Our new office is great: there ___ three meeting rooms on this floor.', answers: ['are'], explain: '<i>three meeting rooms</i> est au pluriel → <b>there are</b>.' },
    { type: 'gap', q: 'Look, there ___ some water on the table.', answers: ['is', "'s"], explain: '<i>water</i> est indénombrable : il se comporte comme un singulier → <b>there is</b> (<i>there’s</i>).' },
    { type: 'mcq', q: 'Comment dit-on « Il y a deux ordinateurs dans le bureau » ?', options: ['There is two computers in the office.', 'There are two computers in the office.', 'They are two computers in the office.', 'It has two computers in the office.'], answer: 1, explain: '« Il y a » + pluriel → <b>there are</b>. <i>They are</i> veut dire « ils sont » (sa forme courte <i>they’re</i> se prononce comme <i>there</i>, mais le sens est différent) et <i>it has</i> veut dire « il a ».' },
    { type: 'gap', q: 'The office is nice, but there ___ (not) a parking lot near it.', answers: ["isn't", 'is not', "'s not"], explain: '<i>a parking lot</i> est au singulier → <b>there isn’t</b> (= <i>there is not</i>, ou <i>there’s not</i>).' },
    { type: 'gap', q: 'There ___ (not) any taxis at the station right now.', answers: ["aren't", 'are not'], explain: '<i>taxis</i> est au pluriel → <b>there aren’t</b> (avec <i>any</i> dans une phrase négative).' },
    { type: 'mcq', q: '— Is there a gym in the hotel? — Yes, ___.', options: ["there's", 'there is', 'it is', 'there are'], answer: 1, explain: 'Réponse courte affirmative : on reprend <b>there is</b> sans contracter. « Yes, there’s. » est impossible.' },
    { type: 'order', answer: 'Is there a bus to the airport?', fr: 'Est-ce qu’il y a un bus pour l’aéroport ?', explain: 'Question : on inverse → <b>Is there</b> + <i>a bus</i> + le reste de la phrase.' },
    { type: 'mcq', q: 'How many desks ___ in the office?', options: ['there are', 'are there', 'is there', 'there is'], answer: 1, explain: 'Question avec <i>How many</i> + nom au pluriel : on inverse et on met le pluriel → <b>How many desks are there…?</b>' },
    { type: 'mcq', q: "There's a new café on Park Street. ___ very popular.", options: ["It's", "There's", 'There are', "They're"], answer: 0, explain: 'Le café a déjà été présenté avec <i>there’s</i> ; pour le décrire ensuite, on utilise <b>it’s</b> (= le café est très populaire).' },
    { type: 'gap', q: '— Are there any questions? — No, there ___.', answers: ["aren't", 'are not'], explain: 'La question est au pluriel (<i>Are there…?</i>) → réponse courte négative : <b>No, there aren’t.</b>' },
    { type: 'order', answer: "There aren't any shops near the hotel.", alts: ["Near the hotel there aren't any shops."], fr: 'Il n’y a pas de magasins près de l’hôtel.', explain: '<b>There aren’t any</b> + nom au pluriel, puis le lieu (<i>near the hotel</i>).' },
    { type: 'listen', accent: 'en-GB', say: "Welcome to the Blue Harbor Hotel. There are eighty rooms, and there's a restaurant on the top floor. There isn't a swimming pool, but there's a small gym.", q: 'Qu’as-tu entendu sur l’hôtel ?', options: ['Il y a 18 chambres, un restaurant et une piscine.', 'Il y a 80 chambres, un restaurant et une petite salle de sport, mais pas de piscine.', 'Il y a 80 chambres et une piscine, mais pas de restaurant.'], answer: 1, explain: '<i>There are <b>eighty</b> rooms</i> (80, accent sur la 1ʳᵉ syllabe), <i>there’s a restaurant</i>, <i>there <b>isn’t</b> a swimming pool</i> (pas de piscine) et <i>there’s a small gym</i>.' },
    { type: 'dictation', say: "There's no coffee in the kitchen.", answers: ["There's no coffee in the kitchen", 'There is no coffee in the kitchen'], explain: '<i>There’s no</i> = <i>there is no</i> : « Il n’y a pas de café dans la cuisine. » Après <b>no</b>, pas d’article.' },
    { type: 'mcq', q: 'There ------- several restaurants near the convention center. <small>(style TOEIC)</small>', options: ['is', 'are', 'has', 'be'], answer: 1, explain: '<i>several restaurants</i> (plusieurs restaurants) est au pluriel → <b>there are</b>. <i>Has</i> est impossible : « il y a » ne se traduit jamais par <i>has</i>.' },
    { type: 'mcq', q: 'There ------- a staff meeting in Room 4 yesterday afternoon. <small>(style TOEIC)</small>', options: ['is', 'was', 'were', 'will be'], answer: 1, explain: '<i>yesterday</i> → passé ; <i>a staff meeting</i> est au singulier → <b>there was</b>. <i>Were</i> s’emploie avec un pluriel.' }
  ]
});
