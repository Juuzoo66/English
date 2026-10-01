LE.register({
  id: 'm01-L',
  kind: 'mock-section',
  mock: 'm01',
  section: 'listening',
  title: 'TOEIC blanc n°1 : Listening',
  parts: [
    /* ---------------- Partie 1 : Photographies (3 items) ---------------- */
    { part: 1, items: [
      {
        accent: 'en-US',
        scene: 'Un homme en chemise, seul dans la pièce, se tient debout devant une grande photocopieuse. D’une main, il soulève le couvercle de la machine ; dans l’autre, il tient une feuille de papier. À côté de lui, une pile de dossiers est posée sur une petite table.',
        statements: ["He's stacking some folders on a shelf.", "He's sitting at a small table.", "He's lifting the lid of a copier.", "He's handing a sheet of paper to a coworker."],
        answer: 2,
        explain: '(C) est vraie : il soulève le couvercle (<i>lid</i>) de la photocopieuse (<i>copier</i>). (A) Les dossiers sont posés sur une table : personne ne les empile sur une étagère. (B) Il est <b>debout</b>, pas assis (<i>sitting</i>). (D) Il tient bien une feuille, mais il n’y a aucun collègue à qui la tendre (<i>hand</i> = tendre, donner).'
      },
      {
        accent: 'en-GB', speaker: 'M',
        scene: 'Une salle de réunion vide, sans personne. Autour d’une longue table, toutes les chaises sont rangées sous la table. Au centre de la table, plusieurs bouteilles d’eau sont alignées. Un écran de projection est déroulé sur le mur du fond et les stores des fenêtres sont baissés.',
        statements: ['Some chairs are being arranged around a table.', 'Some bottles have been lined up on a table.', 'The window blinds have been raised.', 'A presentation is being given in a meeting room.'],
        answer: 1,
        explain: '(B) est vraie : des bouteilles <b>ont été alignées</b> (<i>have been lined up</i>) sur la table. (A) et (D) utilisent <i>is / are being</i> + participe passé, c’est-à-dire une action <b>en train de se faire</b> : impossible, la salle est vide. (C) Les stores sont <b>baissés</b>, pas levés (<i>raised</i>). Règle d’or : personne sur la photo → méfie-toi de <i>being</i>.'
      },
      {
        accent: 'en-AU',
        scene: 'Deux ouvriers portant un casque de chantier travaillent sur un échafaudage installé le long de la façade d’un immeuble. L’un d’eux tend un pot de peinture à son collègue. Au pied de l’échafaudage, une échelle est appuyée contre le mur ; personne n’est dessus.',
        statements: ['One of the men is putting on a helmet.', 'The workers are climbing down a ladder.', 'Some paint is being poured into a bucket.', 'A ladder has been propped against the building.'],
        answer: 3,
        explain: '(D) est vraie : une échelle <b>a été appuyée</b> contre le bâtiment (<i>prop against</i> = appuyer contre). (A) Piège classique : ils <b>portent</b> déjà un casque (<i>are wearing</i>) ; <i>putting on</i> = être en train de le mettre. (B) Personne n’est sur l’échelle. (C) On voit un pot de peinture, mais personne ne verse (<i>pour</i>) de peinture. Ici, la bonne réponse ne décrit pas l’action principale (les ouvriers sur l’échafaudage) mais un détail secondaire : observe toute la photo !'
      }
    ] },

    /* ---------------- Partie 2 : Questions-réponses (12 items) ---------------- */
    { part: 2, items: [
      {
        accent: 'en-US', speakers: ['W', 'M'],
        question: 'Where should I put these boxes of printer paper?',
        responses: ['On the shelf next to the supply cabinet.', 'About five hundred sheets each.', 'Yes, I put them away yesterday.'],
        answer: 0,
        explain: '<b>Where</b> → un lieu : « <i>On the shelf next to the supply cabinet</i> » (sur l’étagère à côté de l’armoire à fournitures). (B) donne une quantité (réponse à <i>How many</i>). (C) répond <i>Yes</i> à une question en <i>Where</i> et répète <i>put</i>.'
      },
      {
        accent: 'en-GB', speakers: ['M', 'W'],
        question: 'When does the new receptionist start?',
        responses: ['At the front desk.', 'Yes, she seems very nice.', 'Next Monday, I believe.'],
        answer: 2,
        explain: '<b>When</b> → un moment : « <i>Next Monday, I believe</i> » (lundi prochain, je crois). (A) répond à <i>Where</i>. (B) On ne répond jamais <i>Yes</i> à une question en <i>When</i>.'
      },
      {
        accent: 'en-US', speakers: ['W', 'M'],
        question: 'Have you had a chance to look at the budget proposal?',
        responses: ['He proposed a new schedule.', "I'm planning to read it this afternoon.", "There's a chance of rain later."],
        answer: 1,
        explain: 'Réponse <b>indirecte</b> : il ne dit ni oui ni non, mais « <i>I’m planning to read it this afternoon</i> » (je compte le lire cet après-midi) → donc non, pas encore. (A) Piège de son : <i>proposed</i> / <i>proposal</i>. (C) Répète <i>chance</i> dans un autre sens (<i>a chance of rain</i> = un risque de pluie).'
      },
      {
        accent: 'en-CA', speakers: ['M', 'W'],
        question: "Who's leading the training session on Thursday?",
        responses: ["The schedule hasn't been finalized yet.", 'In the main conference room.', 'The train leaves at noon.'],
        answer: 0,
        explain: 'Réponse <b>indirecte</b> typique : « <i>The schedule hasn’t been finalized yet</i> » (le planning n’est pas encore arrêté) → on ne sait pas encore qui animera la formation. (B) répond à <i>Where</i>. (C) Piège de son : <i>train</i> / <i>training</i>.'
      },
      {
        accent: 'en-AU', speakers: ['W', 'M'],
        question: "You've already sent the invoice to Halvorsen Motors, haven't you?",
        responses: ['An invitation to the opening.', 'About three thousand dollars.', 'Mr. Delgado took care of it this morning.'],
        answer: 2,
        explain: 'Question « tag » (<i>…, haven’t you?</i> = n’est-ce pas ?) : « Tu as déjà envoyé la facture, n’est-ce pas ? ». Réponse indirecte : « <i>Mr. Delgado took care of it this morning</i> » (M. Delgado s’en est occupé ce matin) → c’est fait, mais par quelqu’un d’autre. (A) Piège de son : <i>invitation</i> / <i>invoice</i>. (B) Donne un montant, mais ne dit pas si la facture est partie.'
      },
      {
        accent: 'en-US', speakers: ['M', 'W'],
        question: 'Would you rather meet in the morning or in the afternoon?',
        responses: ['Yes, that would be great.', 'Anytime after lunch works for me.', 'We met at the conference.'],
        answer: 1,
        explain: 'Question à choix (<b>or</b>) : on choisit, on ne répond pas <i>Yes</i> → (A) est faux. « <i>Anytime after lunch works for me</i> » (n’importe quand après le déjeuner me convient) = l’après-midi. (C) répète le verbe <i>meet</i> au passé (<i>met</i>).'
      },
      {
        accent: 'en-GB', speakers: ['W', 'W2'],
        question: "Why don't we ask Priya to help with the product launch?",
        responses: ['Because it was launched last spring.', 'Lunch is served at noon.', "Good idea. She's organized several launches before."],
        answer: 2,
        explain: '<i>Why don’t we…?</i> n’est pas un vrai « pourquoi » : c’est une <b>suggestion</b> (Et si on demandait à Priya… ?). On y répond par un accord ou un refus : « <i>Good idea. She’s organized several launches before.</i> » (Bonne idée, elle a déjà organisé plusieurs lancements). (A) Piège : <i>Because</i> répond à un vrai « pourquoi ». (B) Piège de son : <i>lunch</i> / <i>launch</i>.'
      },
      {
        accent: 'en-US', speakers: ['M', 'W'],
        question: 'The printer on the third floor is jammed again.',
        responses: ["I'll let the maintenance team know.", 'Thirty copies, please.', 'On the third of May.'],
        answer: 0,
        explain: 'Face à une <b>affirmation</b> (l’imprimante du 3ᵉ étage est encore bloquée), la bonne réponse réagit au problème : « <i>I’ll let the maintenance team know</i> » (je vais prévenir l’équipe de maintenance). (B) Piège de son : <i>thirty</i> / <i>third</i>. (C) Répète <i>third</i>, mais dans une date.'
      },
      {
        accent: 'en-CA', speakers: ['W', 'M'],
        question: 'How did the client react to the new logo design?',
        responses: ['By express mail.', 'She asked for a few changes to the colors.', 'A new sign for the lobby.'],
        answer: 1,
        explain: '<i>How did … react?</i> = comment a-t-elle réagi ? → « <i>She asked for a few changes to the colors</i> » (elle a demandé quelques modifications des couleurs). (A) répondrait à « comment l’a-t-on envoyé ? ». (C) Répète <i>new</i> et joue sur le son <i>design</i> / <i>sign</i>.'
      },
      {
        accent: 'en-GB', speakers: ['M', 'M2'],
        question: "Why hasn't the quarterly report been posted online yet?",
        responses: ['Mr. Okafor is still checking the figures.', 'Every three months.', 'Yes, I read it online.'],
        answer: 0,
        explain: '<b>Why</b> → une raison, même sans <i>because</i> : « <i>Mr. Okafor is still checking the figures</i> » (M. Okafor vérifie encore les chiffres). (B) Piège de sens : <i>quarterly</i> = trimestriel (tous les trois mois), mais cela ne répond pas à « pourquoi ». (C) <i>Yes</i> est impossible après <i>Why</i>, et le rapport n’est justement pas encore en ligne.'
      },
      {
        accent: 'en-US', speakers: ['W', 'M'],
        question: "Isn't the shipment from Rotterdam supposed to arrive today?",
        responses: ['About two hundred boxes.', "I've never been to Rotterdam.", "It's been held up at customs."],
        answer: 2,
        explain: 'Question négative (<i>Isn’t … supposed to…?</i> = la livraison ne devait-elle pas arriver aujourd’hui ?). Réponse indirecte : « <i>It’s been held up at customs</i> » (elle est bloquée à la douane ; <i>held up</i> = retardé). (A) Donne une quantité. (B) Répète <i>Rotterdam</i> sans répondre.'
      },
      {
        accent: 'en-US', speakers: ['M', 'W'],
        question: 'Could you send me the updated client list before the meeting?',
        responses: ['The meeting went well, thanks.', "Isn't it already on the shared drive?", 'They updated the software last week.'],
        answer: 1,
        explain: 'Une question peut répondre à une question ! « <i>Isn’t it already on the shared drive?</i> » (Elle n’est pas déjà sur le lecteur partagé ?) → la personne peut la récupérer elle-même. (A) Répète <i>meeting</i>, et parle d’une réunion passée. (C) Répète <i>updated</i> dans un autre contexte.'
      }
    ] },

    /* ---------------- Partie 3 : Conversations (6 × 3 questions) ---------------- */
    { part: 3, items: [
      {
        accent: 'en-US',
        lines: [
          { speaker: 'W', text: 'Hello, this is Mariana Souza. I have a reservation at your hotel from March third to March sixth, but my conference has been extended by a day. Would it be possible to stay until the seventh?' },
          { speaker: 'M', text: "Let me check, Ms. Souza. I'm afraid we're fully booked on the night of the sixth. There's a big trade fair in town that week." },
          { speaker: 'W', text: "Oh, that's a problem. The last session of my conference doesn't end until late on the sixth." },
          { speaker: 'M', text: 'Well, our sister hotel is just two blocks away, and it still has rooms available. I could book one night there for you at the same rate.' },
          { speaker: 'W', text: 'That would be great, thank you. Would I have to move my luggage myself?' },
          { speaker: 'M', text: 'Not at all. Our staff will take care of it. Your bags will be waiting in your new room when you arrive.' }
        ],
        questions: [
          { q: 'Why is the woman calling?', options: ['To cancel a reservation', 'To register for a conference', 'To extend her stay', 'To complain about a room'], answer: 2,
            explain: 'La femme demande : « <i>Would it be possible to stay until the seventh?</i> » (serait-il possible de rester jusqu’au 7 ?). Elle veut donc <b>prolonger son séjour</b> (<i>extend her stay</i>). (B) Piège : on entend <i>conference</i>, mais elle y participe déjà.' },
          { q: 'According to the man, why is the hotel full?', options: ['A trade fair is taking place.', 'Some rooms are being renovated.', 'A conference has been extended.', 'A large group arrived early.'], answer: 0,
            explain: 'L’homme explique : « <i>There’s a big trade fair in town that week</i> » (il y a un grand salon professionnel en ville cette semaine-là). (C) Piège : la conférence a bien été prolongée, mais c’est la raison de <b>l’appel</b>, pas la raison pour laquelle l’hôtel est complet.' },
          { q: 'What does the man say the hotel staff will do?', options: ['Drive the woman to her conference', "Take the woman's bags to another hotel", 'Give the woman a discount', "Upgrade the woman's room"], answer: 1,
            explain: '« <i>Our staff will take care of it. Your bags will be waiting in your new room when you arrive.</i> » : le personnel apportera ses bagages dans sa chambre de l’hôtel partenaire. (C) Faux : elle paiera <i>the same rate</i> (le même tarif), donc pas de réduction.' }
        ]
      },
      {
        accent: 'en-GB',
        lines: [
          { speaker: 'W', text: 'Hassan, Daniel, have you got a minute? The visitors from Dravenport Medical are coming on Tuesday now, instead of Thursday.' },
          { speaker: 'M', text: "Tuesday? That's only four days from now. Do they still want a tour of the factory?" },
          { speaker: 'W', text: "Yes. They're especially interested in our new packaging line." },
          { speaker: 'M2', text: 'That could be a problem. The engineers are running safety tests on that line all day Tuesday.' },
          { speaker: 'W', text: "Could they do the tests in the morning? The visitors won't arrive until two." },
          { speaker: 'M2', text: "I'll check with the head engineer, but I think that should be possible." },
          { speaker: 'M', text: "And I'll cancel the lunch reservation I made. Since they're arriving in the afternoon, we'll need something lighter." },
          { speaker: 'W', text: 'Right. Coffee and some pastries in the meeting room will be fine.' }
        ],
        questions: [
          { q: 'What does the woman announce?', options: ['A client has canceled an order.', 'A factory will be closed for repairs.', 'A new engineer has joined the team.', 'A visit has been rescheduled.'], answer: 3,
            explain: 'Dès le début : « <i>The visitors from Dravenport Medical are coming on Tuesday now, instead of Thursday</i> » (ils viennent maintenant mardi au lieu de jeudi). La visite a donc été <b>reprogrammée</b> (<i>rescheduled</i>). Les autres options reprennent des mots entendus (<i>factory</i>, <i>engineer</i>) sans rapport avec l’annonce.' },
          { q: 'What problem does one of the men mention?', options: ['A packaging line is being replaced.', 'The head engineer is on vacation.', 'Some tests are planned for the day of the visit.', 'The meeting room has already been booked.'], answer: 2,
            explain: 'Le deuxième homme (<i>Man 2</i>) dit : « <i>The engineers are running safety tests on that line all day Tuesday</i> » (les ingénieurs font des tests de sécurité sur cette ligne toute la journée de mardi), c’est-à-dire le jour de la visite. (A) Faux : la ligne est <b>nouvelle</b>, rien n’indique qu’on la remplace.' },
          { q: 'What will the visitors most likely be served?', options: ['A three-course lunch', 'Light refreshments', 'Dinner at a restaurant', 'Breakfast in the cafeteria'], answer: 1,
            explain: 'Les visiteurs arrivent à 14 h ; l’un des hommes annule le déjeuner (<i>I’ll cancel the lunch reservation</i>) et la femme conclut : « <i>Coffee and some pastries in the meeting room will be fine</i> ». Café et viennoiseries = <b>une collation légère</b> (<i>light refreshments</i>). (A) Piège : le déjeuner vient justement d’être annulé.' }
        ]
      },
      {
        accent: 'en-US',
        lines: [
          { speaker: 'W', text: 'Brindlewood Catering, this is Olivia. How can I help you?' },
          { speaker: 'M', text: "Hi, I'm calling about lunch for a workshop at our office next Wednesday. There'll be thirty people, and I'm looking at the packages on your website." },
          { speaker: 'W', text: 'Great. Do you know which one you would like?' },
          { speaker: 'M', text: "Well, it's an all-day workshop, so we'd like to serve a hot meal. But we don't need drinks. We have plenty in the office." },
          { speaker: 'W', text: 'No problem. Will any of your guests need a vegetarian meal?' },
          { speaker: 'M', text: "Yes, a few. I'll e-mail you the exact number tomorrow." },
          { speaker: 'W', text: 'Perfect. And since your order is for more than twenty-five people, delivery is free.' }
        ],
        graphic: {
          title: 'Brindlewood Catering: Lunch Packages',
          head: ['Package', 'Includes', 'Price per person'],
          rows: [
            ['Basic', 'Sandwiches, fruit', '$12'],
            ['Standard', 'Sandwiches, salad, dessert', '$16'],
            ['Deluxe', 'Hot meal, salad, dessert', '$22'],
            ['Premium', 'Hot meal, salad, dessert, drinks', '$27']
          ]
        },
        questions: [
          { q: 'Why does the man want to serve a hot meal?', options: ['The workshop will last all day.', 'Some guests have asked for one.', 'The weather will be cold.', 'It is the least expensive option.'], answer: 0,
            explain: 'L’homme dit : « <i>it’s an all-day workshop, so we’d like to serve a hot meal</i> » (c’est un atelier d’une journée entière, donc nous aimerions servir un plat chaud). (D) Faux : d’après le tableau, les formules avec plat chaud sont les <b>plus chères</b>.' },
          { q: 'Look at the graphic. How much will the man most likely pay per person?', options: ['$12', '$16', '$22', '$27'], answer: 2,
            explain: 'Deux conditions : un plat chaud (<i>a hot meal</i>) → formules Deluxe ou Premium ; pas de boissons (<i>we don’t need drinks</i>) → on élimine Premium, qui inclut <i>drinks</i>. Reste la formule <b>Deluxe, à 22 $</b> par personne. C’est le raisonnement typique des questions avec graphique : croiser ce qu’on entend avec le tableau.' },
          { q: 'What does the woman say about delivery?', options: ['It is not available on Wednesdays.', 'It is free for large orders.', 'It must be booked a week in advance.', 'It costs extra for vegetarian meals.'], answer: 1,
            explain: '« <i>since your order is for more than twenty-five people, delivery is free</i> » (comme votre commande dépasse 25 personnes, la livraison est gratuite) → gratuite pour les <b>grosses commandes</b>. (D) Piège : les repas végétariens sont évoqués, mais aucun supplément n’est mentionné.' }
        ]
      },
      {
        accent: 'en-AU',
        lines: [
          { speaker: 'W', text: "Kenji, I'm working on the slides for Monday's presentation to the board. Could you send me the sales figures for the last quarter?" },
          { speaker: 'M', text: "Sure. The only thing is, the finance department hasn't finished checking them yet." },
          { speaker: 'W', text: 'Hmm. The board meeting is at nine a.m. on Monday.' },
          { speaker: 'M', text: "I know. I'll call Rosa in finance and ask if she can get them to me by Friday afternoon." },
          { speaker: 'W', text: 'Thanks. If I have them by then, I can finish the charts over the weekend.' },
          { speaker: 'M', text: "Actually, why don't you just use the slide design from last quarter's presentation? The board really liked it." },
          { speaker: 'W', text: "Good idea. That'll save me a lot of time." }
        ],
        questions: [
          { q: 'What is the woman working on?', options: ['A budget report', 'A job advertisement', 'A presentation', 'A training manual'], answer: 2,
            explain: 'La femme prépare « <i>the slides for Monday’s presentation to the board</i> » (les diapositives de la présentation de lundi devant le conseil d’administration). (A) Piège : il est question de chiffres de ventes (<i>sales figures</i>), mais elle ne rédige pas de rapport budgétaire.' },
          { q: 'What does the woman mean when she says, "The board meeting is at nine a.m. on Monday"?', options: ['She needs the figures soon.', 'She would like to reschedule the meeting.', 'She will not be able to attend the meeting.', 'She has already finished the charts.'], answer: 0,
            explain: 'L’homme vient de dire que les chiffres ne sont pas encore vérifiés. En rappelant que la réunion a lieu lundi à 9 h, la femme souligne qu’il reste <b>peu de temps</b> : elle a besoin des chiffres rapidement. La suite le confirme : l’homme promet d’essayer de les obtenir <b>d’ici vendredi après-midi</b>. Pour ce type de question, écoute toujours ce qui est dit juste avant et juste après la phrase citée.' },
          { q: 'What does the man suggest?', options: ['Postponing the board meeting', 'Hiring a graphic designer', 'Working together over the weekend', 'Reusing a previous slide design'], answer: 3,
            explain: '« <i>Why don’t you just use the slide design from last quarter’s presentation?</i> » (pourquoi ne pas simplement reprendre la mise en page de la présentation du trimestre dernier ?) → <b>réutiliser</b> un modèle précédent. (C) Piège : on entend <i>weekend</i>, mais c’est la femme qui dit qu’elle finira les graphiques ce week-end ; personne ne propose de travailler ensemble.' }
        ]
      },
      {
        accent: 'en-US',
        lines: [
          { speaker: 'M', text: 'Facilities department, Stefan speaking.' },
          { speaker: 'W', text: "Hi, Stefan. This is Amina Diallo from the legal department on the fifth floor. The air conditioning in our office has stopped working, and it's getting really warm in here." },
          { speaker: 'M', text: "Sorry about that. Several offices on your floor have reported the same problem. We think it's the main cooling unit on the roof." },
          { speaker: 'W', text: "Do you have any idea how long it'll take to fix? We have clients coming in at three." },
          { speaker: 'M', text: "The technician is on his way, but he probably won't be finished before four. In the meantime, the conference rooms on the sixth floor are unaffected, and two of them are free this afternoon." },
          { speaker: 'W', text: 'That would work. Could you reserve the larger one for us from three to five?' },
          { speaker: 'M', text: "Done. I'll also have some bottled water sent to your department." }
        ],
        questions: [
          { q: 'Who most likely is the man?', options: ['A building maintenance employee', 'A lawyer', 'A hotel receptionist', 'A delivery driver'], answer: 0,
            explain: 'Il décroche en disant « <i>Facilities department</i> » (les services généraux, chargés de l’entretien du bâtiment), il est au courant de la panne et envoie un technicien : il travaille à <b>l’entretien de l’immeuble</b>. (B) Piège : c’est la <b>femme</b> qui travaille au service juridique (<i>legal department</i>).' },
          { q: 'According to the man, what is causing the problem?', options: ['A window has been left open.', 'The power is out in the building.', "The thermostat in the woman's office is broken.", 'Some equipment on the roof is not working properly.'], answer: 3,
            explain: '« <i>We think it’s the main cooling unit on the roof</i> » (nous pensons que c’est le groupe de climatisation principal, sur le toit) → un <b>équipement sur le toit</b> fonctionne mal. (C) Faux : plusieurs bureaux ont le même problème, ce n’est donc pas le thermostat de son bureau.' },
          { q: "What will the woman most likely do at three o'clock?", options: ['Meet with the technician', 'Meet clients in another room', 'Leave the office early', 'Go up to the roof'], answer: 1,
            explain: 'Des clients arrivent à 15 h (<i>We have clients coming in at three</i>) et elle réserve la plus grande salle du 6ᵉ étage de 15 h à 17 h. Elle va donc <b>recevoir ses clients dans une autre salle</b>. (A) Faux : le technicien ne devrait pas avoir fini avant 16 h, et elle n’a pas prévu de le voir.' }
        ]
      },
      {
        accent: 'en-CA',
        lines: [
          { speaker: 'W', text: 'Luis, have you seen the results of the customer survey for our online store?' },
          { speaker: 'M', text: "Just the summary. Most people are happy with our products, aren't they?" },
          { speaker: 'W', text: "They are. But almost forty percent said their orders took more than a week to arrive. That's by far the most common complaint." },
          { speaker: 'M', text: "That doesn't surprise me. Deliveries have been much slower since we switched to Quellbrook Couriers in January." },
          { speaker: 'W', text: "Exactly. So I've asked two other delivery companies for quotes. One of them can guarantee delivery within three days, but it's a bit more expensive." },
          { speaker: 'M', text: 'Customers might be willing to pay a little more to get their orders faster. We could offer it as an express option at checkout.' },
          { speaker: 'W', text: "That's a good point. Let's present both options to our manager at Thursday's meeting." }
        ],
        questions: [
          { q: 'What problem are the speakers discussing?', options: ['Customers are waiting too long for their orders.', 'Some products arrived damaged.', 'Prices have increased.', 'The online store is hard to use.'], answer: 0,
            explain: '« <i>almost forty percent said their orders took more than a week to arrive</i> » (près de 40 % disent que leurs commandes ont mis plus d’une semaine à arriver) : les clients attendent <b>trop longtemps</b>. Aucune plainte sur l’état des produits, les prix ou le site : les clients sont même satisfaits des produits.' },
          { q: 'What does the man suggest?', options: ['Going back to their previous courier', 'Lowering the prices of some products', 'Sending customers a second survey', 'Letting customers pay extra for faster delivery'], answer: 3,
            explain: '« <i>Customers might be willing to pay a little more to get their orders faster. We could offer it as an express option at checkout.</i> » → proposer une <b>livraison express payante</b> au moment de la commande. (A) Piège : revenir à l’ancien transporteur n’est jamais évoqué ; la femme a demandé des devis à <b>deux autres</b> sociétés.' },
          { q: 'What does the woman say they will do on Thursday?', options: ['Sign a contract with a courier', 'Publish the survey results', 'Present some options to their manager', 'Visit a delivery company'], answer: 2,
            explain: '« <i>Let’s present both options to our manager at Thursday’s meeting</i> » (présentons les deux options à notre responsable lors de la réunion de jeudi). (A) Piège : aucun contrat n’est signé, ils n’ont pour l’instant que des devis (<i>quotes</i>).' }
        ]
      }
    ] },

    /* ---------------- Partie 4 : Exposés (5 × 3 questions) ---------------- */
    { part: 4, items: [
      {
        accent: 'en-US', speaker: 'W',
        intro: 'Questions refer to the following telephone message.',
        text: "Hello, Mr. Adeyemi. This is Claire calling from Dr. Lindqvist's dental office. I'm calling to remind you about your appointment tomorrow, Thursday, at ten thirty a.m. Unfortunately, Dr. Lindqvist will be at a conference tomorrow, so your checkup will be done by Dr. Moreau instead. If you'd rather wait for her, she has some openings next Tuesday afternoon. Also, please remember to bring your new insurance card. Our records show that your old one expired last month. Please call us back at five-five-five, zero-one-four-two to let us know what you'd like to do. Thank you!",
        questions: [
          { q: 'Why is the speaker calling?', options: ['To confirm a payment', 'To remind the listener of an appointment', 'To announce that an office is moving', 'To ask about a conference'], answer: 1,
            explain: 'Dès le début : « <i>I’m calling to remind you about your appointment tomorrow</i> » (j’appelle pour vous rappeler votre rendez-vous de demain). <i>Remind</i> = rappeler quelque chose à quelqu’un. (D) Piège : la conférence est celle du Dr Lindqvist, ce n’est pas l’objet de l’appel.' },
          { q: 'What does the speaker say about Dr. Lindqvist?', options: ['She will be away tomorrow.', 'She is retiring next month.', 'She is fully booked next week.', 'She has moved to a new office.'], answer: 0,
            explain: '« <i>Dr. Lindqvist will be at a conference tomorrow</i> » → elle sera <b>absente</b> demain (<i>away</i>). (C) Faux : elle a justement des créneaux libres (<i>openings</i>) mardi prochain.' },
          { q: 'What is the listener asked to bring?', options: ['His medical records', 'A completed form', 'A payment receipt', 'An updated insurance card'], answer: 3,
            explain: '« <i>please remember to bring your new insurance card</i> » (n’oubliez pas d’apporter votre nouvelle carte d’assurance), car l’ancienne a expiré. (A) Piège : on entend <i>our records</i> (nos dossiers), mais on ne lui demande pas d’apporter son dossier médical.' }
        ]
      },
      {
        accent: 'en-GB', speaker: 'M',
        intro: 'Questions refer to the following announcement and departure board.',
        text: 'Attention, please. Due to a signal problem just outside the station, the train departing from platform three will be delayed by approximately twenty minutes. We apologize for any inconvenience this may cause. Passengers on this service who have connecting trains at Harlow Junction should go to the information desk, where a member of staff will help them rearrange their journeys. We would also like to remind passengers that the station café is closed today for renovations. Hot drinks and snacks are available from the vending machines on platform one. Thank you for your patience.',
        graphic: {
          title: 'Departures: Morning Trains',
          head: ['Destination', 'Time', 'Platform'],
          rows: [
            ['Ashbury', '9:15', '2'],
            ['Kingsmere', '9:30', '4'],
            ['Dunmore', '9:40', '1'],
            ['Pelham Cross', '9:55', '3']
          ]
        },
        questions: [
          { q: 'Look at the graphic. Which train has been delayed?', options: ['The train to Ashbury', 'The train to Kingsmere', 'The train to Dunmore', 'The train to Pelham Cross'], answer: 3,
            explain: 'L’annonce dit : « <i>the train departing from platform three will be delayed</i> » (le train au départ du <b>quai 3</b> aura environ 20 minutes de retard). Dans le tableau, le quai 3 correspond au train pour <b>Pelham Cross</b> (9 h 55). La destination n’est jamais prononcée : il faut croiser l’annonce et le graphique.' },
          { q: 'What should passengers with connecting trains do?', options: ['Go to the information desk', 'Buy a new ticket', 'Take a bus to Harlow Junction', 'Wait on platform one'], answer: 0,
            explain: '« <i>Passengers on this service who have connecting trains at Harlow Junction should go to the information desk</i> » (les voyageurs qui ont une correspondance doivent se rendre au bureau d’information). (D) Piège : on entend <i>platform one</i>, mais c’est là que se trouvent les distributeurs de boissons et d’en-cas.' },
          { q: 'Why is the café closed?', options: ['It has run out of food.', 'Some work is being done on it.', 'There is a staff shortage.', 'It is a public holiday.'], answer: 1,
            explain: '« <i>the station café is closed today for renovations</i> » : il est fermé pour <b>travaux</b> (<i>renovations</i>), reformulé en « des travaux y sont effectués ». Les autres raisons ne sont pas mentionnées.' }
        ]
      },
      {
        accent: 'en-AU', speaker: 'W',
        intro: 'Questions refer to the following advertisement.',
        text: "Do your managers spend hours every week putting together staff schedules? Then it's time to try Tallyport, the online scheduling tool that lets your employees check their schedules, request time off, and swap shifts, all from their smartphones. More than two thousand restaurants and shops already use Tallyport, and their managers save an average of five hours a week. Setting up is simple: just upload your staff list, and our system does the rest. And this month only, new customers can try Tallyport free for sixty days. That's twice as long as our usual free trial! If you ever have a question, our support team is available around the clock by phone or online chat. Sign up on our website today.",
        questions: [
          { q: 'What is being advertised?', options: ['A recruitment agency', 'A scheduling application', 'A restaurant chain', 'A new smartphone'], answer: 1,
            explain: 'Tallyport est « <i>the online scheduling tool</i> » (l’outil de planification en ligne) : une <b>application de planning</b> pour organiser les horaires du personnel. (D) Piège : on entend <i>smartphones</i>, mais l’outil s’utilise <b>sur</b> les smartphones, la publicité ne vend pas de téléphone.' },
          { q: "What is special about this month's offer?", options: ['The price has been cut in half.', 'New customers receive a free phone.', 'The free trial lasts longer than usual.', 'Setup is done by a specialist.'], answer: 2,
            explain: '« <i>this month only, new customers can try Tallyport free for sixty days. That’s twice as long as our usual free trial!</i> » → l’essai gratuit dure <b>deux fois plus longtemps</b> que d’habitude. (A) Piège : <i>twice</i> (deux fois plus) n’a rien à voir avec un prix divisé par deux.' },
          { q: 'According to the speaker, what can customers do at any time?', options: ['Visit a local office', 'Download a user guide', 'Change their subscription plan', 'Contact the support team'], answer: 3,
            explain: '« <i>our support team is available around the clock by phone or online chat</i> » : <i>around the clock</i> = 24 h sur 24, donc <b>à tout moment</b> (<i>at any time</i>). Une expression fréquente au TOEIC !' }
        ]
      },
      {
        accent: 'en-US', speaker: 'M',
        intro: 'Questions refer to the following news report.',
        text: "And now for the local business news. Last night, the city council approved plans to build a convention center on the site of the old Riverside paper mill. The center will include a large exhibition hall and a four-hundred-room hotel, and it's expected to open in about three years. According to council member Beatriz Ortega, the project will create more than a thousand jobs during construction alone. However, some residents living near the site are worried that the center will bring heavy traffic to their neighborhood. A public meeting to discuss their concerns will be held at City Hall next Monday evening. In the meantime, the full plans can be viewed on the city's website. Stay with us: after the break, we'll have this weekend's weather forecast.",
        questions: [
          { q: 'What is the report mainly about?', options: ['The closure of a paper mill', 'A new hotel opening next month', 'A planned construction project', 'The results of a local election'], answer: 2,
            explain: 'Le conseil municipal a approuvé « <i>plans to build a convention center</i> » (le projet de construction d’un centre de congrès) : c’est le sujet principal. (A) Piège : l’ancienne papeterie (<i>paper mill</i>) n’est que l’emplacement. (B) L’hôtel fait partie du projet et n’ouvrira que dans trois ans environ.' },
          { q: 'What are some residents concerned about?', options: ['Increased traffic', 'Higher rents', 'Job losses', 'Noise during construction'], answer: 0,
            explain: '« <i>some residents … are worried that the center will bring heavy traffic to their neighborhood</i> » : ils craignent une <b>hausse de la circulation</b>. (C) Faux : au contraire, le projet va créer plus de mille emplois.' },
          { q: 'What will happen next Monday?', options: ['Construction will begin.', 'The plans will be posted online.', 'A council member will be elected.', 'Residents will be able to express their concerns.'], answer: 3,
            explain: 'Lundi soir, une réunion publique aura lieu « <i>to discuss their concerns</i> » (pour discuter de leurs inquiétudes) : les habitants pourront <b>exprimer leurs préoccupations</b>. (B) Piège : les plans sont <b>déjà</b> consultables en ligne (<i>In the meantime, the full plans can be viewed…</i>).' }
        ]
      },
      {
        accent: 'en-US', speaker: 'W',
        intro: 'Questions refer to the following tour information.',
        text: "Good afternoon, and welcome to Pellworth Cycles. My name is Grace, and I'll be showing you around our factory today. Pellworth has been building bicycles here since 1962, and we now produce about three hundred bikes a day. We'll start in the design studio, then move on to the assembly line, and we'll finish in our test area, where you'll be able to ride one of our new electric models. Before we go in, please make sure you're wearing the safety glasses we handed out at reception. Now, on the assembly line, the machines are quite loud. You've each been given a headset, so please keep it on and stay close to me. Oh, and at the end of the tour, every visitor will receive a voucher for twenty percent off any purchase in our factory store.",
        questions: [
          { q: 'What will the listeners do at the end of the tour?', options: ['Watch a short film', 'Meet a bicycle designer', 'Try out a bicycle', 'Have lunch in a cafeteria'], answer: 2,
            explain: '« <i>we’ll finish in our test area, where you’ll be able to ride one of our new electric models</i> » (nous terminerons dans la zone d’essai, où vous pourrez rouler sur l’un de nos nouveaux modèles électriques) → <b>essayer un vélo</b>. (B) Piège : le studio de design est au <b>début</b> de la visite, et aucune rencontre avec un designer n’est annoncée.' },
          { q: 'Why does the speaker say, "the machines are quite loud"?', options: ['To apologize for a delay', 'To explain why the listeners have headsets', 'To suggest that the factory needs new equipment', 'To recommend visiting on another day'], answer: 1,
            explain: 'Question d’intention : écoute ce qui suit la phrase citée. Juste après, la guide ajoute : « <i>You’ve each been given a headset, so please keep it on</i> » (on vous a remis un casque audio, gardez-le sur les oreilles). Elle parle du bruit pour <b>expliquer pourquoi</b> les visiteurs ont un casque. Rien n’indique qu’il faudrait changer les machines (C).' },
          { q: 'What will every visitor receive?', options: ['A discount on store purchases', 'A free bicycle helmet', 'A product catalog', 'A company T-shirt'], answer: 0,
            explain: '« <i>every visitor will receive a voucher for twenty percent off any purchase in our factory store</i> » : un bon de 20 % sur les achats à la boutique de l’usine = <b>une réduction</b> (<i>a discount</i>). Aucun autre cadeau n’est mentionné.' }
        ]
      }
    ] }
  ]
});
