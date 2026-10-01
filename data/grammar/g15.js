LE.register({
  id: 'g15',
  kind: 'grammar',
  title: 'Can, can’t et l’impératif',
  subtitle: 'Dire ce qu’on sait ou peut faire, demander un service et donner une consigne',
  level: 'A1',
  minutes: 35,
  goals: [
    'Utiliser <b>can</b> et <b>can’t</b> + verbe pour la capacité, la possibilité et la permission',
    'Demander un service et répondre : <i>Can you help me? Sure. / Sorry, I can’t.</i>',
    'Donner une consigne avec l’<b>impératif</b> (<i>Sign here. Don’t forget.</i>) et proposer avec <b>Let’s</b>',
    'Entendre la différence entre <i>can</i> et <i>can’t</i> à l’oral'
  ],
  blocks: [
    { type: 'h', text: 'À quoi sert « can » ?' },
    { type: 'p', html: '<b>Can</b> correspond au verbe « <b>pouvoir</b> », et souvent aussi à « <b>savoir</b> » (faire quelque chose). C’est un <b>modal</b> : un petit verbe spécial qui se place devant un autre verbe pour ajouter une idée (capacité, permission…). Bonne nouvelle : il ne se conjugue pas !' },
    { type: 'examples', items: [
      { en: 'I can swim.', fr: 'Je sais nager.', note: 'Une compétence : le français dit « savoir », l’anglais dit <b>can</b>.' },
      { en: 'She can speak three languages.', fr: 'Elle parle trois langues. (Elle sait parler trois langues.)' },
      { en: 'Can I help you?', fr: 'Je peux vous aider ?' },
      { en: "I can't come tomorrow.", fr: 'Je ne peux pas venir demain.' }
    ] },

    { type: 'h', text: 'La formation : can + base verbale' },
    { type: 'p', html: 'Après <b>can</b>, on met la <b>base verbale</b> : le verbe sans <i>to</i>, tel qu’il est dans le dictionnaire (<i>help, speak, come</i>). Et <b>can</b> a la <b>même forme à toutes les personnes</b> : pas de <b>-s</b> avec <i>he, she, it</i>. Pour la question, on inverse simplement <b>can</b> et le sujet.' },
    { type: 'table', head: ['Sujet', 'Affirmation', 'Négation', 'Question'], rows: [
      ['I', 'I <b>can</b> drive.', 'I <b>can’t</b> drive.', '<b>Can</b> I drive?'],
      ['you', 'You <b>can</b> drive.', 'You <b>can’t</b> drive.', '<b>Can</b> you drive?'],
      ['he / she / it', 'She <b>can</b> drive.', 'She <b>can’t</b> drive.', '<b>Can</b> she drive?'],
      ['we', 'We <b>can</b> drive.', 'We <b>can’t</b> drive.', '<b>Can</b> we drive?'],
      ['they', 'They <b>can</b> drive.', 'They <b>can’t</b> drive.', '<b>Can</b> they drive?']
    ], caption: 'Négation : <b>can’t</b> (la forme courante) = <b>cannot</b> (forme pleine, écrite en <b>un seul mot</b>). Une seule forme pour tout le monde !' },
    { type: 'box', style: 'warn', title: 'Quatre erreurs à ne jamais faire', html: '<span class="ko">She cans speak English.</span> → <span class="ok">She can speak English.</span> (pas de -s à <i>can</i>)<br><span class="ko">He can speaks English.</span> → <span class="ok">He can speak English.</span> (pas de -s au verbe non plus)<br><span class="ko">I can to help you.</span> → <span class="ok">I can help you.</span> (pas de <i>to</i>)<br><span class="ko">Do you can help me?</span> → <span class="ok">Can you help me?</span> (pas de <i>do</i> : on inverse)' },

    { type: 'h', text: 'Les emplois de « can »' },
    { type: 'p', html: '<b>Can</b> exprime plusieurs idées. En français, on le traduit par « pouvoir », « savoir » ou « arriver à », selon le cas.' },
    { type: 'table', head: ['Emploi', 'Exemple', 'Français'], rows: [
      ['<b>capacité</b> (savoir faire)', 'I can use this software.', 'Je sais utiliser ce logiciel.'],
      ['<b>possibilité</b>', 'You can pay by card.', 'Vous pouvez payer par carte.'],
      ['<b>permission</b>', 'Can I sit here? Yes, you can.', 'Je peux m’asseoir ici ? Oui, tu peux.'],
      ['<b>demande</b> (un service)', 'Can you help me?', 'Tu peux m’aider ?'],
      ['<b>interdiction</b> (can’t)', 'You can’t park here.', 'Tu ne peux pas te garer ici. (C’est interdit.)']
    ] },
    { type: 'examples', items: [
      { en: 'Mr. Osei can speak French and English.', fr: 'M. Osei parle français et anglais.' },
      { en: "I can't read your handwriting.", fr: 'Je n’arrive pas à lire ton écriture.', note: '« Je n’arrive pas à… » = <b>I can’t…</b>' },
      { en: 'You can book a room online.', fr: 'On peut réserver une chambre en ligne.', note: 'Ici, <i>you</i> a un sens général : « on ».' },
      { en: "We can't open the file. Can you send it again?", fr: 'Nous n’arrivons pas à ouvrir le fichier. Tu peux le renvoyer ?' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : « savoir » + verbe = can', html: 'Pour une compétence, le français dit « Je <b>sais</b> nager ». En anglais, on dit simplement <span class="ok">I can swim.</span> et jamais <span class="ko">I know swim.</span> ni <span class="ko">I know to swim.</span><br><small><i>I know how to swim</i> (je sais comment nager) est correct aussi, mais <i>can</i> est beaucoup plus fréquent.</small>' },

    { type: 'h', text: 'Demander la permission ou un service' },
    { type: 'p', html: 'Pour demander quelque chose, on pose une question avec <b>can</b> : <b>Can I…?</b> (je peux… ?) pour demander la <b>permission</b>, <b>Can you…?</b> (tu peux… ? vous pouvez… ?) pour demander un <b>service</b>. Dans la réponse courte, on ne répète pas le verbe principal.' },
    { type: 'table', head: ['Question', 'Réponse positive', 'Réponse négative'], rows: [
      ['<b>Can I</b> use your phone?', 'Sure. / Of course. / Yes, you can.', 'Sorry, you can’t.'],
      ['<b>Can you</b> help me?', 'Sure. / No problem. / Yes, I can.', 'Sorry, I can’t. I’m busy.'],
      ['<b>Can she</b> come on Friday?', 'Yes, she can.', 'No, she can’t.']
    ], caption: 'Réponse courte : <i>Yes, I <b>can</b>.</i> / <i>No, I <b>can’t</b>.</i> On reprend <b>can</b>, pas <i>do</i> : <span class="ko">Yes, I do.</span>' },
    { type: 'dialog', title: 'Au bureau : une petite demande', lines: [
      { speaker: 'W', en: 'Hi, Daniel. Can you help me with the printer?', fr: 'Salut Daniel. Tu peux m’aider avec l’imprimante ?' },
      { speaker: 'M', en: "Sorry, I can't right now. I'm on the phone.", fr: 'Désolé, je ne peux pas maintenant. Je suis au téléphone.' },
      { speaker: 'W', en: 'No problem. Can I use your printer, then?', fr: 'Pas de problème. Je peux utiliser ton imprimante, alors ?' },
      { speaker: 'M', en: 'Sure. Press the green button.', fr: 'Bien sûr. Appuie sur le bouton vert.' },
      { speaker: 'W', en: "Thanks! Let's have a coffee later.", fr: 'Merci ! On prend un café tout à l’heure ?' },
      { speaker: 'M', en: 'Good idea!', fr: 'Bonne idée !' }
    ] },

    { type: 'h', text: 'Prononciation : can ou can’t ?' },
    { type: 'p', html: 'À l’oral, le <b>t</b> de <i>can’t</i> s’entend à peine. La vraie différence, c’est la <b>voyelle</b> :<br>• dans une phrase affirmative, <b>can</b> est <b>court et faible</b> : /kən/ « keun ». C’est le verbe qui suit qui est accentué : <i>I kən <b>COME</b>.</i><br>• <b>can’t</b> est <b>fort et accentué</b> : /kænt/ « kaènt » en américain, /kɑːnt/ « kaannt » en britannique : <i>I <b>CAN’T</b> come.</i><br>Tu approfondiras ce point dans la leçon « L’anglais parlé réel : formes faibles, liaisons, contractions ».' },
    { type: 'pairs', items: [
      { a: 'I can come.', b: "I can't come.", note: '<i>can</i> faible « keun » / <i>can’t</i> fort « kaènt »' },
      { a: 'She can drive.', b: "She can't drive.", note: 'Écoute la voyelle, pas le t.' },
      { a: 'We can meet today.', b: "We can't meet today.", note: 'Avec <i>can</i>, c’est <i>meet</i> qui est accentué.' },
      { a: 'You can park here.', b: "You can't park here.", note: 'Le sens est complètement inversé !' }
    ] },
    { type: 'box', style: 'tip', title: 'Et dans une réponse courte ?', html: 'En fin de phrase (<i>Yes, I <b>can</b>.</i>), <b>can</b> garde sa voyelle pleine /kæn/ « kèn ». Pour ne pas te tromper, écoute aussi le <b>contexte</b> : <i>Sure</i> ou <i>Sorry</i>, <i>Yes</i> ou <i>No</i>…' },

    { type: 'h', text: 'Aperçu : could et be able to' },
    { type: 'p', html: '<b>Could</b> est à la fois le <b>passé</b> de <i>can</i> et sa forme <b>polie</b>. Retiens déjà ces deux emplois (tu les approfondiras dans la leçon « Possibilité et politesse : may, might, could, would ») :' },
    { type: 'examples', items: [
      { en: 'Could you send me the file, please?', fr: 'Pourriez-vous m’envoyer le fichier, s’il vous plaît ?', note: '<b>Could you…?</b> est plus poli que <i>Can you…?</i> : parfait avec un client ou un supérieur.' },
      { en: 'Could I speak to Ms. Novak, please?', fr: 'Pourrais-je parler à Mme Novak, s’il vous plaît ?' },
      { en: 'My grandmother could speak four languages.', fr: 'Ma grand-mère savait parler quatre langues.', note: 'Capacité dans le passé : <i>could</i> = « je pouvais, je savais ».' },
      { en: "I couldn't open the attachment.", fr: 'Je n’ai pas pu ouvrir la pièce jointe.', note: 'Négation : <b>couldn’t</b> = <i>could not</i>.' }
    ] },
    { type: 'p', html: '<b>Be able to</b> veut dire « être capable de ». On en a besoin là où <i>can</i> est impossible, par exemple après <b>will</b> (le futur) : <i>After the training, you <b>will be able to</b> use the new software.</i> (Après la formation, tu pourras utiliser le nouveau logiciel.) <span class="ko">will can</span> n’existe pas. Au présent, <b>can</b> est beaucoup plus courant.' },

    { type: 'h', text: 'L’impératif : donner une consigne' },
    { type: 'p', html: 'L’<b>impératif</b> sert à donner un ordre, une consigne, un conseil ou une instruction. C’est la forme la plus simple de l’anglais : la <b>base verbale seule</b>, <b>sans sujet</b>. C’est la même forme pour « tu » et pour « vous ».' },
    { type: 'table', head: ['Forme', 'Anglais', 'Français'], rows: [
      ['Affirmative', '<b>Sign</b> here.', 'Signe ici. / Signez ici.'],
      ['Négative', '<b>Don’t</b> forget.', 'N’oublie pas. / N’oubliez pas.'],
      ['Polie', '<b>Please</b> call back. / Call back, <b>please</b>.', 'Merci de rappeler. / Rappelez, s’il vous plaît.'],
      ['Proposition', '<b>Let’s</b> start.', 'Commençons.']
    ], caption: 'Négation : <b>Don’t</b> (= <i>do not</i>) + base verbale. <b>Please</b> se place au début ou à la fin.' },
    { type: 'examples', items: [
      { en: 'Sign here, please.', fr: 'Signez ici, s’il vous plaît.' },
      { en: "Don't forget your badge.", fr: 'N’oublie pas ton badge.' },
      { en: 'Please call back after 2 p.m.', fr: 'Merci de rappeler après 14 heures.' },
      { en: "Don't park in front of the entrance.", fr: 'Ne vous garez pas devant l’entrée.' },
      { en: 'Press the red button to stop the machine.', fr: 'Appuyez sur le bouton rouge pour arrêter la machine.' },
      { en: "Be careful! Don't be late tomorrow.", fr: 'Fais attention ! Ne sois pas en retard demain.', note: 'Avec <b>be</b> aussi : <i>Be…</i> / <i>Don’t be…</i> (et jamais <span class="ko">Not be late</span>).' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : pas de « to », et « don’t » pour la négation', html: 'En français, une consigne écrite utilise souvent l’infinitif : « Signer ici ». En anglais, jamais de <i>to</i> : <span class="ko">To sign here.</span> → <span class="ok">Sign here.</span> ; <span class="ko">Please to call back.</span> → <span class="ok">Please call back.</span><br>Pour la négation, toujours <b>Don’t</b> + base verbale : <span class="ko">No forget!</span> <span class="ko">Not touch!</span> → <span class="ok">Don’t forget!</span> <span class="ok">Don’t touch!</span>' },

    { type: 'h', text: 'Let’s : faire une proposition' },
    { type: 'p', html: '<b>Let’s</b> (= <i>let us</i>) + base verbale sert à proposer de faire quelque chose <b>ensemble</b>. En français, c’est « allons… », « on… ? » ou l’impératif avec « nous » (« commençons »). Négation : <b>Let’s not</b> + base verbale.' },
    { type: 'examples', items: [
      { en: "Let's start the meeting.", fr: 'Commençons la réunion.' },
      { en: "Let's take a break.", fr: 'Faisons une pause.' },
      { en: "Let's meet in the lobby at noon.", fr: 'Retrouvons-nous dans le hall à midi.' },
      { en: "Let's not wait for the bus. Let's take a taxi.", fr: 'N’attendons pas le bus. Prenons un taxi.' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 4</b> (annonces), l’impératif est partout : <i>Please turn off your phones.</i> (Merci d’éteindre vos téléphones.) / <i>Please have your boarding pass ready.</i> / <i>Don’t leave your bags unattended.</i> (Ne laissez pas vos bagages sans surveillance.)<br>En <b>Partie 2</b>, les demandes en <i>Can you…?</i> ou <i>Could you…?</i> sont très fréquentes. Réponses typiques : <i>Sure.</i> / <i>No problem.</i> / <i>Sorry, I’m busy.</i> Méfie-toi de la réponse qui <b>répète un mot</b> de la question : c’est souvent un piège.<br>En <b>Partie 5</b>, après <b>can</b> et en début de consigne, choisis la <b>base verbale</b> : <i>Customers can ------- online.</i> → <b>order</b> (et pas <i>orders, ordering, to order</i>).' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• <b>can / can’t (cannot)</b> + base verbale, même forme pour tous : <i>she can speak</i> (pas de -s, pas de <i>to</i>).<br>• Emplois : capacité (<i>I can swim</i> = je sais nager), possibilité, permission (<i>Can I…?</i>), demande (<i>Can you…?</i>).<br>• Question : <b>Can you…?</b> (jamais <i>Do you can…?</i>) ; réponse courte : <i>Yes, I can. / No, I can’t.</i><br>• À l’oral : <i>can</i> faible « keun », <i>can’t</i> fort « kaènt ».<br>• Plus poli : <b>Could you…?</b> ; au futur : <b>will be able to</b>.<br>• Impératif = base verbale sans sujet : <i>Sign here.</i> ; négation : <b>Don’t</b> + verbe ; proposition : <b>Let’s</b> + verbe.' }
  ],
  exercises: [
    { type: 'mcq', q: 'She ___ Spanish.', options: ['can speak', 'cans speak', 'can speaks', 'can to speak'], answer: 0, explain: '<b>can</b> + base verbale, sans -s et sans <i>to</i> : <i>She <b>can speak</b> Spanish.</i>' },
    { type: 'mcq', q: 'Comment dit-on « Je sais nager » ?', options: ['I know swim.', 'I can swim.', 'I can to swim.', 'I know to swim.'], answer: 1, explain: 'Pour une compétence, l’anglais utilise <b>can</b> + base verbale : <i>I can swim.</i> « Savoir » ne se traduit pas par <i>know</i> ici.' },
    { type: 'gap', q: 'Sorry, I ___ (can, forme négative) come to the meeting today.', answers: ["can't", 'cannot'], explain: 'Négation de <b>can</b> : <b>can’t</b> ou <b>cannot</b> (en un seul mot), suivi de la base verbale <i>come</i>.' },
    { type: 'mcq', q: 'Quelle question est correcte ?', options: ['Do you can help me?', 'Can you help me?', 'Can you to help me?', 'Can you helping me?'], answer: 1, explain: 'Avec <b>can</b>, on n’utilise pas <i>do</i> : on inverse <b>can</b> et le sujet, puis on met la base verbale → <i>Can you help me?</i>' },
    { type: 'gap', q: 'Can you help me with this box? Yes, I ___. (réponse courte)', answers: ['can'], explain: 'Réponse courte : on reprend seulement <b>can</b>, sans le verbe principal → <i>Yes, I can.</i> (ou <i>No, I can’t.</i>).' },
    { type: 'mcq', q: 'Quelle consigne est correcte ?', options: ['To sign here, please.', 'Please sign here.', 'Please to sign here.', 'Please signs here.'], answer: 1, explain: 'L’impératif = la <b>base verbale seule</b>, sans <i>to</i> et sans -s : <i>Please sign here.</i> (Merci de signer ici.)' },
    { type: 'gap', q: '___ (négatif : forget) your badge tomorrow!', answers: ["Don't forget", 'Do not forget'], explain: 'Impératif négatif : <b>Don’t</b> (= <i>do not</i>) + base verbale → <i>Don’t forget</i> (N’oublie pas).' },
    { type: 'gap', q: "___ (let's + take) a break. We are all tired.", answers: ["Let's take", 'Let us take'], explain: 'Pour proposer de faire quelque chose ensemble : <b>Let’s</b> + base verbale → <i>Let’s take a break.</i> (Faisons une pause.)' },
    { type: 'order', answer: 'Can you help me with this report?', fr: 'Tu peux m’aider avec ce rapport ?', explain: 'Question avec <b>can</b> : <b>Can</b> + sujet (<i>you</i>) + base verbale (<i>help</i>) + complément.' },
    { type: 'order', answer: "Let's meet in the lobby at noon.", alts: ["Let's meet at noon in the lobby."], fr: 'Retrouvons-nous dans le hall à midi.', explain: '<b>Let’s</b> + base verbale (<i>meet</i>) + lieu + moment. On peut aussi placer <i>at noon</i> avant <i>in the lobby</i>.' },
    { type: 'mcq', q: 'A : Can you call Mr. Tran this afternoon?<br>B : ___', options: ['Yes, he can.', 'Sure, no problem.', "It's a nice afternoon."], answer: 1, explain: 'On te demande un service (<i>Can <b>you</b>…?</i>) : <i>Sure, no problem.</i> accepte. <i>Yes, <b>he</b> can</i> parle d’une autre personne, et la 3ᵉ réponse répète le mot <i>afternoon</i> : piège typique de la Partie 2.' },
    { type: 'listen', accent: 'en-GB', say: "Hi, it's Paolo. Sorry, I can't come to the meeting this afternoon.", q: 'Paolo peut-il venir à la réunion ?', options: ['Oui, cet après-midi.', 'Non, il ne peut pas.', 'Oui, mais il sera en retard.'], answer: 1, explain: 'Paolo dit <i>Sorry, I <b>can’t</b> come</i>. En britannique, <i>can’t</i> se prononce /kɑːnt/ « kaannt », avec une voyelle longue et forte. <i>Sorry</i> annonce aussi une réponse négative.' },
    { type: 'dictation', say: 'Please call back after three.', answers: ['Please call back after three', 'Please call back after 3'], explain: 'Impératif poli : <b>Please</b> + base verbale (<i>call back</i> = rappeler). « Merci de rappeler après trois heures. »' },
    { type: 'mcq', q: 'Customers can ------- their orders online. <small>(style TOEIC)</small>', options: ['track', 'tracks', 'tracking', 'to track'], answer: 0, explain: 'Après <b>can</b>, toujours la <b>base verbale</b> : <i>can track</i> (peuvent suivre). Pas de -s, pas de -ing, pas de <i>to</i>.' },
    { type: 'mcq', q: 'Please ------- your mobile phones during the presentation. <small>(style TOEIC)</small>', options: ['turned off', 'turn off', 'turning off', 'to turn off'], answer: 1, explain: 'Consigne polie : <b>Please</b> + impératif (base verbale) → <i>Please <b>turn off</b></i> (Merci d’éteindre).' },
    { type: 'mcq', q: '------- leave your bags unattended in the terminal. <small>(style TOEIC)</small>', options: ['Not', 'No', "Don't", "Doesn't"], answer: 2, explain: 'Impératif négatif : <b>Don’t</b> + base verbale → <i>Don’t leave your bags unattended</i> (Ne laissez pas vos bagages sans surveillance). <i>Not</i> et <i>No</i> seuls sont impossibles devant un verbe ici.' }
  ]
});
