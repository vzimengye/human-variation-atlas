import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../api';
import { visualAssets } from '../visualData';

const mosaicImages = {
  'skin-color': visualAssets.hands,
  'lactose-tolerance': visualAssets.lactaseMap,
  'sickle-cell': visualAssets.microscope,
  'hair-texture': visualAssets.hairTexture,
  'ancestry-and-admixture': visualAssets.ancestryMap,
  atlas: visualAssets.skinMap,
};

const fallbackNotes = {
  'skin-color': 'Skin color is an adaptation to environment, not a measure of intelligence, behavior, or human worth.',
  'lactose-tolerance': 'A trait can appear in different places for similar reasons. That does not mean it belongs to one race.',
  'sickle-cell': 'Genes can involve trade-offs. Their meaning depends on environment, not racial labels.',
  'hair-texture': 'Visible traits can feel obvious, but they are not simple biological boundaries.',
  'ancestry-and-admixture': 'There are no pure biological populations. Human ancestry is connected and mixed.',
};

const traitOrder = [
  'skin-color',
  'lactose-tolerance',
  'sickle-cell',
  'hair-texture',
  'ancestry-and-admixture',
];

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

  return (
    <div className="canvas-page traits-page">
      <section className="page-heading">
        <div>
          <h1>Traits Are Not Racial Boundaries</h1>
          <p>
            The examples below show how human traits vary across populations and
            environments. Each trait has a biological explanation, but none of them
            creates a simple line between races.
          </p>
        </div>
        <label className="search-box">
          <span>Search</span>
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="trait, geography, adaptation..."
          />
        </label>
      </section>

      <section className="trait-list">
        {filteredTraits.map((trait) => (
          <article className="trait-row-card" key={trait.slug}>
            <Link
              to={`/traits/${trait.slug}`}
              className="trait-thumb"
              style={{
                backgroundImage: `url(${mosaicImages[trait.slug] || visualAssets.hands})`,
              }}
              aria-label={`View ${trait.title}`}
            />
            <div className="trait-row-copy">
              <p className="eyebrow">{trait.category}</p>
              <h2>{trait.title}</h2>
              <p>{trait.summary}</p>
              <div className="takeaway-box">
                <strong>Key takeaway</strong>
                <span>{fallbackNotes[trait.slug] || trait.betterFraming}</span>
              </div>
            </div>
            <Link to={`/traits/${trait.slug}`} className="button small-button">
              View details <span aria-hidden="true">-&gt;</span>
            </Link>
          </article>
        ))}
      </section>

      <section className="pattern-panel">
        <div
          className="pattern-map"
          style={{ backgroundImage: `url(${mosaicImages.atlas})` }}
        />
        <div>
          <p className="eyebrow">Pattern atlas</p>
          <h2>Maps and gradients are better than fixed boxes.</h2>
          <p>
            Clines, allele frequencies, FST, and admixture help visitors read
            variation as pattern and history.
          </p>
        </div>
      </section>
    </div>
  );
}

export default ExplorePage;
