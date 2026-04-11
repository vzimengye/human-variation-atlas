import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';
import { visualAssets } from '../visualData';

const mosaicImages = {
  'skin-color': visualAssets.hands,
  'lactose-tolerance': visualAssets.lactaseMap,
  'sickle-cell': visualAssets.microscope,
  'ancestry-and-identity': visualAssets.ancestryMap,
  atlas: visualAssets.skinMap,
};

const fallbackNotes = {
  'skin-color': 'A visible trait shaped by ecology, movement, and interpretation.',
  'lactose-tolerance': 'Selection, dairying, and migration intersect here.',
  'sickle-cell': 'A disease trait best read through malaria ecology and fitness.',
  'ancestry-and-identity': 'Statistical ancestry is informative, but never the whole story.',
};

const traitOrder = ['skin-color', 'lactose-tolerance', 'sickle-cell', 'ancestry-and-identity'];

function ExplorePage() {
  const [traits, setTraits] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    api
      .get('/traits')
      .then((response) => {
        const orderedTraits = [...response.data].sort(
          (left, right) => traitOrder.indexOf(left.slug) - traitOrder.indexOf(right.slug)
        );
        setTraits(orderedTraits);
      })
      .catch(console.error);
  }, []);

  const filteredTraits = traits.filter((trait) => {
    const text = `${trait.title} ${trait.summary} ${trait.category} ${trait.keyQuestion}`.toLowerCase();
    return text.includes(search.toLowerCase());
  });

  const [primary, secondary, tertiary, quaternary] = filteredTraits;

  return (
    <div className="page-grid">
      <section className="header-shell">
        <p className="eyebrow" style={{ color: 'var(--accent)' }}>
          Explore human variation
        </p>
        <h2 className="page-title">A curated set of questions</h2>
        <p className="soft-copy">
          These sections bring together adaptation, migration, gene-culture
          coevolution, ancestry modeling, and the social life of biological claims.
        </p>
      </section>

      <label className="search-strip">
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by trait, geography, adaptation, or social meaning"
        />
        <div className="chip-row">
          <span className="chip primary">Biology</span>
          <span className="chip secondary">History</span>
          <span className="chip secondary">Identity</span>
        </div>
      </label>

      <section className="explore-mosaic">
        <div className="mosaic-left">
          {primary && (
            <Link
              to={`/traits/${primary.slug}`}
              className="mosaic-large"
              style={{ backgroundImage: `url(${mosaicImages[primary.slug] || visualAssets.hands})` }}
            >
              <div className="mosaic-overlay">
                <span className="chip secondary">{primary.category}</span>
                <h3 className="mosaic-title">{primary.title}</h3>
                <p className="mosaic-note">{fallbackNotes[primary.slug] || primary.summary}</p>
              </div>
            </Link>
          )}
        </div>

        <div className="mosaic-right">
          {secondary && (
            <Link
              to={`/traits/${secondary.slug}`}
              className="mosaic-small"
              style={{
                backgroundImage: `url(${mosaicImages[secondary.slug] || visualAssets.lactaseMap})`,
              }}
            >
              <div className="mosaic-overlay">
                <span className="chip secondary">{secondary.category}</span>
                <h3 className="mosaic-title">{secondary.title}</h3>
              </div>
            </Link>
          )}

          {tertiary && (
            <Link
              to={`/traits/${tertiary.slug}`}
              className="mosaic-small"
              style={{
                backgroundImage: `url(${mosaicImages[tertiary.slug] || visualAssets.microscope})`,
              }}
            >
              <div className="mosaic-overlay">
                <span className="chip secondary">{tertiary.category}</span>
                <h3 className="mosaic-title">{tertiary.title}</h3>
              </div>
            </Link>
          )}
        </div>
      </section>

      <article
        className="mosaic-banner"
        style={{ backgroundImage: `url(${mosaicImages.atlas})` }}
      >
        <div className="mosaic-overlay">
          <span className="chip secondary">Pattern atlas</span>
          <h3 className="mosaic-title">
            Maps, gradients, and
            <br />
            distribution matter.
          </h3>
          <p className="mosaic-note">
            Clines, allele frequencies, FST, and admixture are ways of seeing variation
            as pattern and history rather than forcing it into fixed racial boxes.
          </p>
        </div>
      </article>

      <section className="bottom-actions">
        <article className="metric-card" style={{ background: 'var(--ink)', color: 'var(--surface)' }}>
          <p className="metric-label" style={{ color: 'var(--sage)' }}>
            Read
          </p>
          <p className="metric-value" style={{ color: 'var(--surface)' }}>
            FST
          </p>
        </article>
        <article className="metric-card">
          <p className="metric-label">Compare</p>
          <p className="metric-value">Selection</p>
        </article>
        <article className="metric-card warm">
          <p className="metric-label">Question</p>
          <p className="metric-value">Admixture</p>
        </article>
        <article className="metric-card">
          <p className="metric-label">Interpret</p>
          <p className="metric-value">{quaternary?.title || 'Identity'}</p>
        </article>
      </section>
    </div>
  );
}

export default ExplorePage;
