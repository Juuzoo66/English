LE.register({
  id: 'm02-L',
  kind: 'mock-section',
  mock: 'm02',
  section: 'listening',
  title: 'TOEIC blanc n°2 — Listening',
  parts: [
    /* ---------------- Partie 1 — Photographies (3 items) ---------------- */
    { part: 1, items: [
      {
        accent: 'en-US', speaker: 'W',
        scene: 'Dans une boutique vide, un homme en tablier est agenouillé sur le seuil de la porte d’entrée, qui est grande ouverte. Il tend un mètre ruban d’un côté à l’autre de l’encadrement de la porte. Une boîte à outils ouverte est posée par terre, à côté de lui.',
        statements: ["He's closing a toolbox.", "He's painting a door frame.", "He's measuring the width of a doorway.", "He's leaning against a counter."],
        answer: 2,
        explain: '(C) est vraie : il mesure la largeur (<i>width</i>) de l’encadrement de la porte (<i>doorway</i>) avec un mètre ruban. (A) La boîte à outils est ouverte et il n’y touche pas : il ne la ferme pas (<i>closing</i>). (B) Bon objet (<i>door frame</i> = l’encadrement de la porte), mais mauvais verbe : il ne peint pas. (D) Il est agenouillé (<i>kneeling</i>), pas appuyé (<i>leaning</i>) contre un comptoir.'
      },
      {
        accent: 'en-AU', speaker: 'M',
        scene: 'La terrasse d’un café, tôt le matin, avant l’ouverture. Il n’y a personne. Les chaises ont été empilées les unes sur les autres contre le mur du café, et les parasols sont fermés. Une ardoise indiquant le menu est posée sur un chevalet, par terre, à côté de la porte d’entrée.',
        statements: ['Some umbrellas are being opened.', 'Customers are seated on a patio.', 'A menu board has been hung above the door.', 'Some chairs have been stacked against a wall.'],
        answer: 3,
        explain: '(D) est vraie : des chaises <b>ont été empilées</b> (<i>have been stacked</i>) contre un mur. (A) <i>are being opened</i> = sont en train d’être ouverts : impossible, il n’y a personne et les parasols sont fermés. (B) Aucun client (<i>customer</i>) sur la terrasse (<i>patio</i>). (C) Piège subtil : l’ardoise est <b>posée par terre</b> sur un chevalet, elle n’a pas été <b>accrochée au-dessus</b> de la porte (<i>hung above the door</i>).'
      },
      {
        accent: 'en-GB', speaker: 'W',
        scene: 'Dans le hall presque désert d’un aéroport, une femme pousse un chariot à bagages chargé de deux valises en direction de portes vitrées. À côté d’elle, un homme, les mains dans les poches, lève les yeux vers un écran d’affichage des départs fixé au plafond.',
        statements: ['The man is lifting a suitcase onto a cart.', 'The woman is pushing a luggage cart.', 'They are waiting in line at a counter.', 'A screen is being mounted on the ceiling.'],
        answer: 1,
        explain: '(B) est vraie : la femme pousse un chariot à bagages (<i>luggage cart</i>). (A) L’homme a les mains dans les poches : il ne soulève (<i>lift</i>) aucune valise. (C) Il n’y a ni file d’attente ni comptoir sur la photo. (D) L’écran est <b>déjà fixé</b> au plafond ; <i>is being mounted</i> voudrait dire que quelqu’un est en train de l’installer.'
      }
    ] },

    /* ---------------- Partie 2 — Questions-réponses (12 items) ---------------- */
    { part: 2, items: [
      {
        accent: 'en-US', speakers: ['W', 'M'],
        question: 'How long will the elevator be out of service?',
        responses: ['The service was excellent.', 'Until the end of the day, I was told.', 'About ten people at a time.'],
        answer: 1,
        explain: '<b>How long</b> → une durée : « <i>Until the end of the day, I was told</i> » (jusqu’à la fin de la journée, m’a-t-on dit). (A) Répète <i>service</i> dans un autre sens (le service d’un restaurant, par exemple), alors que <i>out of service</i> = hors service. (C) Donne une capacité (combien de personnes), pas une durée.'
      },
      {
        accent: 'en-GB', speakers: ['M', 'W'],
        question: 'Which supplier did you choose for the new staff uniforms?',
        responses: ['Yes, they fit perfectly.', 'By the end of the week.', 'The one that offered free alterations.'],
        answer: 2,
        explain: '<b>Which</b> → un choix parmi plusieurs : « <i>The one that offered free alterations</i> » (celui qui proposait les retouches gratuites). <i>The one</i> remplace <i>the supplier</i> (le fournisseur). (A) On ne répond pas <i>Yes</i> à une question en <i>Which</i>. (B) Répond à <i>When</i>.'
      },
      {
        accent: 'en-US', speakers: ['W', 'M'],
        question: "Who's going to pick up the clients from the airport this evening?",
        responses: ['Their flight has been postponed until tomorrow morning.', 'I picked the aisle seat.', 'At Terminal 2, I think.'],
        answer: 0,
        explain: 'Réponse <b>indirecte</b> : « <i>Their flight has been postponed until tomorrow morning</i> » (leur vol a été reporté à demain matin) → personne n’a besoin d’aller les chercher ce soir. (B) Piège de son : <i>picked</i> / <i>pick up</i>. (C) Répond à <i>Where</i>, pas à <i>Who</i>.'
      },
      {
        accent: 'en-AU', speakers: ['M', 'W'],
        question: 'Should we print the brochures now, or wait for the final prices?',
        responses: ["The printer's on the second floor.", 'The sales team is confirming them this afternoon.', "Yes, they're very colorful."],
        answer: 1,
        explain: 'Question à choix (<b>or</b>) avec une réponse <b>indirecte</b> : « <i>The sales team is confirming them this afternoon</i> » (l’équipe commerciale les confirme cet après-midi ; <i>them</i> = les prix) → mieux vaut attendre, les prix définitifs arrivent dans quelques heures. (A) Joue sur <i>print</i> / <i>printer</i>. (C) On ne répond pas <i>Yes</i> à une question à choix.'
      },
      {
        accent: 'en-GB', speakers: ['W', 'M'],
        question: "You're coming to the product demonstration tomorrow, aren't you?",
        responses: ["I'm meeting a client at the same time, unfortunately.", 'Yes, it was very impressive.', 'The demo version is free.'],
        answer: 0,
        explain: 'Question « tag » (<i>…, aren’t you?</i> = n’est-ce pas ?) sur un événement de <b>demain</b>. Réponse indirecte : « <i>I’m meeting a client at the same time, unfortunately</i> » (j’ai rendez-vous avec un client à la même heure, malheureusement) → donc non, il ne viendra pas. (B) Piège de temps : <i>was</i> parle du passé, alors que la démonstration a lieu demain. (C) Joue sur <i>demo</i>, abréviation de <i>demonstration</i>.'
      },
      {
        accent: 'en-US', speakers: ['M', 'W'],
        question: "Didn't Mr. Castellano approve the travel budget last week?",
        responses: ['A trip to our Lisbon branch.', 'He really approves of the new design.', "He's still waiting for the cost estimates."],
        answer: 2,
        explain: 'Question négative (<i>Didn’t he…?</i> = Il n’a pas approuvé… ?). Réponse indirecte : « <i>He’s still waiting for the cost estimates</i> » (il attend encore les estimations de coûts) → donc non, pas encore. (A) Associe <i>travel</i> et <i>trip</i> sans répondre. (B) Piège : <i>approve of</i> = apprécier, être favorable à ; et il s’agit d’un design, pas du budget.'
      },
      {
        accent: 'en-CA', speakers: ['W', 'M'],
        question: 'Would you mind looking over my sales proposal before I send it?',
        responses: ['I sent it by courier.', 'Yes, the sale ends on Friday.', 'Not at all. Just e-mail it to me.'],
        answer: 2,
        explain: '<i>Would you mind…?</i> = Est-ce que ça te dérangerait de… ? Pour accepter, on dit <b>Not at all</b> (pas du tout, donc « oui, avec plaisir ») : « <i>Not at all. Just e-mail it to me.</i> » (Pas du tout, envoie-la-moi par e-mail). (A) Répète <i>send</i> au passé (<i>sent</i>), alors que la proposition n’est pas encore envoyée. (B) Piège de son : <i>sale</i> / <i>sales</i> ; de plus, <i>Yes</i> voudrait dire « oui, ça me dérange ».'
      },
      {
        accent: 'en-US', speakers: ['M', 'W'],
        question: 'The number of visitors to our website dropped sharply last month.',
        responses: ["Maybe it's because of the new homepage design.", 'She dropped them off at the front desk.', 'About five pages long.'],
        answer: 0,
        explain: 'Face à une <b>affirmation</b> (le nombre de visiteurs du site a fortement baissé le mois dernier), la bonne réponse propose une explication : « <i>Maybe it’s because of the new homepage design</i> » (c’est peut-être à cause de la nouvelle page d’accueil). (B) Répète <i>dropped</i>, mais <i>drop off</i> = déposer. (C) Associe <i>website</i> et <i>pages</i> sans répondre.'
      },
      {
        accent: 'en-AU', speakers: ['W', 'M'],
        question: 'Why is the parking lot so empty this morning?',
        responses: ['About two hundred spaces.', 'Most of the staff are at an off-site workshop today.', "I'll park near the entrance."],
        answer: 1,
        explain: '<b>Why</b> → une raison, même sans <i>because</i> : « <i>Most of the staff are at an off-site workshop today</i> » (la plupart du personnel est à un atelier à l’extérieur aujourd’hui ; <i>off-site</i> = hors des locaux de l’entreprise). (A) Donne un nombre de places (réponse à <i>How many</i>). (C) Répète le mot <i>park</i> sans expliquer pourquoi le parking est vide.'
      },
      {
        accent: 'en-GB', speakers: ['M', 'M2'],
        question: "Where should we hold this year's awards dinner?",
        responses: ["Didn't Ms. Rahman already book a venue?", 'At the end of December.', 'She won an award last year.'],
        answer: 0,
        explain: 'Une question peut répondre à une question : « <i>Didn’t Ms. Rahman already book a venue?</i> » (Mme Rahman n’a pas déjà réservé une salle ?) → le lieu est sans doute déjà choisi. (B) Répond à <i>When</i>. (C) Répète <i>award</i> sans indiquer de lieu.'
      },
      {
        accent: 'en-US', speakers: ['W', 'W2'],
        question: 'Is the new accounting software easy to use?',
        responses: ['Yes, I counted them twice.', 'It takes a while to get used to.', 'Several new accountants.'],
        answer: 1,
        explain: 'Réponse <b>indirecte</b> : « <i>It takes a while to get used to</i> » (il faut un certain temps pour s’y habituer ; <i>get used to</i> = s’habituer à) → pas si facile au début. (A) Piège de son : <i>counted</i> / <i>accounting</i>. (C) Répète <i>new</i> et joue sur <i>accountants</i> (comptables).'
      },
      {
        accent: 'en-US', speakers: ['M', 'W'],
        question: 'What did you think of the keynote speech this morning?',
        responses: ['In the main hall.', 'I think it starts at nine.', 'It was a bit long, to be honest.'],
        answer: 2,
        explain: '<i>What did you think of…?</i> = Qu’as-tu pensé de… ? On attend un avis : « <i>It was a bit long, to be honest</i> » (il était un peu long, pour être honnête). <i>Keynote speech</i> = le discours d’ouverture d’une conférence. (A) Répond à <i>Where</i>. (B) Répète <i>think</i> et donne un horaire, alors que le discours a déjà eu lieu.'
      }
    ] },

    /* ---------------- Partie 3 — Conversations (6 × 3 questions) ---------------- */
    { part: 3, items: [
      {
        accent: 'en-US',
        lines: [
          { speaker: 'M', text: 'Hi, I have a reservation under the name Tobias Keller. I booked a compact car for three days.' },
          { speaker: 'W', text: "Welcome, Mr. Keller. I'm sorry, but all of our compact cars are out at the moment. A large group of conference guests took the last ones this morning." },
          { speaker: 'M', text: 'Oh. I have a meeting downtown at eleven. Could I wait for one to be returned?' },
          { speaker: 'W', text: 'The next one is due back at four.' },
          { speaker: 'M', text: 'I see. What else do you have?' },
          { speaker: 'W', text: "I can give you a mid-size sedan for the same price as the compact. It's a little bigger, but it's very easy to drive." },
          { speaker: 'M', text: 'Perfect. Is there anything I should know about returning it?' },
          { speaker: 'W', text: "Just bring it back with a full tank. Otherwise, there's a refueling charge. There's a gas station right at the airport exit." }
        ],
        questions: [
          { q: 'Where most likely are the speakers?', options: ['At a conference center', 'At a car repair shop', 'At a car rental agency', 'At a gas station'], answer: 2,
            explain: 'L’homme a réservé une petite voiture pour trois jours (<i>I booked a compact car for three days</i>) et l’employée lui explique comment <b>rendre</b> le véhicule : ils sont dans une <b>agence de location de voitures</b> (<i>car rental agency</i>), à l’aéroport. (A) et (D) reprennent des mots entendus (<i>conference guests</i>, <i>gas station</i>) qui ne désignent pas le lieu de la conversation.' },
          { q: 'What does the woman mean when she says, "The next one is due back at four"?', options: ['The man would have to wait too long.', 'The man must return his car by four.', 'The rental office closes at four.', 'A group of guests will arrive at four.'], answer: 0,
            explain: 'L’homme a une réunion à 11 h et demande s’il peut attendre qu’une petite voiture soit rendue. La femme répond que la prochaine ne reviendra qu’à 16 h (<i>due back</i> = attendu en retour) : elle lui fait comprendre qu’il devrait <b>attendre beaucoup trop longtemps</b>. La suite le confirme : il demande aussitôt <i>What else do you have?</i> (Qu’avez-vous d’autre ?). (B) Piège : 16 h concerne la voiture d’un autre client, pas la sienne.' },
          { q: 'What does the woman offer the man?', options: ['A free tank of fuel', 'A larger vehicle for the same price', 'A discount on a future rental', 'A ride to his meeting'], answer: 1,
            explain: '« <i>I can give you a mid-size sedan for the same price as the compact. It’s a little bigger…</i> » : une berline de taille moyenne, un peu plus grande, <b>au même prix</b>. (A) Piège : le plein n’est pas offert ; au contraire, il doit rendre la voiture avec le réservoir plein, sinon il paiera des frais (<i>a refueling charge</i>).' }
        ]
      },
      {
        accent: 'en-GB',
        lines: [
          { speaker: 'W', text: 'Arjun, Felipe, thanks for coming. As you know, our department is moving up to the eighth floor. Building management has just confirmed the date: Friday the fourteenth.' },
          { speaker: 'M', text: "That's sooner than I expected. Will the new offices be ready by then? When I went up there last week, the painters were still working." },
          { speaker: 'W', text: "They finished on Monday. The only thing left is the new carpet, and that's being laid this week." },
          { speaker: 'M2', text: 'What about our computers? Someone from IT will have to disconnect everything and set it all up again upstairs.' },
          { speaker: 'W', text: "I've already spoken to them. They'll do it on Friday evening, after everyone has gone home, so nobody's work will be interrupted." },
          { speaker: 'M', text: 'And what should we do with our files and personal things?' },
          { speaker: 'W', text: 'Moving boxes will be delivered on Wednesday. Please pack up your desks by Thursday afternoon and write your name and new office number on each box.' },
          { speaker: 'M2', text: "Most people don't know their new office numbers yet. I'll put the new floor plan on the shared drive this afternoon so everyone can check." }
        ],
        questions: [
          { q: 'What are the speakers mainly discussing?', options: ['Hiring a painting company', 'Upgrading some computer equipment', 'Reorganizing a filing system', 'Moving their department to another floor'], answer: 3,
            explain: 'Dès le début, la femme annonce : « <i>our department is moving up to the eighth floor</i> » (notre service déménage au 8ᵉ étage). Toute la conversation porte sur l’organisation de ce <b>déménagement</b>. (A) Les peintres sont mentionnés, mais leur travail est déjà terminé. (B) Les ordinateurs seront déplacés, pas remplacés.' },
          { q: 'Why will the IT staff work on Friday evening?', options: ["To avoid disrupting employees' work", 'Because the new offices are still being painted', 'Because building management asked them to', 'Because they are busy for the rest of the week'], answer: 0,
            explain: 'La femme précise : « <i>They’ll do it on Friday evening, after everyone has gone home, so nobody’s work will be interrupted</i> » (ils le feront vendredi soir, quand tout le monde sera parti, pour que personne ne soit interrompu dans son travail). (B) Faux : les peintres ont fini lundi. (C) Piège : la direction de l’immeuble (<i>building management</i>) a seulement confirmé la date du déménagement ; elle n’a rien demandé au service informatique. (D) Rien n’est dit sur l’emploi du temps du service informatique.' },
          { q: 'What does one of the men offer to do?', options: ['Deliver some moving boxes', 'Contact the IT department', 'Share a floor plan with coworkers', 'Choose a new carpet'], answer: 2,
            explain: 'Le deuxième homme dit : « <i>I’ll put the new floor plan on the shared drive this afternoon so everyone can check</i> » (je mettrai le nouveau plan de l’étage sur le dossier partagé cet après-midi pour que chacun puisse vérifier) → <b>partager un plan</b> avec ses collègues. (B) Piège : c’est la femme qui a <b>déjà</b> contacté le service informatique (<i>I’ve already spoken to them</i>).' }
        ]
      },
      {
        accent: 'en-US',
        lines: [
          { speaker: 'W', text: "Carlos, have you seen the forecast for Friday? It's supposed to rain all day." },
          { speaker: 'M', text: "Oh no. That's the day of the company picnic, and we've already sent out the invitations." },
          { speaker: 'W', text: "I know, but we can't have a picnic by the lake in the pouring rain. We'll have to move it to another day this week." },
          { speaker: 'M', text: 'Well, I called the caterer this morning, and they can still do Wednesday or Thursday.' },
          { speaker: 'W', text: "Wednesday won't work. Half of the sales team will be at the trade show in Denver until Wednesday night." },
          { speaker: 'M', text: "Then that leaves us only one option. I'll call the caterer back to confirm." },
          { speaker: 'W', text: "Great. And I'll send everyone an e-mail about the new date. I'll remind them that the shuttle bus will still leave from the main entrance at noon." }
        ],
        graphic: {
          title: 'Four-Day Forecast — Lakeside Park',
          head: ['Day', 'Forecast', 'High'],
          rows: [
            ['Wednesday', 'Sunny', '79°F'],
            ['Thursday', 'Partly cloudy', '74°F'],
            ['Friday', 'Heavy rain', '63°F'],
            ['Saturday', 'Windy', '70°F']
          ]
        },
        questions: [
          { q: 'What problem does the woman mention?', options: ['Rain is expected on the day of an event.', 'A caterer has canceled an order.', 'Some invitations were sent to the wrong people.', 'A park will be closed for repairs.'], answer: 0,
            explain: '« <i>have you seen the forecast for Friday? It’s supposed to rain all day</i> » (la météo annonce de la pluie toute la journée vendredi) : or, c’est le jour du pique-nique de l’entreprise. (B) Faux : le traiteur est au contraire encore disponible mercredi ou jeudi. (C) Les invitations ont bien été envoyées, mais aucune erreur de destinataire n’est mentionnée.' },
          { q: 'Look at the graphic. What will the weather most likely be on the day of the picnic?', options: ['Sunny', 'Partly cloudy', 'Heavy rain', 'Windy'], answer: 1,
            explain: 'Raisonnement en deux étapes. 1) Le traiteur peut venir mercredi ou jeudi ; mercredi est exclu, car la moitié de l’équipe commerciale sera à un salon jusqu’à mercredi soir → il ne reste que <b>jeudi</b> (<i>that leaves us only one option</i>). 2) Dans le tableau, jeudi = <b>Partly cloudy</b> (partiellement nuageux). (A) Piège : <i>Sunny</i> correspond à mercredi, le jour exclu. (C) C’est la météo de vendredi, le jour qu’on abandonne.' },
          { q: 'What will the woman most likely do next?', options: ['Call the caterer', 'Book a shuttle bus', 'Reserve a table by the lake', 'Send an e-mail to employees'], answer: 3,
            explain: 'La femme conclut : « <i>I’ll send everyone an e-mail about the new date</i> » (j’enverrai un e-mail à tout le monde pour annoncer la nouvelle date). (A) Piège : c’est <b>l’homme</b> qui rappellera le traiteur. (B) La navette est déjà prévue : elle partira <b>toujours</b> (<i>still</i>) à midi, il n’y a rien à réserver.' }
        ]
      },
      {
        accent: 'en-AU',
        lines: [
          { speaker: 'M', text: 'Ingrid, Yasmin, we have now interviewed all five candidates for the project coordinator position. What did you think?' },
          { speaker: 'W', text: "For me, Ms. Varga was the strongest. She's managed projects for international clients, and she speaks three languages." },
          { speaker: 'W2', text: "I agree. The only problem is that she can't start until September. She has to give her current employer two months' notice." },
          { speaker: 'M', text: "That's a long time to wait. The Brenton account starts next month, and we'll need a coordinator for it right away." },
          { speaker: 'W', text: 'What if we hired a temporary coordinator through an agency until she joins us? We did that last year when Paolo was on leave, and it worked well.' },
          { speaker: 'W2', text: "That makes sense. I'll call the agency this afternoon and ask who's available." },
          { speaker: 'M', text: "Good. And I'll phone Ms. Varga today and make her an offer before another company does." }
        ],
        questions: [
          { q: 'Why is Ms. Varga unable to start right away?', options: ['She is on vacation until September.', 'She must give notice to her current employer.', 'She is finishing a university degree.', 'She is moving to a new country.'], answer: 1,
            explain: '« <i>She has to give her current employer two months’ notice</i> » : elle doit donner à son employeur actuel un <b>préavis</b> de deux mois (<i>give notice</i> = annoncer officiellement son départ). (A) Piège : on entend <i>September</i>, mais il n’est pas question de vacances. (D) On sait qu’elle parle trois langues, pas qu’elle déménage.' },
          { q: 'What concern does the man raise?', options: ["The candidate's salary expectations are too high.", 'The interviews have taken too much time.', 'An agency has raised its prices.', 'Someone will be needed soon to manage a new account.'], answer: 3,
            explain: 'L’homme dit : « <i>The Brenton account starts next month, and we’ll need a coordinator for it right away</i> » (le dossier du client Brenton démarre le mois prochain et il nous faudra tout de suite un coordinateur). Il s’inquiète donc de ne pas avoir <b>rapidement</b> quelqu’un pour gérer ce <b>nouveau client</b> (<i>account</i>). Ni le salaire, ni la durée des entretiens, ni les tarifs de l’agence ne sont évoqués.' },
          { q: 'What does the man say he will do?', options: ['Make a job offer to a candidate', 'Contact a staffing agency', 'Schedule more interviews', 'Meet with the Brenton team'], answer: 0,
            explain: '« <i>I’ll phone Ms. Varga today and make her an offer before another company does</i> » (j’appellerai Mme Varga aujourd’hui pour lui faire une offre avant qu’une autre entreprise ne le fasse). (B) Piège : c’est la <b>deuxième femme</b> qui appellera l’agence d’intérim (<i>I’ll call the agency this afternoon</i>).' }
        ]
      },
      {
        accent: 'en-CA',
        lines: [
          { speaker: 'M', text: "Good morning. This is Declan from Fairhaven Produce. I'm calling about the order you placed for tomorrow. I'm afraid our grower couldn't supply any asparagus this week, so we won't have it until next Tuesday." },
          { speaker: 'W', text: "Oh, that's not good news. Asparagus is in three of the dishes on our new spring menu, and we're launching it tomorrow night." },
          { speaker: 'M', text: "I'm really sorry. I could send you some green beans instead. They're very fresh, and I'd take ten percent off the price." },
          { speaker: 'W', text: 'The menus were printed yesterday.' },
          { speaker: 'M', text: 'I see. In that case, you might try Lindell Farms. They grow their own asparagus, and they sell directly to restaurants.' },
          { speaker: 'W', text: "Good idea. I'll call them right away. In the meantime, could you still deliver the rest of our order tomorrow morning as planned?" },
          { speaker: 'M', text: 'Of course. Our truck will be there by seven.' }
        ],
        questions: [
          { q: 'Why is the man calling?', options: ['To confirm a delivery time', 'To promote a new product', 'To report that an item is unavailable', 'To ask about an unpaid invoice'], answer: 2,
            explain: 'Il appelle au sujet de la commande : « <i>our grower couldn’t supply any asparagus this week, so we won’t have it until next Tuesday</i> » (notre producteur n’a pas pu fournir d’asperges cette semaine). Il annonce donc qu’un <b>produit n’est pas disponible</b>. (A) Piège : l’heure de livraison (7 h) n’est évoquée qu’à la fin, à la demande de la femme.' },
          { q: 'What does the woman mean when she says, "The menus were printed yesterday"?', options: ['She has already paid for her order.', 'It is too late to change the dishes.', 'The restaurant will open later than planned.', 'She needs a copy of the new menu.'], answer: 1,
            explain: 'L’homme propose des haricots verts à la place des asperges. En répondant que les menus ont été imprimés hier, la femme fait comprendre qu’il est <b>trop tard pour modifier les plats</b> : elle refuse poliment la proposition. L’homme l’a bien compris, puisqu’il lui suggère aussitôt un autre fournisseur d’asperges (<i>In that case, you might try Lindell Farms</i>).' },
          { q: 'What does the woman ask the man to do?', options: ['Call Lindell Farms for her', 'Reduce the price of the green beans', 'Print some new menus', 'Deliver the rest of the order as scheduled'], answer: 3,
            explain: '« <i>could you still deliver the rest of our order tomorrow morning as planned?</i> » (pourriez-vous quand même livrer le reste de notre commande demain matin, comme prévu ?). (A) Piège : c’est elle qui appellera Lindell Farms (<i>I’ll call them right away</i>). (B) La réduction de 10 % est une proposition de l’homme, pas une demande de la femme.' }
        ]
      },
      {
        accent: 'en-US',
        lines: [
          { speaker: 'M', text: "Aisha, you took that online data analysis course last year, didn't you? I'm thinking of signing up for it." },
          { speaker: 'W', text: "I did, and I'd definitely recommend it. It's helped me a lot with our monthly sales reports." },
          { speaker: 'M', text: 'Did the company pay for it? It costs almost nine hundred dollars.' },
          { speaker: 'W', text: "It did. But you need to get your manager's approval before you register. Then, once you've passed the final exam, you send the certificate and your receipt to Human Resources, and they pay you back." },
          { speaker: 'M', text: "So I'd have to pay for it myself at first." },
          { speaker: 'W', text: "That's right. And by the way, the next session starts on the first of the month, and it fills up quickly." },
          { speaker: 'M', text: "Then I'd better talk to Ms. Fischer about it today." }
        ],
        questions: [
          { q: 'What is the man thinking of doing?', options: ['Applying for a management position', 'Enrolling in an online course', 'Preparing a monthly sales report', 'Teaching a data analysis class'], answer: 1,
            explain: '« <i>I’m thinking of signing up for it</i> » (je pense m’y inscrire), à propos du cours en ligne d’analyse de données : il veut <b>s’inscrire à une formation en ligne</b> (<i>enroll in</i> = s’inscrire à). (C) Piège : les rapports de ventes mensuels sont cités par la femme, comme exemple de ce que le cours l’a aidée à faire.' },
          { q: 'According to the woman, when does the company reimburse employees?', options: ['When they register for the course', 'At the start of each month', 'After they pass the final exam', 'When their manager signs a form'], answer: 2,
            explain: '« <i>once you’ve passed the final exam, you send the certificate and your receipt to Human Resources, and they pay you back</i> » : le remboursement (<i>pay back</i> = rembourser) arrive <b>après la réussite à l’examen final</b>. (A) Faux : au moment de l’inscription, c’est l’employé qui paie. (D) L’accord du responsable est nécessaire <b>avant</b> l’inscription, mais ce n’est pas lui qui déclenche le remboursement.' },
          { q: 'What will the man most likely do today?', options: ['Ask his manager for approval', 'Pay for the course', 'Take an exam', 'Send a receipt to Human Resources'], answer: 0,
            explain: 'La femme explique qu’il faut l’accord de son responsable <b>avant</b> de s’inscrire et que la session se remplit vite. L’homme conclut : « <i>Then I’d better talk to Ms. Fischer about it today</i> » (alors je ferais bien d’en parler à Mme Fischer aujourd’hui). Mme Fischer est donc très probablement sa responsable : il va lui <b>demander son accord</b>. (B) Il ne pourra payer qu’en s’inscrivant, c’est-à-dire après avoir obtenu cet accord.' }
        ]
      }
    ] },

    /* ---------------- Partie 4 — Exposés (5 × 3 questions) ---------------- */
    { part: 4, items: [
      {
        accent: 'en-US', speaker: 'W',
        intro: 'Questions refer to the following telephone message.',
        text: "Hi, Mr. Sorensen. This is Valentina Cruz from the organizing committee of the Northeast Logistics Forum. I'm calling about your talk on warehouse automation next Thursday. So many people have registered for it that we've moved it from Room 104 to the main auditorium, which seats about five hundred people. The time hasn't changed, so you'll still be speaking at two fifteen. I also wanted to let you know that we haven't received your presentation slides yet. Our technicians need to load them onto the auditorium computer in advance, so could you e-mail them to me by Monday? And one last thing: speakers can pick up their badges at the registration desk, which opens at seven thirty on the morning of the forum. If you have any questions, you can reach me at five five five, zero one eight seven. Thanks, and see you next week!",
        questions: [
          { q: "Why has the listener's talk been moved?", options: ['The original room is being repaired.', 'A large number of people have signed up for it.', 'The time of the talk has changed.', 'Another speaker has canceled.'], answer: 1,
            explain: '« <i>So many people have registered for it that we’ve moved it … to the main auditorium</i> » (tant de personnes se sont inscrites qu’on l’a déplacée dans le grand amphithéâtre). <i>Registered</i> est reformulé en <i>signed up</i> (s’inscrire). (C) Faux : « <i>The time hasn’t changed</i> » (l’horaire n’a pas changé).' },
          { q: 'What does the speaker ask the listener to do?', options: ['E-mail his slides by Monday', 'Arrive at seven thirty', 'Call the technicians', 'Confirm his hotel reservation'], answer: 0,
            explain: '« <i>could you e-mail them to me by Monday?</i> » (pourriez-vous me les envoyer par e-mail d’ici lundi ?) ; <i>them</i> = les diapositives de sa présentation (<i>presentation slides</i>). (B) Piège : 7 h 30 est l’heure d’ouverture du bureau des inscriptions, pas une heure d’arrivée imposée. (C) Ce sont les techniciens qui chargeront les diapositives : il n’a pas à les appeler.' },
          { q: 'According to the speaker, where can the listener get his badge?', options: ['In Room 104', 'At the committee office', 'In the main auditorium', 'At the registration desk'], answer: 3,
            explain: '« <i>speakers can pick up their badges at the registration desk</i> » (les intervenants peuvent retirer leur badge au bureau des inscriptions). (A) et (C) sont les deux salles prévues pour sa présentation : l’ancienne et la nouvelle.' }
        ]
      },
      {
        accent: 'en-GB', speaker: 'M',
        intro: 'Questions refer to the following talk.',
        text: "Good morning, everyone, and welcome to the Westbrook Botanical Gardens. My name's Nigel, and I'll be your guide today. The tour takes about ninety minutes. We'll start here in the tropical greenhouse, which is home to more than two thousand species of plants. From there, we'll walk through the rose garden, and we'll finish at the Japanese pond. Now, I see that some of you are carrying coffee. Drinks can attract insects that damage the plants, so please finish them at the tables just outside the entrance before we go in. Also, the paths around the pond are quite narrow, so please walk in single file and stay on the paths. At the end of the tour, feel free to stop by our gift shop, where you'll find seeds for many of the plants you'll see today. All right, let's go in.",
        questions: [
          { q: 'Where will the tour begin?', options: ['At the Japanese pond', 'In the gift shop', 'In the rose garden', 'In a greenhouse'], answer: 3,
            explain: '« <i>We’ll start here in the tropical greenhouse</i> » (nous commencerons ici, dans la serre tropicale). Le jardin de roses vient ensuite, l’étang japonais à la fin, et la boutique est proposée <b>après</b> la visite.' },
          { q: 'Why does the speaker say, "I see that some of you are carrying coffee"?', options: ['To offer the listeners something to drink', 'To recommend a café near the entrance', 'To tell the listeners not to take drinks inside', 'To explain why the tour will start late'], answer: 2,
            explain: 'Question d’intention : écoute la suite. Le guide explique que les boissons attirent des insectes qui abîment les plantes et demande de les finir aux tables situées dehors <b>avant d’entrer</b> (<i>please finish them … before we go in</i>). Il fait remarquer le café pour indiquer qu’on <b>n’entre pas avec des boissons</b>. (B) Piège : il parle de tables près de l’entrée, pas d’un café à recommander.' },
          { q: 'What does the speaker ask the listeners to do near the pond?', options: ['Walk one behind the other', 'Keep their voices down', 'Avoid touching the plants', 'Take photographs quietly'], answer: 0,
            explain: '« <i>the paths around the pond are quite narrow, so please walk in single file</i> » : <i>in single file</i> = en file indienne, c’est-à-dire <b>l’un derrière l’autre</b> (<i>one behind the other</i>). Les autres consignes ne sont pas mentionnées. Au TOEIC, la bonne réponse reformule presque toujours ce que tu entends.' }
        ]
      },
      {
        accent: 'en-AU', speaker: 'W',
        intro: 'Questions refer to the following advertisement.',
        text: "Is your office looking a little less than spotless? Then it's time to call Brightwell Cleaning Services! For fifteen years, we've been keeping offices, clinics, and stores across the Harwick area clean and fresh. We use only environmentally friendly products, so they're safe for your staff, your visitors, and the planet. You'll also get the same cleaning team on every visit, so they'll know your building and exactly how you like things done. And if you're ever unhappy with our work, just let us know within twenty-four hours, and we'll come back and clean again at no extra cost. Right now, businesses that sign a one-year contract before the end of July will get their first month free. To find out more, visit our website and request a quote online.",
        questions: [
          { q: 'What is being advertised?', options: ['A recycling program', 'A cleaning service', 'An office supply store', 'A staffing agency'], answer: 1,
            explain: 'Brightwell Cleaning Services entretient des bureaux, des cliniques et des magasins (<i>we’ve been keeping offices, clinics, and stores … clean</i>) : c’est une <b>entreprise de nettoyage</b> (<i>cleaning service</i>). (A) Piège : on entend <i>environmentally friendly</i> (écologique) et <i>the planet</i>, mais cela concerne les produits utilisés, pas un programme de recyclage. (D) Brightwell envoie sa propre équipe de nettoyage (<i>cleaning team</i>) ; ce n’est pas une agence de recrutement.' },
          { q: 'What does the speaker say customers can do if they are not satisfied?', options: ['Request a full refund', 'Choose a different cleaning team', 'Cancel their contract at any time', 'Have the work done again for free'], answer: 3,
            explain: '« <i>if you’re ever unhappy with our work, just let us know within twenty-four hours, and we’ll come back and clean again at no extra cost</i> » : l’équipe revient nettoyer <b>sans frais supplémentaires</b> (<i>at no extra cost</i> = <i>for free</i>). (A) Aucun remboursement (<i>refund</i>) n’est proposé. (B) Piège : l’équipe est bien mentionnée, mais pour dire que c’est <b>toujours la même</b> à chaque passage. (C) On entend <i>contract</i>, mais rien n’est dit sur une résiliation.' },
          { q: 'According to the speaker, how can businesses get a free month of service?', options: ['By requesting a quote online', 'By paying for their first month in advance', 'By signing a one-year contract', 'By recommending the company to another business'], answer: 2,
            explain: '« <i>businesses that sign a one-year contract before the end of July will get their first month free</i> » : pour avoir le premier mois gratuit, il faut <b>signer un contrat d’un an</b> (avant fin juillet). (A) Piège : demander un devis en ligne (<i>request a quote online</i>) sert seulement à se renseigner. (B) On entend <i>first month</i>, mais ce mois est offert, pas payé à l’avance.' }
        ]
      },
      {
        accent: 'en-US', speaker: 'M',
        intro: 'Questions refer to the following excerpt from a meeting and survey results.',
        text: "Good morning, everyone. Before we get started, I'd like to go over the results of the customer survey we ran last month. First, some good news: more than three thousand customers responded this year, twice as many as last year. Overall, the scores are encouraging. Our delivery score has gone up a lot since we started offering weekend deliveries in March. However, one category fell below seven this year, and that's the area I want us to focus on this quarter. To help us, we've hired an outside consultant, Dr. Evelyn Marsh, who will be running a series of training sessions starting next Tuesday. I'll e-mail you the schedule this afternoon, and I need each of you to sign up for one of the sessions by Friday.",
        graphic: {
          title: 'Customer Survey Results (score out of 10)',
          head: ['Category', 'Score'],
          rows: [
            ['Product selection', '8.4'],
            ['Delivery', '7.8'],
            ['Assembly service', '6.5'],
            ['Customer support', '7.2']
          ]
        },
        questions: [
          { q: "What does the speaker say about this year's survey?", options: ['More customers responded than last year.', 'It was conducted by an outside consultant.', 'It was sent only to new customers.', 'It will be repeated every month.'], answer: 0,
            explain: '« <i>more than three thousand customers responded this year, twice as many as last year</i> » : deux fois plus de réponses que l’an dernier → <b>plus de clients ont répondu</b>. (B) Piège : la consultante extérieure va animer des formations ; ce n’est pas elle qui a réalisé l’enquête.' },
          { q: 'Look at the graphic. Which category will the company focus on this quarter?', options: ['Product selection', 'Delivery', 'Assembly service', 'Customer support'], answer: 2,
            explain: 'L’orateur veut se concentrer sur la catégorie qui est <b>passée sous la barre de 7</b> (<i>one category fell below seven</i>). Dans le tableau, une seule note est inférieure à 7 : <b>Assembly service</b> (6,5), le service de montage. (B) Piège : la livraison est citée, mais parce que sa note <b>a beaucoup augmenté</b>. (D) 7,2 est au-dessus de 7.' },
          { q: 'What are the listeners asked to do by Friday?', options: ['Complete a customer survey', 'Register for a training session', 'Suggest ideas for improvement', 'Send the speaker their schedules'], answer: 1,
            explain: '« <i>I need each of you to sign up for one of the sessions by Friday</i> » (il faut que chacun de vous s’inscrive à l’une des sessions d’ici vendredi) → <b>s’inscrire à une formation</b>. (D) Piège : c’est l’orateur qui enverra le planning par e-mail cet après-midi.' }
        ]
      },
      {
        accent: 'en-CA', speaker: 'W',
        intro: 'Questions refer to the following broadcast.',
        text: "In local business news, Velmora Foods, the frozen meal producer based here in Carden Falls, announced yesterday that it will open a second factory next spring. The new plant, in the Northgate industrial park, will allow the company to double its production and, for the first time, sell its products overseas. According to company president Idris Mensah, Velmora chose Northgate mainly because of its direct rail link to the port, which will make shipping much faster. The company plans to hire about two hundred and fifty people, mostly for production and packaging jobs. To fill these positions, it will hold a job fair at the Carden Falls Community Center on Saturday, October twelfth, from nine a.m. to four p.m. Applicants are encouraged to register online in advance. That's all for business news. Up next, Tomasz Nowak with the sports report.",
        questions: [
          { q: 'What is the report mainly about?', options: ['A merger between two food companies', 'The construction of a new rail line', "A company's expansion plans", 'The closure of a factory'], answer: 2,
            explain: 'Velmora Foods « <i>will open a second factory next spring</i> » (ouvrira une deuxième usine au printemps prochain), va doubler sa production et embaucher : le reportage porte sur les <b>projets d’expansion</b> de l’entreprise. (B) Piège : la liaison ferroviaire avec le port <b>existe déjà</b> ; c’est l’une des raisons du choix de Northgate, pas le sujet du reportage. (D) Il s’agit d’une ouverture, pas d’une fermeture.' },
          { q: 'According to the report, what will the new factory allow the company to do?', options: ['Lower its prices', 'Launch a line of fresh meals', 'Move its headquarters', 'Sell its products in other countries'], answer: 3,
            explain: '« <i>for the first time, sell its products overseas</i> » : <i>overseas</i> = à l’étranger (littéralement « outre-mer ») → vendre ses produits <b>dans d’autres pays</b>, c’est-à-dire exporter. (B) Piège : l’entreprise produit des plats <b>surgelés</b> (<i>frozen meals</i>) ; aucune gamme de plats frais n’est annoncée.' },
          { q: 'What will happen on October twelfth?', options: ['The new factory will open.', 'A recruitment event will take place.', 'A rail link to the port will open.', 'Velmora will announce its sales figures.'], answer: 1,
            explain: 'Le 12 octobre, l’entreprise organisera « <i>a job fair</i> » (un salon de l’emploi) pour pourvoir les postes : c’est un <b>événement de recrutement</b>. (A) L’usine n’ouvrira qu’au printemps prochain. (C) Piège : la liaison ferroviaire vers le port <b>existe déjà</b> (<i>its direct rail link to the port</i>). (D) Aucun chiffre de ventes n’est annoncé.' }
        ]
      }
    ] }
  ]
});
