LE.register({
  id: 'g18',
  kind: 'grammar',
  title: 'Les verbes irréguliers essentiels',
  subtitle: 'Went, bought, sent… les 40 formes du passé à connaître par cœur, apprises malin',
  level: 'A2',
  minutes: 45,
  goals: [
    'Comprendre les trois formes d’un verbe irrégulier et le rôle de chacune',
    'Utiliser au prétérit les 40 verbes irréguliers les plus utiles au travail',
    'Mémoriser plus vite grâce aux familles de sons',
    'Éviter les confusions classiques : <i>bought / brought, thought / taught</i>'
  ],
  blocks: [
    { type: 'h', text: 'Pourquoi « irréguliers » ?' },
    { type: 'p', html: 'La plupart des verbes forment leur prétérit avec <b>-ed</b> (<i>work → worked</i> : voir la leçon « Le prétérit des verbes réguliers »). Mais une partie des verbes — souvent <b>les plus courants</b> — ont une forme à eux : <i>go → <b>went</b></i>, <i>buy → <b>bought</b></i>. Ce sont les <b>verbes irréguliers</b>. Il n’y a pas de règle unique : il faut les apprendre. Mais pas n’importe comment !' },
    { type: 'examples', items: [
      { en: 'I went to Singapore last week.', fr: 'Je suis allée à Singapour la semaine dernière.', note: 'go → <b>went</b>' },
      { en: 'She sent the invoice yesterday.', fr: 'Elle a envoyé la facture hier.', note: 'send → <b>sent</b>' },
      { en: 'We had a meeting this morning.', fr: 'Nous avons eu une réunion ce matin.', note: 'have → <b>had</b>' },
      { en: 'They bought new laptops for the team.', fr: 'Ils ont acheté de nouveaux ordinateurs portables pour l’équipe.', note: 'buy → <b>bought</b>' }
    ] },
    { type: 'box', style: 'tip', title: 'Ce qui ne change pas', html: 'Comme pour les verbes réguliers, le prétérit a la <b>même forme à toutes les personnes</b> : <i>I went, you went, she went, they went</i>. Seul <b>be</b> fait exception (<i>was / were</i>).' },

    { type: 'h', text: 'Les trois formes d’un verbe' },
    { type: 'p', html: 'Dans toutes les listes, chaque verbe irrégulier est présenté en <b>trois colonnes</b>. Chacune a son rôle :' },
    { type: 'table', head: ['Colonne', 'Nom', 'À quoi elle sert', 'Exemple avec <i>write</i> (écrire)'], rows: [
      ['1', 'la <b>base verbale</b> (l’infinitif sans <i>to</i>)', 'présent, impératif, après <i>to</i>, <i>can</i>, <i>did</i>…', 'I <b>write</b> reports every week.'],
      ['2', 'le <b>prétérit</b>', 'action terminée dans le passé', 'I <b>wrote</b> the report yesterday.'],
      ['3', 'le <b>participe passé</b>', 'les temps formés avec <i>have</i> et la voix passive', 'I have <b>written</b> the report. / The report was <b>written</b> by Ana.']
    ], caption: 'Dans cette leçon, on travaille surtout la <b>2ᵉ colonne</b>. La 3ᵉ servira dans les leçons « Le present perfect » et « La voix passive ».' },
    { type: 'box', style: 'warn', title: 'Piège : ne pas confondre les colonnes 2 et 3', html: 'Pour beaucoup de verbes, les colonnes 2 et 3 sont différentes. Au prétérit (sans <i>have</i> devant), on prend <b>toujours la 2ᵉ</b> :<br><span class="ko">I gone to the bank.</span> → <span class="ok">I went to the bank.</span><br><span class="ko">She written the email.</span> → <span class="ok">She wrote the email.</span><br><span class="ko">We seen the results.</span> → <span class="ok">We saw the results.</span>' },

    { type: 'h', text: 'Apprendre par familles de sons' },
    { type: 'p', html: 'Apprendre une liste de A à Z, c’est long et décourageant. Beaucoup plus efficace : regrouper les verbes qui <b>se ressemblent</b>. Ton cerveau retient un modèle, puis l’applique aux autres verbes de la même famille.' },
    { type: 'table', head: ['Famille', 'Modèle', 'Même famille'], rows: [
      ['Trois formes identiques', 'cut – cut – cut (couper)', 'put (mettre), set (fixer), cost (coûter), let (laisser), hit (frapper), shut (fermer)'],
      ['Même son : -ought / -aught', 'buy – bought – bought (acheter)', 'bring – brought (apporter), think – thought (penser), teach – taught (enseigner), catch – caught (attraper)'],
      ['d → t', 'send – sent – sent (envoyer)', 'spend – spent (dépenser), lend – lent (prêter), build – built (construire)'],
      ['« ii » long → « è » court', 'keep – kept – kept (garder)', 'sleep – slept (dormir), feel – felt (ressentir), meet – met (rencontrer), leave – left (partir), mean – meant (signifier), lead – led (diriger), read – read (lire, prononcé « red » au passé)'],
      ['-ay → -aid', 'pay – paid – paid (payer)', 'say – said (dire ; attention, <i>said</i> se prononce « sèd »), lay – laid (poser)'],
      ['-ell → -old', 'sell – sold – sold (vendre)', 'tell – told (dire, raconter)'],
      ['-and → -ood', 'stand – stood – stood (être debout)', 'understand – understood (comprendre)'],
      ['i – a – u', 'begin – began – begun (commencer)', 'sing – sang – sung (chanter), drink – drank – drunk (boire), swim – swam – swum (nager), ring – rang – rung (sonner)'],
      ['o au prétérit, -en au participe', 'write – wrote – written (écrire)', 'drive – drove – driven (conduire), speak – spoke – spoken (parler), choose – chose – chosen (choisir), break – broke – broken (casser), forget – forgot – forgotten (oublier)'],
      ['-ew / -own', 'know – knew – known (savoir, connaître)', 'grow – grew – grown (grandir), throw – threw – thrown (lancer), fly – flew – flown (prendre l’avion)'],
      ['Retour à la base', 'come – came – come (venir)', 'become – became – become (devenir), run – ran – run (courir, diriger)'],
      ['Les inclassables', 'go – went – gone (aller)', 'be – was / were – been (être), do – did – done (faire), see – saw – seen (voir), have – had – had (avoir), make – made – made (faire), get – got – gotten (obtenir), take – took – taken (prendre), give – gave – given (donner)']
    ], caption: 'Dans la colonne de droite, on ne répète pas les formes identiques : <i>put</i> = put – put – put ; <i>bring – brought</i> = bring – brought – brought.' },
    { type: 'box', style: 'tip', title: 'Le truc du rythme', html: 'Dis toujours les trois formes <b>ensemble</b>, à voix haute, comme une petite chanson : <i>buy, bought, bought — bring, brought, brought — think, thought, thought</i>. Au bout de quelques jours, quand tu entendras <i>thought</i>, ton cerveau pensera tout seul « think ». C’est exactement ce qu’il te faut au TOEIC : <b>reconnaître vite</b> le verbe.' },
    { type: 'examples', items: [
      { en: 'The client paid the invoice on time.', fr: 'Le client a payé la facture à temps.', note: 'pay → <b>paid</b> (famille -ay → -aid)' },
      { en: 'I thought the meeting was at ten.', fr: 'Je pensais que la réunion était à dix heures.', note: 'think → <b>thought</b>' },
      { en: 'Our director spoke to all the employees.', fr: 'Notre directrice a parlé à tous les employés.', note: 'speak → <b>spoke</b>' },
      { en: 'We spent two days in Berlin.', fr: 'Nous avons passé deux jours à Berlin.', note: 'spend → <b>spent</b> : « dépenser » de l’argent, mais aussi « passer » du temps.' },
      { en: 'She kept all the receipts.', fr: 'Elle a gardé tous les reçus.', note: 'keep → <b>kept</b>' }
    ] },

    { type: 'h', text: 'Les 40 verbes irréguliers indispensables au travail' },
    { type: 'p', html: 'Voici les verbes irréguliers que tu croiseras sans arrêt dans les e-mails, les réunions et les textes du TOEIC. Ils font tous partie du <b>rang 1</b> de la liste de référence « Les verbes irréguliers ». Objectif : connaître leur prétérit (2ᵉ colonne, en gras) <b>par cœur</b>.' },
    { type: 'table', head: ['Base verbale', 'Prétérit', 'Participe passé', 'Français'], rows: [
      ['be', '<b>was / were</b>', 'been', 'être'],
      ['begin', '<b>began</b>', 'begun', 'commencer'],
      ['bring', '<b>brought</b>', 'brought', 'apporter'],
      ['build', '<b>built</b>', 'built', 'construire'],
      ['buy', '<b>bought</b>', 'bought', 'acheter'],
      ['choose', '<b>chose</b>', 'chosen', 'choisir'],
      ['come', '<b>came</b>', 'come', 'venir'],
      ['do', '<b>did</b>', 'done', 'faire'],
      ['drive', '<b>drove</b>', 'driven', 'conduire'],
      ['find', '<b>found</b>', 'found', 'trouver'],
      ['fly', '<b>flew</b>', 'flown', 'voler ; prendre l’avion'],
      ['forget', '<b>forgot</b>', 'forgotten', 'oublier'],
      ['get', '<b>got</b>', 'gotten (US) / got (UK)', 'obtenir, recevoir ; devenir'],
      ['give', '<b>gave</b>', 'given', 'donner'],
      ['go', '<b>went</b>', 'gone', 'aller'],
      ['have', '<b>had</b>', 'had', 'avoir'],
      ['hold', '<b>held</b>', 'held', 'tenir ; organiser (une réunion)'],
      ['know', '<b>knew</b>', 'known', 'savoir, connaître'],
      ['lead', '<b>led</b>', 'led', 'mener, diriger'],
      ['leave', '<b>left</b>', 'left', 'partir, quitter ; laisser'],
      ['lose', '<b>lost</b>', 'lost', 'perdre'],
      ['make', '<b>made</b>', 'made', 'faire, fabriquer'],
      ['meet', '<b>met</b>', 'met', 'rencontrer, retrouver'],
      ['pay', '<b>paid</b>', 'paid', 'payer'],
      ['put', '<b>put</b>', 'put', 'mettre, poser'],
      ['read', '<b>read</b>', 'read', 'lire (au passé, prononcé « red »)'],
      ['run', '<b>ran</b>', 'run', 'courir ; diriger (une entreprise)'],
      ['say', '<b>said</b>', 'said', 'dire (<i>said</i> se prononce « sèd »)'],
      ['see', '<b>saw</b>', 'seen', 'voir'],
      ['sell', '<b>sold</b>', 'sold', 'vendre'],
      ['send', '<b>sent</b>', 'sent', 'envoyer'],
      ['set', '<b>set</b>', 'set', 'fixer, régler'],
      ['speak', '<b>spoke</b>', 'spoken', 'parler'],
      ['spend', '<b>spent</b>', 'spent', 'dépenser ; passer (du temps)'],
      ['take', '<b>took</b>', 'taken', 'prendre'],
      ['teach', '<b>taught</b>', 'taught', 'enseigner'],
      ['tell', '<b>told</b>', 'told', 'dire, raconter'],
      ['think', '<b>thought</b>', 'thought', 'penser, croire'],
      ['understand', '<b>understood</b>', 'understood', 'comprendre'],
      ['write', '<b>wrote</b>', 'written', 'écrire']
    ], caption: 'Astuce : repère dans ce tableau les verbes des familles vues plus haut. Il n’en reste que quelques-uns à apprendre « seuls ».' },
    { type: 'box', style: 'warn', title: 'Pièges pour francophones', html: '• <b>Jamais de -ed</b> sur un verbe irrégulier : <span class="ko">goed, buyed, sended, thinked</span> → <span class="ok">went, bought, sent, thought</span>.<br>• <b>bought</b> (buy, acheter) ≠ <b>brought</b> (bring, apporter).<br>• <b>thought</b> (think, penser) ≠ <b>taught</b> (teach, enseigner) : à l’oral, seul le premier son change.<br>• <b>felt</b> (feel, ressentir) ≠ <b>fell</b> (fall, tomber).' },
    { type: 'examples', items: [
      { en: 'I bought some coffee and brought it to the meeting.', fr: 'J’ai acheté du café et je l’ai apporté à la réunion.', note: '<b>bought</b> (acheter) ≠ <b>brought</b> (apporter)' },
      { en: 'Mr. Kim taught English before he became a manager.', fr: 'M. Kim enseignait l’anglais avant de devenir manager.', note: '<b>taught</b> (enseigner) ≠ <b>thought</b> (penser)' },
      { en: 'She read the contract carefully.', fr: 'Elle a lu le contrat attentivement.', note: 'Au passé, <i>read</i> s’écrit pareil mais se prononce « red ».' },
      { en: 'He left the office at six and drove home.', fr: 'Il a quitté le bureau à six heures et il est rentré chez lui en voiture.', note: 'leave → <b>left</b>, drive → <b>drove</b>' }
    ] },

    { type: 'h', text: 'Ma méthode pour les retenir' },
    { type: 'list', ordered: true, items: [
      '<b>Petites doses</b> : 5 verbes par jour, pas plus. Mieux vaut 10 minutes chaque jour qu’une heure le dimanche.',
      '<b>À voix haute et en rythme</b> : <i>send, sent, sent</i>. L’oreille retient mieux que les yeux.',
      '<b>Une phrase sur ta vie</b> pour chaque verbe : <i>Yesterday I bought bread. Last week I met a friend.</i>',
      '<b>Le cache</b> : cache les colonnes 2 et 3, récite, puis vérifie. Note les verbes ratés.',
      '<b>Révise au bon moment</b> : les verbes ratés le lendemain, puis 3 jours après, puis une semaine après. C’est la <b>répétition espacée</b>, la méthode la plus efficace pour la mémoire à long terme.'
    ] },
    { type: 'box', style: 'info', title: 'La liste complète', html: 'La liste de référence « Les verbes irréguliers » réunit plus de 140 verbes, classés par <b>rang</b>. Commence par le <b>rang 1</b> (les 40 verbes de cette leçon et une douzaine d’autres), puis passe au rang 2. Le rang 3 est surtout à <b>reconnaître</b> quand tu le lis ou l’entends.' },
    { type: 'dialog', title: 'De retour d’un salon professionnel', lines: [
      { speaker: 'W', en: 'Hi, Marco! How was the trade fair in Frankfurt?', fr: 'Salut, Marco ! Comment s’est passé le salon à Francfort ?' },
      { speaker: 'M', en: 'It was great! I met a lot of potential clients.', fr: 'C’était super ! J’ai rencontré beaucoup de clients potentiels.' },
      { speaker: 'W', en: 'Excellent. And the samples?', fr: 'Excellent. Et les échantillons ?' },
      { speaker: 'M', en: 'We gave them all to visitors on the first day. And I found two new suppliers.', fr: 'Nous les avons tous donnés aux visiteurs dès le premier jour. Et j’ai trouvé deux nouveaux fournisseurs.' },
      { speaker: 'W', en: 'Well done! I told the director about your trip this morning.', fr: 'Bravo ! J’ai parlé de ton voyage à la directrice ce matin.' },
      { speaker: 'M', en: 'Thanks. I wrote a short report on the plane and sent it to you an hour ago.', fr: 'Merci. J’ai écrit un petit rapport dans l’avion et je te l’ai envoyé il y a une heure.' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 5</b>, on te propose souvent plusieurs formes du même verbe : <i>Mr. Obi ------- a speech at the conference last year.</i> (give / gives / gave / giving) → <b>gave</b>, grâce à <i>last year</i>. En <b>Parties 3 et 4</b>, les verbes irréguliers sont partout : <i>I left my laptop in the meeting room</i>, <i>We sent the invoice on Monday</i>. Si tu ne reconnais pas <i>left</i> comme le passé de <i>leave</i>, tu perds le sens de la phrase.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• Trois formes : <b>base</b> (<i>write</i>) – <b>prétérit</b> (<i>wrote</i>) – <b>participe passé</b> (<i>written</i>). Au prétérit, on prend la <b>2ᵉ colonne</b>.<br>• Même forme à toutes les personnes (sauf <i>was / were</i>), et <b>jamais de -ed</b> : <i>went</i>, pas <i>goed</i>.<br>• Apprends par <b>familles de sons</b> : <i>buy – bought, think – thought, send – sent, keep – kept…</i><br>• Priorité : les 40 verbes du tableau (rang 1 de la liste « Les verbes irréguliers »).<br>• 5 verbes par jour, à voix haute, avec des révisions espacées.' }
  ],
  exercises: [
    { type: 'mcq', q: 'Last week, we ___ to Chicago for a conference.', options: ['goed', 'went', 'gone', 'go'], answer: 1, explain: 'Prétérit de <i>go</i> : <b>went</b>. <i>Gone</i> est le participe passé (3ᵉ colonne) et « goed » n’existe pas.' },
    { type: 'gap', q: 'I ___ (buy) a new phone yesterday.', answers: ['bought'], explain: '<i>Buy</i> → <b>bought</b> (famille -ought / -aught : <i>buy – bought – bought</i>).' },
    { type: 'gap', q: 'She ___ (send) the documents an hour ago.', answers: ['sent'], explain: '<i>Send</i> → <b>sent</b> (famille d → t : <i>send, spend, lend</i>).' },
    { type: 'mcq', q: 'Quel est le prétérit de <b>think</b> (penser) ?', options: ['thinked', 'taught', 'thought', 'thank'], answer: 2, explain: '<i>Think</i> → <b>thought</b>. Attention : <i>taught</i> est le prétérit de <i>teach</i> (enseigner).' },
    { type: 'gap', q: 'We ___ (meet) the new director last Tuesday.', answers: ['met'], explain: '<i>Meet</i> → <b>met</b> : le « ii » long devient un « è » court.' },
    { type: 'mcq', q: 'Yesterday, Ana ___ her keys at the gym.', options: ['lose', 'losed', 'lost', 'loses'], answer: 2, explain: '<i>Lose</i> → <b>lost</b>. <i>Yesterday</i> impose le prétérit ; « losed » n’existe pas.' },
    { type: 'gap', q: 'The meeting ___ (begin) at 9 a.m. and ended at noon.', answers: ['began'], explain: '<i>Begin</i> → <b>began</b> (famille i – a – u : <i>begin, began, begun</i>). <i>Begun</i> est le participe passé.' },
    { type: 'mcq', q: 'Quelle phrase est correcte ? (« J’ai apporté mon ordinateur portable à la réunion. »)', options: ['I bringed my laptop to the meeting.', 'I bought my laptop to the meeting.', 'I brought my laptop to the meeting.', 'I brang my laptop to the meeting.'], answer: 2, explain: '<i>Bring</i> (apporter) → <b>brought</b>. Ne confonds pas avec <i>bought</i>, le prétérit de <i>buy</i> (acheter).' },
    { type: 'gap', q: 'Ms. Diallo ___ (write) the sales report last night.', answers: ['wrote'], explain: '<i>Write</i> → <b>wrote</b> (2ᵉ colonne). <i>Written</i> est le participe passé.' },
    { type: 'gap', q: 'Our company ___ (spend) $5,000 on advertising last month.', answers: ['spent'], explain: '<i>Spend</i> → <b>spent</b> (famille d → t).' },
    { type: 'order', answer: 'She took the train to Boston yesterday.', alts: ['Yesterday she took the train to Boston.'], fr: 'Elle a pris le train pour Boston hier.', explain: '<i>Take</i> → <b>took</b>. Ordre : sujet + verbe + complément + lieu + moment.' },
    { type: 'order', answer: 'They sold three hundred units last week.', alts: ['Last week they sold three hundred units.'], fr: 'Ils ont vendu trois cents unités la semaine dernière.', explain: '<i>Sell</i> → <b>sold</b> (famille -ell → -old). <i>Last week</i> va en fin (ou en début) de phrase.' },
    { type: 'listen', accent: 'en-AU', say: "I left the office early yesterday because I had a doctor's appointment.", q: 'Qu’a fait cette personne hier ?', options: ['Elle a quitté le bureau tôt.', 'Elle est arrivée au bureau tôt.', 'Elle a oublié son rendez-vous chez le médecin.'], answer: 0, explain: '<i>Left</i> est le prétérit de <b>leave</b> (partir, quitter) et <i>had</i> celui de <b>have</b> : « J’ai quitté le bureau tôt hier parce que j’avais rendez-vous chez le médecin. »' },
    { type: 'dictation', accent: 'en-CA', say: 'He spoke to the client and wrote an email.', answers: ['He spoke to the client and wrote an email'], explain: '<i>Spoke</i> = prétérit de <b>speak</b> ; <i>wrote</i> = prétérit de <b>write</b>. « Il a parlé au client et a écrit un e-mail. »' },
    { type: 'mcq', q: 'The company ------- a new factory in Monterrey last year. <small>(style TOEIC)</small>', options: ['build', 'builds', 'built', 'building'], answer: 2, explain: '<i>Last year</i> → prétérit. <i>Build</i> → <b>built</b>.' },
    { type: 'mcq', q: 'Mr. Petrov ------- the sales team for five years before he retired. <small>(style TOEIC)</small>', options: ['leads', 'led', 'leaded', 'leading'], answer: 1, explain: '<i>Before he retired</i> (avant de prendre sa retraite) : période terminée → prétérit. <i>Lead</i> → <b>led</b> ; « leaded » n’existe pas dans ce sens.' }
  ]
});
