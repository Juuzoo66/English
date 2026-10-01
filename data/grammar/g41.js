LE.register({
  id: 'g41',
  kind: 'grammar',
  title: 'Les phrasal verbs essentiels du monde pro',
  subtitle: 'Un verbe + une petite particule = un sens nouveau : les 50 que le TOEIC adore',
  level: 'B2',
  minutes: 55,
  goals: [
    'Comprendre ce qu’est un <b>phrasal verb</b> et pourquoi son sens ne se devine pas toujours',
    'Placer correctement le complément : <i>turn <b>it</b> off</i> mais <i>look into <b>it</b></i>',
    'Connaître une cinquantaine de phrasal verbs du monde du travail, classés par thème',
    'Reconnaître leurs synonymes formels au TOEIC : <i>put off = postpone</i>, <i>call off = cancel</i>'
  ],
  blocks: [
    { type: 'h', text: 'Qu’est-ce qu’un phrasal verb ?' },
    { type: 'p', html: 'Un <b>phrasal verb</b> (verbe à particule) est un verbe suivi d’une petite <b>particule</b> : <i>up, out, off, on, in, over, back, down, through…</i> Ensemble, ils forment <b>un seul verbe</b>, avec un sens propre, souvent impossible à deviner à partir des deux morceaux. <i>Look</i> veut dire « regarder », mais <i>look after</i> veut dire « s’occuper de » et <i>look into</i>, « examiner ». Le français connaît un peu ce phénomène avec « mettre » : mettre en place, mettre de côté, se mettre à… Les anglophones utilisent des phrasal verbs <b>en permanence</b>, surtout à l’oral : impossible de comprendre les conversations du TOEIC sans eux.' },
    { type: 'examples', items: [
      { en: 'Please look at the chart on page 4.', fr: 'Regardez le graphique page 4, s’il vous plaît.', note: '<i>look at</i> = regarder : ici, le sens est logique.' },
      { en: 'Who will look after the clients while you are away?', fr: 'Qui s’occupera des clients pendant ton absence ?', note: '<i>look after</i> = s’occuper de : sens nouveau !' },
      { en: "We're looking into the problem.", fr: 'Nous examinons le problème.' },
      { en: 'You can look up her number in the directory.', fr: 'Tu peux chercher son numéro dans l’annuaire.' }
    ] },
    { type: 'box', style: 'tip', title: 'Ta meilleure arme : le synonyme formel', html: 'Presque chaque phrasal verb a un équivalent plus formel, souvent proche du français : <i>put off</i> = <b>postpone</b> (reporter), <i>call off</i> = <b>cancel</b> (annuler), <i>hand in</i> = <b>submit</b> (soumettre, rendre), <i>look into</i> = <b>investigate</b> (enquêter). Les anglophones préfèrent le phrasal verb à l’oral et le verbe formel à l’écrit. Apprends toujours <b>les deux ensemble</b> : au TOEIC, c’est exactement ce couple qu’on te demande de reconnaître.' },

    { type: 'h', text: 'Séparable ou inséparable : où placer le complément ?' },
    { type: 'p', html: 'Le <b>complément d’objet</b> (ce sur quoi porte l’action : <i>the printer</i>, <i>the form</i>, <i>it</i>…) ne se place pas toujours au même endroit. Il existe trois familles :<br>• les phrasal verbs <b>séparables</b> : le complément peut se placer après la particule <b>ou</b> entre le verbe et la particule ;<br>• les phrasal verbs <b>inséparables</b> : le verbe et la particule restent collés, le complément vient toujours après ;<br>• les phrasal verbs <b>intransitifs</b> : ils n’ont pas de complément du tout (<i>show up, hold on</i>).' },
    { type: 'table', head: ['Famille', 'Avec un nom', 'Avec un pronom (it, them, me…)', 'Exemples de verbes'], rows: [
      ['<b>Séparable</b>', 'turn off <b>the printer</b><br>turn <b>the printer</b> off', 'turn <b>it</b> off<br><small>jamais <span class="ko">turn off it</span></small>', 'set up, fill out, call off, put off, turn down, hand in, pick up, figure out, back up, sort out, wrap up'],
      ['<b>Inséparable</b>', 'look into <b>the problem</b>', 'look into <b>it</b><br><small>jamais <span class="ko">look it into</span></small>', 'look into, look after, go over, go through, deal with, get back to, run out of, come up with, keep up with'],
      ['<b>Intransitif</b>', 'aucun (pas de complément)', 'aucun', 'show up, hold on, take off (avion), catch up, sign up, log in']
    ], caption: 'Les phrasal verbs de <b>trois mots</b> comme <i>run out of, come up with, get back to, keep up with</i> sont inséparables.' },
    { type: 'box', style: 'warn', title: 'Piège : le pronom se met au milieu !', html: 'Avec un phrasal verb séparable, un <b>pronom</b> (<i>it, them, him, her, me, us, you</i>) se place <b>obligatoirement</b> entre le verbe et la particule :<br><span class="ko">Can you turn off it?</span> → <span class="ok">Can you turn <b>it</b> off?</span><br><span class="ko">Please fill out it.</span> → <span class="ok">Please fill <b>it</b> out.</span><br><span class="ko">I’ll call back you.</span> → <span class="ok">I’ll call <b>you</b> back.</span><br>Avec un inséparable, c’est l’inverse : <span class="ko">I’ll look it into.</span> → <span class="ok">I’ll look into <b>it</b>.</span>' },
    { type: 'examples', items: [
      { en: 'Please turn off your phones during the presentation.', fr: 'Merci d’éteindre vos téléphones pendant la présentation.' },
      { en: 'The printer is still on. Could you turn it off?', fr: 'L’imprimante est encore allumée. Tu pourrais l’éteindre ?', note: 'Pronom <b>it</b> → entre le verbe et la particule.' },
      { en: 'Here is the application form. Fill it out and sign it.', fr: 'Voici le formulaire de candidature. Remplis-le et signe-le.' },
      { en: 'Mr. Adeyemi called. Can you call him back?', fr: 'M. Adeyemi a appelé. Tu peux le rappeler ?' },
      { en: "The invoice is wrong? I'll look into it right away.", fr: 'La facture est fausse ? Je vais examiner ça tout de suite.', note: 'Inséparable : <i>look into <b>it</b></i>.' },
      { en: 'The meeting has been called off.', fr: 'La réunion a été annulée.', note: 'Au <b>passif</b>, la particule reste juste après le participe passé : <i>called <b>off</b></i>, <i>was put <b>off</b></i>.' }
    ] },
    { type: 'box', style: 'tip', title: 'Complément long et accent', html: 'Avec un nom court, les deux places sont possibles : <i>fill out the form</i> = <i>fill the form out</i>. Mais si le complément est <b>long</b>, mets-le <b>après</b> la particule : <i>Please fill out <b>the form that I sent you last week</b>.</i> Sinon, la particule se retrouve perdue en fin de phrase.<br>À l’oral, c’est le plus souvent la <b>particule</b> qui porte l’accent : <i>set UP, call OFF, turn it DOWN</i>. Écoute-la bien : c’est souvent elle qui donne le sens.' },

    { type: 'h', text: 'Thème 1 : Réunions et projets' },
    { type: 'table', head: ['Phrasal verb', 'Sens', 'Exemple', 'Synonyme formel'], rows: [
      ['<b>set up</b>', 'organiser, mettre en place ; installer', 'Can you <b>set up</b> a meeting with the client?<br><small>Tu peux organiser une réunion avec le client ?</small>', 'arrange, establish, install'],
      ['<b>carry out</b>', 'réaliser, effectuer', 'We <b>carried out</b> a customer survey in May.<br><small>Nous avons réalisé une enquête clients en mai.</small>', 'conduct, perform'],
      ['<b>call off</b>', 'annuler', 'The trade show was <b>called off</b> because of the storm.<br><small>Le salon a été annulé à cause de la tempête.</small>', 'cancel'],
      ['<b>put off</b>', 'reporter, repousser', 'Let’s <b>put off</b> the launch until May.<br><small>Reportons le lancement à mai.</small>', 'postpone, delay'],
      ['<b>go over</b>', 'passer en revue, revoir', 'Let’s <b>go over</b> the agenda before the call.<br><small>Revoyons l’ordre du jour avant l’appel.</small>', 'review'],
      ['<b>bring up</b>', 'aborder, soulever (un sujet)', 'She <b>brought up</b> the budget issue.<br><small>Elle a soulevé la question du budget.</small>', 'raise, mention'],
      ['<b>put together</b>', 'préparer, monter, assembler', 'Can you <b>put together</b> a short presentation?<br><small>Tu peux préparer une courte présentation ?</small>', 'prepare, assemble, compile'],
      ['<b>head up</b>', 'diriger, être à la tête de', 'Ms. Osei <b>heads up</b> the sales team.<br><small>Mme Osei dirige l’équipe commerciale.</small>', 'lead, direct'],
      ['<b>set aside</b>', 'mettre de côté, réserver', 'We’ve <b>set aside</b> $5,000 for training.<br><small>Nous avons réservé 5 000 $ pour la formation.</small>', 'reserve, allocate'],
      ['<b>follow up (on)</b>', 'assurer le suivi (de), relancer', 'I’m <b>following up on</b> my e-mail from last week.<br><small>Je reviens vers vous au sujet de mon e-mail de la semaine dernière.</small>', 'check on, pursue'],
      ['<b>wrap up</b>', 'conclure, terminer', 'Let’s <b>wrap up</b> the meeting. It’s almost noon.<br><small>Terminons la réunion. Il est presque midi.</small>', 'conclude, finish']
    ] },

    { type: 'h', text: 'Thème 2 : Téléphone et communication' },
    { type: 'table', head: ['Phrasal verb', 'Sens', 'Exemple', 'Synonyme formel'], rows: [
      ['<b>call back</b>', 'rappeler (au téléphone)', 'Could you <b>call me back</b> after lunch?<br><small>Pourriez-vous me rappeler après le déjeuner ?</small>', 'return a call'],
      ['<b>get back to</b>', 'recontacter, revenir vers quelqu’un', 'I’ll <b>get back to</b> you by Friday.<br><small>Je reviens vers vous d’ici vendredi.</small>', 'respond, reply'],
      ['<b>hold on</b>', 'patienter, ne pas quitter', '<b>Hold on</b>, please. I’ll check her schedule.<br><small>Ne quittez pas, je vérifie son emploi du temps.</small>', 'wait'],
      ['<b>put through</b>', 'passer (un appel), transférer', 'I’ll <b>put you through</b> to Mr. Tanaka.<br><small>Je vous passe M. Tanaka.</small>', 'connect, transfer'],
      ['<b>pick up</b>', 'décrocher (le téléphone)', 'Nobody <b>picked up</b> the phone.<br><small>Personne n’a décroché.</small>', 'answer'],
      ['<b>point out</b>', 'faire remarquer, signaler', 'He <b>pointed out</b> an error in the invoice.<br><small>Il a signalé une erreur dans la facture.</small>', 'indicate, note'],
      ['<b>find out</b>', 'découvrir, apprendre, se renseigner', 'I’ll <b>find out</b> when the next train leaves.<br><small>Je vais me renseigner sur l’heure du prochain train.</small>', 'discover, learn'],
      ['<b>look up</b>', 'chercher (une information)', 'Can you <b>look up</b> her e-mail address?<br><small>Tu peux chercher son adresse e-mail ?</small>', 'search for, consult']
    ] },
    { type: 'dialog', title: 'Au standard téléphonique', accent: 'en-GB', lines: [
      { speaker: 'W', en: 'Good morning, Barlow Consulting. How can I help you?', fr: 'Bonjour, Barlow Consulting. Que puis-je faire pour vous ?' },
      { speaker: 'M', en: 'Hi, this is Karim Haddad from Norrow Logistics. Could you put me through to Ms. Varga, please?', fr: 'Bonjour, Karim Haddad de Norrow Logistics. Pourriez-vous me passer Mme Varga, s’il vous plaît ?' },
      { speaker: 'W', en: "Hold on, please. I'm sorry, she isn't picking up. Can I take a message?", fr: 'Ne quittez pas. Je suis désolée, elle ne décroche pas. Puis-je prendre un message ?' },
      { speaker: 'M', en: "Yes. Tell her we've looked into the delivery problem and sorted it out.", fr: 'Oui. Dites-lui que nous avons examiné le problème de livraison et que nous l’avons réglé.' },
      { speaker: 'W', en: 'Great. Should she call you back?', fr: 'Parfait. Doit-elle vous rappeler ?' },
      { speaker: 'M', en: "Only if she has questions. Otherwise, I'll follow up by e-mail tomorrow.", fr: 'Seulement si elle a des questions. Sinon, je ferai le suivi par e-mail demain.' }
    ] },

    { type: 'h', text: 'Thème 3 : Documents, formulaires et informatique' },
    { type: 'table', head: ['Phrasal verb', 'Sens', 'Exemple', 'Synonyme formel'], rows: [
      ['<b>fill out</b> / <b>fill in</b>', 'remplir (un formulaire)', 'Please <b>fill out</b> this form in capital letters.<br><small>Merci de remplir ce formulaire en majuscules.</small>', 'complete'],
      ['<b>hand in</b> / <b>turn in</b>', 'remettre, rendre (un travail)', '<b>Hand in</b> your expense reports by Friday.<br><small>Rendez vos notes de frais d’ici vendredi.</small>', 'submit'],
      ['<b>hand out</b>', 'distribuer', 'Staff <b>handed out</b> brochures at the entrance.<br><small>Le personnel a distribué des brochures à l’entrée.</small>', 'distribute'],
      ['<b>look over</b>', 'parcourir, relire rapidement', 'Could you <b>look over</b> my report?<br><small>Tu pourrais jeter un œil à mon rapport ?</small>', 'check, review'],
      ['<b>go through</b>', 'examiner en détail, éplucher', 'We <b>went through</b> the contract line by line.<br><small>Nous avons épluché le contrat ligne par ligne.</small>', 'examine'],
      ['<b>sign up (for)</b>', 's’inscrire (à)', '<b>Sign up for</b> the workshop on the intranet.<br><small>Inscris-toi à l’atelier sur l’intranet.</small>', 'register (for), enroll (in)'],
      ['<b>sign in</b> / <b>log in</b>', 'se connecter ; signer le registre (à l’accueil)', '<b>Log in</b> with your employee ID.<br><small>Connecte-toi avec ton identifiant d’employé.</small>', 'access'],
      ['<b>back up</b>', 'sauvegarder ; soutenir', '<b>Back up</b> your files every evening.<br><small>Sauvegarde tes fichiers tous les soirs.</small>', 'save a copy ; support']
    ] },

    { type: 'h', text: 'Thème 4 : Résoudre les problèmes' },
    { type: 'table', head: ['Phrasal verb', 'Sens', 'Exemple', 'Synonyme formel'], rows: [
      ['<b>look into</b>', 'examiner, étudier, enquêter sur', 'We’re <b>looking into</b> the delivery problem.<br><small>Nous examinons le problème de livraison.</small>', 'investigate, examine'],
      ['<b>figure out</b>', 'comprendre, trouver', 'I can’t <b>figure out</b> how this machine works.<br><small>Je n’arrive pas à comprendre comment marche cette machine.</small>', 'understand, solve'],
      ['<b>sort out</b>', 'régler, résoudre', 'The IT team <b>sorted out</b> the network issue.<br><small>L’équipe informatique a réglé le problème de réseau.</small>', 'resolve, fix'],
      ['<b>work out</b>', 'trouver (une solution), calculer ; bien se passer', 'We <b>worked out</b> a new schedule.<br><small>Nous avons mis au point un nouveau planning.</small>', 'devise, calculate ; succeed'],
      ['<b>come up with</b>', 'trouver, imaginer (une idée)', 'She <b>came up with</b> a great idea.<br><small>Elle a eu une excellente idée.</small>', 'propose, devise'],
      ['<b>deal with</b>', 's’occuper de, traiter, gérer', 'Mr. Ruiz <b>deals with</b> customer complaints.<br><small>M. Ruiz traite les réclamations des clients.</small>', 'handle, manage'],
      ['<b>run out of</b>', 'ne plus avoir de, être à court de', 'We’ve <b>run out of</b> paper.<br><small>Nous n’avons plus de papier.</small>', 'have none left ; exhaust (a supply)']
    ] },
    { type: 'examples', items: [
      { en: "We've run out of toner, so I can't print the handouts.", fr: 'Nous n’avons plus de toner, donc je ne peux pas imprimer les documents à distribuer.', note: '<i>a handout</i> = un document distribué (nom formé sur <i>hand out</i>).' },
      { en: "Let's put off the decision until we've looked into the costs.", fr: 'Reportons la décision jusqu’à ce que nous ayons étudié les coûts.' },
      { en: 'The client turned down our first offer, but we came up with a better one.', fr: 'Le client a refusé notre première offre, mais nous en avons trouvé une meilleure.' },
      { en: "I'll get back to you as soon as I've figured out the problem.", fr: 'Je reviens vers toi dès que j’ai compris le problème.' },
      { en: 'Could you fill in for me at the meeting tomorrow?', fr: 'Tu pourrais me remplacer à la réunion demain ?', note: '<i>fill in for someone</i> = remplacer quelqu’un.' }
    ] },

    { type: 'h', text: 'Thème 5 : Ressources humaines et vie de l’entreprise' },
    { type: 'table', head: ['Phrasal verb', 'Sens', 'Exemple', 'Synonyme formel'], rows: [
      ['<b>take on</b>', 'embaucher ; prendre en charge (une tâche)', 'We’re <b>taking on</b> ten new employees.<br><small>Nous embauchons dix nouveaux employés.</small>', 'hire ; accept'],
      ['<b>lay off</b>', 'licencier (pour raisons économiques)', 'The factory <b>laid off</b> 200 workers.<br><small>L’usine a licencié 200 ouvriers.</small>', 'dismiss, let go'],
      ['<b>take over</b>', 'racheter, reprendre ; prendre le relais', 'A larger firm <b>took over</b> the company.<br><small>Une entreprise plus grande a racheté la société.</small>', 'acquire ; replace'],
      ['<b>turn down</b>', 'refuser ; baisser (le son)', 'She <b>turned down</b> the job offer.<br><small>Elle a refusé l’offre d’emploi.</small>', 'refuse, reject, decline'],
      ['<b>look after</b>', 's’occuper de, prendre soin de', 'Who will <b>look after</b> our visitors?<br><small>Qui va s’occuper de nos visiteurs ?</small>', 'take care of'],
      ['<b>keep up with</b>', 'suivre (le rythme), se tenir au courant de', 'It’s hard to <b>keep up with</b> demand.<br><small>C’est difficile de suivre la demande.</small>', 'match, stay current with'],
      ['<b>catch up (on / with)</b>', 'rattraper son retard ; prendre des nouvelles', 'I need to <b>catch up on</b> my e-mails.<br><small>Je dois rattraper mon retard dans mes e-mails.</small>', 'get up to date'],
      ['<b>cut back (on)</b>', 'réduire', 'We’re <b>cutting back on</b> travel expenses.<br><small>Nous réduisons les frais de déplacement.</small>', 'reduce'],
      ['<b>give up</b>', 'abandonner, arrêter', 'They <b>gave up</b> the project after a year.<br><small>Ils ont abandonné le projet au bout d’un an.</small>', 'abandon, quit']
    ] },

    { type: 'h', text: 'Thème 6 : Déplacements et logistique' },
    { type: 'table', head: ['Phrasal verb', 'Sens', 'Exemple', 'Synonyme formel'], rows: [
      ['<b>show up</b> / <b>turn up</b>', 'arriver, se présenter, venir', 'Only ten people <b>showed up</b> for the meeting.<br><small>Seules dix personnes sont venues à la réunion.</small>', 'arrive, attend'],
      ['<b>pick up</b>', 'aller chercher, récupérer', 'I’ll <b>pick you up</b> at the airport.<br><small>Je viendrai te chercher à l’aéroport.</small>', 'collect'],
      ['<b>drop off</b>', 'déposer', 'Can you <b>drop off</b> this package at reception?<br><small>Tu peux déposer ce colis à l’accueil ?</small>', 'deliver, leave'],
      ['<b>take off</b>', 'décoller ; prendre (un jour) de congé', 'The plane <b>took off</b> on time. I’m <b>taking</b> Friday <b>off</b>.<br><small>L’avion a décollé à l’heure. Je prends mon vendredi.</small>', 'depart ; take leave']
    ] },
    { type: 'box', style: 'warn', title: 'Piège : un phrasal verb, plusieurs sens', html: 'Beaucoup de phrasal verbs ont plusieurs sens : c’est le <b>contexte</b> qui décide.<br>• <b>pick up</b> : décrocher (<i>pick up the phone</i>), aller chercher (<i>pick up a client</i>), ramasser (<i>pick up a box</i>)… et repartir à la hausse (<i>Sales are picking up.</i> = Les ventes reprennent).<br>• <b>take off</b> : décoller (avion), enlever (un vêtement), prendre un congé, et « décoller » pour un produit (<i>Sales took off.</i> = Les ventes ont décollé).<br>• <b>work out</b> : trouver ou calculer, bien se passer (<i>It worked out.</i> = Ça s’est bien passé), faire du sport.<br>• <b>turn up</b> : arriver (= <i>show up</i>) ou monter le son. <b>turn down</b> : refuser ou baisser le son.' },

    { type: 'h', text: 'Du verbe au nom : setup, backup, layoff…' },
    { type: 'p', html: 'Beaucoup de phrasal verbs donnent un <b>nom</b>, qui s’écrit en <b>un seul mot</b> ou avec un <b>trait d’union</b>. Le verbe, lui, reste en deux mots. C’est un piège classique de la Partie 5 : si le trou suit un article (<i>a, the</i>), il faut le nom.' },
    { type: 'table', head: ['Verbe (2 mots)', 'Nom', 'Exemple'], rows: [
      ['set up', '<b>a setup</b> (installation, configuration)', 'The <b>setup</b> takes about ten minutes. <small>L’installation prend environ dix minutes.</small>'],
      ['back up', '<b>a backup</b> (sauvegarde ; renfort)', 'Always keep a <b>backup</b> of your files. <small>Garde toujours une sauvegarde de tes fichiers.</small>'],
      ['lay off', '<b>a layoff</b> (licenciement économique)', 'The company announced 50 <b>layoffs</b>. <small>L’entreprise a annoncé 50 licenciements.</small>'],
      ['take over', '<b>a takeover</b> (rachat, prise de contrôle)', 'The board approved the <b>takeover</b>. <small>Le conseil a approuvé le rachat.</small>'],
      ['follow up', '<b>a follow-up</b> (suivi, relance)', 'I sent a <b>follow-up</b> e-mail. <small>J’ai envoyé un e-mail de relance.</small>'],
      ['cut back', '<b>a cutback</b> (réduction, coupe)', 'There were <b>cutbacks</b> in the budget. <small>Il y a eu des coupes dans le budget.</small>'],
      ['check in', '<b>a check-in</b> (enregistrement)', '<b>Check-in</b> opens at 6 a.m. <small>L’enregistrement ouvre à 6 h.</small>']
    ], caption: 'Verbe : <i>We need to <b>back up</b> the data.</i> Nom : <i>We need a <b>backup</b> of the data.</i>' },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'Les phrasal verbs sont partout :<br>• <b>Partie 5</b> : on te demande la bonne particule (<i>The meeting has been called ------- .</i> → <b>off</b>), le bon verbe (<i>------- the form</i> → <b>fill out</b>) ou le nom (<i>a ------- of the files</i> → <b>backup</b>).<br>• <b>Parties 3 et 4</b> : la conversation utilise le phrasal verb (<i>We had to <b>put off</b> the launch.</i>), mais la question et les réponses utilisent le synonyme formel (<i>Why was the launch <b>postponed</b>?</i>). Si tu ne connais pas le couple, tu rates la question.<br>• <b>Partie 7</b> : questions de synonymes (<i>The phrase “carry out” in paragraph 2 is closest in meaning to…</i> → <b>conduct</b>).<br>Les couples à connaître par cœur : <i>put off = postpone, call off = cancel, hand in = submit, look into = investigate, carry out = conduct, set up = establish, turn down = decline, take on = hire, lay off = dismiss, fill out = complete</i>.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• Phrasal verb = verbe + particule, avec un sens souvent nouveau : apprends-le comme un mot à part entière, avec un exemple.<br>• <b>Séparable</b> : <i>turn off the light / turn the light off</i> ; avec un pronom, <b>toujours au milieu</b> : <i>turn <b>it</b> off</i>.<br>• <b>Inséparable</b> (comme ceux de trois mots) : <i>look into <b>it</b>, deal with <b>it</b>, run out of <b>it</b></i>.<br>• Le verbe s’écrit en deux mots (<i>back up</i>), le nom souvent en un seul (<i>a backup</i>).<br>• Au TOEIC, pense synonyme : <i>put off = postpone, call off = cancel, hand in = submit, look into = investigate</i>.' }
  ],
  exercises: [
    { type: 'mcq', q: 'The meeting was ___ because the manager was sick. <small>(= annulée)</small>', options: ['called off', 'called back', 'put through'], answer: 0, explain: '<b>call off</b> = annuler (<i>cancel</i>). <i>Call back</i> = rappeler au téléphone ; <i>put through</i> = transférer un appel (« je vous passe M. X »).' },
    { type: 'gap', q: 'Nobody picked ___ the phone, so I left a message.', answers: ['up'], explain: '<b>pick up the phone</b> = décrocher le téléphone.' },
    { type: 'mcq', q: 'The printer is still on. Could you ___?', options: ['turn off it', 'turn it off', 'turn it of', 'off turn it'], answer: 1, explain: '<i>turn off</i> est séparable : avec un <b>pronom</b> (<i>it</i>), celui-ci se place obligatoirement <b>au milieu</b> → <i>turn <b>it</b> off</i>. Attention à l’orthographe : la particule est <b>off</b> (deux f).' },
    { type: 'mcq', q: "There's an error on the invoice. I'll ___ right away.", options: ['look it into', 'look into it', 'look into'], answer: 1, explain: '<i>look into</i> (examiner) est <b>inséparable</b> : le pronom vient après la particule → <i>look into <b>it</b></i>. Sans <i>it</i>, la phrase est incomplète : on ne sait pas ce qu’on examine.' },
    { type: 'gap', q: 'Please fill ___ this form and return it to reception.', answers: ['out', 'in'], explain: '<b>fill out</b> ou <b>fill in</b> = remplir (un formulaire). Les deux sont corrects ; <i>fill out</i> est plus fréquent en anglais américain.' },
    { type: 'gap', q: "We've ___ paper. Could you order some more? <small>(run + particules : « ne plus avoir de »)</small>", answers: ['run out of'], explain: '<b>run out of</b> + nom = ne plus avoir de, être à court de. C’est un phrasal verb de trois mots : il ne se sépare jamais.' },
    { type: 'gap', q: "I don't know the answer yet, but I'll get ___ you tomorrow. <small>(recontacter, revenir vers)</small>", answers: ['back to'], explain: '<b>get back to someone</b> = recontacter quelqu’un, lui donner une réponse. N’oublie pas <b>to</b> devant la personne.' },
    { type: 'mcq', q: 'We have to put off the conference. → Ici, <i>put off</i> veut dire :', options: ['cancel', 'postpone', 'organize', 'attend'], answer: 1, explain: '<b>put off</b> = <b>postpone</b> (reporter). Annuler se dit <i>call off</i> = <i>cancel</i>.' },
    { type: 'gap', q: 'The plane took ___ at 7:45 a.m. and landed in Montreal two hours later.', answers: ['off'], explain: '<b>take off</b> = décoller (pour un avion). C’est le contraire de <i>land</i> (atterrir).' },
    { type: 'mcq', q: 'Everyone was stuck until Ms. Diallo ___ a brilliant idea to reduce costs.', options: ['came up with', 'ran out of', 'called off', 'looked after'], answer: 0, explain: '<b>come up with</b> + idée / solution = trouver, imaginer. Tout le monde était bloqué jusqu’à ce qu’elle <i>trouve</i> une idée.' },
    { type: 'order', answer: 'The manager called off the meeting.', alts: ['The manager called the meeting off.'], fr: 'Le responsable a annulé la réunion.', explain: '<i>call off</i> est séparable : avec un nom, on peut dire <i>called off the meeting</i> ou <i>called the meeting off</i>.' },
    { type: 'order', answer: 'Could you fill it out before Monday?', alts: ['Before Monday could you fill it out?'], fr: 'Tu pourrais le remplir avant lundi ?', explain: 'Avec le pronom <b>it</b>, le phrasal verb séparable s’ouvre : <i>fill <b>it</b> out</i> (jamais <i>fill out it</i>).' },
    { type: 'listen', accent: 'en-GB', say: "Hello, this is Ravi from Delmont Supplies, calling about your order. We've run out of the blue folders, so we'll have to put off the delivery until Thursday. Please call me back if that's a problem.", q: 'Pourquoi la livraison est-elle reportée ?', options: ['Le client a annulé sa commande.', 'Le fournisseur n’a plus de chemises bleues en stock.', 'Le camion de livraison est tombé en panne.'], answer: 1, explain: '<i>We’ve <b>run out of</b> the blue folders</i> = nous n’avons plus de chemises bleues ; <i>put off the delivery</i> = reporter la livraison. Ravi demande d’être <b>rappelé</b> (<i>call me back</i>) seulement en cas de problème.' },
    { type: 'mcq', q: 'Please make a ------- of all customer files before the system update. <small>(style TOEIC)</small>', options: ['back up', 'backup', 'backing up', 'backed'], answer: 1, explain: 'Après l’article <b>a</b>, il faut un <b>nom</b> : <b>a backup</b> (une sauvegarde), en un seul mot. <i>Back up</i> en deux mots est le verbe.' },
    { type: 'mcq', q: 'Due to low ticket sales, the organizers decided to ------- the concert until next season. <small>(style TOEIC)</small>', options: ['put off', 'call off', 'take off', 'set off'], answer: 0, explain: '<b>until next season</b> montre que le concert aura lieu plus tard : on le <b>reporte</b> → <b>put off</b> (= <i>postpone</i>). <i>Call off</i> (annuler) ne va pas avec <i>until</i>.' },
    { type: 'mcq', q: 'Mr. Kowalski will ------- from Ms. Lee as head of the Singapore office when she retires in June. <small>(style TOEIC)</small>', options: ['take over', 'take on', 'take off', 'take up'], answer: 0, explain: '<b>take over from someone</b> = prendre la relève de quelqu’un, lui succéder. <i>Take on</i> = embaucher ou accepter une tâche ; <i>take off</i> = décoller ; <i>take up</i> = commencer (une activité).' }
  ]
});
