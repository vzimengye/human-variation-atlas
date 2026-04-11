function SourcesPage() {
  const sources = [
    'Background reading on DNA, mutation, natural selection, and genetic drift',
    'Research and teaching materials on FST and the idea that much human genetic variation occurs within populations',
    'Writing on admixture analysis, Kennewick Man, and the warning that ancestry components are statistical constructs',
    'Population history work on South Asia, archaic admixture, and lactase persistence',
    'Historical and genetic work on pre-Hispanic and colonial Mexico, including sex-biased admixture and the demographic legacy of colonization',
    'Wikipedia summaries used as supplemental API-loaded context rather than as the main source',
  ];

  return (
    <div className="sources-layout">
      <section className="header-shell">
        <p className="eyebrow">Sources</p>
        <h2 className="page-title">Reference points and context</h2>
        <p className="soft-copy">
          This project draws on genetics, biological anthropology, and public-facing
          interpretation around human variation, migration, ancestry, and the politics
          of classification.
        </p>
      </section>

      <section className="sources-card">
        <h3>Current source placeholders</h3>
        <ul className="source-list">
          {sources.map((source) => (
            <li key={source}>{source}</li>
          ))}
        </ul>
      </section>

      <section className="sources-card">
        <h3>How the site uses them</h3>
        <p className="soft-copy">
          The trait pages translate technical ideas into public-facing language. The
          quiz checks whether visitors can recognize those ideas without collapsing them
          back into racial shorthand.
        </p>
      </section>
    </div>
  );
}

export default SourcesPage;
