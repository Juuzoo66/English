LE.register({
  id: 'p04',
  kind: 'pron',
  title: 'L’accent de mot et l’accent de phrase',
  subtitle: 'Le rythme de l’anglais : la clé pour reconnaître les mots à l’oral',
  level: 'A2',
  minutes: 35,
  goals: [
    'Trouver et prononcer la <b>syllabe accentuée</b> d’un mot (<i>deVElop, inforMAtion</i>)',
    'Distinguer le nom et le verbe grâce à l’accent : <i>a REcord / to reCORD</i>',
    'Reconnaître les mots « transparents » qui se prononcent autrement qu’en français',
    'Repérer les mots importants d’une phrase grâce à l’accent et à l’intonation'
  ],
  blocks: [
    { type: 'h', text: 'L’accent de mot : une syllabe plus forte que les autres' },
    { type: 'p', html: 'En français, toutes les syllabes ont à peu près la même force, avec un léger allongement de la dernière syllabe du groupe : « in-for-ma-<b>tion</b> ». En anglais, chaque mot de deux syllabes ou plus a <b>une syllabe accentuée</b> : elle est <b>plus longue</b>, <b>plus forte</b> et souvent <b>plus aiguë</b>. Les autres syllabes sont réduites, souvent au schwa /ə/, le petit « e » neutre (voir « Les voyelles : sons courts et sons longs »). Dans cette leçon, la syllabe accentuée est écrite en MAJUSCULES : <i>deVElop</i>.' },
    { type: 'p', html: 'Pourquoi est-ce si important ? Parce que l’accent fait partie de l’<b>identité</b> du mot : un anglophone reconnaît un mot d’abord à son <b>rythme</b>. Si tu attends « dé-vé-LOP » à la française, tu ne reconnaîtras pas <i>deVElop</i> à l’oral, même si tu connais très bien ce mot à l’écrit. À l’inverse, avec le bon accent, on te comprend même si tes voyelles ne sont pas parfaites.' },
    { type: 'examples', items: [
      { en: 'information', fr: 'information(s)', note: 'inforMAtion : l’accent est sur « MA » (« méï »), pas sur la fin.' },
      { en: 'hotel', fr: 'hôtel', note: 'hoTEL : accent sur la 2ᵉ syllabe, et le h se prononce.' },
      { en: 'develop', fr: 'développer', note: 'deVElop : « di-VÈ-ləp ».' },
      { en: 'photograph', fr: 'une photo', note: 'PHOtograph : accent sur la 1ʳᵉ syllabe.' },
      { en: 'photographer', fr: 'un ou une photographe', note: 'phoTOgrapher : dans la même famille de mots, l’accent peut changer de place !' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : l’accent « à la française »', html: 'Les francophones ont tendance à accentuer la <b>dernière</b> syllabe, ou à donner la même force à toutes. Résultat : « comfor-TABLE », « vege-TABLE », « deve-LOP »… et ces mots deviennent méconnaissables. En anglais, la terminaison <i>-able</i> est toujours faible : <i>COMfortable, aVAIlable, reLIable</i>.' },

    { type: 'h', text: 'Mots de deux syllabes : nom ou verbe ?' },
    { type: 'p', html: 'Voici une tendance utile : dans les mots de deux syllabes, les <b>noms</b> (et les adjectifs) sont souvent accentués sur la <b>1ʳᵉ syllabe</b> (<i>OFfice, MONday, HAPpy</i>), et les <b>verbes</b> sur la <b>2ᵉ</b> (<i>deCIDE, atTEND, reQUIRE</i>). Certains mots existent comme nom <b>et</b> comme verbe : seul l’accent change !' },
    { type: 'table', head: ['Mot', 'Nom : accent sur la 1ʳᵉ syllabe', 'Verbe : accent sur la 2ᵉ syllabe'], rows: [
      ['record', 'a <b>RE</b>cord : un record, un dossier, un enregistrement', 'to re<b>CORD</b> : enregistrer'],
      ['present', 'a <b>PRE</b>sent : un cadeau', 'to pre<b>SENT</b> : présenter'],
      ['increase', 'an <b>IN</b>crease : une hausse', 'to in<b>CREASE</b> : augmenter'],
      ['contract', 'a <b>CON</b>tract : un contrat', 'to con<b>TRACT</b> : se contracter, diminuer'],
      ['permit', 'a <b>PER</b>mit : un permis, une autorisation', 'to per<b>MIT</b> : permettre'],
      ['object', 'an <b>OB</b>ject : un objet', 'to ob<b>JECT</b> : s’opposer, protester']
    ], caption: 'C’est une tendance, pas une règle absolue (certains anglophones disent aussi <i>to INcrease</i>), mais elle t’aidera à reconnaître la plupart de ces mots.' },
    { type: 'pairs', items: [
      { a: 'She broke the sales record.', b: 'Please record the meeting.', note: 'REcord (un record) / reCORD (enregistrer)' },
      { a: 'This is a present for you.', b: 'I will present the results.', note: 'PREsent (un cadeau) / preSENT (présenter)' },
      { a: 'We saw a big increase in sales.', b: 'We want to increase our sales.', note: 'INcrease (une hausse) / inCREASE (augmenter)' },
      { a: 'You need a parking permit.', b: 'The rules do not permit smoking here.', note: 'PERmit (un permis) / perMIT (permettre)' }
    ] },
    { type: 'box', style: 'tip', title: 'Vérifie dans le dictionnaire', html: 'Dans un dictionnaire, la syllabe accentuée est précédée du petit signe <b>ˈ</b> : <i>record</i> (nom) /ˈrekərd/, <i>record</i> (verbe) /rɪˈkɔːrd/. Quand tu apprends un nouveau mot, <b>souligne sa syllabe accentuée</b> dans ton carnet de vocabulaire.' },

    { type: 'h', text: 'Les suffixes qui attirent l’accent' },
    { type: 'p', html: 'Bonne nouvelle : certains <b>suffixes</b> (terminaisons) indiquent où tombe l’accent. Avec <b>-tion / -sion</b>, <b>-ic</b>, <b>-ity</b> et <b>-ial</b>, l’accent tombe sur la syllabe <b>juste avant</b> le suffixe. C’est pour cela que l’accent se déplace dans une même famille de mots : <i>eCOnomy</i> → <i>ecoNOmic</i>.' },
    { type: 'table', head: ['Suffixe', 'Exemples', 'Même famille, accent différent'], rows: [
      ['-tion / -sion', 'infor<b>MA</b>tion, presen<b>TA</b>tion, de<b>CI</b>sion', 'in<b>FORM</b> → infor<b>MA</b>tion'],
      ['-ic', 'eco<b>NO</b>mic, scien<b>TI</b>fic, elec<b>TRO</b>nic', 'e<b>CO</b>nomy → eco<b>NO</b>mic'],
      ['-ity', 'a<b>BI</b>lity, elec<b>TRI</b>city, se<b>CU</b>rity', 'e<b>LEC</b>tric → elec<b>TRI</b>city'],
      ['-ial', 'fi<b>NAN</b>cial, of<b>FI</b>cial, com<b>MER</b>cial', '<b>OF</b>fice → of<b>FI</b>cial']
    ] },
    { type: 'examples', items: [
      { en: 'Here is the information you asked for.', fr: 'Voici les informations que tu as demandées.', note: 'inforMAtion.' },
      { en: 'The economic situation is improving.', fr: 'La situation économique s’améliore.', note: 'ecoNOmic, situAtion, imPROving.' },
      { en: 'She has the ability to lead the team.', fr: 'Elle a la capacité de diriger l’équipe.', note: 'aBIlity.' },
      { en: 'Please send me the financial report.', fr: 'Envoie-moi le rapport financier, s’il te plaît.', note: 'fiNANcial, rePORT.' },
      { en: 'Electricity costs went up this year.', fr: 'Les coûts de l’électricité ont augmenté cette année.', note: 'elecTRIcity.' }
    ] },

    { type: 'h', text: 'Les noms composés : accent sur le premier mot' },
    { type: 'p', html: 'Quand deux mots forment un seul nom (un <b>nom composé</b>), l’accent tombe sur le <b>premier</b> élément : <i>BUSiness card</i> (carte de visite), <i>PARKing lot</i> (parking), <i>CREDit card</i>, <i>PHONE number</i>, <i>DEADline</i>, <i>AIRport</i>, <i>WEBsite</i>. Attention : avec un adjectif + un nom, c’est le <b>nom</b> qui est accentué : <i>a GREENhouse</i> (une serre) mais <i>a green HOUSE</i> (une maison verte).' },
    { type: 'pairs', items: [
      { a: 'a greenhouse', b: 'a green house', note: 'GREENhouse (une serre) / green HOUSE (une maison verte)' },
      { a: 'a blackboard', b: 'a black board', note: 'BLACKboard (un tableau noir) / black BOARD (une planche noire)' }
    ] },
    { type: 'examples', items: [
      { en: 'Here is my business card.', fr: 'Voici ma carte de visite.', note: 'BUSiness card.' },
      { en: 'The parking lot is full.', fr: 'Le parking est complet.', note: 'PARKing lot (US) ; en britannique : <i>CAR park</i>.' },
      { en: 'Can I pay by credit card?', fr: 'Je peux payer par carte bancaire ?', note: 'CREDit card.' },
      { en: 'The deadline is next Friday.', fr: 'La date limite est vendredi prochain.', note: 'DEADline.' }
    ] },

    { type: 'h', text: 'Les mots « transparents » qui sonnent autrement' },
    { type: 'p', html: 'Beaucoup de mots anglais ressemblent au français à l’écrit… mais pas à l’oral ! L’accent est ailleurs et, parfois, des syllabes disparaissent. Ce sont justement les mots que tu risques de ne pas reconnaître au TOEIC.' },
    { type: 'table', head: ['Mot', 'Accent', 'Ça sonne comme…'], rows: [
      ['hotel', 'ho<b>TEL</b>', '« ho-TÈL » (h prononcé)'],
      ['develop', 'de<b>VE</b>lop', '« di-VÈ-ləp »'],
      ['comfortable', '<b>COM</b>fortable', '« KEUMF-tər-bəl », souvent 3 syllabes'],
      ['vegetable', '<b>VEG</b>etable', '« VÈDJ-tə-bəl », souvent 3 syllabes'],
      ['chocolate', '<b>CHOC</b>olate', '« TCHÂ-klət » (US), souvent 2 syllabes'],
      ['event', 'e<b>VENT</b>', '« i-VÈNT »'],
      ['percent', 'per<b>CENT</b>', '« pər-SÈNT »'],
      ['schedule', '<b>SCHE</b>dule', '« SKÈ-djoul » (US) / « CHÈ-djoul » (UK)'],
      ['business', '<b>BUS</b>iness', '« BIZ-nəs », 2 syllabes'],
      ['interesting', '<b>IN</b>teresting', '« IN-trəs-ting », souvent 3 syllabes']
    ] },
    { type: 'box', style: 'warn', title: 'Piège : les syllabes qui disparaissent', html: '<i>comfortable, vegetable, chocolate, interesting, business</i> (et <i>Wednesday</i>) perdent une syllabe à l’oral. Si tu attends toutes les syllabes bien détachées, comme à l’écrit, tu ne reconnaîtras pas le mot ! Écoute l’accent : c’est lui qui te guide.' },
    { type: 'examples', items: [
      { en: 'The hotel is very comfortable.', fr: 'L’hôtel est très confortable.', note: 'hoTEL, COMfortable (« KEUMF-tər-bəl »).' },
      { en: 'We need to develop a new product.', fr: 'Nous devons développer un nouveau produit.', note: 'deVElop, PROduct.' },
      { en: 'The schedule for the event is online.', fr: 'Le programme de l’événement est en ligne.', note: 'SCHEdule, eVENT, onLINE.' },
      { en: 'Prices went up by ten percent.', fr: 'Les prix ont augmenté de dix pour cent.', note: 'perCENT.' }
    ] },

    { type: 'h', text: 'L’accent de phrase : le rythme de l’anglais' },
    { type: 'p', html: 'Dans une phrase, les <b>mots de sens</b> (noms, verbes principaux, adjectifs, adverbes, mots interrogatifs, négations) sont <b>accentués</b> : on les entend clairement. Les <b>mots grammaticaux</b> (articles, prépositions, pronoms, auxiliaires, conjonctions) sont <b>réduits</b> : rapides, faibles, souvent avec un schwa. L’anglais a donc un rythme « fort-faible » très marqué, alors que le français est plus régulier. Tu verras les formes réduites en détail dans « L’anglais parlé réel : formes faibles, liaisons, contractions ».' },
    { type: 'table', head: ['Mots de sens → accentués', 'Mots grammaticaux → réduits'], rows: [
      ['noms : <i>meeting, report</i>', 'articles : <i>a, an, the</i>'],
      ['verbes principaux : <i>send, call</i>', 'prépositions : <i>to, at, for, of</i>'],
      ['adjectifs et adverbes : <i>new, late, quickly</i>', 'pronoms : <i>I, you, him, it</i>'],
      ['mots interrogatifs : <i>where, when, why</i>', 'auxiliaires : <i>do, can, have, was</i>'],
      ["négations : <i>not, can't, don't</i>", 'conjonctions : <i>and, but, or</i>']
    ] },
    { type: 'examples', items: [
      { en: 'I need to send the report tomorrow.', fr: 'Je dois envoyer le rapport demain.', note: 'I NEED to SEND the rePORT toMORrow : <i>I, to, the</i> sont réduits.' },
      { en: 'Can you call me at noon?', fr: 'Tu peux m’appeler à midi ?', note: 'can you CALL me at NOON? : seuls <i>call</i> et <i>noon</i> sont forts.' },
      { en: 'Where is the nearest bank?', fr: 'Où est la banque la plus proche ?', note: 'WHERE is the NEARest BANK?' },
      { en: 'The meeting was moved to Friday.', fr: 'La réunion a été déplacée à vendredi.', note: 'the MEETing was MOVED to FRIday.' }
    ] },
    { type: 'box', style: 'tip', title: 'Can ou can’t ? Écoute l’accent !', html: 'À la forme affirmative, <i>can</i> est réduit : <i>I can COME</i> ≈ « aï kən KEUM ». À la forme négative, <i>can’t</i> est <b>accentué</b> et garde une voyelle pleine : <i>I CAN’T COME</i>, avec le /æ/ très ouvert de <i>cat</i> en américain, ou un « â » long en britannique. Le t final s’entend à peine : écoute plutôt l’<b>accent</b> et la <b>voyelle</b>.' },

    { type: 'h', text: 'L’intonation : la voix monte ou descend' },
    { type: 'p', html: 'L’<b>intonation</b>, c’est la mélodie de la phrase. En général :<br>• question fermée (réponse <i>yes / no</i>) → la voix <b>monte</b> à la fin ↗ : <i>Are you free on Monday?</i><br>• question avec un mot en <b>wh-</b> (<i>what, where, when, who…</i>) → la voix <b>descend</b> à la fin ↘ : <i>Where do you work?</i><br>• phrase affirmative → la voix descend ↘.' },
    { type: 'examples', items: [
      { en: 'Are you free on Monday?', fr: 'Tu es libre lundi ?', note: '↗ question fermée : la voix monte.' },
      { en: 'Is the report ready?', fr: 'Le rapport est prêt ?', note: '↗ question fermée.' },
      { en: 'When does the meeting start?', fr: 'Quand commence la réunion ?', note: '↘ question en <i>wh-</i> : la voix descend.' },
      { en: 'Where is the conference room?', fr: 'Où est la salle de conférence ?', note: '↘ question en <i>wh-</i>.' }
    ] },
    { type: 'dialog', title: 'Un bon trimestre (écoute record, present et increase)', lines: [
      { speaker: 'W', en: 'Hi, Daniel. Did you record the meeting yesterday?', fr: 'Salut Daniel. Tu as enregistré la réunion hier ?' },
      { speaker: 'M', en: "Yes, I did. I'll present the results on Thursday.", fr: 'Oui. Je présenterai les résultats jeudi.' },
      { speaker: 'W', en: 'Great. Was there an increase in sales?', fr: 'Super. Il y a eu une hausse des ventes ?' },
      { speaker: 'M', en: "Yes, a big increase. It's a new record for the company!", fr: 'Oui, une forte hausse. C’est un nouveau record pour l’entreprise !' },
      { speaker: 'W', en: "That's excellent news. Let's celebrate after the presentation.", fr: 'C’est une excellente nouvelle. Fêtons ça après la présentation.' }
    ] },
    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'Au TOEIC, l’audio va vite : tu n’entendras pas clairement chaque mot, et ce n’est pas grave. Les mots <b>accentués</b> sont justement les mots importants (noms, verbes, chiffres, négations). Entraîne-toi à les repérer : <i>WHEN is the presenTAtion?</i> → tu sais qu’on cherche un moment. En <b>Partie 2</b>, méfie-toi des mots de la même famille : à la question <i>When is the presentation?</i>, la réponse <i>A present for my manager</i> est un piège sonore. Et chaque fois que tu apprends un mot, apprends aussi son accent !' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• Chaque mot a <b>une</b> syllabe accentuée (plus longue, plus forte) ; les autres sont réduites (schwa).<br>• Mots de 2 syllabes : nom → souvent 1ʳᵉ syllabe (<i>a REcord, a PREsent, an INcrease</i>) ; verbe → souvent 2ᵉ syllabe (<i>to reCORD, to preSENT</i>).<br>• <b>-tion, -ic, -ity, -ial</b> : accent juste avant (<i>inforMAtion, ecoNOmic, aBIlity, fiNANcial</i>).<br>• Noms composés : accent sur le 1ᵉʳ mot (<i>BUSiness card, PARKing lot</i>).<br>• Attention aux mots « transparents » : <i>hoTEL, deVElop, COMfortable, SCHEdule</i>.<br>• Dans la phrase, les mots de sens sont forts, les mots grammaticaux faibles. Intonation : ↗ pour <i>yes / no</i>, ↘ pour <i>wh-</i>.' }
  ],
  exercises: [
    { type: 'mcq', q: 'Où est l’accent dans <i>develop</i> ?', options: ['<b>DE</b>-ve-lop', 'de-<b>VE</b>-lop', 'de-ve-<b>LOP</b>'], answer: 1, explain: '<i>develop</i> est accentué sur la 2ᵉ syllabe : deVElop (« di-VÈ-ləp »). Pas « dé-vé-LOP » à la française.' },
    { type: 'mcq', q: 'Où est l’accent dans <i>information</i> ?', options: ['<b>IN</b>-for-ma-tion', 'in-<b>FOR</b>-ma-tion', 'in-for-<b>MA</b>-tion', 'in-for-ma-<b>TION</b>'], answer: 2, explain: 'Avec le suffixe <b>-tion</b>, l’accent tombe sur la syllabe juste avant : inforMAtion.' },
    { type: 'mcq', q: 'Où est l’accent dans <i>economic</i> ?', options: ['<b>E</b>-co-no-mic', 'e-<b>CO</b>-no-mic', 'e-co-<b>NO</b>-mic', 'e-co-no-<b>MIC</b>'], answer: 2, explain: 'Avec le suffixe <b>-ic</b>, l’accent tombe juste avant : ecoNOmic. Compare avec <i>eCOnomy</i> : l’accent se déplace dans la famille.' },
    { type: 'mcq', q: 'Dans lequel de ces mots l’accent tombe-t-il sur la <b>2ᵉ</b> syllabe ?', options: ['ability', 'photograph', 'comfortable', 'vegetable'], answer: 0, explain: '<i>ability</i> = aBIlity (suffixe <b>-ity</b> : accent juste avant). <i>PHOtograph</i>, <i>COMfortable</i> et <i>VEGetable</i> sont accentués sur la 1ʳᵉ syllabe.' },
    { type: 'mcq', q: '<i>We need to record the meeting.</i> Ici, <i>record</i> se prononce…', options: ['REcord (c’est un nom)', 'reCORD (c’est un verbe)'], answer: 1, explain: 'Après <i>need to</i>, <i>record</i> est un <b>verbe</b> (enregistrer) : l’accent est sur la 2ᵉ syllabe, reCORD.' },
    { type: 'mcq', q: '<i>There was a big increase in sales.</i> Ici, <i>increase</i> se prononce…', options: ['INcrease (c’est un nom)', 'inCREASE (c’est un verbe)'], answer: 0, explain: 'Après <i>a big</i>, <i>increase</i> est un <b>nom</b> (une hausse) : l’accent est sur la 1ʳᵉ syllabe, INcrease.' },
    { type: 'listen', say: 'I would like to present our new product.', q: 'Écoute bien le mot <i>present</i> : où est l’accent ?', options: ['PREsent (1ʳᵉ syllabe)', 'preSENT (2ᵉ syllabe)'], answer: 1, explain: 'Ici, <i>present</i> est un verbe (présenter) : on entend preSENT. Le nom <i>a PREsent</i> (un cadeau) est accentué sur la 1ʳᵉ syllabe.' },
    { type: 'listen', say: 'She broke the sales record.', accent: 'en-GB', q: 'Écoute bien le mot <i>record</i> : où est l’accent ?', options: ['REcord (1ʳᵉ syllabe)', 'reCORD (2ᵉ syllabe)'], answer: 0, explain: 'Ici, <i>record</i> est un nom (un record) : on entend REcord. Le verbe <i>to reCORD</i> (enregistrer) est accentué sur la 2ᵉ syllabe.' },
    { type: 'mcq', q: 'Comment accentue-t-on le nom composé <i>parking lot</i> ?', options: ['parking <b>LOT</b>', '<b>PARK</b>ing lot'], answer: 1, explain: 'Dans un nom composé, l’accent tombe sur le <b>premier</b> élément : PARKing lot, comme BUSiness card ou CREDit card.' },
    { type: 'mcq', q: 'Combien de syllabes entend-on dans <i>business</i> ?', options: ['2', '3', '4'], answer: 0, explain: '<i>business</i> s’écrit avec trois voyelles mais se prononce en <b>2 syllabes</b> : « BIZ-nəs ».' },
    { type: 'dictation', say: 'The hotel is very comfortable.', answers: ['The hotel is very comfortable'], explain: 'hoTEL (accent sur la 2ᵉ syllabe) et COMfortable (« KEUMF-tər-bəl », accent sur la 1ʳᵉ). Traduction : « L’hôtel est très confortable. »' },
    { type: 'mcq', q: 'Dans la phrase <i>I sent the file to Anna yesterday</i>, quels mots sont accentués ?', options: ['I, the, to', 'the, file, to, yesterday', 'sent, file, Anna, yesterday'], answer: 2, explain: 'Les mots de sens (verbe <i>sent</i>, noms <i>file</i> et <i>Anna</i>, adverbe <i>yesterday</i>) sont accentués. <i>I, the, to</i> sont des mots grammaticaux, réduits.' },
    { type: 'mcq', q: 'Laquelle de ces questions se dit normalement avec une intonation <b>montante</b> ↗ ?', options: ['Where is the meeting?', 'What time is it?', 'Is the meeting at ten?', 'Who is the new manager?'], answer: 2, explain: '<i>Is the meeting at ten?</i> est une question fermée (réponse <i>yes / no</i>) : la voix monte. Les questions en <i>where, what, who</i> descendent à la fin.' },
    { type: 'listen', say: "I can't come to the meeting on Friday.", accent: 'en-GB', q: 'Cette personne…', options: ['peut venir à la réunion de vendredi.', 'ne peut pas venir à la réunion de vendredi.'], answer: 1, explain: 'On entend <i>can’t</i> : il est <b>accentué</b>, avec une voyelle longue (« kâânt » en britannique). À la forme affirmative, <i>can</i> serait réduit (« kən ») et le verbe <i>come</i> porterait l’accent.' },
    { type: 'dictation', say: "Let's check the schedule for the event.", answers: ["Let's check the schedule for the event", 'Let us check the schedule for the event'], explain: '<i>schedule</i> (SCHEdule, « SKÈ-djoul » en américain) et <i>event</i> (eVENT, accent sur la 2ᵉ syllabe). Traduction : « Vérifions le programme de l’événement. »' },
    { type: 'listen', say: 'When is the presentation?', accent: 'en-AU', q: 'Tu entends une question (style TOEIC Partie 2). Quelle est la meilleure réponse ?', options: ['A present for my manager.', 'Yes, I presented it.', 'On Thursday afternoon.'], answer: 2, explain: '<i>When</i> demande un moment → <i>On Thursday afternoon.</i> <i>present</i> est un piège sonore (même famille que <i>presentation</i>) et <i>Yes…</i> ne répond pas à une question en <i>when</i>.' }
  ]
});
