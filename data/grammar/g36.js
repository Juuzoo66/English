LE.register({
  id: 'g36',
  kind: 'grammar',
  title: 'Les propositions relatives : who, which, that, whose, where',
  subtitle: 'Relier deux idées dans une seule phrase, comme avec « qui, que, dont, où » en français',
  level: 'B1',
  minutes: 45,
  goals: [
    'Choisir le bon pronom relatif : <b>who, which, that, whose, where, when, whom</b>',
    'Distinguer les relatives <b>déterminatives</b> (sans virgules) et <b>explicatives</b> (avec virgules)',
    'Savoir quand on peut <b>supprimer</b> le pronom relatif : <i>the report I wrote</i>',
    'Traduire « que », « dont » et « ce que » sans tomber dans les pièges des francophones'
  ],
  blocks: [
    { type: 'h', text: 'À quoi servent les relatives ?' },
    { type: 'p', html: 'Une <b>proposition relative</b> est un morceau de phrase qui donne une information sur un nom. Elle permet de relier deux phrases en une seule : <i>I met a woman. <b>She</b> works for Larkfield Logistics.</i> → <i>I met a woman <b>who</b> works for Larkfield Logistics.</i> En français, on utilise <b>qui, que, dont, où</b> ; en anglais, les <b>pronoms relatifs</b> sont <b>who, which, that, whose, where, when</b> et <b>whom</b>.' },
    { type: 'examples', items: [
      { en: 'The woman who called this morning is a new client.', fr: 'La femme qui a appelé ce matin est une nouvelle cliente.' },
      { en: 'I read the report that you sent me.', fr: 'J’ai lu le rapport que tu m’as envoyé.' },
      { en: 'This is the hotel where we stayed last year.', fr: 'Voici l’hôtel où nous avons séjourné l’année dernière.' },
      { en: 'The client whose order was delayed wants a refund.', fr: 'Le client dont la commande a été retardée veut un remboursement.' }
    ] },

    { type: 'h', text: 'Les pronoms relatifs' },
    { type: 'table', head: ['Pronom', 'Pour…', 'Exemple', 'Français'], rows: [
      ['<b>who</b>', 'une <b>personne</b>', 'the engineer <b>who</b> designed the app', 'l’ingénieur <b>qui</b> a conçu l’appli'],
      ['<b>which</b>', 'une <b>chose</b>, un animal', 'the laptop <b>which</b> I bought', 'l’ordinateur portable <b>que</b> j’ai acheté'],
      ['<b>that</b>', 'une personne <b>ou</b> une chose (relative sans virgules)', 'the colleague <b>that</b> helped me', 'le collègue <b>qui</b> m’a aidée'],
      ['<b>whose</b>', 'la <b>possession</b>', 'the client <b>whose</b> order was delayed', 'le client <b>dont</b> la commande a été retardée'],
      ['<b>where</b>', 'un <b>lieu</b>', 'the office <b>where</b> I work', 'le bureau <b>où</b> je travaille'],
      ['<b>when</b>', 'un <b>moment</b>', 'the day <b>when</b> we met', 'le jour <b>où</b> nous nous sommes rencontrés'],
      ['<b>whom</b>', 'une personne complément (<b>formel</b>)', 'the person <b>to whom</b> I wrote', 'la personne <b>à qui</b> j’ai écrit']
    ], caption: 'En anglais, le choix dépend surtout de <b>ce que remplace</b> le pronom (une personne, une chose, un lieu…). En français, il dépend de sa fonction (« qui » = sujet, « que » = complément).' },
    { type: 'box', style: 'tip', title: 'Astuce mémo', html: '<b>who</b> ↔ personnes (comme <i>Who?</i> = Qui ?), <b>which</b> ↔ choses (comme <i>Which one?</i> = Lequel ?), <b>where</b> ↔ lieux (comme <i>Where?</i> = Où ?). Et <b>that</b> est le joker : personnes et choses, mais seulement dans les relatives <b>sans virgules</b> (pour les personnes, <i>who</i> reste plus courant).' },

    { type: 'h', text: 'Qui ou que ? Sujet ou complément' },
    { type: 'p', html: 'En français, on choisit entre « qui » (sujet) et « que » (complément). En anglais, <b>who, which</b> et <b>that</b> servent pour les deux ! Pour savoir si le pronom est sujet ou complément, regarde ce qui le suit : directement un <b>verbe</b> → il est sujet ; un <b>sujet + verbe</b> → il est complément.' },
    { type: 'examples', items: [
      { en: 'The man who works in accounting is from Kenya.', fr: 'L’homme qui travaille à la comptabilité est kényan.', note: 'Sujet : <i>who</i> est suivi directement du verbe <i>works</i>.' },
      { en: 'The man who I met at the trade fair is from Kenya.', fr: 'L’homme que j’ai rencontré au salon professionnel est kényan.', note: 'Complément : <i>who</i> est suivi d’un sujet (<i>I</i>) + verbe (<i>met</i>).' },
      { en: 'The printer that broke down yesterday has been repaired.', fr: 'L’imprimante qui est tombée en panne hier a été réparée.' },
      { en: "The printer that we ordered hasn't arrived yet.", fr: 'L’imprimante que nous avons commandée n’est pas encore arrivée.' }
    ] },

    { type: 'h', text: 'Supprimer le pronom relatif' },
    { type: 'p', html: 'Quand le pronom est <b>complément</b> (= « que » en français) dans une relative sans virgules, on peut le <b>supprimer</b>, et on le fait très souvent à l’oral. C’est déroutant pour une francophone, car en français « que » est obligatoire !' },
    { type: 'examples', items: [
      { en: 'The report I wrote is on your desk.', fr: 'Le rapport que j’ai écrit est sur ton bureau.', note: '= <i>The report <b>that / which</b> I wrote…</i>' },
      { en: 'The people we met in Seoul were very friendly.', fr: 'Les gens que nous avons rencontrés à Séoul étaient très sympathiques.' },
      { en: 'Is this the file you need?', fr: 'C’est le fichier dont tu as besoin ?', note: '<i>need</i> se construit sans préposition : « dont » disparaît complètement.' },
      { en: 'The candidate they hired starts on Monday.', fr: 'Le candidat qu’ils ont recruté commence lundi.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : impossible de supprimer un pronom sujet', html: 'Si le pronom est suivi directement d’un verbe, il est <b>sujet</b> : on ne peut pas le supprimer.<br><span class="ko">The woman called you is my boss.</span> → <span class="ok">The woman <b>who</b> called you is my boss.</span><br>Test rapide pour <i>who, which, that</i> : juste après le pronom, y a-t-il un sujet (<i>I, you, we, the manager…</i>) ? Si oui, et s’il n’y a pas de virgule avant le pronom, tu peux l’enlever. Sinon, garde-le.' },

    { type: 'h', text: 'Avec ou sans virgules : deux types de relatives' },
    { type: 'table', head: ['Critère', 'Relative <b>déterminative</b>', 'Relative <b>explicative</b>'], rows: [
      ['Rôle', 'Elle dit <b>de qui / de quoi</b> on parle : indispensable au sens.', 'Elle ajoute une <b>information en plus</b> : on pourrait la supprimer.'],
      ['Virgules', '<b>Pas</b> de virgules', 'Virgules <b>obligatoires</b> (avant et après)'],
      ['<i>that</i> possible ?', 'Oui', '<b>Non</b> : seulement <i>who, which, whose…</i>'],
      ['Pronom supprimable ?', 'Oui, s’il est complément', '<b>Non</b>, jamais'],
      ['Exemple', 'The employees <b>who work at night</b> get a bonus.', 'Our CEO, <b>who founded the company in 1998</b>, will retire next year.']
    ] },
    { type: 'examples', items: [
      { en: 'My sister who lives in Boston is a lawyer.', fr: 'Ma sœur qui vit à Boston est avocate.', note: 'Sans virgules : j’ai plusieurs sœurs, et je parle de celle qui vit à Boston.' },
      { en: 'My sister, who lives in Boston, is a lawyer.', fr: 'Ma sœur, qui vit à Boston, est avocate.', note: 'Avec virgules : je n’ai qu’une sœur ; « qui vit à Boston » est une simple précision.' },
      { en: 'The new software, which was installed last week, is very fast.', fr: 'Le nouveau logiciel, qui a été installé la semaine dernière, est très rapide.' },
      { en: 'Mr. Diallo, whose team won the award, will give a short speech.', fr: 'M. Diallo, dont l’équipe a remporté le prix, prononcera un petit discours.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : jamais de « that » après une virgule', html: '<span class="ko">Our CEO, that founded the company, …</span> → <span class="ok">Our CEO, <b>who</b> founded the company, …</span><br><span class="ko">The software, that was installed last week, …</span> → <span class="ok">The software, <b>which</b> was installed last week, …</span>' },

    { type: 'h', text: 'Whose : le « dont » de la possession' },
    { type: 'p', html: '<b>Whose</b> exprime la possession : il remplace <i>his, her, its, their</i>. Il est toujours suivi d’un <b>nom sans article</b> et s’utilise pour les personnes comme pour les choses. Il se traduit en général par « dont le / la / les » : <i>the client whose order…</i> = le client <b>dont la</b> commande… Attention : <b>whose</b> se prononce exactement comme <b>who’s</b> (= <i>who is</i> / <i>who has</i>) ; c’est le nom qui suit qui te met sur la piste.' },
    { type: 'examples', items: [
      { en: 'The client whose order was delayed received a discount.', fr: 'Le client dont la commande a été retardée a reçu une remise.', note: '= <i>The client… <b>His</b> order was delayed.</i>' },
      { en: 'We need a supplier whose prices are lower.', fr: 'Il nous faut un fournisseur dont les prix sont plus bas.' },
      { en: "That's the colleague whose car was stolen.", fr: 'C’est la collègue dont la voiture a été volée.' },
      { en: 'Larkfield is a company whose products are sold worldwide.', fr: 'Larkfield est une entreprise dont les produits sont vendus dans le monde entier.', note: 'Après <i>whose</i>, jamais d’article : <span class="ko">whose the products</span>.' }
    ] },

    { type: 'h', text: 'Where, when, whom et les prépositions' },
    { type: 'p', html: '<b>Where</b> s’emploie après un lieu, <b>when</b> après un moment. Quand le verbe de la relative se construit avec une <b>préposition</b> (<i>speak <b>to</b>, work <b>on</b>, talk <b>about</b></i>), l’anglais courant place cette préposition <b>à la fin</b> de la relative. En anglais formel, on la place devant <b>whom</b> (personnes) ou <b>which</b> (choses).' },
    { type: 'table', head: ['Anglais courant', 'Anglais formel', 'Français'], rows: [
      ['the person I spoke <b>to</b>', 'the person <b>to whom</b> I spoke', 'la personne à qui j’ai parlé'],
      ['the project we talked <b>about</b>', 'the project <b>about which</b> we talked', 'le projet dont nous avons parlé'],
      ['the office I work <b>in</b>', 'the office <b>in which</b> I work (= <b>where</b> I work)', 'le bureau où je travaille'],
      ['the day we met', 'the day <b>on which</b> we met (= <b>when</b> we met)', 'le jour où nous nous sommes rencontrés']
    ] },
    { type: 'examples', items: [
      { en: 'Friday is the day when we send the invoices.', fr: 'Le vendredi, c’est le jour où nous envoyons les factures.' },
      { en: 'This is the room where the interviews will take place.', fr: 'Voici la salle où auront lieu les entretiens.' },
      { en: 'Who is the person I should speak to?', fr: 'Qui est la personne à qui je dois m’adresser ?' },
      { en: 'The manager to whom you should send your application is Ms. Reyes.', fr: 'La responsable à qui tu dois envoyer ta candidature est Mme Reyes.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : après une préposition, ni « who » ni « that »', html: '<span class="ko">the person to who I spoke</span> → <span class="ok">the person to <b>whom</b> I spoke</span><br><span class="ko">the project about that we talked</span> → <span class="ok">the project about <b>which</b> we talked</span><br>Et ne mets pas la préposition deux fois : <span class="ko">the office in which I work in</span> ou <span class="ko">the office where I work in</span> → <span class="ok">the office in which I work</span>, <span class="ok">the office where I work</span> ou <span class="ok">the office I work in</span>.' },

    { type: 'h', text: '« Ce que », « ce qui » : what (et parfois which)' },
    { type: 'p', html: '<b>What</b> veut dire « <b>ce que</b> » ou « <b>ce qui</b> » : il ne se rapporte à <b>aucun nom</b> placé avant lui. <b>Which</b>, lui, reprend toujours quelque chose qui précède : un nom, ou toute une idée (après une virgule, <i>, which</i> = « ce qui » ou « ce que »).' },
    { type: 'examples', items: [
      { en: 'What I need is more time.', fr: 'Ce dont j’ai besoin, c’est de plus de temps.' },
      { en: "I don't understand what he said.", fr: 'Je ne comprends pas ce qu’il a dit.' },
      { en: 'What worries me is the deadline.', fr: 'Ce qui m’inquiète, c’est la date limite.' },
      { en: 'The client paid late, which caused problems.', fr: 'Le client a payé en retard, ce qui a causé des problèmes.', note: '<i>, which</i> reprend toute l’idée qui précède.' }
    ] },
    { type: 'box', style: 'warn', title: 'Pièges des francophones : que, dont, ce que', html: '• « que » après un nom ne se traduit jamais par <i>what</i> : <span class="ko">the report what I wrote</span> → <span class="ok">the report (that / which) I wrote</span>.<br>• « tout ce que » = <i>everything (that)</i> ou <i>all (that)</i> : <span class="ko">all what I know</span> → <span class="ok">all I know</span> / <span class="ok">everything I know</span>.<br>• « dont » n’a pas un seul équivalent : c’est <b>whose</b> pour la possession ; sinon, on reprend le verbe avec sa préposition (voir le tableau).' },
    { type: 'table', head: ['Français', 'Anglais', 'Pourquoi'], rows: [
      ['le rapport <b>que</b> j’ai écrit', 'the report (<b>that / which</b>) I wrote', '« que » après une chose → <i>that / which</i>, ou rien'],
      ['la femme <b>que</b> j’ai rencontrée', 'the woman (<b>who / that</b>) I met', '« que » après une personne → <i>who / that</i>, ou rien'],
      ['le client <b>dont</b> la commande…', 'the client <b>whose</b> order…', 'possession → <i>whose</i>'],
      ['le projet <b>dont</b> je t’ai parlé', 'the project I told you <b>about</b>', '<i>tell someone about</i> → préposition à la fin'],
      ['le fichier <b>dont</b> j’ai besoin', 'the file I need', '<i>need</i> n’a pas de préposition'],
      ['dix produits, <b>dont</b> trois sont nouveaux', 'ten products, three <b>of which</b> are new', '« dont » = « parmi lesquels » → <i>of which</i> (<i>of whom</i> pour des personnes)'],
      ['<b>ce que</b> je veux', '<b>what</b> I want', 'pas de nom avant → <i>what</i>']
    ] },

    { type: 'h', text: 'Au TOEIC' },
    { type: 'box', style: 'info', title: 'Les relatives en Partie 5', html: 'Les pronoms relatifs tombent très souvent en <b>Partie 5</b>. Méthode :<br>1) Regarde le <b>nom juste avant</b> le trou : personne ? chose ? lieu ? moment ?<br>2) Regarde <b>ce qui suit</b> le trou : directement un verbe → <i>who / which / that</i> ; un nom sans article qui « appartient » au nom d’avant → <b>whose</b> ; une phrase <b>complète</b> à laquelle il ne manque rien → <b>where / when</b> ; une phrase à laquelle il manque un complément → <i>which / that / who</i>.<br>3) Une <b>virgule</b> avant le trou élimine <i>that</i>.<br>Exemple : <i>The supplier ------- prices were the lowest won the contract.</i> → un nom sans article suit le trou (<i>prices</i>), et ce sont les prix <b>du</b> fournisseur → <b>whose</b>.' },
    { type: 'examples', items: [
      { en: 'Employees who wish to attend the workshop should register by Friday.', fr: 'Les employés qui souhaitent assister à l’atelier doivent s’inscrire d’ici vendredi.' },
      { en: 'The conference room where the training was held has been renovated.', fr: 'La salle de conférence où la formation a eu lieu a été rénovée.' },
      { en: 'Candidates whose applications are incomplete will not be considered.', fr: 'Les candidats dont le dossier est incomplet ne seront pas pris en compte.' },
      { en: 'The package, which contained fragile items, arrived damaged.', fr: 'Le colis, qui contenait des objets fragiles, est arrivé endommagé.' }
    ] },

    { type: 'box', style: 'key', title: 'À retenir', html: '• <b>who</b> = personnes ; <b>which</b> = choses ; <b>that</b> = les deux (relatives sans virgules seulement).<br>• <b>whose</b> + nom sans article = possession (« dont le… ») ; <b>where</b> = lieu ; <b>when</b> = moment ; <b>whom</b> = personne complément, formel, surtout après une préposition.<br>• Pronom complément → supprimable : <i>the report (that) I wrote</i>. Pronom sujet → obligatoire.<br>• Virgules = information en plus → pas de <i>that</i>, pas de suppression.<br>• Préposition à la fin (<i>the person I spoke to</i>) ou devant <i>whom / which</i> (formel).<br>• <b>what</b> = ce que / ce qui (aucun nom avant) ; juste après un nom, jamais <i>what</i>.' }
  ],
  exercises: [
    { type: 'gap', q: 'The woman ___ lives next door is a doctor.', answers: ['who', 'that'], explain: '<i>The woman</i> est une personne, et le pronom est sujet (suivi directement du verbe <i>lives</i>) → <b>who</b> (ou <b>that</b>). Impossible de le supprimer.' },
    { type: 'mcq', q: 'This is the laptop ___ I bought last week.', options: ['who', 'which', 'where', 'whose'], answer: 1, explain: '<i>The laptop</i> est une chose → <b>which</b> (on pourrait aussi dire <i>that</i>, ou rien du tout). <i>Where</i> sert pour un lieu, <i>whose</i> pour la possession.' },
    { type: 'mcq', q: "I'll never forget the day ___ I started this job.", options: ['when', 'where', 'who', 'what'], answer: 0, explain: '<i>The day</i> est un moment → <b>when</b> (= « le jour <b>où</b> »). Piège : le français dit « où » pour un moment, mais l’anglais utilise <i>when</i>, pas <i>where</i>.' },
    { type: 'gap', q: 'The hotel ___ we stayed was near the airport.', answers: ['where', 'in which', 'at which'], explain: 'Après un lieu, avec une relative complète (<i>we stayed</i>) → <b>where</b> (ou, plus formel, <i>in which / at which</i>). <i>Which</i> seul ou <i>that</i> demanderaient une préposition à la fin : <i>the hotel (that) we stayed at</i>.' },
    { type: 'mcq', q: 'Dans quelle phrase peut-on <b>supprimer</b> le pronom relatif ?', options: ['The man who called you is here.', 'The report that I wrote is on your desk.', 'The train which leaves at nine is full.', 'Ms. Chen, who manages the team, is on vacation.'], answer: 1, explain: 'Dans <i>the report that I wrote</i>, <i>that</i> est complément (il est suivi du sujet <i>I</i>) : on peut dire <i>The report I wrote is on your desk.</i> Dans les autres phrases, le pronom est sujet (et la dernière a des virgules) : impossible de le supprimer.' },
    { type: 'mcq', q: 'Our CEO, ___ founded the company in 1998, will retire next year.', options: ['that', 'who', 'which', 'whom'], answer: 1, explain: 'Relative <b>explicative</b> (entre virgules) sur une personne, pronom sujet → <b>who</b>. <i>That</i> est interdit après une virgule, <i>which</i> est pour les choses, et <i>whom</i> ne peut pas être sujet.' },
    { type: 'gap', q: 'The new software, ___ was installed last week, is very slow.', answers: ['which'], explain: 'Une chose, dans une relative entre virgules → <b>which</b>. Pas de <i>that</i> dans une relative explicative.' },
    { type: 'mcq', q: '___ I need is a quiet place to work.', options: ['What', 'Which', 'That', 'Whose'], answer: 0, explain: 'Aucun nom avant le pronom : il signifie « ce dont / ce que » → <b>What</b>. <i>Which</i> et <i>that</i> doivent reprendre un nom placé avant eux.' },
    { type: 'gap', q: 'The consultant with ___ we worked last year has opened her own firm.', answers: ['whom'], explain: 'Après une préposition (<i>with</i>) et pour une personne → <b>whom</b>. <i>With who</i> et <i>with that</i> sont incorrects. En anglais courant, on dirait : <i>the consultant we worked with last year</i>.' },
    { type: 'gap', q: 'He canceled the meeting at the last minute, ___ annoyed everyone.', answers: ['which'], explain: '<i>, which</i> reprend toute l’idée qui précède (« ce qui ») : <b>which</b>. <i>What</i> ne reprend jamais une idée déjà exprimée, et <i>that</i> est impossible après une virgule.' },
    { type: 'order', answer: 'The report I wrote is on your desk.', fr: 'Le rapport que j’ai écrit est sur ton bureau.', explain: 'Le pronom complément (<i>that / which</i>) est supprimé : <i>The report [that] I wrote…</i> C’est très fréquent en anglais courant.' },
    { type: 'order', answer: 'This is the person I spoke to.', fr: 'C’est la personne à qui j’ai parlé.', explain: 'Anglais courant : pronom supprimé et préposition à la fin (<i>speak <b>to</b></i>). Version formelle : <i>This is the person to whom I spoke.</i>' },
    { type: 'listen', say: "Hi Daniel, it's Priya. The supplier whose delivery was late last week called this morning. The parts we ordered will arrive on Monday.", accent: 'en-AU', q: 'Qui a appelé ce matin ?', options: ['Le fournisseur qui a livré en avance la semaine dernière.', 'Le fournisseur dont la livraison était en retard la semaine dernière.', 'Le client dont la commande arrivera lundi.'], answer: 1, explain: '<i>The supplier <b>whose</b> delivery was late last week</i> = le fournisseur <b>dont</b> la livraison était en retard la semaine dernière. Ce qui arrivera lundi, ce sont les pièces commandées (<i>the parts we ordered</i>).' },
    { type: 'mcq', q: 'Applicants ------- résumés are selected will be contacted by e-mail. <small>(style TOEIC)</small>', options: ['who', 'whose', 'whom', 'which'], answer: 1, explain: 'Le trou est suivi d’un nom sans article (<i>résumés</i>) : les CV <b>des</b> candidats → possession → <b>whose</b>.' },
    { type: 'mcq', q: 'The conference center ------- the awards ceremony will take place is next to the station. <small>(style TOEIC)</small>', options: ['which', 'where', 'what', 'who'], answer: 1, explain: 'Nom de lieu avant le trou, et la relative est complète (<i>the awards ceremony will take place</i> : il ne manque rien) → <b>where</b>. <i>Which</i> demanderait une préposition : <i>in which</i>.' },
    { type: 'mcq', q: 'Please return the forms ------- you received during the orientation session. <small>(style TOEIC)</small>', options: ['who', 'what', 'whose', 'that'], answer: 3, explain: '<i>The forms</i> = des choses, et le pronom est complément (suivi de <i>you received</i>) → <b>that</b> (ou <i>which</i>, ou rien). Piège francophone : « que » juste après un nom ne se traduit jamais par <i>what</i>.' }
  ]
});
