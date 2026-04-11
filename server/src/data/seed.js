export const seedTraits = [
  {
    slug: 'skin-color',
    title: 'Skin Color',
    category: 'Clinal variation and adaptation',
    keyQuestion:
      'Why does a highly visible trait vary across geography without producing fixed biological races?',
    summary:
      'Skin pigmentation changes gradually across latitude, UV exposure, migration, and ancestry. It is a cline, not a clean racial boundary.',
    whyItMatters:
      'This trait helps visitors see that one visible feature can shift with ecology and adaptation while still failing to divide humanity into stable natural boxes.',
    commonMyth:
      'Skin color reveals a person’s total biological ancestry or can sort humanity into a few natural races.',
    betterFraming:
      'Pigmentation is one trait among many. Different traits have different histories, so skin color should not be treated as a shortcut for everything else about a population.',
    scientificContext:
      'Human genetic differentiation is relatively low and much human variation exists within populations rather than between them. Skin color fits that point well because it varies with environment, but it does not predict the rest of the genome.',
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
      'Lactase persistence shows how cultural practices and population history can shape biology together. It is a strong example of gene-culture coevolution rather than racial essence.',
    whyItMatters:
      'Lactase persistence is linked to migration, selection, and steppe-related gene flow in South Asia, showing that traits spread through historical processes instead of timeless racial categories.',
    commonMyth:
      'If a trait is common in one region, it must naturally define a race from that region.',
    betterFraming:
      'Lactose tolerance is better understood through dairying history, migration, and selection. Similar outcomes can appear in different populations for historical reasons, not because race is biologically fixed.',
    scientificContext:
      'DNA records population history and admixture. Steppe-related gene flow is associated with lactase persistence in South Asia, which makes this trait a case study in ancestry, adaptation, and historical movement all at once.',
    methodsNote:
      'Researchers compare ancient and present-day genomes, trace allele frequency changes through time, and link those patterns to archaeology and food practices.',
    wikipediaTitle: 'Lactase persistence'
  },
  {
    slug: 'sickle-cell',
    title: 'Sickle Cell Trait',
    category: 'Selection and disease ecology',
    keyQuestion:
      'What changes when a trait is explained through malaria ecology instead of race?',
    summary:
      'Sickle cell trait is best understood through malaria environments, mutation, and balancing selection. It is a classic example of why disease traits should not be racialized.',
    whyItMatters:
      'This case links genetics to natural selection: the trait persists because heterozygotes can have an advantage in malarial settings, not because one race "owns" the trait.',
    commonMyth:
      'Sickle cell is a trait that belongs to one race.',
    betterFraming:
      'A better explanation looks at ecology, selection, and population history. Similar selective pressures can produce overlapping patterns across Africa, the Mediterranean, the Middle East, and South Asia.',
    scientificContext:
      'Sickle cell is useful because it demonstrates balancing selection: a harmful allele can persist when the heterozygous state offers protection in a specific environment.',
    methodsNote:
      'Scientists compare allele distributions with malaria exposure, model fitness tradeoffs, and examine how migration changes the geography of disease-related traits.',
    wikipediaTitle: 'Sickle cell trait'
  },
  {
    slug: 'ancestry-and-identity',
    title: 'Ancestry and Identity',
    category: 'Interpretation and ethics',
    keyQuestion:
      'Why do ancestry categories look solid in public debate when the underlying history is mixed and statistical?',
    summary:
      'Genetic ancestry can be informative, but ancestry components are statistical constructs, not timeless biological peoples.',
    whyItMatters:
      'This section lets the site move beyond visible traits and address broader human questions about identity, belonging, colonialism, nationhood, and the ethics of interpreting genetic data.',
    commonMyth:
      'DNA can reveal a pure people, settle identity debates, or make morphology and appearance equal to ancestry.',
    betterFraming:
      'Genetics can illuminate migration and admixture, but identity is never reducible to a pie chart. Kennewick Man, Mexico, and Indigenous genetics debates all show why biological evidence must be interpreted carefully and ethically.',
    scientificContext:
      'Low human FST, admixture analysis, Kennewick Man, sex-biased admixture in colonial Mexico, and the warning that what looks like an ancestry component may simply be a statistical model all point to the same lesson: interpretation matters as much as measurement.',
    methodsNote:
      'Researchers use PCA, admixture models, ancient DNA, and FST, but these methods need historical and ethical context.',
    wikipediaTitle: 'Genetic admixture'
  }
];

export const seedQuizQuestions = [
  {
    prompt: 'Which statement best matches a major theme of this atlas?',
    options: [
      'Human traits line up into the same racial groups every time.',
      'Different traits follow different evolutionary and historical paths, so race is not a fixed biological system.',
      'Visible traits are the most reliable way to classify human populations biologically.'
    ],
    correctAnswer:
      'Different traits follow different evolutionary and historical paths, so race is not a fixed biological system.'
  },
  {
    prompt: 'What does low human FST suggest in this context?',
    options: [
      'Humans show relatively little genetic differentiation between populations compared with many species.',
      'Human populations are almost entirely separate biological types.',
      'All genetic variation is between continents rather than within populations.'
    ],
    correctAnswer:
      'Humans show relatively little genetic differentiation between populations compared with many species.'
  },
  {
    prompt: 'Why is lactase persistence such a useful example here?',
    options: [
      'It shows that culture, migration, and selection can shape biology together.',
      'It proves food tolerance is determined by race.',
      'It shows all ancient populations digested milk in the same way.'
    ],
    correctAnswer:
      'It shows that culture, migration, and selection can shape biology together.'
  },
  {
    prompt: 'What is the most accurate takeaway from admixture analysis?',
    options: [
      'Ancestry components always represent real and pure populations from the past.',
      'Admixture results are statistical tools that must be interpreted with historical caution.',
      'External appearance is always enough to identify ancestry.'
    ],
    correctAnswer:
      'Admixture results are statistical tools that must be interpreted with historical caution.'
  }
];
