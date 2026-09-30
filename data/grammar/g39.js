LE.register({
  id: 'g39',
  kind: 'grammar',
  title: 'La formation des mots : nom, verbe, adjectif, adverbe',
  subtitle: 'Reconnaître la nature d’un mot à sa terminaison : la compétence n°1 de la Partie 5 du TOEIC',
  level: 'B1',
  minutes: 55,
  goals: [
    'Reconnaître un nom, un verbe, un adjectif ou un adverbe grâce à son <b>suffixe</b> (<i>-tion, -ful, -ize, -ly…</i>)',
    'Deviner la <b>nature du mot manquant</b> d’après sa place dans la phrase, même sans tout comprendre',
    'Construire des <b>familles de mots</b> : <i>produce, product, production, productive, productively…</i>',
    'Former des contraires avec les <b>préfixes</b> : <i>unable, impossible, dissatisfied…</i>'
  ],
  blocks: [
    { type: 'h', text: 'Pourquoi c’est la compétence n°1 de la Partie 5' },
    { type: 'p', html: 'Dans chaque test, plusieurs questions de la <b>Partie 5</b> proposent quatre mots de la <b>même famille</b> : (A) decide (B) decision (C) decisive (D) decisively. Bonne nouvelle : pour y répondre, <b>tu n’as pas besoin de comprendre toute la phrase</b> ! Il suffit de deux choses : 1) repérer <b>la place du trou</b> pour savoir quelle nature de mot il faut ; 2) reconnaître <b>la nature de chaque option</b> grâce à sa terminaison. C’est une des façons les plus rapides de gagner des points.' },
    { type: 'table', head: ['Nature', 'Rôle', 'Exemple', 'Français'], rows: [
      ['<b>nom</b> (noun)', 'désigne une chose, une personne, une idée ; souvent après <i>a, the, my…</i>', 'a <b>decision</b>', 'une décision'],
      ['<b>verbe</b> (verb)', 'exprime l’action ; il se conjugue', 'They <b>decide</b>.', 'Ils décident.'],
      ['<b>adjectif</b> (adjective)', 'décrit un nom ; invariable ; avant le nom ou après <i>be</i>', 'a <b>decisive</b> moment', 'un moment décisif'],
      ['<b>adverbe</b> (adverb)', 'précise un verbe, un adjectif ou toute la phrase ; souvent en <b>-ly</b>', 'She acted <b>decisively</b>.', 'Elle a agi avec détermination.']
    ] },
    { type: 'examples', items: [
      { en: 'The manager will decide tomorrow.', fr: 'Le responsable décidera demain.', note: '<b>verbe</b> après le modal <i>will</i>.' },
      { en: "The manager's decision was final.", fr: 'La décision du responsable était définitive.', note: '<b>nom</b> après le possessif <i>the manager’s</i>.' },
      { en: 'It was a decisive moment for the company.', fr: 'Ce fut un moment décisif pour l’entreprise.', note: '<b>adjectif</b> entre <i>a</i> et le nom <i>moment</i>.' },
      { en: 'She acted quickly and decisively.', fr: 'Elle a agi vite et avec détermination.', note: '<b>adverbe</b> qui précise le verbe <i>acted</i>.' }
    ] },

    { type: 'h', text: 'Les suffixes des noms' },
    { type: 'p', html: 'Un <b>suffixe</b> est une terminaison ajoutée à la fin d’un mot. Il change souvent sa nature : <i>employ</i> (verbe) → <i>employ<b>ment</b></i> (nom). Beaucoup ressemblent au français : c’est un vrai avantage pour toi !' },
    { type: 'table', head: ['Suffixe', 'Formé à partir de…', 'Exemples', 'Français'], rows: [
      ['<b>-tion / -sion</b>', 'un verbe', 'produce → produc<b>tion</b>, inform → informa<b>tion</b>, decide → deci<b>sion</b>', 'production, information, décision'],
      ['<b>-ment</b>', 'un verbe', 'employ → employ<b>ment</b>, develop → develop<b>ment</b>, pay → pay<b>ment</b>', 'emploi, développement, paiement'],
      ['<b>-ance / -ence</b>', 'un verbe ou un adjectif', 'perform → perform<b>ance</b>, attend → attend<b>ance</b>, prefer → prefer<b>ence</b>, absent → abs<b>ence</b>', 'performance (résultats), présence (taux de participation), préférence, absence'],
      ['<b>-ity</b>', 'un adjectif', 'able → abil<b>ity</b>, secure → secur<b>ity</b>, available → availabil<b>ity</b>', 'capacité, sécurité, disponibilité'],
      ['<b>-ness</b>', 'un adjectif', 'aware → aware<b>ness</b>, effective → effective<b>ness</b>, happy → happi<b>ness</b>', 'prise de conscience, efficacité, bonheur'],
      ['<b>-er / -or</b>', 'un verbe → <b>la personne</b> qui fait l’action', 'manage → manag<b>er</b>, supply → suppli<b>er</b>, invest → invest<b>or</b>, supervise → supervis<b>or</b>', 'responsable, fournisseur, investisseur, superviseur'],
      ['<b>-ee</b>', 'un verbe → <b>la personne</b> qui reçoit l’action', 'employ → employ<b>ee</b>, train → train<b>ee</b>, interview → interview<b>ee</b>', 'salarié(e), personne en formation, personne interviewée'],
      ['<b>-ant / -ent</b>', 'un verbe → <b>une personne</b>', 'apply → applic<b>ant</b>, assist → assist<b>ant</b>, consult → consult<b>ant</b>, reside → resid<b>ent</b>', 'candidat(e), assistant(e), consultant(e), résident(e)'],
      ['<b>-ist</b>', 'un nom ou un adjectif → <b>une personne</b>, un métier', 'economy → econom<b>ist</b>, special → special<b>ist</b>, reception → reception<b>ist</b>', 'économiste, spécialiste, réceptionniste'],
      ['<b>-ship</b>', 'un nom → un statut, une relation', 'leader → leader<b>ship</b>, partner → partner<b>ship</b>, member → member<b>ship</b>', 'direction (leadership), partenariat, adhésion'],
      ['<b>-al</b> (oui, un nom !)', 'un verbe', 'approve → approv<b>al</b>, arrive → arriv<b>al</b>, propose → propos<b>al</b>, renew → renew<b>al</b>', 'approbation (accord), arrivée, proposition, renouvellement']
    ], caption: '<b>-er / -or / -ee / -ant / -ist</b> = souvent une <b>personne</b> (<i>-er</i> désigne aussi des machines : <i>printer, computer</i>). Attention : <i>-ant / -ent</i> termine aussi beaucoup d’adjectifs (<i>important, efficient</i>).' },

    { type: 'h', text: 'Les suffixes des adjectifs' },
    { type: 'table', head: ['Suffixe', 'Idée', 'Exemples', 'Français'], rows: [
      ['<b>-ful</b>', 'plein de, qui apporte', 'success<b>ful</b>, help<b>ful</b>, care<b>ful</b>, use<b>ful</b>', 'qui réussit, utile (serviable), prudent (soigneux), utile (pratique)'],
      ['<b>-less</b>', 'sans', 'care<b>less</b>, use<b>less</b>, wire<b>less</b>, end<b>less</b>', 'négligent, inutile, sans fil, interminable'],
      ['<b>-able / -ible</b>', 'qu’on peut…, capable de', 'afford<b>able</b>, avail<b>able</b>, reli<b>able</b>, flex<b>ible</b>, respons<b>ible</b>', 'abordable, disponible, fiable, flexible, responsable'],
      ['<b>-ive</b>', 'qui a la qualité de', 'effect<b>ive</b>, product<b>ive</b>, competit<b>ive</b>, attract<b>ive</b>', 'efficace, productif, compétitif, attrayant'],
      ['<b>-al</b>', 'relatif à', 'profession<b>al</b>, addition<b>al</b>, financ<b>ial</b>, annu<b>al</b>', 'professionnel, supplémentaire, financier, annuel'],
      ['<b>-ous</b>', 'qui possède, plein de', 'danger<b>ous</b>, numer<b>ous</b>, vari<b>ous</b>, gener<b>ous</b>', 'dangereux, nombreux, divers, généreux'],
      ['<b>-ic</b>', 'relatif à', 'econom<b>ic</b>, specif<b>ic</b>, electron<b>ic</b>, histor<b>ic</b>', 'économique, précis, électronique, historique'],
      ['<b>-ent / -ant</b>', 'qui a la qualité de', 'effici<b>ent</b>, confid<b>ent</b>, import<b>ant</b>, signific<b>ant</b>', 'efficace, sûr de soi, important, notable (important)'],
      ['<b>-ed / -ing</b>', 'participes employés comme adjectifs', 'interest<b>ed</b> / interest<b>ing</b>, bor<b>ed</b> / bor<b>ing</b>', 'intéressé / intéressant, qui s’ennuie / ennuyeux']
    ], caption: '<b>-ed</b> = ce que la personne ressent ; <b>-ing</b> = ce qui provoque le sentiment. Revois la leçon « Les adverbes et les adjectifs en -ed / -ing » si besoin.' },
    { type: 'examples', items: [
      { en: 'Our new supplier is very reliable.', fr: 'Notre nouveau fournisseur est très fiable.' },
      { en: 'We offer affordable prices and flexible hours.', fr: 'Nous proposons des prix abordables et des horaires flexibles.' },
      { en: 'Ms. Nakamura gave a very informative presentation.', fr: 'Mme Nakamura a fait une présentation très instructive.' },
      { en: 'Numerous customers complained about the delay.', fr: 'De nombreux clients se sont plaints du retard.' }
    ] },
    { type: 'box', style: 'tip', title: 'Effective ou efficient ?', html: 'Les deux se traduisent souvent par « efficace », mais : <b>effective</b> = qui donne le résultat voulu (<i>an effective treatment</i>, un traitement qui marche) ; <b>efficient</b> = qui ne gaspille ni temps ni énergie (<i>an efficient process</i>, un processus rapide et économe).' },

    { type: 'h', text: 'Les suffixes des verbes et des adverbes' },
    { type: 'table', head: ['Suffixe', 'Idée', 'Exemples', 'Français'], rows: [
      ['<b>-ize</b> (UK : <i>-ise</i>)', 'rendre…, transformer en…', 'modern<b>ize</b>, organ<b>ize</b>, special<b>ize</b>, final<b>ize</b>', 'moderniser, organiser, se spécialiser, finaliser'],
      ['<b>-ify</b>', 'rendre…', 'simpl<b>ify</b>, clar<b>ify</b>, not<b>ify</b>, ver<b>ify</b>', 'simplifier, clarifier, avertir (informer), vérifier'],
      ['<b>-en</b>', 'rendre (plus)…', 'short<b>en</b>, wid<b>en</b>, strength<b>en</b>, length<b>en</b>', 'raccourcir, élargir, renforcer, allonger'],
      ['<b>-ate</b>', 'faire, rendre', 'calcul<b>ate</b>, communic<b>ate</b>, activ<b>ate</b>, evalu<b>ate</b>', 'calculer, communiquer, activer, évaluer'],
      ['<b>-ly</b> → <b>adverbe</b>', 'adjectif + <i>-ly</i> (comme « -ment » en français)', 'quick<b>ly</b>, careful<b>ly</b>, efficient<b>ly</b>, immediate<b>ly</b>', 'rapidement, soigneusement, efficacement, immédiatement']
    ], caption: '<i>-ate</i> termine aussi des adjectifs (<i>accurate</i> = exact, <i>appropriate</i> = approprié) et des noms (<i>candidate</i>) : vérifie toujours la place du mot dans la phrase.' },
    { type: 'p', html: 'Former un adverbe en <b>-ly</b> : en général, on ajoute <i>-ly</i> à l’adjectif (<i>careful</i> → <i>careful<b>ly</b></i>, avec deux <i>l</i>). Adjectif en <b>-y</b> → <b>-ily</b> (<i>easy → easily</i>) ; en <b>-le</b> → <b>-ly</b> (<i>possible → possibly, reliable → reliably</i>) ; en <b>-ic</b> → <b>-ically</b> (<i>specific → specifically</i>). Exceptions : <i>good → <b>well</b></i> ; <i>fast, hard, late, early</i> ne changent pas. Attention : <i>hardly</i> (= à peine) et <i>lately</i> (= ces derniers temps) existent, mais avec un tout autre sens.' },
    { type: 'examples', items: [
      { en: 'We need to simplify the ordering process.', fr: 'Nous devons simplifier la procédure de commande.' },
      { en: 'The company plans to modernize its factories.', fr: 'L’entreprise prévoit de moderniser ses usines.' },
      { en: 'Please read the contract carefully before you sign it.', fr: 'Merci de lire attentivement le contrat avant de le signer.' },
      { en: 'The team responded quickly to the problem.', fr: 'L’équipe a réagi rapidement au problème.' }
    ] },

    { type: 'h', text: 'Les préfixes : changer le sens, pas la nature' },
    { type: 'p', html: 'Un <b>préfixe</b> s’ajoute au <b>début</b> d’un mot. Il ne change pas sa nature (un adjectif reste un adjectif) mais il change son <b>sens</b> : <i>available</i> (disponible) → <i><b>un</b>available</i> (indisponible).' },
    { type: 'table', head: ['Préfixe', 'Sens', 'Exemples', 'Français'], rows: [
      ['<b>un-</b>', 'contraire', '<b>un</b>able, <b>un</b>available, <b>un</b>expected, <b>un</b>lock', 'incapable, indisponible, inattendu, déverrouiller'],
      ['<b>in- / im- / il- / ir-</b>', 'contraire', '<b>in</b>complete, <b>im</b>possible, <b>il</b>legal, <b>ir</b>regular', 'incomplet, impossible, illégal, irrégulier'],
      ['<b>dis-</b>', 'contraire', '<b>dis</b>agree, <b>dis</b>satisfied, <b>dis</b>continue, <b>dis</b>honest', 'ne pas être d’accord, mécontent, arrêter (la production de), malhonnête'],
      ['<b>mis-</b>', 'mal, de travers', '<b>mis</b>understand, <b>mis</b>spell, <b>mis</b>place, <b>mis</b>lead', 'mal comprendre, mal orthographier, égarer, induire en erreur'],
      ['<b>re-</b>', 'à nouveau', '<b>re</b>schedule, <b>re</b>start, <b>re</b>open, <b>re</b>design', 'reprogrammer, redémarrer, rouvrir, repenser'],
      ['<b>over-</b>', 'trop, au-delà', '<b>over</b>charge, <b>over</b>booked, <b>over</b>estimate, <b>over</b>time', 'faire payer trop cher, surréservé, surestimer, heures supplémentaires'],
      ['<b>under-</b>', 'pas assez', '<b>under</b>staffed, <b>under</b>estimate, <b>under</b>paid, <b>under</b>used', 'en sous-effectif, sous-estimer, sous-payé, sous-utilisé'],
      ['<b>pre-</b>', 'avant', '<b>pre</b>view, <b>pre</b>paid, <b>pre</b>register, <b>pre</b>heat', 'aperçu, prépayé, se préinscrire, préchauffer'],
      ['<b>co-</b>', 'avec, ensemble', '<b>co</b>worker, <b>co</b>author, <b>co</b>operate, <b>co</b>-founder', 'collègue, coauteur, coopérer, cofondateur']
    ], caption: 'En général : <b>im-</b> devant <i>m, p, b</i> (<i>impossible</i>) ; <b>il-</b> devant <i>l</i> (<i>illegal</i>) ; <b>ir-</b> devant <i>r</i> (<i>irregular</i>) ; sinon <b>in-</b> ou <b>un-</b>. Le plus sûr reste d’apprendre chaque mot.' },
    { type: 'box', style: 'warn', title: 'Piège : des préfixes qui ne sont pas des contraires', html: '• <b>invaluable</b> = <b>très précieux</b>, inestimable (et pas « sans valeur », qui se dit <i>worthless</i>) : <i>Your help was <b>invaluable</b>.</i> = Ton aide a été précieuse.<br>• <b>inflammable</b> = <b>flammable</b> : les deux veulent dire « inflammable » !<br>• <b>unlock, unpack</b> : ici <i>un-</i> indique l’action inverse (déverrouiller, déballer).' },

    { type: 'h', text: 'Les familles de mots à connaître' },
    { type: 'table', head: ['Verbe', 'Nom (chose, idée)', 'Nom (personne)', 'Adjectif', 'Adverbe'], rows: [
      ['produce', 'product, production, productivity', 'producer', 'productive', 'productively'],
      ['decide', 'decision', '—', 'decisive', 'decisively'],
      ['compete', 'competition', 'competitor', 'competitive', 'competitively'],
      ['succeed', 'success', '—', 'successful', 'successfully'],
      ['create', 'creation, creativity', 'creator', 'creative', 'creatively'],
      ['rely', 'reliability', '—', 'reliable', 'reliably'],
      ['analyze', 'analysis', 'analyst', 'analytical', 'analytically'],
      ['satisfy', 'satisfaction', '—', 'satisfied, satisfactory', 'satisfactorily'],
      ['employ', 'employment', 'employer, employee', 'employed, unemployed', '—'],
      ['apply', 'application', 'applicant', 'applicable', '—'],
      ['—', 'efficiency', '—', 'efficient', 'efficiently'],
      ['—', 'responsibility', '—', 'responsible', 'responsibly']
    ], caption: '— = pas de mot courant. Attention : <i>satisfied</i> = satisfait (une personne) ; <i>satisfactory</i> = satisfaisant, correct (un résultat). Et <i>successor</i> ne veut pas dire « personne qui réussit », mais « successeur ».' },
    { type: 'examples', items: [
      { en: 'Our factory produces 5,000 units a day.', fr: 'Notre usine produit 5 000 unités par jour.' },
      { en: 'Productivity increased by 12 percent last year.', fr: 'La productivité a augmenté de 12 % l’an dernier.' },
      { en: 'Mr. Ferreira is our most productive salesperson.', fr: 'M. Ferreira est notre vendeur le plus productif.' },
      { en: 'The team worked productively all week.', fr: 'L’équipe a travaillé de manière productive toute la semaine.' }
    ] },

    { type: 'h', text: 'La méthode : trouver la nature du mot manquant' },
    { type: 'table', head: ['Place du trou', 'Nature attendue', 'Exemple'], rows: [
      ['après un article (<i>a, the</i>), un possessif (<i>our, its…</i>) ou un démonstratif (<i>this, these</i>), <b>sans nom après</b>', '<b>nom</b>', 'the <b>approval</b> of the budget ; our <b>decision</b>'],
      ['après un <b>adjectif</b>', '<b>nom</b>', 'a detailed <b>proposal</b> ; final <b>approval</b>'],
      ['après une <b>préposition</b> (<i>of, for, in…</i>)', '<b>nom</b> (ou verbe en <i>-ing</i>)', 'for more <b>information</b> ; thank you for <b>calling</b>'],
      ['<b>entre</b> un article (ou un possessif) <b>et un nom</b>', '<b>adjectif</b>', 'a <b>reliable</b> supplier ; our <b>annual</b> report'],
      ['après <i>be, become, seem, remain, look</i>', '<b>adjectif</b> <small>(ou participe passé au passif)</small>', 'The market remains <b>competitive</b>.'],
      ['<b>devant</b> un adjectif ou un participe passé', '<b>adverbe</b>', 'an <b>extremely</b> busy week ; a <b>newly</b> opened store'],
      ['avant ou après un <b>verbe</b>, entre l’auxiliaire et le verbe, ou dans une phrase <b>déjà complète</b>', '<b>adverbe</b>', 'She <b>quickly</b> replied. ; Prices will <b>gradually</b> increase.'],
      ['après <i>to</i>, un <b>modal</b> (<i>can, will, must…</i>) ou un sujet', '<b>verbe</b>', 'We plan to <b>expand</b>. ; We will <b>notify</b> you.']
    ] },
    { type: 'box', style: 'tip', title: 'Le test de la phrase complète', html: 'Cache le trou et relis la phrase. Si elle est <b>déjà complète</b> (sujet + verbe + complément) et correcte, le mot manquant est presque toujours un <b>adverbe</b> : <i>Ms. Diaz handled the complaint -------.</i> → <i>Ms. Diaz handled the complaint.</i> est complète → adverbe : <b>professionally</b>.' },
    { type: 'examples', items: [
      { en: 'The board approved the proposal.', fr: 'Le conseil d’administration a approuvé la proposition.', note: 'Après <i>the</i>, sans nom derrière → <b>nom</b> : <i>proposal</i> (en <i>-al</i> !).' },
      { en: 'The new warehouse is extremely spacious.', fr: 'Le nouvel entrepôt est extrêmement spacieux.', note: 'Après <i>is</i> → <b>adjectif</b> (<i>spacious</i>) ; devant un adjectif → <b>adverbe</b> (<i>extremely</i>).' },
      { en: 'Prices were significantly reduced.', fr: 'Les prix ont été nettement réduits.', note: 'Devant un participe passé (<i>reduced</i>) → <b>adverbe</b>.' },
      { en: 'We will notify all customers by e-mail.', fr: 'Nous informerons tous les clients par e-mail.', note: 'Après le modal <i>will</i> → <b>verbe</b> (<i>-ify</i>).' },
      { en: 'Ms. Diaz handled the complaint professionally.', fr: 'Mme Diaz a traité la réclamation de façon professionnelle.', note: 'La phrase est complète sans le mot → <b>adverbe</b>.' }
    ] },

    { type: 'box', style: 'warn', title: 'Piège : les terminaisons trompeuses (-al, -ly)', html: '• Certains mots en <b>-al</b> sont des <b>noms</b> : <i>approval, proposal, arrival, renewal, rental</i> (location). <i>We are waiting for the <b>approval</b> of the budget.</i><br>• Certains mots en <b>-ly</b> sont des <b>adjectifs</b>, pas des adverbes : <i>friendly</i> (aimable), <i>costly</i> (coûteux), <i>timely</i> (qui arrive au bon moment), <i>lively</i> (animé). <i>Thank you for your <b>timely</b> response.</i> Ils n’ont pas d’adverbe en <i>-ly</i> : on dit <i>in a friendly way</i>.<br>• <i>daily, weekly, monthly, early</i> sont à la fois adjectifs et adverbes : <i>a <b>daily</b> meeting</i> / <i>We meet <b>daily</b>.</i> De même, <i>likely</i> = probable (adjectif) ou probablement (adverbe, très courant en anglais américain) : <i>a <b>likely</b> result</i> / <i>Prices will <b>likely</b> rise.</i>' },
    { type: 'box', style: 'warn', title: 'Piège : la personne ou l’activité ?', html: 'Deux noms de la même famille peuvent entrer dans le trou : il faut alors vérifier le <b>sens</b>.<br>• <b>applicant</b> (candidat) / <b>application</b> (candidature) : <i>Ten <b>applicants</b> were interviewed.</i> / <i>Please send your <b>application</b> by Friday.</i><br>• <b>employee</b> (salarié) / <b>employer</b> (employeur) / <b>employment</b> (emploi) : <i>All <b>employees</b> must wear a badge.</i><br>• <b>attendee</b> (participant) / <b>attendance</b> (présence) ; <b>consultant</b> / <b>consultation</b> ; <b>supervisor</b> / <b>supervision</b>.<br>Question à te poser : le mot désigne-t-il <b>quelqu’un</b> qui agit, ou <b>quelque chose</b> ?' },

    { type: 'h', text: 'Au TOEIC' },
    { type: 'box', style: 'info', title: 'La méthode en 3 étapes (Partie 5)', html: '<b>1)</b> Lis les options : si ce sont quatre mots de la même famille, c’est une question de <b>nature de mot</b>. Inutile de traduire toute la phrase.<br><b>2)</b> Regarde le mot <b>juste avant</b> et <b>juste après</b> le trou, puis décide : nom, verbe, adjectif ou adverbe ?<br><b>3)</b> Choisis l’option qui a la bonne <b>terminaison</b>. S’il reste deux noms, vérifie le sens (personne ou chose ? singulier ou pluriel ?).<br>Exemple : <i>Mr. Park’s team has ------- completed the installation.</i> (A) success (B) successful (C) successfully (D) succeed → le trou est entre l’auxiliaire <i>has</i> et le participe <i>completed</i> → adverbe → <b>successfully</b>.' },

    { type: 'box', style: 'key', title: 'À retenir', html: '• <b>Noms</b> : -tion, -sion, -ment, -ance, -ence, -ity, -ness, -ship, -al (<i>approval</i>) ; <b>personnes</b> : -er, -or, -ee, -ant, -ist.<br>• <b>Adjectifs</b> : -ful, -less, -able, -ible, -ive, -al, -ous, -ic, -ent, -ant, -ed / -ing ; attention à <i>friendly, costly, timely</i>.<br>• <b>Verbes</b> : -ize, -ify, -en, -ate. <b>Adverbes</b> : -ly.<br>• <b>Préfixes</b> de contraire : un-, in-, im-, il-, ir-, dis- ; mis- = mal ; re- = à nouveau ; over- = trop ; under- = pas assez.<br>• Place du trou : article / possessif / adjectif + ___ → <b>nom</b> ; article + ___ + nom ou <i>be</i> + ___ → <b>adjectif</b> ; ___ + adjectif / participe ou phrase complète → <b>adverbe</b> ; <i>to</i> / modal + ___ → <b>verbe</b>.' }
  ],
  exercises: [
    { type: 'mcq', q: 'Lequel de ces mots est un <b>adjectif</b> ?', options: ['success', 'succeed', 'successful', 'successfully'], answer: 2, explain: '<b>-ful</b> est un suffixe d’adjectif : <i>successful</i> = qui réussit. <i>Success</i> est un nom, <i>succeed</i> un verbe, <i>successfully</i> un adverbe (-ly).' },
    { type: 'mcq', q: 'Lequel de ces mots est un <b>adverbe</b> ?', options: ['costly', 'quickly', 'friendly', 'timely'], answer: 1, explain: '<i>Quickly</i> = <i>quick</i> + <i>-ly</i> : c’est un adverbe (rapidement). Piège : <i>costly, friendly</i> et <i>timely</i> se terminent en <i>-ly</i> mais sont des <b>adjectifs</b> (coûteux, aimable, qui arrive au bon moment).' },
    { type: 'gap', q: 'We need to ___ (simple) the ordering process.', answers: ['simplify'], explain: 'Après <i>to</i> → un <b>verbe</b>. Le suffixe <b>-ify</b> transforme l’adjectif <i>simple</i> en verbe : <b>simplify</b> (simplifier).' },
    { type: 'gap', q: 'Please drive ___ (careful). The roads are icy.', answers: ['carefully'], explain: 'Le mot précise le verbe <i>drive</i> → <b>adverbe</b> : <i>careful</i> + <i>-ly</i> = <b>carefully</b> (avec deux <i>l</i>).' },
    { type: 'gap', q: 'The instructions were very ___ (help). I understood everything.', answers: ['helpful'], explain: 'Après <i>were very</i> → un <b>adjectif</b> : <i>help</i> + <b>-ful</b> = <b>helpful</b> (utile).' },
    { type: 'gap', q: 'Thank you for your quick ___ (respond).', answers: ['response'], explain: 'Après le possessif <i>your</i> et l’adjectif <i>quick</i> → un <b>nom</b> : <b>response</b> (réponse).' },
    { type: 'gap', q: 'It is ___ (le contraire de <i>possible</i>) to finish the report today.', answers: ['impossible'], explain: 'Devant un <i>p</i>, le préfixe de contraire est <b>im-</b> : <b>impossible</b>.' },
    { type: 'mcq', q: 'Five ___ have already applied for the position.', options: ['applications', 'applicants', 'applies', 'applicable'], answer: 1, explain: 'Il faut un nom pluriel qui désigne des <b>personnes</b> (ce sont des personnes qui postulent) → <b>applicants</b> (candidats). <i>Applications</i> = des candidatures (des documents).' },
    { type: 'order', answer: 'The new system works very efficiently.', fr: 'Le nouveau système fonctionne très efficacement.', explain: 'L’adverbe <b>efficiently</b> se place après le verbe <i>works</i> ; <i>very</i> se met juste devant lui.' },
    { type: 'order', answer: 'She gave a very informative presentation.', fr: 'Elle a fait une présentation très instructive.', explain: 'L’adjectif <b>informative</b> (-ive) se place entre l’article <i>a</i> et le nom <i>presentation</i> ; <i>very</i> se met juste devant lui.' },
    { type: 'dictation', say: 'The proposal was approved immediately.', answers: ['The proposal was approved immediately'], explain: '<i>proposal</i> est un <b>nom</b> (en <i>-al</i>), <i>immediately</i> un <b>adverbe</b> (-ly) : « La proposition a été approuvée immédiatement. »' },
    { type: 'mcq', q: 'After a long discussion, the board made a ------- to open a new branch in Lisbon. <small>(style TOEIC)</small>', options: ['decide', 'decision', 'decisive', 'decisively'], answer: 1, explain: 'Après l’article <i>a</i>, sans nom derrière → il faut un <b>nom</b> : <b>decision</b> (-sion). <i>Make a decision</i> = prendre une décision.' },
    { type: 'mcq', q: 'Brenholt Logistics offers ------- prices to all of its business customers. <small>(style TOEIC)</small>', options: ['compete', 'competition', 'competitive', 'competitively'], answer: 2, explain: 'Le trou est placé devant le nom <i>prices</i> → il faut un <b>adjectif</b> : <b>competitive</b> (-ive) = compétitif.' },
    { type: 'mcq', q: 'All orders will be processed ------- after payment is received. <small>(style TOEIC)</small>', options: ['prompt', 'promptly', 'promptness', 'prompted'], answer: 1, explain: 'La phrase est complète sans le mot (<i>All orders will be processed after payment is received</i>) et il précise <b>quand</b> les commandes seront traitées → <b>adverbe</b> : <b>promptly</b> (rapidement, sans délai). <i>Prompt</i> est un adjectif, <i>promptness</i> un nom.' },
    { type: 'mcq', q: 'The budget must receive final ------- from the board of directors before work can begin. <small>(style TOEIC)</small>', options: ['approve', 'approval', 'approved', 'approving'], answer: 1, explain: 'Après l’adjectif <i>final</i> et comme complément de <i>receive</i> → il faut un <b>nom</b> : <b>approval</b>. Piège : malgré sa terminaison en <i>-al</i>, c’est un nom (l’approbation).' },
    { type: 'mcq', q: 'Since the new software was installed, our accounting team has become much more -------. <small>(style TOEIC)</small>', options: ['produce', 'productive', 'productively', 'production'], answer: 1, explain: 'Après <i>become</i> (et <i>more</i>) → il faut un <b>adjectif</b> : <b>productive</b> (-ive). <i>Productively</i> est un adverbe : il ne peut pas suivre <i>become</i>.' }
  ]
});
