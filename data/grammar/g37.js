LE.register({
  id: 'g37',
  kind: 'grammar',
  title: 'Le discours indirect',
  subtitle: 'Rapporter ce que quelqu’un a dit, demandé ou conseillé',
  level: 'B2',
  minutes: 50,
  goals: [
    'Choisir entre <b>say</b> et <b>tell</b> et les construire correctement',
    'Appliquer la <b>concordance des temps</b> et adapter les repères (<i>tomorrow → the next day</i>)',
    'Construire des <b>questions indirectes</b> sans inversion : <i>She asked where the office was.</i>',
    'Rapporter ordres et demandes, et varier les verbes introducteurs (<i>remind, suggest, inform…</i>)'
  ],
  blocks: [
    { type: 'h', text: 'Discours direct, discours indirect' },
    { type: 'p', html: 'Le <b>discours direct</b> cite les paroles exactes, entre guillemets : <i>“I’m tired,” she said.</i> Le <b>discours indirect</b> les rapporte avec nos propres mots : <i>She said (that) she <b>was</b> tired.</i> Bonne nouvelle : le mécanisme est presque le même qu’en français (« Elle a dit qu’elle <b>était</b> fatiguée »). Au TOEIC, tu le rencontreras partout : messages téléphoniques, e-mails, comptes rendus de réunion.' },
    { type: 'examples', items: [
      { en: 'She said that she was tired.', fr: 'Elle a dit qu’elle était fatiguée.', note: 'Direct : <i>“I’m tired.”</i>' },
      { en: 'He told me that the meeting had been canceled.', fr: 'Il m’a dit que la réunion avait été annulée.', note: 'Direct : <i>“The meeting has been canceled.”</i>' },
      { en: 'They said they would send the contract on Monday.', fr: 'Ils ont dit qu’ils enverraient le contrat lundi.', note: 'Direct : <i>“We will send the contract on Monday.”</i>' },
      { en: 'She asked me if I was free.', fr: 'Elle m’a demandé si j’étais libre.', note: 'Direct : <i>“Are you free?”</i>' }
    ] },
    { type: 'box', style: 'tip', title: '« That » est facultatif', html: 'Après <i>say</i> et <i>tell</i>, <b>that</b> (que) est facultatif, et on l’omet très souvent à l’oral : <i>She said <b>(that)</b> she was tired.</i> En français, « que » est obligatoire ; en anglais, non.' },

    { type: 'h', text: 'Say ou tell ?' },
    { type: 'p', html: 'Les deux veulent dire « dire », mais ils ne se construisent pas de la même façon. <b>Tell</b> est toujours suivi de la <b>personne</b> à qui l’on parle. <b>Say</b> est suivi de <b>ce qu’on dit</b> ; si on veut mentionner la personne, il faut ajouter <b>to</b>.' },
    { type: 'table', head: ['Verbe', 'Construction', 'Exemple'], rows: [
      ['<b>tell</b>', 'tell + <b>personne</b> (+ that…)', 'She <b>told me</b> (that) she was busy.'],
      ['<b>say</b>', 'say (+ that…)', 'She <b>said</b> (that) she was busy.'],
      ['<b>say</b>', 'say + chose + <b>to</b> + personne', 'She <b>said</b> something <b>to me</b>. / She <b>said to me</b> that she was busy. <small>(moins courant)</small>'],
      ['<b>tell</b> (expressions)', 'tell the truth, tell a lie, tell a story, tell a joke, tell the difference', 'Can you <b>tell the difference</b>?'],
      ['<b>say</b> (expressions)', 'say hello, say goodbye, say yes / no, say thank you, say a few words', 'He left without <b>saying goodbye</b>.']
    ] },
    { type: 'box', style: 'warn', title: 'Piège : « He said me… »', html: '<span class="ko">He said me that…</span> → <span class="ok">He <b>told</b> me that…</span> ou <span class="ok">He <b>said</b> (that)…</span><br><span class="ko">He told that…</span> → <span class="ok">He told <b>us</b> that…</span> (<i>tell</i> a besoin d’une personne).' },
    { type: 'examples', items: [
      { en: 'Ms. Park told us that the office would close early.', fr: 'Mme Park nous a dit que le bureau fermerait plus tôt.' },
      { en: 'The technician said the problem was fixed.', fr: 'Le technicien a dit que le problème était réglé.' },
      { en: 'What did the client say to you?', fr: 'Qu’est-ce que le client t’a dit ?' },
      { en: 'Can you tell me your name, please?', fr: 'Pouvez-vous me dire votre nom, s’il vous plaît ?' }
    ] },

    { type: 'h', text: 'La concordance des temps' },
    { type: 'p', html: 'Quand le verbe introducteur est au <b>passé</b> (<i>said, told, asked…</i>), les verbes des paroles rapportées « reculent » d’un temps vers le passé. C’est logique : ces paroles ont été prononcées <b>avant</b> le moment où tu les rapportes. Le français fait la même chose (« je suis » → « elle a dit qu’elle <b>était</b> »).' },
    { type: 'table', head: ['Discours direct', 'Discours indirect', 'Exemple'], rows: [
      ['am / is / are', 'was / were', '“I<b>’m</b> busy.” → She said she <b>was</b> busy.'],
      ['présent simple', 'prétérit', '“We <b>need</b> help.” → They said they <b>needed</b> help.'],
      ['présent continu', 'past continuous', '“I<b>’m working</b> on it.” → He said he <b>was working</b> on it.'],
      ['am / is / are going to', 'was / were going to', '“We<b>’re going to</b> hire two people.” → They said they <b>were going to</b> hire two people.'],
      ['present perfect', 'past perfect', '“I<b>’ve finished</b>.” → She said she <b>had finished</b>.'],
      ['prétérit', 'past perfect (ou pas de changement)', '“I <b>sent</b> it.” → He said he <b>had sent</b> it.'],
      ['will', 'would', '“I<b>’ll</b> call you.” → She said she <b>would</b> call me.'],
      ['can', 'could', '“I <b>can</b> help.” → He said he <b>could</b> help.'],
      ['may', 'might', '“It <b>may</b> rain.” → She said it <b>might</b> rain.'],
      ['must', 'had to (ou must)', '“You <b>must</b> sign here.” → He said I <b>had to</b> sign there.']
    ], caption: '<i>Would, could, should, might</i> et <i>ought to</i> ne changent pas : <i>“You should rest.”</i> → <i>She said I <b>should</b> rest.</i>' },
    { type: 'examples', items: [
      { en: 'She said she was working from home.', fr: 'Elle a dit qu’elle travaillait de chez elle.', note: 'Direct : <i>“I’m working from home.”</i>' },
      { en: 'He said he had already paid the invoice.', fr: 'Il a dit qu’il avait déjà payé la facture.', note: 'Direct : <i>“I’ve already paid the invoice.”</i>' },
      { en: 'They told us they could deliver by Friday.', fr: 'Ils nous ont dit qu’ils pouvaient livrer d’ici vendredi.', note: 'Direct : <i>“We can deliver by Friday.”</i>' },
      { en: 'The manager said we had to wear a badge.', fr: 'Le responsable a dit que nous devions porter un badge.', note: 'Direct : <i>“You must wear a badge.”</i>' }
    ] },
    { type: 'box', style: 'tip', title: 'Quand ne rien changer ?', html: '• Si le verbe introducteur est au <b>présent</b> ou au present perfect : <i>She <b>says</b> she <b>is</b> busy.</i> / <i>He <b>has said</b> he <b>will</b> help.</i><br>• Pour une <b>vérité générale</b> : <i>The engineer said that steel <b>is</b> stronger than aluminum.</i><br>• Souvent, quand la situation est <b>toujours vraie</b> au moment où tu parles : <i>She told me she <b>works</b> in Toronto.</i> (elle y travaille encore).<br>Attention : avec un verbe introducteur au présent, on ne recule <b>jamais</b> le temps. Dans les deux autres cas, la concordance reste possible (<i>She told me she <b>worked</b> in Toronto</i> est correct aussi) ; dans les exercices qui la demandent, applique-la.' },

    { type: 'h', text: 'Les pronoms et les repères de temps et de lieu' },
    { type: 'p', html: 'Comme en français, on adapte les <b>pronoms</b> (<i>I → he / she</i>, <i>my → his / her</i>, <i>you → me</i>…) et, si l’on rapporte les paroles un autre jour ou dans un autre lieu, les <b>repères de temps et de lieu</b>.' },
    { type: 'table', head: ['Discours direct', 'Discours indirect', 'Français'], rows: [
      ['today', 'that day', 'ce jour-là'],
      ['tomorrow', 'the next day / the following day', 'le lendemain'],
      ['yesterday', 'the day before / the previous day', 'la veille'],
      ['next week', 'the following week', 'la semaine suivante'],
      ['last week', 'the week before / the previous week', 'la semaine précédente'],
      ['now', 'then / at that time', 'à ce moment-là'],
      ['two days ago', 'two days before / two days earlier', 'deux jours plus tôt'],
      ['here', 'there', 'là, là-bas'],
      ['this (report)', 'that (report) / the (report)', 'ce rapport-là, le rapport']
    ], caption: 'Pas de changement si tu rapportes les paroles le jour même et au même endroit : <i>“I’ll call you tomorrow,” she said this morning.</i> → <i>She said she’d call me <b>tomorrow</b>.</i>' },
    { type: 'examples', items: [
      { en: 'He said he would call me the next day.', fr: 'Il a dit qu’il m’appellerait le lendemain.', note: 'Direct, il y a un mois : <i>“I’ll call you tomorrow.”</i>' },
      { en: 'She said she had met the client the day before.', fr: 'Elle a dit qu’elle avait rencontré le client la veille.', note: 'Direct : <i>“I met the client yesterday.”</i>' },
      { en: 'They told me the package had been sent two days earlier.', fr: 'Ils m’ont dit que le colis avait été envoyé deux jours plus tôt.', note: 'Direct : <i>“The package was sent two days ago.”</i>' },
      { en: 'Ms. Silva said she liked working there.', fr: 'Mme Silva a dit qu’elle aimait travailler là-bas.', note: 'Direct : <i>“I like working here.”</i>' }
    ] },

    { type: 'h', text: 'Les questions indirectes' },
    { type: 'p', html: 'Pour rapporter une question, on utilise <b>ask</b> (ou <i>want to know, wonder</i>). Voici <b>la règle d’or</b> : dans une question indirecte, on reprend l’ordre d’une phrase affirmative, <b>sujet + verbe</b>. Pas d’inversion, pas de <i>do / does / did</i>, pas de point d’interrogation (sauf si la phrase entière est une question : <i>Could you tell me…?</i>).<br>• Question fermée (réponse oui / non) → <b>if</b> ou <b>whether</b> (si) : <i>“Are you available?”</i> → <i>He asked <b>if</b> I was available.</i><br>• Question avec un mot interrogatif (<i>where, when, what, why, how…</i>) → on garde ce mot : <i>“Where is the office?”</i> → <i>She asked <b>where the office was</b>.</i>' },
    { type: 'table', head: ['Question directe', 'Question indirecte'], rows: [
      ['“<b>Are you</b> available?”', 'He asked if / whether <b>I was</b> available.'],
      ['“<b>Did you</b> receive my e-mail?”', 'She asked if <b>I had received</b> her e-mail.'],
      ['“Where <b>is the office</b>?”', 'She asked where <b>the office was</b>.'],
      ['“What time <b>does the train leave</b>?”', 'He asked what time <b>the train left</b>.'],
      ['“How long <b>have you worked</b> here?”', 'They asked how long <b>I had worked</b> there.'],
      ['“Why <b>did you leave</b> early?”', 'My boss asked me why <b>I had left</b> early.'],
      ['“Who <b>is</b> in charge?”', 'She asked who <b>was</b> in charge. <small>(<i>who</i> est déjà le sujet : l’ordre ne change pas)</small>']
    ], caption: 'Le <i>do / does / did</i> de la question disparaît, et le sujet repasse <b>devant</b> le verbe.' },
    { type: 'box', style: 'warn', title: 'LE piège majeur : l’inversion', html: '<span class="ko">She asked where was the office.</span> → <span class="ok">She asked where <b>the office was</b>.</span><br><span class="ko">He asked what did I want.</span> → <span class="ok">He asked what <b>I wanted</b>.</span><br><span class="ko">Could you tell me where is the station?</span> → <span class="ok">Could you tell me where <b>the station is</b>?</span><br>Même quand la phrase entière est une question polie, la partie qui suit <i>where / what / if…</i> garde l’ordre <b>sujet + verbe</b>.' },
    { type: 'p', html: 'Les <b>questions indirectes polies</b> sont très utilisées au travail et au TOEIC (Parties 2 et 3). Comme elles portent sur le présent (<i>Do you know…?</i> ; dans <i>Could you tell me…?</i>, <i>could</i> est une simple formule de politesse), on ne change pas le temps, mais on garde l’ordre sujet + verbe.' },
    { type: 'examples', items: [
      { en: 'Could you tell me where the station is?', fr: 'Pourriez-vous me dire où se trouve la gare ?' },
      { en: 'Do you know what time the meeting starts?', fr: 'Tu sais à quelle heure commence la réunion ?' },
      { en: 'I was wondering if you could help me.', fr: 'Je me demandais si tu pourrais m’aider.' },
      { en: "I'd like to know whether the price includes delivery.", fr: 'J’aimerais savoir si le prix comprend la livraison.' }
    ] },

    { type: 'h', text: 'Rapporter un ordre, une demande, un conseil' },
    { type: 'p', html: 'Pour un ordre, une demande ou un conseil, on utilise <b>tell / ask / advise</b> + <b>personne</b> + <b>to</b> + base verbale (le verbe sans rien : <i>call, send, wait</i>). À la forme négative : <b>not to</b> + base verbale.' },
    { type: 'examples', items: [
      { en: 'She told me to call back later.', fr: 'Elle m’a dit de rappeler plus tard.', note: 'Direct : <i>“Call back later.”</i>' },
      { en: 'The manager asked us not to park in front of the entrance.', fr: 'Le responsable nous a demandé de ne pas nous garer devant l’entrée.', note: 'Direct : <i>“Please don’t park in front of the entrance.”</i>' },
      { en: 'My doctor advised me to take a few days off.', fr: 'Mon médecin m’a conseillé de prendre quelques jours de repos.' },
      { en: 'Ms. Haddad asked me to send her the file.', fr: 'Mme Haddad m’a demandé de lui envoyer le fichier.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : « dire de » ≠ « dire que »', html: '« Il m’a dit <b>de</b> venir » est un ordre → <span class="ok">He told me <b>to</b> come.</span> Pas <span class="ko">He said me to come.</span> ni <span class="ko">He told me that I come.</span><br>Négation : <b>not to</b>, jamais <i>don’t</i> : <span class="ko">She told us don’t be late.</span> → <span class="ok">She told us <b>not to</b> be late.</span>' },

    { type: 'h', text: 'Varier les verbes introducteurs' },
    { type: 'p', html: 'Au TOEIC (Parties 5, 6 et 7), les comptes rendus et les e-mails utilisent bien d’autres verbes que <i>say</i> et <i>tell</i>. Chacun a sa propre construction : apprends-la en même temps que le verbe.' },
    { type: 'table', head: ['Verbe', 'Construction', 'Exemple', 'Français'], rows: [
      ['explain', 'explain (<b>to</b> sb) that… / explain sth (<b>to</b> sb)', 'He <b>explained to us</b> that the flight was delayed.', 'Il nous a expliqué que le vol était retardé.'],
      ['suggest', 'suggest + <b>-ing</b> / suggest <b>that</b> sb (should) + base verbale', 'She <b>suggested postponing</b> the meeting. / She <b>suggested that we postpone</b> it.', 'Elle a proposé de reporter la réunion.'],
      ['recommend', 'recommend + <b>-ing</b> / recommend <b>that</b>…', 'The consultant <b>recommended hiring</b> more staff.', 'Le consultant a recommandé d’embaucher davantage de personnel.'],
      ['remind', 'remind sb <b>to</b>… / remind sb <b>that</b>…', 'Ms. Kim <b>reminded us to</b> submit our timesheets.', 'Mme Kim nous a rappelé de rendre nos feuilles de temps.'],
      ['promise', 'promise <b>to</b>… / promise (sb) <b>that</b>…', 'The supplier <b>promised to</b> deliver on time.', 'Le fournisseur a promis de livrer à temps.'],
      ['agree', 'agree <b>to</b>… / agree <b>that</b>…', 'They <b>agreed to</b> lower the price.', 'Ils ont accepté de baisser le prix.'],
      ['refuse', 'refuse <b>to</b>…', 'He <b>refused to</b> sign the contract.', 'Il a refusé de signer le contrat.'],
      ['admit', 'admit + <b>-ing</b> / admit <b>that</b>…', 'She <b>admitted making</b> a mistake.', 'Elle a reconnu avoir fait une erreur.'],
      ['confirm', 'confirm (<b>that</b>)… / confirm sth', 'The hotel <b>confirmed</b> (that) the room was booked.', 'L’hôtel a confirmé que la chambre était réservée.'],
      ['inform', 'inform <b>sb that</b>… / inform sb <b>of</b> sth', 'We <b>informed the client that</b> the order was ready.', 'Nous avons informé le client que la commande était prête.']
    ], caption: '<i>sb</i> = <i>somebody</i> (quelqu’un) ; <i>sth</i> = <i>something</i> (quelque chose).' },
    { type: 'box', style: 'warn', title: 'Pièges : suggest, explain, inform', html: '<span class="ko">She suggested me to postpone.</span> → <span class="ok">She suggested <b>postponing</b>.</span> / <span class="ok">She suggested <b>that I postpone</b>.</span><br><span class="ko">He explained me the problem.</span> → <span class="ok">He explained the problem <b>to me</b>.</span><br><span class="ko">We informed that the order was ready.</span> → <span class="ok">We informed <b>the client</b> that the order was ready.</span> (comme <i>tell</i>, <i>inform</i> a besoin d’une personne).' },
    { type: 'dialog', title: 'Un message à transmettre', lines: [
      { speaker: 'W', en: 'Hi Omar. Did anyone call while I was out?', fr: 'Salut Omar. Quelqu’un a appelé pendant mon absence ?' },
      { speaker: 'M', en: 'Yes, Mr. Lindqvist called. He said the samples had arrived.', fr: 'Oui, M. Lindqvist a appelé. Il a dit que les échantillons étaient arrivés.' },
      { speaker: 'W', en: 'Great! Did he say anything else?', fr: 'Super ! Il a dit autre chose ?' },
      { speaker: 'M', en: "He asked if you could send him the price list, and he told me to remind you about Friday's meeting.", fr: 'Il a demandé si tu pouvais lui envoyer la liste des prix, et il m’a dit de te rappeler la réunion de vendredi.' },
      { speaker: 'W', en: 'Did he say what time the meeting would start?', fr: 'Il a dit à quelle heure la réunion commencerait ?' },
      { speaker: 'M', en: 'Yes, he said it would start at ten.', fr: 'Oui, il a dit qu’elle commencerait à dix heures.' }
    ] },
    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 5</b>, on te teste sur <i>say / tell</i>, sur l’ordre des mots des questions indirectes et sur la construction des verbes introducteurs (<i>suggest + -ing</i>, <i>inform someone that</i>). En <b>Parties 3 et 4</b>, les messages rapportent souvent des paroles : <i>My manager asked me to call you.</i> / <i>The client said the shipment hadn’t arrived.</i> En <b>Partie 2</b>, beaucoup de questions sont indirectes : <i>Do you know where the files are?</i> La meilleure réponse porte sur les dossiers (<i>They’re in the cabinet.</i>), pas forcément sur « oui / non ».' },

    { type: 'box', style: 'key', title: 'À retenir', html: '• <b>tell</b> + personne ; <b>say</b> (+ <b>to</b> + personne).<br>• Verbe introducteur au passé → on recule d’un temps : <i>am → was, do → did, will → would, can → could, have done → had done, did → had done, must → had to</i>.<br>• Repères : <i>tomorrow → the next day, yesterday → the day before, here → there, ago → before / earlier</i>.<br>• Question indirecte : <b>if / whether</b> ou mot interrogatif + <b>sujet + verbe</b>, sans <i>do</i> ni inversion : <i>Could you tell me where the station is?</i><br>• Ordre ou demande : <i>told / asked me <b>to</b>…</i> ; interdiction : <i><b>not to</b>…</i><br>• <i>suggest + -ing</i>, <i>explain <b>to</b> someone</i>, <i>inform someone that</i>.' }
  ],
  exercises: [
    { type: 'mcq', q: 'She ___ me that the meeting was canceled.', options: ['said', 'told', 'spoke'], answer: 1, explain: 'Il y a une personne juste après le trou (<i>me</i>) → <b>told</b>. <i>Said me</i> est impossible (il faudrait <i>said to me</i>), et <i>speak</i> ne s’emploie pas avec <i>that</i>.' },
    { type: 'gap', q: '“I am busy,” she said. → She said that she ___ busy. <small>(applique la concordance des temps)</small>', answers: ['was'], explain: 'Verbe introducteur au passé (<i>said</i>) → <i>am</i> recule au prétérit : <b>was</b>.' },
    { type: 'gap', q: '“We will send the invoice,” they said. → They said they ___ the invoice. <small>(applique la concordance des temps)</small>', answers: ['would send', "'d send"], explain: '<i>will</i> → <b>would</b> : <i>They said they would send the invoice</i> (à l’oral : <i>they’d send</i>).' },
    { type: 'gap', q: '“I have finished the report,” Tom said. → Tom said he ___ the report. <small>(applique la concordance des temps)</small>', answers: ['had finished', "'d finished"], explain: 'Present perfect (<i>have finished</i>) → past perfect : <b>had finished</b>.' },
    { type: 'mcq', q: '“I can help you tomorrow,” Maria said last week. → Maria said she ___ help me the next day.', options: ['can', 'could', 'will', 'must'], answer: 1, explain: '<i>can</i> → <b>could</b>. Les paroles datent de la semaine dernière et <i>the next day</i> montre qu’on les rapporte au passé.' },
    { type: 'mcq', q: '“I’ll call you tomorrow,” he said a month ago. → He said he would call me ___.', options: ['tomorrow', 'the next day', 'yesterday', 'the day before'], answer: 1, explain: 'Les paroles datent d’un mois : son « demain » est devenu <b>the next day</b> (le lendemain). <i>The day before</i> voudrait dire « la veille ».' },
    { type: 'mcq', q: 'She asked me where ___.', options: ['was the office', 'the office was', 'is the office'], answer: 1, explain: 'Question indirecte → ordre <b>sujet + verbe</b>, sans inversion : <i>where <b>the office was</b></i>. Et <i>asked</i> est au passé → <i>was</i>.' },
    { type: 'gap', q: '“Are you available on Friday?” he asked. → He asked ___ I was available on Friday.', answers: ['if', 'whether'], explain: 'Question fermée (réponse oui / non) → <b>if</b> ou <b>whether</b> (= si).' },
    { type: 'gap', q: '“Where do you work?” she asked me. → She asked me where I ___. <small>(applique la concordance des temps)</small>', answers: ['worked'], explain: 'Dans une question indirecte, pas de <i>do</i> et ordre sujet + verbe ; avec la concordance, le présent devient prétérit : <i>where I <b>worked</b></i>.' },
    { type: 'mcq', q: 'Could you tell me what time ___?', options: ['does the meeting start', 'the meeting starts', 'starts the meeting', 'the meeting start'], answer: 1, explain: 'Même dans une question polie, la partie indirecte garde l’ordre sujet + verbe, sans <i>does</i> : <b>the meeting starts</b> (avec le <i>-s</i> du présent). La question porte sur le présent (<i>could</i> n’est ici qu’une marque de politesse) : pas de concordance.' },
    { type: 'gap', q: '“Don’t park in front of the entrance,” the guard told us. → The guard told us ___ in front of the entrance.', answers: ['not to park'], explain: 'Interdiction rapportée : <b>not to</b> + base verbale → <i>told us <b>not to park</b></i>.' },
    { type: 'order', answer: 'My manager asked me to send her the file.', fr: 'Ma responsable m’a demandé de lui envoyer le fichier.', explain: 'Demande rapportée : <i>ask</i> + personne + <b>to</b> + base verbale (<i>asked me to send</i>).' },
    { type: 'order', answer: 'Could you tell me where the station is?', fr: 'Pourriez-vous me dire où se trouve la gare ?', explain: 'Question indirecte polie : après <i>where</i>, ordre <b>sujet + verbe</b> → <i>where the station is</i> (et surtout pas <i>where is the station</i>).' },
    { type: 'listen', say: "Hi Kenji, it's Laura. Mr. Alvarez called while you were out. He said the shipment would arrive on Thursday, and he asked if you could confirm the delivery address.", accent: 'en-CA', q: 'Que doit faire Kenji ?', options: ['Rappeler M. Alvarez jeudi.', 'Confirmer l’adresse de livraison.', 'Envoyer la marchandise jeudi.'], answer: 1, explain: '<i>He asked if you could confirm the delivery address</i> = il a demandé si tu pouvais confirmer l’adresse de livraison. Jeudi, c’est le jour où la marchandise arrivera.' },
    { type: 'mcq', q: 'The technician ------- us that the system would be down for maintenance on Saturday. <small>(style TOEIC)</small>', options: ['said', 'informed', 'explained', 'suggested'], answer: 1, explain: 'Le trou est suivi d’une personne (<i>us</i>) puis de <i>that</i> : seul <b>informed</b> fonctionne (<i>inform someone that</i>). On dit <i>said that</i> ou <i>explained <b>to</b> us that</i>, et <i>suggest</i> ne veut pas dire « informer ».' },
    { type: 'mcq', q: 'Ms. Nakamura suggested ------- the product launch until the spring. <small>(style TOEIC)</small>', options: ['postpone', 'to postpone', 'postponing', 'postponed'], answer: 2, explain: '<b>suggest + -ing</b> (ou <i>suggest that we postpone</i>). <i>Suggest to do</i> est une erreur très fréquente chez les francophones.' }
  ]
});
