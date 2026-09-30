LE.register({
  id: 'g24',
  kind: 'grammar',
  title: 'Le present perfect',
  subtitle: 'Le temps qui relie le passé au présent : expériences, nouvelles et résultats',
  level: 'A2',
  minutes: 45,
  goals: [
    'Former le present perfect : <b>have / has</b> + participe passé (<i>I’ve finished, she hasn’t called, Have you seen…?</i>)',
    'Parler de tes expériences de vie : <i>Have you ever been to…? I’ve never…</i>',
    'Annoncer une nouvelle ou un résultat : <i>I’ve lost my badge. The price has increased.</i>',
    'Utiliser <i>just, already, yet</i> et distinguer <i>been</i> et <i>gone</i>'
  ],
  blocks: [
    { type: 'h', text: 'À quoi sert le present perfect ?' },
    { type: 'p', html: 'Le <b>present perfect</b> est un temps « pont » entre le passé et le présent. L’action a eu lieu dans le passé, mais ce qui compte, c’est son <b>lien avec maintenant</b> : une expérience que tu as vécue, un résultat visible aujourd’hui, une nouvelle que tu annonces. Il ressemble au <b>passé composé</b> français (<i>j’<b>ai</b> fini</i> → <i>I <b>have</b> finished</i>), mais il ne s’utilise <b>pas toujours</b> comme lui : avec le present perfect, on ne précise jamais <b>le moment passé</b> où l’action a eu lieu (<i>hier, en 2020, il y a deux jours…</i>).' },
    { type: 'examples', items: [
      { en: "I've lost my badge.", fr: 'J’ai perdu mon badge.', note: 'Résultat présent : je n’ai pas mon badge <b>maintenant</b>.' },
      { en: 'Have you ever been to Canada?', fr: 'Es-tu déjà allée au Canada ?', note: 'Expérience de vie : peu importe quand.' },
      { en: 'The price has increased.', fr: 'Le prix a augmenté.', note: 'Une nouvelle : le prix est plus élevé aujourd’hui.' },
      { en: 'Ms. Kowalski has just arrived.', fr: 'Mme Kowalski vient d’arriver.' }
    ] },
    { type: 'box', style: 'warn', title: 'Le piège n°1 : pas de moment précis !', html: 'Avec un moment passé précis (<i>yesterday, last week, in 2020, two days ago</i>), l’anglais utilise le <b>prétérit</b>, jamais le present perfect :<br><span class="ko">I have lost my badge yesterday.</span> → <span class="ok">I lost my badge yesterday.</span><br>Tu approfondiras ce choix dans la leçon « Present perfect ou prétérit ? (for, since, yet, already…) ».' },

    { type: 'h', text: 'La formation : have / has + participe passé' },
    { type: 'p', html: 'On prend l’auxiliaire <b>have</b> (avec <i>I, you, we, they</i>) ou <b>has</b> (avec <i>he, she, it</i>), puis le <b>participe passé</b> du verbe. Pour les verbes réguliers, c’est la forme en <b>-ed</b> (<i>work → worked</i>). Pour les verbes irréguliers, c’est la <b>3ᵉ colonne</b> de la liste (<i>go → went → <b>gone</b></i>) : revois la leçon « Les verbes irréguliers essentiels » et la liste de référence « Les verbes irréguliers ».' },
    { type: 'table', head: ['Sujet', 'Affirmation', 'Négation', 'Question'], rows: [
      ['I / you / we / they', 'I <b>have</b> started.<br>I<b>’ve</b> started.', 'I <b>have not</b> started.<br>I <b>haven’t</b> started.', '<b>Have</b> you started?'],
      ['he / she / it', 'She <b>has</b> started.<br>She<b>’s</b> started.', 'She <b>has not</b> started.<br>She <b>hasn’t</b> started.', '<b>Has</b> she started?']
    ], caption: 'Réponses courtes : <i>Yes, I <b>have</b>. / No, I <b>haven’t</b>.</i> — <i>Yes, she <b>has</b>. / No, she <b>hasn’t</b>.</i> Comme avec <i>be</i>, on ne contracte jamais la réponse courte affirmative (<i>Yes, I’ve.</i> est faux).' },
    { type: 'table', head: ['Base verbale', 'Prétérit (2ᵉ colonne)', 'Participe passé (3ᵉ colonne)', 'Français'], rows: [
      ['work', 'worked', '<b>worked</b>', 'travailler (régulier : -ed)'],
      ['be', 'was / were', '<b>been</b>', 'être'],
      ['go', 'went', '<b>gone</b>', 'aller'],
      ['do', 'did', '<b>done</b>', 'faire'],
      ['see', 'saw', '<b>seen</b>', 'voir'],
      ['write', 'wrote', '<b>written</b>', 'écrire'],
      ['take', 'took', '<b>taken</b>', 'prendre'],
      ['send', 'sent', '<b>sent</b>', 'envoyer'],
      ['meet', 'met', '<b>met</b>', 'rencontrer'],
      ['lose', 'lost', '<b>lost</b>', 'perdre']
    ], caption: 'Beaucoup de verbes ont la même forme en 2ᵉ et en 3ᵉ colonne (<i>sent, met, lost, bought</i>). Ceux qui changent (<i>been, gone, done, seen, written, taken</i>) sont à apprendre par cœur.' },
    { type: 'examples', items: [
      { en: "I've finished the report.", fr: 'J’ai fini le rapport.' },
      { en: "We haven't received your payment.", fr: 'Nous n’avons pas reçu votre paiement.' },
      { en: 'Has the package arrived? — Yes, it has.', fr: 'Le colis est-il arrivé ? — Oui.' },
      { en: "They've hired three new engineers.", fr: 'Ils ont embauché trois nouveaux ingénieurs.' },
      { en: 'What have you done with the keys?', fr: 'Qu’as-tu fait des clés ?' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : toujours « have », jamais « be »', html: 'En français, certains verbes se conjuguent avec <b>être</b> : <i>elle <b>est</b> arrivée, les prix <b>sont</b> montés</i>. En anglais, l’auxiliaire du present perfect est <b>toujours have / has</b> :<br><span class="ko">She is arrived.</span> → <span class="ok">She has arrived.</span><br><span class="ko">Prices are gone up.</span> → <span class="ok">Prices have gone up.</span><br>Et après <i>have</i>, c’est le participe passé (3ᵉ colonne), pas le prétérit : <span class="ko">I have went.</span> → <span class="ok">I have gone.</span>' },
    { type: 'box', style: 'warn', title: 'Piège : she’s = she is… ou she has !', html: 'La contraction <b>’s</b> peut vouloir dire <b>is</b> ou <b>has</b>. Regarde ce qui suit :<br>• <b>’s + participe passé</b> → le plus souvent <b>has</b> : <i>She’s <b>sent</b> the invoice.</i> (Elle a envoyé la facture.)<br>• <b>’s + verbe en -ing, adjectif ou lieu</b> → <b>is</b> : <i>She’s <b>sending</b> the invoice.</i> (Elle est en train d’envoyer la facture.) <i>She’s <b>busy</b>.</i> (Elle est occupée.)<br>Même chose pour <i>he’s</i> et <i>it’s</i> : <i>It’s <b>been</b> a long day.</i> = <i>It <b>has</b> been a long day.</i>' },

    { type: 'h', text: 'Emploi 1 : l’expérience de vie (ever, never)' },
    { type: 'p', html: 'Pour parler de ce que tu as fait (ou jamais fait) <b>dans ta vie jusqu’à maintenant</b>, sans dire quand, on utilise le present perfect. Dans les questions, <b>ever</b> veut dire « déjà (une fois dans ta vie) ». <b>Never</b> veut dire « jamais ». Ces deux mots se placent <b>entre <i>have</i> et le participe passé</b>. Pour compter : <i>once</i> (une fois), <i>twice</i> (deux fois), <i>three times</i> (trois fois)…' },
    { type: 'examples', items: [
      { en: 'Have you ever worked abroad?', fr: 'As-tu déjà travaillé à l’étranger ?' },
      { en: "I've never used this software.", fr: 'Je n’ai jamais utilisé ce logiciel.', note: 'Une seule négation : <i>I’ve never…</i> ou <i>I haven’t ever…</i>, jamais <i>I haven’t never…</i>' },
      { en: 'She has visited our factory twice.', fr: 'Elle a visité notre usine deux fois.' },
      { en: "We've never had a problem with this supplier.", fr: 'Nous n’avons jamais eu de problème avec ce fournisseur.' },
      { en: 'Have you ever been to Japan? — Yes, I went there last year.', fr: 'Es-tu déjà allée au Japon ? — Oui, j’y suis allée l’année dernière.', note: 'Dès qu’on donne le moment (<i>last year</i>), on passe au <b>prétérit</b> (<i>went</i>).' }
    ] },

    { type: 'h', text: 'Emploi 2 : une nouvelle, un résultat visible maintenant' },
    { type: 'p', html: 'On utilise aussi le present perfect pour <b>annoncer une nouvelle</b> ou pour parler d’une action passée dont le <b>résultat</b> se voit aujourd’hui. C’est le temps des annonces, des e-mails et des informations : <i>The company <b>has opened</b> a new office.</i> Ce qui compte, ce n’est pas <b>quand</b> c’est arrivé, c’est la situation <b>maintenant</b>.' },
    { type: 'examples', items: [
      { en: "I've lost my badge. Can you open the door for me?", fr: 'J’ai perdu mon badge. Tu peux m’ouvrir la porte ?' },
      { en: 'The price of fuel has increased.', fr: 'Le prix du carburant a augmenté.' },
      { en: 'Our company has opened a new office in Nairobi.', fr: 'Notre entreprise a ouvert un nouveau bureau à Nairobi.' },
      { en: 'Someone has left a laptop in the meeting room.', fr: 'Quelqu’un a laissé un ordinateur portable dans la salle de réunion.' },
      { en: 'Good news: the client has accepted our offer!', fr: 'Bonne nouvelle : le client a accepté notre offre !' }
    ] },
    { type: 'table', head: ['Present perfect (lien avec maintenant)', 'Prétérit (moment passé terminé)'], rows: [
      ['I<b>’ve lost</b> my badge. (je ne l’ai toujours pas)', 'I <b>lost</b> my badge <b>last week</b>. (une histoire passée)'],
      ['The price <b>has increased</b>. (il est plus élevé maintenant)', 'The price <b>increased</b> <b>in May</b>. (en mai)'],
      ['<b>Have</b> you <b>seen</b> the new logo? (à un moment ou à un autre)', '<b>Did</b> you <b>see</b> the presentation <b>yesterday</b>?']
    ], caption: 'Premier réflexe : un moment passé précis → prétérit. Toutes les règles sont dans la leçon « Present perfect ou prétérit ? (for, since, yet, already…) ».' },

    { type: 'h', text: 'Emploi 3 : just, already, yet' },
    { type: 'p', html: 'Trois petits mots accompagnent très souvent le present perfect. Attention à leur <b>place</b> dans la phrase : <b>just</b> et <b>already</b> se mettent entre <i>have</i> et le participe passé, <b>yet</b> se met à la fin.' },
    { type: 'table', head: ['Mot', 'Sens', 'Place', 'Exemple'], rows: [
      ['<b>just</b>', 'venir de (il y a très peu de temps)', 'entre <i>have</i> et le participe', 'I’ve <b>just</b> sent the email.<br>(Je viens d’envoyer l’e-mail.)'],
      ['<b>already</b>', 'déjà (plus tôt que prévu)', 'entre <i>have</i> et le participe', 'She’s <b>already</b> left.<br>(Elle est déjà partie.)'],
      ['<b>yet</b> (négation)', 'pas encore', 'en fin de phrase', 'We haven’t decided <b>yet</b>.<br>(Nous n’avons pas encore décidé.)'],
      ['<b>yet</b> (question)', 'déjà ? (on attend que ça arrive)', 'en fin de phrase', 'Have you finished <b>yet</b>?<br>(Tu as déjà fini ?)']
    ], caption: '<b>Just</b> et <b>already</b> s’emploient surtout dans les phrases affirmatives ; <b>yet</b> dans les négations et les questions. À l’oral, <b>already</b> se met aussi parfois en fin de phrase : <i>I’ve done it already.</i>' },
    { type: 'examples', items: [
      { en: 'The meeting has just started.', fr: 'La réunion vient de commencer.' },
      { en: "I've already paid the invoice.", fr: 'J’ai déjà payé la facture.' },
      { en: "The new printer hasn't arrived yet.", fr: 'La nouvelle imprimante n’est pas encore arrivée.' },
      { en: 'Have you read the report yet? — No, not yet.', fr: 'Tu as déjà lu le rapport ? — Non, pas encore.' },
      { en: 'Has Mr. Tanaka called back yet?', fr: 'Est-ce que M. Tanaka a rappelé ?' }
    ] },
    { type: 'box', style: 'warn', title: 'Pièges : « venir de » et « déjà »', html: '• « Je viens de… » ne se traduit pas avec <i>come</i> : <span class="ko">I come from sending the email.</span> → <span class="ok">I’ve just sent the email.</span><br>• « Déjà » a trois traductions :<br>— une expérience de vie (question) → <b>ever</b> : « Tu es déjà allée à Rome ? » → <i>Have you <b>ever</b> been to Rome?</i><br>— plus tôt que prévu → <b>already</b> : « J’ai déjà payé. » → <i>I’ve <b>already</b> paid.</i><br>— une question sur une chose attendue → <b>yet</b> : « Tu as déjà fini ? » → <i>Have you finished <b>yet</b>?</i>' },
    { type: 'box', style: 'tip', title: 'En anglais américain', html: 'Aux États-Unis, on entend souvent le prétérit avec <i>just, already</i> et <i>yet</i> : <i>I <b>just sent</b> it. <b>Did</b> you <b>eat</b> yet?</i> C’est courant à l’oral. Mais à l’écrit et au TOEIC, le present perfect reste la valeur sûre : <i>I<b>’ve just sent</b> it. <b>Have</b> you <b>eaten</b> yet?</i>' },

    { type: 'h', text: 'Emploi 4 : une situation qui dure encore (for, since)' },
    { type: 'p', html: 'Quand une situation a <b>commencé dans le passé</b> et <b>continue aujourd’hui</b>, le français utilise le présent + « depuis ». L’anglais, lui, utilise le <b>present perfect</b>, avec <b>for</b> + une durée (<i>for ten years</i>) ou <b>since</b> + un point de départ (<i>since 2019</i>). Tu travailleras ce point en détail dans la leçon « Present perfect ou prétérit ? (for, since, yet, already…) ».' },
    { type: 'examples', items: [
      { en: "I've known Ms. Novak for ten years.", fr: 'Je connais Mme Novak depuis dix ans.', note: 'Le français dit « je connais » (présent) ; l’anglais dit <b>I’ve known</b>. <i>I know her since…</i> est faux.' },
      { en: "We've lived in this city since 2021.", fr: 'Nous habitons dans cette ville depuis 2021.' },
      { en: 'He has worked here for six months.', fr: 'Il travaille ici depuis six mois.' },
      { en: 'How long have you had this car?', fr: 'Depuis combien de temps as-tu cette voiture ?' }
    ] },

    { type: 'h', text: 'Been ou gone ?' },
    { type: 'p', html: 'Pour dire « être allé(e) quelque part », le present perfect a deux formes. <b>Gone</b> (participe passé de <i>go</i>) : la personne est partie et <b>n’est pas encore revenue</b>. <b>Been</b> (participe passé de <i>be</i>, suivi de <b>to</b> + lieu) : la personne est allée quelque part et <b>en est revenue</b> (c’est une expérience).' },
    { type: 'table', head: ['Phrase', 'Sens', 'Où est-elle maintenant ?'], rows: [
      ['She has <b>gone</b> to Rome.', 'Elle est partie à Rome.', 'À Rome (ou en route).'],
      ['She has <b>been</b> to Rome.', 'Elle est déjà allée à Rome.', 'Pas à Rome : elle en est revenue.'],
      ['Where have you <b>been</b>?', 'Où étais-tu passée ?', 'Ici : tu viens de revenir.']
    ] },
    { type: 'examples', items: [
      { en: "Mr. Silva isn't here. He's gone to lunch.", fr: 'M. Silva n’est pas là. Il est parti déjeuner.' },
      { en: "I've been to Singapore three times.", fr: 'Je suis allée trois fois à Singapour.' },
      { en: 'Have you ever been to a trade fair?', fr: 'Es-tu déjà allée à un salon professionnel ?' },
      { en: 'Where have you been? We were looking for you!', fr: 'Où étais-tu ? On te cherchait !' }
    ] },
    { type: 'dialog', title: 'Lundi matin au bureau', lines: [
      { speaker: 'W', en: 'Hi, Diego! Have you seen the new schedule?', fr: 'Salut Diego ! Tu as vu le nouveau planning ?' },
      { speaker: 'M', en: 'No, not yet. Has Ms. Park sent it?', fr: 'Non, pas encore. Mme Park l’a envoyé ?' },
      { speaker: 'W', en: "Yes, she's just sent it to everyone. And guess what? The client has approved our budget!", fr: 'Oui, elle vient de l’envoyer à tout le monde. Et tu sais quoi ? Le client a approuvé notre budget !' },
      { speaker: 'M', en: 'Great news! Have you ever worked with this client?', fr: 'Excellente nouvelle ! Tu as déjà travaillé avec ce client ?' },
      { speaker: 'W', en: "No, I haven't, but Amira has. She's gone to their office for a meeting.", fr: 'Non, mais Amira, oui. Elle est partie à leurs bureaux pour une réunion.' },
      { speaker: 'M', en: "Perfect. I've already booked a room for Thursday's meeting.", fr: 'Parfait. J’ai déjà réservé une salle pour la réunion de jeudi.' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 5</b>, repère les mots-signaux : <i>just, already, yet, ever, never, recently, so far, since</i> (et <i>for</i> quand la situation dure encore) → present perfect. Vérifie aussi l’accord (<i>The company <b>has</b>…</i>, <i>Our clients <b>have</b>…</i>) et qu’après <i>has / have</i> vient bien un <b>participe passé</b> : <i>has ------- (sign / signed / signing)</i> → <b>signed</b>.<br>En <b>Partie 2</b>, la bonne réponse à <i>Have you finished the report?</i> peut être <i>Not yet.</i> ou <i>I’m almost done.</i><br>En <b>Partie 7</b>, les e-mails commencent souvent par <i>We <b>have received</b> your application…</i> ou <i>I<b>’ve attached</b> the file.</i>' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• Present perfect = <b>have / has + participe passé</b> (<i>I’ve finished, she hasn’t called, Have you seen…?</i>).<br>• Toujours <b>have</b>, jamais <i>be</i> : <i>She <b>has</b> arrived.</i> Et <b>’s</b> + participe passé = <b>has</b> (<i>she’s sent</i>).<br>• Emplois : expérience (<i>ever, never</i>), nouvelle ou résultat (<i>I’ve lost my badge</i>), action récente (<i>just</i>), <i>already / yet</i>, situation qui dure (<i>for / since</i>).<br>• <b>Gone</b> = parti (pas encore revenu) ; <b>been</b> = allé et revenu.<br>• Jamais avec un moment passé précis : <i>yesterday, last week, ago</i> → prétérit.' }
  ],
  exercises: [
    { type: 'mcq', q: 'I have ___ the contract.', options: ['wrote', 'written', 'write', 'writing'], answer: 1, explain: 'Après <b>have</b>, on met le <b>participe passé</b> (3ᵉ colonne) : write → wrote → <b>written</b>. <i>Wrote</i> est le prétérit (2ᵉ colonne).' },
    { type: 'gap', q: 'We ___ (receive) your payment. Thank you! <small>(present perfect)</small>', answers: ['have received', "'ve received"], explain: 'Present perfect : <b>have</b> + participe passé (<i>received</i>). Avec <i>we</i>, on peut contracter : <i>we’ve received</i>.' },
    { type: 'gap', q: 'Mr. Kim ___ (not / reply) to my email. <small>(present perfect)</small>', answers: ["hasn't replied", 'has not replied'], explain: '<i>Mr. Kim</i> = he → <b>has</b>. Négation : <b>hasn’t</b> (= <i>has not</i>) + participe passé <i>replied</i> (reply → replied : le <b>y</b> devient <b>i</b>).' },
    { type: 'mcq', q: '« She’s sent the invoice. » Ici, <b>she’s</b> = …', options: ['she is', 'she has', 'she was'], answer: 1, explain: '<b>’s + participe passé</b> (<i>sent</i>) = <b>has</b> : « Elle a envoyé la facture. » Avec <i>she is</i>, on aurait un verbe en -ing (<i>she’s sending</i>).' },
    { type: 'gap', q: '— Have you ever been to Canada? — No, I ___.', answers: ["haven't", 'have not', 'never have'], explain: 'Réponse courte : on reprend l’auxiliaire <b>have</b> : <i>Yes, I have. / No, I haven’t.</i> (<i>No, I never have.</i> est aussi possible.)' },
    { type: 'gap', q: 'I ___ (never / work) in a bank. <small>(present perfect)</small>', answers: ['have never worked', "'ve never worked"], explain: '<b>Never</b> se place entre <i>have</i> et le participe passé : <i>I have never worked</i> (= <i>I’ve never worked</i>). Une seule négation : pas de <i>haven’t</i> avec <i>never</i>.' },
    { type: 'mcq', q: '« La nouvelle imprimante n’est pas encore arrivée. » → The new printer hasn’t arrived ___.', options: ['already', 'yet', 'just', 'ever'], answer: 1, explain: '« Pas encore » = <b>not … yet</b>, avec <i>yet</i> en fin de phrase.' },
    { type: 'gap', q: '« Je viens d’envoyer le devis. » → I have ___ the quote. (just / send)', answers: ['just sent'], explain: '« Venir de » = <b>just</b> + participe passé, entre <i>have</i> et le participe : <i>I have just sent</i>. <i>Send</i> est irrégulier : send → sent → <b>sent</b>.' },
    { type: 'mcq', q: 'Ms. Chen isn’t here. She has ___ to Toronto and she’ll be back on Friday.', options: ['been', 'gone', 'went'], answer: 1, explain: '<b>Gone</b> = elle est partie et n’est pas encore revenue (elle rentre vendredi). <i>Been</i> voudrait dire qu’elle y est allée et qu’elle en est revenue ; <i>went</i> est le prétérit, impossible après <i>has</i>.' },
    { type: 'mcq', q: '« She has been to Rome. » Que comprends-tu ?', options: ['Elle est à Rome en ce moment.', 'Elle est déjà allée à Rome et elle en est revenue.', 'Elle va bientôt partir à Rome.'], answer: 1, explain: '<b>Has been to</b> = expérience : elle y est allée et elle en est revenue. Pour dire qu’elle y est en ce moment, on dirait <i>She has gone to Rome.</i>' },
    { type: 'order', answer: 'Have you ever worked with this client?', fr: 'As-tu déjà travaillé avec ce client ?', explain: 'Question : <b>Have</b> + sujet + <b>ever</b> + participe passé + reste de la phrase.' },
    { type: 'order', answer: 'We have not received the package yet.', alts: ['We have not yet received the package.'], fr: 'Nous n’avons pas encore reçu le colis.', explain: 'Négation : <b>have not</b> + participe passé. <b>Yet</b> se place en fin de phrase (ou, dans un style plus formel, juste après <i>not</i>).' },
    { type: 'listen', accent: 'en-AU', say: "I've never been to Japan, but I've visited South Korea twice.", q: 'Qu’as-tu compris ?', options: ['La personne est allée deux fois au Japon.', 'La personne n’est jamais allée au Japon, mais elle est allée deux fois en Corée du Sud.', 'La personne n’est jamais allée en Corée du Sud.'], answer: 1, explain: '<i>I’ve <b>never</b> been to Japan</i> = je ne suis jamais allée au Japon ; <i>I’ve visited South Korea <b>twice</b></i> = j’ai visité la Corée du Sud deux fois.' },
    { type: 'dictation', accent: 'en-GB', say: 'She has just left the office.', answers: ['She has just left the office', "She's just left the office"], explain: '<i>has just left</i> = « vient de partir » : « Elle vient de quitter le bureau. »' },
    { type: 'mcq', q: 'The price of raw materials ------- by 15 percent since January. <small>(style TOEIC)</small>', options: ['increased', 'has increased', 'is increasing', 'will increase'], answer: 1, explain: '<b>Since January</b> : la hausse a commencé en janvier et on en voit le résultat maintenant → <b>present perfect</b> : <i>has increased</i>. Le prétérit, le présent et le futur ne vont pas avec <i>since</i>.' },
    { type: 'mcq', q: 'Our sales team ------- already met its target for the quarter. <small>(style TOEIC)</small>', options: ['have', 'has', 'is', 'having'], answer: 1, explain: '<i>Our sales team</i> est un nom singulier (repris par <i>its</i>) → <b>has</b> + participe passé (<i>met</i>). <i>Already</i> se place entre l’auxiliaire et le participe.' }
  ]
});
