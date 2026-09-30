LE.register({
  id: 'g17',
  kind: 'grammar',
  title: 'Le prétérit des verbes réguliers',
  subtitle: 'Raconter ce qui s’est passé : hier, la semaine dernière, il y a deux ans…',
  level: 'A2',
  minutes: 35,
  goals: [
    'Savoir quand employer le prétérit (souvent traduit par le passé composé)',
    'Former le prétérit des verbes réguliers avec <b>-ed</b>, sans faute d’orthographe',
    'Prononcer correctement la terminaison <b>-ed</b> : /t/, /d/ ou /ɪd/',
    'Repérer les marqueurs du passé : <i>yesterday, last week, two days ago, in 2019…</i>'
  ],
  blocks: [
    { type: 'h', text: 'À quoi sert le prétérit ?' },
    { type: 'p', html: 'Le <b>prétérit</b> (en anglais <i>simple past</i>) sert à parler d’une action <b>terminée</b>, qui s’est passée à un <b>moment précis du passé</b> : hier, la semaine dernière, en 2019… En français, on le traduit le plus souvent par le <b>passé composé</b> (« j’ai envoyé », « elle est arrivée »).' },
    { type: 'examples', items: [
      { en: 'I emailed the client yesterday.', fr: 'J’ai envoyé un e-mail au client hier.', note: '<i>Yesterday</i> = un moment passé précis → prétérit. On peut aussi dire <i>I sent the client an email</i> : <i>send → sent</i> est un verbe irrégulier (voir la leçon « Les verbes irréguliers essentiels »).' },
      { en: 'We started the project in March.', fr: 'Nous avons commencé le projet en mars.' },
      { en: 'The meeting ended at five.', fr: 'La réunion s’est terminée à cinq heures.' },
      { en: 'She worked in Tokyo for two years.', fr: 'Elle a travaillé à Tokyo pendant deux ans.', note: 'L’action est terminée : elle ne travaille plus à Tokyo.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : « je l’ai appelé hier » ≠ « I have called him yesterday »', html: 'Le passé composé français a deux mots (« j’<b>ai</b> appelé », « elle <b>est</b> arrivée »). Ne le traduis pas mot à mot : avec un moment passé précis, l’anglais utilise le prétérit, en <b>un seul mot</b>.<br><span class="ko">I have called him yesterday.</span> → <span class="ok">I called him yesterday.</span><br><span class="ko">She is arrived this morning.</span> → <span class="ok">She arrived this morning.</span>' },
    { type: 'p', html: 'Tu connais déjà un prétérit : celui de <b>be</b> (<i>was / were</i>), vu dans la leçon « Le prétérit de « be » : was et were ». Ici, on s’occupe des verbes <b>réguliers</b>, c’est-à-dire de la grande majorité des verbes anglais.' },

    { type: 'h', text: 'La formation : base verbale + -ed' },
    { type: 'p', html: 'Pour un verbe régulier, on ajoute <b>-ed</b> à la <b>base verbale</b> (l’infinitif sans <i>to</i>) : <i>work → work<b>ed</b></i>. Et c’est la <b>même forme à toutes les personnes</b> : pas de <b>-s</b> à la 3ᵉ personne, rien à conjuguer !' },
    { type: 'table', head: ['Sujet', 'Présent simple', 'Prétérit', 'Français'], rows: [
      ['I', 'I work', 'I work<b>ed</b>', 'j’ai travaillé'],
      ['you', 'you call', 'you call<b>ed</b>', 'tu as appelé / vous avez appelé'],
      ['he / she / it', 'she check<b>s</b>', 'she check<b>ed</b>', 'elle a vérifié'],
      ['we', 'we visit', 'we visit<b>ed</b>', 'nous avons visité'],
      ['they', 'they deliver', 'they deliver<b>ed</b>', 'ils ont livré']
    ], caption: 'Au prétérit, le <b>-s</b> de la 3ᵉ personne disparaît : <i>she works</i> → <i>she worked</i>.' },
    { type: 'box', style: 'tip', title: 'Une seule forme pour tout le monde', html: 'I work<b>ed</b>, you work<b>ed</b>, he work<b>ed</b>, she work<b>ed</b>, we work<b>ed</b>, they work<b>ed</b>. Seul <b>be</b> a deux formes (<i>was / were</i>). Quant aux verbes <b>irréguliers</b> (<i>go → went</i>), ils ont leur propre forme : tu les verras dans la leçon « Les verbes irréguliers essentiels ».' },
    { type: 'examples', items: [
      { en: 'I called the hotel this morning.', fr: 'J’ai appelé l’hôtel ce matin.' },
      { en: 'Mr. Adeyemi booked a flight to Chicago.', fr: 'M. Adeyemi a réservé un vol pour Chicago.' },
      { en: 'Our team finished the report last night.', fr: 'Notre équipe a terminé le rapport hier soir.' },
      { en: 'They delivered the boxes on Monday.', fr: 'Ils ont livré les cartons lundi.' }
    ] },

    { type: 'h', text: 'L’orthographe : les règles à connaître' },
    { type: 'p', html: 'Dans la plupart des cas, on ajoute simplement <b>-ed</b>. Mais selon la fin du verbe, l’orthographe change un peu. Ces règles comptent au TOEIC écrit.' },
    { type: 'table', head: ['Fin du verbe', 'Règle', 'Exemples'], rows: [
      ['cas général', '+ <b>-ed</b>', 'work → work<b>ed</b>, want → want<b>ed</b>, open → open<b>ed</b>'],
      ['<b>-e</b>', '+ <b>-d</b> seulement', 'arrive → arrive<b>d</b>, hire → hire<b>d</b>, change → change<b>d</b>'],
      ['consonne + <b>y</b>', 'y → <b>-ied</b>', 'study → stud<b>ied</b>, try → tr<b>ied</b>, apply → appl<b>ied</b>'],
      ['voyelle + <b>y</b>', 'on garde le y : + <b>-ed</b>', 'stay → stay<b>ed</b>, play → play<b>ed</b>, enjoy → enjoy<b>ed</b>'],
      ['<b>une seule</b> voyelle + 1 consonne à la fin, avec l’<b>accent</b> sur la dernière syllabe (ou verbe d’une seule syllabe)', 'on <b>double</b> la consonne, puis + <b>-ed</b>', 'stop → sto<b>pp</b>ed, plan → pla<b>nn</b>ed, prefer → prefe<b>rr</b>ed']
    ], caption: 'Pas de doublement quand l’accent est sur une autre syllabe (<i><u>o</u>pen → opened, <u>vis</u>it → visited, <u>hap</u>pen → happened</i>), ni quand il y a deux voyelles avant la consonne (<i>need → needed, wait → waited</i>), ni après w ou x (<i>allow → allowed, fix → fixed</i>).' },
    { type: 'box', style: 'warn', title: 'Piège : travel, cancel… l’orthographe américaine', html: 'En anglais <b>américain</b>, on applique la règle : dans <i><u>trav</u>el</i> et <i><u>can</u>cel</i>, l’accent est sur la 1ʳᵉ syllabe, donc <b>pas de doublement</b> : <span class="ok">traveled, canceled, labeled</span>. L’anglais <b>britannique</b>, lui, double le <b>l</b> : <i>travelled, cancelled</i>. Les deux sont corrects ; sur ce site, on écrit à l’américaine, comme la plupart des textes du TOEIC.' },
    { type: 'examples', items: [
      { en: 'The train arrived ten minutes late.', fr: 'Le train est arrivé avec dix minutes de retard.', note: 'arrive + <b>d</b>' },
      { en: 'Ms. Lindqvist studied marketing in Stockholm.', fr: 'Mme Lindqvist a étudié le marketing à Stockholm.', note: 'stud<b>y</b> → stud<b>ied</b>' },
      { en: 'We stayed at a hotel near the airport.', fr: 'Nous avons séjourné dans un hôtel près de l’aéroport.', note: 'voyelle + y : on garde le y → stay<b>ed</b>' },
      { en: 'The manager preferred the second candidate.', fr: 'La responsable a préféré le deuxième candidat.', note: 'pre<u>fer</u> : accent sur la dernière syllabe → prefe<b>rr</b>ed' },
      { en: 'Mr. Okafor traveled to Seoul last month.', fr: 'M. Okafor s’est rendu à Séoul le mois dernier.', note: 'Orthographe américaine : <i>traveled</i> (britannique : <i>travelled</i>).' }
    ] },

    { type: 'h', text: 'La prononciation de -ed : trois sons' },
    { type: 'p', html: 'Attention : la terminaison <b>-ed</b> ne se prononce jamais « èd » comme on pourrait le croire, et le plus souvent elle n’ajoute même <b>pas de syllabe</b>. Il y a trois possibilités, selon le dernier son du verbe. Les détails et l’entraînement sont dans la leçon « Les terminaisons -s et -ed à l’oral ».' },
    { type: 'table', head: ['Son', 'Quand ?', 'Exemples'], rows: [
      ['/ɪd/ — « id », une syllabe en plus', 'après les sons <b>t</b> et <b>d</b>', 'want<b>ed</b>, need<b>ed</b>, start<b>ed</b>, decid<b>ed</b>'],
      ['/t/ — pas de syllabe en plus', 'après un son « sourd » (la gorge ne vibre pas) : <b>p, k, s, x, f, ch, sh</b>', 'work<b>ed</b> (« workt »), stopp<b>ed</b>, fix<b>ed</b>, finish<b>ed</b>'],
      ['/d/ — pas de syllabe en plus', 'après tous les autres sons (voyelles, <b>l, m, n, r, v</b>…)', 'call<b>ed</b> (« calld »), play<b>ed</b>, open<b>ed</b>, arriv<b>ed</b>']
    ] },
    { type: 'p', html: 'Écoute et compare : au TOEIC, ce petit <b>-ed</b> est souvent la seule chose qui distingue le présent du passé.' },
    { type: 'pairs', items: [
      { a: 'I work late.', b: 'I worked late.', note: 'Le /t/ final est très court : écoute bien la fin du verbe.' },
      { a: 'We need help.', b: 'We needed help.', note: 'Après un <b>d</b>, on entend une syllabe en plus : /ɪd/.' },
      { a: 'They call the office.', b: 'They called the office.' },
      { a: 'You start at nine.', b: 'You started at nine.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : la syllabe en trop', html: 'Les francophones ajoutent souvent un « è » : <span class="ko">work-èd</span>, <span class="ko">call-èd</span>, <span class="ko">stopp-èd</span>. En réalité, ces verbes gardent <b>une seule syllabe</b> : on prononce <span class="ok">« workt »</span>, <span class="ok">« calld »</span>, <span class="ok">« stopt »</span>. On n’ajoute une syllabe qu’après <b>t</b> ou <b>d</b> : <i>want-ed, need-ed</i>.' },

    { type: 'h', text: 'Les marqueurs de temps du passé' },
    { type: 'p', html: 'Le prétérit est souvent accompagné d’une expression qui dit <b>quand</b> l’action a eu lieu. Quand tu vois l’un de ces marqueurs, pense prétérit !' },
    { type: 'table', head: ['Marqueur', 'Français', 'Exemple'], rows: [
      ['<b>yesterday</b> (morning, afternoon…)', 'hier (matin, après-midi…)', 'I called her <b>yesterday</b>.'],
      ['<b>last</b> night / week / month / year', 'hier soir / la semaine dernière / le mois dernier / l’an dernier', 'We moved to a new office <b>last year</b>.'],
      ['two days / a week <b>ago</b>', 'il y a deux jours / une semaine', 'He joined the company <b>three years ago</b>.'],
      ['<b>in</b> 2019 / <b>in</b> May', 'en 2019 / en mai', 'They opened the store <b>in 2019</b>.'],
      ['<b>on</b> Monday / <b>on</b> May 3', 'lundi (dernier) / le 3 mai', 'The package arrived <b>on Monday</b>.'],
      ['<b>when I was</b>…', 'quand j’étais…', 'I lived in Dakar <b>when I was</b> a child.']
    ] },
    { type: 'box', style: 'warn', title: 'Piège : ago, last et « hier soir »', html: '• <b>Ago</b> se place <b>après</b> la durée : <span class="ko">ago two days</span> → <span class="ok">two days ago</span>.<br>• Pas de <i>the</i> devant <i>last</i> : <span class="ko">I called him the last week.</span> → <span class="ok">I called him last week.</span><br>• « Hier soir » se dit le plus souvent <span class="ok">last night</span> (ou <i>yesterday evening</i> pour le début de soirée) ; <i>yesterday night</i> est rare et peu naturel.' },
    { type: 'examples', items: [
      { en: 'Ms. Haddad joined the company five years ago.', fr: 'Mme Haddad est entrée dans l’entreprise il y a cinq ans.' },
      { en: 'I checked my email last night.', fr: 'J’ai consulté mes e-mails hier soir.' },
      { en: 'We launched the new app in 2021.', fr: 'Nous avons lancé la nouvelle application en 2021.' },
      { en: 'When I was a student, I worked in a hotel.', fr: 'Quand j’étais étudiante, je travaillais dans un hôtel.', note: 'Le prétérit traduit aussi l’<b>imparfait</b> quand il s’agit d’une situation ou d’une habitude passée.' }
    ] },
    { type: 'box', style: 'tip', title: 'Passé composé, imparfait… un seul temps en anglais', html: 'Le prétérit anglais correspond à <b>plusieurs</b> temps français : <i>She lived in Nairobi.</i> = « Elle a vécu à Nairobi. » ou « Elle vivait à Nairobi. » Retiens la règle simple : <b>action ou situation terminée + moment passé</b> → prétérit. (Deux autres cas, que tu verras plus tard : pour une action <b>en cours</b> à un moment du passé — « je travaillais quand il a appelé » —, l’anglais utilise le <i>past continuous</i> ; et sans moment précis, il utilise parfois le <i>present perfect</i>.)' },
    { type: 'dialog', title: 'Lundi matin au bureau', lines: [
      { speaker: 'M', en: 'Good morning, Priya! How was your weekend?', fr: 'Bonjour, Priya ! C’était comment, ton week-end ?' },
      { speaker: 'W', en: 'It was great, thanks. I visited my sister in Boston.', fr: 'Super, merci. Je suis allée voir ma sœur à Boston.' },
      { speaker: 'M', en: 'Nice! I stayed home and cleaned my apartment.', fr: 'Sympa ! Moi, je suis resté chez moi et j’ai fait le ménage dans mon appartement.' },
      { speaker: 'W', en: 'By the way, a client called on Friday afternoon. He wanted a new quote.', fr: 'Au fait, un client a appelé vendredi après-midi. Il voulait un nouveau devis.' },
      { speaker: 'M', en: 'Mr. Park? I prepared a quote for him last week.', fr: 'M. Park ? Je lui ai préparé un devis la semaine dernière.' },
      { speaker: 'W', en: 'Yes, but he changed the quantities. He also asked about delivery dates.', fr: 'Oui, mais il a modifié les quantités. Il a aussi posé des questions sur les dates de livraison.' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 5</b>, repère les marqueurs de temps : si la phrase contient <i>yesterday</i>, <i>last…</i>, <i>… ago</i> ou une date passée, la bonne réponse est au prétérit. Ex. : <i>Ms. Ortiz ------- the contract last Friday.</i> → <b>signed</b> (et pas <i>signs</i> ni <i>will sign</i>). En <b>Parties 3 et 4</b>, le <b>-ed</b> est souvent à peine audible : c’est le marqueur de temps (<i>last week, this morning</i>) qui t’aidera à comprendre que l’action est passée.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• Prétérit = action <b>terminée</b> à un <b>moment passé précis</b> (souvent un passé composé en français).<br>• Verbes réguliers : base + <b>-ed</b>, <b>même forme</b> à toutes les personnes (<i>she worked</i>).<br>• Orthographe : arrive<b>d</b>, stud<b>ied</b>, stay<b>ed</b>, sto<b>pp</b>ed ; en américain : <i>traveled, canceled</i>.<br>• Prononciation : /ɪd/ seulement après t et d (<i>wanted, needed</i>) ; sinon /t/ ou /d/, sans syllabe en plus.<br>• Marqueurs : <i>yesterday, last…, … ago, in 2019, when I was…</i>' }
  ],
  exercises: [
    { type: 'mcq', q: 'Yesterday, I ___ my manager.', options: ['call', 'called', 'calls', 'calling'], answer: 1, explain: '<i>Yesterday</i> (hier) → action terminée dans le passé → prétérit : <b>called</b> (call + -ed).' },
    { type: 'mcq', q: 'Quelle phrase est correcte ?', options: ['She work in Lagos last year.', 'She worked in Lagos last year.', 'She works in Lagos last year.', 'She has worked in Lagos last year.'], answer: 1, explain: '<i>Last year</i> → prétérit, la même forme à toutes les personnes : <b>she worked</b>, sans -s. <i>Has worked</i> est un calque du passé composé, impossible avec un moment passé précis comme <i>last year</i>.' },
    { type: 'gap', q: 'We ___ (finish) the training last Monday.', answers: ['finished'], explain: '<i>Last Monday</i> (lundi dernier) → prétérit : finish + -ed = <b>finished</b> (prononcé « finisht », sans syllabe en plus).' },
    { type: 'gap', q: 'The delivery truck ___ (arrive) an hour ago.', answers: ['arrived'], explain: '<i>An hour ago</i> (il y a une heure) → prétérit. <i>Arrive</i> se termine par <b>-e</b> : on ajoute seulement <b>-d</b> → <b>arrived</b>.' },
    { type: 'mcq', q: 'Last year, Ms. Novak ___ Spanish at night school.', options: ['studyed', 'studied', 'studies', 'studed'], answer: 1, explain: 'Consonne + <b>y</b> → <b>-ied</b> : <i>study → studied</i>. <i>Studies</i> est au présent, impossible avec <i>last year</i>.' },
    { type: 'mcq', q: 'The bus ___ in front of the hotel five minutes ago.', options: ['stoped', 'stopped', 'stops', 'is stopping'], answer: 1, explain: '<i>Stop</i> = 1 voyelle + 1 consonne, syllabe accentuée : on double le <b>p</b> → <b>stopped</b>. <i>Five minutes ago</i> impose le prétérit.' },
    { type: 'gap', q: 'The airline ___ (cancel) our flight yesterday.', answers: ['canceled', 'cancelled'], explain: '<i>Yesterday</i> → prétérit. Orthographe américaine : <b>canceled</b> (un seul l, l’accent est sur <i><u>can</u></i>) ; l’orthographe britannique <i>cancelled</i> est aussi acceptée.' },
    { type: 'gap', q: 'Last week, the committee ___ (prefer) the second design.', answers: ['preferred'], explain: 'Dans <i>pre<u>fer</u></i>, l’accent est sur la dernière syllabe : on double le <b>r</b> → <b>preferred</b>.' },
    { type: 'gap', q: 'Mr. Silva ___ (apply) for the sales job three days ago.', answers: ['applied'], explain: 'Consonne + <b>y</b> → <b>-ied</b> : <i>apply → applied</i>. <i>Three days ago</i> impose le prétérit.' },
    { type: 'mcq', q: 'Dans quel verbe la terminaison <b>-ed</b> ajoute-t-elle une syllabe (/ɪd/) ?', options: ['worked', 'called', 'needed', 'stopped'], answer: 2, explain: 'On ajoute une syllabe seulement après <b>t</b> ou <b>d</b> : <i>need-ed</i>. <i>Worked</i> et <i>stopped</i> se terminent par /t/, <i>called</i> par /d/, sans syllabe en plus.' },
    { type: 'order', answer: 'She worked in Madrid two years ago.', alts: ['Two years ago she worked in Madrid.'], fr: 'Elle a travaillé à Madrid il y a deux ans.', explain: '<b>Ago</b> se place après la durée : <i>two years ago</i>. Le marqueur de temps va en fin de phrase (ou au début).' },
    { type: 'order', answer: 'We delivered the order last Monday.', alts: ['Last Monday we delivered the order.'], fr: 'Nous avons livré la commande lundi dernier.', explain: 'Sujet + verbe au prétérit (<i>delivered</i>) + complément + marqueur de temps (<i>last Monday</i>, sans <i>the</i>).' },
    { type: 'listen', accent: 'en-GB', say: 'We worked late last night.', q: 'Qu’as-tu entendu ?', options: ['Nous travaillons tard le soir.', 'Nous avons travaillé tard hier soir.', 'Nous allons travailler tard ce soir.'], answer: 1, explain: 'On entend <i>work<b>ed</b></i> (un /t/ très court) et surtout <b>last night</b> (hier soir) : l’action est passée.' },
    { type: 'dictation', say: 'They opened a new office last year.', answers: ['They opened a new office last year'], explain: '<i>Opened</i> se prononce avec un simple /d/ final, sans syllabe en plus. « Ils ont ouvert un nouveau bureau l’an dernier. »' },
    { type: 'mcq', q: 'The marketing team ------- the survey results two days ago. <small>(style TOEIC)</small>', options: ['analyze', 'analyzes', 'analyzed', 'analyzing'], answer: 2, explain: '<i>Two days ago</i> → action terminée dans le passé → prétérit : <b>analyzed</b>.' },
    { type: 'mcq', q: 'Ms. Rossi ------- in the accounting department when she was younger. <small>(style TOEIC)</small>', options: ['work', 'works', 'worked', 'working'], answer: 2, explain: '<i>When she was younger</i> situe l’action dans le passé : elle n’y travaille plus → prétérit <b>worked</b>.' }
  ]
});
