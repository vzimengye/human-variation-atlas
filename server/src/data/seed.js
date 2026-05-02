export const seedTraits = [
  {
    slug: 'skin-color',
    title: 'Skin Color',
    category: 'UV radiation adaptation',
    keyQuestion:
      'How can skin color vary across geography without producing fixed biological races?',
    summary:
      'Skin color varies gradually across geography. One major factor is ultraviolet radiation: darker pigmentation can help protect the body in high-UV environments, while lighter pigmentation can help with vitamin D production in lower-UV environments.',
    whyItMatters:
      'This trait helps visitors see that a visible feature can shift with ecology and adaptation while still failing to divide humanity into stable natural boxes.',
    commonMyth:
      'Skin color reveals a person\'s total biological ancestry or can sort humanity into a few natural races.',
    betterFraming:
      'Skin color is an adaptation to environment, not a measure of intelligence, behavior, or human worth.',
    scientificContext:
      'Jablonski and Chaplin explain the relationship between skin pigmentation and UV radiation adaptation. Skin color fits the broader point that one visible trait does not predict the rest of the genome.',
    methodsNote:
      'Scientists study pigmentation through maps, allele frequencies, evolutionary models, and comparisons between UV environments and population histories.',
    wikipediaTitle: 'Human skin color'
  },
  {
    slug: 'lactose-tolerance',
    title: 'Lactose Tolerance',
    category: 'Gene-culture coevolution',
    keyQuestion:
      'How can milk digestion become common in some populations without defining a race?',
    summary:
      'Some adults can digest milk because they keep producing lactase after childhood. This trait developed independently in different populations, especially in groups with histories of herding and milk use.',
    whyItMatters:
      'Lactase persistence shows how cultural practices and population history can shape biology together.',
    commonMyth:
      'If a trait is common in one region, it must naturally define a race from that region.',
    betterFraming:
      'A trait can appear in different places for similar reasons. That does not mean it belongs to one race.',
    scientificContext:
      'Tishkoff et al. show that lactase persistence appeared in Africa and Europe through convergent adaptation: similar dietary and cultural pressures can produce similar adaptations independently.',
    methodsNote:
      'Researchers compare ancient and present-day genomes, trace allele frequency changes through time, and link those patterns to archaeology and food practices.',
    wikipediaTitle: 'Lactase persistence'
  },
  {
    slug: 'sickle-cell',
    title: 'Sickle Cell Trait',
    category: 'Malaria selection pressure',
    keyQuestion:
      'What changes when a trait is explained through malaria ecology instead of race?',
    summary:
      'Sickle cell trait is often wrongly treated as a "racial" trait, but it is better understood through malaria. In places where malaria has been common, carrying one copy of the sickle cell gene can offer some protection against severe malaria.',
    whyItMatters:
      'This case links genetics to natural selection: the trait persists because heterozygotes can have an advantage in malarial settings.',
    commonMyth:
      'Sickle cell is a trait that belongs to one race.',
    betterFraming:
      'Genes can involve trade-offs. Their meaning depends on environment, not racial labels.',
    scientificContext:
      'Luzzatto explains the relationship between sickle cell trait and malaria selection pressure. Similar selective pressures can produce overlapping patterns across Africa, the Mediterranean, the Middle East, and South Asia.',
    methodsNote:
      'Scientists compare allele distributions with malaria exposure, model fitness tradeoffs, and examine how migration changes the geography of disease-related traits.',
    wikipediaTitle: 'Sickle cell trait'
  },
  {
    slug: 'hair-texture',
    title: 'Hair Texture',
    category: 'Visible variation and classification',
    keyQuestion:
      'Why can a visible trait feel socially obvious while still failing to create a clean biological boundary?',
    summary:
      'Hair texture varies widely among humans. People often connect hair to race because it is visible, but hair shape and pigmentation are more complicated than everyday racial categories make them seem.',
    whyItMatters:
      'Hair texture helps visitors separate social recognition from biological classification. Visible traits can matter socially without forming fixed natural groups.',
    commonMyth:
      'Hair texture can sort people into simple biological races.',
    betterFraming:
      'Visible traits can feel obvious, but they are not simple biological boundaries.',
    scientificContext:
      'Lasisi et al. studied variation in human scalp hair fiber shape and pigmentation, making hair texture a useful example of how visible traits vary without clean racial borders.',
    methodsNote:
      'Researchers study hair fiber shape, curl, pigmentation, and population variation while avoiding the assumption that appearance maps neatly onto race.',
    wikipediaTitle: 'Hair'
  },
  {
    slug: 'ancestry-and-admixture',
    title: 'Ancestry and Admixture',
    category: 'Migration, mixing, and history',
    keyQuestion:
      'Why should ancestry not be treated as the same thing as race?',
    summary:
      'Human populations have never been completely separate. Migration, mixing, and shared history have shaped human ancestry for a long time. Ancestry can tell us something about family history and population history, but it should not be treated as the same thing as race.',
    whyItMatters:
      'This section moves beyond visible traits and addresses broader questions about identity, belonging, migration, and the ethics of interpreting genetic data.',
    commonMyth:
      'DNA can reveal pure peoples or make appearance equal to ancestry.',
    betterFraming:
      'There are no pure biological populations. Human ancestry is connected and mixed.',
    scientificContext:
      'Korunes and Goldberg discuss human genetic admixture and how migration and gene flow shape human genetic variation. Ancestry components are useful statistical tools, not pure biological peoples.',
    methodsNote:
      'Researchers use PCA, admixture models, ancient DNA, and FST, but these methods need historical and ethical context.',
    wikipediaTitle: 'Genetic admixture'
  }
];

export const seedQuizQuestions = [
  {
    prompt: 'Which statement best describes human genetic variation?',
    options: [
      'Most genetic variation exists within populations, not between populations.',
      'Genetic variation is the same in all populations.',
      'Genetic variation only exists between races.',
      'Races are determined by a single gene.'
    ],
    correctAnswer:
      'Most genetic variation exists within populations, not between populations.'
  },
  {
    prompt: 'What does skin color show in this atlas?',
    options: [
      'It is shaped partly by UV radiation and environment.',
      'It determines intelligence and behavior.',
      'It creates fixed biological races.',
      'It reveals a person\'s entire ancestry.'
    ],
    correctAnswer:
      'It is shaped partly by UV radiation and environment.'
  },
  {
    prompt: 'Why is lactase persistence useful here?',
    options: [
      'It shows that similar adaptations can appear independently in different populations.',
      'It proves food tolerance belongs to one race.',
      'It shows all ancient populations digested milk.',
      'It is unrelated to culture or diet.'
    ],
    correctAnswer:
      'It shows that similar adaptations can appear independently in different populations.'
  },
  {
    prompt: 'How should sickle cell trait be understood?',
    options: [
      'Through malaria selection pressure and environmental trade-offs.',
      'As a trait owned by one race.',
      'As proof that genes have only harmful effects.',
      'As unrelated to geography or disease ecology.'
    ],
    correctAnswer:
      'Through malaria selection pressure and environmental trade-offs.'
  },
  {
    prompt: 'What is the strongest takeaway about ancestry?',
    options: [
      'Human ancestry is connected and mixed, not made of pure biological populations.',
      'Ancestry and race are exactly the same thing.',
      'Migration has not shaped human variation.',
      'Ancestry tests reveal fixed biological races.'
    ],
    correctAnswer:
      'Human ancestry is connected and mixed, not made of pure biological populations.'
  }
];
