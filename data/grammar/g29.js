LE.register({
  id: 'g29',
  kind: 'grammar',
  title: 'Les pronoms : compléments, réfléchis et indéfinis',
  subtitle: 'Him, them, myself, each other, someone, nothing… : les petits mots qui évitent les répétitions',
  level: 'A2',
  minutes: 45,
  goals: [
    'Placer les pronoms compléments (<i>me, him, her, us, them</i>) après un verbe ou une préposition : <i>Call me. I work with them.</i>',
    'Choisir entre <i>they, them, their, theirs</i> et <i>themselves</i> selon la place dans la phrase (un grand classique de la Partie 5)',
    'Utiliser les réfléchis (<i>myself, yourself…</i>), <i>by myself</i> et <i>each other</i>, et savoir quand l’anglais <b>n’en met pas</b> (<i>meet, remember, get up</i>)',
    'Employer <i>someone, anything, nobody, everywhere…</i> avec un verbe au singulier : <i>Everyone <b>is</b> here.</i>'
  ],
  blocks: [
    { type: 'h', text: 'À quoi ça sert ?' },
    { type: 'p', html: 'Dans la leçon « Pronoms, possessifs et génitif (’s) », tu as vu les pronoms <b>sujets</b> (<i>I, he, they…</i>) et les possessifs (<i>my, mine…</i>). Ici, tu découvres les autres : ceux qui se placent <b>après</b> le verbe (<i>him, them</i>), ceux qui renvoient au sujet (<i>myself</i>) et ceux qui désignent quelqu’un ou quelque chose de façon vague (<i>someone, nothing</i>). Ils servent surtout à <b>éviter les répétitions</b>.<br>Grande différence avec le français : chez nous, le pronom complément se place <b>avant</b> le verbe (« je <b>l’</b>appelle »). En anglais, il se place <b>après</b>, exactement comme un nom : <i>I call <b>him</b>.</i> (comme <i>I call <b>the client</b>.</i>)' },
    { type: 'examples', items: [
      { en: "I'll call him this afternoon.", fr: 'Je l’appellerai cet après-midi.', note: 'Le pronom <b>him</b> se place <b>après</b> le verbe <i>call</i>.' },
      { en: 'Can you help me, please?', fr: 'Tu peux m’aider, s’il te plaît ?' },
      { en: 'This message is for you.', fr: 'Ce message est pour toi.' },
      { en: 'I work with them every day.', fr: 'Je travaille avec eux tous les jours.' },
      { en: "Where's the contract? I can't find it.", fr: 'Où est le contrat ? Je ne le trouve pas.' }
    ] },

    { type: 'h', text: 'Les pronoms compléments : me, him, her, us, them…' },
    { type: 'p', html: 'Le <b>pronom complément</b> remplace un nom qui <b>subit</b> l’action ou qui suit une préposition. En français, il prend plein de formes (<i>le, la, les, lui, leur, moi, eux…</i>). En anglais, il n’y a qu’<b>une forme par personne</b>. Elle se place à deux endroits :<br>• <b>après un verbe</b> : <i>I like <b>her</b>. Please call <b>us</b>.</i><br>• <b>après une préposition</b> (<i>for, with, to, about, from, without…</i>) : <i>for <b>me</b>, with <b>them</b>, about <b>it</b>, without <b>him</b></i>.' },
    { type: 'table', head: ['Sujet', 'Complément', 'Français', 'Exemple'], rows: [
      ['I', '<b>me</b>', 'me, moi', 'Call <b>me</b> tomorrow.'],
      ['you', '<b>you</b>', 'te, toi, vous', 'I’ll send <b>you</b> the file.'],
      ['he', '<b>him</b>', 'le, lui (un homme)', 'I know <b>him</b> well.'],
      ['she', '<b>her</b>', 'la, lui, elle (une femme)', 'Ask <b>her</b>.'],
      ['it', '<b>it</b>', 'le, la (une chose)', 'I need <b>it</b> now.'],
      ['we', '<b>us</b>', 'nous', 'Join <b>us</b> for lunch!'],
      ['they', '<b>them</b>', 'les, leur, eux, elles', 'Thank <b>them</b> for the gift.']
    ], caption: 'Seuls <b>you</b> et <b>it</b> ont la même forme sujet et complément. Attention : <b>her</b> est à la fois complément (<i>I see her</i>) et possessif (<i>her car</i>).' },
    { type: 'box', style: 'warn', title: 'Pièges : l’ordre des mots et « lui »', html: '• En français, le pronom est <b>avant</b> le verbe ; en anglais, <b>après</b> :<br><span class="ko">I him call.</span> → <span class="ok">I call him.</span> (Je l’appelle.)<br>• « Lui » peut vouloir dire <b>him</b> ou <b>her</b> : l’anglais précise toujours s’il s’agit d’un homme ou d’une femme. « Je <b>lui</b> parle » → <i>I’m talking to <b>him</b></i> (à lui) ou <i>I’m talking to <b>her</b></i> (à elle).<br>• Après une préposition, jamais de pronom sujet : <span class="ko">with I</span> → <span class="ok">with me</span> ; <span class="ko">for they</span> → <span class="ok">for them</span>.' },
    { type: 'examples', items: [
      { en: 'Please send them the invoice.', fr: 'Envoie-leur la facture, s’il te plaît.', note: '« Leur » (à eux) → <b>them</b>. On peut aussi dire <i>send the invoice <b>to them</b></i>.' },
      { en: 'I spoke to her yesterday.', fr: 'Je lui ai parlé hier.', note: 'Ici, « lui » = à elle → <b>her</b>.' },
      { en: 'Are you coming with us?', fr: 'Tu viens avec nous ?' },
      { en: 'What do you think about it?', fr: 'Qu’est-ce que tu en penses ?', note: '« en » (de ça) → <b>about it</b>.' },
      { en: "Who's there? — It's me!", fr: 'Qui est là ? — C’est moi !', note: 'Dans la langue courante, on dit <i>It’s <b>me</b></i> (et pas <i>It’s I</i>).' }
    ] },
    { type: 'box', style: 'tip', title: 'Deux compléments : send her the report', html: 'Avec <i>give, send, show, tell, offer</i>, deux constructions sont possibles :<br>• verbe + <b>personne</b> + chose : <i>I sent <b>her</b> the report.</i><br>• verbe + chose + <b>to</b> + personne : <i>I sent the report <b>to her</b>.</i><br>Quand la chose est aussi un pronom, préfère la 2ᵉ : <i>I sent <b>it to her</b>.</i> (Je le lui ai envoyé.)' },

    { type: 'h', text: 'Le grand tableau des pronoms' },
    { type: 'table', head: ['Sujet', 'Complément', 'Adjectif possessif (+ nom)', 'Pronom possessif (seul)', 'Réfléchi'], rows: [
      ['I', 'me', 'my', 'mine', 'myself'],
      ['you', 'you', 'your', 'yours', 'yourself / yourselves'],
      ['he', 'him', 'his', 'his', 'himself'],
      ['she', 'her', 'her', 'hers', 'herself'],
      ['it', 'it', 'its', '—', 'itself'],
      ['we', 'us', 'our', 'ours', 'ourselves'],
      ['they', 'them', 'their', 'theirs', 'themselves']
    ], caption: '<b>Yourself</b> = une seule personne (toi, ou vous de politesse) ; <b>yourselves</b> = plusieurs personnes. Au singulier <b>-self</b>, au pluriel <b>-selves</b>. On dit <i>him<b>self</b></i> et <i>them<b>selves</b></i> (jamais <i>hisself</i> ni <i>theirselves</i>).' },
    { type: 'p', html: 'Pour choisir la bonne forme, pose-toi une seule question : <b>quelle est la place du mot dans la phrase ?</b> Voici la méthode avec la famille de <i>they</i>, celle que le TOEIC adore.' },
    { type: 'table', head: ['Indice autour du trou', 'Forme', 'Exemple'], rows: [
      ['le mot est <b>avant le verbe</b> (qui fait l’action ?)', 'sujet : <b>they</b>', '<b>They</b> will arrive at noon.'],
      ['le mot est <b>après un verbe ou une préposition</b>', 'complément : <b>them</b>', 'Please contact <b>them</b> directly.'],
      ['un <b>nom</b> suit le mot', 'possessif : <b>their</b>', 'Employees must update <b>their</b> passwords.'],
      ['le mot <b>remplace un nom</b> (souvent en fin de phrase)', 'possessif seul : <b>theirs</b>', 'Our offer is better than <b>theirs</b>.'],
      ['le complément est <b>la même personne que le sujet</b>, la phrase est déjà complète, ou <b>by</b> précède', 'réfléchi : <b>themselves</b>', 'The interns built the website <b>themselves</b>.']
    ], caption: 'La même méthode marche pour toutes les personnes : <i>she / her / hers / herself</i>, <i>we / us / our / ours / ourselves</i>…' },
    { type: 'examples', items: [
      { en: 'They are our new clients.', fr: 'Ce sont nos nouveaux clients.' },
      { en: 'We met them at the trade fair.', fr: 'Nous les avons rencontrés au salon professionnel.' },
      { en: 'Their order arrived this morning.', fr: 'Leur commande est arrivée ce matin.' },
      { en: 'Our prices are lower than theirs.', fr: 'Nos prix sont plus bas que les leurs.' },
      { en: 'They organized the whole event themselves.', fr: 'Ils ont organisé tout l’événement eux-mêmes.' }
    ] },

    { type: 'h', text: 'Les pronoms réfléchis : myself, yourself…' },
    { type: 'p', html: 'Les <b>pronoms réfléchis</b> se terminent par <b>-self</b> (singulier) ou <b>-selves</b> (pluriel). Ils ont trois emplois :<br>1. <b>Le sujet fait l’action sur lui-même</b> (comme « me, te, se » en français) : <i>She introduced <b>herself</b>.</i> (Elle s’est présentée.)<br>2. <b>Insister</b>, comme « moi-même, lui-même » : <i>I checked the figures <b>myself</b>.</i> (J’ai vérifié les chiffres moi-même.)<br>3. <b>by + réfléchi = seul(e), sans aide</b> : <i>He lives <b>by himself</b>.</i> (Il vit seul.) <i>Did you do it <b>by yourself</b>?</i> (Tu l’as fait tout seul ?)' },
    { type: 'examples', items: [
      { en: "Let me introduce myself: I'm Leila Haddad.", fr: 'Permettez-moi de me présenter : je suis Leila Haddad.' },
      { en: "Be careful, don't hurt yourself!", fr: 'Fais attention, ne te fais pas mal !' },
      { en: 'Please help yourselves to coffee.', fr: 'Servez-vous du café, je vous en prie.', note: '<i>Help yourself / yourselves</i> = « sers-toi / servez-vous ».' },
      { en: 'The director herself answered the phone.', fr: 'La directrice elle-même a répondu au téléphone.' },
      { en: 'I prefer to travel by myself.', fr: 'Je préfère voyager seule.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : les verbes pronominaux français', html: 'Beaucoup de verbes français en « se… » <b>ne sont pas réfléchis</b> en anglais. N’ajoute pas <i>myself, yourself…</i> par réflexe !<br><span class="ko">We meet ourselves every Monday.</span> → <span class="ok">We meet every Monday.</span> (Nous nous réunissons tous les lundis.)<br><span class="ko">I don’t remember myself.</span> → <span class="ok">I don’t remember.</span> (Je ne me souviens pas.)<br><span class="ko">I feel myself tired.</span> → <span class="ok">I feel tired.</span> (Je me sens fatiguée.)<br>Même chose pour « se lever » : <span class="ok">I get up at seven.</span> (Je me lève à sept heures.), sans <i>myself</i>.' },
    { type: 'table', head: ['Français (verbe en « se »)', 'Anglais (sans -self)', 'Exemple'], rows: [
      ['se réunir, se retrouver', '<b>meet</b>', 'The board <b>meets</b> once a month.'],
      ['se souvenir (de)', '<b>remember</b>', 'I don’t <b>remember</b> his name.'],
      ['se lever', '<b>get up</b>', 'I <b>get up</b> at 6:30.'],
      ['se dépêcher', '<b>hurry (up)</b>', '<b>Hurry up</b>, the taxi is here!'],
      ['se sentir', '<b>feel</b>', 'I don’t <b>feel</b> well today.'],
      ['se reposer / se détendre', '<b>rest</b> / <b>relax</b>', 'You should <b>relax</b> this weekend.'],
      ['s’inquiéter', '<b>worry</b>', 'Don’t <b>worry</b>, it’s fine.'],
      ['se plaindre (de)', '<b>complain</b> (about)', 'Two customers <b>complained</b> about the delay.'],
      ['se concentrer (sur)', '<b>concentrate</b> / <b>focus</b> (on)', 'I can’t <b>concentrate</b> with this noise.'],
      ['s’habiller / se marier', '<b>get dressed</b> / <b>get married</b>', 'They <b>got married</b> last year.']
    ], caption: 'À l’inverse, quelques verbes gardent le réfléchi, comme en français : <i>introduce yourself</i> (se présenter), <i>help yourself</i> (se servir), <i>enjoy yourself</i> (bien s’amuser), <i>hurt yourself</i> (se faire mal).' },

    { type: 'h', text: 'Each other : l’un l’autre' },
    { type: 'p', html: 'En français, « se » peut aussi indiquer une action <b>réciproque</b> : « Ils se connaissent » = chacun connaît l’autre. L’anglais utilise alors <b>each other</b> (ou <i>one another</i>, un peu plus formel). Cette expression ne change pas selon la personne : <i>we know each other, they know each other</i>.' },
    { type: 'examples', items: [
      { en: 'Amir and Julia know each other well.', fr: 'Amir et Julia se connaissent bien.' },
      { en: 'We help each other a lot in this team.', fr: 'Nous nous entraidons beaucoup dans cette équipe.' },
      { en: 'They send each other emails every day.', fr: 'Ils s’envoient des e-mails tous les jours.' },
      { en: 'The two companies compete with each other.', fr: 'Les deux entreprises se font concurrence.' }
    ] },
    { type: 'box', style: 'tip', title: 'Themselves ou each other ?', html: '• <i>They looked at <b>themselves</b> in the mirror.</i> → Chacun s’est regardé <b>lui-même</b> dans le miroir.<br>• <i>They looked at <b>each other</b>.</i> → Ils se sont regardés <b>l’un l’autre</b>.<br>Si tu peux ajouter « l’un l’autre » ou « mutuellement » en français, c’est <b>each other</b>.' },

    { type: 'h', text: 'Les pronoms indéfinis : someone, anything, nobody…' },
    { type: 'p', html: 'Pour parler d’une personne, d’une chose ou d’un lieu <b>sans préciser lequel</b>, l’anglais combine <b>some-, any-, no-, every-</b> avec <b>-one / -body</b> (personnes), <b>-thing</b> (choses) et <b>-where</b> (lieux). <i>-one</i> et <i>-body</i> veulent dire exactement la même chose ; <i>-body</i> est un peu plus fréquent à l’oral.' },
    { type: 'table', head: ['Préfixe', 'Personnes (-one / -body)', 'Choses (-thing)', 'Lieux (-where)'], rows: [
      ['<b>some-</b><br><small>phrase affirmative</small>', 'someone / somebody<br><small>quelqu’un</small>', 'something<br><small>quelque chose</small>', 'somewhere<br><small>quelque part</small>'],
      ['<b>any-</b><br><small>question, négation</small>', 'anyone / anybody<br><small>quelqu’un ? / personne</small>', 'anything<br><small>quelque chose ? / rien</small>', 'anywhere<br><small>quelque part ? / nulle part</small>'],
      ['<b>no-</b><br><small>sens négatif, verbe affirmatif</small>', 'no one / nobody<br><small>personne</small>', 'nothing<br><small>rien</small>', 'nowhere<br><small>nulle part</small>'],
      ['<b>every-</b>', 'everyone / everybody<br><small>tout le monde</small>', 'everything<br><small>tout</small>', 'everywhere<br><small>partout</small>']
    ], caption: 'Ces mots suivent les règles de <i>some</i> et <i>any</i> (voir la leçon « Les quantifieurs : some, any, much, many, few, little… »). <b>No one</b> s’écrit en deux mots. Dans une phrase affirmative, <b>any-</b> veut dire « n’importe » : <i>Anyone can apply.</i> (N’importe qui peut postuler.)' },
    { type: 'examples', items: [
      { en: 'Someone is waiting for you at reception.', fr: 'Quelqu’un t’attend à l’accueil.' },
      { en: 'Is there anything I can do for you?', fr: 'Est-ce que je peux faire quelque chose pour vous ?' },
      { en: "I didn't see anybody in the office.", fr: 'Je n’ai vu personne au bureau.' },
      { en: 'Nobody answered the phone.', fr: 'Personne n’a répondu au téléphone.' },
      { en: 'Everything is ready for the meeting.', fr: 'Tout est prêt pour la réunion.' },
      { en: "I've looked everywhere for my keys.", fr: 'J’ai cherché mes clés partout.' }
    ] },
    { type: 'box', style: 'warn', title: 'Pièges : singulier et double négation', html: '• <b>Everyone, everybody, everything, nobody, something…</b> sont <b>singuliers</b> : le verbe prend <b>-s</b> ou <b>is</b>, comme « tout le monde <b>est</b> là ».<br><span class="ko">Everyone are here.</span> → <span class="ok">Everyone is here.</span><br><span class="ko">Everybody know the rules.</span> → <span class="ok">Everybody knows the rules.</span><br>• Une seule négation par phrase : <i>not + any-</i> <b>ou</b> <i>no-</i>, jamais les deux.<br><span class="ko">I didn’t see nobody.</span> → <span class="ok">I didn’t see anybody.</span> = <span class="ok">I saw nobody.</span><br>• Pour reprendre ces mots, on utilise souvent <i>their</i> : <i>Everyone must bring <b>their</b> badge.</i> (Chacun doit apporter son badge.)' },

    { type: 'h', text: 'One / ones : pour ne pas répéter un nom' },
    { type: 'p', html: 'Pour ne pas répéter un nom déjà cité, l’anglais utilise <b>one</b> (singulier) et <b>ones</b> (pluriel), souvent après un adjectif ou après <i>this, that, which, the</i>. C’est l’équivalent de « celui, celle, ceux, celles » ou de l’adjectif seul en français (« le gris »).' },
    { type: 'examples', items: [
      { en: 'Which laptop is yours? — The gray one.', fr: 'Quel ordinateur portable est le tien ? — Le gris.', note: 'En anglais, un adjectif ne peut pas rester seul : <span class="ko">The gray.</span> → <span class="ok">The gray one.</span>' },
      { en: 'These chairs are old. We need new ones.', fr: 'Ces chaises sont vieilles. Il nous en faut des neuves.' },
      { en: "I don't like this jacket. I prefer that one.", fr: 'Je n’aime pas cette veste. Je préfère celle-là.' },
      { en: 'The small boxes are here, and the big ones are in the storage room.', fr: 'Les petites boîtes sont ici, et les grandes sont dans la réserve.' }
    ] },
    { type: 'dialog', title: 'Qui a pris l’agrafeuse ?', lines: [
      { speaker: 'W', en: "Has anyone seen my stapler? I can't find it anywhere.", fr: 'Quelqu’un a vu mon agrafeuse ? Je ne la trouve nulle part.' },
      { speaker: 'M', en: 'Is this one yours? It was on the printer.', fr: 'C’est la tienne, celle-ci ? Elle était sur l’imprimante.' },
      { speaker: 'W', en: 'No, mine is red. Maybe Kenji has it. He borrowed it yesterday.', fr: 'Non, la mienne est rouge. Peut-être que Kenji l’a. Il me l’a empruntée hier.' },
      { speaker: 'M', en: 'I asked him. He says he gave it back to you.', fr: 'Je lui ai demandé. Il dit qu’il te l’a rendue.' },
      { speaker: 'W', en: "Oh, you're right! It's in my drawer. I put it there myself.", fr: 'Ah, tu as raison ! Elle est dans mon tiroir. Je l’y ai mise moi-même.' },
      { speaker: 'M', en: "Don't worry. Everybody forgets things sometimes.", fr: 'Ne t’inquiète pas. Tout le monde oublie des choses parfois.' }
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 5</b>, presque tous les tests contiennent une ou deux questions où les quatre options sont des formes du même pronom : <i>The new employees introduced ------- to the team.</i> (they / them / their / themselves) → <b>themselves</b>, car ce sont les employés qui se présentent <b>eux-mêmes</b>. Applique la méthode du tableau : regarde ce qu’il y a <b>juste avant et juste après</b> le trou. Les indéfinis tombent aussi : <i>Everyone in the department ------- invited.</i> → <b>is</b> (singulier).<br>En <b>Partie 3</b>, écoute bien les pronoms : <i>I’ll call <b>her</b></i> t’indique qu’on parle d’une femme, ce qui aide à répondre aux questions « Who…? ».' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• Compléments : <b>me, you, him, her, it, us, them</b>, toujours <b>après</b> le verbe ou la préposition (<i>Call me. with them</i>).<br>• La place décide de la forme : avant le verbe → <i>they</i> ; après un verbe ou une préposition → <i>them</i> ; devant un nom → <i>their</i> ; seul → <i>theirs</i> ; même personne que le sujet → <i>themselves</i>.<br>• Réfléchis : <b>-self / -selves</b> ; <b>by myself</b> = seul(e), sans aide.<br>• Pas de réfléchi avec <i>meet, remember, get up, feel, worry, relax</i>…<br>• Action réciproque (l’un l’autre) → <b>each other</b>.<br>• <b>some- / any- / no- / every-</b> + <i>one, body, thing, where</i>, avec un verbe au <b>singulier</b> : <i>Everyone <b>is</b> here.</i><br>• <b>one / ones</b> pour ne pas répéter un nom : <i>the gray one, new ones</i>.' }
  ],
  exercises: [
    { type: 'mcq', q: "Can you help ___, please? I can't open this file.", options: ['I', 'me', 'my'], answer: 1, explain: 'Après un verbe (<i>help</i>), on met le pronom complément : <b>me</b>. <i>I</i> est un sujet (avant le verbe) et <i>my</i> doit être suivi d’un nom.' },
    { type: 'gap', q: 'This package is for Ms. Rossi. Can you give it to ___? (pronom)', answers: ['her'], explain: 'Après la préposition <i>to</i>, il faut un pronom complément. Ms. Rossi est une femme → <b>her</b> (« Tu peux le lui donner ? »).' },
    { type: 'mcq', q: 'Comment dit-on « Je lui ai envoyé le rapport » (lui = Karim) ?', options: ['I him sent the report.', 'I sent him the report.', 'I sent her the report.', 'I sent to him the report.'], answer: 1, explain: 'Le pronom se place <b>après</b> le verbe : <i>I sent <b>him</b> the report</i> (ou <i>I sent the report <b>to him</b></i>). Karim est un homme → <b>him</b>, pas <i>her</i>. <i>Sent to him the report</i> est incorrect : avec <i>to</i>, la chose vient d’abord.' },
    { type: 'gap', q: "Let me introduce ___. I'm Ana Silva, the new accountant.", answers: ['myself'], explain: '« Me présenter » : le sujet (moi) fait l’action sur lui-même → réfléchi <b>myself</b>. <i>Introduce yourself</i> fait partie des verbes qui gardent le réfléchi en anglais.' },
    { type: 'mcq', q: 'Ms. Diallo organized the whole conference by ___. Nobody helped her.', options: ['her', 'hers', 'herself', 'she'], answer: 2, explain: '<b>By herself</b> = toute seule, sans aide (la phrase suivante le confirme : <i>Nobody helped her</i>). Dans ce sens, <i>by</i> est toujours suivi d’un réfléchi.' },
    { type: 'mcq', q: 'Traduis : « Nous nous réunissons tous les lundis. »', options: ['We meet ourselves every Monday.', 'We meet every Monday.', 'We meet us every Monday.'], answer: 1, explain: '« Se réunir » = <b>meet</b>, sans réfléchi. Beaucoup de verbes pronominaux français (<i>se réunir, se souvenir, se lever</i>) ne prennent <b>pas</b> de <i>-self</i> en anglais.' },
    { type: 'mcq', q: 'Traduis : « Jin et Clara s’envoient des messages tous les jours » (l’un à l’autre).', options: ['Jin and Clara send themselves messages every day.', 'Jin and Clara send each other messages every day.', 'Jin and Clara send them messages every day.'], answer: 1, explain: 'Action <b>réciproque</b> (Jin écrit à Clara, Clara écrit à Jin) → <b>each other</b>. <i>Themselves</i> voudrait dire que chacun s’écrit à <b>lui-même</b> ; <i>them</i> désignerait d’autres personnes.' },
    { type: 'gap', q: "Everyone ___ (be) here. Let's start the meeting.", answers: ['is', "'s"], explain: '<b>Everyone</b> (tout le monde) est <b>singulier</b> → <b>is</b>, comme en français « tout le monde <b>est</b> là ».' },
    { type: 'gap', q: "The office was empty. I didn't see ___. (personne)", answers: ['anyone', 'anybody'], explain: 'Le verbe est déjà négatif (<i>didn’t</i>) → <b>anyone</b> ou <b>anybody</b>. <i>Nobody</i> ferait une double négation, interdite en anglais (on dirait <i>I saw nobody</i>).' },
    { type: 'gap', q: 'These folders are too small. We need bigger ___. (sans répéter « folders »)', answers: ['ones'], explain: 'Pour ne pas répéter <i>folders</i> (un pluriel), on utilise <b>ones</b> : <i>bigger ones</i> = des plus grands. Un adjectif ne peut pas rester seul en anglais.' },
    { type: 'order', answer: "I don't remember her name.", fr: 'Je ne me souviens pas de son nom (à elle).', explain: '« Se souvenir » = <b>remember</b>, sans réfléchi : pas de <i>myself</i>. <i>Her name</i> : possessif + nom.' },
    { type: 'order', answer: "They don't know each other very well.", fr: 'Ils ne se connaissent pas très bien.', explain: '« Se connaître » (l’un l’autre) → <b>know each other</b>. <i>Very well</i> se place à la fin, après le complément.' },
    { type: 'listen', accent: 'en-GB', say: "Hi Marco, it's Priya. I've left the contracts on your desk. Could you sign them and give them to Mr. Obi? He needs them before noon.", q: 'Que doit faire Marco ?', options: ['Rapporter les contrats à Priya', 'Signer les contrats et les donner à M. Obi', 'Signer les contrats et les laisser sur son bureau', 'Donner les contrats à M. Obi sans les signer'], answer: 1, explain: '<i>Could you sign <b>them</b> and give <b>them</b> to Mr. Obi?</i> : <b>them</b> = les contrats. Marco doit les signer, puis les donner à M. Obi avant midi.' },
    { type: 'mcq', q: "The interns will present ------- ideas at Friday's meeting. <small>(style TOEIC)</small>", options: ['they', 'them', 'their', 'theirs'], answer: 2, explain: 'Un nom suit le trou (<i>ideas</i>) → adjectif possessif <b>their</b> (leurs idées). <i>Theirs</i> s’emploie seul, sans nom après.' },
    { type: 'mcq', q: 'If customers have questions about the new policy, please forward ------- to Ms. Ito. <small>(style TOEIC)</small>', options: ['they', 'them', 'their', 'themselves'], answer: 1, explain: 'Le trou suit le verbe <i>forward</i> (transmettre) : il faut un pronom complément → <b>them</b> (= les questions). <i>Themselves</i> est impossible : le sujet (« vous », sous-entendu) n’est pas la même chose que les questions.' },
    { type: 'mcq', q: 'The sales representatives organized the product launch -------, without any outside help. <small>(style TOEIC)</small>', options: ['they', 'them', 'theirs', 'themselves'], answer: 3, explain: 'La phrase est déjà complète et les commerciaux ont tout fait <b>eux-mêmes</b> (<i>without any outside help</i> = sans aucune aide extérieure) → réfléchi <b>themselves</b>.' }
  ]
});
