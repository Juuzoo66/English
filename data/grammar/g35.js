LE.register({
  id: 'g35',
  kind: 'grammar',
  title: 'La voix passive',
  subtitle: 'Dire ce qui est fait plutôt que qui le fait : la tournure préférée des annonces, des rapports et des e-mails pro',
  level: 'B1',
  minutes: 45,
  goals: [
    'Former le passif à tous les temps : <b>be</b> (au bon temps) + <b>participe passé</b>',
    'Savoir quand utiliser le passif et quand ajouter <b>by</b> + l’auteur de l’action',
    'Traduire le « on » français et les tournures comme <i>I was given…</i>, <i>I was told…</i> ou <i>I was born…</i>',
    'Choisir entre actif et passif dans les Parties 1 et 5 du TOEIC'
  ],
  blocks: [
    { type: 'h', text: 'Actif ou passif : qui fait l’action ?' },
    { type: 'p', html: 'Dans une phrase <b>active</b>, le sujet <b>fait</b> l’action : <i>The manager <b>signed</b> the contract.</i> (Le directeur a signé le contrat.) Dans une phrase <b>passive</b>, le sujet <b>subit</b> l’action : <i>The contract <b>was signed</b>.</i> (Le contrat a été signé.) Le complément de la phrase active (<i>the contract</i>) devient le sujet de la phrase passive.<br>Bonne nouvelle : le français fonctionne de la même façon (« Le contrat <b>a été signé</b> »). La différence, c’est que l’anglais utilise le passif <b>beaucoup plus souvent</b>, en particulier là où le français dit « on » : <i>English <b>is spoken</b> here.</i> = Ici, on parle anglais.' },
    { type: 'examples', items: [
      { en: 'The manager signed the contract.', fr: 'Le directeur a signé le contrat.', note: 'Actif : le sujet (<i>the manager</i>) fait l’action.' },
      { en: 'The contract was signed yesterday.', fr: 'Le contrat a été signé hier.', note: 'Passif : le sujet (<i>the contract</i>) subit l’action.' },
      { en: 'Our products are sold in twenty countries.', fr: 'Nos produits sont vendus dans vingt pays.' },
      { en: 'The meeting has been postponed.', fr: 'La réunion a été reportée.' }
    ] },

    { type: 'h', text: 'La formation : be + participe passé' },
    { type: 'p', html: 'La recette ne change jamais : <b>be</b> conjugué au temps voulu + le <b>participe passé</b> du verbe (la forme en <i>-ed</i> des verbes réguliers, ou la 3ᵉ colonne des verbes irréguliers : <i>made, written, sent</i>…). <b>C’est be qui porte le temps</b> ; le participe passé, lui, reste toujours identique. Pour la négation et les questions, rien de nouveau : <b>not</b> se place après le <b>premier</b> auxiliaire (<i>hasn’t been paid</i>), et c’est ce premier auxiliaire qui passe <b>devant le sujet</b> dans une question (<i>Has the meeting been canceled?</i>).' },
    { type: 'table', head: ['Temps', 'Passif (verbe make)', 'Exemple', 'Traduction'], rows: [
      ['Présent simple', 'it <b>is made</b>', 'The offices <b>are cleaned</b> every evening.', 'Les bureaux sont nettoyés tous les soirs.'],
      ['Présent continu', 'it <b>is being made</b>', 'The offices <b>are being cleaned</b> right now.', 'On est en train de nettoyer les bureaux.'],
      ['Prétérit', 'it <b>was made</b>', 'The contract <b>was signed</b> yesterday.', 'Le contrat a été signé hier.'],
      ['Past continuous', 'it <b>was being made</b>', 'The system <b>was being updated</b> when the power went out.', 'Le système était en cours de mise à jour quand il y a eu une coupure de courant.'],
      ['Present perfect', 'it <b>has been made</b>', 'Your order <b>has been shipped</b>.', 'Ta commande a été expédiée.'],
      ['Past perfect', 'it <b>had been made</b>', 'All the tickets <b>had been sold</b> before we arrived.', 'Tous les billets avaient été vendus avant notre arrivée.'],
      ['Futur (will)', 'it <b>will be made</b>', 'The results <b>will be announced</b> on Monday.', 'Les résultats seront annoncés lundi.'],
      ['Futur (be going to)', 'it <b>is going to be made</b>', 'A new sales manager <b>is going to be hired</b>.', 'Un nouveau directeur commercial va être recruté.'],
      ['Modaux', 'it <b>must / can / should be made</b>', 'This form <b>must be signed</b> by your manager.', 'Ce formulaire doit être signé par ton responsable.']
    ], caption: 'Au passif, le groupe verbal se termine <b>toujours</b> par un participe passé. Toute la conjugaison se fait sur <b>be</b>.' },
    { type: 'box', style: 'tip', title: 'Being ou been ?', html: 'Deux petits mots à ne pas confondre : <b>being</b> (forme en <i>-ing</i>, après <i>am / is / are / was / were</i>) indique une action <b>en cours</b> ; <b>been</b> (participe passé, après <i>have / has / had</i>) indique une action <b>terminée</b>. <i>The room <b>is being</b> cleaned</i> (on la nettoie en ce moment) ≠ <i>The room <b>has been</b> cleaned</i> (c’est fait).' },
    { type: 'examples', items: [
      { en: 'The new software is being tested this week.', fr: 'Le nouveau logiciel est en cours de test cette semaine.' },
      { en: 'The package had already been delivered when I got home.', fr: 'Le colis avait déjà été livré quand je suis rentrée.' },
      { en: 'The invoices must be paid within thirty days.', fr: 'Les factures doivent être réglées sous trente jours.' },
      { en: "The invoice hasn't been paid yet.", fr: 'La facture n’a pas encore été payée.' },
      { en: "The room isn't being used at the moment.", fr: 'La salle n’est pas utilisée en ce moment.' },
      { en: 'Has the meeting been canceled?', fr: 'La réunion a-t-elle été annulée ?', note: 'Orthographe américaine : <i>canceled</i> (un seul <i>l</i>) ; britannique : <i>cancelled</i>.' },
      { en: 'When will the results be published?', fr: 'Quand les résultats seront-ils publiés ?' }
    ] },

    { type: 'h', text: 'By + agent : dire qui a fait l’action' },
    { type: 'p', html: 'Pour préciser qui a fait l’action (l’<b>agent</b>), on ajoute <b>by</b> (par) + la personne ou la chose. Mais attention : dans la grande majorité des phrases passives, <b>on ne mentionne pas l’agent</b>. On ne l’ajoute que s’il apporte une information utile. Évite <i>by someone</i>, <i>by people</i> ou <i>by them</i> : ça n’apporte rien.' },
    { type: 'examples', items: [
      { en: 'The report was written by Ms. Novak.', fr: 'Le rapport a été rédigé par Mme Novak.' },
      { en: 'All applications are reviewed by the HR team.', fr: 'Toutes les candidatures sont examinées par l’équipe RH.' },
      { en: 'The new office building was designed by a young architect.', fr: 'Le nouvel immeuble de bureaux a été conçu par un jeune architecte.' },
      { en: 'My bag was stolen at the airport.', fr: 'On m’a volé mon sac à l’aéroport.', note: 'Pas de <i>by</i> : on ne sait pas qui l’a volé.' }
    ] },

    { type: 'h', text: 'Quand utiliser le passif ?' },
    { type: 'list', items: [
      '<b>L’agent est inconnu</b> : <i>My car was stolen last night.</i> (On ne sait pas qui l’a volée.)',
      '<b>L’agent est évident</b> ou sans importance : <i>The mail is delivered at ten.</i> (Par le facteur, évidemment.)',
      '<b>On veut mettre l’accent sur l’action ou le résultat</b>, pas sur la personne : <i>Your order has been shipped.</i> (Ce qui compte pour le client, c’est que sa commande soit partie.)',
      '<b>Le ton est formel et impersonnel</b> (annonces, règlements, rapports, e-mails officiels) : <i>Smoking is not permitted in the building.</i> (Il est interdit de fumer dans le bâtiment.)'
    ] },
    { type: 'examples', items: [
      { en: 'Applications must be submitted by May 1.', fr: 'Les candidatures doivent être déposées au plus tard le 1ᵉʳ mai.', note: 'Ici, <i>by</i> + date = « au plus tard le » : ce n’est pas l’agent !' },
      { en: 'The conference will be held in Chicago.', fr: 'La conférence se tiendra à Chicago.', note: '<i>be held</i> (de <i>hold</i>) = avoir lieu, se tenir : très fréquent au TOEIC.' },
      { en: 'Your order has been shipped.', fr: 'Ta commande a été expédiée.' },
      { en: 'Refreshments will be served in the lobby.', fr: 'Des rafraîchissements seront servis dans le hall.' },
      { en: 'Passengers are requested to remain seated.', fr: 'Les passagers sont priés de rester assis.' }
    ] },
    { type: 'box', style: 'info', title: 'Le passif, partout au TOEIC', html: 'Tu l’entendras dans les annonces de la <b>Partie 4</b> (<i>Flight 208 has been delayed.</i>) et tu le liras dans les e-mails, notes de service et avis des <b>Parties 6 et 7</b> (<i>The parking lot will be repaved next week.</i>). Repère ces expressions toutes faites : <i>be held</i> (avoir lieu), <i>be located</i> (être situé), <i>be required</i> (être obligatoire), <i>be expected to</i> (être censé, devoir normalement), <i>be scheduled for</i> (être prévu pour).' },

    { type: 'h', text: 'Le passif avec deux compléments : I was given…' },
    { type: 'p', html: 'Certains verbes ont deux compléments, une chose et une personne : <i>give, send, offer, show, pay, promise, lend, tell, teach</i>. On peut alors construire deux phrases passives. L’anglais préfère souvent mettre <b>la personne en sujet</b>, une construction impossible en français !' },
    { type: 'table', head: ['Actif', 'Passif : personne sujet (le plus fréquent)', 'Passif : chose sujet'], rows: [
      ['They gave the employees a bonus.', '<b>The employees were given</b> a bonus.', 'A bonus <b>was given</b> to the employees.'],
      ['They offered me a job.', '<b>I was offered</b> a job.', 'A job <b>was offered</b> to me.'],
      ['They sent us the wrong invoice.', '<b>We were sent</b> the wrong invoice.', 'The wrong invoice <b>was sent</b> to us.']
    ] },
    { type: 'examples', items: [
      { en: 'Employees were given a bonus.', fr: 'Les employés ont reçu une prime. / On a donné une prime aux employés.' },
      { en: 'I was offered a job in Toronto.', fr: 'On m’a proposé un poste à Toronto.' },
      { en: 'We were sent the wrong invoice.', fr: 'On nous a envoyé la mauvaise facture.' },
      { en: 'Were you told about the change?', fr: 'On t’a prévenue du changement ?' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : « On m’a dit… » = I was told…', html: 'En français, impossible de dire « J’ai été dite » ou « J’ai été donnée un badge ». En anglais, ces tournures sont très courantes : <i><b>I was told</b> that…</i> (on m’a dit que…), <i><b>I was asked</b> to…</i> (on m’a demandé de…), <i><b>I was given</b>…</i> (on m’a donné…), <i><b>I was sent</b>…</i> (on m’a envoyé…).<br>Mais jamais avec <b>say</b>, qui ne prend jamais la personne comme complément direct (on dit <i>say something <b>to</b> someone</i>) : <span class="ko">I was said that…</span> → <span class="ok">I was told that…</span>' },

    { type: 'h', text: 'Deux cas particuliers : be born et get + participe passé' },
    { type: 'p', html: '« Je suis né·e » se dit toujours au <b>prétérit passif</b> : <i>I <b>was</b> born</i>. Naître, c’est un événement qui t’est arrivé une fois, dans le passé : <span class="ko">I am born in 1996.</span> → <span class="ok">I <b>was</b> born in 1996.</span><br>Par ailleurs, à l’oral, on remplace souvent <b>be</b> par <b>get</b> pour parler d’un changement ou d’un événement, parfois inattendu : c’est un passif <b>familier</b>, à éviter dans un e-mail formel.' },
    { type: 'examples', items: [
      { en: 'I was born in Marseille in 1996.', fr: 'Je suis née à Marseille en 1996.' },
      { en: 'Where were you born?', fr: 'Où es-tu née ?' },
      { en: 'He got promoted last year.', fr: 'Il a été promu l’année dernière.', note: 'Familier. Plus formel : <i>He was promoted last year.</i>' },
      { en: 'Our flight got canceled because of the storm.', fr: 'Notre vol a été annulé à cause de la tempête.' },
      { en: 'When do we get paid?', fr: 'Quand est-ce qu’on est payés ?' }
    ] },

    { type: 'h', text: 'Traduire le « on » et le « se » français' },
    { type: 'p', html: 'Quand « on » désigne des gens qu’on ne précise pas, l’anglais utilise très souvent le passif. Même chose pour certaines tournures en « se » (« ça se fait en ligne »). Attention : quand « on » veut dire « nous », on traduit simplement par <i>we</i> (<i>On part à 8 h</i> → <i>We’re leaving at 8.</i>).' },
    { type: 'table', head: ['Français', 'Anglais (passif)'], rows: [
      ['<b>On</b> m’a donné un badge.', 'I <b>was given</b> a badge.'],
      ['<b>On</b> a annulé la réunion.', 'The meeting <b>has been canceled</b>.'],
      ['Ici, <b>on</b> parle anglais.', 'English <b>is spoken</b> here.'],
      ['<b>On</b> vous contactera demain.', 'You <b>will be contacted</b> tomorrow.'],
      ['<b>On</b> m’a demandé d’attendre.', 'I <b>was asked</b> to wait.'],
      ['Les candidatures <b>se font</b> en ligne.', 'Applications <b>are submitted</b> online.']
    ] },
    { type: 'box', style: 'warn', title: 'Quatre erreurs classiques', html: '1. <b>Oublier be</b> : <span class="ko">The report written yesterday.</span> → <span class="ok">The report <b>was</b> written yesterday.</span><br>2. <b>Mettre le prétérit au lieu du participe passé</b> : <span class="ko">The e-mail was wrote.</span> → <span class="ok">The e-mail was <b>written</b>.</span><br>3. <b>Mettre au passif un verbe sans complément</b> (<i>happen, occur, arrive, take place, go, come, die</i>) : <span class="ko">The accident was happened.</span> → <span class="ok">The accident happened.</span><br>Le français dit « il <b>est</b> arrivé », « elle <b>est</b> partie », mais ce n’est pas du passif : c’est un passé composé ! → <i>He arrived. She left.</i><br>4. <b>Oublier la préposition</b> d’un verbe qui en a une (<i>look into</i> = examiner, <i>deal with</i> = traiter, <i>call off</i> = annuler) : elle reste collée au verbe, même en fin de phrase → <i>The problem <b>is being looked into</b>.</i> (On étudie le problème.) <i>The meeting <b>was called off</b>.</i> (La réunion a été annulée.)' },

    { type: 'h', text: 'Au TOEIC, Partie 1 : is being ou has been ?' },
    { type: 'table', head: ['Phrase entendue', 'Sens', 'Sur la photo…'], rows: [
      ['The floor <b>is being mopped</b>.', 'Action <b>en cours</b>', 'Quelqu’un est <b>en train</b> de passer la serpillière.'],
      ['Some boxes <b>are being loaded</b> onto a truck.', 'Action <b>en cours</b>', 'Des personnes chargent des cartons dans un camion.'],
      ['Chairs <b>have been stacked</b> against the wall.', '<b>Résultat</b> d’une action terminée', 'Des chaises empilées contre le mur, souvent sans personne autour.'],
      ['The tables <b>have been set</b> for dinner.', '<b>Résultat</b>', 'Les tables sont dressées (couverts, verres…).'],
      ['The shelves <b>are stocked</b> with products.', '<b>État</b>', 'Les étagères sont remplies de produits.']
    ], caption: 'Ces formes se ressemblent beaucoup à l’oral, mais ne décrivent pas du tout la même photo. <b>being</b> = quelqu’un est en train de le faire ; <b>been</b> = c’est déjà fait.' },
    { type: 'box', style: 'warn', title: 'Piège Partie 1 : pas de personne, pas de « being »', html: 'Si la photo ne montre <b>personne</b>, une phrase avec <b>is / are being</b> + participe passé est presque toujours fausse : <i>The car is being repaired</i> suppose qu’un mécanicien est en train de travailler dessus. Sur une photo sans personne, cherche plutôt <b>has / have been</b> + participe passé (résultat) ou <b>is / are</b> + participe passé (état). Seule exception fréquente : <i>be displayed</i> (être exposé) : <i>Some items are being displayed in a window</i> peut décrire une vitrine vide de monde.' },

    { type: 'h', text: 'Au TOEIC, Partie 5 : actif ou passif ? La méthode en 4 questions' },
    { type: 'list', ordered: true, items: [
      'Le sujet <b>fait-il</b> l’action ou la <b>subit-il</b> ? Un rapport ne peut pas « examiner » : il <b>est examiné</b>.',
      'Y a-t-il un <b>complément</b> juste après le trou ? Si oui → plutôt actif (<i>Ms. Lee reviewed <b>the report</b>.</i>). Si non → plutôt passif. Seule exception : les verbes à deux compléments vus plus haut (<i>Employees <b>were given</b> a bonus.</i>).',
      'Y a-t-il <b>by</b> + une personne après le trou ? C’est un indice fort de passif.',
      'Enfin, choisis le <b>temps</b> grâce aux indices : <i>yesterday</i> → prétérit, <i>since / already</i> → present perfect, <i>next week</i> → futur.'
    ] },
    { type: 'examples', items: [
      { en: 'The report was reviewed by the manager yesterday.', fr: 'Le rapport a été examiné par la responsable hier.', note: 'Question type : <i>The report ------- by the manager yesterday.</i> → <b>was reviewed</b>. Pas <i>reviewed</i> (le rapport ne fait pas l’action), pas <i>has been reviewed</i> (<i>yesterday</i> impose le prétérit).' },
      { en: 'Ms. Lee reviewed the report yesterday.', fr: 'Mme Lee a examiné le rapport hier.', note: 'Ici, il y a un complément (<i>the report</i>) : actif.' },
      { en: 'The new branch is expected to open in June.', fr: 'La nouvelle agence devrait ouvrir en juin.' },
      { en: 'Several positions have been filled since January.', fr: 'Plusieurs postes ont été pourvus depuis janvier.' }
    ] },
    { type: 'dialog', title: 'Au service client', lines: [
      { speaker: 'W', en: "Hello, I'm calling about order 4471. Has it been shipped yet?", fr: 'Bonjour, j’appelle au sujet de la commande 4471. A-t-elle déjà été expédiée ?' },
      { speaker: 'M', en: 'Let me check. Yes, it was shipped yesterday afternoon.', fr: 'Je vérifie. Oui, elle a été expédiée hier après-midi.' },
      { speaker: 'W', en: 'Great. When will it be delivered?', fr: 'Parfait. Quand sera-t-elle livrée ?' },
      { speaker: 'M', en: "It should be delivered on Thursday. You'll be sent a tracking number by e-mail.", fr: 'Elle devrait être livrée jeudi. On vous enverra un numéro de suivi par e-mail.' },
      { speaker: 'W', en: 'And is the invoice included in the package?', fr: 'Et la facture est-elle incluse dans le colis ?' },
      { speaker: 'M', en: 'Yes, it is. A copy has also been sent to your e-mail address.', fr: 'Oui. Une copie a aussi été envoyée à votre adresse e-mail.' }
    ] },

    { type: 'box', style: 'key', title: 'À retenir', html: '• Passif = <b>be</b> (au bon temps) + <b>participe passé</b> : <i>is made, is being made, was made, has been made, will be made, must be made</i>…<br>• <b>being</b> = action en cours (<i>is being cleaned</i>) ; <b>been</b> = après <i>have / has / had</i> (<i>has been cleaned</i>).<br>• <b>by</b> + agent seulement si c’est utile.<br>• « On m’a dit / donné / proposé » → <i>I was told / given / offered</i>.<br>• <i>I <b>was</b> born</i>, jamais <i>I am born</i>. À l’oral, <i>get</i> remplace parfois <i>be</i> : <i>He got promoted.</i><br>• Pas de passif pour <i>happen, occur, arrive, take place</i>.<br>• TOEIC : sujet qui subit l’action + pas de complément après le trou → <b>passif</b>.' }
  ],
  exercises: [
    { type: 'mcq', q: 'Laquelle de ces phrases est à la <b>voix passive</b> ?', options: ['The manager signed the contract.', 'The contract was signed yesterday.', 'The manager is signing the contract.', 'The manager has signed the contract.'], answer: 1, explain: 'Au passif, le sujet subit l’action et le verbe est formé de <b>be + participe passé</b> : <i>was signed</i>. Dans les trois autres phrases, c’est le directeur qui fait l’action (voix active).' },
    { type: 'mcq', q: 'Cars ___ in this factory.', options: ['make', 'are made', 'are making', 'is made'], answer: 1, explain: 'Les voitures ne fabriquent rien : elles <b>sont fabriquées</b> → passif <b>are made</b>. <i>Is made</i> est faux, car <i>cars</i> est au pluriel.' },
    { type: 'gap', q: 'Today, English ___ (speak) in offices all over the world.', answers: ['is spoken'], explain: 'Présent simple passif : <b>is</b> + participe passé de <i>speak</i> (<i>speak, spoke, <b>spoken</b></i>). « L’anglais est parlé » = « on parle anglais ».' },
    { type: 'gap', q: 'These photos ___ (take) at the conference last week.', answers: ['were taken'], explain: '<i>Last week</i> → prétérit. Sujet pluriel (<i>these photos</i>) → <b>were</b> + participe passé <b>taken</b> (<i>take, took, taken</i>).' },
    { type: 'mcq', q: 'Ms. Okafor ___ in Lagos in 1988.', options: ['is born', 'was born', 'born', 'has been born'], answer: 1, explain: 'Pour une naissance, on utilise toujours le prétérit passif : <b>was born</b>. « Elle est née » ne se traduit jamais par <i>is born</i>.' },
    { type: 'gap', q: 'Sorry, the candidates ___ (not / contact) yet.', answers: ["haven't been contacted", 'have not been contacted', "weren't contacted", 'were not contacted'], explain: '<i>Yet</i> → present perfect. Passif au present perfect : <b>have been</b> + participe passé. Négation : <i>haven’t been contacted</i> (= <i>have not been contacted</i>). En anglais américain familier, on entend aussi <i>weren’t contacted yet</i>, mais à l’écrit et au TOEIC, le present perfect est la norme.' },
    { type: 'gap', q: 'Badges ___ (must / wear) at all times in the laboratory.', answers: ['must be worn'], explain: 'Modal + <b>be</b> + participe passé : <b>must be worn</b> (<i>wear, wore, <b>worn</b></i>). Les badges ne portent rien : ils <b>sont portés</b>.' },
    { type: 'mcq', q: 'Comment dit-on « On m’a proposé un poste à Toronto » ?', options: ['I offered a job in Toronto.', 'I was offered a job in Toronto.', 'Me was offered a job in Toronto.', 'I was offer a job in Toronto.'], answer: 1, explain: 'Avec les verbes à deux compléments (<i>offer, give, send…</i>), l’anglais met volontiers la personne en sujet : <b>I was offered</b> = on m’a proposé. Il faut bien le participe passé <i>offered</i>, et le pronom sujet <i>I</i>.' },
    { type: 'gap', q: 'The results ___ (announce, futur avec will) tomorrow at 10 a.m.', answers: ['will be announced'], explain: 'Futur passif : <b>will be</b> + participe passé → <i>will be announced</i>. Les résultats n’annoncent rien : ils <b>sont annoncés</b>.' },
    { type: 'order', answer: 'The conference will be held in Chicago.', fr: 'La conférence se tiendra à Chicago.', explain: 'Futur passif : <i>will be</i> + participe passé <i>held</i> (de <i>hold</i>). <i>Be held</i> = avoir lieu : une expression très fréquente au TOEIC.' },
    { type: 'order', answer: 'The new printers have not been installed yet.', alts: ['The new printers have not yet been installed.'], fr: 'Les nouvelles imprimantes n’ont pas encore été installées.', explain: 'Present perfect passif à la forme négative : <i>have not been</i> + participe passé. <i>Yet</i> se place en fin de phrase (ou, plus formel, juste après <i>not</i>).' },
    { type: 'mcq', q: 'Photo : un agent d’entretien est en train de passer l’aspirateur dans un couloir. Quelle phrase décrit la photo ?', options: ['The hallway has been vacuumed.', 'The hallway is being vacuumed.', 'The hallway is vacuuming.', 'The hallway was vacuumed yesterday.'], answer: 1, explain: 'L’action est <b>en cours</b> : <b>is being</b> + participe passé. <i>Has been vacuumed</i> décrirait le résultat (c’est déjà fait) ; <i>is vacuuming</i> voudrait dire que le couloir passe lui-même l’aspirateur ! Et une photo ne peut pas montrer <i>yesterday</i>.' },
    { type: 'listen', say: 'Attention, please. Flight 208 to Denver has been delayed. Passengers will be informed of the new departure time shortly.', accent: 'en-GB', q: 'Que dit l’annonce ?', options: ['Le vol 208 pour Denver a été annulé.', 'Le vol 208 est retardé ; la nouvelle heure de départ sera bientôt communiquée.', 'Les passagers du vol 208 doivent embarquer immédiatement.'], answer: 1, explain: '<i>Has been delayed</i> = a été retardé (annulé se dirait <i>canceled</i>). <i>Passengers will be informed of the new departure time shortly</i> = les passagers seront informés de la nouvelle heure de départ sous peu.' },
    { type: 'mcq', q: 'The quarterly report ------- by the finance manager yesterday. <small>(style TOEIC)</small>', options: ['reviewed', 'was reviewed', 'is reviewing', 'has been reviewed'], answer: 1, explain: 'Le rapport ne fait pas l’action, et <i>by the finance manager</i> indique l’agent → passif. <i>Yesterday</i> impose le prétérit : <b>was reviewed</b>. <i>Has been reviewed</i> est impossible avec <i>yesterday</i>.' },
    { type: 'mcq', q: "Mr. Tanaka ------- the new safety procedures at yesterday's meeting. <small>(style TOEIC)</small>", options: ['explained', 'was explained', 'is explained', 'has been explained'], answer: 0, explain: 'Piège : ici, c’est <b>M. Tanaka qui fait l’action</b>, et le trou est suivi d’un complément (<i>the new safety procedures</i>) → voix <b>active</b> au prétérit : <b>explained</b>.' },
    { type: 'mcq', q: 'All expense reports must ------- to the accounting department by Friday. <small>(style TOEIC)</small>', options: ['submit', 'be submitted', 'submitting', 'have submitted'], answer: 1, explain: 'Les notes de frais ne soumettent rien : elles <b>sont soumises</b>. Après un modal : <b>be</b> + participe passé → <i>must be submitted</i>. Ici, <i>by Friday</i> veut dire « au plus tard vendredi ».' }
  ]
});
