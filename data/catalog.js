/* Catalogue de tout le contenu du site.
 * Chaque entrée pointe vers un fichier de données qui appelle LE.register({...}).
 * Les titres doivent être identiques à ceux des fichiers (vérifié par tools/validate.mjs). */
window.LE = window.LE || {};
LE.catalog = {
  guide: [
    { id: 'a00', title: 'Mode d’emploi : réussir le TOEIC en 7 mois', level: 'A1', file: 'data/guide/a00.js' },
    { id: 't00', title: 'Le TOEIC de A à Z', level: 'A2', file: 'data/toeic/t00.js' }
  ],

  grammar: [
    // Phase 1 : Fondations (A1)
    { id: 'g01', title: 'Le verbe « be » au présent', level: 'A1', file: 'data/grammar/g01.js' },
    { id: 'g02', title: 'Pronoms, possessifs et génitif (’s)', level: 'A1', file: 'data/grammar/g02.js' },
    { id: 'g03', title: 'Les articles : a, an, the ou rien', level: 'A1', file: 'data/grammar/g03.js' },
    { id: 'g04', title: 'Le pluriel, dénombrables et indénombrables', level: 'A1', file: 'data/grammar/g04.js' },
    { id: 'g05', title: 'There is / there are', level: 'A1', file: 'data/grammar/g05.js' },
    { id: 'g06', title: 'This, that, these, those et les adjectifs', level: 'A1', file: 'data/grammar/g06.js' },
    { id: 'g07', title: 'Have et have got', level: 'A1', file: 'data/grammar/g07.js' },
    { id: 'g08', title: 'Le présent simple : la forme affirmative', level: 'A1', file: 'data/grammar/g08.js' },
    { id: 'g09', title: 'Le présent simple : négation et questions', level: 'A1', file: 'data/grammar/g09.js' },
    { id: 'g10', title: 'Les adverbes de fréquence', level: 'A1', file: 'data/grammar/g10.js' },
    { id: 'g11', title: 'Les mots interrogatifs (wh- questions)', level: 'A1', file: 'data/grammar/g11.js' },
    { id: 'g12', title: 'Le présent continu (be + -ing)', level: 'A1', file: 'data/grammar/g12.js' },
    { id: 'g13', title: 'Présent simple ou présent continu ?', level: 'A2', file: 'data/grammar/g13.js' },
    { id: 'g14', title: 'In, on, at : le lieu et le temps', level: 'A2', file: 'data/grammar/g14.js' },
    { id: 'g15', title: 'Can, can’t et l’impératif', level: 'A1', file: 'data/grammar/g15.js' },
    // Phase 2 : Construire (A2)
    { id: 'g16', title: 'Le prétérit de « be » : was et were', level: 'A2', file: 'data/grammar/g16.js' },
    { id: 'g17', title: 'Le prétérit des verbes réguliers', level: 'A2', file: 'data/grammar/g17.js' },
    { id: 'g18', title: 'Les verbes irréguliers essentiels', level: 'A2', file: 'data/grammar/g18.js' },
    { id: 'g19', title: 'Le prétérit : négation et questions', level: 'A2', file: 'data/grammar/g19.js' },
    { id: 'g20', title: 'Le past continuous', level: 'A2', file: 'data/grammar/g20.js' },
    { id: 'g21', title: 'Le futur : will, be going to et présent continu', level: 'A2', file: 'data/grammar/g21.js' },
    { id: 'g22', title: 'Comparatifs et superlatifs', level: 'A2', file: 'data/grammar/g22.js' },
    { id: 'g23', title: 'Les quantifieurs : some, any, much, many, few, little…', level: 'A2', file: 'data/grammar/g23.js' },
    { id: 'g24', title: 'Le present perfect', level: 'A2', file: 'data/grammar/g24.js' },
    { id: 'g25', title: 'Present perfect ou prétérit ? (for, since, yet, already…)', level: 'B1', file: 'data/grammar/g25.js' },
    { id: 'g26', title: 'Obligation et conseil : must, have to, should', level: 'A2', file: 'data/grammar/g26.js' },
    { id: 'g27', title: 'Possibilité et politesse : may, might, could, would', level: 'B1', file: 'data/grammar/g27.js' },
    { id: 'g28', title: 'Verbe + -ing ou verbe + to ?', level: 'B1', file: 'data/grammar/g28.js' },
    { id: 'g29', title: 'Les pronoms : compléments, réfléchis et indéfinis', level: 'A2', file: 'data/grammar/g29.js' },
    { id: 'g30', title: 'Les adverbes et les adjectifs en -ed / -ing', level: 'A2', file: 'data/grammar/g30.js' },
    // Phase 3 : Accélérer (B1 → B2)
    { id: 'g31', title: 'Le present perfect continu', level: 'B1', file: 'data/grammar/g31.js' },
    { id: 'g32', title: 'Le past perfect (plus-que-parfait)', level: 'B1', file: 'data/grammar/g32.js' },
    { id: 'g33', title: 'Les conditionnels 0 et 1 (if, unless, when…)', level: 'B1', file: 'data/grammar/g33.js' },
    { id: 'g34', title: 'Les conditionnels 2 et 3, et wish', level: 'B2', file: 'data/grammar/g34.js' },
    { id: 'g35', title: 'La voix passive', level: 'B1', file: 'data/grammar/g35.js' },
    { id: 'g36', title: 'Les propositions relatives : who, which, that, whose, where', level: 'B1', file: 'data/grammar/g36.js' },
    { id: 'g37', title: 'Le discours indirect', level: 'B2', file: 'data/grammar/g37.js' },
    { id: 'g38', title: 'Les connecteurs logiques : although, despite, however…', level: 'B1', file: 'data/grammar/g38.js' },
    { id: 'g39', title: 'La formation des mots : nom, verbe, adjectif, adverbe', level: 'B1', file: 'data/grammar/g39.js' },
    { id: 'g40', title: 'Les prépositions après verbes, noms et adjectifs', level: 'B1', file: 'data/grammar/g40.js' },
    { id: 'g41', title: 'Les phrasal verbs essentiels du monde pro', level: 'B2', file: 'data/grammar/g41.js' },
    { id: 'g42', title: 'Used to, be used to, get used to et le causatif', level: 'B2', file: 'data/grammar/g42.js' },
    { id: 'g43', title: 'Question tags, so / neither et réponses courtes', level: 'B1', file: 'data/grammar/g43.js' },
    { id: 'g44', title: 'Faux amis et erreurs typiques des francophones', level: 'B1', file: 'data/grammar/g44.js' },
    { id: 'g45', title: 'Les prépositions clés du TOEIC : by, until, within, during, among…', level: 'B1', file: 'data/grammar/g45.js' },
    { id: 'g46', title: 'Le futur continu et le futur antérieur', level: 'B2', file: 'data/grammar/g46.js' },
    { id: 'g47', title: 'Le subjonctif anglais et les tournures formelles', level: 'B2', file: 'data/grammar/g47.js' }
  ],

  pron: [
    { id: 'p01', title: 'Les voyelles : sons courts et sons longs', level: 'A1', file: 'data/pron/p01.js' },
    { id: 'p02', title: 'Les consonnes piégeuses : th, h, r, w, -ng', level: 'A1', file: 'data/pron/p02.js' },
    { id: 'p03', title: 'Chiffres, lettres, dates et prix à l’oral', level: 'A1', file: 'data/pron/p03.js' },
    { id: 'p04', title: 'L’accent de mot et l’accent de phrase', level: 'A2', file: 'data/pron/p04.js' },
    { id: 'p05', title: 'Les terminaisons -s et -ed à l’oral', level: 'A2', file: 'data/pron/p05.js' },
    { id: 'p06', title: 'L’anglais parlé réel : formes faibles, liaisons, contractions', level: 'B1', file: 'data/pron/p06.js' },
    { id: 'p07', title: 'Les accents du TOEIC : américain, britannique, australien, canadien', level: 'B1', file: 'data/pron/p07.js' }
  ],

  vocab: [
    { id: 'v01', title: 'Premiers pas : saluer, se présenter, être poli', level: 'A1', file: 'data/vocab/v01.js' },
    { id: 'v02', title: 'Nombres, heures, dates et prix', level: 'A1', file: 'data/vocab/v02.js' },
    { id: 'v03', title: 'Les gens : famille, description, caractère', level: 'A1', file: 'data/vocab/v03.js' },
    { id: 'v04', title: 'La maison et la routine quotidienne', level: 'A1', file: 'data/vocab/v04.js' },
    { id: 'v05', title: 'Nourriture, restaurant et courses', level: 'A1', file: 'data/vocab/v05.js' },
    { id: 'v06', title: 'La ville, les directions et les transports', level: 'A1', file: 'data/vocab/v06.js' },
    { id: 'v07', title: 'Le corps et la santé', level: 'A2', file: 'data/vocab/v07.js' },
    { id: 'v08', title: 'Loisirs, sport et météo', level: 'A2', file: 'data/vocab/v08.js' },
    { id: 'v09', title: 'Shopping, vêtements et couleurs', level: 'A1', file: 'data/vocab/v09.js' },
    { id: 'v10', title: 'Les verbes essentiels', level: 'A1', file: 'data/vocab/v10.js' },
    { id: 'v11', title: 'Le bureau : lieux, matériel et tâches', level: 'A2', file: 'data/vocab/v11.js' },
    { id: 'v12', title: 'Communication pro : e-mails, téléphone, réunions', level: 'A2', file: 'data/vocab/v12.js' },
    { id: 'v13', title: 'Recrutement et ressources humaines', level: 'B1', file: 'data/vocab/v13.js' },
    { id: 'v14', title: 'Voyages d’affaires : aéroport, hôtel, réservations', level: 'A2', file: 'data/vocab/v14.js' },
    { id: 'v15', title: 'Finance, banque et comptabilité', level: 'B1', file: 'data/vocab/v15.js' },
    { id: 'v16', title: 'Marketing, ventes et service client', level: 'B1', file: 'data/vocab/v16.js' },
    { id: 'v17', title: 'Achats, commandes, livraisons et stocks', level: 'B1', file: 'data/vocab/v17.js' },
    { id: 'v18', title: 'Industrie, production et sécurité', level: 'B1', file: 'data/vocab/v18.js' },
    { id: 'v19', title: 'Informatique et technologie', level: 'B1', file: 'data/vocab/v19.js' },
    { id: 'v20', title: 'Immobilier, bâtiments et entretien', level: 'B1', file: 'data/vocab/v20.js' },
    { id: 'v21', title: 'Événements, conférences et salons', level: 'B1', file: 'data/vocab/v21.js' },
    { id: 'v22', title: 'Contrats, juridique et assurances', level: 'B2', file: 'data/vocab/v22.js' },
    { id: 'v23', title: 'Adjectifs et adverbes clés du TOEIC', level: 'B1', file: 'data/vocab/v23.js' },
    { id: 'v24', title: 'Collocations : make, do, take, have…', level: 'B1', file: 'data/vocab/v24.js' }
  ],

  ref: [
    { id: 'r01', title: 'Les verbes irréguliers', level: 'A2', file: 'data/ref/r01.js' }
  ],

  toeic: [
    { id: 't01', part: 1, title: 'Partie 1 : Photographies', level: 'A2', file: 'data/toeic/t01.js' },
    { id: 't02', part: 2, title: 'Partie 2 : Questions-réponses', level: 'A2', file: 'data/toeic/t02.js' },
    { id: 't03', part: 3, title: 'Partie 3 : Conversations', level: 'B1', file: 'data/toeic/t03.js' },
    { id: 't04', part: 4, title: 'Partie 4 : Exposés', level: 'B1', file: 'data/toeic/t04.js' },
    { id: 't05', part: 5, title: 'Partie 5 : Phrases à compléter', level: 'B1', file: 'data/toeic/t05.js' },
    { id: 't06', part: 6, title: 'Partie 6 : Textes à compléter', level: 'B1', file: 'data/toeic/t06.js' },
    { id: 't07', part: 7, title: 'Partie 7 : Compréhension écrite', level: 'B1', file: 'data/toeic/t07.js' }
  ],

  mock: [
    { id: 'm01', title: 'TOEIC blanc n°1', files: ['data/mock/m01-L.js', 'data/mock/m01-R.js'] },
    { id: 'm02', title: 'TOEIC blanc n°2', files: ['data/mock/m02-L.js', 'data/mock/m02-R.js'] }
  ],

  placement: [
    { id: 'x01', title: 'Test de niveau (version A)', file: 'data/placement/x01.js' },
    { id: 'x02', title: 'Test de niveau (version B)', file: 'data/placement/x02.js' }
  ]
};
