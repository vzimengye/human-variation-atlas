import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';
import { visualAssets } from '../visualData';

const traitImages = {
  'skin-color': visualAssets.iconSkinColor,
  'lactose-tolerance': visualAssets.iconLactose,
  'sickle-cell': visualAssets.iconSickle,
  'hair-texture': visualAssets.iconHairTexture,
  'ancestry-and-admixture': visualAssets.iconAncestry,
};

const traitOrder = [
  'skin-color',
  'lactose-tolerance',
  'sickle-cell',
  'hair-texture',
  'ancestry-and-admixture',
];

const topicSummaries = {
  'skin-color': 'A visible trait shaped by adaptation to UV exposure.',
  'lactose-tolerance': 'An example of human adaptation linked to diet and history.',
  'sickle-cell': 'A genetic trait connected to malaria environments.',
  'hair-texture': 'A visible human difference that does not define race.',
  'ancestry-and-admixture': 'A story of migration, mixing, and shared history.',
};

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
    <div className="canvas-page">
      <section className="home-hero">
        <div className="hero-panel">
          <p className="eyebrow">Biology, history, and identity</p>
          <h1 className="display-title">
            Human Variation
            <br />
            Beyond Race
          </h1>
          <p className="hero-text">
            Human differences are real, but they do not fit neatly into racial boxes.
          </p>
          <p className="intro-copy">
            Human biological variation is shaped by many things: genetics,
            environment, migration, disease, diet, history, and culture. Traits can
            tell us something about adaptation and history, but they do not divide
            people into fixed biological races.
          </p>
          <div className="action-row">
            <Link className="button primary-button" to="/explore">
              Explore Traits <span aria-hidden="true">-&gt;</span>
            </Link>
            <Link className="button secondary-button" to="/quiz">
              Take the Quiz
            </Link>
          </div>
        </div>

        <div className="figure-panel">
          <img src="/pictures-homepage/homepage.png" alt="Four overlapping human profiles with a globe behind them" />
        </div>
      </section>

      <section className="section-intro">
        <div>
          <h2 className="section-title">Explore Key Topics</h2>
        </div>
        <p className="soft-copy">
          Each topic opens a compact case study with one myth, one better frame, and
          a clear methods note.
        </p>
      </section>

      <section className="topic-grid">
        {traits.map((trait) => (
          <Link to={`/traits/${trait.slug}`} className="topic-card" key={trait.slug}>
            <div
              className="topic-icon"
              style={{ backgroundImage: `url(${traitImages[trait.slug]})` }}
            />
            <h3>{trait.title}</h3>
            <p>{topicSummaries[trait.slug] || trait.summary}</p>
            <span>Learn more <span aria-hidden="true">-&gt;</span></span>
          </Link>
        ))}
      </section>

      <section className="thesis-card">
        <div className="thesis-icon" aria-hidden="true" />
        <div>
          <h2>Our Thesis</h2>
          <p>
            Race matters socially because people are treated differently based on
            it. But race is not a clean biological map of human variation. Most
            human traits are more complex, more mixed, and more connected to
            context than racial categories suggest.
          </p>
        </div>
        <div className="mini-stats">
          <span>{stats?.attemptCount ?? 0}</span>
          <p className="mini-note">quiz attempts</p>
        </div>
      </section>

      <section className="info-callout">
        <span className="callout-dot">i</span>
        <p>
          Use the Traits page to browse evidence, then test the same ideas through
          the interactive quiz.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
