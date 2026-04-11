import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';
import { visualAssets } from '../visualData';

const traitImages = {
  'skin-color': visualAssets.hands,
  'lactose-tolerance': visualAssets.lactaseMap,
  'sickle-cell': visualAssets.skinMap,
  'ancestry-and-identity': visualAssets.ancestryMap,
};

const traitOrder = ['skin-color', 'lactose-tolerance', 'sickle-cell', 'ancestry-and-identity'];

function HomePage() {
  const [traits, setTraits] = useState([]);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function loadData() {
      const [traitsResponse, statsResponse] = await Promise.all([
        api.get('/traits'),
        api.get('/quiz-attempts/stats'),
      ]);
      const orderedTraits = [...traitsResponse.data].sort(
        (left, right) => traitOrder.indexOf(left.slug) - traitOrder.indexOf(right.slug)
      );
      setTraits(orderedTraits);
      setStats(statsResponse.data);
    }

    loadData().catch(console.error);
  }, []);

  return (
    <div className="editorial-page">
      <section className="editorial-hero">
        <article
          className="hero-image-card"
          style={{ backgroundImage: `url(${visualAssets.hands})` }}
        >
          <div className="hero-copy">
            <p className="eyebrow">Biology, history, and identity</p>
            <h2 className="display-title">
              Human variation is real.
              <br />
              Fixed racial boxes are not.
            </h2>
          </div>
        </article>

        <aside className="hero-side-card">
          <p className="eyebrow">Public-facing knowledge atlas</p>
          <div className="hero-chip" />
          <h3 className="hero-side-title">
            Variation links
            <br />
            adaptation,
            <br />
            ancestry,
            <br />
            and interpretation.
          </h3>
          <p className="soft-copy hero-side-copy">
            This site uses genetics, migration, selection, and ethics to show why
            visible difference should never be mistaken for a complete biological map.
          </p>
        </aside>
      </section>

      <section className="pill-row">
        <article className="metric-card">
          <p className="metric-label">4 case studies</p>
          <p className="metric-value">Traits + interpretation</p>
        </article>
        <article className="metric-card">
          <p className="metric-label">Low human FST</p>
          <p className="metric-value">Most variation is within populations</p>
        </article>
        <article className="metric-card">
          <p className="metric-label">Methods in view</p>
          <p className="metric-value">Ancient DNA, maps, admixture, context</p>
        </article>
        <article className="metric-card warm">
          <p className="metric-label">Interactive quiz</p>
          <p className="metric-value">
            Read patterns,
            <br />
            {stats?.attemptCount ?? 0} attempts
          </p>
        </article>
      </section>

      <section className="home-lower-grid">
        <article className="editorial-card editorial-note">
          <div
            className="editorial-photo"
            style={{ backgroundImage: `url(${visualAssets.microscope})` }}
          />
          <div>
            <p className="eyebrow" style={{ color: 'var(--accent)' }}>
              Editorial note
            </p>
            <h3 className="section-title">
              Genetics
              <br />
              needs
              <br />
              context.
            </h3>
            <p className="body-copy">
              Genetics is powerful, but it never speaks on its own. Models of ancestry,
              visible traits, and population history all need interpretation, and they
              become most meaningful when read with historical and social context.
            </p>
          </div>
        </article>

        <section className="feature-cluster">
          {traits[0] && (
            <Link
              to={`/traits/${traits[0].slug}`}
              className="feature-tile"
              style={{ backgroundImage: `url(${traitImages[traits[0].slug]})` }}
            >
              <div className="feature-text">
                <h3 className="feature-title">{traits[0].title}</h3>
                <p className="feature-note">Clines, UV exposure, migration</p>
              </div>
            </Link>
          )}

          <div className="feature-stack">
            {traits[1] && (
              <Link
                to={`/traits/${traits[1].slug}`}
                className="feature-banner"
                style={{ backgroundImage: `url(${traitImages[traits[1].slug]})` }}
              >
                <div className="feature-text">
                  <h3 className="feature-title">{traits[1].title}</h3>
                  <p className="feature-note">Gene-culture coevolution</p>
                </div>
              </Link>
            )}
            {traits[2] && (
              <Link
                to={`/traits/${traits[2].slug}`}
                className="feature-banner"
                style={{ backgroundImage: `url(${traitImages[traits[2].slug]})` }}
              >
                <div className="feature-text">
                  <h3 className="feature-title">{traits[2].title}</h3>
                  <p className="feature-note">Balancing selection and malaria</p>
                </div>
              </Link>
            )}
          </div>
        </section>
      </section>

      <section className="deep-panel">
        <p className="eyebrow">Why this matters</p>
        <h3 className="section-title" style={{ color: 'var(--surface)' }}>
          Bodies carry adaptation,
          <br />
          history, and meaning at once.
        </h3>
        <p className="soft-copy deep-panel-copy">
          This atlas is designed for people who are curious about human difference and
          want a more careful language for thinking about traits, ancestry, race, and
          belonging.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
