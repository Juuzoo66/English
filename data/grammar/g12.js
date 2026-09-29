LE.register({
  id: 'g12',
  kind: 'grammar',
  title: 'Le présent continu (be + -ing)',
  subtitle: 'Dire ce qui se passe en ce moment : I’m working, she’s calling…',
  level: 'A1',
  minutes: 35,
  goals: [
    'Former le présent continu : <b>am / is / are + verbe-ing</b>',
    'Écrire correctement la forme en <b>-ing</b> : <i>making, running, lying…</i>',
    'L’utiliser pour une action en cours, une situation temporaire ou une tendance',
    'Faire des phrases négatives, des questions et des réponses courtes'
  ],
  blocks: [
    { type: 'h', text: 'À quoi sert le présent continu ?' },
    { type: 'p', html: 'Le <b>présent continu</b> (on dit aussi « présent progressif ») sert à dire ce qui est <b>en train de se passer</b>. En français, on n’a qu’un seul présent : « je travaille » peut vouloir dire « je travaille (en général) » ou « je suis en train de travailler (en ce moment) ». L’anglais, lui, sépare les deux : <i>I <b>work</b></i> (habitude, présent simple) et <i>I<b>’m working</b></i> (maintenant, présent continu).' },
    { type: 'examples', items: [
      { en: "I'm working.", fr: 'Je travaille. / Je suis en train de travailler.', note: 'Maintenant, au moment où je parle.' },
      { en: "She's talking on the phone.", fr: 'Elle parle au téléphone.' },
      { en: "It's raining.", fr: 'Il pleut.' },
      { en: "They're having lunch.", fr: 'Ils sont en train de déjeuner.', note: '<i>have lunch</i> = déjeuner. Ici, <i>have</i> ne veut pas dire « posséder ».' }
    ] },

    { type: 'h', text: 'La formation : be + verbe-ing' },
    { type: 'p', html: 'Le présent continu se construit avec <b>deux éléments</b> : le verbe <b>be</b> au présent (<i>am, is, are</i> — voir la leçon « Le verbe « be » au présent ») + le verbe avec la terminaison <b>-ing</b>. <b>Be</b> change selon le sujet ; le verbe en <b>-ing</b>, lui, ne change jamais.' },
    { type: 'table', head: ['Sujet', 'Forme pleine', 'Forme contractée', 'Français'], rows: [
      ['I', 'I <b>am</b> work<b>ing</b>', 'I<b>’m</b> work<b>ing</b>', 'je travaille'],
      ['you', 'you <b>are</b> work<b>ing</b>', 'you<b>’re</b> work<b>ing</b>', 'tu travailles / vous travaillez'],
      ['he / she / it', 'she <b>is</b> work<b>ing</b>', 'she<b>’s</b> work<b>ing</b>', 'il / elle travaille'],
      ['we', 'we <b>are</b> work<b>ing</b>', 'we<b>’re</b> work<b>ing</b>', 'nous travaillons'],
      ['they', 'they <b>are</b> work<b>ing</b>', 'they<b>’re</b> work<b>ing</b>', 'ils / elles travaillent']
    ], caption: 'Formule : <b>sujet + am / is / are + verbe-ing</b>. Le sens : « être en train de… ».' },
    { type: 'box', style: 'warn', title: 'Piège : les deux morceaux sont obligatoires', html: 'On n’oublie jamais <b>be</b>, et on n’oublie jamais <b>-ing</b> :<br><span class="ko">I working now.</span> → <span class="ok">I’m working now.</span><br><span class="ko">She is work at home today.</span> → <span class="ok">She is working at home today.</span><br><span class="ko">They are works.</span> → <span class="ok">They are working.</span>' },

    { type: 'h', text: 'L’orthographe du -ing' },
    { type: 'p', html: 'Dans la grande majorité des cas, on ajoute simplement <b>-ing</b> à la base verbale (le verbe sans <i>to</i>) : <i>work → working</i>, <i>read → reading</i>, <i>go → going</i>. Voici les règles pour les autres cas :' },
    { type: 'table', head: ['Règle', 'Exemples'], rows: [
      ['Cas général : on ajoute <b>-ing</b>', 'work → work<b>ing</b>, eat → eat<b>ing</b>, play → play<b>ing</b>, study → study<b>ing</b>'],
      ['Verbe terminé par un <b>e</b> muet : le <b>e</b> tombe', 'make → mak<b>ing</b>, write → writ<b>ing</b>, come → com<b>ing</b>, use → us<b>ing</b>'],
      ['Verbe terminé par <b>-ee</b>, et le verbe <b>be</b> : on garde tout', 'see → see<b>ing</b>, agree → agree<b>ing</b>, be → be<b>ing</b>'],
      ['Verbe terminé par <b>-ie</b> : <b>ie</b> devient <b>y</b>', 'lie → l<b>y</b>ing, die → d<b>y</b>ing, tie → t<b>y</b>ing'],
      ['Verbe d’une syllabe terminé par consonne + <b>une seule</b> voyelle + consonne : on <b>double</b> la dernière consonne', 'run → ru<b>nn</b>ing, stop → sto<b>pp</b>ing, sit → si<b>tt</b>ing, get → ge<b>tt</b>ing, plan → pla<b>nn</b>ing'],
      ['… sauf <b>w, x, y</b>, qui ne se doublent jamais', 'show → showing, fix → fixing, stay → staying'],
      ['Verbe de deux syllabes accentué sur la <b>dernière</b> : on double aussi', 'begin → begi<b>nn</b>ing, forget → forge<b>tt</b>ing (mais <i>visit → visiting</i>, <i>open → opening</i> : accent sur la 1ʳᵉ syllabe)'],
      ['Verbe en <b>-el</b> accentué au début (<i>TRAvel</i>) : un seul <b>l</b> en anglais américain', 'travel → traveling, cancel → canceling (en anglais britannique : <i>travelling, cancelling</i>)']
    ], caption: 'Pas de panique : les cas particuliers concernent peu de verbes, et ce sont des verbes très fréquents que tu retiendras vite.' },
    { type: 'examples', items: [
      { en: "I'm writing an e-mail.", fr: 'J’écris un e-mail.', note: 'write → writ<b>ing</b> : le <b>e</b> tombe.' },
      { en: 'The bus is coming.', fr: 'Le bus arrive.', note: 'come → com<b>ing</b>.' },
      { en: 'Why are you running?', fr: 'Pourquoi est-ce que tu cours ?', note: 'run → ru<b>nn</b>ing : le <b>n</b> est doublé.' },
      { en: 'The dog is lying on the sofa.', fr: 'Le chien est allongé sur le canapé.', note: 'lie → l<b>y</b>ing. Le français dit « est allongé », l’anglais utilise le présent continu.' },
      { en: 'Ms. Park is traveling in Asia this week.', fr: 'Mme Park voyage en Asie cette semaine.', note: 'Orthographe américaine : <i>traveling</i> (britannique : <i>travelling</i>).' }
    ] },

    { type: 'h', text: 'Emploi 1 : une action en cours, maintenant' },
    { type: 'p', html: 'Premier emploi, le plus simple : ce qui se passe <b>au moment où l’on parle</b>. On le trouve souvent avec <b>now</b> (maintenant), <b>right now</b> (en ce moment même) et <b>at the moment</b> (en ce moment), ou après <b>Look!</b> (Regarde !) et <b>Listen!</b> (Écoute !).' },
    { type: 'examples', items: [
      { en: "Sorry, I can't talk right now. I'm driving.", fr: 'Désolée, je ne peux pas parler, là. Je conduis.' },
      { en: "Look! It's snowing.", fr: 'Regarde ! Il neige.' },
      { en: 'Mr. Lopez is having lunch at the moment. Can you call back later?', fr: 'M. Lopez est en train de déjeuner. Vous pouvez rappeler plus tard ?' },
      { en: 'Listen! Someone is knocking on the door.', fr: 'Écoute ! Quelqu’un frappe à la porte.' }
    ] },

    { type: 'h', text: 'Emploi 2 : une situation temporaire' },
    { type: 'p', html: 'Le présent continu décrit aussi une situation <b>temporaire</b> : elle dure un certain temps, mais pas pour toujours. L’action n’a pas forcément lieu à la seconde où l’on parle. Marqueurs typiques : <b>today</b> (aujourd’hui), <b>this week</b> (cette semaine), <b>this month</b> (ce mois-ci), <b>currently</b> (actuellement).' },
    { type: 'examples', items: [
      { en: "I'm working from home this week.", fr: 'Je télétravaille cette semaine.', note: 'Temporaire : d’habitude, je vais au bureau.' },
      { en: "We're currently looking for a new assistant.", fr: 'Nous cherchons actuellement un nouvel assistant.' },
      { en: 'Julia is staying at a hotel until Friday.', fr: 'Julia loge à l’hôtel jusqu’à vendredi.' },
      { en: "I'm reading a great book at the moment.", fr: 'Je lis un super livre en ce moment.', note: 'Je ne lis pas forcément à la seconde où je parle : c’est une activité en cours, pour une période limitée.' }
    ] },

    { type: 'h', text: 'Emploi 3 : un changement, une tendance' },
    { type: 'p', html: 'Troisième emploi, très fréquent au TOEIC (articles, rapports, réunions) : une situation qui <b>évolue</b>. Verbes typiques : <b>rise</b> / <b>increase</b> (augmenter), <b>fall</b> / <b>decrease</b> (baisser), <b>grow</b> (grandir, se développer), <b>improve</b> (s’améliorer), <b>change</b> (changer), <b>get</b> + adjectif (devenir).' },
    { type: 'examples', items: [
      { en: 'Prices are rising.', fr: 'Les prix augmentent.' },
      { en: 'Our company is growing fast.', fr: 'Notre entreprise se développe vite.' },
      { en: "It's getting cold.", fr: 'Il commence à faire froid.', note: '<i>get</i> + adjectif = devenir : <i>getting cold</i> = devenir froid.' },
      { en: 'Your English is improving!', fr: 'Ton anglais s’améliore !' }
    ] },

    { type: 'h', text: 'Les marqueurs de temps' },
    { type: 'table', head: ['Marqueur', 'Sens', 'Exemple'], rows: [
      ['<b>now</b>', 'maintenant', 'I’m leaving <b>now</b>.'],
      ['<b>right now</b>', 'en ce moment même, là', 'She’s talking to a client <b>right now</b>.'],
      ['<b>at the moment</b>', 'en ce moment', 'We aren’t hiring <b>at the moment</b>.'],
      ['<b>currently</b>', 'actuellement', 'Mr. Wu is <b>currently</b> working in Dubai.'],
      ['<b>today</b>', 'aujourd’hui', 'Nadia is working from home <b>today</b>.'],
      ['<b>this week</b> / <b>this month</b>', 'cette semaine / ce mois-ci', 'I’m taking a Spanish class <b>this month</b>.'],
      ['<b>Look!</b> / <b>Listen!</b>', 'Regarde ! / Écoute !', '<b>Look!</b> The bus is coming.']
    ], caption: '<b>Currently</b> est un faux ami : il veut dire « actuellement », pas « couramment » (qui se dit <i>fluently</i>). Et « actuellement » ne se dit pas <i>actually</i>, qui veut dire « en fait ».' },
    { type: 'box', style: 'tip', title: 'Pas avec tous les verbes', html: 'Quelques verbes très courants ne se mettent (presque) jamais au présent continu, même pour parler de maintenant : ce sont les <b>verbes d’état</b>, comme <b>know</b> (savoir), <b>want</b> (vouloir), <b>need</b> (avoir besoin), <b>like</b> (aimer), <b>understand</b> (comprendre).<br><span class="ko">I’m knowing the answer.</span> → <span class="ok">I know the answer.</span><br><span class="ko">I’m wanting a coffee.</span> → <span class="ok">I want a coffee.</span><br>Tu verras tout ça en détail dans la leçon « Présent simple ou présent continu ? ».' },

    { type: 'h', text: 'Négation, questions et réponses courtes' },
    { type: 'p', html: 'Bonne nouvelle : c’est <b>be</b> qui fait tout le travail, exactement comme dans la leçon « Le verbe « be » au présent ». Négation : <b>not</b> après <i>am / is / are</i>. Question : on <b>inverse</b> <i>be</i> et le sujet. Réponse courte : on reprend seulement <i>be</i>.' },
    { type: 'table', head: ['Sujet', 'Négation', 'Question', 'Réponse courte'], rows: [
      ['I', 'I<b>’m not</b> listening.', '<b>Am I</b> speaking too fast?', 'Yes, you are. / No, you aren’t.'],
      ['you', 'You <b>aren’t</b> listening.', '<b>Are you</b> listening?', 'Yes, I am. / No, I’m not.'],
      ['he / she / it', 'She <b>isn’t</b> coming.', '<b>Is she</b> coming?', 'Yes, she is. / No, she isn’t.'],
      ['we / they', 'They <b>aren’t</b> waiting.', '<b>Are they</b> waiting?', 'Yes, they are. / No, they aren’t.']
    ], caption: 'Avec un mot interrogatif (voir « Les mots interrogatifs (wh- questions) ») : <i>What <b>are you doing</b>?</i> — <i>Where <b>is she going</b>?</i>' },
    { type: 'box', style: 'warn', title: 'Piège : pas de do / does au présent continu', html: 'Au présent continu, l’auxiliaire est <b>be</b>, jamais <i>do</i> :<br><span class="ko">Do you working today?</span> → <span class="ok">Are you working today?</span><br><span class="ko">She doesn’t working.</span> → <span class="ok">She isn’t working.</span><br>Et dans la réponse courte affirmative, pas de contraction : <span class="ko">Yes, I’m.</span> → <span class="ok">Yes, I am.</span>' },
    { type: 'examples', items: [
      { en: "What are you doing? — I'm preparing the slides.", fr: 'Qu’est-ce que tu fais ? — Je prépare les diapos.' },
      { en: 'Is Mr. Silva still waiting in the lobby?', fr: 'Est-ce que M. Silva attend toujours dans le hall ?', note: '<i>still</i> = toujours, encore.' },
      { en: "We aren't hiring at the moment.", fr: 'Nous ne recrutons pas en ce moment.' },
      { en: 'Are you enjoying the conference? — Yes, I am.', fr: 'La conférence te plaît ? — Oui.' }
    ] },
    { type: 'dialog', title: 'Au téléphone', lines: [
      { speaker: 'W', en: "Hi Daniel, it's Priya. Are you busy?", fr: 'Salut Daniel, c’est Priya. Tu es occupé ?' },
      { speaker: 'M', en: "A little. I'm finishing a report for the sales meeting.", fr: 'Un peu. Je termine un rapport pour la réunion commerciale.' },
      { speaker: 'W', en: 'Sorry! Is Kofi there?', fr: 'Pardon ! Kofi est là ?' },
      { speaker: 'M', en: "No, he's working from home today.", fr: 'Non, il télétravaille aujourd’hui.' },
      { speaker: 'W', en: "OK. And what's Anna doing?", fr: 'D’accord. Et Anna, qu’est-ce qu’elle fait ?' },
      { speaker: 'M', en: "She's talking to a client right now. Do you want to leave a message?", fr: 'Elle parle avec un client en ce moment. Tu veux laisser un message ?' },
      { speaker: 'W', en: "No, thanks. I'm writing her an e-mail.", fr: 'Non, merci. Je suis en train de lui écrire un e-mail.' }
    ] },

    { type: 'h', text: 'Le présent continu au TOEIC' },
    { type: 'box', style: 'info', title: 'Partie 1 : décrire une photo', html: 'En <b>Partie 1</b>, tu regardes une photo et tu entends quatre phrases. Quand la photo montre des personnes, la plupart de ces phrases sont au <b>présent continu</b>, parce qu’elles décrivent ce que les personnes <b>sont en train de faire</b> : <i>The woman <b>is typing</b> on a keyboard.</i> (La femme tape sur un clavier.) Écoute surtout le <b>verbe</b> : si la femme tape mais que tu entends <i>is fixing</i> (répare) ou <i>is buying</i> (achète), la phrase est fausse.' },
    { type: 'examples', items: [
      { en: 'The woman is typing on a keyboard.', fr: 'La femme tape sur un clavier.' },
      { en: 'Two men are shaking hands.', fr: 'Deux hommes se serrent la main.', accent: 'en-GB' },
      { en: 'Some people are waiting in line.', fr: 'Des gens font la queue.', accent: 'en-AU' },
      { en: 'A man is carrying a box.', fr: 'Un homme porte un carton.', accent: 'en-CA' }
    ] },
    { type: 'box', style: 'info', title: 'Aperçu : is being + participe passé', html: 'Tu entendras aussi des phrases comme <i>A car <b>is being washed</b>.</i> (Une voiture est en train d’être lavée.) C’est le présent continu à la <b>voix passive</b> : <b>is / are being</b> + participe passé (la forme en <i>-ed</i>, ou la 3ᵉ colonne des verbes irréguliers). Tu l’étudieras dans la leçon « La voix passive ». Astuce TOEIC : cette phrase n’est vraie que si l’on <b>voit quelqu’un en train de faire l’action</b> sur la photo (ici, quelqu’un qui lave la voiture).' },
    { type: 'p', html: 'En <b>Partie 5</b> (phrases à compléter), des mots comme <i>now</i>, <i>at the moment</i> ou <i>this week</i> sont de précieux indices : <i>The marketing team ------- a new advertising campaign this month.</i> → <b>is developing</b> (sujet singulier + situation temporaire).' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• Formation : <b>am / is / are + verbe-ing</b> (<i>I’m working, she’s calling, they’re waiting</i>).<br>• Orthographe : <i>make → making</i>, <i>run → running</i>, <i>lie → lying</i>, <i>stop → stopping</i>, <i>travel → traveling</i> (US).<br>• Emplois : action <b>en cours</b> (<i>now, right now, at the moment</i>), situation <b>temporaire</b> (<i>today, this week, currently</i>), <b>tendance</b> (<i>Prices are rising.</i>).<br>• Négation et question avec <b>be</b>, jamais <i>do</i> : <i>She isn’t working. Are you listening? — Yes, I am.</i><br>• TOEIC Partie 1 : écoute bien le verbe en <b>-ing</b>.' }
  ],
  exercises: [
    { type: 'mcq', q: 'Choisis la phrase correcte.', options: ['I working now.', "I'm working now.", 'I am work now.', "I'm workking now."], answer: 1, explain: 'Il faut les deux morceaux : <b>be</b> (<i>am</i> → <i>I’m</i>) + verbe en <b>-ing</b> bien écrit (<i>working</i>, un seul <i>k</i>).' },
    { type: 'gap', q: 'She ___ (talk) on the phone right now.', answers: ['is talking', "'s talking"], explain: '<i>right now</i> → action en cours ; <i>she</i> → <b>is</b> + <i>talking</i> : <b>is talking</b> (ou <i>she’s talking</i>).' },
    { type: 'mcq', q: 'Quel verbe en -ing est bien écrit ?', options: ['makeing', 'runing', 'lying', 'stoping'], answer: 2, explain: '<i>lie → <b>lying</b></i> (ie devient y). Les autres s’écrivent <i>making</i> (le e tombe), <i>running</i> et <i>stopping</i> (la consonne finale est doublée).' },
    { type: 'gap', q: 'The bus is ___ (stop) in front of the hotel.', answers: ['stopping'], explain: '<i>stop</i> : une syllabe, consonne + une voyelle + consonne → on double le <b>p</b> : <b>stopping</b>.' },
    { type: 'gap', q: "I ___ (not / watch) TV. I'm reading.", answers: ["'m not watching", 'am not watching'], explain: 'Négation : <b>not</b> après <i>am</i> → <b>I’m not watching</b> (ou <i>I am not watching</i>).' },
    { type: 'gap', q: '___ (you / listen) to me?', answers: ['Are you listening'], explain: 'Question : on inverse <i>be</i> et le sujet → <b>Are you listening</b> to me?' },
    { type: 'mcq', q: '— Is it raining? — No, ___.', options: ["it isn't", "it doesn't", 'it not', "isn't it"], answer: 0, explain: 'La question commence par <b>Is</b> : on reprend <b>is</b> dans la réponse courte → <i>No, it isn’t.</i> Pas de <i>do / does</i> au présent continu.' },
    { type: 'mcq', q: 'Choisis la question correcte.', options: ['Do you working today?', 'Are you work today?', 'Are you working today?', 'Is you working today?'], answer: 2, explain: 'Question au présent continu : <b>Are</b> (car <i>you</i>) + sujet + verbe en <b>-ing</b>. Jamais de <i>do</i> avec la forme en -ing.' },
    { type: 'gap', q: 'Prices ___ (rise) quickly at the moment.', answers: ['are rising'], explain: 'Une <b>tendance</b> en cours (<i>at the moment</i>) + sujet pluriel (<i>prices</i> = they) → <b>are rising</b>. <i>rise → rising</i> : le e tombe.' },
    { type: 'order', answer: 'We are not hiring new staff at the moment.', alts: ['At the moment we are not hiring new staff', 'We are not at the moment hiring new staff'], fr: 'Nous ne recrutons pas de nouveau personnel en ce moment.', explain: 'Sujet + <b>are not</b> + verbe en <b>-ing</b> + complément ; <i>at the moment</i> se place à la fin (ou au début).' },
    { type: 'order', answer: 'Why is the printer making that noise?', fr: 'Pourquoi l’imprimante fait-elle ce bruit ?', explain: 'Mot interrogatif (<b>Why</b>) + <b>is</b> + sujet (<i>the printer</i>) + verbe en <b>-ing</b> (<i>making</i>) + reste.' },
    { type: 'listen', say: 'The man is watering the plants near the window.', accent: 'en-AU', q: 'Tu entends la description d’une photo (style TOEIC Partie 1). Que fait l’homme ?', options: ['Il arrose les plantes près de la fenêtre.', 'Il ouvre la fenêtre.', 'Il achète des plantes.', 'Il lave la fenêtre.'], answer: 0, explain: '<i>is watering the plants</i> = est en train d’arroser les plantes. <i>near the window</i> = près de la fenêtre : la fenêtre n’est qu’un repère, ce n’est pas l’action.' },
    { type: 'listen', say: "Sorry, Mr. Obi isn't in the office today. He's visiting a client in Toronto.", accent: 'en-CA', q: 'Où est M. Obi aujourd’hui ?', options: ['Au bureau, en réunion.', 'Chez un client, à Toronto.', 'En vacances, à Toronto.', 'Chez lui, malade.'], answer: 1, explain: '<i>He isn’t in the office today</i> (il n’est pas au bureau aujourd’hui) ; <i>He’s visiting a client in Toronto</i> = il rend visite à un client à Toronto.' },
    { type: 'dictation', say: "They're working from home this week.", accent: 'en-GB', answers: ["They're working from home this week", 'They are working from home this week'], explain: '« Ils télétravaillent cette semaine. » Situation temporaire → présent continu : <i>they’re</i> = <i>they are</i>.' },
    { type: 'mcq', q: 'Ms. Chen ------- a new marketing plan at the moment. <small>(style TOEIC)</small>', options: ['prepare', 'is preparing', 'are preparing', 'preparing'], answer: 1, explain: '<i>at the moment</i> → présent continu ; <i>Ms. Chen</i> = she → <b>is preparing</b>. <i>preparing</i> seul est impossible : il manque <i>be</i>.' },
    { type: 'mcq', q: 'Sales of electric bicycles ------- quickly this year. <small>(style TOEIC)</small>', options: ['is growing', 'are growing', 'grows', 'growing'], answer: 1, explain: 'Le sujet est <i>sales</i> (les ventes, pluriel) → <b>are</b>. C’est une tendance en cours (<i>this year</i>) → <b>are growing</b>. Ne te laisse pas piéger par <i>bicycles</i> : ce n’est pas le sujet.' }
  ]
});
