LE.register({
  id: 'p03',
  kind: 'pron',
  title: 'Chiffres, lettres, dates et prix à l’oral',
  subtitle: 'Comprendre du premier coup un prix, une heure, une date ou une adresse e-mail épelée',
  level: 'A1',
  minutes: 40,
  goals: [
    'Épeler un nom ou une adresse e-mail et reconnaître les lettres piégeuses (<b>A, E, I, G, J</b>)',
    'Distinguer <b>13</b> et <b>30</b>, <b>14</b> et <b>40</b>… à l’oral',
    'Comprendre les grands nombres, les décimales, les prix et les pourcentages',
    'Reconnaître les dates, les heures et les numéros (téléphone, chambre, vol)'
  ],
  blocks: [
    { type: 'h', text: 'Pourquoi c’est essentiel pour le TOEIC' },
    { type: 'p', html: 'Dans les <b>Parties 3 et 4</b> du TOEIC, beaucoup de questions portent sur un <b>chiffre</b> : un prix, une heure, une date, un numéro de chambre ou de vol, un pourcentage. Les options sont <b>écrites en chiffres</b> (<i>$15.50, 7:45, June 14</i>), alors que tu les <b>entends en mots</b> : il faut faire la conversion instantanément. Et dans la vie professionnelle, tu devras souvent <b>épeler</b> ton nom ou ton adresse e-mail au téléphone.' },

    { type: 'h', text: 'L’alphabet anglais' },
    { type: 'table', head: ['Son', 'Lettres', 'Repère français'], rows: [
      ['/eɪ/ « éï »', 'A, H, J, K', 'A = « éï », H = « éïtch », J = « djéï », K = « kéï »'],
      ['/iː/ « ii »', 'B, C, D, E, G, P, T, V, Z (US)', 'E = « ii », G = « djii », Z = « zii » en américain'],
      ['/e/ « è »', 'F, L, M, N, S, X, Z (UK)', 'F = « èf », L = « èl », Z = « zèd » en britannique'],
      ['/aɪ/ « aï »', 'I, Y', 'I = « aï », Y = « ouaï »'],
      ['/oʊ/ « o-ou »', 'O', 'O = « o-ou »'],
      ['/uː/ « ou »', 'Q, U, W', 'Q = « kiou », U = « you », W = « DEU-bəl-you » (<i>double u</i>)'],
      ['/ɑːr/ « ar »', 'R', 'R = « ar » (US) / « ââ » (UK)']
    ], caption: 'Apprends les lettres par familles de sons : c’est beaucoup plus facile. Z se dit « zèd » au Royaume-Uni, au Canada et en Australie.' },
    { type: 'box', style: 'warn', title: 'Les lettres qui piègent les francophones', html: '• Le <b>E</b> anglais se dit « ii » : il ressemble à notre <b>I</b> !<br>• Le <b>I</b> anglais se dit « aï ».<br>• Le <b>A</b> anglais se dit « éï ».<br>• <b>G</b> (« djii ») et <b>J</b> (« djéï ») sont comme <b>inversés</b> par rapport au français (G = « jé », J = « ji »).<br>• <b>R</b> = « ar », <b>Y</b> = « ouaï », <b>W</b> = « double-you », <b>H</b> = « éïtch ».' },
    { type: 'pairs', items: [
      { a: 'G', b: 'J', note: '« djii » / « djéï »' },
      { a: 'E', b: 'I', note: '« ii » / « aï »' },
      { a: 'A', b: 'E', note: '« éï » / « ii »' },
      { a: 'I', b: 'Y', note: '« aï » / « ouaï »' },
      { a: 'A', b: 'R', note: '« éï » / « ar »' }
    ] },
    { type: 'examples', items: [
      { en: 'Please send it as a PDF.', fr: 'Envoie-le en PDF, s’il te plaît.', note: 'PDF = « pii-dii-èf ».' },
      { en: 'Can I see your ID, please?', fr: 'Puis-je voir votre pièce d’identité ?', note: 'ID = « aï-dii ».' },
      { en: 'The CEO is in a meeting.', fr: 'Le PDG est en réunion.', note: 'CEO (<i>Chief Executive Officer</i>) = « sii-ii-o-ou ».' },
      { en: 'Call HR for more information.', fr: 'Appelle les RH pour plus d’informations.', note: 'HR (<i>Human Resources</i>) = « éïtch-ar ».' },
      { en: 'Our IT team can help you.', fr: 'Notre équipe informatique peut t’aider.', note: 'IT (<i>Information Technology</i>) = « aï-tii ».' }
    ] },

    { type: 'h', text: 'Épeler un nom ou une adresse e-mail' },
    { type: 'table', head: ['Signe', 'En anglais', 'Exemple'], rows: [
      ['@', '<b>at</b>', 'maria@example.com → <i>maria <b>at</b> example dot com</i>'],
      ['.', '<b>dot</b> (dans une adresse) ; <b>point</b> (dans un nombre)', 'example.com → <i>example <b>dot</b> com</i>'],
      ['_', '<b>underscore</b>', 'j_kim → <i>J <b>underscore</b> Kim</i>'],
      ['-', '<b>hyphen</b> ou <b>dash</b>', 'lee-park → <i>Lee <b>hyphen</b> Park</i>'],
      ['/', '<b>slash</b>', 'example.com/jobs → <i>example dot com <b>slash</b> jobs</i>'],
      ['A / a', '<b>capital A</b> (majuscule) ; <b>lowercase a</b> (minuscule)', 'Anna → <i><b>capital</b> A, N, N, A</i>'],
      ['nn', '<b>double N</b>', 'Anna → <i>A, <b>double N</b>, A</i>']
    ] },
    { type: 'dialog', title: 'Épeler au téléphone', lines: [
      { speaker: 'W', en: 'Could I have your e-mail address, please?', fr: 'Pourriez-vous me donner votre adresse e-mail, s’il vous plaît ?' },
      { speaker: 'M', en: "Sure. It's karim underscore haddad at example dot com.", fr: 'Bien sûr. C’est karim_haddad@example.com.' },
      { speaker: 'W', en: 'Could you spell your last name, please?', fr: 'Pourriez-vous épeler votre nom de famille, s’il vous plaît ?' },
      { speaker: 'M', en: 'Of course. H, A, double D, A, D.', fr: 'Bien sûr. H, A, deux D, A, D.' },
      { speaker: 'W', en: "Thank you. So that's karim underscore haddad at example dot com?", fr: 'Merci. Donc c’est karim_haddad@example.com ?' },
      { speaker: 'M', en: "That's right.", fr: 'C’est bien ça.' }
    ] },
    { type: 'box', style: 'tip', title: 'Au téléphone : « B as in Boston »', html: 'Pour éviter les confusions, les anglophones précisent souvent une lettre avec un mot : <i>B as in Boston, D as in David</i> (« B comme Boston, D comme David »). Tu peux faire pareil : <i>M as in Mary, N as in Nancy</i>. Et pour deux lettres identiques qui se suivent, on dit <b>double</b> : <i>double L, double S</i>.' },

    { type: 'h', text: '13 ou 30 ? Le piège des -teen et des -ty' },
    { type: 'p', html: 'C’est <b>le</b> piège n°1 des chiffres à l’oral. Les nombres de <b>13 à 19</b> finissent par <b>-teen</b> : on entend un « ii » <b>long</b> et un <b>n</b> à la fin, et l’accent tombe généralement sur <b>-TEEN</b> (thir<b>TEEN</b>). Les dizaines de <b>30 à 90</b> finissent par <b>-ty</b> : un « i » <b>bref</b>, pas de n, et l’accent sur la <b>première</b> syllabe (<b>THIR</b>ty). En américain, le t de <i>-ty</i> ressemble souvent à un d rapide : <i>thirty</i> ≈ « THEUR-di ».' },
    { type: 'table', head: ['Nombre', 'À l’oral', 'Nombre', 'À l’oral'], rows: [
      ['13', 'thir<b>TEEN</b>', '30', '<b>THIR</b>ty'],
      ['14', 'four<b>TEEN</b>', '40', '<b>FOR</b>ty'],
      ['15', 'fif<b>TEEN</b>', '50', '<b>FIF</b>ty'],
      ['16', 'six<b>TEEN</b>', '60', '<b>SIX</b>ty'],
      ['17', 'seven<b>TEEN</b>', '70', '<b>SEV</b>enty'],
      ['18', 'eigh<b>TEEN</b>', '80', '<b>EIGH</b>ty'],
      ['19', 'nine<b>TEEN</b>', '90', '<b>NINE</b>ty']
    ], caption: 'Orthographe : <b>forty</b> (sans u !), <b>ninety</b> (avec un e), <b>eighteen</b> (un seul t).' },
    { type: 'pairs', items: [
      { a: 'thirteen', b: 'thirty', note: '13 / 30' },
      { a: 'fourteen', b: 'forty', note: '14 / 40' },
      { a: 'fifteen', b: 'fifty', note: '15 / 50' },
      { a: 'sixteen', b: 'sixty', note: '16 / 60' },
      { a: 'seventeen', b: 'seventy', note: '17 / 70' },
      { a: 'eighteen', b: 'eighty', note: '18 / 80' },
      { a: 'nineteen', b: 'ninety', note: '19 / 90' }
    ] },
    { type: 'box', style: 'warn', title: 'Attention : l’accent peut se déplacer', html: 'Devant un nom, l’accent de <i>-teen</i> recule souvent : <i><b>FIF</b>teen <b>MIN</b>utes</i>. Pour ne pas te tromper, écoute surtout <b>la fin</b> du mot : <i>-teen</i> = « tiin », long, avec un <b>n</b> ; <i>-ty</i> = « ti » ou « di », court, sans n. En cas de doute au téléphone, on peut demander : <i>Is that one-five or five-zero?</i> (« C’est un-cinq ou cinq-zéro ? »)' },

    { type: 'h', text: 'Grands nombres, décimales, prix et pourcentages' },
    { type: 'p', html: '<i>hundred</i> (cent), <i>thousand</i> (mille) et <i>million</i> ne prennent <b>jamais de s</b> après un nombre : <i>two hundred, five thousand, three million</i>. En britannique, on ajoute toujours <b>and</b> après <i>hundred</i> quand il y a des dizaines ou des unités : <i>one hundred <b>and</b> five</i> ; en américain, on l’entend souvent aussi, mais <i>one hundred five</i> est courant. Les décimales se lisent <b>chiffre par chiffre</b>, après le mot <b>point</b> : <i>3.14 = three point one four</i>. Pour les pourcentages, on dit <b>percent</b>, sans s.' },
    { type: 'table', head: ['Écrit', 'À l’oral'], rows: [
      ['105', 'one hundred (and) five'],
      ['250', 'two hundred (and) fifty'],
      ['1,500', 'one thousand five hundred <small>ou</small> fifteen hundred'],
      ['12,000', 'twelve thousand'],
      ['2,300,000', 'two million three hundred thousand'],
      ['2.5', 'two point five'],
      ['0.75', 'zero point seven five <small>ou</small> point seven five'],
      ['15%', 'fifteen percent']
    ] },
    { type: 'box', style: 'warn', title: 'Virgule et point : c’est l’inverse du français !', html: 'En anglais, la <b>virgule</b> sépare les milliers et le <b>point</b> sépare les décimales : <b>1,500</b> = mille cinq cents ; <b>1.5</b> = un virgule cinq (<i>one point five</i>). Au TOEIC, <i>$2,500</i> et <i>$2.50</i> ne sont pas du tout le même prix !' },
    { type: 'table', head: ['Prix écrit', 'À l’oral (courant)', 'À l’oral (complet)'], rows: [
      ['$4.99', 'four ninety-nine', 'four dollars and ninety-nine cents'],
      ['$15.50', 'fifteen fifty', 'fifteen dollars and fifty cents'],
      ['$0.75', 'seventy-five cents', '—'],
      ['$1,200', 'twelve hundred dollars', 'one thousand two hundred dollars'],
      ['€20', 'twenty euros', '—'],
      ['£8.25', 'eight twenty-five', 'eight pounds twenty-five (pence)']
    ], caption: 'Le symbole s’écrit <b>avant</b> le nombre, mais se dit <b>après</b> : $5 = <i>five dollars</i>.' },
    { type: 'examples', items: [
      { en: 'This sandwich is four ninety-nine.', fr: 'Ce sandwich coûte 4,99 $.', note: 'Façon courte : on ne dit ni <i>dollars</i> ni <i>cents</i>.' },
      { en: 'The total comes to twelve hundred dollars.', fr: 'Le total s’élève à 1 200 $.', note: '<i>twelve hundred</i> = 1 200 (« douze cents »).' },
      { en: 'Tickets are twenty euros each.', fr: 'Les billets coûtent 20 € chacun.', accent: 'en-GB' },
      { en: 'Sales went up by fifteen percent.', fr: 'Les ventes ont augmenté de 15 %.', note: '<i>percent</i> : jamais de s.' },
      { en: 'Our market share is two point five percent.', fr: 'Notre part de marché est de 2,5 %.', note: '2.5 = <i>two point five</i>.' }
    ] },

    { type: 'h', text: 'Les dates' },
    { type: 'p', html: 'Pour les dates, on utilise les <b>nombres ordinaux</b> (<i>first, second, third…</i> = premier, deuxième, troisième…). En <b>américain</b>, on écrit <i>May 5</i> et on dit <i>May fifth</i> ; en <b>britannique</b>, on écrit <i>5 May</i> et on dit <i>the fifth of May</i>. Les <b>années</b> se lisent souvent en deux morceaux : <i>1999 = nineteen ninety-nine</i>, <i>2027 = twenty twenty-seven</i>. Mais <i>2008 = two thousand eight</i> (britannique : <i>two thousand and eight</i>).' },
    { type: 'table', head: ['Chiffre', 'Ordinal', 'Remarque'], rows: [
      ['1st, 2nd, 3rd', 'first, second, third', 'irréguliers'],
      ['4th, 6th, 7th…', 'fourth, sixth, seventh…', 'nombre + <b>th</b>'],
      ['5th, 12th', 'fifth, twelfth', 've → <b>f</b>'],
      ['8th', 'eighth', 'un seul t'],
      ['9th', 'ninth', 'sans e'],
      ['20th, 30th', 'twentieth, thirtieth', 'y → <b>ie</b> + th'],
      ['21st, 22nd, 23rd', 'twenty-first, twenty-second, twenty-third', 'seul le dernier mot devient ordinal']
    ] },
    { type: 'examples', items: [
      { en: 'The meeting is on May fifth.', fr: 'La réunion est le 5 mai.', note: 'Américain : écrit <i>May 5</i>, mais dit <i>May fifth</i>.' },
      { en: 'The conference starts on the third of June.', fr: 'La conférence commence le 3 juin.', accent: 'en-GB', note: 'Britannique : <i>the third of June</i>.' },
      { en: 'I was born in nineteen ninety-nine.', fr: 'Je suis née en 1999.' },
      { en: 'The contract ends in twenty twenty-seven.', fr: 'Le contrat se termine en 2027.' },
      { en: 'The office opened in two thousand eight.', fr: 'Le bureau a ouvert en 2008.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : 05/06 aux États-Unis', html: 'Aux États-Unis, on écrit le <b>mois d’abord</b> : <b>05/06/2027</b> = <i>May 6, 2027</i> (le 6 mai), et non le 5 juin ! Au Royaume-Uni, c’est comme en France (jour/mois). Dans un document du TOEIC, vérifie toujours le contexte.' },

    { type: 'h', text: 'L’heure' },
    { type: 'table', head: ['Heure', 'Façon « chiffres » (la plus courante)', 'Façon « classique »'], rows: [
      ['7:00', "seven <small>ou</small> seven o'clock", '—'],
      ['7:05', 'seven-oh-five', 'five past seven <small>ou</small> five after seven (US)'],
      ['7:15', 'seven fifteen', 'a quarter past seven <small>ou</small> a quarter after seven (US)'],
      ['7:30', 'seven thirty', 'half past seven'],
      ['7:45', 'seven forty-five', 'a quarter to eight'],
      ['7:50', 'seven fifty', 'ten to eight'],
      ['12:00', "twelve <small>ou</small> twelve o'clock", 'noon (midi) <small>ou</small> midnight (minuit)']
    ], caption: '<b>a.m.</b> = de minuit à midi ; <b>p.m.</b> = de midi à minuit (<i>9 p.m.</i> = 21 h). À l’oral, on utilise rarement le format 24 h. Attention : <i>a quarter to eight</i> = 7 h 45 (on annonce l’heure <b>suivante</b>, comme « huit heures moins le quart ») et <i>half past seven</i> = 7 h 30.' },

    { type: 'h', text: 'Téléphone, chambre, vol : chiffre par chiffre' },
    { type: 'p', html: 'Les numéros de téléphone se lisent <b>chiffre par chiffre</b>, par petits groupes. Le 0 se dit <b>oh</b> (comme la lettre O) ou <b>zero</b>. Deux chiffres identiques qui se suivent : <b>double</b> (surtout en britannique : <i>double five</i>) ou on répète le chiffre (<i>five five</i>). Les numéros de chambre, de vol ou de porte se lisent souvent par groupes : <i>Room 305 = three-oh-five</i>.' },
    { type: 'table', head: ['Écrit', 'À l’oral'], rows: [
      ['555-0142', 'five five five, oh one four two'],
      ['extension 27', 'extension twenty-seven'],
      ['Room 305', 'room three-oh-five'],
      ['Room 1204', 'room twelve-oh-four'],
      ['Flight 217', 'flight two-seventeen <small>ou</small> two-one-seven'],
      ['Gate B14', 'gate B fourteen']
    ] },
    { type: 'dialog', title: 'Confirmer une réservation', lines: [
      { speaker: 'W', en: 'Good morning, Lakeview Hotel. How may I help you?', fr: 'Bonjour, hôtel Lakeview. Que puis-je faire pour vous ?' },
      { speaker: 'M', en: "Hi, I'd like to confirm my reservation. The name is Petrov: P, E, T, R, O, V.", fr: 'Bonjour, je voudrais confirmer ma réservation. Au nom de Petrov : P, E, T, R, O, V.' },
      { speaker: 'W', en: 'Thank you, Mr. Petrov. You arrive on June fourteenth, for three nights?', fr: 'Merci, monsieur Petrov. Vous arrivez le 14 juin, pour trois nuits ?' },
      { speaker: 'M', en: "Actually, it's the fifteenth, not the fourteenth.", fr: 'En fait, c’est le 15, pas le 14.' },
      { speaker: 'W', en: "Sorry about that. Your room is three-oh-five, and the rate is one nineteen a night.", fr: 'Désolée. Votre chambre est la 305, et le tarif est de 119 $ la nuit.' },
      { speaker: 'M', en: 'Great. And what time is breakfast?', fr: 'Parfait. Et le petit déjeuner est à quelle heure ?' },
      { speaker: 'W', en: 'From six thirty to ten a.m.', fr: 'De 6 h 30 à 10 h.' }
    ] },
    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Parties 3 et 4</b>, les questions <i>How much…?</i>, <i>What time…?</i>, <i>When…?</i> sont très fréquentes. Deux conseils : 1) lis les options <b>avant</b> l’audio pour savoir quel chiffre écouter ; 2) méfie-toi des <b>corrections</b> : dans le dialogue ci-dessus, on entend <i>fourteenth</i>, mais la bonne date est <i>the fifteenth</i>. Le TOEIC adore ce piège (<i>Actually…</i>, <i>Sorry, I meant…</i>).' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• Lettres piégeuses : <b>A</b> = « éï », <b>E</b> = « ii », <b>I</b> = « aï », <b>G</b> = « djii », <b>J</b> = « djéï », <b>R</b> = « ar », <b>Y</b> = « ouaï ».<br>• E-mail : <b>at</b> (@), <b>dot</b> (.), <b>underscore</b> (_), <b>hyphen / dash</b> (-).<br>• <b>-teen</b> = long, avec un n (thir<b>TEEN</b>) ; <b>-ty</b> = court, sans n (<b>THIR</b>ty).<br>• <i>hundred, thousand, million</i> : jamais de s après un nombre. <b>1,500</b> = mille cinq cents ; <b>1.5</b> = <i>one point five</i>.<br>• Prix : <i>$4.99 = four ninety-nine</i>. Dates : <i>May fifth</i> (US) / <i>the fifth of May</i> (UK) ; <i>1999 = nineteen ninety-nine</i>.<br>• Heures : <i>seven forty-five = a quarter to eight</i>. Numéros : chiffre par chiffre, <b>oh</b> pour 0 (<i>three-oh-five</i>).' }
  ],
  exercises: [
    { type: 'mcq', q: 'Comment se prononce la lettre <b>E</b> en anglais ?', options: ['Comme le « e » de « le »', 'Comme un « i » long : « ii »', 'Comme « éï »', 'Comme « aï »'], answer: 1, explain: 'La lettre <b>E</b> se dit /iː/, « ii », comme notre lettre I. « éï » est la lettre <b>A</b>, et « aï » la lettre <b>I</b>.' },
    { type: 'mcq', q: 'Quelle lettre anglaise se prononce « djii » ?', options: ['J', 'D', 'G', 'Z'], answer: 2, explain: '<b>G</b> = « djii ». Le <b>J</b> se dit « djéï », le <b>D</b> « dii » et le <b>Z</b> « zii » (US) ou « zèd » (UK).' },
    { type: 'listen', say: 'Your booking reference is J, A, G, five, E.', q: 'Quelle référence de réservation as-tu entendue ?', options: ['GAJ5I', 'JEG5E', 'JAG5E', 'JAG5I'], answer: 2, explain: 'J = « djéï », A = « éï », G = « djii », puis 5, puis E = « ii » → <b>JAG5E</b>. Les autres options confondent G / J, A / E ou E / I.' },
    { type: 'listen', say: 'My e-mail is lena dot park at example dot com.', q: 'Quelle adresse as-tu entendue ?', options: ['lena_park@example.com', 'lena.park@example.com', 'lena-park@example.com', 'lenapark@example.com'], answer: 1, explain: '<i>dot</i> = point (.), <i>at</i> = @. Un tiret bas se dirait <i>underscore</i> et un tiret <i>hyphen</i> ou <i>dash</i>.' },
    { type: 'listen', say: 'Please go to gate forty.', q: 'À quelle porte faut-il aller ?', options: ['Porte 4', 'Porte 14', 'Porte 40'], answer: 2, explain: '<i>forty</i> (40) : accent sur la première syllabe (<b>FOR</b>ty), fin courte, sans n. <i>fourteen</i> (14) finirait par un « tiin » long.' },
    { type: 'listen', say: 'The bus leaves in fifteen minutes.', accent: 'en-AU', q: 'Le bus part dans…', options: ['5 minutes', '50 minutes', '15 minutes'], answer: 2, explain: 'On entend le « tiin » long et le <b>n</b> final de <i>fifteen</i> (15). <i>fifty</i> (50) se terminerait par un « ti » court, sans n.' },
    { type: 'listen', say: 'This sandwich is four ninety-nine.', q: 'Combien coûte le sandwich ?', options: ['$4.99', '$4.19', '$9.49', '$49.90'], answer: 0, explain: '<i>four ninety-nine</i> = 4,99 $ : à l’oral, on omet souvent <i>dollars</i> et <i>cents</i>. 4,19 $ se dirait <i>four nineteen</i>.' },
    { type: 'listen', say: 'The workshop starts at a quarter to eight.', accent: 'en-GB', q: 'À quelle heure commence l’atelier ?', options: ['7:15', '8:15', '8:45', '7:45'], answer: 3, explain: '<i>a quarter to eight</i> = « huit heures moins le quart » = 7 h 45. 8 h 15 se dirait <i>a quarter past eight</i>.' },
    { type: 'listen', say: 'Your room is three-oh-five.', q: 'Quel est le numéro de la chambre ?', options: ['Room 35', 'Room 305', 'Room 350', 'Room 3005'], answer: 1, explain: '<i>three-oh-five</i> = 3-0-5 : le <i>oh</i> représente le zéro → chambre 305.' },
    { type: 'listen', say: 'We sold two thousand three hundred units last month.', accent: 'en-CA', q: 'Combien d’unités ont été vendues le mois dernier ?', options: ['2,300', '2,003', '20,300', '23,000'], answer: 0, explain: '<i>two thousand three hundred</i> = 2 300, écrit <b>2,300</b> en anglais (la virgule sépare les milliers).' },
    { type: 'dictation', say: 'The meeting is on May fifth.', answers: ['The meeting is on May fifth', 'The meeting is on May 5th', 'The meeting is on May 5'], explain: 'En américain, <i>May 5</i> se lit <i>May fifth</i> (nombre ordinal). Traduction : « La réunion est le 5 mai. »' },
    { type: 'dictation', say: 'The train leaves at seven forty-five.', answers: ['The train leaves at seven forty-five', 'The train leaves at seven forty five', 'The train leaves at 7:45', 'The train leaves at 7.45', 'The train leaves at 7 45'], explain: '<i>seven forty-five</i> = 7:45, soit 7 h 45 (on peut aussi dire <i>a quarter to eight</i>).' },
    { type: 'dictation', say: 'It costs fifteen dollars and fifty cents.', answers: ['It costs fifteen dollars and fifty cents', 'It costs 15 dollars and 50 cents', 'It costs $15.50', 'It costs $15 and 50 cents', 'It costs 15 dollars and fifty cents', 'It costs fifteen dollars and 50 cents'], explain: '<i>fifteen dollars and fifty cents</i> = $15.50 (15,50 $). Version courte à l’oral : <i>fifteen fifty</i>.' },
    { type: 'dictation', say: 'My phone number is five five five, oh one four two.', answers: ['My phone number is 555-0142', 'My phone number is 555 0142', 'My phone number is 5550142', 'My phone number is 555, 0142', 'My phone number is five five five oh one four two', 'My phone number is five five five, oh one four two', 'My phone number is five five five zero one four two'], explain: 'Les numéros de téléphone se lisent chiffre par chiffre ; <i>oh</i> = 0. Le numéro est donc 555-0142.' },
    { type: 'dictation', say: 'She was born in nineteen ninety-nine.', answers: ['She was born in 1999', 'She was born in nineteen ninety-nine', 'She was born in nineteen ninety nine'], explain: 'Les années se lisent en deux morceaux : 19 / 99 → <i>nineteen ninety-nine</i> = 1999.' },
    { type: 'dictation', say: 'Our market share is two point five percent.', answers: ['Our market share is two point five percent', 'Our market share is 2.5 percent', 'Our market share is 2.5%', 'Our market share is 2.5 %', 'Our market share is 2.5 per cent', 'Our market share is two point five per cent'], explain: '<i>two point five</i> = 2.5 (2,5 en français) : en anglais, le <b>point</b> sépare les décimales. « Notre part de marché est de 2,5 %. »' }
  ]
});
