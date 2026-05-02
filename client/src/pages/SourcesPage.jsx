function SourcesPage() {
  const sources = [
    {
      citation:
        'Fuentes, A., Ackermann, R. R., Athreya, S., Bolnick, D., Lasisi, T., Lee, S. H., McLean, S. A., & Nelson, R. (2019). AAPA statement on race and racism. American Journal of Physical Anthropology, 169(3), 400-402.',
      doi: 'https://doi.org/10.1002/ajpa.23882',
      type: 'Statement',
    },
    {
      citation:
        'Jablonski, N. G., & Chaplin, G. (2010). Human skin pigmentation as an adaptation to UV radiation. Proceedings of the National Academy of Sciences, 107(Supplement 2), 8962-8968.',
      doi: 'https://doi.org/10.1073/pnas.0914628107',
      type: 'Article',
    },
    {
      citation:
        'Korunes, K. L., & Goldberg, A. (2021). Human genetic admixture. PLOS Genetics, 17(3), Article e1009374.',
      doi: 'https://doi.org/10.1371/journal.pgen.1009374',
      type: 'Article',
    },
    {
      citation:
        'Lasisi, T., Ito, S., Wakamatsu, K., & Shaw, C. N. (2016). Quantifying variation in human scalp hair fiber shape and pigmentation. American Journal of Physical Anthropology, 160(2), 341-352.',
      doi: 'https://doi.org/10.1002/ajpa.22971',
      type: 'Article',
    },
    {
      citation:
        'Luzzatto, L. (2012). Sickle cell anaemia and malaria. Mediterranean Journal of Hematology and Infectious Diseases, 4(1), Article e2012065.',
      doi: 'https://doi.org/10.4084/MJHID.2012.065',
      type: 'Article',
    },
    {
      citation:
        'Tishkoff, S. A., Reed, F. A., Ranciaro, A., Voight, B. F., Babbitt, C. C., Silverman, J. S., Powell, K., Mortensen, H. M., Hirbo, J. B., Osman, M., Ibrahim, M., Omar, S. A., Lema, G., Nyambo, T. B., Ghori, J., Bumpstead, S., Pritchard, J. K., Wray, G. A., & Deloukas, P. (2007). Convergent adaptation of human lactase persistence in Africa and Europe. Nature Genetics, 39(1), 31-40.',
      doi: 'https://doi.org/10.1038/ng1946',
      type: 'Article',
    },
  ];

  return (
    <div className="canvas-page sources-layout">
      <section className="page-heading sources-heading">
        <div>
          <h1>Sources & About This Project</h1>
          <p>
            This website was made for high school and college students who may have
            heard that race is "biological" but have not had much background in
            anthropology or genetics.
          </p>
        </div>
      </section>

      <section className="about-panel compact-about">
        <h2>About</h2>
        <p>
          My goal is to explain the topic in a simple, visual way without making it
          too simple. The project uses examples from skin color, lactose tolerance,
          sickle cell trait, hair texture, and ancestry to show that human variation
          is real, but it does not match fixed racial categories.
        </p>
      </section>

      <section className="bibliography">
        <h2>References</h2>
        <p className="source-intro">
          The sources below helped me connect the visual parts of the website to
          research in biological anthropology, genetics, and medicine.
        </p>
        <div className="source-list">
          {sources.map((source) => (
            <article className="source-row" key={source.doi}>
              <div className="source-icon" aria-hidden="true" />
              <div>
                <p>{source.citation}</p>
                <a href={source.doi} target="_blank" rel="noreferrer">
                  {source.doi}
                </a>
              </div>
              <span>{source.type}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SourcesPage;
