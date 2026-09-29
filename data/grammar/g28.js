LE.register({
  id: 'g28',
  kind: 'grammar',
  title: 'Verbe + -ing ou verbe + to ?',
  subtitle: 'Choisir la bonne forme du deuxième verbe après enjoy, want, stop, look forward to…',
  level: 'B1',
  minutes: 50,
  goals: [
    'Savoir quels verbes courants sont suivis de <b>-ing</b> (<i>enjoy, finish, avoid…</i>) et lesquels de <b>to</b> + base verbale (<i>want, decide, plan…</i>)',
    'Construire <i>ask / tell / remind someone <b>to do</b></i> et <i>let / make someone <b>do</b></i>',
    'Comprendre les verbes qui changent de sens : <b>stop, remember, forget, try</b>',
    'Mettre le verbe en <b>-ing</b> après une préposition, y compris dans <i>look forward <b>to</b> seeing you</i>'
  ],
  blocks: [
    { type: 'h', text: 'Le problème : deux verbes qui se suivent' },
    { type: 'p', html: 'En français, quand deux verbes se suivent, le deuxième est toujours à l’<b>infinitif</b> : « J’aime <b>lire</b> », « Je veux <b>partir</b> », « J’ai fini de <b>manger</b> ». En anglais, le deuxième verbe peut prendre <b>deux formes</b>, et c’est le <b>premier verbe</b> qui décide :' },
    { type: 'list', items: [
      'la forme en <b>-ing</b> (on l’appelle le <b>gérondif</b> quand elle joue le rôle d’un nom) : <i>I enjoy <b>working</b>.</i> Même orthographe qu’au présent continu : <i>make → making, stop → stopping</i> ;',
      'l’infinitif avec <b>to</b> (<b>to</b> + base verbale) : <i>I want <b>to work</b>.</i>'
    ] },
    { type: 'examples', items: [
      { en: 'I enjoy working with this team.', fr: 'J’aime travailler avec cette équipe.' },
      { en: 'I want to work abroad.', fr: 'Je veux travailler à l’étranger.' },
      { en: 'She finished writing the report.', fr: 'Elle a fini d’écrire le rapport.' },
      { en: 'We decided to hire two new assistants.', fr: 'Nous avons décidé d’embaucher deux nouveaux assistants.' }
    ] },
    { type: 'box', style: 'tip', title: 'Une tendance pour t’aider', html: 'Il n’y a pas de règle absolue : il faut <b>apprendre les verbes</b> avec leur construction, comme on apprend le genre des noms en français. Mais il existe une tendance : <b>to</b> regarde souvent vers le <b>futur</b>, vers une action pas encore faite (<i>want, hope, plan, decide, promise to…</i>), tandis que <b>-ing</b> renvoie souvent à une action <b>réelle</b>, en cours ou déjà vécue (<i>enjoy, finish, miss, keep…</i>). Ce n’est qu’une tendance, pas une règle.' },

    { type: 'h', text: 'Les verbes suivis de -ing' },
    { type: 'table', head: ['Verbe', 'Sens', 'Exemple'], rows: [
      ['<b>enjoy</b>', 'aimer, apprécier', '<i>I enjoy traveling for work.</i>'],
      ['<b>finish</b>', 'finir de', '<i>Have you finished checking the invoices?</i>'],
      ['<b>avoid</b>', 'éviter de', '<i>Try to avoid driving at rush hour.</i>'],
      ['<b>consider</b>', 'envisager de', '<i>We are considering opening a new store.</i>'],
      ['<b>mind</b>', 'être dérangé par (questions et négations)', '<i>Do you mind waiting?</i>'],
      ['<b>suggest</b> / <b>recommend</b>', 'suggérer de / recommander de', '<i>He suggested taking a break.</i>'],
      ['<b>keep</b>', 'continuer à, ne pas arrêter de', '<i>The phone keeps ringing.</i>'],
      ['<b>practice</b>', 's’entraîner à', '<i>She practices speaking English every day.</i>'],
      ['<b>deny</b>', 'nier (avoir fait)', '<i>The supplier denied receiving our order.</i>'],
      ['<b>postpone</b> / <b>delay</b>', 'reporter, retarder', '<i>They postponed signing the contract.</i>'],
      ['<b>miss</b>', 'regretter l’absence de (« ça me manque »)', '<i>I miss working with you.</i>'],
      ['<b>risk</b>', 'risquer de', '<i>We can’t risk losing this client.</i>'],
      ['<b>can’t help</b>', 'ne pas pouvoir s’empêcher de', '<i>I can’t help thinking about it.</i>']
    ], caption: 'Orthographe américaine : <i>traveling</i> (un seul <i>l</i>) et le verbe <i>practice</i> (en britannique : <i>travelling</i>, <i>practise</i>).' },
    { type: 'examples', items: [
      { en: 'Would you mind closing the door?', fr: 'Ça te dérangerait de fermer la porte ?' },
      { en: 'The printer keeps jamming.', fr: 'L’imprimante n’arrête pas de se bloquer.' },
      { en: 'We postponed launching the product until May.', fr: 'Nous avons repoussé le lancement du produit à mai.' },
      { en: 'I recommend booking your flight early.', fr: 'Je te recommande de réserver ton vol tôt.', accent: 'en-GB' },
      { en: 'I miss living in Montreal.', fr: 'Vivre à Montréal me manque.', note: 'Attention au sens : <b>I miss</b> + quelque chose = « quelque chose <b>me</b> manque ».', accent: 'en-CA' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : suggest et recommend', html: 'En français, on dit « suggérer <b>de</b> faire », « recommander <b>de</b> faire ». En anglais, jamais de <i>to</i> après ces verbes :<br><span class="ko">I suggest to call the client.</span> → <span class="ok">I suggest calling the client.</span> ou <span class="ok">I suggest (that) we call the client.</span><br><span class="ko">I recommend to book early.</span> → <span class="ok">I recommend booking early.</span>' },

    { type: 'h', text: 'Les verbes suivis de to + base verbale' },
    { type: 'table', head: ['Verbe', 'Sens', 'Exemple'], rows: [
      ['<b>want</b> / <b>need</b>', 'vouloir / avoir besoin de', '<i>We need to talk.</i>'],
      ['<b>decide</b>', 'décider de', '<i>They decided to move.</i>'],
      ['<b>plan</b> / <b>intend</b>', 'prévoir de / avoir l’intention de', '<i>We plan to open an office in Seoul.</i>'],
      ['<b>hope</b> / <b>expect</b>', 'espérer / s’attendre à, compter', '<i>We expect to finish by June.</i>'],
      ['<b>agree</b> / <b>refuse</b>', 'accepter de / refuser de', '<i>The client agreed to pay in advance.</i>'],
      ['<b>offer</b>', 'proposer de (faire soi-même)', '<i>She offered to help.</i>'],
      ['<b>promise</b>', 'promettre de', '<i>I promise to call you.</i>'],
      ['<b>afford</b>', 'avoir les moyens de (souvent avec <i>can / can’t</i>)', '<i>We can’t afford to buy a new machine.</i>'],
      ['<b>manage</b>', 'réussir à, parvenir à', '<i>I managed to fix the printer.</i>'],
      ['<b>fail</b>', 'ne pas réussir à, ne pas faire', '<i>The company failed to meet its targets.</i>'],
      ['<b>seem</b> / <b>tend</b>', 'sembler / avoir tendance à', '<i>Prices tend to rise in summer.</i>'],
      ['<b>arrange</b>', 's’organiser pour, prendre rendez-vous pour', '<i>I’ve arranged to meet the client at noon.</i>'],
      ['<b>aim</b>', 'viser à, avoir pour objectif de', '<i>We aim to reduce costs by 10%.</i>']
    ] },
    { type: 'examples', items: [
      { en: "We can't afford to lose this contract.", fr: 'Nous ne pouvons pas nous permettre de perdre ce contrat.' },
      { en: 'She managed to finish the presentation on time.', fr: 'Elle a réussi à finir la présentation à temps.' },
      { en: 'The new manager seems to be very organized.', fr: 'La nouvelle responsable semble très organisée.' },
      { en: 'We aim to answer all e-mails within 24 hours.', fr: 'Nous avons pour objectif de répondre à tous les e-mails sous 24 heures.' },
      { en: 'Mr. Adeyemi refused to sign the agreement.', fr: 'M. Adeyemi a refusé de signer l’accord.', accent: 'en-AU' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : les faux amis', html: '<b>manage to</b> = réussir à (pas « manager » !) : <i>I managed to call him.</i> = J’ai réussi à l’appeler.<br><b>pretend to</b> = faire semblant de (pas « prétendre ») : <i>He pretended to be busy.</i> = Il a fait semblant d’être occupé.<br><b>expect to</b> = s’attendre à, compter faire (pas « attendre », qui se dit <i>wait for</i>).' },

    { type: 'h', text: 'Verbe + personne + to : ask someone to do' },
    { type: 'p', html: 'Certains verbes sont suivis d’une <b>personne</b> (nom ou pronom complément : <i>me, you, him, her, us, them</i>), puis de <b>to + base verbale</b>. Contrairement au français (« demander <b>à</b> quelqu’un <b>de</b> faire »), il n’y a aucune préposition devant la personne. À la forme négative, <b>not</b> se place devant <i>to</i> : <i>He asked me <b>not to</b> tell anyone.</i>' },
    { type: 'table', head: ['Structure', 'Exemple', 'Français'], rows: [
      ['<b>ask</b> someone <b>to</b>', '<i>She asked me to call the client.</i>', 'Elle m’a demandé d’appeler le client.'],
      ['<b>tell</b> someone <b>to</b>', '<i>He told us to wait.</i>', 'Il nous a dit d’attendre.'],
      ['<b>want</b> someone <b>to</b>', '<i>I want you to check this.</i>', 'Je veux que tu vérifies ceci.'],
      ['<b>remind</b> someone <b>to</b>', '<i>Remind me to send the invoice.</i>', 'Rappelle-moi d’envoyer la facture.'],
      ['<b>allow</b> someone <b>to</b>', '<i>The company allows employees to work from home.</i>', 'L’entreprise permet aux employés de télétravailler.'],
      ['<b>encourage</b> someone <b>to</b>', '<i>We encourage staff to take breaks.</i>', 'Nous encourageons le personnel à faire des pauses.'],
      ['<b>invite</b> someone <b>to</b>', '<i>They invited us to attend the ceremony.</i>', 'Ils nous ont invités à assister à la cérémonie.'],
      ['<b>expect</b> someone <b>to</b>', '<i>We expect you to arrive on time.</i>', 'Nous comptons sur toi pour arriver à l’heure.']
    ] },
    { type: 'box', style: 'warn', title: 'Piège : « Je veux que tu… »', html: 'Le français utilise « que » + subjonctif ; l’anglais utilise <b>personne + to</b> :<br><span class="ko">I want that you come.</span> → <span class="ok">I want you to come.</span><br><span class="ko">I would like that you meet Mr. Sato.</span> → <span class="ok">I’d like you to meet Mr. Sato.</span>' },

    { type: 'h', text: 'Let et make : sans to !' },
    { type: 'p', html: '<b>let</b> someone <b>do</b> = laisser, permettre ; <b>make</b> someone <b>do</b> = obliger, faire faire. Après ces deux verbes, on met la <b>base verbale sans to</b>. Compare avec <b>allow</b>, qui a le même sens que <i>let</i> mais prend <i>to</i>. Après <b>help</b>, les deux sont corrects : <i>help me (to) prepare</i>.' },
    { type: 'examples', items: [
      { en: 'Let me help you with those boxes.', fr: 'Laisse-moi t’aider avec ces cartons.' },
      { en: 'My boss let me leave early yesterday.', fr: 'Mon chef m’a laissée partir plus tôt hier.', note: '<i>let</i> est irrégulier : <i>let – let – let</i>.' },
      { en: 'The trainer made us repeat the exercise.', fr: 'Le formateur nous a fait refaire l’exercice.' },
      { en: 'Our manager lets us choose our hours.', fr: 'Notre responsable nous laisse choisir nos horaires.', note: 'Même sens : <i>Our manager <b>allows</b> us <b>to</b> choose our hours.</i> → <b>let</b> + base verbale, mais <b>allow</b> + <b>to</b>.' },
      { en: 'Can you help me prepare the slides?', fr: 'Tu peux m’aider à préparer les diapos ?' }
    ] },

    { type: 'h', text: 'Stop, remember, forget, try : attention au sens !' },
    { type: 'p', html: 'Ces quatre verbes acceptent les deux constructions, mais <b>le sens change</b>. Astuce pour <b>stop, remember</b> et <b>forget</b> : avec <b>-ing</b>, l’action du deuxième verbe a déjà eu lieu ou est en cours ; avec <b>to</b>, elle vient <b>après</b>. Pour <b>try</b> : <b>-ing</b> = tester une solution ; <b>to</b> = faire un effort.' },
    { type: 'table', head: ['Verbe', '+ -ing', '+ to'], rows: [
      ['<b>stop</b>', 'arrêter une activité<br><i>We stopped working at six.</i><br>Nous avons arrêté de travailler à 18 h.', 's’arrêter <b>pour</b> faire autre chose<br><i>We stopped to have lunch.</i><br>Nous nous sommes arrêtés pour déjeuner.'],
      ['<b>remember</b>', 'se souvenir d’avoir fait (passé)<br><i>I remember meeting her in Dubai.</i><br>Je me souviens de l’avoir rencontrée à Dubaï.', 'penser à faire (à ne pas oublier)<br><i>Remember to lock the door.</i><br>Pense à fermer la porte à clé.'],
      ['<b>forget</b>', 'oublier une chose vécue (surtout à la forme négative : <i>I’ll never forget…</i>)<br><i>I’ll never forget visiting Kyoto.</i><br>Je n’oublierai jamais ma visite à Kyoto.', 'oublier de faire<br><i>I forgot to send the e-mail.</i><br>J’ai oublié d’envoyer l’e-mail.'],
      ['<b>try</b>', 'essayer pour voir (une solution)<br><i>Try restarting your computer.</i><br>Essaie de redémarrer ton ordinateur.', 'faire un effort pour, tenter de<br><i>I tried to call you, but the line was busy.</i><br>J’ai essayé de t’appeler, mais c’était occupé.']
    ] },
    { type: 'examples', items: [
      { en: 'I remember sending the invoice last week.', fr: 'Je me souviens d’avoir envoyé la facture la semaine dernière.' },
      { en: 'Please remember to sign the form.', fr: 'N’oublie pas de signer le formulaire.' },
      { en: 'She stopped working at 6 p.m.', fr: 'Elle a arrêté de travailler à 18 h.' },
      { en: 'On the way, she stopped to buy some coffee.', fr: 'En chemin, elle s’est arrêtée pour acheter du café.' },
      { en: 'If the screen freezes, try turning it off and on again.', fr: 'Si l’écran se fige, essaie de l’éteindre et de le rallumer.', accent: 'en-GB' }
    ] },

    { type: 'h', text: 'Après une préposition : toujours -ing' },
    { type: 'p', html: 'Après une <b>préposition</b> (<i>in, on, at, of, for, about, before, after, without, instead of, by…</i>), le verbe prend <b>toujours -ing</b>. Là où le français met un infinitif (« avant de <b>partir</b> », « au lieu d’<b>appeler</b> »), l’anglais met la forme en -ing.' },
    { type: 'examples', items: [
      { en: 'Are you interested in working abroad?', fr: 'Ça t’intéresse de travailler à l’étranger ?' },
      { en: 'Please turn off the lights before leaving.', fr: 'Merci d’éteindre les lumières avant de partir.' },
      { en: "Why don't you send an e-mail instead of calling?", fr: 'Pourquoi n’envoies-tu pas un e-mail au lieu d’appeler ?' },
      { en: 'Thank you for coming.', fr: 'Merci d’être venus.' },
      { en: 'She improved her English by watching movies.', fr: 'Elle a amélioré son anglais en regardant des films.', note: '<b>by</b> + -ing = « en faisant » : la manière, le moyen.' }
    ] },
    { type: 'box', style: 'warn', title: 'Le grand piège : quand « to » est une préposition', html: 'Dans certaines expressions, <b>to</b> n’est pas le <i>to</i> de l’infinitif mais une <b>préposition</b> (comme « à »). Il est donc suivi de <b>-ing</b> :<br>• <b>look forward to</b> + -ing (avoir hâte de, attendre avec impatience) : <span class="ko">We look forward to see you.</span> → <span class="ok">We look forward to seeing you.</span><br>• <b>be used to</b> + -ing (être habitué à) : <i>I’m used to working late.</i> (voir la leçon « Used to, be used to, get used to et le causatif »)<br>• <b>be committed to</b> + -ing (s’engager à) : <i>We are committed to providing excellent service.</i><br>Test : si tu peux mettre un <b>nom</b> juste après <i>to</i> (<i>I look forward <b>to the meeting</b></i>), c’est une préposition → -ing.' },

    { type: 'h', text: 'Like, love, prefer… et would like' },
    { type: 'p', html: '<b>like, love, hate, prefer</b> acceptent les deux constructions, avec un sens très proche : <i>I like <b>working</b> in a team</i> = <i>I like <b>to work</b> in a team</i>. En revanche, avec <b>would</b> (<i>would like, would love, would prefer</i>), c’est <b>toujours to</b>.' },
    { type: 'table', head: ['Forme', 'Exemple', 'Français'], rows: [
      ['<b>like</b> + -ing / + to', '<i>I like working in a team.</i> / <i>I like to arrive early.</i>', 'J’aime travailler en équipe. / J’aime arriver tôt.'],
      ['<b>would like</b> + to', '<i>I would like to work in Canada.</i>', 'Je voudrais travailler au Canada.'],
      ['<b>prefer</b> + -ing / + to', '<i>I prefer working from home.</i>', 'Je préfère travailler de chez moi.'],
      ['<b>would prefer</b> + to', '<i>I’d prefer to meet on Tuesday.</i>', 'Je préférerais qu’on se voie mardi.']
    ], caption: 'Jamais de -ing après <b>would like</b> : <span class="ko">I would like going.</span> → <span class="ok">I would like to go.</span>' },
    { type: 'dialog', title: 'Préparer un salon professionnel', lines: [
      { speaker: 'M', en: 'Have you finished preparing the brochures for the trade fair?', fr: 'Tu as fini de préparer les brochures pour le salon ?' },
      { speaker: 'W', en: 'Almost. I need to print them this afternoon. By the way, did you remember to book the hotel?', fr: 'Presque. Je dois les imprimer cet après-midi. Au fait, tu as pensé à réserver l’hôtel ?' },
      { speaker: 'M', en: "Oh no, I forgot to call them! I'll do it right now.", fr: 'Oh non, j’ai oublié de les appeler ! Je le fais tout de suite.' },
      { speaker: 'W', en: "I suggest booking online. It's usually cheaper.", fr: 'Je te suggère de réserver en ligne. C’est généralement moins cher.' },
      { speaker: 'M', en: 'Good idea. And would you mind asking Kofi to bring the banners?', fr: 'Bonne idée. Et ça te dérangerait de demander à Kofi d’apporter les banderoles ?' },
      { speaker: 'W', en: "Not at all. I'm really looking forward to meeting new clients.", fr: 'Pas du tout. J’ai vraiment hâte de rencontrer de nouveaux clients.' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'Ce point tombe <b>très souvent en Partie 5</b>. Méthode : regarde le mot juste <b>avant</b> le trou.<br>• Un verbe de la liste « + -ing » (<i>enjoy, consider, avoid, suggest…</i>) → <b>-ing</b>.<br>• Un verbe de la liste « + to » (<i>decide, agree, plan, aim…</i>) → <b>to</b> + base verbale.<br>• Une préposition (<i>for, by, before, instead of, look forward to…</i>) → <b>-ing</b>.<br>• Un modal, <i>let</i> ou <i>make</i> → <b>base verbale</b>.<br>Exemple : <i>We look forward to ------- you.</i> → <b>seeing</b>. Et dans les e-mails de Partie 6 et 7, la formule finale <i>We look forward to hearing from you</i> (Dans l’attente de votre réponse) est incontournable.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• <b>+ -ing</b> : <i>enjoy, finish, avoid, consider, mind, suggest, recommend, keep, practice, deny, postpone, delay, miss, risk, can’t help</i>.<br>• <b>+ to</b> : <i>want, need, decide, plan, hope, agree, offer, refuse, promise, expect, afford, manage, fail, seem, tend, intend, arrange, aim</i>.<br>• <b>ask / tell / want / remind / allow someone to do</b> ; mais <b>let / make someone do</b> (sans <i>to</i>).<br>• Le sens change avec <b>stop, remember, forget, try</b> : <i>I stopped drinking coffee</i> (j’ai arrêté) ≠ <i>I stopped to drink a coffee</i> (je me suis arrêtée pour boire un café).<br>• Après une préposition → <b>-ing</b>, y compris <b>look forward to / be used to / be committed to + -ing</b>.<br>• <b>would like / would love / would prefer + to</b>.' }
  ],
  exercises: [
    { type: 'mcq', q: 'I enjoy ___ with international clients.', options: ['work', 'to work', 'working', 'works'], answer: 2, explain: '<b>Enjoy</b> est toujours suivi de <b>-ing</b> : <i>I enjoy <b>working</b>…</i>' },
    { type: 'gap', q: 'Have you finished ___ (write) the report?', answers: ['writing'], explain: '<b>Finish</b> + <b>-ing</b> : <i>finish <b>writing</b></i> (« finir d’écrire »). Attention à l’orthographe : <i>write</i> perd son <i>e</i> → <i>writing</i>.' },
    { type: 'gap', q: 'She promised ___ (call) me back before noon.', answers: ['to call'], explain: '<b>Promise</b> + <b>to</b> + base verbale : <i>She promised <b>to call</b> me back.</i> (Elle a promis de me rappeler.)' },
    { type: 'mcq', q: 'My manager asked me ___ the budget again.', options: ['check', 'checking', 'to check', 'that I check'], answer: 2, explain: '<b>Ask someone to do</b> : <i>asked me <b>to check</b></i> (m’a demandé de vérifier). Pas de <i>that</i> ni de -ing.' },
    { type: 'mcq', q: 'The trainer made us ___ the exercise twice.', options: ['do', 'to do', 'doing', 'did'], answer: 0, explain: 'Après <b>make someone</b> (obliger, faire faire), on met la <b>base verbale sans to</b> : <i>made us <b>do</b></i>.' },
    { type: 'gap', q: 'Please turn off your computer before ___ (leave) the office.', answers: ['leaving', 'you leave'], explain: 'Après la préposition <b>before</b>, le verbe prend <b>-ing</b> : <i>before <b>leaving</b></i> (« avant de partir »). On peut aussi dire <i>before <b>you leave</b></i>.' },
    { type: 'mcq', q: 'Quelle phrase veut dire « J’ai arrêté de boire du café » ?', options: ['I stopped to drink coffee.', 'I stopped drinking coffee.', 'I stopped drink coffee.'], answer: 1, explain: '<b>Stop + -ing</b> = arrêter une activité. <i>I stopped <b>to drink</b> coffee</i> voudrait dire « je me suis arrêtée <b>pour</b> boire du café ».' },
    { type: 'mcq', q: '« N’oublie pas d’envoyer la facture. » → Remember ___ the invoice.', options: ['sending', 'to send', 'send', 'sent'], answer: 1, explain: '<b>Remember + to</b> = penser à faire (une action à venir). <i>Remember <b>sending</b></i> voudrait dire « se souvenir d’avoir envoyé ».' },
    { type: 'gap', q: 'I suggest ___ (book) the hotel early; prices go up in the summer.', answers: ['booking', 'we book', 'that we book', 'you book', 'that you book'], explain: '<b>Suggest</b> + <b>-ing</b> : <i>I suggest <b>booking</b></i> (ou <i>I suggest (that) we book</i>). Jamais <span class="ko">suggest to book</span>.' },
    { type: 'gap', q: 'Ms. Nakamura is considering ___ (open) a second warehouse in Rotterdam.', answers: ['opening'], explain: '<b>Consider</b> (envisager de) + <b>-ing</b> : <i>considering <b>opening</b></i>.' },
    { type: 'order', answer: "We can't afford to lose this client.", fr: 'Nous ne pouvons pas nous permettre de perdre ce client.', explain: '<b>can’t afford</b> + <b>to</b> + base verbale : <i>can’t afford <b>to lose</b></i>.' },
    { type: 'order', answer: 'Thank you for coming to the meeting.', fr: 'Merci d’être venus à la réunion.', explain: 'Après la préposition <b>for</b> → <b>-ing</b> : <i>Thank you for <b>coming</b></i>.' },
    { type: 'listen', say: "Hi Marco, it's Hannah. I tried to call you this morning. Please remember to bring the contracts to the meeting, and don't forget to invite Mr. Chen.", accent: 'en-CA', q: 'Que doit faire Marco ?', options: ['Rappeler Hannah ce matin.', 'Apporter les contrats et inviter M. Chen.', 'Signer les contrats avec M. Chen.', 'Annuler la réunion avec M. Chen.'], answer: 1, explain: '<i>Remember <b>to bring</b> the contracts</i> = pense à apporter les contrats ; <i>don’t forget <b>to invite</b> Mr. Chen</i> = n’oublie pas d’inviter M. Chen. <i>I tried to call you</i> dit seulement qu’Hannah a essayé de l’appeler.' },
    { type: 'dictation', say: "I'm looking forward to meeting you.", accent: 'en-GB', answers: ["I'm looking forward to meeting you", 'I am looking forward to meeting you'], explain: 'Dans <b>look forward to</b>, <i>to</i> est une préposition → <b>-ing</b> : <i>to <b>meeting</b></i>. « J’ai hâte de vous rencontrer. »' },
    { type: 'mcq', q: 'We look forward to ------- you at our new showroom. <small>(style TOEIC)</small>', options: ['welcome', 'welcoming', 'welcomed', 'welcomes'], answer: 1, explain: '<b>Look forward to</b> + <b>-ing</b> : ici <i>to</i> est une préposition, pas le <i>to</i> de l’infinitif → <b>welcoming</b>.' },
    { type: 'mcq', q: 'The board of directors has agreed ------- the budget for the training program. <small>(style TOEIC)</small>', options: ['increase', 'increasing', 'to increase', 'increased'], answer: 2, explain: '<b>Agree</b> (accepter de) + <b>to</b> + base verbale → <b>to increase</b>.' }
  ]
});
