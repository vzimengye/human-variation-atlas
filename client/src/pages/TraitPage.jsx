import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../api';
import { visualAssets } from '../visualData';

const detailMaps = {
  'skin-color': visualAssets.skinMap,
  'lactose-tolerance': visualAssets.lactoseDairy,
  'sickle-cell': visualAssets.sickleCells,
  'hair-texture': visualAssets.hairTexture,
  'ancestry-and-admixture': visualAssets.ancestryAdmixtureMap,
};

function TraitPage() {
  const { slug } = useParams();
  const [trait, setTrait] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    async function loadTrait() {
      setLoading(true);
      const traitResponse = await api.get(`/traits/${slug}`);
      if (!isActive) {
        return;
      }

      setTrait(traitResponse.data);
      setLoading(false);
    }

    loadTrait().catch((error) => {
      console.error(error);
      if (isActive) {
        setLoading(false);
      }
    });

    return () => {
      isActive = false;
    };
  }, [slug]);

  if (loading) {
    return <p>Loading case study...</p>;
  }

  if (!trait) {
    return <p>Trait not found.</p>;
  }

  return (
    <div className="canvas-page trait-detail-page">
      <section className="detail-hero">
        <div
          className="detail-art"
          style={{ backgroundImage: `url(${detailMaps[slug] || visualAssets.skinMap})` }}
        />
        <div className="detail-hero-copy">
          <p className="eyebrow">{trait.category}</p>
          <h1>{trait.title}</h1>
          <h2>{trait.subtitle}</h2>
          <p>{trait.summary}</p>
        </div>
      </section>

      <section className="detail-grid">
        <article className="detail-card highlight">
          <h4>What this shows</h4>
          <p className="soft-copy">{trait.whatThisShows}</p>
        </article>
        <article className="detail-card">
          <h4>Why race is too simple</h4>
          <p className="soft-copy">{trait.whyRaceTooSimple}</p>
        </article>
      </section>

      <section className="takeaway-panel">
        <div>
          <p className="eyebrow">Key takeaway</p>
          <h2>{trait.keyTakeaway}</h2>
        </div>
        <p>{trait.scientificContext}</p>
      </section>
    </div>
  );
}

export default TraitPage;
