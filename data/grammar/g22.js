LE.register({
  id: 'g22',
  kind: 'grammar',
  title: 'Comparatifs et superlatifs',
  subtitle: 'Comparer des prix, des offres et des résultats : plus, moins, aussi, le plus',
  level: 'A2',
  minutes: 40,
  goals: [
    'Former le comparatif (<i>cheaper, more expensive</i>) et le superlatif (<i>the cheapest, the most expensive</i>)',
    'Connaître les formes irrégulières : <i>better, the best, worse, the worst</i>…',
    'Exprimer l’égalité et l’infériorité : <i>as … as, not as … as, less, the same as</i>',
    'Nuancer (<i>much cheaper</i>) et utiliser <i>one of the best…</i> et <i>the sooner, the better</i>'
  ],
  blocks: [
    { type: 'h', text: 'À quoi ça sert ?' },
    { type: 'p', html: 'Pour comparer des prix, des offres, des candidats ou des résultats, tu as besoin des <b>comparatifs</b> (plus… que, moins… que, aussi… que) et des <b>superlatifs</b> (le plus…, le moins…). En français, on ajoute simplement « plus » ou « le plus ». En anglais, il y a <b>deux méthodes</b>, selon la longueur de l’adjectif : ajouter <b>-er / -est</b> à la fin, ou mettre <b>more / most</b> devant.' },
    { type: 'examples', items: [
      { en: 'Our new office is bigger than the old one.', fr: 'Notre nouveau bureau est plus grand que l’ancien.' },
      { en: 'This hotel is more expensive than that one.', fr: 'Cet hôtel est plus cher que celui-là.' },
      { en: 'Friday is the busiest day of the week.', fr: 'Le vendredi est le jour le plus chargé de la semaine.' },
      { en: 'This is the most important meeting of the year.', fr: 'C’est la réunion la plus importante de l’année.' }
    ] },

    { type: 'h', text: 'La formation : -er ou more ?' },
    { type: 'p', html: 'Tout dépend du nombre de <b>syllabes</b> de l’adjectif (les « morceaux » que l’on prononce : <i>cheap</i> = 1 syllabe, <i>ea-sy</i> = 2, <i>ex-pen-sive</i> = 3). Le comparatif est suivi de <b>than</b> (que) ; le superlatif est précédé de <b>the</b>.' },
    { type: 'table', head: ['Adjectif', 'Comparatif (+ than)', 'Superlatif (the…)', 'Règle'], rows: [
      ['cheap (bon marché)', 'cheap<b>er</b>', 'the cheap<b>est</b>', '1 syllabe → <b>-er / -est</b>'],
      ['nice (agréable)', 'nice<b>r</b>', 'the nice<b>st</b>', '1 syllabe en <b>-e</b> → <b>-r / -st</b>'],
      ['big (grand)', 'bi<b>gger</b>', 'the bi<b>ggest</b>', '1 syllabe, 1 voyelle + 1 consonne → on double la consonne'],
      ['easy (facile)', 'eas<b>ier</b>', 'the eas<b>iest</b>', '2 syllabes en <b>-y</b> → <b>-ier / -iest</b>'],
      ['modern (moderne)', '<b>more</b> modern', 'the <b>most</b> modern', '2 syllabes (pas en -y) → <b>more / most</b>'],
      ['expensive (cher)', '<b>more</b> expensive', 'the <b>most</b> expensive', '3 syllabes ou plus → <b>more / most</b>']
    ], caption: 'Quelques adjectifs de 2 syllabes (surtout en <i>-le, -ow, -er</i>, et <i>quiet</i>) prennent aussi <b>-er</b> : <i>simpler, narrower, quieter</i> ; souvent, les deux formes sont possibles (<i>quieter</i> ou <i>more quiet</i>). Pour le TOEIC, la règle du tableau suffit dans la grande majorité des cas.' },
    { type: 'box', style: 'tip', title: 'L’orthographe en détail', html: '• Adjectif terminé par <b>-e</b> : on ajoute seulement <b>-r / -st</b> : <i>large → larger</i>, <i>safe → the safest</i>.<br>• Mot d’une syllabe terminé par <b>une seule voyelle + une consonne</b> : on double la consonne : <i>big → bigger</i>, <i>hot → the hottest</i>, <i>thin → thinner</i>. Mais <i>cheap → cheaper</i> (deux voyelles) et <i>new → newer</i> (on ne double jamais le <b>w</b>).<br>• <b>Consonne + y</b> : le <b>y</b> devient <b>i</b> : <i>happy → happier</i>, <i>busy → the busiest</i>, <i>early → earlier</i>, <i>heavy → heavier</i>.' },
    { type: 'examples', items: [
      { en: 'This laptop is cheaper than the old one.', fr: 'Cet ordinateur portable est moins cher que l’ancien.', note: 'L’anglais préfère souvent <i>cheaper</i> (« plus bon marché ») là où le français dit « moins cher ».' },
      { en: 'The second test was easier than the first one.', fr: 'Le deuxième test était plus facile que le premier.' },
      { en: "It's hotter today than yesterday.", fr: 'Il fait plus chaud aujourd’hui qu’hier.' },
      { en: 'Online training is more convenient than classroom training.', fr: 'La formation en ligne est plus pratique que la formation en salle.' }
    ] },
    { type: 'box', style: 'warn', title: 'Pièges : more + -er, et « que » = than', html: '<span class="ko">more cheaper</span> → <span class="ok">cheaper</span> (jamais les deux à la fois)<br><span class="ko">more big</span> → <span class="ok">bigger</span> ; <span class="ko">expensiver</span> → <span class="ok">more expensive</span><br>Après un comparatif, « que » se dit <b>than</b>, pas <i>that</i> : <span class="ko">bigger that</span> → <span class="ok">bigger than</span>. Attention à l’orthographe : <b>than</b> (que) ≠ <b>then</b> (ensuite, alors).' },

    { type: 'h', text: 'Les formes irrégulières' },
    { type: 'table', head: ['Mot', 'Comparatif', 'Superlatif', 'Français'], rows: [
      ['good (bon)', '<b>better</b>', 'the <b>best</b>', 'meilleur → le meilleur'],
      ['well (bien)', '<b>better</b>', 'the <b>best</b>', 'mieux → le mieux'],
      ['bad (mauvais)', '<b>worse</b>', 'the <b>worst</b>', 'pire → le pire'],
      ['far (loin)', '<b>farther / further</b>', 'the <b>farthest / furthest</b>', 'plus loin → le plus loin'],
      ['many / much (beaucoup de)', '<b>more</b>', 'the <b>most</b>', 'plus de → le plus de'],
      ['few (peu de + nom pluriel)', '<b>fewer</b>', 'the <b>fewest</b>', 'moins de → le moins de'],
      ['little (peu de + indénombrable)', '<b>less</b>', 'the <b>least</b>', 'moins de → le moins de']
    ], caption: '<i>many</i> s’emploie avec les noms dénombrables (<i>many clients</i>), <i>much</i> avec les indénombrables (<i>much time</i>). De même, « moins de » se dit <b>fewer</b> devant un nom pluriel (<i>fewer clients</i>) et <b>less</b> devant un indénombrable (<i>less time</i>) : voir la leçon « Les quantifieurs : some, any, much, many, few, little… ».' },
    { type: 'box', style: 'tip', title: 'Farther ou further ?', html: 'Pour une <b>distance</b>, les deux sont corrects (<i>farther</i> est plus fréquent en américain). Mais seul <b>further</b> veut aussi dire « supplémentaire » : <i>For <b>further</b> information, please contact our office.</i> (Pour plus d’informations, contactez notre bureau.) Une expression très fréquente au TOEIC.' },
    { type: 'examples', items: [
      { en: 'Our sales are better this year than last year.', fr: 'Nos ventes sont meilleures cette année que l’année dernière.' },
      { en: 'She speaks English better than her manager.', fr: 'Elle parle mieux anglais que sa responsable.' },
      { en: 'The traffic was worse than we expected.', fr: 'La circulation était pire que prévu.' },
      { en: 'This is the best offer we have received.', fr: 'C’est la meilleure offre que nous ayons reçue.' },
      { en: 'We need more time and less paperwork.', fr: 'Il nous faut plus de temps et moins de paperasse.' }
    ] },
    { type: 'box', style: 'warn', title: 'Pièges : good et bad', html: '<span class="ko">more good</span> / <span class="ko">gooder</span> → <span class="ok">better</span> ; <span class="ko">the most bad</span> / <span class="ko">the baddest</span> → <span class="ok">the worst</span>.<br>« Meilleur » se dit <b>better</b> quand on compare deux choses, et <b>the best</b> pour « le meilleur » de tous : <i>This offer is <b>better</b> than that one.</i> / <i>This is <b>the best</b> offer.</i>' },

    { type: 'h', text: 'Le superlatif : the -est / the most' },
    { type: 'p', html: 'Le superlatif sert à dire qu’une chose est « la plus… » ou « le plus… » dans un groupe. On met <b>the</b> devant (ou un possessif : <i>our biggest client</i>, notre plus gros client). Après le superlatif, on trouve souvent <b>in</b> + un lieu ou un groupe (<i>in the company, in the city</i>) ou <b>of</b> + une période ou un nombre (<i>of the year, of the three</i>).' },
    { type: 'examples', items: [
      { en: 'This is the most expensive hotel in the city.', fr: 'C’est l’hôtel le plus cher de la ville.' },
      { en: 'Ms. Adeyemi is the most experienced manager in the department.', fr: 'Mme Adeyemi est la responsable la plus expérimentée du service.' },
      { en: 'December is the busiest month of the year.', fr: 'Décembre est le mois le plus chargé de l’année.' },
      { en: 'Our biggest client is based in Brazil.', fr: 'Notre plus gros client est basé au Brésil.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : « de » après un superlatif', html: 'Le français dit « le plus… <b>de</b> » partout ; l’anglais distingue :<br>• un lieu ou un groupe → <b>in</b> : <span class="ko">the tallest building of the city</span> → <span class="ok">the tallest building in the city</span> ;<br>• une période ou un nombre → <b>of</b> : <i>the best day <b>of</b> the week</i>, <i>the cheapest <b>of</b> the three</i>.' },

    { type: 'h', text: 'Égalité et infériorité : as … as, not as … as, less' },
    { type: 'p', html: '• <b>as + adjectif + as</b> = aussi… que. L’adjectif reste à sa <b>forme de base</b>.<br>• <b>not as + adjectif + as</b> = pas aussi… que. C’est la façon la plus courante de dire « moins… que ».<br>• <b>less + adjectif + than</b> = moins… que (plus formel, surtout avec les adjectifs longs).<br>• <b>the least + adjectif</b> = le moins…<br><span class="ko">as big than</span> / <span class="ko">as bigger as</span> → <span class="ok">as big as</span>' },
    { type: 'examples', items: [
      { en: 'The new model is as fast as the old one.', fr: 'Le nouveau modèle est aussi rapide que l’ancien.' },
      { en: "The test wasn't as difficult as I thought.", fr: 'Le test n’était pas aussi difficile que je le pensais.' },
      { en: 'The bus is less comfortable than the train.', fr: 'Le bus est moins confortable que le train.' },
      { en: 'This is the least expensive option.', fr: 'C’est l’option la moins chère.' }
    ] },

    { type: 'h', text: 'The same as, different from, similar to' },
    { type: 'p', html: 'Pour dire que deux choses sont identiques ou différentes : <b>the same as</b> (le même que, la même chose que), <b>the same</b> + nom + <b>as</b> (le même… que), <b>different from</b> (différent de), <b>similar to</b> (semblable à). Tu entendras aussi <i>different than</i> en américain, mais <b>different from</b> est la forme la plus sûre.' },
    { type: 'examples', items: [
      { en: 'My job title is the same as yours.', fr: 'Mon intitulé de poste est le même que le tien.' },
      { en: 'Her office is on the same floor as mine.', fr: 'Son bureau est au même étage que le mien.' },
      { en: 'This model is different from the one in the catalog.', fr: 'Ce modèle est différent de celui du catalogue.' },
      { en: "Our results are similar to last year's.", fr: 'Nos résultats sont semblables à ceux de l’an dernier.' }
    ] },

    { type: 'h', text: 'Nuancer : much, far, a lot, even, a bit + comparatif' },
    { type: 'p', html: 'Pour dire « <b>beaucoup</b> plus » ou « <b>bien</b> plus », on met <b>much</b>, <b>far</b> ou <b>a lot</b> devant le comparatif (jamais <i>very</i>). <b>Even</b> veut dire « encore » : <i>even better</i> (encore mieux), <i>even cheaper</i> (encore moins cher). Pour « un peu plus », on dit <b>a bit</b>, <b>a little</b> ou <b>slightly</b> (légèrement).<br><span class="ko">very cheaper</span> → <span class="ok">much cheaper</span>' },
    { type: 'examples', items: [
      { en: 'The new software is much faster.', fr: 'Le nouveau logiciel est beaucoup plus rapide.' },
      { en: 'This option is far more expensive.', fr: 'Cette option est bien plus chère.' },
      { en: 'Train tickets are a lot cheaper online.', fr: 'Les billets de train sont beaucoup moins chers en ligne.' },
      { en: 'The meeting room is slightly bigger than my office.', fr: 'La salle de réunion est légèrement plus grande que mon bureau.' }
    ] },

    { type: 'h', text: 'Pour aller plus loin (B1)' },
    { type: 'list', items: [
      '<b>The + comparatif…, the + comparatif…</b> = plus… plus… : <i>The sooner, the better.</i> (Le plus tôt sera le mieux.)',
      '<b>one of the + superlatif + nom au pluriel</b> = l’un(e) des… : <i>one of the best <b>engineers</b></i> (l’un des meilleurs ingénieurs).',
      '<b>comparatif + and + comparatif</b> = de plus en plus : <i>better and better</i>, <i>more and more expensive</i>.'
    ] },
    { type: 'examples', items: [
      { en: 'The sooner, the better.', fr: 'Le plus tôt sera le mieux.' },
      { en: 'The more you practice, the easier it gets.', fr: 'Plus tu t’entraînes, plus ça devient facile.' },
      { en: 'She is one of the best engineers in the company.', fr: 'C’est l’une des meilleures ingénieures de l’entreprise.' },
      { en: 'Housing is getting more and more expensive.', fr: 'Le logement devient de plus en plus cher.' }
    ] },
    { type: 'box', style: 'warn', title: 'Piège : one of the…', html: '<span class="ko">one of the best employee</span> → <span class="ok">one of the best employees</span>.<br>Après <b>one of the</b>, le nom est <b>toujours au pluriel</b> : on en choisit « un » parmi plusieurs.' },

    { type: 'h', text: 'Tableau récapitulatif' },
    { type: 'table', head: ['Idée', 'Structure', 'Exemple'], rows: [
      ['plus… que', '-er + than / more + adj. + than', 'cheaper than / more useful than'],
      ['aussi… que', 'as + adj. + as', 'as cheap as'],
      ['moins… que', 'not as + adj. + as / less + adj. + than', 'not as cheap as / less useful than'],
      ['le plus…', 'the -est / the most + adj.', 'the cheapest / the most useful'],
      ['le moins…', 'the least + adj.', 'the least useful'],
      ['beaucoup plus…', 'much / far / a lot + comparatif', 'much cheaper / far more useful'],
      ['plus… plus…', 'the + comparatif, the + comparatif', 'the sooner, the better']
    ] },

    { type: 'box', style: 'info', title: 'Et au TOEIC ?', html: 'En <b>Partie 5</b>, les questions de comparaison se repèrent facilement :<br>• <b>than</b> dans la phrase → il faut un <b>comparatif</b> : <i>Shipping by sea is ------- than shipping by air.</i> → <b>cheaper</b> ;<br>• <b>the</b> ------- … <b>in / of</b> → il faut un <b>superlatif</b> : <i>the ------- hotel in the city</i> → <b>most expensive</b> ;<br>• <b>as</b> ------- <b>as</b> → forme de base : <i>as reliable as the old model</i> ;<br>• <b>much, far, even</b> juste avant le trou → comparatif : <i>much ------- than expected</i> → <b>higher</b>.<br>Méfie-toi aussi des pièges <b>than / then</b> et <b>as / than</b>.' },
    { type: 'box', style: 'key', title: 'À retenir', html: '• 1 syllabe → <b>-er / the -est</b> (<i>cheaper, the cheapest</i>) ; 2 syllabes en -y → <b>-ier / the -iest</b> (<i>easier</i>) ; 2 syllabes ou plus → <b>more / the most</b> (<i>more expensive</i>).<br>• Irréguliers : <b>good / well → better → the best</b> ; <b>bad → worse → the worst</b> ; <b>far → farther / further</b> ; <b>much / many → more → the most</b> ; <b>little → less → the least</b> ; <b>few → fewer → the fewest</b>.<br>• « que » = <b>than</b> après un comparatif, mais <b>as</b> dans <i>as … as</i> et <i>the same as</i>.<br>• Superlatif + <b>in</b> (lieu, groupe) ou <b>of</b> (période) ; <b>one of the</b> + superlatif + nom <b>pluriel</b>.<br>• <b>much / far / a lot</b> + comparatif = beaucoup plus (jamais <i>very</i>).' }
  ],
  exercises: [
    { type: 'mcq', q: 'My new office is ___ than my old one.', options: ['bigger', 'more big', 'biggest', 'more bigger'], answer: 0, explain: '<i>big</i> = 1 syllabe → <b>-er</b>, avec doublement du <b>g</b> : <b>bigger</b>. Jamais <i>more</i> + -er en même temps.' },
    { type: 'mcq', q: 'This hotel is ___ than the one near the airport.', options: ['expensiver', 'more expensive', 'most expensive', 'the more expensive'], answer: 1, explain: '<i>ex-pen-sive</i> = 3 syllabes → <b>more expensive</b>. <i>than</i> indique un comparatif, pas un superlatif.' },
    { type: 'gap', q: 'The second test was ___ (easy) than the first one.', answers: ['easier'], explain: '2 syllabes en <b>-y</b> → le y devient i + <b>-er</b> : <b>easier</b>.' },
    { type: 'order', answer: 'Friday is the busiest day of the week.', alts: ['The busiest day of the week is Friday.'], fr: 'Le vendredi est le jour le plus chargé de la semaine.', explain: 'Superlatif : <b>the busiest</b> (busy → busiest) + <b>of</b> + une période (<i>of the week</i>).' },
    { type: 'gap', q: 'Our results are ___ (good) this year than last year.', answers: ['better'], explain: '<i>good</i> est irrégulier : comparatif <b>better</b> (jamais « gooder » ni « more good »).' },
    { type: 'gap', q: 'This is the ___ (bad) restaurant in town. The food is terrible!', answers: ['worst'], explain: '<i>the</i> + <i>in town</i> → superlatif. <i>bad</i> est irrégulier : <i>worse</i>, <b>the worst</b>.' },
    { type: 'gap', q: 'Our new warehouse is ___ (far) from the city center than the old one.', answers: ['farther', 'further'], explain: '<i>far</i> est irrégulier : <b>farther</b> ou <b>further</b> (les deux sont corrects pour une distance).' },
    { type: 'gap', q: 'This laptop isn’t as light ___ my old one.', answers: ['as'], explain: '<b>not as … as</b> = pas aussi… que. Avec <i>as</i>, « que » se dit <b>as</b>, jamais <i>than</i>.' },
    { type: 'mcq', q: 'Her salary is the same ___ mine.', options: ['as', 'than', 'that', 'like'], answer: 0, explain: '« le même que » = <b>the same as</b>. <i>the same than</i> et <i>the same like</i> sont des erreurs.' },
    { type: 'mcq', q: 'The new software is ___ faster than the old one.', options: ['very', 'much', 'more', 'most'], answer: 1, explain: '« beaucoup plus » = <b>much</b> + comparatif. <i>very</i> ne s’utilise pas devant un comparatif, et <i>faster</i> contient déjà l’idée de « plus ».' },
    { type: 'mcq', q: 'Mr. Ferreira is one of the best ___ in the company.', options: ['engineer', 'engineers', 'engineering'], answer: 1, explain: '<b>one of the</b> + superlatif + nom au <b>pluriel</b> : <i>one of the best <b>engineers</b></i>.' },
    { type: 'order', answer: 'This is the most important meeting of the year.', fr: 'C’est la réunion la plus importante de l’année.', explain: '<i>im-por-tant</i> = 3 syllabes → <b>the most important</b>, puis <b>of</b> + une période.' },
    { type: 'listen', accent: 'en-AU', say: 'The Maple Court Hotel is closer to the conference center, but the Orla Inn is cheaper and the rooms are bigger.', q: 'Quel est l’avantage de l’Orla Inn ?', options: ['Il est plus proche du centre de congrès.', 'Il est moins cher et ses chambres sont plus grandes.', 'Il est plus moderne et plus calme.'], answer: 1, explain: 'On entend <i>the Orla Inn is <b>cheaper</b> and the rooms are <b>bigger</b></i>. C’est le Maple Court Hotel qui est plus proche (<i>closer</i>).' },
    { type: 'dictation', accent: 'en-GB', say: 'This model uses less energy than the old one.', answers: ['This model uses less energy than the old one'], explain: '« Ce modèle consomme moins d’énergie que l’ancien. » <b>less</b> + nom indénombrable (<i>energy</i>) + <b>than</b>.' },
    { type: 'mcq', q: 'Of all the applicants, Ms. Moreau is the ------- candidate for the position. <small>(style TOEIC)</small>', options: ['qualified', 'more qualified', 'most qualified', 'qualification'], answer: 2, explain: '<i>Of all the applicants</i> + <i>the</i> → superlatif : <b>the most qualified</b> (la candidate la plus qualifiée).' },
    { type: 'mcq', q: 'The more you practice, the ------- your score will be. <small>(style TOEIC)</small>', options: ['high', 'higher', 'highest', 'more high'], answer: 1, explain: 'Structure <b>the + comparatif…, the + comparatif</b> (plus… plus…) : <i>the more…, the <b>higher</b>…</i> <i>high</i> = 1 syllabe → <b>higher</b>.' }
  ]
});
