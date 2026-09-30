/* Programme de 30 semaines (≈ 7 mois) : de débutante (A1) à B1 / B2 au TOEIC.
 * Rythme conseillé : 45 à 60 minutes par jour, 6 jours sur 7.
 * Tâches : {ref: 'g01'} → contenu du catalogue ; {ref: 't05', set: 1} → série d'entraînement ;
 *          {text: '…', key: 'x'} → tâche libre à cocher. */
window.LE = window.LE || {};
LE.plan = {
  phases: [
    { id: 1, name: 'Fondations', weeks: [1, 8], goal: 'A1 → A2', color: '#16a34a',
      desc: 'Les bases solides : le verbe « be », le présent, les articles, les questions, la prononciation et les 1 000 premiers mots. On apprend à comprendre des phrases simples à l’oral.' },
    { id: 2, name: 'Construire', weeks: [9, 16], goal: 'A2 → B1', color: '#2563eb',
      desc: 'Le passé, le futur, le present perfect, les modaux et le vocabulaire du bureau. Première découverte des parties 1, 2 et 5 du TOEIC.' },
    { id: 3, name: 'Accélérer', weeks: [17, 25], goal: 'B1 → B2', color: '#7c3aed',
      desc: 'Grammaire avancée (conditionnels, passif, relatives, connecteurs), vocabulaire TOEIC et entraînement intensif sur les 7 parties. Premier TOEIC blanc.' },
    { id: 4, name: 'Sprint final', weeks: [26, 30], goal: 'Objectif B2', color: '#db2777',
      desc: 'TOEIC blancs, révision ciblée de tes points faibles, vitesse de lecture et préparation du jour J.' }
  ],

  daily: [
    { min: 10, text: 'Flashcards : les révisions du jour (répétition espacée)' },
    { min: 20, text: 'La leçon ou l’entraînement prévu dans ta semaine' },
    { min: 10, text: 'Exercices : refais ce qui n’est pas encore validé' },
    { min: 10, text: 'Immersion : écouter ou lire un peu d’anglais « vrai »' }
  ],

  weeks: [
    // ---------- Phase 1 : Fondations ----------
    { n: 1, title: 'Bienvenue ! Le point de départ', goal: 'Mesurer ton niveau et poser les toutes premières bases.',
      tasks: [{ ref: 'a00' }, { ref: 'x01' }, { ref: 'g01' }, { ref: 'p01' }, { ref: 'v01' },
        { key: 'imm1', text: 'Installe une routine : même heure chaque jour, 45 min, téléphone en mode avion' }] },
    { n: 2, title: 'Qui, quoi, à qui ?', goal: 'Possessifs, articles et premiers chiffres.',
      tasks: [{ ref: 'g02' }, { ref: 'g03' }, { ref: 'p02' }, { ref: 'v02' },
        { key: 'imm2', text: 'Immersion : 3 vidéos courtes pour apprenants (BBC Learning English, niveau débutant), sous-titres en anglais' }] },
    { n: 3, title: 'Décrire son environnement', goal: 'Pluriels, « there is / there are » et les nombres à l’oral.',
      tasks: [{ ref: 'g04' }, { ref: 'g05' }, { ref: 'p03' }, { ref: 'v03' },
        { key: 'imm3', text: 'Passe ton téléphone en anglais (langue du système) pour vivre l’anglais au quotidien' }] },
    { n: 4, title: 'Décrire et posséder', goal: 'Démonstratifs, adjectifs, « have ».',
      tasks: [{ ref: 'g06' }, { ref: 'g07' }, { ref: 'v04' },
        { key: 'imm4', text: 'Immersion : un épisode d’une série que tu connais déjà, en VO avec sous-titres français' }] },
    { n: 5, title: 'Le présent simple', goal: 'Parler de ses habitudes, poser des questions.',
      tasks: [{ ref: 'g08' }, { ref: 'g09' }, { ref: 'v05' }, { ref: 'v10' },
        { key: 'imm5', text: 'Écris 5 phrases sur ta journée type (I wake up at…), relis-les à voix haute' }] },
    { n: 6, title: 'Poser toutes les questions', goal: 'Fréquence, mots interrogatifs, présent continu.',
      tasks: [{ ref: 'g10' }, { ref: 'g11' }, { ref: 'g12' }, { ref: 'v06' }, { ref: 'p04' }] },
    { n: 7, title: 'Maintenant ou toujours ?', goal: 'Choisir le bon présent, maîtriser in / on / at.',
      tasks: [{ ref: 'g13' }, { ref: 'g14' }, { ref: 'v07' }, { ref: 'v09' },
        { key: 'imm7', text: 'Immersion : un épisode en VO avec sous-titres ANGLAIS (même si tu ne comprends pas tout)' }] },
    { n: 8, title: 'Bilan de la phase 1', goal: 'Consolider et découvrir le TOEIC.',
      tasks: [{ ref: 'g15' }, { ref: 'v08' }, { ref: 't00' },
        { key: 'rev8', text: 'Révision : refais les exercices des leçons où tu as moins de 80 %' }] },

    // ---------- Phase 2 : Construire ----------
    { n: 9, title: 'Raconter le passé (1)', goal: 'Was / were, prétérit régulier, premiers verbes irréguliers.',
      tasks: [{ ref: 'x02' }, { ref: 'g16' }, { ref: 'g17' }, { ref: 'r01' }, { ref: 'v11' }] },
    { n: 10, title: 'Raconter le passé (2)', goal: 'Verbes irréguliers et questions au passé. Partie 1 du TOEIC.',
      tasks: [{ ref: 'g18' }, { ref: 'g19' }, { ref: 'v12' }, { ref: 't01' }, { ref: 't01', set: 1 },
        { key: 'verbs10', text: 'Verbes irréguliers : 10 minutes de flashcards « Essentiels » 3 fois cette semaine' }] },
    { n: 11, title: 'Le passé en cours et le futur', goal: 'Past continuous, will, be going to. Partie 2 du TOEIC.',
      tasks: [{ ref: 'g20' }, { ref: 'g21' }, { ref: 'v13' }, { ref: 't02' }, { ref: 't02', set: 1 }] },
    { n: 12, title: 'Comparer et quantifier', goal: 'Comparatifs, quantifieurs, prononciation -s / -ed.',
      tasks: [{ ref: 'g22' }, { ref: 'g23' }, { ref: 'p05' }, { ref: 'v14' }, { ref: 't01', set: 2 }, { ref: 't02', set: 2 }] },
    { n: 13, title: 'Le present perfect', goal: 'Le temps le plus piégeux pour les francophones.',
      tasks: [{ ref: 'g24' }, { ref: 'g25' }, { ref: 'v15' }, { ref: 't02', set: 3 },
        { key: 'imm13', text: 'Immersion : 2 épisodes de « 6 Minute English » (BBC Learning English), transcription à côté' }] },
    { n: 14, title: 'Les modaux', goal: 'Obligation, conseil, possibilité, politesse. Partie 5 du TOEIC.',
      tasks: [{ ref: 'g26' }, { ref: 'g27' }, { ref: 'v16' }, { ref: 't05' }, { ref: 't05', set: 1 }] },
    { n: 15, title: 'Structures de verbes', goal: '-ing ou to ? Les pronoms.',
      tasks: [{ ref: 'g28' }, { ref: 'g29' }, { ref: 'v17' }, { ref: 't05', set: 2 }, { ref: 't01', set: 3 }] },
    { n: 16, title: 'Bilan de la phase 2', goal: 'Adverbes, adjectifs en -ed / -ing et consolidation.',
      tasks: [{ ref: 'g30' }, { ref: 'v18' }, { ref: 't05', set: 3 }, { ref: 't02', set: 4 },
        { key: 'rev16', text: 'Révision : relis tous les encadrés « À retenir » des leçons 16 à 30' }] },

    // ---------- Phase 3 : Accélérer ----------
    { n: 17, title: 'Le temps qui dure', goal: 'Present perfect continu, past perfect. Partie 3 du TOEIC.',
      tasks: [{ key: 'x01b', text: 'Refais le test de niveau (version A) pour mesurer tes progrès depuis le début' },
        { ref: 'g31' }, { ref: 'g32' }, { ref: 'v19' }, { ref: 'p06' }, { ref: 't03' }, { ref: 't03', set: 1 }] },
    { n: 18, title: 'Les conditionnels', goal: 'If, unless, would… Toutes les hypothèses.',
      tasks: [{ ref: 'g33' }, { ref: 'g34' }, { ref: 'v20' }, { ref: 't03', set: 2 }, { ref: 't05', set: 4 }] },
    { n: 19, title: 'Passif et relatives', goal: 'Deux structures omniprésentes au TOEIC. Partie 4.',
      tasks: [{ ref: 'g35' }, { ref: 'g36' }, { ref: 'v21' }, { ref: 't04' }, { ref: 't04', set: 1 }, { ref: 't05', set: 5 }] },
    { n: 20, title: 'Discours indirect et connecteurs', goal: 'Relier ses idées. Partie 6 du TOEIC.',
      tasks: [{ ref: 'g37' }, { ref: 'g38' }, { ref: 'v22' }, { ref: 'p07' }, { ref: 't06' }, { ref: 't06', set: 1 }, { ref: 't04', set: 2 }] },
    { n: 21, title: 'La mécanique des mots', goal: 'Formation des mots et prépositions. Partie 7 du TOEIC.',
      tasks: [{ ref: 'g39' }, { ref: 'g40' }, { ref: 'v23' }, { ref: 't07' }, { ref: 't07', set: 1 }, { ref: 't06', set: 2 }] },
    { n: 22, title: 'Premier TOEIC blanc', goal: 'Faire le point en conditions réelles.',
      tasks: [{ ref: 'm01' }, { ref: 'g41' }, { ref: 'g45' }, { ref: 'v24' }, { ref: 't07', set: 2 },
        { key: 'ana22', text: 'Analyse ton TOEIC blanc : note tes 3 parties les plus faibles et refais leurs séries' }] },
    { n: 23, title: 'Structures avancées', goal: 'Used to, causatif, question tags, futur antérieur.',
      tasks: [{ ref: 'g42' }, { ref: 'g43' }, { ref: 'g46' }, { ref: 't03', set: 3 }, { ref: 't04', set: 3 }, { ref: 't05', set: 6 }] },
    { n: 24, title: 'Chasser les erreurs', goal: 'Faux amis et erreurs typiques. Entraînement mixte.',
      tasks: [{ ref: 'g44' }, { ref: 't06', set: 3 }, { ref: 't07', set: 3 }, { ref: 't05', set: 7 }] },
    { n: 25, title: 'Niveau B2 en vue', goal: 'Le subjonctif et les séries les plus difficiles de l’écoute et de la lecture.',
      tasks: [{ ref: 'g47' }, { ref: 't03', set: 4 }, { ref: 't04', set: 4 }, { ref: 't07', set: 4 },
        { key: 'rev25', text: 'Révision : refais les exercices des leçons 31 à 47 où tu as moins de 80 %' }] },

    // ---------- Phase 4 : Sprint final ----------
    { n: 26, title: 'Vitesse et précision', goal: 'Les séries niveau B2 des parties 5, 6 et 7.',
      tasks: [{ ref: 't05', set: 8 }, { ref: 't06', set: 4 }, { ref: 't07', set: 5 },
        { key: 'speed26', text: 'Chrono : refais une série de la partie 5 en moins de 4 minutes (20 s par phrase)' }] },
    { n: 27, title: 'Deuxième TOEIC blanc', goal: 'Mesurer tes progrès depuis le premier TOEIC blanc.',
      tasks: [{ ref: 'm02' },
        { key: 'ana27', text: 'Compare tes deux TOEIC blancs (onglet Progrès) et liste tes points faibles restants' }] },
    { n: 28, title: 'Révisions ciblées', goal: 'Transformer tes points faibles en points forts.',
      tasks: [{ key: 'weak28', text: 'Refais toutes les séries TOEIC où tu as moins de 70 %' },
        { key: 'gram28', text: 'Relis les leçons liées à tes erreurs (formation des mots, connecteurs, prépositions, temps)' },
        { key: 'voc28', text: 'Flashcards : vide chaque jour tes révisions, sans exception' }] },
    { n: 29, title: 'Répétition générale', goal: 'Un TOEIC blanc en conditions réelles et de la confiance.',
      tasks: [{ key: 'mock29', text: 'Refais un TOEIC blanc en conditions réelles (écoute unique, chrono, sans pause)' },
        { key: 'p7_29', text: 'Partie 7 : entraîne-toi à lire les questions AVANT les documents' },
        { key: 'imm29', text: 'Immersion : 20 min d’écoute par jour (podcasts, séries) pour habituer ton oreille' }] },
    { n: 30, title: 'La semaine du TOEIC', goal: 'Arriver reposée, confiante et prête.',
      tasks: [{ key: 'light30', text: 'Révisions légères : flashcards et encadrés « À retenir », pas de nouvelles notions' },
        { key: 'guide30', text: 'Relis « Le TOEIC de A à Z » : déroulé, gestion du temps, jour J' },
        { key: 'id30', text: 'Prépare ta pièce d’identité et ta convocation, repère le trajet du centre d’examen' },
        { key: 'sleep30', text: 'La veille : pas de révision après 20 h, bonne nuit de sommeil. Tu es prête 💪' }] }
  ]
};
