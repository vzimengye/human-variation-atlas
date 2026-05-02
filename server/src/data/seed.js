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
    prompt: 'Which statement best describes human biological variation?',
    options: [
      'Human traits usually vary in complex patterns, not fixed racial boxes.',
      'Every racial group has completely separate genes.',
      'Skin color tells us everything important about a person\'s ancestry.',
      'Race is always a perfect biological category.'
    ],
    correctAnswer:
      'Human traits usually vary in complex patterns, not fixed racial boxes.',
    feedback:
      'Human variation is real, but it does not divide neatly into racial groups. Many traits overlap across populations or change gradually across geography.'
  },
  {
    prompt: 'Why is skin color not a good way to divide humans into biological races?',
    options: [
      'Skin color has no biological basis.',
      'Skin color is shaped partly by UV radiation and varies gradually across geography.',
      'Everyone with the same skin color has the same ancestry.',
      'Skin color is only about culture, not biology.'
    ],
    correctAnswer:
      'Skin color is shaped partly by UV radiation and varies gradually across geography.',
    feedback:
      'Skin color is biological, but it is not a racial boundary. It is strongly connected to adaptation to sunlight and UV exposure.'
  },
  {
    prompt: 'What does lactose tolerance show about human variation?',
    options: [
      'All humans can digest milk equally well.',
      'Lactose tolerance belongs to one race.',
      'Similar traits can evolve independently in different populations.',
      'Diet has no relationship to human evolution.'
    ],
    correctAnswer:
      'Similar traits can evolve independently in different populations.',
    feedback:
      'Lactose tolerance developed in different populations with histories of milk use. This shows how culture and biology can shape each other.'
  },
  {
    prompt: 'Why is sickle cell trait common in some parts of the world?',
    options: [
      'Because it is tied to one race.',
      'Because carrying one copy of the sickle cell gene can protect against severe malaria.',
      'Because it only appears in Africa.',
      'Because it has no connection to environment.'
    ],
    correctAnswer:
      'Because carrying one copy of the sickle cell gene can protect against severe malaria.',
    feedback:
      'Sickle cell trait is better understood through malaria environments than through race. This is a good example of why geography and disease history matter.'
  },
  {
    prompt: 'What is the best way to understand ancestry?',
    options: [
      'As the exact same thing as race.',
      'As a fixed label with no overlap.',
      'As a history of migration, connection, and mixing.',
      'As something that can always be seen from appearance.'
    ],
    correctAnswer:
      'As a history of migration, connection, and mixing.',
    feedback:
      'Ancestry can be meaningful, but it is not simple or pure. Human populations have long histories of movement and connection.'
  },
  {
    prompt: 'Why can visible traits be misleading?',
    options: [
      'Because visible traits are always fake.',
      'Because one visible trait does not tell us the whole story about a person\'s biology or ancestry.',
      'Because biology only happens inside the body.',
      'Because all visible traits are caused by culture.'
    ],
    correctAnswer:
      'Because one visible trait does not tell us the whole story about a person\'s biology or ancestry.',
    feedback:
      'Traits like skin color or hair texture are real, but they are only small parts of human variation. They cannot explain a person\'s full ancestry, identity, or biology.'
  },
  {
    prompt: 'Which statement about hair texture is most accurate?',
    options: [
      'Hair texture creates clear biological races.',
      'Hair texture varies among humans, but it does not sort people into fixed racial groups.',
      'People from the same racial category always have the same hair texture.',
      'Hair texture is not biological at all.'
    ],
    correctAnswer:
      'Hair texture varies among humans, but it does not sort people into fixed racial groups.',
    feedback:
      'Hair texture is a real human trait, but it varies in complicated ways. Like skin color, it should not be treated as a simple racial boundary.'
  },
  {
    prompt: 'What does it mean to say that race is "socially real"?',
    options: [
      'Race is a perfect biological category.',
      'Race has no effect on people\'s lives.',
      'Race is created by society, but it still affects how people are treated.',
      'Race only matters in history, not today.'
    ],
    correctAnswer:
      'Race is created by society, but it still affects how people are treated.',
    feedback:
      'Race is not a precise biological system, but it still has real social consequences. People experience race through institutions, stereotypes, discrimination, and identity.'
  },
  {
    prompt: 'Which example best shows that environment can shape human traits?',
    options: [
      'Sickle cell trait being connected to malaria regions.',
      'A person choosing their favorite color.',
      'Everyone having the exact same genes.',
      'Race determining personality.'
    ],
    correctAnswer:
      'Sickle cell trait being connected to malaria regions.',
    feedback:
      'Sickle cell trait shows how a genetic trait can become more common in certain environments because it gives some protection against malaria.'
  },
  {
    prompt: 'What is one problem with using race as a shortcut for biology?',
    options: [
      'It explains every trait too accurately.',
      'It ignores the complexity of genetics, environment, ancestry, and history.',
      'It only works for hair texture.',
      'It proves that populations never mixed.'
    ],
    correctAnswer:
      'It ignores the complexity of genetics, environment, ancestry, and history.',
    feedback:
      'Race is too broad and too political to explain human biology accurately. Human variation depends on many factors, not one label.'
  },
  {
    prompt: 'Which statement is most careful and accurate?',
    options: [
      'Race is completely biological.',
      'Race is completely meaningless.',
      'Race is socially meaningful, but it does not accurately map human biological variation.',
      'Race can predict every genetic trait.'
    ],
    correctAnswer:
      'Race is socially meaningful, but it does not accurately map human biological variation.',
    feedback:
      'This is the main idea of the project. Race affects society, but it is not a clean biological map.'
  },
  {
    prompt: 'Why should we be careful with ancestry DNA results?',
    options: [
      'They are always fake.',
      'They can be useful, but they are estimates based on reference populations and should not be treated as fixed racial truth.',
      'They prove that racial groups are pure.',
      'They show that migration never happened.'
    ],
    correctAnswer:
      'They can be useful, but they are estimates based on reference populations and should not be treated as fixed racial truth.',
    feedback:
      'Ancestry tests can tell us something, but they do not reveal a simple or permanent racial identity. The result depends on data, comparison groups, and interpretation.'
  },
  {
    prompt: 'Which statement about human populations is most accurate?',
    options: [
      'Human groups have always been completely separate.',
      'Human populations have mixed and moved throughout history.',
      'Each population has its own totally separate set of genes.',
      'Human migration has no effect on biology.'
    ],
    correctAnswer:
      'Human populations have mixed and moved throughout history.',
    feedback:
      'Human history includes migration, mixing, and shared ancestry. This is one reason racial categories do not describe biology very well.'
  },
  {
    prompt: 'What is the main lesson from looking at several traits together?',
    options: [
      'Every trait follows the same racial pattern.',
      'Different traits have different histories and patterns of variation.',
      'All traits are caused by one gene.',
      'Biology is not relevant to human variation.'
    ],
    correctAnswer:
      'Different traits have different histories and patterns of variation.',
    feedback:
      'Skin color, lactose tolerance, sickle cell trait, hair texture, and ancestry do not all follow the same pattern. That is exactly why race is too simple as a biological explanation.'
  },
  {
    prompt: 'Which title best matches the idea of this project?',
    options: [
      'Race Explains All Human Difference',
      'Human Variation Beyond Race',
      'Biology Does Not Exist',
      'One Trait, One Race'
    ],
    correctAnswer:
      'Human Variation Beyond Race',
    feedback:
      'The project is not saying humans are all identical. It is saying human difference exists, but racial boxes are not a good way to explain it.'
  }
];
