LE.register({
  id: 'g02',
  kind: 'grammar',
  title: 'Pronoms, possessifs et génitif (’s)',
  subtitle: 'Dire qui fait quoi et à qui appartient quoi : my, his, her, mine, Tom’s…',
  level: 'A1',
  minutes: 35,
  goals: [
    'Choisir le bon pronom sujet, dont <b>it</b> pour les choses',
    'Utiliser les possessifs (<i>my, his, her…</i> et <i>mine, hers…</i>) en les accordant avec le <b>possesseur</b>',
    'Exprimer l’appartenance avec <b>’s</b> (<i>the manager’s office</i>) ou avec <b>of</b> (<i>the end of the meeting</i>)',
    'Demander « à qui ? » avec <b>whose</b> et ne plus confondre <i>its</i> et <i>it’s</i>'
  ],
  blocks: [
    { type: 'h', text: 'À quoi ça sert ?' },
    { type: 'p', html: 'Dans cette leçon, tu apprends à dire <b>qui</b> fait quelque chose (<i>I, you, he…</i>) et <b>à qui</b> appartient quelque chose (<i>my, your, his…</i>, <i>mine, yours…</i> et le fameux <b>’s</b>). Au TOEIC, ces petits mots sont partout : dans les e-mails (<i>our new product</i>), dans les annonces (<i>your flight</i>) et surtout en <b>Partie 5</b>, où il faut choisir la bonne forme parmi quatre.' },

    { type: 'h', text: 'Rappel : les pronoms sujets' },
    { type: 'table', head: ['Anglais', 'Français', 'Remarque'], rows: [
      ['<b>I</b>', 'je', 'toujours en <b>majuscule</b>, même au milieu d’une phrase'],
      ['<b>you</b>', 'tu / vous', 'un seul mot pour les deux (une ou plusieurs personnes)'],
      ['<b>he</b>', 'il', 'un homme, un garçon'],
      ['<b>she</b>', 'elle', 'une femme, une fille'],
      ['<b>it</b>', 'il / elle', 'une <b>chose</b>, un animal, une entreprise, une idée'],
      ['<b>we</b>', 'nous (et souvent « on »)', '« On est prêts. » → <i>We’re ready.</i>'],
      ['<b>they</b>', 'ils / elles', 'des personnes <b>ou</b> des choses au pluriel']
    ], caption: 'Le sujet se place <b>toujours</b> avant le verbe, et on ne peut jamais l’oublier : <i>It’s late.</i> (pas « Is late »).' },
    { type: 'box', style: 'warn', title: 'Piège : il et elle pour les objets', html: 'En français, « la réunion » est <i>elle</i> et « le rapport » est <i>il</i>. En anglais, le genre des objets n’existe pas : une chose au singulier, c’est <b>it</b> ; plusieurs choses, c’est <b>they</b>. <b>He</b> et <b>she</b> sont réservés aux personnes.<br><span class="ko">The meeting? She is at ten.</span> → <span class="ok">The meeting? It’s at ten.</span>' },
    { type: 'examples', items: [
      { en: "The report? It's on your desk.", fr: 'Le rapport ? Il est sur ton bureau.' },
      { en: "The meeting is long. It's boring!", fr: 'La réunion est longue. Elle est ennuyeuse !' },
      { en: "Where are the keys? They're in the drawer.", fr: 'Où sont les clés ? Elles sont dans le tiroir.' },
      { en: "I like Nadia. She's very kind.", fr: 'J’aime bien Nadia. Elle est très gentille.' }
    ] },
    { type: 'box', style: 'info', title: 'Bon à savoir : « they » pour une seule personne', html: 'Quand on ne sait pas si la personne est un homme ou une femme (ou qu’on ne veut pas le préciser), l’anglais utilise souvent <b>they</b> au singulier : <i>A customer is on the phone. <b>They</b> want to speak to a manager.</i> (Un client est au téléphone. Il ou elle veut parler à un responsable.) Le verbe reste au pluriel. Tu le verras dans les documents du TOEIC : <i>Each candidate must bring <b>their</b> ID.</i> (Chaque candidat doit apporter sa pièce d’identité.)' },

    { type: 'h', text: 'Les adjectifs possessifs : my, your, his…' },
    { type: 'p', html: 'Pour dire « mon, ton, son… », on met un <b>adjectif possessif</b> devant le nom. Bonne nouvelle : il ne change <b>jamais</b>, ni au féminin, ni au pluriel. <b>My</b> veut dire à la fois « mon », « ma » <b>et</b> « mes » !' },
    { type: 'table', head: ['Sujet', 'Possessif', 'Exemple', 'Français'], rows: [
      ['I', '<b>my</b>', 'my car / my keys', 'ma voiture / mes clés'],
      ['you', '<b>your</b>', 'your office', 'ton bureau / votre bureau'],
      ['he', '<b>his</b>', 'his sister', 'sa sœur (à lui)'],
      ['she', '<b>her</b>', 'her brother', 'son frère (à elle)'],
      ['it', '<b>its</b>', 'its logo', 'son logo (d’une chose, d’une entreprise)'],
      ['we', '<b>our</b>', 'our team', 'notre équipe'],
      ['they', '<b>their</b>', 'their children', 'leurs enfants']
    ], caption: 'Un seul mot pour « mon, ma, mes » : <b>my</b>. Un seul mot pour « leur, leurs » : <b>their</b>.' },
    { type: 'box', style: 'warn', title: 'LE piège n°1 : son, sa, ses', html: 'En français, « son » ou « sa » s’accorde avec la <b>chose possédée</b> (<i>sa</i> sœur, <i>son</i> frère). En anglais, on regarde uniquement le <b>possesseur</b>. Demande-toi : c’est <b>à qui</b> ? À un homme → <b>his</b> ; à une femme → <b>her</b> ; à une chose → <b>its</b> ; à plusieurs → <b>their</b>. Le genre du mot qui suit n’a <b>aucune</b> importance.<br>• Paul et <b>sa</b> sœur → Paul and <b>his</b> sister (la sœur <b>de Paul</b>)<br>• Marie et <b>son</b> frère → Marie and <b>her</b> brother (le frère <b>de Marie</b>)<br><span class="ko">Marie and his brother</span> → <span class="ok">Marie and her brother</span>' },
    { type: 'examples', items: [
      { en: 'Paul is at home with his sister.', fr: 'Paul est à la maison avec sa sœur.', note: 'La sœur <b>de Paul</b> (un homme) → <b>his</b>.' },
      { en: 'Marie is with her brother.', fr: 'Marie est avec son frère.', note: 'Le frère <b>de Marie</b> (une femme) → <b>her</b>.' },
      { en: 'Mr. Diaz is in his office.', fr: 'M. Diaz est dans son bureau.' },
      { en: 'Ms. Chen and her assistant are in Tokyo.', fr: 'Mme Chen et son assistant sont à Tokyo.' },
      { en: 'The company is famous for its products.', fr: 'L’entreprise est célèbre pour ses produits.', note: 'L’entreprise = une chose → <b>its</b>.' },
      { en: 'Wash your hands, please.', fr: 'Lave-toi les mains, s’il te plaît.', note: 'Pour les parties du corps, l’anglais met un possessif là où le français met « le, la, les ».' }
    ] },

    { type: 'h', text: 'Les pronoms possessifs : mine, yours, his…' },
    { type: 'p', html: 'Pour dire « le mien, la tienne, les nôtres… » ou « à moi, à toi… », on utilise un <b>pronom possessif</b>. Il <b>remplace</b> le nom : on ne met rien après, et <b>jamais</b> <i>the</i> devant.' },
    { type: 'table', head: ['Adjectif + nom', 'Pronom (seul)', 'Français'], rows: [
      ['my bag', '<b>mine</b>', 'le mien, la mienne, les miens… / à moi'],
      ['your bag', '<b>yours</b>', 'le tien, le vôtre… / à toi, à vous'],
      ['his bag', '<b>his</b>', 'le sien… / à lui'],
      ['her bag', '<b>hers</b>', 'le sien… / à elle'],
      ['our bag', '<b>ours</b>', 'le nôtre… / à nous'],
      ['their bag', '<b>theirs</b>', 'le leur… / à eux, à elles']
    ], caption: '<b>His</b> ne change pas. <i>Its</i> ne s’emploie pas comme pronom possessif. Et <b>jamais d’apostrophe</b> dans <i>yours, hers, ours, theirs</i>.' },
    { type: 'examples', items: [
      { en: "Is this pen yours? — Yes, it's mine.", fr: 'Ce stylo est à toi ? — Oui, c’est le mien.' },
      { en: "This isn't my coat. Mine is black.", fr: 'Ce n’est pas mon manteau. Le mien est noir.' },
      { en: 'Their office is big, but ours is small.', fr: 'Leur bureau est grand, mais le nôtre est petit.' },
      { en: 'The blue car is hers.', fr: 'La voiture bleue est à elle.' }
    ] },
    { type: 'box', style: 'warn', title: 'Pièges : pas de « the », pas d’apostrophe', html: '<span class="ko">It’s the mine.</span> → <span class="ok">It’s mine.</span> (C’est le mien.)<br><span class="ko">Is this your’s?</span> → <span class="ok">Is this yours?</span><br><span class="ko">This is mine car.</span> → <span class="ok">This is my car.</span> (devant un nom, on utilise l’adjectif <i>my</i>)' },

    { type: 'h', text: 'Its ou it’s ?' },
    { type: 'table', head: ['Mot', 'Sens', 'Exemple'], rows: [
      ['<b>its</b>', 'son, sa, ses (le possesseur est une chose ou un animal)', 'The company changed <b>its</b> logo.'],
      ['<b>it’s</b>', '= <i>it is</i> (ou <i>it has</i>)', '<b>It’s</b> late. (= It is late.)']
    ], caption: 'Ces deux mots se prononcent exactement pareil. Test rapide : si tu peux remplacer par <i>it is</i>, écris <b>it’s</b> ; sinon, écris <b>its</b>.' },
    { type: 'examples', items: [
      { en: 'The hotel is nice. Its pool is huge.', fr: 'L’hôtel est agréable. Sa piscine est immense.' },
      { en: "It's a big company.", fr: 'C’est une grande entreprise.' },
      { en: 'This car is old, but its engine is new.', fr: 'Cette voiture est vieille, mais son moteur est neuf.' },
      { en: "It's cold in the meeting room.", fr: 'Il fait froid dans la salle de réunion.' }
    ] },

    { type: 'h', text: 'Le génitif ’s : le bureau de Tom' },
    { type: 'p', html: 'Pour dire « le bureau <b>de</b> Tom », l’anglais dit <b>Tom’s office</b>. On met d’abord le <b>possesseur</b>, puis <b>’s</b>, puis la chose possédée. L’ordre est donc <b>inversé</b> par rapport au français, et on ne met pas de <i>the</i> devant un prénom. On l’appelle le <b>génitif</b> (ou « cas possessif »).' },
    { type: 'table', head: ['Cas', 'Règle', 'Exemple', 'Français'], rows: [
      ['un possesseur (singulier)', '+ <b>’s</b>', 'the manager<b>’s</b> office', 'le bureau du manager'],
      ['pluriel en -s', '+ <b>’</b> seulement', 'the employees<b>’</b> lounge', 'la salle de pause des employés'],
      ['pluriel sans -s (irrégulier)', '+ <b>’s</b>', 'the children<b>’s</b> toys', 'les jouets des enfants'],
      ['deux possesseurs ensemble', '<b>’s</b> sur le dernier', 'Anna and Leo<b>’s</b> house', 'la maison d’Anna et de Leo']
    ], caption: 'Si le nom se termine déjà par <b>s</b> (<i>James, Chris</i>), les deux formes sont acceptées : <i>James<b>’s</b> car</i> ou <i>James<b>’</b> car</i>.' },
    { type: 'box', style: 'warn', title: 'Piège : ne traduis pas mot à mot', html: '« Le bureau de Tom » ≠ <span class="ko">the office of Tom</span> ≠ <span class="ko">the office’s Tom</span>.<br>Retourne la phrase : <b>qui possède ?</b> (Tom) + <b>’s</b> + <b>quoi ?</b> (office) → <span class="ok">Tom’s office</span>.<br>De même : « la voiture de ma sœur » → <span class="ok">my sister’s car</span>.' },
    { type: 'examples', items: [
      { en: "This is Sofia's laptop.", fr: 'C’est l’ordinateur portable de Sofia.' },
      { en: "The manager's office is on the left.", fr: 'Le bureau du manager est à gauche.' },
      { en: "The employees' lounge is closed today.", fr: 'La salle de pause des employés est fermée aujourd’hui.', note: '<i>employees</i> finit déjà par <b>s</b> → on ajoute seulement l’apostrophe.' },
      { en: "The children's toys are in the car.", fr: 'Les jouets des enfants sont dans la voiture.', note: '<i>children</i> est un pluriel <b>sans s</b> → <b>’s</b>.' },
      { en: "My parents' house is in Nantes.", fr: 'La maison de mes parents est à Nantes.' }
    ] },
    { type: 'box', style: 'tip', title: 'À l’oral, écoute bien', html: 'Le <b>’s</b> se prononce comme le <b>s</b> du pluriel : /s/ (<i>Mark’s</i>), /z/ (<i>Tom’s</i>) ou /ɪz/, avec une syllabe en plus (<i>Alice’s</i>). Attention : <i>Tom’s here</i> veut dire <i>Tom <b>is</b> here</i> (Tom est là). Si un nom suit (<i>Tom’s car</i>), c’est un possessif.' },

    { type: 'h', text: '« Of » pour les choses' },
    { type: 'p', html: 'Avec les <b>choses</b>, on utilise en général <b>of</b>, dans le même ordre qu’en français : <i>the end <b>of</b> the meeting</i> (la fin de la réunion). On garde <b>’s</b> surtout pour les personnes, les animaux, les entreprises et les pays, ainsi qu’avec les mots de temps : <i>today’s meeting</i> (la réunion d’aujourd’hui).' },
    { type: 'examples', items: [
      { en: 'Please wait until the end of the meeting.', fr: 'Merci d’attendre la fin de la réunion.' },
      { en: 'What is the name of the hotel?', fr: 'Quel est le nom de l’hôtel ?' },
      { en: "Today's meeting is at 3 p.m.", fr: 'La réunion d’aujourd’hui est à 15 h.', note: 'Mot de temps → <b>’s</b> : <i>today’s, tomorrow’s, next week’s</i>.' },
      { en: "The company's profits are high this year.", fr: 'Les bénéfices de l’entreprise sont élevés cette année.', note: 'Une entreprise → <b>’s</b> possible (très fréquent au TOEIC).' }
    ] },

    { type: 'h', text: 'Whose ? À qui… ?' },
    { type: 'p', html: 'Pour demander <b>à qui</b> appartient quelque chose, on utilise <b>whose</b> + nom : <i><b>Whose</b> bag is this?</i> (À qui est ce sac ?) On répond avec <b>’s</b> ou avec un pronom possessif : <i>It’s Karim’s.</i> / <i>It’s mine.</i>' },
    { type: 'box', style: 'warn', title: 'Piège : whose ≠ who’s', html: '<b>Whose</b> (à qui) et <b>who’s</b> (= <i>who is</i>, qui est) se prononcent pareil.<br><i><b>Whose</b> phone is this?</i> → À qui est ce téléphone ?<br><i><b>Who’s</b> your manager?</i> → Qui est ton manager ?' },
    { type: 'dialog', title: 'Objet trouvé au bureau', lines: [
      { speaker: 'W', en: 'Whose laptop is this?', fr: 'À qui est cet ordinateur portable ?' },
      { speaker: 'M', en: "It's not mine. Mine is in my bag.", fr: 'Ce n’est pas le mien. Le mien est dans mon sac.' },
      { speaker: 'W', en: "Is it Kevin's?", fr: 'C’est celui de Kevin ?' },
      { speaker: 'M', en: "No, his laptop is black. Maybe it's Aisha's.", fr: 'Non, son ordinateur est noir. C’est peut-être celui d’Aisha.' },
      { speaker: 'W', en: 'Oh yes, her name is on it. Thanks!', fr: 'Ah oui, son nom est dessus. Merci !' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'Chaque test contient plusieurs questions de <b>Partie 5</b> sur les pronoms. On te propose souvent quatre formes du même pronom : <i>Ms. Park will present ------- report tomorrow.</i> (she / her / hers / herself) → <b>her</b>, car un nom suit (<i>report</i>). Autres classiques : <b>their / there / they’re</b> et <b>its / it’s</b>. Les pronoms compléments (<i>him, them</i>) et réfléchis (<i>herself</i>) sont expliqués dans la leçon « Les pronoms : compléments, réfléchis et indéfinis ».' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• Pronoms sujets : <b>I, you, he, she, it, we, they</b> (<b>it</b> = une chose).<br>• Possessif + nom : <b>my, your, his, her, its, our, their</b> — accord avec le <b>possesseur</b> (<i>Paul → his sister</i>).<br>• Possessif seul : <b>mine, yours, his, hers, ours, theirs</b> (sans <i>the</i>, sans apostrophe).<br>• <b>its</b> = son, sa (chose) ≠ <b>it’s</b> = it is.<br>• Le bureau de Tom → <b>Tom’s office</b> ; des employés → <b>employees’</b> ; pour les choses → <b>of</b>.<br>• À qui ? → <b>Whose</b> + nom… ?' }
  ],
  exercises: [
    { type: 'gap', q: 'The printer is new. ___ is very fast. (pronom sujet : « elle » = l’imprimante)', answers: ['It'], explain: '<i>The printer</i> est une chose → <b>it</b>, même si « imprimante » est féminin en français. <i>She</i> est réservé aux personnes.' },
    { type: 'mcq', q: 'Comment dit-on « Paul et sa sœur » ?', options: ['Paul and her sister', 'Paul and his sister', 'Paul and its sister'], answer: 1, explain: 'On regarde le <b>possesseur</b> : la sœur est à Paul (un homme) → <b>his</b>. Le fait que <i>sister</i> soit féminin ne compte pas.' },
    { type: 'gap', q: 'Marie works with ___ brother. (le frère de Marie → quel possessif ?)', answers: ['her'], explain: 'Le possesseur est Marie (une femme) → <b>her</b>, même si <i>brother</i> est masculin.' },
    { type: 'mcq', q: '— Is this your pen? — Yes, it\'s ___.', options: ['my', 'mine', 'me', 'the mine'], answer: 1, explain: 'Sans nom après, on utilise le pronom possessif <b>mine</b> (le mien), sans <i>the</i>. <i>My</i> doit être suivi d’un nom.' },
    { type: 'gap', q: 'This isn\'t my coffee. It\'s ___. (en un seul mot : le sien, à elle)', answers: ['hers'], explain: '« Le sien » (à elle) = <b>hers</b>, sans apostrophe.' },
    { type: 'gap', q: 'The hotel is great. ___ restaurant is excellent. (its ou it’s ?)', answers: ['Its'], explain: 'Le restaurant de l’hôtel (une chose) → possessif <b>its</b>. <i>It’s</i> = <i>it is</i> : « It is restaurant » n’a pas de sens.' },
    { type: 'mcq', q: 'Comment dit-on « le bureau du manager » ?', options: ["the office's manager", "the manager's office", 'the manager office', "the office manager's"], answer: 1, explain: 'Possesseur + <b>’s</b> + chose possédée : <b>the manager’s office</b>. <i>The office’s manager</i> voudrait dire « le manager du bureau ».' },
    { type: 'mcq', q: 'Comment dit-on « la salle de pause des employés » ?', options: ["the employee's lounge", "the employees' lounge", "the employees's lounge", "the lounge's employees"], answer: 1, explain: '<i>Les employés</i> = pluriel en <b>-s</b> → on ajoute seulement l’apostrophe : <b>employees’</b>. <i>The employee’s lounge</i> = la salle d’<b>un seul</b> employé.' },
    { type: 'gap', q: 'The ___ (children) toys are in the box.', answers: ["children's"], explain: '<i>Children</i> est un pluriel <b>sans s</b> → on ajoute <b>’s</b> : <i>the children’s toys</i>.' },
    { type: 'mcq', q: '___ jacket is this? — I think it\'s Omar\'s.', options: ['Who', "Who's", 'Whose', 'Whom'], answer: 2, explain: '« À qui est cette veste ? » → <b>Whose</b> + nom. <i>Who’s</i> = <i>who is</i> (qui est).' },
    { type: 'order', answer: 'Is this umbrella yours or mine?', alts: ['Is this umbrella mine or yours?'], fr: 'Ce parapluie est à toi ou à moi ?', explain: 'Question avec <b>be</b> : <b>Is</b> + sujet (<i>this umbrella</i>) + pronoms possessifs <b>yours</b> / <b>mine</b>, sans nom après.' },
    { type: 'order', answer: 'What is the name of your company?', fr: 'Quel est le nom de ton entreprise ?', explain: 'Pour les choses, on utilise souvent <b>of</b>, dans le même ordre qu’en français : <i>the name <b>of</b> your company</i>. (On peut aussi dire <i>your company’s name</i>.)' },
    { type: 'listen', say: "Hi, I'm Olivia. This is my brother, Daniel. His wife is Canadian.", q: 'Qui a la nationalité canadienne ?', options: ['Olivia', 'Daniel', 'La femme de Daniel', 'La femme d’Olivia'], answer: 2, explain: 'Olivia dit <i><b>His</b> wife is Canadian</i> : <b>his</b> renvoie à Daniel (un homme). Pour la femme d’Olivia, elle aurait dit <i>my wife</i>.' },
    { type: 'dictation', say: 'Their office is next to ours.', accent: 'en-GB', answers: ['Their office is next to ours'], explain: '« Leur bureau est à côté du nôtre. » <b>Their</b> (leur) s’écrit <i>t-h-e-i-r</i> ; <b>ours</b> (le nôtre) n’a pas d’apostrophe.' },
    { type: 'mcq', q: 'Ms. Okafor sent ------- report to the director this morning. <small>(style TOEIC)</small>', options: ['she', 'her', 'hers', 'herself'], answer: 1, explain: 'Un nom suit le trou (<i>report</i>) → il faut un adjectif possessif : <b>her</b> report (son rapport).' },
    { type: 'mcq', q: 'All employees must wear ------- badges at all times. <small>(style TOEIC)</small>', options: ['there', "they're", 'their', 'them'], answer: 2, explain: 'Les badges des employés → possessif <b>their</b> (leurs). <i>There</i> = là ; <i>they’re</i> = <i>they are</i>.' }
  ]
});
