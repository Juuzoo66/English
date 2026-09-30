LE.register({
  id: 'g45',
  kind: 'grammar',
  title: 'Les prépositions clés du TOEIC : by, until, within, during, among…',
  subtitle: 'Au plus tard, jusqu’à, pendant, dans un délai de, parmi… : les petits mots qui font gagner des points en Partie 5',
  level: 'B1',
  minutes: 55,
  goals: [
    'Ne plus confondre <b>by</b> (au plus tard) et <b>until</b> (jusqu’à), le piège n° 1 du TOEIC',
    'Traduire « pendant », « dans », « d’ici », « depuis » et « au bout de » avec <b>for, during, while, within, in, since, after, as of…</b>',
    'Situer dans l’espace avec <b>among, between, across, through, opposite…</b> et ne plus confondre <b>beside</b> et <b>besides</b>',
    'Appliquer la méthode TOEIC : regarder <b>ce qui suit le trou</b> (une date, une durée, un nom ou une proposition)'
  ],
  blocks: [
    { type: 'h', text: 'Pourquoi ces prépositions sont-elles si importantes ?' },
    { type: 'p', html: 'Tu connais déjà <b>in, on, at</b> (leçon « In, on, at : le lieu et le temps ») et les prépositions imposées par un mot précis, comme <i>depend <b>on</b></i> ou <i>responsible <b>for</b></i> (leçon « Les prépositions après verbes, noms et adjectifs »). Ici, on s’attaque aux autres prépositions de <b>temps</b> et de <b>lieu</b> que le TOEIC adore : <i>by, until, for, during, within, throughout, among, between, besides…</i> La difficulté vient presque toujours du français : <b>un seul mot français correspond à plusieurs mots anglais</b>. « Pendant » peut se dire <b>for</b>, <b>during</b> ou <b>while</b> ; « dans » peut se dire <b>in</b> ou <b>within</b> ; et « d’ici vendredi » se dit <b>by</b> Friday, alors que « jusqu’à vendredi » se dit <b>until</b> Friday. Bonne nouvelle : le choix obéit à des règles simples, et surtout à <b>ce qui suit</b> la préposition.' },

    { type: 'h', text: 'By ou until ? Le piège n° 1' },
    { type: 'p', html: '<b>By</b> fixe une <b>date limite</b> (une <i>deadline</i>) : l’action doit avoir lieu <b>au plus tard</b> à ce moment-là, et peut très bien se produire avant. En français : « d’ici », « au plus tard », « avant ». On l’emploie avec des actions <b>ponctuelles</b> (qui se font en un instant) : <i>finish, send, submit, pay, arrive, reply</i>. <b>Until</b> (ou <b>till</b>, plus familier) indique qu’une action ou une situation <b>dure sans interruption jusqu’à</b> ce moment, puis s’arrête : <i>stay, wait, work, be open, last, remain</i>. Le test le plus simple : remplace par « au plus tard ». Si la phrase garde son sens, c’est <b>by</b>.' },
    { type: 'table', head: ['', '<b>by</b>', '<b>until / till</b>'], rows: [
      ['Sens', 'au plus tard, d’ici, avant (date limite)', 'jusqu’à (sans interruption)'],
      ['Question à se poser', 'Pour quand, au plus tard ?', 'Jusqu’à quand ça dure ?'],
      ['Verbes typiques', 'action <b>ponctuelle</b> : <i>finish, send, submit, pay, arrive, return, reply</i>', 'action ou état qui <b>dure</b> : <i>stay, wait, work, be open, last, remain, keep</i>'],
      ['Exemple', 'Send the invoice <b>by</b> Friday.', 'The offer is valid <b>until</b> Friday.'],
      ['Traduction', 'Envoie la facture d’ici vendredi (au plus tard vendredi).', 'L’offre est valable jusqu’à vendredi.'],
      ['Devant sujet + verbe', '<b>by the time</b> (« quand… déjà », « le temps que »)', '<b>until</b> (« jusqu’à ce que »)']
    ], caption: 'Au négatif, <b>not… until</b> veut dire « pas avant » ou « ne… que » : <i>The parts won’t arrive <b>until</b> Monday.</i> = Les pièces n’arriveront pas avant lundi (elles n’arriveront que lundi).' },
    { type: 'examples', items: [
      { en: 'The report must be finished by Thursday.', fr: 'Le rapport doit être terminé d’ici jeudi.', note: 'Au plus tard jeudi : il peut très bien être fini mardi.' },
      { en: 'Applications must be received no later than May 15.', fr: 'Les candidatures doivent nous parvenir au plus tard le 15 mai.', note: '<b>no later than</b> = <i>by</i>, en plus formel.' },
      { en: 'Ms. Diallo will be in Berlin until Wednesday.', fr: 'Mme Diallo sera à Berlin jusqu’à mercredi.' },
      { en: "We'll wait until the manager arrives.", fr: 'Nous allons attendre jusqu’à ce que la responsable arrive.', note: 'Après <i>until</i> + sujet + verbe, le présent remplace le futur : jamais <span class="ko">until the manager will arrive</span>.' },
      { en: "The new printer won't be delivered until next week.", fr: 'La nouvelle imprimante ne sera pas livrée avant la semaine prochaine.', note: '<b>not… until</b> = pas avant.' },
      { en: 'By the time we arrived, the meeting had already started.', fr: 'Quand nous sommes arrivés, la réunion avait déjà commencé.' }
    ] },
    { type: 'box', style: 'warn', title: 'Pièges des francophones', html: '• Pour une date limite, le français dit « d’ici », « avant » ou « au plus tard »… et l’anglais dit <b>by</b>, jamais <i>until</i> : <span class="ko">Please submit the file until Friday.</span> → <span class="ok">Please submit the file <b>by</b> Friday.</span><br>• « Tu as jusqu’à vendredi pour… » se dit bien avec <b>until</b>, car ici c’est le délai qui <b>dure</b> : <i>You have <b>until</b> Friday to submit the file.</i> = <i>Submit the file <b>by</b> Friday.</i><br>• <b>not… until</b> = « pas avant » : <i>We can’t start <b>until</b> everyone is here.</i> (On ne peut pas commencer avant que tout le monde soit là.)<br>• « Jusqu’à » + un <b>lieu</b> ne se dit pas <i>until</i> : <span class="ko">Walk until the bank.</span> → <span class="ok">Walk <b>to</b> the bank.</span> / <span class="ok">Walk <b>as far as</b> the bank.</span><br>• En anglais américain, <b>through</b> veut dire « jusqu’à… inclus » : <i>Monday <b>through</b> Friday</i> (du lundi au vendredi inclus).' },

    { type: 'h', text: 'For, during ou while : trois façons de dire « pendant »' },
    { type: 'p', html: 'Le français dit « pendant » dans trois cas que l’anglais distingue. Regarde ce qui suit : une <b>durée chiffrée</b> (<i>two hours, three days</i>) → <b>for</b> ; un <b>nom</b> d’événement ou de période (<i>the meeting, the summer, my stay</i>) → <b>during</b> ; une <b>proposition</b>, c’est-à-dire un sujet + un verbe conjugué (<i>you were at lunch</i>) → <b>while</b> (« pendant que »). <b>For</b> répond à la question « combien de temps ? » ; <b>during</b> et <b>while</b> répondent à la question « quand ? ».' },
    { type: 'table', head: ['Mot', 'Suivi de', 'Exemple', 'Français'], rows: [
      ['<b>for</b>', 'une <b>durée chiffrée</b> : <i>two hours, ten days, a week</i>', 'The meeting lasted <b>for</b> three hours.', 'La réunion a duré trois heures.'],
      ['<b>during</b>', 'un <b>nom</b> (événement, période) : <i>the meeting, the flight, the summer</i>', 'Please turn off your phone <b>during</b> the meeting.', 'Merci d’éteindre votre téléphone pendant la réunion.'],
      ['<b>while</b>', '<b>sujet + verbe</b> conjugué (ou verbe en <b>-ing</b>)', 'Someone called <b>while</b> you were at lunch.', 'Quelqu’un a appelé pendant que tu déjeunais.']
    ], caption: '<b>During</b> peut désigner toute la période (<i>I slept during the flight</i>) ou un moment à l’intérieur de cette période (<i>He called during the meeting</i> : à un moment de la réunion).' },
    { type: 'examples', items: [
      { en: 'I lived in Toronto for five years.', fr: 'J’ai vécu à Toronto pendant cinq ans.' },
      { en: 'We visited three factories during our trip to Mexico.', fr: 'Nous avons visité trois usines pendant notre voyage au Mexique.' },
      { en: 'Mr. Adeyemi took notes during the conference call.', fr: 'M. Adeyemi a pris des notes pendant la conférence téléphonique.' },
      { en: 'Please wait here while I check your reservation.', fr: 'Veuillez patienter ici pendant que je vérifie votre réservation.' },
      { en: 'She answered her e-mails while waiting for her flight.', fr: 'Elle a répondu à ses e-mails en attendant son vol.', note: '<i>while</i> + <b>-ing</b> quand les deux verbes ont le même sujet : <i>while (she was) waiting</i>.' },
      { en: 'The store will close for two days during the renovation.', fr: 'Le magasin fermera deux jours durant les travaux.', note: '<b>for</b> + durée et <b>during</b> + nom dans la même phrase.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : traduire « pendant » mot à mot', html: '<span class="ko">during two hours</span> → <span class="ok">for two hours</span> (durée chiffrée)<br><span class="ko">during I was on vacation</span> → <span class="ok">while I was on vacation</span> (sujet + verbe)<br><span class="ko">while the meeting</span> → <span class="ok">during the meeting</span> (nom seul)<br>Et attention : <b>for</b> + <b>present perfect</b> veut dire « depuis » : <i>I’ve worked here <b>for</b> two years</i> = je travaille ici depuis deux ans (voir la leçon « Present perfect ou prétérit ? (for, since, yet, already…) »).' },

    { type: 'h', text: 'Délais et durées : within, in, after, over, throughout' },
    { type: 'p', html: '<b>Within</b> + durée veut dire « <b>dans un délai de</b> », « <b>en moins de</b> », « <b>sous</b> » : <i>within 30 days</i> = pas plus de 30 jours, peut-être moins. Ne le confonds pas avec <b>in</b> + durée, qui indique <b>quand</b> une chose arrivera (« dans trois jours ») ou le temps nécessaire (« en trois jours »), ni avec <b>after</b> + durée (« au bout de »). <b>Within</b> exprime aussi une <b>limite</b> dans l’espace ou dans un cadre : <i>within walking distance</i> (à quelques minutes à pied), <i>within budget</i> (sans dépasser le budget). Enfin, <b>over</b> + période = « au cours de » (<i>over the past five years</i>) et <b>throughout</b> = « <b>tout au long de</b> » (le temps) ou « <b>partout dans</b> » (le lieu).' },
    { type: 'table', head: ['Français', 'Anglais', 'Exemple'], rows: [
      ['<b>dans</b> trois jours (moment futur)', '<b>in</b> three days', 'The results will be ready <b>in</b> three days.'],
      ['<b>en</b> trois jours (temps nécessaire)', '<b>in</b> three days', 'They built the stand <b>in</b> three days.'],
      ['<b>d’ici</b> trois jours, <b>sous</b> trois jours, <b>dans un délai de</b> trois jours', '<b>within</b> three days', 'You will receive a reply <b>within</b> three days.'],
      ['<b>d’ici</b> vendredi, <b>au plus tard</b> vendredi', '<b>by</b> Friday', 'Please reply <b>by</b> Friday.'],
      ['<b>au bout de</b> trois jours', '<b>after</b> three days', 'He got a reply <b>after</b> three days.'],
      ['<b>pendant</b> trois jours', '<b>for</b> three days', 'The office was closed <b>for</b> three days.'],
      ['<b>depuis</b> trois jours', '<b>for</b> three days + present perfect', 'The printer has been broken <b>for</b> three days.'],
      ['<b>il y a</b> trois jours', 'three days <b>ago</b> + prétérit', 'The parcel arrived three days <b>ago</b>.'],
      ['<b>au cours des</b> trois derniers mois', '<b>over</b> the past three months', 'Prices have risen <b>over</b> the past three months.'],
      ['<b>tout au long de</b> l’année', '<b>throughout</b> the year', 'The museum is open <b>throughout</b> the year.']
    ], caption: 'Retiens le trio : <b>in</b> three days = dans trois jours (à ce moment-là) ; <b>within</b> three days = en trois jours maximum ; <b>after</b> three days = une fois les trois jours écoulés.' },
    { type: 'examples', items: [
      { en: 'Customers can return items within 30 days of purchase.', fr: 'Les clients peuvent retourner les articles dans les 30 jours suivant l’achat.', note: '<i>within</i> + durée + <b>of</b> + point de départ.' },
      { en: 'Several good restaurants are within walking distance of our office.', fr: 'Il y a plusieurs bons restaurants à quelques minutes à pied de notre bureau.' },
      { en: 'The project was completed on time and within budget.', fr: 'Le projet a été terminé dans les délais et sans dépasser le budget.' },
      { en: 'The technician will be here in twenty minutes.', fr: 'Le technicien sera là dans vingt minutes.' },
      { en: 'The number of online orders has tripled over the past two years.', fr: 'Le nombre de commandes en ligne a triplé au cours des deux dernières années.', note: '<b>over</b> + période : très fréquent au TOEIC, souvent avec le present perfect.' },
      { en: 'Refreshments will be available throughout the conference.', fr: 'Des rafraîchissements seront proposés tout au long de la conférence.' },
      { en: 'Our company has offices throughout Asia.', fr: 'Notre entreprise a des bureaux partout en Asie.' }
    ] },

    { type: 'h', text: 'Point de départ : since, from… to, as of, ago' },
    { type: 'p', html: '<b>Since</b> = « depuis » + un <b>point de départ</b>, avec le present perfect : <i>We’ve been partners <b>since</b> 2018.</i> Pour donner un <b>début et une fin</b>, on utilise <b>from… to</b> ou <b>from… until</b> : <i>from 9 a.m. to 5 p.m.</i> Pour annoncer officiellement un changement qui commence à une date, l’anglais des affaires adore <b>as of</b> (« à compter de », « à partir de ») : <i><b>As of</b> May 1, the office will open at 8 a.m.</i> (on dit aussi <i>starting May 1</i> ou <i>effective May 1</i>). Enfin, <b>ago</b> (« il y a ») se place <b>après</b> la durée et s’emploie avec le prétérit : <i>two weeks <b>ago</b></i>.' },
    { type: 'examples', items: [
      { en: 'Mr. Adeyemi has been our sales director since 2021.', fr: 'M. Adeyemi est notre directeur commercial depuis 2021.' },
      { en: 'The trade fair runs from June 3 to June 5.', fr: 'Le salon a lieu du 3 au 5 juin.' },
      { en: 'Our help desk is open from 8 a.m. until 6 p.m.', fr: 'Notre service d’assistance est ouvert de 8 h à 18 h.' },
      { en: 'As of July 1, all invoices must be sent electronically.', fr: 'À compter du 1<sup>er</sup> juillet, toutes les factures devront être envoyées par voie électronique.' },
      { en: 'As of today, 250 people have registered for the event.', fr: 'À ce jour, 250 personnes se sont inscrites à l’événement.', note: 'Avec un moment présent ou passé, <i>as of</i> = « à la date de », « à ce jour » (<i>as of today</i>).' },
      { en: 'I called the supplier two days ago.', fr: 'J’ai appelé le fournisseur il y a deux jours.' }
    ] },
    { type: 'box', style: 'warn', title: 'Pièges : since, from, between et ago', html: '• « À partir de lundi » (dans le futur) ne se dit <b>pas</b> <i>since</i> : <span class="ko">The office will be closed since Monday.</span> → <span class="ok">The office will be closed <b>from</b> Monday.</span> / <span class="ok"><b>as of</b> Monday</span> / <span class="ok"><b>starting</b> Monday</span>.<br>• « Depuis » + point de départ ne se dit pas <i>from</i> : <span class="ko">I have worked here from 2020.</span> → <span class="ok">I have worked here <b>since</b> 2020.</span><br>• Les paires sont fixes : <b>from</b>… <b>to</b> / <b>until</b>, mais <b>between</b>… <b>and</b> : <span class="ko">between Monday to Friday</span> → <span class="ok">between Monday <b>and</b> Friday</span>.<br>• <span class="ko">since three years</span> → <span class="ok">for three years</span> ; <span class="ko">ago three years</span> → <span class="ok">three years ago</span>.' },

    { type: 'h', text: 'Avant, après, dès, au-delà : prior to, following, upon, beyond' },
    { type: 'table', head: ['Mot', 'Sens', 'Registre et construction', 'Exemple'], rows: [
      ['<b>before</b>', 'avant', 'courant ; + nom, <b>-ing</b> ou sujet + verbe', '<b>before</b> the meeting / <b>before</b> leaving / <b>before</b> you leave'],
      ['<b>prior to</b>', 'avant, préalablement à', 'formel ; + nom ou <b>-ing</b> (jamais sujet + verbe)', '<b>prior to</b> departure / <b>prior to</b> signing'],
      ['<b>after</b>', 'après', 'courant ; + nom, <b>-ing</b> ou sujet + verbe', '<b>after</b> lunch / <b>after</b> checking / <b>after</b> we signed'],
      ['<b>following</b>', 'après, à la suite de', 'formel ; + nom (très fréquent au TOEIC)', '<b>following</b> the merger (après la fusion)'],
      ['<b>upon</b> / <b>on</b>', 'dès, au moment de ; sur (demande)', 'formel ; + nom ou <b>-ing</b>', '<b>upon</b> arrival (dès l’arrivée) / <b>upon</b> request (sur demande)'],
      ['<b>beyond</b>', 'au-delà de, après (une limite)', '+ date, heure, limite', '<b>beyond</b> the deadline / <b>beyond</b> our control (indépendant de notre volonté)']
    ], caption: '<b>Following</b> ressemble à « suivant », mais comme préposition il veut dire <b>après</b> : <i>Following the presentation, lunch will be served.</i> = Après la présentation, le déjeuner sera servi. (Dans <i>the following day</i> = le lendemain, c’est un adjectif.)' },
    { type: 'examples', items: [
      { en: 'Please read the contract carefully prior to signing it.', fr: 'Veuillez lire attentivement le contrat avant de le signer.' },
      { en: 'Following the merger, several departments were reorganized.', fr: 'Après la fusion, plusieurs services ont été réorganisés.' },
      { en: 'Please show your ticket upon arrival.', fr: 'Merci de présenter votre billet dès votre arrivée.' },
      { en: 'Your order will be shipped upon receipt of payment.', fr: 'Votre commande sera expédiée dès réception du paiement.' },
      { en: 'Free samples are available upon request.', fr: 'Des échantillons gratuits sont disponibles sur demande.' },
      { en: 'Unfortunately, the delay was beyond our control.', fr: 'Malheureusement, ce retard était indépendant de notre volonté.' },
      { en: 'The warranty cannot be extended beyond three years.', fr: 'La garantie ne peut pas être prolongée au-delà de trois ans.' }
    ] },

    { type: 'h', text: 'Le lieu : among, between, across, through, opposite…' },
    { type: 'table', head: ['Préposition', 'Sens', 'Exemple', 'Français'], rows: [
      ['<b>between</b>', 'entre deux éléments (ou plusieurs éléments <b>distincts</b>, cités un par un)', 'The bank is <b>between</b> the hotel and the post office.', 'La banque est entre l’hôtel et la poste.'],
      ['<b>among</b>', 'parmi, au milieu de (un groupe de plus de deux)', 'She was <b>among</b> the first to arrive.', 'Elle était parmi les premiers à arriver.'],
      ['<b>across</b>', 'd’un côté à l’autre, en traversant ; de l’autre côté de', 'Walk <b>across</b> the bridge.', 'Traverse le pont.'],
      ['<b>along</b>', 'le long de', 'There are shops <b>along</b> the river.', 'Il y a des boutiques le long de la rivière.'],
      ['<b>through</b>', 'à travers, en passant par (l’intérieur)', 'Go <b>through</b> the lobby.', 'Passe par le hall.'],
      ['<b>past</b>', 'devant, au-delà de (en passant devant)', 'Walk <b>past</b> the bank.', 'Passe devant la banque (et continue).'],
      ['<b>opposite</b> / <b>across from</b> (US)', 'en face de (de l’autre côté)', 'The café is <b>opposite</b> the station.', 'Le café est en face de la gare.'],
      ['<b>in front of</b>', 'devant (juste devant)', 'Meet me <b>in front of</b> the entrance.', 'Retrouve-moi devant l’entrée.'],
      ['<b>next to</b> / <b>beside</b>', 'à côté de', 'The printer is <b>next to</b> the window.', 'L’imprimante est à côté de la fenêtre.'],
      ['<b>above</b> / <b>over</b>', 'au-dessus de ; <b>over</b> = aussi « par-dessus », « plus de »', 'The clock is <b>above</b> the door. / <b>over</b> 500 employees', 'L’horloge est au-dessus de la porte. / plus de 500 salariés'],
      ['<b>below</b> / <b>under</b>', 'en dessous de ; <b>under</b> = aussi « sous » (couvert), « moins de »', 'Write your name <b>below</b> the line. / <b>under</b> $50', 'Écris ton nom sous la ligne. / moins de 50 dollars']
    ], caption: '<b>Above / below</b> = plus haut / plus bas sur une échelle (<i>above average</i> = au-dessus de la moyenne, <i>below zero</i> = en dessous de zéro). <b>Over / under</b> = juste au-dessus / juste en dessous, souvent en couvrant (<i>a bridge over the river</i>, <i>under the desk</i>). À connaître aussi : <i>under construction</i> (en travaux), <i>under warranty</i> (sous garantie).' },
    { type: 'examples', items: [
      { en: 'The conference room is at the end of the hall, past the elevators.', fr: 'La salle de conférence est au bout du couloir, après les ascenseurs.' },
      { en: 'Our office is across the street from the city library.', fr: 'Notre bureau est de l’autre côté de la rue, en face de la bibliothèque municipale.' },
      { en: 'The new app is very popular among young customers.', fr: 'La nouvelle application est très appréciée des jeunes clients.' },
      { en: 'The profits were divided equally between the two partners.', fr: 'Les bénéfices ont été partagés à parts égales entre les deux associés.' },
      { en: 'All visitors must go through security.', fr: 'Tous les visiteurs doivent passer par le contrôle de sécurité.' },
      { en: 'Walk along the river for about five minutes.', fr: 'Longe la rivière pendant environ cinq minutes.' },
      { en: 'Our sales were above average this year.', fr: 'Nos ventes ont été supérieures à la moyenne cette année.' },
      { en: 'Children under 12 travel free.', fr: 'Les enfants de moins de 12 ans voyagent gratuitement.' }
    ] },
    { type: 'box', style: 'warn', title: 'Pièges : besides, in front of, between', html: '• <b>beside</b> = à côté de ; <b>besides</b> (avec un <b>s</b>) = <b>en plus de</b>, à part : <i><b>Besides</b> English, she speaks Korean.</i> (En plus de l’anglais, elle parle coréen.) Un seul <i>s</i> change tout !<br>• « En face de » ne se dit pas <i>in front of</i>, qui veut dire « <b>juste devant</b> » (du même côté de la rue) : <span class="ko">The bank is in front of the hotel.</span> → <span class="ok">The bank is <b>opposite</b> the hotel.</span> / <span class="ok">The bank is <b>across from</b> the hotel.</span><br>• <b>between</b> : deux éléments, ou plusieurs éléments cités un par un (<i>an agreement <b>between</b> France, Spain and Italy</i>) ; <b>among</b> : un groupe vu comme un ensemble (<i><b>among</b> our clients</i>, <i><b>among</b> the candidates</i>).' },

    { type: 'h', text: 'Les prépositions du monde des affaires : per, via, except, including…' },
    { type: 'table', head: ['Préposition', 'Sens', 'Exemple', 'Français'], rows: [
      ['<b>per</b>', 'par (prix, quantité, fréquence)', 'We charge $20 <b>per</b> hour.', 'Nous facturons 20 dollars de l’heure.'],
      ['<b>via</b>', 'par, via (un moyen, un lieu de passage)', 'Send the file <b>via</b> e-mail. / We flew to Lima <b>via</b> Miami.', 'Envoie le fichier par e-mail. / Nous sommes allés à Lima en passant par Miami.'],
      ['<b>except</b> / <b>except for</b>', 'sauf, à part', 'The store is open every day <b>except</b> Sunday.', 'Le magasin est ouvert tous les jours sauf le dimanche.'],
      ['<b>including</b>', 'y compris, dont', 'The price is $80, <b>including</b> tax.', 'Le prix est de 80 dollars, taxes comprises.'],
      ['<b>excluding</b>', 'hors, sans compter', 'The price is $80, <b>excluding</b> tax.', 'Le prix est de 80 dollars hors taxes.'],
      ['<b>regarding</b> / <b>concerning</b>', 'au sujet de, concernant', 'I’m writing <b>regarding</b> your order.', 'Je vous écris au sujet de votre commande.']
    ], caption: 'Après un mot général (<i>every, all, any, no, everyone, nothing…</i>), on peut dire <b>except</b> ou <b>except for</b> : <i>everyone <b>except</b> Tom</i>. En <b>début de phrase</b>, seulement <b>except for</b> : <i><b>Except for</b> a few typos, the report is perfect.</i> (À part quelques fautes de frappe, le rapport est parfait.)' },
    { type: 'examples', items: [
      { en: 'Parking costs $12 per day.', fr: 'Le parking coûte 12 dollars par jour.' },
      { en: 'You can pay via our secure website.', fr: 'Vous pouvez payer via notre site sécurisé.' },
      { en: 'Everyone except Mr. Ito attended the training session.', fr: 'Tout le monde, sauf M. Ito, a assisté à la formation.' },
      { en: 'The tour costs $150, including lunch and transportation.', fr: 'La visite coûte 150 dollars, déjeuner et transport compris.' },
      { en: 'All prices are shown excluding tax.', fr: 'Tous les prix sont indiqués hors taxes.' },
      { en: 'Please contact Ms. Varga regarding the new schedule.', fr: 'Merci de contacter Mme Varga au sujet du nouveau planning.' },
      { en: 'We have received several complaints concerning the noise.', fr: 'Nous avons reçu plusieurs plaintes concernant le bruit.' }
    ] },
    { type: 'dialog', title: 'Organiser une livraison', lines: [
      { speaker: 'M', en: "Hi Priya, it's Marco from Norvell Office Furniture. I'm calling regarding your order of twenty desks.", fr: 'Bonjour Priya, c’est Marco, de Norvell Office Furniture. Je vous appelle au sujet de votre commande de vingt bureaux.' },
      { speaker: 'W', en: "Hi Marco. Will they arrive by Friday? We're moving into our new office on Monday.", fr: 'Bonjour Marco. Ils arriveront d’ici vendredi ? Nous emménageons dans nos nouveaux locaux lundi.' },
      { speaker: 'M', en: "I'm afraid not. Our warehouse is closed until Thursday for inventory. We can deliver them on Saturday, if that works for you.", fr: 'J’ai bien peur que non. Notre entrepôt est fermé jusqu’à jeudi pour l’inventaire. Nous pouvons vous les livrer samedi, si cela vous convient.' },
      { speaker: 'W', en: 'Saturday is fine. The building is open from 9 a.m. to 1 p.m. Is there an extra charge for weekend delivery?', fr: 'Samedi, c’est parfait. Le bâtiment est ouvert de 9 h à 13 h. Y a-t-il un supplément pour une livraison le week-end ?' },
      { speaker: 'M', en: "Normally it's forty dollars per hour, but there's no charge this time because of the delay. Where should the driver park?", fr: 'Normalement, c’est quarante dollars de l’heure, mais ce sera gratuit cette fois, à cause du retard. Où le chauffeur doit-il se garer ?' },
      { speaker: 'W', en: "There's a loading area behind the building, opposite the bank. Please call me upon arrival.", fr: 'Il y a une aire de livraison derrière le bâtiment, en face de la banque. Merci de m’appeler dès votre arrivée.' },
      { speaker: 'M', en: "Will do. I'll send you a confirmation via e-mail within the hour.", fr: 'Entendu. Je vous envoie une confirmation par e-mail dans l’heure.' }
    ] },

    { type: 'h', text: 'Au TOEIC : regarde le mot d’après' },
    { type: 'table', head: ['Après le trou, il y a…', 'Pense à…', 'Exemple'], rows: [
      ['une <b>date</b> ou une <b>heure</b> (<i>Friday, May 1, noon</i>)', '<b>by</b> (date limite), <b>until</b> (ça dure), <b>on</b> (jour, date), <b>since</b> (+ present perfect), <b>as of</b> (à compter de)', 'Submit the form <b>by</b> May 1.'],
      ['une <b>durée chiffrée</b> (<i>three days, two weeks</i>)', '<b>for</b> (combien de temps), <b>within</b> (délai maximum), <b>in</b> (dans, en), <b>after</b> (au bout de)', 'You will be contacted <b>within</b> two weeks.'],
      ['un <b>nom</b> d’événement ou de période (<i>the meeting, the holidays</i>)', '<b>during</b>, <b>throughout</b>, <b>prior to</b>, <b>following</b>, <b>upon</b>', 'No photos are allowed <b>during</b> the tour.'],
      ['un <b>sujet + verbe conjugué</b> (<i>you are, we arrive</i>)', 'une <b>conjonction</b> : <b>while</b>, <b>until</b>, <b>before</b>, <b>after</b>, <b>since</b>, <b>by the time</b> — jamais <i>during, prior to, following</i> ni <i>by</i> seul', 'Please wait <b>while</b> we process your request.'],
      ['un verbe en <b>-ing</b> (<i>signing, entering</i>)', '<b>before</b>, <b>after</b>, <b>prior to</b>, <b>upon</b>, <b>while</b>, <b>since</b>', 'Read the manual <b>prior to</b> using the device.']
    ], caption: 'Puis vérifie le <b>sens</b> : « au plus tard » → <b>by</b> ; « sans interruption jusqu’à » → <b>until</b> ; « parmi » → <b>among</b> ; « en plus de » → <b>besides</b>.' },
    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 5</b>, les quatre options sont souvent des prépositions ou des conjonctions de temps : <i>Please keep your seat belt fastened ------- the flight.</i> (A) while (B) during (C) since (D) by → un nom (<i>the flight</i>), ni date ni sujet + verbe → <b>during</b>. Les pièges favoris : <b>by / until</b>, <b>for / during / while</b>, <b>among / between</b> et <b>beside / besides</b>. En <b>Partie 7</b>, les annonces et les e-mails regorgent de <i>as of, prior to, following, upon, within</i> et <i>no later than</i> : ce sont les mots-clés qui te donnent les <b>dates</b> et les <b>délais</b> demandés dans les questions (<i>By when must…? When will…?</i>).' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• <b>by</b> = au plus tard (date limite, action ponctuelle) ; <b>until</b> = jusqu’à (ça dure) ; <b>not… until</b> = pas avant.<br>• « Pendant » : <b>for</b> + durée ; <b>during</b> + nom ; <b>while</b> + sujet + verbe.<br>• <b>within</b> 30 days = dans un délai de 30 jours ; <b>in</b> three days = dans trois jours ; <b>after</b> three days = au bout de trois jours ; <b>over</b> the past year = au cours de l’année écoulée ; <b>throughout</b> = tout au long de, partout dans.<br>• <b>since</b> + point de départ (present perfect) ; <b>from… to</b> ; <b>between… and</b> ; <b>as of</b> May 1 = à compter du 1<sup>er</sup> mai ; two days <b>ago</b> = il y a deux jours.<br>• Formel : <b>prior to</b> = before ; <b>following</b> = after ; <b>upon</b> arrival = dès l’arrivée ; <b>beyond</b> = au-delà de.<br>• Lieu : <b>between</b> (deux, ou éléments distincts) / <b>among</b> (un groupe) ; <b>opposite</b> = en face de ≠ <b>in front of</b> = devant ; <b>beside</b> = à côté de ≠ <b>besides</b> = en plus de.<br>• Affaires : <b>per</b> hour, <b>via</b> e-mail, <b>except (for)</b>, <b>including / excluding</b> tax, <b>regarding / concerning</b> your order.' }
  ],
  exercises: [
    { type: 'mcq', q: 'Comment dit-on « Envoie-moi le rapport d’ici vendredi » ?', options: ['Send me the report until Friday.', 'Send me the report by Friday.', 'Send me the report within Friday.', 'Send me the report since Friday.'], answer: 1, explain: '« D’ici vendredi » = <b>au plus tard</b> vendredi : c’est une date limite pour une action ponctuelle (envoyer) → <b>by</b>. <i>Until</i> voudrait dire que l’action d’envoyer dure jusqu’à vendredi, ce qui n’a pas de sens.' },
    { type: 'gap', q: 'The office is closed ___ Monday. (jusqu’à)', answers: ['until', 'till', 'through', 'up until'], explain: 'La fermeture <b>dure</b> jusqu’à lundi → <b>until</b> (ou <b>till</b>, plus familier). En américain, <i>through Monday</i> est aussi possible (fermé jusqu’à lundi inclus). <i>By</i> est impossible : ce n’est pas une date limite.' },
    { type: 'gap', q: 'The fire alarm went off ___ the meeting. (pendant)', answers: ['during'], explain: 'Après le trou vient un <b>nom</b> d’événement (<i>the meeting</i>), sans durée chiffrée ni sujet + verbe → <b>during</b>. <i>For</i> demande une durée (<i>for an hour</i>) et <i>while</i> une proposition (<i>while we were meeting</i>).' },
    { type: 'gap', q: 'Velmora Pharmacy has stores ___ the country. (partout dans)', answers: ['throughout', 'all over', 'across', 'all across', 'around', 'all around', 'everywhere in'], explain: '« Partout dans » + un lieu = <b>throughout</b> : <i>throughout the country</i>. <i>All over</i>, <i>across</i>, <i>around</i> et <i>everywhere in</i> sont aussi corrects ici. Avec une période, <i>throughout</i> veut dire « tout au long de » : <i>throughout the year</i>.' },
    { type: 'mcq', q: 'Comment dit-on « Le café est en face de la gare » (de l’autre côté de la rue) ?', options: ['The café is in front of the station.', 'The café is opposite the station.', 'The café is besides the station.', 'The café is among the station.'], answer: 1, explain: '« En face de » = <b>opposite</b> (ou <b>across from</b> en américain). <i>In front of</i> veut dire « juste devant », du même côté de la rue. <i>Besides</i> = en plus de ; <i>among</i> = parmi.' },
    { type: 'order', answer: 'The package will not arrive until next week.', alts: ['Until next week the package will not arrive.'], fr: 'Le colis n’arrivera pas avant la semaine prochaine.', explain: '<b>not… until</b> = « pas avant » : le colis n’arrivera qu’à partir de la semaine prochaine. <i>Until</i> se place après le verbe : <i>will not arrive until next week</i>.' },
    { type: 'order', answer: 'The hotel is within walking distance of the station.', alts: ['Within walking distance of the station is the hotel.'], fr: 'L’hôtel est à quelques minutes à pied de la gare.', explain: '<b>within walking distance of</b> + lieu = « à distance de marche de », « à quelques minutes à pied de ». <i>Within</i> indique une limite qu’on ne dépasse pas.' },
    { type: 'listen', say: "Hi Daniela, this is Kofi from Parkline Printing. Your brochures are ready. We're closed until Monday because of the holiday, so you can pick them up from Monday morning. Please collect them by Wednesday, because we can't keep orders after that.", accent: 'en-GB', q: 'Quand Daniela doit-elle venir chercher ses brochures, au plus tard ?', options: ['Avant lundi.', 'Lundi au plus tard.', 'Mercredi au plus tard.'], answer: 2, explain: '<i>We’re closed <b>until</b> Monday</i> : la boutique est fermée jusqu’à lundi, donc impossible de venir avant. <i>Please collect them <b>by</b> Wednesday</i> : <b>by</b> = date limite → au plus tard mercredi.' },
    { type: 'mcq', q: 'All travel expense reports must be submitted ------- March 31. <small>(style TOEIC)</small>', options: ['until', 'by', 'during', 'since'], answer: 1, explain: '<i>Submit</i> (remettre) est une action <b>ponctuelle</b> et <i>March 31</i> est une <b>date limite</b> → <b>by</b> (au plus tard le 31 mars). <i>Until</i> exigerait une action qui dure ; <i>during</i> demande une période ; <i>since</i> un point de départ avec le present perfect.' },
    { type: 'mcq', q: 'The east parking lot will be closed ------- ten days while the new lighting is installed. <small>(style TOEIC)</small>', options: ['during', 'since', 'for', 'by'], answer: 2, explain: 'Après le trou : une <b>durée chiffrée</b> (<i>ten days</i>) → <b>for</b>. <i>During</i> se construit avec un nom sans chiffre (<i>during the renovation</i>) ; <i>since</i> demande un point de départ ; <i>by</i> une date limite.' },
    { type: 'mcq', q: 'Please do not leave your bags unattended ------- you are in the terminal. <small>(style TOEIC)</small>', options: ['during', 'while', 'throughout', 'within'], answer: 1, explain: 'Le trou est suivi d’un <b>sujet + verbe conjugué</b> (<i>you are</i>) → il faut une <b>conjonction</b> : <b>while</b> (pendant que). <i>During</i>, <i>throughout</i> et <i>within</i> sont des prépositions : elles demandent un nom (<i>during your stay</i>).' },
    { type: 'mcq', q: 'Refunds are processed ------- five business days of receiving the returned item. <small>(style TOEIC)</small>', options: ['until', 'within', 'since', 'during'], answer: 1, explain: '<b>within</b> + durée + <b>of</b> + point de départ = « dans un délai de… à compter de » : le remboursement est traité en cinq jours ouvrés maximum. <i>Until</i>, <i>since</i> et <i>during</i> ne se construisent pas avec une durée suivie de <i>of</i>.' },
    { type: 'mcq', q: 'Arvello Consulting is ------- the fastest-growing firms in the region. <small>(style TOEIC)</small>', options: ['between', 'among', 'besides', 'across'], answer: 1, explain: '<b>among</b> = parmi (un groupe de plus de deux) : <i>among the fastest-growing firms</i> = l’une des entreprises à la plus forte croissance. <i>Between</i> s’emploie pour deux éléments (ou des éléments cités un par un) ; <i>besides</i> = en plus de ; <i>across</i> = à travers.' },
    { type: 'mcq', q: 'Guests are asked to present a valid photo ID ------- arrival at the front desk. <small>(style TOEIC)</small>', options: ['upon', 'while', 'since', 'among'], answer: 0, explain: '<b>upon arrival</b> = dès l’arrivée, à l’arrivée (formel ; on dit aussi <i>on arrival</i>). <i>While</i> demanderait sujet + verbe (<i>while you are</i>…) ; <i>since</i> exige un present perfect ; <i>among</i> = parmi.' },
    { type: 'mcq', q: '------- May 1, all employees will be required to wear their ID badges at all times. <small>(style TOEIC)</small>', options: ['Since', 'As of', 'During', 'Within'], answer: 1, explain: '<b>As of</b> + date = « à compter de », « à partir de » : on annonce un changement à venir. <i>Since</i> est impossible avec le futur (<i>will be required</i>) : il exige le present perfect. <i>During</i> et <i>within</i> ne s’emploient pas devant une date précise.' },
    { type: 'mcq', q: '------- its headquarters in Toronto, Lindqvist Partners has offices in Vancouver and Calgary. <small>(style TOEIC)</small>', options: ['Beside', 'Besides', 'Among', 'Across'], answer: 1, explain: '<b>Besides</b> (avec un <i>s</i>) = en plus de : en plus de son siège à Toronto, l’entreprise a des bureaux à Vancouver et à Calgary. <b>Beside</b> (sans <i>s</i>) = à côté de ; <i>among</i> = parmi ; <i>across</i> = à travers.' }
  ]
});
