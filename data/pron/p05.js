LE.register({
  id: 'p05',
  kind: 'pron',
  title: 'Les terminaisons -s et -ed à l’oral',
  subtitle: 'Entendre et prononcer les petites terminaisons qui changent tout : pluriel, 3ᵉ personne et passé',
  level: 'A2',
  minutes: 35,
  goals: [
    'Prononcer le <b>-s</b> final de trois façons : /s/, /z/ ou /ɪz/',
    'Prononcer le <b>-ed</b> du passé de trois façons : /t/, /d/ ou /ɪd/',
    'Ne plus dire « work-ède » : savoir quand une terminaison ajoute une syllabe',
    'Repérer à l’oral un pluriel ou un passé grâce au contexte, comme au TOEIC'
  ],
  blocks: [
    { type: 'h', text: 'Pourquoi ces petites terminaisons comptent' },
    { type: 'p', html: 'En français, on écrit beaucoup de lettres qu’on ne prononce pas : le <b>-s</b> de « les livres », le <b>-ent</b> de « ils parlent ». Résultat : ton oreille a pris l’habitude d’ignorer la fin des mots. En anglais, c’est l’inverse : le <b>-s</b> et le <b>-ed</b> se prononcent <b>toujours</b>, et ils portent une information essentielle : <b>un ou plusieurs ?</b> <b>présent ou passé ?</b>' },
    { type: 'examples', items: [
      { en: 'I work in Lyon.', fr: 'Je travaille à Lyon.' },
      { en: 'I worked in Lyon.', fr: 'J’ai travaillé à Lyon.', note: 'Un seul petit son /t/ fait passer toute la phrase au passé.' },
      { en: 'The client calls every day.', fr: 'Le client appelle tous les jours.' },
      { en: 'The clients called yesterday.', fr: 'Les clients ont appelé hier.', note: 'Deux terminaisons : <i>clients</i> (pluriel) et <i>called</i> (passé).' }
    ] },
    { type: 'box', style: 'info', title: 'Comment lire les sons entre barres', html: 'Les barres obliques <b>/…/</b> indiquent un <b>son</b>, pas une lettre.<br>• /s/ = le s de « <b>s</b>ac » ; /z/ = le z de « <b>z</b>éro » (ou le s de « ro<b>s</b>e ») ; /ɪz/ = « iz », avec un i très court.<br>• /t/ = le t de « <b>t</b>asse » ; /d/ = le d de « <b>d</b>os » ; /ɪd/ = « id », avec un i très court.' },

    { type: 'h', text: 'La clé de tout : son sourd ou son sonore ?' },
    { type: 'p', html: 'Pose deux doigts sur ta gorge et dis « ssss », puis « zzzz ». Avec « zzzz », ça vibre : c’est un son <b>sonore</b> (tes cordes vocales travaillent). Avec « ssss », rien ne vibre : c’est un son <b>sourd</b>. Toutes les voyelles sont sonores. C’est le <b>dernier son</b> du mot (sourd ou sonore) qui décide de la prononciation du -s et du -ed.' },
    { type: 'table', head: ['Sons sourds (pas de vibration)', 'Sons sonores (ça vibre)'], rows: [
      ['/p/ : sto<b>p</b>, hel<b>p</b>', '/b/ : jo<b>b</b>, clu<b>b</b>'],
      ['/t/ : mee<b>t</b>, repor<b>t</b>', '/d/ : nee<b>d</b>, car<b>d</b>'],
      ['/k/ : wor<b>k</b>, boo<b>k</b>', '/g/ : ba<b>g</b>, blo<b>g</b>'],
      ['/f/ : lau<b>gh</b>, che<b>f</b>', '/v/ : li<b>ve</b>, arri<b>ve</b>'],
      ['/θ/ (le th de <i>think</i>) : mon<b>th</b>', '/ð/ (le th de <i>this</i>) : brea<b>the</b>'],
      ['/s/ : cla<b>ss</b>, offi<b>ce</b>', '/z/ : si<b>ze</b>, clo<b>se</b> (fermer)'],
      ['/ʃ/ (le ch de « chat ») : fini<b>sh</b>, wa<b>sh</b>', '/ʒ/ (le j de « je ») : gara<b>ge</b>'],
      ['/tʃ/ (« tch ») : wa<b>tch</b>, lun<b>ch</b>', '/dʒ/ (« dj ») : pa<b>ge</b>, chan<b>ge</b>'],
      ['(pas d’équivalent sourd)', '/l/, /m/, /n/, /r/ : ca<b>ll</b>, roo<b>m</b>, pla<b>n</b>, orde<b>r</b>'],
      ['(pas d’équivalent sourd)', 'toutes les voyelles : pl<b>ay</b>, g<b>o</b>, f<b>ee</b>, b<b>uy</b>']
    ], caption: 'Ce qui compte, c’est le dernier <b>son</b>, pas la dernière lettre : <i>make</i> finit par la lettre e, mais par le son /k/.' },

    { type: 'h', text: 'Le -s final : /s/, /z/ ou /ɪz/' },
    { type: 'p', html: 'Le même <b>-s</b> apparaît dans trois cas : le <b>pluriel</b> (<i>books</i>), la <b>3ᵉ personne</b> du présent simple (<i>she works</i>) et le <b>génitif</b>, c’est-à-dire le ’s de possession (<i>Mark’s car</i>, la voiture de Mark). Dans les trois cas, la règle de prononciation est exactement la même.' },
    { type: 'table', head: ['Le mot se termine par…', 'Le -s se prononce', 'Exemples'], rows: [
      ['un son sourd : /p/, /t/, /k/, /f/, /θ/', '<b>/s/</b> (comme « sac »)', 'stops, cats, works, books, laughs, months'],
      ['un son sonore : une voyelle, /b/, /d/, /g/, /v/, /l/, /m/, /n/, /r/…', '<b>/z/</b> (comme « zéro »)', 'plays, calls, jobs, needs, lives, rooms'],
      ['un son qui siffle ou qui chuinte : /s/, /z/, /ʃ/, /ʒ/, /tʃ/, /dʒ/ (lettres s, ss, ce, se, z, sh, ch, ge, x)', '<b>/ɪz/</b> : une syllabe en plus !', 'watches, offices, pages, boxes, buses, finishes']
    ], caption: 'Seul /ɪz/ ajoute une syllabe : <i>page</i> (1 syllabe) → <i>pa-ges</i> (2 syllabes). C’est logique : essaie de dire « watchs » d’un seul coup, c’est impossible !' },
    { type: 'pairs', items: [
      { a: 'book', b: 'books', note: '/s/ : pas de syllabe en plus' },
      { a: 'job', b: 'jobs', note: '/z/ : ça vibre' },
      { a: 'play', b: 'plays', note: '/z/ : après une voyelle' },
      { a: 'office', b: 'offices', note: '/ɪz/ : 2 syllabes → 3 syllabes' },
      { a: 'watch', b: 'watches', note: '/ɪz/ : 1 syllabe → 2 syllabes' }
    ] },
    { type: 'examples', items: [
      { en: 'Mei works in the sales department.', fr: 'Mei travaille au service des ventes.', note: '<i>works</i> → /s/ (après le son /k/).' },
      { en: 'Diego calls his clients every morning.', fr: 'Diego appelle ses clients tous les matins.', note: '<i>calls</i> → /z/ ; <i>clients</i> → /s/ (après le son /t/).' },
      { en: 'Ms. Okafor manages three offices.', fr: 'Mme Okafor gère trois bureaux.', note: '<i>manages</i> et <i>offices</i> → /ɪz/ : une syllabe de plus chacun.' },
      { en: 'The printer needs new cartridges.', fr: 'L’imprimante a besoin de nouvelles cartouches.', note: '<i>needs</i> → /z/ ; <i>cartridges</i> → /ɪz/.' },
      { en: 'Can you check the boxes in the storage room?', fr: 'Tu peux vérifier les cartons dans la réserve ?', note: 'Le x de <i>box</i> se prononce /ks/, donc <i>boxes</i> → « box-iz ».' }
    ] },
    { type: 'box', style: 'tip', title: 'Le ’s de possession suit la même règle', html: 'Le génitif se prononce exactement comme le pluriel : <i>Mark’s desk</i> → /s/, <i>Kenji’s laptop</i> → /z/, <i>Grace’s office</i> et <i>the boss’s idea</i> → /ɪz/ (une syllabe en plus). C’est aussi vrai pour les contractions : <i>it’s</i> → /s/, <i>he’s</i>, <i>she’s</i> → /z/.' },
    { type: 'examples', items: [
      { en: "This is Kenji's laptop.", fr: 'C’est l’ordinateur portable de Kenji.', note: '/z/ : <i>Kenji</i> finit par une voyelle.' },
      { en: "Mark's flight is at six.", fr: 'Le vol de Mark est à six heures.', note: '/s/ : <i>Mark</i> finit par le son /k/.' },
      { en: "Grace's office is next to the kitchen.", fr: 'Le bureau de Grace est à côté de la cuisine.', note: '/ɪz/ : « Grei-siz », deux syllabes.' },
      { en: "The boss's assistant called this morning.", fr: 'L’assistant du patron a appelé ce matin.', note: '/ɪz/ : <i>boss’s</i> se dit « bo-siz ».' }
    ] },

    { type: 'h', text: 'Le -ed du passé : /t/, /d/ ou /ɪd/' },
    { type: 'p', html: 'Le <b>-ed</b> des verbes réguliers, au prétérit (le temps du passé : <i>I worked</i>, j’ai travaillé) comme au participe passé (la forme utilisée après <i>have</i> : <i>I have worked</i>), se prononce lui aussi de trois façons (voir aussi la leçon « Le prétérit des verbes réguliers »). La règle ressemble beaucoup à celle du -s.' },
    { type: 'table', head: ['Le verbe se termine par…', 'Le -ed se prononce', 'Exemples'], rows: [
      ['un son sourd (sauf /t/) : /p/, /k/, /f/, /s/, /ʃ/, /tʃ/', '<b>/t/</b>', 'stopped, worked, laughed, asked, finished, watched'],
      ['un son sonore (sauf /d/) : une voyelle, /b/, /g/, /v/, /z/, /dʒ/, /l/, /m/, /n/, /r/', '<b>/d/</b>', 'played, called, arrived, cleaned, changed, ordered'],
      ['<b>uniquement</b> le son /t/ ou le son /d/', '<b>/ɪd/</b> : une syllabe en plus !', 'wanted, needed, started, decided, visited, attended']
    ], caption: 'Seul /ɪd/ ajoute une syllabe : <i>worked</i> = 1 syllabe, <i>played</i> = 1 syllabe, mais <i>wanted</i> = 2 syllabes (want-ed).' },
    { type: 'box', style: 'warn', title: 'Le piège n°1 des francophones : « work-ède »', html: 'Comme le -ed s’écrit avec un e, on a envie de dire « work-ède », « play-ède », « watch-ède ». <b>C’est faux !</b> Dans la grande majorité des cas, le -ed ne crée <b>aucune</b> syllabe : <i>worked</i> se dit « workt », <i>played</i> se dit « pleïd », <i>watched</i> se dit « watcht ». On ajoute « id » <b>seulement</b> après un t ou un d : <i>wanted</i>, <i>needed</i>.<br><span class="ko">work-ède</span> → <span class="ok">workt</span> ; <span class="ko">arriv-ède</span> → <span class="ok">arrivd</span>' },
    { type: 'pairs', items: [
      { a: 'I work late.', b: 'I worked late.', note: '/t/ : très discret devant <i>late</i>' },
      { a: 'They call the bank.', b: 'They called the bank.', note: '/d/' },
      { a: 'We need help.', b: 'We needed help.', note: '/ɪd/ : une syllabe de plus, facile à entendre' },
      { a: 'I start at nine.', b: 'I started at nine.', note: '/ɪd/ : « star-tid »' },
      { a: 'We finish at six.', b: 'We finished at six.', note: '/t/ lié à <i>at</i> : « fi-ni-shtat six »' }
    ] },
    { type: 'examples', items: [
      { en: 'Aisha booked a hotel room.', fr: 'Aisha a réservé une chambre d’hôtel.', note: '<i>booked</i> → /t/ : « boukt », une seule syllabe.' },
      { en: 'The train arrived on time.', fr: 'Le train est arrivé à l’heure.', note: '<i>arrived</i> → /d/ : « a-raïvd ».' },
      { en: 'We decided to hire two engineers.', fr: 'Nous avons décidé d’embaucher deux ingénieurs.', note: '<i>decided</i> → /ɪd/ : « di-saï-did », 3 syllabes.' },
      { en: 'Carlos finished the report and emailed it to the team.', fr: 'Carlos a terminé le rapport et l’a envoyé par e-mail à l’équipe.', note: '<i>finished</i> → /t/ ; <i>emailed</i> → /d/.' },
      { en: 'The meeting started late.', fr: 'La réunion a commencé en retard.', note: '<i>started</i> → /ɪd/ : « star-tid ».' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège inverse : ne pas avaler /ɪz/ et /ɪd/', html: 'Quand la terminaison ajoute une syllabe, il faut la faire entendre ! <i>price</i> et <i>prices</i> ne se prononcent pas pareil : « praïss » / « praï-siz ». De même, <i>need</i> et <i>needed</i> : « niid » / « nii-did ». Si tu avales cette syllabe, ton interlocuteur entendra un singulier ou un présent.' },
    { type: 'dialog', title: 'Retour de voyage d’affaires', lines: [
      { speaker: 'W', en: 'Good morning, Tomás! How was your trip to Chicago?', fr: 'Bonjour, Tomás ! Comment s’est passé ton voyage à Chicago ?' },
      { speaker: 'M', en: 'Great, thanks. I visited two factories and talked to a lot of suppliers.', fr: 'Très bien, merci. J’ai visité deux usines et j’ai parlé avec beaucoup de fournisseurs.' },
      { speaker: 'W', en: 'Did everything go well?', fr: 'Tout s’est bien passé ?' },
      { speaker: 'M', en: 'Yes. They answered all my questions and showed me their new products.', fr: 'Oui. Ils ont répondu à toutes mes questions et m’ont montré leurs nouveaux produits.' },
      { speaker: 'W', en: 'Excellent. Mr. Chen called this morning. He needs the prices by Friday.', fr: 'Excellent. M. Chen a appelé ce matin. Il a besoin des prix d’ici vendredi.' },
      { speaker: 'M', en: 'No problem. I finished the report on the plane.', fr: 'Pas de problème. J’ai terminé le rapport dans l’avion.' }
    ] },

    { type: 'h', text: 'À l’oral rapide, le -ed disparaît presque' },
    { type: 'p', html: 'Dans une phrase naturelle, le /t/ ou le /d/ du -ed se colle au mot suivant. <b>Devant une consonne</b>, il devient presque inaudible : <i>I worked late</i> ressemble beaucoup à <i>I work late</i>. <b>Devant une voyelle</b>, au contraire, il s’entend bien grâce à la liaison : <i>I worked all day</i> → « I work-tall day ».' },
    { type: 'box', style: 'tip', title: 'Écoute le contexte, pas seulement la terminaison', html: 'Quand tu n’es pas sûre d’avoir entendu le -ed, cherche les autres indices du passé dans la phrase : <b>yesterday</b>, <b>last week</b>, <b>two days ago</b>, <b>this morning</b>, un verbe irrégulier (<i>went, saw, had</i>) ou un autre verbe au passé. Pour le pluriel, écoute <b>these / those</b>, <b>many</b>, un nombre, ou le verbe (<i>are</i> au lieu de <i>is</i>).' },
    { type: 'examples', items: [
      { en: 'I worked late yesterday.', fr: 'J’ai travaillé tard hier.', note: 'Le /t/ est presque avalé devant <i>late</i>, mais <i>yesterday</i> confirme le passé.' },
      { en: 'We talked to them last week.', fr: 'Nous leur avons parlé la semaine dernière.', note: '<i>talked</i> → /t/, et <i>last week</i> = passé.' },
      { en: 'The packages are in the lobby.', fr: 'Les colis sont dans le hall.', note: '<i>are</i> confirme le pluriel de <i>packages</i> (/ɪz/).' },
      { en: 'She printed the tickets two hours ago.', fr: 'Elle a imprimé les billets il y a deux heures.', note: '<i>printed</i> → /ɪd/, et <i>ago</i> confirme le passé.' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Parties 2 et 3</b>, tout peut dépendre d’un petit /t/ : <i>I <b>checked</b> the schedule</i> (c’est fait) n’a pas le même sens que <i>I <b>check</b> the schedule</i> (d’habitude). Les questions du type <i>What did the man do?</i> ou <i>What will the woman do?</i> t’obligent à savoir si l’action est passée ou future. En <b>Partie 1</b>, les photos montrent souvent plusieurs objets : dans <i>Some boxes are stacked on the floor</i>, le /ɪz/ de <i>boxes</i> et le verbe <i>are</i> te disent qu’il y en a plusieurs. Et bien prononcer ces terminaisons t’aide à les <b>reconnaître</b> : on entend mieux ce qu’on sait dire.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• <b>-s</b> : /s/ après un son sourd (<i>works</i>), /z/ après un son sonore (<i>plays</i>), /ɪz/ après les sons qui sifflent ou chuintent : s, z, sh, ch, j (« dj » de <i>page</i>), x (<i>watches, pages, boxes</i>).<br>• <b>-ed</b> : /t/ après un son sourd (<i>worked</i>), /d/ après un son sonore (<i>played</i>), /ɪd/ <b>seulement</b> après t et d (<i>wanted, needed</i>).<br>• Seuls /ɪz/ et /ɪd/ ajoutent une syllabe. Jamais de « work-ède » !<br>• À l’oral rapide, aide-toi du contexte : <i>yesterday, last week, these, are</i>…' }
  ],
  exercises: [
    { type: 'mcq', q: 'Combien de syllabes y a-t-il dans <b>worked</b> ?', options: ['1', '2', '3'], answer: 0, explain: '<i>worked</i> se dit « workt » : après le son sourd /k/, le -ed se prononce /t/ et n’ajoute <b>aucune</b> syllabe. « Work-ède » est l’erreur typique des francophones.' },
    { type: 'mcq', q: 'Comment se prononce le -s de <b>books</b> ?', options: ['/s/', '/z/', '/ɪz/'], answer: 0, explain: '<i>book</i> se termine par le son /k/, un son sourd → le -s se prononce /s/.' },
    { type: 'mcq', q: 'Comment se prononce le -s de <b>calls</b> ?', options: ['/s/', '/z/', '/ɪz/'], answer: 1, explain: '<i>call</i> se termine par le son /l/, un son sonore → le -s se prononce /z/.' },
    { type: 'mcq', q: 'Comment se prononce la terminaison de <b>offices</b> ?', options: ['/s/', '/z/', '/ɪz/'], answer: 2, explain: '<i>office</i> se termine par le son /s/ (le e final est muet) → /ɪz/, avec une syllabe en plus : of-fi-ces.' },
    { type: 'mcq', q: 'Dans quel mot le -s se prononce-t-il /ɪz/ (avec une syllabe en plus) ?', options: ['desks', 'pages', 'emails', 'laptops'], answer: 1, explain: '<i>page</i> se termine par le son /dʒ/ (« dj ») → <i>pa-ges</i>. <i>desks</i> et <i>laptops</i> se terminent en /s/, <i>emails</i> en /z/.' },
    { type: 'mcq', q: 'Comment se prononce le ’s de <b>Grace’s</b> dans <i>Grace’s office</i> ?', options: ['/s/ (1 syllabe)', '/z/ (1 syllabe)', '/ɪz/ (2 syllabes)'], answer: 2, explain: 'Le ’s de possession suit la règle du pluriel : <i>Grace</i> se termine par le son /s/ → /ɪz/, « Grei-siz ».' },
    { type: 'mcq', q: 'Dans quelle liste <b>tous</b> les verbes se terminent-ils par le son /t/ ?', options: ['worked, stopped, finished', 'played, called, cleaned', 'wanted, needed, decided', 'asked, arrived, started'], answer: 0, explain: 'Après les sons sourds /k/, /p/, /ʃ/, le -ed se prononce /t/. La 2ᵉ liste est en /d/, la 3ᵉ en /ɪd/, et la 4ᵉ mélange les trois sons.' },
    { type: 'mcq', q: 'Quel verbe au passé a une syllabe <b>de plus</b> que sa forme de base ?', options: ['walked', 'decided', 'opened', 'watched'], answer: 1, explain: '<i>decide</i> se termine par le son /d/ → <i>decided</i> se prononce avec /ɪd/ : « di-saï-did » (3 syllabes au lieu de 2). Les autres ne gagnent aucune syllabe : « walkt », « o-pend », « watcht ».' },
    { type: 'gap', q: 'Le mot <b>fixed</b> (réparé, au passé) se prononce en ___ syllabe(s). <small>(écris un chiffre)</small>', answers: ['1', 'one', 'une', 'un'], explain: '<i>fix</i> se termine par le son /ks/ (sourd) → -ed = /t/ : « fikst », une seule syllabe. Le x donne /ɪz/ au -s (<i>fixes</i>), mais jamais /ɪd/ au -ed.' },
    { type: 'listen', say: 'She asked a question.', q: 'Qu’as-tu entendu ?', options: ['She asks a question.', 'She asked a question.', 'She asked questions.'], answer: 1, explain: 'On entend « ask-tə question » : le /t/ de <i>asked</i> se lie au <i>a</i> qui suit. Avec <i>asks</i>, on entendrait un /s/ : « ask-sə question ». Et <i>a question</i> est au singulier.' },
    { type: 'listen', say: 'We needed more chairs for the meeting.', q: 'Le verbe est-il au présent ou au passé ?', options: ['Au présent : <i>We need…</i>', 'Au passé : <i>We needed…</i>'], answer: 1, explain: '<i>need</i> se termine par le son /d/ → <i>needed</i> se prononce avec /ɪd/ : « nii-did ». Cette syllabe en plus s’entend bien.' },
    { type: 'listen', say: 'I worked late yesterday.', q: 'Le verbe est-il au présent ou au passé ?', options: ['Au présent : <i>I work late…</i>', 'Au passé : <i>I worked late…</i>'], answer: 1, explain: 'Devant le l de <i>late</i>, le /t/ de <i>worked</i> est presque inaudible. Mais <b>yesterday</b> (hier) confirme le passé : au TOEIC, sers-toi toujours de ces indices de temps quand la terminaison est avalée.' },
    { type: 'listen', accent: 'en-GB', say: 'The manager checks the invoices on Fridays.', q: 'Qu’as-tu entendu ?', options: ['The manager checks the invoice on Fridays.', 'The manager checks the invoices on Fridays.', 'The managers check the invoices on Fridays.'], answer: 1, explain: 'Le /s/ est collé à <i>checks</i> (un seul manager), et <i>invoices</i> a trois syllabes (in-voi-ces, /ɪz/) : il y a plusieurs factures.' },
    { type: 'dictation', say: 'She asked for three boxes.', answers: ['She asked for three boxes', 'She asked for 3 boxes'], explain: '<i>asked</i> → /t/ (« askt ») et <i>boxes</i> → /ɪz/ (« box-iz »). À l’écrit, n’oublie ni le -ed ni le -es !' },
    { type: 'dictation', accent: 'en-GB', say: 'The clients called and changed the dates.', answers: ['The clients called and changed the dates'], explain: '<i>clients</i> et <i>dates</i> → /s/ ; <i>called</i> et <i>changed</i> → /d/. Aucune de ces terminaisons n’ajoute de syllabe.' },
    { type: 'listen', accent: 'en-CA', say: 'The packages arrived this morning.', q: 'Qu’est-ce qui s’est passé ?', options: ['Un colis va arriver ce matin.', 'Plusieurs colis sont arrivés ce matin.', 'Les colis arrivent tous les matins.'], answer: 1, explain: '<i>packages</i> (/ɪz/, trois syllabes) = plusieurs colis ; <i>arrived</i> (/d/) = passé, confirmé par <i>this morning</i>. Un pluriel et un temps : c’est exactement ce que teste le TOEIC.' }
  ]
});
