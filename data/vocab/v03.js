LE.register({
  id: 'v03',
  kind: 'vocab',
  title: 'Les gens : famille, description, caractère',
  subtitle: 'Présenter sa famille, décrire quelqu’un et parler de sa personnalité',
  level: 'A1',
  intro: 'Parler des gens, c’est présenter sa famille, décrire un collègue ou comprendre une lettre de recommandation. Au TOEIC, les photos de la Partie 1 montrent presque toujours des personnes, et les offres d’emploi de la Partie 7 listent des qualités comme <i>reliable</i> ou <i>organized</i>.',
  groups: [
    { title: 'La famille proche', words: [
      { en: 'family', fr: 'famille', pos: 'n', ex: 'My family lives in Toulouse.', exfr: 'Ma famille habite à Toulouse.' },
      { en: 'parents', fr: 'parents (le père et la mère)', pos: 'n', ex: 'My parents live in a small town.', exfr: 'Mes parents habitent dans une petite ville.', note: '<b>Seulement</b> le père et la mère ! Voir l’encadré « Faux amis ».' },
      { en: 'mother', fr: 'mère', pos: 'n', ex: 'My mother is a doctor in Lille.', exfr: 'Ma mère est médecin à Lille.', note: 'Familier : <b>mom</b> (US), <b>mum</b> (UK).' },
      { en: 'father', fr: 'père', pos: 'n', ex: 'His father works in a bank.', exfr: 'Son père travaille dans une banque.', note: 'Familier : <b>dad</b>.' },
      { en: 'brother', fr: 'frère', pos: 'n', ex: 'I have two brothers and a sister.', exfr: 'J’ai deux frères et une sœur.' },
      { en: 'sister', fr: 'sœur', pos: 'n', ex: 'Her sister works in the same office.', exfr: 'Sa sœur travaille dans le même bureau.' },
      { en: 'husband', fr: 'mari', pos: 'n', ex: 'Her husband is a nurse.', exfr: 'Son mari est infirmier.' },
      { en: 'wife', fr: 'femme ; épouse', pos: 'n', ex: 'This is my wife, Leila.', exfr: 'Je te présente ma femme, Leila.', note: '<b>wife</b> = épouse ; <b>woman</b> = femme (en général). Pluriel : <i>wives</i>.' },
      { en: 'partner', fr: 'compagnon, compagne ; associé(e)', pos: 'n', ex: 'My partner and I live in Nantes.', exfr: 'Mon compagnon et moi habitons à Nantes.', note: 'Mot neutre, marié ou non. Au travail : associé(e), partenaire.' },
      { en: 'son', fr: 'fils', pos: 'n', ex: 'Their son is ten years old.', exfr: 'Leur fils a dix ans.', note: 'Se prononce comme <i>sun</i> (soleil).' },
      { en: 'daughter', fr: 'fille (de quelqu’un)', pos: 'n', ex: 'My daughter starts school next week.', exfr: 'Ma fille entre à l’école la semaine prochaine.', note: '<b>daughter</b> = lien de parenté (ma fille) ; <b>girl</b> = une fille, une jeune fille. Le gh est muet : « do-teur ».' },
      { en: 'children', fr: 'enfants', pos: 'n', ex: 'Do you have any children?', exfr: 'Tu as des enfants ?', note: 'Pluriel irrégulier. Singulier : <b>a child</b>. Familier : <i>kids</i>.' }
    ] },
    { title: 'La famille élargie', words: [
      { en: 'grandparents', fr: 'grands-parents', pos: 'n', ex: 'My grandparents live in the country.', exfr: 'Mes grands-parents habitent à la campagne.', note: '<i>grandmother</i> (familier : grandma), <i>grandfather</i> (familier : grandpa).' },
      { en: 'uncle', fr: 'oncle', pos: 'n', ex: 'My uncle has a small restaurant.', exfr: 'Mon oncle a un petit restaurant.' },
      { en: 'aunt', fr: 'tante', pos: 'n', ex: 'My aunt lives in Canada with her family.', exfr: 'Ma tante vit au Canada avec sa famille.', note: 'US : « ènt » ; UK : « ânt ».' },
      { en: 'cousin', fr: 'cousin(e)', pos: 'n', ex: 'My cousin works in a big hotel.', exfr: 'Mon cousin travaille dans un grand hôtel.', note: 'Un seul mot pour cousin et cousine.' },
      { en: 'nephew', fr: 'neveu', pos: 'n', ex: 'My nephew is a student in Montreal.', exfr: 'Mon neveu est étudiant à Montréal.' },
      { en: 'niece', fr: 'nièce', pos: 'n', ex: 'Her niece is only three years old.', exfr: 'Sa nièce n’a que trois ans.' },
      { en: 'relatives', fr: 'membres de la famille ; proches', pos: 'n', ex: 'We visit our relatives every summer.', exfr: 'Nous rendons visite à notre famille chaque été.', note: 'Singulier : <b>a relative</b>. C’est la bonne traduction de « mes parents » au sens de « ma famille ».' }
    ] },
    { title: 'L’âge et les étapes de la vie', words: [
      { en: 'baby', fr: 'bébé', pos: 'n', ex: 'My colleague has a new baby.', exfr: 'Ma collègue vient d’avoir un bébé.' },
      { en: 'teenager', fr: 'adolescent(e)', pos: 'n', ex: 'Their son is a teenager now.', exfr: 'Leur fils est adolescent maintenant.', note: 'De 13 à 19 ans : les âges en <b>-teen</b> ! Familier : <i>teen</i>.' },
      { en: 'adult', fr: 'adulte', pos: 'n', ex: 'The ticket costs ten dollars for adults.', exfr: 'Le billet coûte dix dollars pour les adultes.' },
      { en: 'retired', fr: 'à la retraite ; retraité(e)', pos: 'adj', ex: 'My father is retired now.', exfr: 'Mon père est à la retraite maintenant.', note: 'La retraite = <b>retirement</b>.' },
      { en: 'single', fr: 'célibataire', pos: 'adj', ex: 'Is your brother married or single?', exfr: 'Ton frère est marié ou célibataire ?', note: 'Aussi : seul, unique. <i>A single room</i> = une chambre simple (pour une personne).' },
      { en: 'married', fr: 'marié(e)', pos: 'adj', ex: "She's married to an engineer.", exfr: 'Elle est mariée à un ingénieur.', note: 'On dit married <b>to</b> (pas « with »). Se marier = <i>get married</i>.' }
    ] },
    { title: 'La description physique', words: [
      { en: 'tall', fr: 'grand(e) (taille d’une personne)', pos: 'adj', ex: 'My brother is very tall.', exfr: 'Mon frère est très grand.', note: 'Pour la taille d’une personne, on dit <b>tall</b>, pas <i>big</i> (qui veut dire « gros, grand en volume »).' },
      { en: 'short', fr: 'petit(e) (taille) ; court(e)', pos: 'adj', ex: "She's short and has long hair.", exfr: 'Elle est petite et elle a les cheveux longs.' },
      { en: 'young', fr: 'jeune', pos: 'adj', ex: 'Our new manager is very young.', exfr: 'Notre nouvelle responsable est très jeune.' },
      { en: 'old', fr: 'vieux, vieille ; âgé(e)', pos: 'adj', ex: 'My grandfather is old but very active.', exfr: 'Mon grand-père est âgé mais très actif.', note: '<i>How old are you?</i> = Quel âge as-tu ? Plus poli pour une personne : <i>elderly</i>.' },
      { en: 'slim', fr: 'mince', pos: 'adj', ex: 'The woman in the photo is tall and slim.', exfr: 'La femme sur la photo est grande et mince.', note: 'Mot positif. <b>thin</b> = mince, maigre (plus neutre, parfois négatif).' },
      { en: 'hair', fr: 'cheveux', pos: 'n', ex: 'He has short black hair.', exfr: 'Il a les cheveux courts et noirs.', note: 'Toujours au singulier : <i>her hair <b>is</b> long</i>. <i>A hair</i> = un seul cheveu !' },
      { en: 'eyes', fr: 'yeux', pos: 'n', ex: 'She has big brown eyes.', exfr: 'Elle a de grands yeux marron.', note: 'Singulier : <i>an eye</i>. Se prononce « aïz ».' },
      { en: 'beard', fr: 'barbe', pos: 'n', ex: 'The man with the beard is my boss.', exfr: 'L’homme avec la barbe est mon patron.', note: 'Moustache = <i>mustache</i> (US), <i>moustache</i> (UK).' },
      { en: 'glasses', fr: 'lunettes', pos: 'n', ex: 'He wears glasses to read.', exfr: 'Il porte des lunettes pour lire.', note: 'Toujours au pluriel : <i>my glasses <b>are</b>…</i> Lunettes de soleil = <i>sunglasses</i>.' },
      { en: 'wear', fr: 'porter (un vêtement, des lunettes)', pos: 'v', ex: 'She always wears a dark suit at work.', exfr: 'Elle porte toujours un tailleur sombre au travail.', note: 'Irrégulier : <i>wear, wore, worn</i>. Porter un sac, un carton (dans les mains) = <b>carry</b>.' },
      { en: 'look like', fr: 'ressembler à', pos: 'v', ex: 'You look like your mother.', exfr: 'Tu ressembles à ta mère.', note: '<i>What does he look like?</i> = Il est comment, physiquement ?' }
    ] },
    { title: 'Le caractère', words: [
      { en: 'friendly', fr: 'amical(e) ; chaleureux (-euse), accueillant(e)', pos: 'adj', ex: 'Our receptionist is very friendly.', exfr: 'Notre réceptionniste est très accueillante.', note: 'Malgré le -ly, c’est un <b>adjectif</b>, pas un adverbe.' },
      { en: 'nice', fr: 'sympa ; agréable', pos: 'adj', ex: 'My new boss is really nice.', exfr: 'Mon nouveau patron est vraiment sympa.' },
      { en: 'kind', fr: 'gentil(le) ; bienveillant(e)', pos: 'adj', ex: "Thank you, you're very kind.", exfr: 'Merci, vous êtes très gentil.', note: '<i>It’s very kind of you.</i> = C’est très gentil de ta part.' },
      { en: 'shy', fr: 'timide', pos: 'adj', ex: "He's a bit shy in meetings.", exfr: 'Il est un peu timide en réunion.' },
      { en: 'polite', fr: 'poli(e)', pos: 'adj', ex: 'Always be polite to customers.', exfr: 'Sois toujours polie avec les clients.' },
      { en: 'rude', fr: 'impoli(e) ; grossier (-ière)', pos: 'adj', ex: "It's rude to be late for a meeting.", exfr: 'C’est impoli d’arriver en retard à une réunion.', note: 'Contraire de <i>polite</i>. Faux ami : « rude » au sens de « dur, pénible » se dit <i>hard</i>, <i>tough</i> ou <i>harsh</i>.' },
      { en: 'funny', fr: 'drôle ; marrant(e)', pos: 'adj', ex: 'My colleague Tariq is very funny.', exfr: 'Mon collègue Tariq est très drôle.', note: '<b>funny</b> = qui fait rire ; <b>fun</b> = amusant (une activité) : <i>The party was fun.</i>' },
      { en: 'hard-working', fr: 'travailleur (-euse), bosseur (-euse)', pos: 'adj', ex: 'Our team is small but very hard-working.', exfr: 'Notre équipe est petite mais très travailleuse.' },
      { en: 'lazy', fr: 'paresseux (-euse)', pos: 'adj', ex: "He isn't lazy, he's just tired.", exfr: 'Il n’est pas paresseux, il est juste fatigué.' },
      { en: 'patient', fr: 'patient(e)', pos: 'adj', ex: 'A good teacher is patient with students.', exfr: 'Un bon professeur est patient avec ses élèves.', note: 'Se prononce « péï-cheunt ». Contraire : <i>impatient</i>.' },
      { en: 'reliable', fr: 'fiable ; sur qui on peut compter', pos: 'adj', ex: 'We need a reliable assistant.', exfr: 'Nous avons besoin d’un assistant fiable.', note: 'Très fréquent au TOEIC : un employé, un fournisseur ou une machine <i>reliable</i>.' },
      { en: 'confident', fr: 'sûr(e) de soi ; confiant(e)', pos: 'adj', ex: "She's very confident when she speaks in public.", exfr: 'Elle est très sûre d’elle quand elle parle en public.', note: 'La confiance en soi = <b>confidence</b>.' },
      { en: 'honest', fr: 'honnête', pos: 'adj', ex: "He's an honest man, you can trust him.", exfr: 'C’est un homme honnête, tu peux lui faire confiance.', note: 'Le h est muet : <b>an</b> honest man.' },
      { en: 'organized', fr: 'organisé(e)', pos: 'adj', ex: 'She is very organized and never late.', exfr: 'Elle est très organisée et jamais en retard.', note: 'Orthographe britannique : <i>organised</i>.' }
    ] }
  ],
  tips: [
    { style: 'warn', title: 'Faux amis', html: '<b>parents</b> = seulement le père et la mère. Pour « mes parents » au sens de « ma famille » (oncles, cousins…), on dit <b>my relatives</b>.<br><b>sympathetic</b> ≠ sympathique : ce mot veut dire « compatissant ». Pour « sympa », dis <b>nice</b> ou <b>friendly</b>.<br><b>sensible</b> = raisonnable, plein de bon sens. « Sensible » (qui ressent fort) se dit <b>sensitive</b>.' },
    { style: 'tip', title: 'Décrire quelqu’un : be, have ou have got ?', html: 'Taille, âge, caractère → <b>be</b> : <i>He’s tall. She’s 40. They’re friendly.</i><br>Cheveux, yeux, barbe → <b>have</b> (ou <b>have got</b>, surtout en anglais britannique) : <i>She has blue eyes.</i> = <i>She’s got blue eyes.</i> Attention : dans <i>she’s got</i>, <b>’s</b> = <b>has</b>, pas <i>is</i> (voir la leçon « Have et have got »).<br><b>hair</b> est au singulier : <i>Her hair <b>is</b> long.</i> Les adjectifs se placent devant, la taille avant la couleur : <i>long black hair</i>.' },
    { style: 'info', title: 'Et au TOEIC ?', html: 'Les adjectifs de caractère reviennent dans les offres d’emploi et les lettres de recommandation (Partie 7) : on cherche des candidats <b>reliable</b>, <b>hard-working</b>, <b>organized</b> et <b>confident</b>. En Partie 1 (photos), on décrit les personnes : <i>The man is wearing glasses.</i> <i>The woman has long hair.</i>' }
  ]
});
