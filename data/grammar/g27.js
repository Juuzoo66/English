LE.register({
  id: 'g27',
  kind: 'grammar',
  title: 'Possibilité et politesse : may, might, could, would',
  subtitle: 'Dire qu’une chose est sûre, possible ou impossible, et demander poliment',
  level: 'B1',
  minutes: 45,
  goals: [
    'Exprimer différents degrés de certitude avec <b>may, might, could, must</b> et <b>can’t</b>',
    'Demander, proposer et inviter poliment : <i>Could you…? Would you mind…? Would you like…?</i>',
    'Répondre correctement à <i>Would you mind…?</i> (<i>No, not at all</i> = d’accord !)',
    'Reconnaître <i>must have, might have, should have</i> + participe passé pour parler du passé'
  ],
  blocks: [
    { type: 'h', text: 'Des petits mots pour nuancer' },
    { type: 'p', html: 'En français, on nuance avec des expressions comme « peut-être », « il se peut que », « ça doit être… », « pourriez-vous… ? », « voudriez-vous… ? ». L’anglais utilise surtout des <b>modaux</b> : <b>may</b>, <b>might</b>, <b>could</b> et <b>would</b>. Ils suivent les mêmes règles que <i>must</i> et <i>should</i> : + <b>base verbale</b>, pas de -s, pas de <i>to</i>, pas de <i>do</i> (voir la leçon « Obligation et conseil : must, have to, should »).' },
    { type: 'table', head: ['Modal', 'Emplois principaux', 'Exemple', 'Français'], rows: [
      ['<b>may</b>', 'possibilité ; permission (formel)', '<i>It <b>may</b> rain.</i> / <i><b>May</b> I come in?</i>', 'Il va peut-être pleuvoir. / Puis-je entrer ?'],
      ['<b>might</b>', 'possibilité', '<i>He <b>might</b> be late.</i>', 'Il sera peut-être en retard.'],
      ['<b>could</b>', 'possibilité ; demande polie', '<i>It <b>could</b> be a mistake.</i> / <i><b>Could</b> you help me?</i>', 'Ça pourrait être une erreur. / Pourrais-tu m’aider ?'],
      ['<b>would</b>', 'demande polie, offre, invitation', '<i><b>Would</b> you like some coffee?</i>', 'Voulez-vous du café ?']
    ], caption: '<b>Could</b> est aussi le passé de <i>can</i> (capacité) : <i>I <b>could</b> swim when I was five.</i> (Je savais nager à cinq ans.) Le contexte permet de faire la différence.' },

    { type: 'h', text: 'May, might, could : « peut-être »' },
    { type: 'p', html: 'Pour dire qu’une chose est <b>possible mais pas sûre</b>, dans le présent ou dans le futur, on utilise <b>may</b>, <b>might</b> ou <b>could</b> + base verbale. Le français dit souvent « peut-être » ou « il se peut que ». <b>Might</b> est à peine moins sûr que <i>may</i> ; dans la conversation, la différence est minime. Pour le futur, pas besoin de <i>will</i> : <i>It <b>might</b> rain tomorrow.</i>' },
    { type: 'examples', items: [
      { en: 'The meeting may last until six.', fr: 'La réunion durera peut-être jusqu’à dix-huit heures.' },
      { en: 'I might be a few minutes late.', fr: 'J’aurai peut-être quelques minutes de retard.' },
      { en: 'The package could arrive tomorrow.', fr: 'Le colis pourrait arriver demain.' },
      { en: 'We may not have enough chairs for everyone.', fr: 'Nous n’aurons peut-être pas assez de chaises pour tout le monde.', note: 'Négation : <b>may not</b> / <b>might not</b> = « peut-être pas ».' },
      { en: 'She might not come to the party.', fr: 'Elle ne viendra peut-être pas à la fête.', accent: 'en-GB' }
    ] },
    { type: 'box', style: 'warn', title: 'Deux pièges', html: '1) <b>maybe</b> (un seul mot) est un adverbe = « peut-être », souvent en début de phrase : <i><b>Maybe</b> he’s in a meeting.</i> <b>may be</b> (deux mots) = modal + verbe <i>be</i> : <i>He <b>may be</b> in a meeting.</i> Même sens, mais construction différente : <span class="ko">He maybe in a meeting.</span><br>2) <b>could not</b> n’est pas « peut-être pas » : <i>It <b>couldn’t</b> be true.</i> = C’est impossible que ce soit vrai. Pour « peut-être pas », utilise <b>may not</b> ou <b>might not</b>.' },

    { type: 'h', text: 'L’échelle de certitude' },
    { type: 'p', html: 'Quand on fait une <b>déduction</b> (on tire une conclusion à partir d’un indice), l’anglais utilise une échelle de modaux, du plus sûr au moins sûr. Comme en français, <b>must</b> peut exprimer une déduction : « Elle <b>doit</b> être chez elle » = je suis presque sûre qu’elle est chez elle.' },
    { type: 'table', head: ['Degré de certitude', 'Anglais', 'Français'], rows: [
      ['Sûr : c’est un fait', 'She <b>is</b> in her office.', 'Elle est dans son bureau.'],
      ['Presque sûr (déduction)', 'She <b>must</b> be in her office. Her coat is here.', 'Elle doit être dans son bureau. Son manteau est là.'],
      ['Possible', 'She <b>may</b> be in her office.', 'Il se peut qu’elle soit dans son bureau.'],
      ['Possible, moins sûr', 'She <b>might</b> / <b>could</b> be in her office.', 'Elle est peut-être dans son bureau.'],
      ['Presque impossible (déduction)', 'She <b>can’t</b> be in her office. She’s on vacation.', 'Elle ne peut pas être dans son bureau. Elle est en vacances.'],
      ['Sûr : c’est un fait', 'She <b>isn’t</b> in her office.', 'Elle n’est pas dans son bureau.']
    ], caption: 'Retiens les deux extrémités de la déduction : <b>must</b> = sûrement ; <b>can’t</b> = sûrement pas.' },
    { type: 'examples', items: [
      { en: 'He worked all night. He must be exhausted.', fr: 'Il a travaillé toute la nuit. Il doit être épuisé.' },
      { en: 'The lights are off. The store must be closed.', fr: 'Les lumières sont éteintes. Le magasin doit être fermé.' },
      { en: "That can't be Mr. Diallo. He's in Tokyo this week.", fr: 'Ça ne peut pas être M. Diallo. Il est à Tokyo cette semaine.' },
      { en: 'Someone is at the door. It might be the delivery driver.', fr: 'Quelqu’un est à la porte. C’est peut-être le livreur.' },
      { en: "This price can't be right. It's far too low.", fr: 'Ce prix ne peut pas être correct. Il est beaucoup trop bas.', accent: 'en-AU' }
    ] },
    { type: 'box', style: 'tip', title: 'Must : obligation ou déduction ?', html: 'Comme « devoir » en français, <b>must</b> a deux sens : l’obligation (<i>You <b>must</b> wear a badge.</i> = Tu dois porter un badge) et la déduction (<i>You <b>must</b> be tired.</i> = Tu dois être fatiguée, j’en suis presque sûre). Pour la déduction négative (« sûrement pas »), le plus simple est <b>can’t</b> : <i>He <b>can’t</b> be at home.</i> En anglais américain, on entend aussi <i>He <b>must not</b> be at home.</i> avec le même sens.' },

    { type: 'h', text: 'Demander la permission : can, could, may' },
    { type: 'p', html: 'Pour demander si on a le droit de faire quelque chose, trois formules, de la plus simple à la plus formelle : <b>Can I…?</b> (courant, entre collègues), <b>Could I…?</b> (poli) et <b>May I…?</b> (formel, très poli : accueil, téléphone, service client). Réponses possibles : <i>Sure. / Of course. / Go ahead.</i> ou, pour refuser poliment, <i>I’m afraid not.</i>' },
    { type: 'examples', items: [
      { en: 'May I ask a question?', fr: 'Puis-je poser une question ?' },
      { en: 'Could I use your phone, please?', fr: 'Pourrais-je utiliser ton téléphone, s’il te plaît ?' },
      { en: 'May I speak to Ms. Rossi, please? — Of course. One moment, please.', fr: 'Puis-je parler à Mme Rossi, s’il vous plaît ? — Bien sûr. Un instant, s’il vous plaît.', accent: 'en-GB' },
      { en: 'Can I sit here? — Sure, go ahead.', fr: 'Je peux m’asseoir ici ? — Bien sûr, vas-y.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : « May you… ? »', html: 'Dans une question, <b>may</b> sert à demander la <b>permission</b> pour soi : <i>May I…? May we…?</i> Il ne sert jamais à demander à quelqu’un de faire quelque chose : pour cela, on utilise <b>can</b>, <b>could</b> ou <b>would</b> :<br><span class="ko">May you help me?</span> → <span class="ok">Could you help me?</span>' },

    { type: 'h', text: 'Demander à quelqu’un de faire quelque chose' },
    { type: 'p', html: 'En anglais, la politesse passe beaucoup par la <b>forme de la question</b>. Plus la formule est longue et indirecte, plus elle est polie. Au travail et au TOEIC, <b>Could you…?</b> est la formule la plus courante.' },
    { type: 'table', head: ['Formule', 'Niveau de politesse', 'Exemple', 'Français'], rows: [
      ['<b>Can you</b> + base verbale ?', 'simple, entre proches ou collègues', '<i>Can you close the door?</i>', 'Tu peux fermer la porte ?'],
      ['<b>Could you</b> + base verbale ?', 'poli (le plus courant au travail)', '<i>Could you send me the file?</i>', 'Pourrais-tu m’envoyer le fichier ?'],
      ['<b>Would you</b> + base verbale ?', 'poli, un peu plus formel', '<i>Would you sign here, please?</i>', 'Voudriez-vous signer ici, s’il vous plaît ?'],
      ['<b>Would you mind</b> + verbe en <b>-ing</b> ?', 'très poli', '<i>Would you mind closing the window?</i>', 'Ça vous dérangerait de fermer la fenêtre ?']
    ], caption: 'Attention à la construction : <b>Could you close</b>… (base verbale) mais <b>Would you mind closing</b>… (verbe en -ing).' },
    { type: 'box', style: 'warn', title: 'Piège : répondre à « Would you mind… ? »', html: '<b>Mind</b> veut dire « être dérangé par ». <i>Would you mind waiting?</i> signifie donc littéralement « Est-ce que ça vous <b>dérangerait</b> d’attendre ? ». Pour dire <b>d’accord</b>, on répond <b>non</b> (= non, ça ne me dérange pas) :<br><span class="ok">No, not at all.</span> / <span class="ok">No, of course not.</span> / <span class="ok">Not at all.</span><br>Répondre <span class="ko">Yes, I would.</span> voudrait dire « Oui, ça me dérange » : c’est un refus ! (Dans la vie réelle, beaucoup de gens répondent aussi <i>Sure!</i> : c’est admis.)' },
    { type: 'examples', items: [
      { en: "Could you send me the file? — Sure, I'll do it right away.", fr: 'Pourrais-tu m’envoyer le fichier ? — Bien sûr, je le fais tout de suite.' },
      { en: 'Would you mind waiting a few minutes? — No, not at all.', fr: 'Ça vous dérangerait d’attendre quelques minutes ? — Non, pas du tout.' },
      { en: "Could you tell me where the conference room is? — It's on the third floor.", fr: 'Pourriez-vous me dire où se trouve la salle de conférence ? — Elle est au troisième étage.', note: 'Question indirecte : <i>where the conference room <b>is</b></i> (sujet + verbe), et pas <i>where is the conference room</i>.' },
      { en: 'Would you please fill out this form? — Of course.', fr: 'Pourriez-vous remplir ce formulaire, s’il vous plaît ? — Bien sûr.', accent: 'en-CA' },
      { en: 'Would you mind speaking a little more slowly? — No, of course not.', fr: 'Ça vous dérangerait de parler un peu plus lentement ? — Non, bien sûr que non.' }
    ] },

    { type: 'h', text: 'Offrir et inviter : would like' },
    { type: 'p', html: '<b>Would you like…?</b> sert à <b>offrir</b> quelque chose ou à <b>inviter</b> quelqu’un : « Voulez-vous… ? », « Aimeriez-vous… ? ». <b>I’d like</b> (= <i>I would like</i>) veut dire « je voudrais » : c’est la façon polie de demander ce qu’on veut. <i>Would like</i> est suivi d’un <b>nom</b> ou de <b>to + base verbale</b>. Réponses : <i>Yes, please. / I’d love to. / No, thank you. / I’d love to, but I’m busy.</i>' },
    { type: 'table', head: ['Anglais', 'Français', 'Sens'], rows: [
      ['I <b>like</b> coffee.', 'J’aime le café.', 'un goût, en général'],
      ['I<b>’d like</b> a coffee, please.', 'Je voudrais un café, s’il vous plaît.', 'un souhait, maintenant'],
      ['<b>Do you like</b> jazz?', 'Tu aimes le jazz ?', 'question sur les goûts'],
      ['<b>Would you like</b> to come to the concert?', 'Tu veux venir au concert ?', 'invitation, offre']
    ] },
    { type: 'examples', items: [
      { en: 'Would you like something to drink? — Yes, please. A glass of water.', fr: 'Voulez-vous quelque chose à boire ? — Oui, merci. Un verre d’eau.' },
      { en: "Would you like to join us for lunch? — I'd love to.", fr: 'Veux-tu déjeuner avec nous ? — Avec plaisir.' },
      { en: "I'd like to book a table for four, please.", fr: 'Je voudrais réserver une table pour quatre, s’il vous plaît.' },
      { en: 'Would you like me to call a taxi?', fr: 'Voulez-vous que j’appelle un taxi ?', note: '<b>Would you like me to</b> + base verbale = « Voulez-vous que je… ? » : une offre de service très fréquente au TOEIC.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : I like ≠ I’d like', html: 'À l’oral, le <b>’d</b> de <i>I’d like</i> s’entend à peine, mais il change tout :<br><span class="ko">I like a coffee, please.</span> → <span class="ok">I’d like a coffee, please.</span><br>Et après <i>would like</i>, jamais de -ing : <span class="ko">I would like visiting the factory.</span> → <span class="ok">I would like to visit the factory.</span>' },
    { type: 'dialog', title: 'Au téléphone avec un client', lines: [
      { speaker: 'W', en: 'Good morning, Kestrel Bay Consulting. How may I help you?', fr: 'Bonjour, Kestrel Bay Consulting. Comment puis-je vous aider ?' },
      { speaker: 'M', en: 'Hello, this is Karim Haddad. Could I speak to Ms. Lindqvist, please?', fr: 'Bonjour, Karim Haddad à l’appareil. Pourrais-je parler à Mme Lindqvist, s’il vous plaît ?' },
      { speaker: 'W', en: "I'm afraid she's in a meeting. It might last until noon. Would you like to leave a message?", fr: 'Je suis désolée, elle est en réunion. Ça durera peut-être jusqu’à midi. Voulez-vous laisser un message ?' },
      { speaker: 'M', en: 'Yes, please. Could you ask her to call me back this afternoon?', fr: 'Oui, s’il vous plaît. Pourriez-vous lui demander de me rappeler cet après-midi ?' },
      { speaker: 'W', en: 'Of course. Would you mind spelling your last name?', fr: 'Bien sûr. Ça vous dérangerait d’épeler votre nom de famille ?' },
      { speaker: 'M', en: "Not at all. It's H-A-D-D-A-D.", fr: 'Pas du tout. C’est H-A-D-D-A-D.' },
      { speaker: 'W', en: 'Thank you, Mr. Haddad. She may be free after two.', fr: 'Merci, monsieur Haddad. Elle sera peut-être libre après quatorze heures.' },
      { speaker: 'M', en: 'That would be perfect. Thank you.', fr: 'Ce serait parfait. Merci.' }
    ] },

    { type: 'h', text: 'Aperçu : parler du passé avec must have, might have, should have…' },
    { type: 'p', html: 'Pour parler du <b>passé</b> (déduction, possibilité, regret ou reproche), on utilise <b>modal + have + participe passé</b> (la 3ᵉ colonne des verbes irréguliers ; <i>-ed</i> pour les verbes réguliers). Le <i>have</i> ne change jamais, même avec <i>he</i> ou <i>she</i>. Ces formes sont de niveau B1-B2 : pour l’instant, l’important est de savoir les <b>reconnaître</b> à l’écoute et à la lecture.' },
    { type: 'table', head: ['Forme', 'Sens', 'Exemple', 'Français'], rows: [
      ['<b>must have</b> + participe', 'déduction : sûrement', '<i>She <b>must have missed</b> the train.</i>', 'Elle a dû rater le train.'],
      ['<b>may / might / could have</b> + participe', 'possibilité', '<i>He <b>might have left</b> already.</i>', 'Il est peut-être déjà parti.'],
      ['<b>can’t / couldn’t have</b> + participe', 'déduction : sûrement pas', '<i>They <b>can’t have finished</b> already.</i>', 'Ils ne peuvent pas avoir déjà fini.'],
      ['<b>could have</b> + participe', 'possibilité non réalisée', '<i>We <b>could have taken</b> a taxi.</i>', 'On aurait pu prendre un taxi.'],
      ['<b>should have / shouldn’t have</b> + participe', 'regret, reproche', '<i>You <b>should have told</b> me.</i>', 'Tu aurais dû me le dire.']
    ] },
    { type: 'examples', items: [
      { en: 'Her office is dark. She must have gone home.', fr: 'Son bureau est plongé dans le noir. Elle a dû rentrer chez elle.' },
      { en: "I can't find my keys. I might have left them in the car.", fr: 'Je ne trouve pas mes clés. Je les ai peut-être laissées dans la voiture.' },
      { en: "He can't have read the e-mail. He was on vacation.", fr: 'Il n’a pas pu lire l’e-mail. Il était en vacances.' },
      { en: 'We should have booked the hotel earlier.', fr: 'Nous aurions dû réserver l’hôtel plus tôt.', note: 'Un <b>regret</b> : on ne l’a pas fait, et c’est dommage.' },
      { en: 'You could have called me!', fr: 'Tu aurais pu m’appeler !', note: 'Un <b>reproche</b> : c’était possible, mais tu ne l’as pas fait.', accent: 'en-GB' }
    ] },
    { type: 'box', style: 'tip', title: 'À l’oral', html: '<b>should have</b>, <b>could have</b>, <b>must have</b> se prononcent presque « <b>should-euv</b> », « <b>could-euv</b> », « <b>must-euv</b> » (formes contractées <i>should’ve, could’ve, must’ve</i>). Certains anglophones écrivent même, par erreur, <span class="ko">should of</span> : ne les imite pas !' },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: '<b>Partie 2</b> : beaucoup de questions sont des demandes polies (<i>Could you…? Would you mind…?</i>) ou des offres (<i>Would you like…?</i>). Les bonnes réponses sont souvent <i>Sure. / Of course. / I’d be happy to. / No, not at all.</i> Exemple : <i>Could you send me the file?</i> → <i>Sure, I’ll do it right away.</i><br><b>Parties 3 et 4</b> : questions du type <i>What does the woman <b>offer</b> to do?</i> La réponse se cache souvent derrière <i>Would you like me to…?</i> ou <i>I <b>could</b>…</i><br><b>Partie 5</b> : après <i>may, might, could, would</i> → <b>base verbale</b> : <i>The shipment may ------- late.</i> → <b>arrive</b>.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• Possibilité : <b>may / might / could</b> + base verbale (= peut-être) ; « peut-être pas » = <b>may not / might not</b>.<br>• Déduction : <b>must</b> = sûrement ; <b>can’t</b> = sûrement pas.<br>• Permission : <b>Can I / Could I / May I…?</b><br>• Demandes : <b>Could you</b> + base verbale ; <b>Would you mind</b> + -ing → réponse « d’accord » : <b>No, not at all.</b><br>• Offres : <b>Would you like</b> (+ to)…? ; <b>I’d like</b> = je voudrais ≠ <i>I like</i>.<br>• Passé : <b>must have / might have / should have</b> + participe passé.' }
  ],
  exercises: [
    { type: 'mcq', q: 'Take an umbrella. It ___ this afternoon.', options: ['might rain', 'might to rain', 'might raining', 'mights rain'], answer: 0, explain: 'Après un modal (<b>might</b>), on met la <b>base verbale</b> : <i>might <b>rain</b></i>. Pas de <i>to</i>, pas de -ing, et jamais de -s au modal.' },
    { type: 'mcq', q: 'At a café: "___ a cup of tea, please."', options: ['I like', "I'd like", 'I would to like', 'I liking'], answer: 1, explain: 'Pour commander poliment, on dit <b>I’d like</b> (= <i>I would like</i>, « je voudrais »). <i>I like</i> exprime un goût général (« j’aime »).' },
    { type: 'mcq', q: '___ I use your stapler? — Sure, go ahead.', options: ['May', 'Would', 'Must', 'Am'], answer: 0, explain: 'Pour demander la <b>permission</b> poliment : <b>May I…?</b> (ou <i>Can I / Could I</i>). La réponse <i>Go ahead</i> (vas-y) confirme qu’il s’agit d’une permission.' },
    { type: 'gap', q: 'Would you like ___ (join) us for lunch?', answers: ['to join'], explain: '<b>Would like</b> est suivi de <b>to + base verbale</b> : <i>Would you like <b>to join</b> us?</i> (Veux-tu te joindre à nous ?)' },
    { type: 'mcq', q: '— Would you mind opening the window? — ___', options: ['Yes, I would. Here you go.', 'No, not at all.', 'Yes, I mind.', 'No, I would.'], answer: 1, explain: '<i>Would you mind…?</i> = « Ça te dérangerait de… ? ». Pour accepter, on répond <b>No, not at all</b> (non, ça ne me dérange pas). <i>Yes, I would</i> serait un refus.' },
    { type: 'gap', q: 'Would you mind ___ (wait) a few minutes? The doctor is running late.', answers: ['waiting'], explain: 'Après <b>Would you mind</b>, le verbe prend <b>-ing</b> : <i>Would you mind <b>waiting</b>?</i>' },
    { type: 'gap', q: 'Mr. Park worked all night. He ___ (be) very tired. (déduction : « il doit être »)', answers: ['must be'], explain: 'Déduction presque sûre (il a travaillé toute la nuit) → <b>must be</b> : « il doit être très fatigué ».' },
    { type: 'gap', q: "That ___ (be) Julia on the phone. She's on a plane right now. (déduction : « ça ne peut pas être »)", answers: ["can't be", 'cannot be', 'can not be', "couldn't be", 'could not be'], explain: 'Déduction négative (elle est dans un avion, donc impossible) → <b>can’t be</b> (ou <i>couldn’t be</i>). Le contraire de <i>must</i> (déduction), c’est <b>can’t</b>.' },
    { type: 'mcq', q: 'Quelle phrase exprime la plus grande certitude ?', options: ['She might be in the meeting room.', 'She could be in the meeting room.', 'She must be in the meeting room.', 'She may be in the meeting room.'], answer: 2, explain: '<b>Must</b> (déduction) = « elle doit être », j’en suis presque sûre. <i>May, might, could</i> expriment seulement une possibilité.' },
    { type: 'order', answer: 'Could you tell me where the station is?', fr: 'Pourriez-vous me dire où se trouve la gare ?', explain: 'Demande polie : <b>Could you</b> + base verbale (<i>tell me</i>). Dans la question indirecte, l’ordre est sujet + verbe : <i>where the station <b>is</b></i>.' },
    { type: 'order', answer: 'He might not come to the meeting.', fr: 'Il ne viendra peut-être pas à la réunion.', explain: '« Peut-être pas » → <b>might not</b> + base verbale (<i>come</i>). Le <i>not</i> se place juste après le modal.' },
    { type: 'gap', q: "I can't find my phone. I ___ (might / leave) it in the taxi.", answers: ['might have left', "might've left"], explain: 'Possibilité dans le <b>passé</b> → <b>might have</b> + participe passé (<i>leave → left</i>) : « Je l’ai peut-être laissé dans le taxi. »' },
    { type: 'listen', say: "Hi, this is Olivia from accounting. Would you mind sending me last month's invoices? I might need them for tomorrow's meeting.", accent: 'en-AU', q: 'Que demande Olivia ?', options: ['Qu’on la rappelle demain.', 'Qu’on lui envoie les factures du mois dernier.', 'Qu’on annule la réunion de demain.', 'Qu’on paie les factures du mois dernier.'], answer: 1, explain: '<i>Would you mind <b>sending</b> me last month’s invoices?</i> = « Ça te dérangerait de m’envoyer les factures du mois dernier ? ». Elle en aura <b>peut-être</b> besoin (<i>might need</i>) pour la réunion.' },
    { type: 'dictation', say: 'Would you like me to call a taxi?', answers: ['Would you like me to call a taxi'], explain: '<b>Would you like me to</b> + base verbale = « Voulez-vous que je… ? » : « Voulez-vous que j’appelle un taxi ? »' },
    { type: 'mcq', q: 'The shipment may ------- later than expected because of the storm. <small>(style TOEIC)</small>', options: ['arrive', 'arrives', 'arriving', 'to arrive'], answer: 0, explain: 'Après le modal <b>may</b> → <b>base verbale</b> : <i>may <b>arrive</b></i> (« la livraison arrivera peut-être plus tard que prévu »).' },
    { type: 'mcq', q: 'Ms. Wong ------- have left already; her coat is still on her chair. <small>(style TOEIC)</small>', options: ["can't", 'must', 'would', 'will'], answer: 0, explain: 'Son manteau est encore sur sa chaise : il est presque impossible qu’elle soit partie → <b>can’t have left</b> (« elle ne peut pas être déjà partie »). <i>Must have left</i> dirait le contraire de l’indice.' }
  ]
});
