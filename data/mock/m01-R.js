LE.register({
  id: 'm01-R',
  kind: 'mock-section',
  mock: 'm01',
  section: 'reading',
  title: 'TOEIC blanc n°1 : Reading',
  minutes: 38,
  parts: [
    /* ---------------- Partie 5 : 15 phrases à compléter ---------------- */
    { part: 5, items: [
      { q: 'The new accounting software is very ------- and has already saved our team many hours of work.',
        options: ['effect', 'effective', 'effectively', 'effectiveness'], answer: 1, skill: 'word-form',
        explain: 'Après <b>is very</b>, il faut un <b>adjectif</b> : <i>very effective</i> (très efficace). <i>effect</i> et <i>effectiveness</i> sont des noms, <i>effectively</i> est un adverbe.' },
      { q: 'Ms. Okafor ------- the quarterly sales report to the board of directors last Thursday.',
        options: ['presents', 'will present', 'has presented', 'presented'], answer: 3, skill: 'verb',
        explain: '<b>last Thursday</b> (jeudi dernier) = un moment passé et terminé → <b>prétérit</b> : <i>presented</i>. Le present perfect (<i>has presented</i>) est impossible avec une date passée précise.' },
      { q: 'The staff cafeteria on the second floor is open ------- 7:30 A.M. to 3:00 P.M. on weekdays.',
        options: ['between', 'during', 'from', 'since'], answer: 2, skill: 'preposition',
        explain: 'La structure est <b>from … to …</b> (de … à …). <i>between</i> se construit avec <b>and</b> (<i>between 7:30 and 3:00</i>), <i>during</i> (pendant) se place devant un nom de période, et <i>since</i> (depuis) indique un point de départ dans le passé.' },
      { q: 'Please ------- the attached document carefully before you sign it.',
        options: ['review', 'remark', 'notice', 'watch'], answer: 0, skill: 'vocabulary',
        explain: '<b>review</b> = relire, examiner attentivement (un document, un contrat). <i>remark</i> = faire une remarque, <i>notice</i> = remarquer (par hasard), <i>watch</i> = regarder (un film, une scène) : aucun ne convient pour un document qu’on lit avant de signer.' },
      { q: 'Employees who wish to attend the training session should submit ------- registration forms to Mr. Tanaka by Friday.',
        options: ['they', 'them', 'their', 'theirs'], answer: 2, skill: 'pronoun',
        explain: 'Devant un nom (<i>registration forms</i>), il faut un <b>adjectif possessif</b> : <b>their</b> (leurs). <i>they</i> est sujet, <i>them</i> est complément, et <i>theirs</i> (« les leurs ») s’emploie seul, jamais devant un nom.' },
      { q: 'All visitors must show a valid form of ------- at the reception desk before entering the building.',
        options: ['identify', 'identifiable', 'identified', 'identification'], answer: 3, skill: 'word-form',
        explain: 'Après la préposition <b>of</b>, il faut un <b>nom</b> : <i>a valid form of identification</i> = une pièce d’identité valide. Le suffixe <b>-tion</b> signale un nom ; <i>identify</i> est un verbe, <i>identifiable</i> un adjectif et <i>identified</i> un participe passé : aucun ne peut suivre <i>of</i> ici.' },
      { q: '------- the weather was poor, the outdoor product launch attracted more than 500 guests.',
        options: ['Despite', 'Although', 'However', 'Because'], answer: 1, skill: 'connector',
        explain: 'Il y a une <b>opposition</b> (mauvais temps ↔ beaucoup d’invités) et le trou est suivi d’une <b>proposition</b> (sujet + verbe : <i>the weather was</i>) → <b>Although</b> (bien que). <i>Despite</i> se construit avec un nom (<i>despite the poor weather</i>), <i>However</i> ne relie pas deux propositions dans une même phrase, et <i>Because</i> n’est pas logique.' },
      { q: 'All packages ------- to the address provided by the customer within three business days.',
        options: ['are delivered', 'deliver', 'are delivering', 'have delivered'], answer: 0, skill: 'verb',
        explain: 'Les colis ne livrent pas : ils <b>sont livrés</b>. Il faut donc la <b>voix passive</b> (be + participe passé) : <i>are delivered</i>. Les trois autres formes sont actives.' },
      { q: 'Due to high demand, the conference organizers have decided to ------- the registration deadline by one week.',
        options: ['increase', 'enlarge', 'extend', 'spread'], answer: 2, skill: 'vocabulary',
        explain: 'On dit <b>extend a deadline</b> = prolonger, repousser une date limite. <i>increase</i> (augmenter une quantité), <i>enlarge</i> (agrandir) et <i>spread</i> (étaler, répandre) ne s’emploient pas avec <i>deadline</i>.' },
      { q: 'According to a recent survey, customer ------- with our delivery service has improved significantly.',
        options: ['satisfy', 'satisfied', 'satisfying', 'satisfaction'], answer: 3, skill: 'word-form',
        explain: 'Le sujet du verbe <i>has improved</i> doit être un <b>nom</b> : <i>customer satisfaction</i> (la satisfaction des clients ; <i>customer</i> joue ici le rôle d’un adjectif). <i>satisfy</i> est un verbe, <i>satisfied</i> et <i>satisfying</i> sont des adjectifs.' },
      { q: 'Ms. Chen has been responsible ------- the company\'s European accounts since 2019.',
        options: ['of', 'for', 'to', 'with'], answer: 1, skill: 'preposition',
        explain: 'L’expression est <b>responsible for</b> (responsable de). Piège classique : le français dit « responsable <b>de</b> », mais l’anglais dit <b>for</b>, jamais <i>of</i>.' },
      { q: 'Mr. Haddad will call the client as soon as he ------- the revised contract from the legal department.',
        options: ['will receive', 'received', 'receives', 'would receive'], answer: 2, skill: 'verb',
        explain: 'Après <b>as soon as</b> (dès que), <b>when</b>, <b>before</b>, <b>after</b>…, on n’emploie pas <i>will</i>, même pour parler du futur : on utilise le <b>présent simple</b> → <i>as soon as he receives</i>. Piège pour les francophones, qui disent « dès qu’il <b>recevra</b> ».' },
      { q: 'The factory has become ------- more efficient since the new equipment was installed.',
        options: ['considerably', 'considerable', 'consideration', 'considerate'], answer: 0, skill: 'word-form',
        explain: 'Le mot modifie le comparatif <i>more efficient</i> : il faut un <b>adverbe</b> → <i>considerably more efficient</i> (nettement plus efficace). Piège : après <i>become</i>, on attend souvent un adjectif, mais ici l’adjectif est déjà là (<i>efficient</i>). <i>considerable</i> et <i>considerate</i> sont des adjectifs, <i>consideration</i> un nom.' },
      { q: 'Employees may work from home on Fridays ------- they have received approval from their manager.',
        options: ['even though', 'so that', 'in case', 'provided that'], answer: 3, skill: 'connector',
        explain: '<b>provided that</b> = à condition que. Sens : on peut télétravailler le vendredi <b>à condition d’avoir</b> l’accord de son responsable. <i>even though</i> (bien que), <i>so that</i> (pour que) et <i>in case</i> (au cas où) ne donnent pas un sens logique.' },
      { q: 'The Wexmoor Hotel offers ------- parking to all guests staying three nights or more.',
        options: ['appreciative', 'complimentary', 'considerate', 'deserving'], answer: 1, skill: 'vocabulary',
        explain: '<b>complimentary</b> = gratuit, offert (mot très fréquent au TOEIC : <i>complimentary breakfast</i>, <i>complimentary parking</i>). <i>appreciative</i> (reconnaissant), <i>considerate</i> (attentionné) et <i>deserving</i> (méritant) décrivent des personnes, pas un service.' }
    ] },

    /* ---------------- Partie 6 : 2 textes à compléter ---------------- */
    { part: 6, items: [
      { title: 'E-mail',
        text: 'To: All staff\nFrom: Farida Mensah, Facilities Manager\nDate: March 3\nSubject: Second-floor renovation\n\nDear colleagues,\n\nPlease note that renovation work on the second floor {1} on Monday, March 10. During this period, the meeting rooms on that floor will not be available. {2}\n\nEmployees whose desks are on the second floor will be temporarily {3} to the fourth floor. Our IT team will make sure that your computers and phones are set up before you arrive.\n\nWe expect the work to be completed by March 28. {4}, we apologize for any inconvenience and thank you for your patience.\n\nBest regards,\nFarida Mensah',
        questions: [
          { options: ['began', 'will begin', 'has begun', 'had begun'], answer: 1,
            explain: 'L’e-mail est daté du <b>3 mars</b> et les travaux commencent le <b>lundi 10 mars</b> : c’est un événement <b>futur</b> → <i>will begin</i>. Les trois autres formes renvoient au passé.' },
          { options: [
              'The renovation was completed two days ahead of schedule.',
              'Second-floor meeting rooms can still be reserved as usual.',
              'Rooms on the third floor may be reserved through the online booking system instead.',
              'The new meeting rooms have received very positive feedback from staff.'
            ], answer: 2,
            explain: 'La phrase précédente annonce que les salles de réunion du 2ᵉ étage seront indisponibles. La suite logique est une <b>solution de remplacement</b> : réserver une salle au 3ᵉ étage (<i>instead</i> = à la place). A et D parlent de travaux déjà terminés (impossible : ils commencent le 10 mars), et B contredit la phrase précédente.' },
          { options: ['remained', 'located', 'stayed', 'relocated'], answer: 3,
            explain: '<b>be relocated to</b> = être transféré, déménagé vers. Pendant les travaux, ces employés iront travailler <b>temporairement</b> au 4ᵉ étage. <i>remained</i> et <i>stayed</i> (rester) contredisent l’idée de déplacement, et <i>located</i> (situé) se construit avec <i>on</i> ou <i>in</i>, pas avec <i>to</i>.' },
          { options: ['In the meantime', 'Otherwise', 'As a result', 'For example'], answer: 0,
            explain: '<b>In the meantime</b> = en attendant, d’ici là : jusqu’à la fin des travaux (le 28 mars), la responsable s’excuse pour la gêne. <i>Otherwise</i> (sinon), <i>As a result</i> (par conséquent) et <i>For example</i> (par exemple) n’expriment pas le bon lien logique.' }
        ] },
      { title: 'Article',
        text: 'CLAYTON (May 14): Tallis Bakery, a family-owned business founded in 1998, is opening its third location next month on Harbor Street. The new shop will be {1} than the company\'s two existing stores, and it will include a café area with seating for up to 40 customers.\n\n"For years, our customers have asked for a place where they can sit down and enjoy our bread and pastries," said owner Rosa Tallis. "{2}"\n\nThe bakery also plans to hire about fifteen new employees, including bakers, cashiers, and servers. According to Ms. Tallis, {3} experience is not necessary, as all new staff members will receive full training.\n\nThe Harbor Street shop will open on June 7. To celebrate, the first 100 customers will receive a free loaf of bread. Job applications can be {4} through the bakery\'s Web site.',
        questions: [
          { options: ['large', 'largest', 'larger', 'largely'], answer: 2,
            explain: 'Le mot <b>than</b> (que) annonce un <b>comparatif</b> : <i>larger than</i> (plus grande que). <i>largest</i> est un superlatif, <i>largely</i> un adverbe (« en grande partie »).' },
          { options: [
              'That is why we have decided to close our café.',
              'However, the new shop will not have any seating.',
              'Unfortunately, we still have not found a suitable location.',
              'Now we will finally be able to offer them one.'
            ], answer: 3,
            explain: 'Mme Tallis vient de dire que les clients réclament <b>un endroit pour s’asseoir</b>. La phrase D y répond : <i>one</i> = <i>a place</i>, et la nouvelle boutique aura justement un espace café de 40 places. A et B contredisent l’article (il y aura un café avec des places assises), et C aussi (le local de Harbor Street est déjà trouvé).' },
          { options: ['early', 'prior', 'advance', 'front'], answer: 1,
            explain: '<b>prior experience</b> = une expérience préalable (acquise avant). Expression très fréquente dans les offres d’emploi. <i>early</i> (tôt), <i>advance</i> (à l’avance : <i>advance booking</i>) et <i>front</i> (l’avant) ne se combinent pas avec <i>experience</i> dans ce sens.' },
          { options: ['submitted', 'submit', 'submitting', 'submission'], answer: 0,
            explain: 'Après <b>can be</b>, il faut un <b>participe passé</b> pour former le passif : <i>can be submitted</i> (peuvent être envoyées). Les candidatures n’envoient rien : elles <b>sont envoyées</b>.' }
        ] }
    ] },

    /* ---------------- Partie 7 : compréhension écrite ---------------- */
    { part: 7, items: [
      /* 1 : Annonce (3 q) */
      { docs: [
          { kind: 'Advertisement', title: 'Elmbrook Commons: Flexible Workspace in Downtown Ridgefield',
            text: 'Need a professional place to work without signing a long-term lease? Elmbrook Commons offers modern, fully furnished offices and shared desks in the heart of downtown Ridgefield, just a two-minute walk from Central Station.\n\n<b>Membership options</b>\n• Day Pass ($25 per day): shared desk, high-speed Internet, and free coffee\n• Flex Plan ($180 per month): 10 days of access per month, plus 2 hours of meeting-room use\n• Private Office ($650 per month): your own lockable office, available 24 hours a day\n\nAll members may use our printers and scanners and receive business mail at our address.\n\n<b>Special offer:</b> Sign up for any monthly plan before April 30 and get your first week free!\n\nVisit us at 48 Maple Avenue or call 555-0142 to book a free tour.' }
        ],
        questions: [
          { q: 'What is being advertised?',
            options: ['A workspace rental service', 'A furniture store', 'A mail delivery company', 'A café near a train station'], answer: 0,
            explain: 'L’annonce propose des bureaux et des postes de travail à louer (<i>offices and shared desks</i>) avec des formules d’abonnement : c’est un espace de coworking. Les meubles, le café, le courrier et la gare ne sont que des détails de l’offre.' },
          { q: 'What is included in the Flex Plan?',
            options: ['A private office', 'Access every day of the month', 'Some use of a meeting room', 'Access 24 hours a day'], answer: 2,
            explain: 'Flex Plan : <i>10 days of access per month, plus <b>2 hours of meeting-room use</b></i>. Le bureau privé et l’accès 24 h/24 correspondent à la formule <i>Private Office</i>, et l’accès du Flex Plan est limité à 10 jours par mois.' },
          { q: 'What must new customers do to receive the special offer?',
            options: ['Book a free tour first', 'Buy at least three day passes', 'Pay for a full year in advance', 'Choose a monthly membership before a certain date'], answer: 3,
            explain: '<i>Sign up for <b>any monthly plan before April 30</b></i> : il faut choisir une formule <b>mensuelle</b> (Flex Plan ou Private Office) avant le 30 avril. Le <i>Day Pass</i> est à la journée : il ne donne pas droit à l’offre. La visite est proposée, pas obligatoire.' }
        ] },

      /* 2 : Facture (3 q) */
      { docs: [
          { kind: 'Invoice',
            text: '<b>TIDEWELL OFFICE SUPPLIES</b>\n1250 Industrial Parkway, Denton\nPhone: 555-0187\n\n<b>INVOICE No. 40782</b>\nInvoice date: October 6\nBill to: Kessler-Obi Architects, 17 River Road, Denton\nAccount number: KO-5521\n\nItem | Quantity | Unit price | Amount\nPrinter paper (box of 10 reams) | 4 | $42.00 | $168.00\nBlack ink cartridges | 6 | $31.50 | $189.00\nDesk organizers | 3 | $18.00 | $54.00\nErgonomic chairs (model E-200) | 2 | $249.00 | $498.00\n\nSubtotal: $909.00\nDelivery: FREE (orders over $500)\n<b>Total due: $909.00</b>\n\nPayment is due within 30 days of the invoice date. A late fee of 2% will be added to any balance that remains unpaid after that date.\n\nNote: The ergonomic chairs are temporarily out of stock and will be shipped separately on October 20. All other items were delivered on October 6.\n\nQuestions about this invoice? Call our billing department at 555-0187.' }
        ],
        questions: [
          { q: 'Why was Kessler-Obi Architects not charged for delivery?',
            options: ['The items were picked up at the store.', 'The order was larger than a certain amount.', 'The company has a special customer account.', 'Some items were delivered late.'], answer: 1,
            explain: 'La facture indique <i>Delivery: FREE (<b>orders over $500</b>)</i> : la commande (909 $) dépasse 500 $. Le client a bien un numéro de compte, mais rien n’indique qu’il donne droit à la livraison gratuite, et les articles ont été livrés, pas retirés en magasin.' },
          { q: 'Which items have not been delivered yet?',
            options: ['Printer paper', 'Ink cartridges', 'Desk organizers', 'Chairs'], answer: 3,
            explain: '<i>The ergonomic <b>chairs</b> are temporarily out of stock and will be shipped separately on October 20.</i> Tous les autres articles ont été livrés le 6 octobre (<i>All other items were delivered on October 6</i>).' },
          { q: 'What will happen if the customer pays after November 5?',
            options: ['An additional charge will be applied.', 'The order will be canceled.', 'The chairs will not be shipped.', 'The account will be closed.'], answer: 0,
            explain: 'Le paiement est dû <b>sous 30 jours</b> à partir du 6 octobre, donc au plus tard le 5 novembre. Ensuite, <i>a <b>late fee of 2%</b> will be added</i> : des frais de retard (<i>an additional charge</i>) s’ajoutent.' }
        ] },

      /* 3 : Discussion en ligne (3 q, dont 1 question d'intention) */
      { docs: [
          { kind: 'Online chat',
            text: 'Daniela Ruiz (9:02 A.M.): Hi, team. The presentation for Nakamura Foods has been moved up to Thursday morning instead of Friday afternoon. Can we still be ready?\nKwame Asante (9:04 A.M.): That\'s tight. The third-quarter sales figures won\'t be final until Wednesday afternoon.\nDaniela Ruiz (9:05 A.M.): Could we use the figures from the preliminary report and update them later?\nKwame Asante (9:06 A.M.): I\'d rather not. Those numbers are exactly what the client will want to discuss.\nLinh Pham (9:08 A.M.): I could ask the finance department to send us the final figures a day early. I know their director well. We worked together on last year\'s budget review.\nKwame Asante (9:09 A.M.): If I get them by Tuesday evening, I can finish the charts on Wednesday morning.\nLinh Pham (9:10 A.M.): Leave it to me.\nDaniela Ruiz (9:11 A.M.): Great. I\'ll reserve the large conference room so we can rehearse on Wednesday at 4 P.M.' }
        ],
        questions: [
          { q: 'Why did Ms. Ruiz start the online chat discussion?',
            options: ['To announce that a client has been lost', 'To ask for help with a budget review', 'To report a change in a schedule', 'To invite her colleagues to lunch'], answer: 2,
            explain: 'Elle écrit : <i>The presentation … <b>has been moved up to Thursday morning instead of Friday afternoon</b></i>. <i>move up</i> = avancer : la présentation a lieu plus tôt que prévu. C’est un changement de calendrier.' },
          { q: 'What is Mr. Asante concerned about?',
            options: ['Some information may not be ready in time.', 'A conference room is not available.', 'The client does not like charts.', 'The finance director is on vacation.'], answer: 0,
            explain: '<i>That’s tight. The third-quarter sales figures <b>won’t be final until Wednesday afternoon</b>.</i> Il craint que les chiffres définitifs arrivent trop tard pour préparer la présentation de jeudi matin.' },
          { q: 'At 9:10 A.M., what does Ms. Pham most likely mean when she writes, "Leave it to me"?',
            options: ['She will reserve the conference room.', 'She will contact the finance department.', 'She wants to give the presentation herself.', 'She will prepare the charts on Wednesday.'], answer: 1,
            explain: 'Juste avant, elle propose de demander les chiffres définitifs au service financier, et M. Asante précise qu’il en a besoin mardi soir. <i>Leave it to me</i> = « Je m’en occupe » : elle va contacter le service financier. C’est Mme Ruiz qui réserve la salle, et M. Asante qui fait les graphiques.' }
        ] },

      /* 4 : E-mail (4 q, dont 1 question de vocabulaire) */
      { docs: [
          { kind: 'E-mail',
            text: 'To: Tomás Ferreira\nFrom: Helen Adeyemi\nDate: August 25\nSubject: Your first day at Corvell Engineering\nAttachment: direct_deposit_form.pdf\n\nDear Mr. Ferreira,\n\nOn behalf of everyone at Corvell Engineering, I am pleased to welcome you to our team. As discussed during your final interview, your first day as a project coordinator will be Monday, September 8.\n\nPlease arrive at our main office at 8:30 A.M. and ask for me at the front desk. The morning will be devoted to orientation: you will receive your employee badge, fill out some paperwork, and attend a short safety presentation. In the afternoon, you will meet your supervisor, Gavin Lowe, and the other members of the infrastructure team.\n\nBefore your first day, please send me a copy of your university diploma and the attached direct-deposit form so that your salary can be paid on time.\n\nFinally, please note that parking at our main office is limited. Employees who drive to work must apply for a parking permit, which usually takes about two weeks to process. If you plan to drive, I recommend applying as soon as possible. Otherwise, the Riverside bus stop is located directly across the street.\n\nWe look forward to working with you.\n\nSincerely,\nHelen Adeyemi\nHuman Resources Manager, Corvell Engineering' }
        ],
        questions: [
          { q: 'What is the purpose of the e-mail?',
            options: ['To invite Mr. Ferreira to a job interview', 'To announce a change in parking rules', 'To introduce a new safety policy', 'To give practical information to a new employee'], answer: 3,
            explain: 'Mme Adeyemi lui souhaite la bienvenue (<i>I am pleased to welcome you to our team</i>) et explique le déroulement de son <b>premier jour</b> : il vient d’être embauché. L’entretien a déjà eu lieu (<i>your final interview</i>), et le parking n’est qu’un conseil pratique parmi d’autres.' },
          { q: 'What will Mr. Ferreira do on the morning of September 8?',
            options: ['Meet the infrastructure team', 'Apply for a parking permit', 'Receive an identification card', 'Give a safety presentation'], answer: 2,
            explain: 'Le matin : <i>you will receive your <b>employee badge</b></i> (un badge = une carte d’identification). Il rencontrera l’équipe <b>l’après-midi</b>, la demande de permis de stationnement est à faire <b>dès que possible</b> (<i>as soon as possible</i>), pas ce matin-là, et il <b>assistera</b> à la présentation sur la sécurité (<i>attend</i>) : il ne la fera pas.' },
          { q: 'The word "devoted" in paragraph 2 is closest in meaning to',
            options: ['loyal', 'dedicated', 'attached', 'promised'], answer: 1,
            explain: '<i>The morning will be <b>devoted to</b> orientation</i> = la matinée sera <b>consacrée</b> à l’accueil → <b>dedicated</b>. Piège : <i>devoted</i> peut aussi signifier « dévoué, fidèle » (<i>a devoted employee</i>, proche de <i>loyal</i>), mais pas quand on parle d’une période de temps.' },
          { q: 'What is indicated about Corvell Engineering\'s main office?',
            options: ['It is located near public transportation.', 'It has a large parking garage.', 'It was recently renovated.', 'It is closed on Mondays.'], answer: 0,
            explain: '<i>The Riverside <b>bus stop is located directly across the street</b></i> : il y a un arrêt de bus juste en face. Le parking est au contraire limité (<i>parking … is limited</i>), et le premier jour de travail est un lundi, donc le bureau est ouvert ce jour-là.' }
        ] },

      /* 5 : Article (4 q, dont 1 insertion de phrase) */
      { docs: [
          { kind: 'Article', title: 'Clothing Maker to Move Headquarters to Eastgate',
            text: 'PORT ALDEN (February 12): Marrowfield Outfitters, a maker of outdoor clothing, announced on Monday that it will move its headquarters from the city center to a renovated warehouse in the Eastgate district. [1]\n\nThe company, which was founded twelve years ago by designers Oliver Marrow and Nadia Fielding, has grown rapidly and now employs 240 people. "We have simply run out of space," said Ms. Fielding. "Our design and marketing teams are currently spread across three different buildings, which makes working together difficult." [2]\n\nThe new headquarters will bring all departments together under one roof. It will also include a small workshop where the company will make samples of its new products, a task currently handled by a partner company overseas. [3] According to Mr. Marrow, this will allow designers to test their ideas much more quickly.\n\nThe move is expected to be completed in September. Local officials welcomed the news, pointing out that the project will create about 60 new jobs in the area. [4] Recruitment for these positions will begin in the spring.' }
        ],
        questions: [
          { q: 'What is the article mainly about?',
            options: ['The opening of a new clothing store', 'A company\'s plan to change locations', 'A partnership between two manufacturers', 'The retirement of a company founder'], answer: 1,
            explain: 'Dès la 1ʳᵉ phrase : <i>it will <b>move its headquarters</b> from the city center to a renovated warehouse</i> → l’entreprise déménage son siège. Tout l’article développe ce projet. Il ne s’agit pas d’un magasin (<i>store</i>), mais de bureaux et d’un atelier.' },
          { q: 'According to Ms. Fielding, why is the change necessary?',
            options: ['The rent in the city center has increased.', 'The warehouse needs to be repaired.', 'Employees are working in separate buildings.', 'The partner company has closed.'], answer: 2,
            explain: '<i>Our design and marketing teams are currently <b>spread across three different buildings</b>, which makes working together difficult.</i> Le loyer n’est jamais mentionné, et l’entrepôt est déjà rénové (<i>a renovated warehouse</i>).' },
          { q: 'What is indicated about product samples?',
            options: ['They are currently made in another country.', 'They will be sold at a discount.', 'They are designed by an outside firm.', 'They were shown at a trade fair.'], answer: 0,
            explain: 'Aujourd’hui, les échantillons sont fabriqués par <i>a partner company <b>overseas</b></i> (à l’étranger, outre-mer) = <i>in another country</i>. Attention au piège C : le partenaire se charge seulement de les <b>fabriquer</b> (<i>make samples</i>) ; rien n’indique qu’une autre entreprise les <b>conçoit</b>, et l’article parle des designers de Marrowfield qui testent leurs idées.' },
          { q: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?<br>"Most of them will be in production and shipping."',
            options: ['[1]', '[2]', '[3]', '[4]'], answer: 3,
            explain: '<i>them</i> doit renvoyer à un nom pluriel qui précède : <i>about <b>60 new jobs</b></i>. « La plupart <b>de ces emplois</b> seront dans la production et l’expédition », puis <i>Recruitment for these positions…</i> (le recrutement pour ces postes) enchaîne naturellement. Aux autres positions, <i>them</i> renverrait au siège, aux bâtiments, aux équipes de design et de marketing ou aux échantillons : seuls des <b>emplois</b> peuvent être « dans la production et l’expédition ».' }
        ] },

      /* 6 : Double document (5 q, dont 2 questions de croisement) */
      { docs: [
          { kind: 'Schedule', title: 'Halloway Community College: Fall Professional Development Workshops',
            text: 'Workshop | Date | Time | Fee\nEffective Business Writing | Tuesday, October 7 | 6:00-8:30 P.M. | $85\nIntroduction to Spreadsheets | Thursday, October 9 | 6:00-9:00 P.M. | $95\nPublic Speaking for Professionals | Saturday, October 11 | 9:00 A.M.-12:00 P.M. | $110\nNegotiation Skills | Saturday, October 18 | 1:00-4:00 P.M. | $110\n\nAll workshops are held in the Weller Building, Room 204, except Introduction to Spreadsheets, which takes place in Computer Lab B.\n\nRegister online or by phone at 555-0163. Participants who register for two or more workshops receive a 15% discount on the total fee.\n\nCancellations made at least 48 hours before the start of a workshop are fully refunded.' },
          { kind: 'E-mail',
            text: 'To: Registration Office, Halloway Community College\nFrom: Mariam Qureshi\nDate: October 2\nSubject: My registration\n\nHello,\n\nYesterday I registered online for the workshop on October 11 and paid the full fee. Since then, my manager has agreed that the company will pay for a second course, so I would like to add the negotiation workshop. Could you please apply the multiple-workshop discount to both courses?\n\nAlso, my confirmation e-mail says that my first workshop will take place in Computer Lab B. Could you please confirm the location? I want to make sure I go to the right place.\n\nThank you,\nMariam Qureshi' }
        ],
        questions: [
          { q: 'What is indicated about the workshops?',
            options: ['They all take place on weekends.', 'They are free for college students.', 'Some of them are held in the evening.', 'They are all taught by the same instructor.'], answer: 2,
            explain: 'Les ateliers du 7 et du 9 octobre ont lieu de <b>6:00 à 8:30 P.M.</b> et de <b>6:00 à 9:00 P.M.</b> (de 18 h à 20 h 30 et de 18 h à 21 h) : en soirée. Ces deux ateliers ont lieu en semaine (mardi, jeudi), et rien n’est dit sur la gratuité ni sur les formateurs.' },
          { q: 'According to the schedule, how can participants get a full refund?',
            options: ['By canceling at least two days before a workshop', 'By attending only half of a workshop', 'By registering online instead of by phone', 'By registering for two workshops'], answer: 0,
            explain: '<i>Cancellations made <b>at least 48 hours before</b> the start of a workshop are fully refunded.</i> 48 heures = deux jours. S’inscrire à deux ateliers donne une <b>réduction</b> de 15 %, pas un remboursement.' },
          { q: 'What is one purpose of Ms. Qureshi\'s e-mail?',
            options: ['To cancel her registration', 'To request a reduced price', 'To suggest a new workshop topic', 'To complain about an instructor'], answer: 1,
            explain: '<i>Could you please <b>apply the multiple-workshop discount</b> to both courses?</i> Elle demande la réduction pour inscriptions multiples, donc un prix réduit. Elle ajoute un atelier : elle n’annule rien.' },
          { q: 'Which workshop did Ms. Qureshi register for first?',
            options: ['Negotiation Skills', 'Introduction to Spreadsheets', 'Effective Business Writing', 'Public Speaking for Professionals'], answer: 3,
            explain: '<b>Croisement des deux documents</b> : dans l’e-mail, elle s’est inscrite à <i>the workshop on <b>October 11</b></i> ; dans le programme, l’atelier du 11 octobre est <b>Public Speaking for Professionals</b>. <i>Negotiation Skills</i> est l’atelier qu’elle veut <b>ajouter</b>.' },
          { q: 'Where will Ms. Qureshi\'s first workshop most likely be held?',
            options: ['In Computer Lab B', 'At her company\'s office', 'In Room 204 of the Weller Building', 'In a room that has not been chosen yet'], answer: 2,
            explain: '<b>Croisement</b> : son premier atelier est <i>Public Speaking for Professionals</i> (11 octobre). Le programme précise que tous les ateliers ont lieu dans la <b>salle 204 du Weller Building</b>, <b>sauf</b> <i>Introduction to Spreadsheets</i> (en Computer Lab B). Son e-mail de confirmation contient donc une erreur.' }
        ] },

      /* 7 : Triple document (5 q, dont 2 questions de croisement) */
      { docs: [
          { kind: 'Web page', title: 'Saffron Table Catering: Business Lunch and Reception Packages',
            text: 'Fresh, homemade food for your business events\n\nPackages (price per person):\n• <b>Classic Lunch</b> ($14): assorted sandwiches, green salad, fresh fruit, soft drinks\n• <b>Hot Lunch</b> ($22): roast chicken or vegetable lasagna, green salad, dessert, soft drinks\n• <b>Evening Reception</b> ($30): hot and cold appetizers, dessert table, soft drinks, coffee\n\nPlease note:\n• Minimum order: 20 people.\n• Orders must be placed at least five business days before the event.\n• Delivery is free within 10 miles of our kitchen in Lakewood. A $40 fee applies to longer distances.\n• Plates, napkins, and utensils are included with every order at no extra charge.' },
          { kind: 'E-mail',
            text: 'To: Saffron Table Catering\nFrom: Grace Okonkwo\nDate: June 9\nSubject: Lunch order for June 25\n\nHello,\n\nOur company is holding an all-day training session for 35 employees on Wednesday, June 25, at our office in Brookfield, about 15 miles from Lakewood. We would like you to provide lunch at 12:30 P.M.\n\nOur staff would prefer a hot meal rather than sandwiches. Also, about ten of our employees do not eat meat, so please make sure there is a vegetarian option.\n\nCould you send me a price estimate by Wednesday, June 11? I would like to confirm the order before the end of the week.\n\nBest regards,\nGrace Okonkwo\nOffice Manager, Delmont Insurance' },
          { kind: 'Review', title: 'Customer Reviews: Saffron Table Catering',
            text: '★★★★☆ Posted by Grace O. on June 27\n\nWe hired Saffron Table to cater a staff training day this week, and I would definitely use them again. The food was delicious, and several colleagues asked me for the caterer\'s name. The vegetable lasagna was especially popular.\n\nThe only problem was that the delivery van arrived twenty minutes later than scheduled, which made me a little nervous. However, the team set everything up very quickly, and lunch started almost on time. When I mentioned the delay, the owner, Arjun Bhatt, kindly removed the delivery fee from our bill.' }
        ],
        questions: [
          { q: 'According to the Web page, what is included with every order?',
            options: ['Coffee', 'Dessert', 'Tableware', 'Free delivery'], answer: 2,
            explain: '<i><b>Plates, napkins, and utensils</b> are included with every order</i> : les assiettes et les couverts (plus les serviettes) sont regroupés sous le mot <b>tableware</b> (la vaisselle et les couverts). Le café et le dessert dépendent de la formule, et la livraison n’est gratuite que dans un rayon de 10 miles.' },
          { q: 'Why did Ms. Okonkwo send the e-mail?',
            options: ['To complain about a late delivery', 'To change the date of an event', 'To invite employees to a training session', 'To request a price estimate'], answer: 3,
            explain: '<i>Could you <b>send me a price estimate</b> by Wednesday, June 11?</i> Elle demande un devis. Le retard de livraison n’apparaît que plus tard, dans l’avis du 27 juin.' },
          { q: 'Which package did Ms. Okonkwo most likely order?',
            options: ['Classic Lunch', 'Hot Lunch', 'Evening Reception', 'A custom menu'], answer: 1,
            explain: '<b>Croisement</b> : dans l’e-mail, elle veut un <b>déjeuner</b> (<i>lunch at 12:30 P.M.</i>) avec un <b>plat chaud</b> (<i>a hot meal rather than sandwiches</i>) et une option <b>végétarienne</b>. Sur le site, seule la formule <b>Hot Lunch</b> propose un plat chaud avec des lasagnes aux légumes. L’avis le confirme : <i>The vegetable lasagna was especially popular.</i>' },
          { q: 'How much money did Mr. Bhatt most likely take off Ms. Okonkwo\'s bill?',
            options: ['$14', '$22', '$30', '$40'], answer: 3,
            explain: '<b>Croisement des trois documents</b> : Brookfield est <b>à environ 15 miles</b> de Lakewood (e-mail) ; au-delà de 10 miles, la livraison coûte <b>40 $</b> (site). Dans l’avis, M. Bhatt a retiré les frais de livraison (<i>removed the delivery fee from our bill</i>) → 40 $.' },
          { q: 'What problem does Ms. Okonkwo mention in her review?',
            options: ['The food arrived later than planned.', 'Some dishes were served cold.', 'There were not enough plates.', 'The vegetarian dish was not available.'], answer: 0,
            explain: '<i>The delivery van <b>arrived twenty minutes later than scheduled</b>.</i> Pour le reste, elle est très satisfaite : la nourriture était délicieuse et les lasagnes végétariennes ont eu beaucoup de succès.' }
        ] }
    ] }
  ]
});
