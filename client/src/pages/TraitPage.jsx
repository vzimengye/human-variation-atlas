import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api, fetchWikipediaSummary } from '../api';
import { visualAssets } from '../visualData';

const detailMaps = {
  'skin-color': visualAssets.skinMap,
  'lactose-tolerance': visualAssets.lactaseMap,
  'sickle-cell': visualAssets.skinMap,
  'hair-texture': visualAssets.hairTexture,
  'ancestry-and-admixture': visualAssets.ancestryMap,
};

function TraitPage() {
  const { slug } = useParams();
  const [trait, setTrait] = useState(null);
  const [wikiSummary, setWikiSummary] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTrait() {
      setLoading(true);
      const traitResponse = await api.get(`/traits/${slug}`);
      setTrait(traitResponse.data);

      const summary = await fetchWikipediaSummary(traitResponse.data.wikipediaTitle);
      setWikiSummary(summary);
      setLoading(false);
    }

    loadTrait().catch((error) => {
      console.error(error);
      setLoading(false);
    });
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
          <p>{trait.summary}</p>
          <div className="takeaway-box">
            <strong>Central question</strong>
            <span>{trait.keyQuestion}</span>
          </div>
        </div>
      </section>

      <section className="detail-grid">
        <article className="detail-card highlight">
          <h4>Why it matters</h4>
          <p className="soft-copy">{trait.whyItMatters}</p>
        </article>
        <article className="detail-card">
          <h4>Common myth</h4>
          <p className="soft-copy">{trait.commonMyth}</p>
        </article>
        <article className="detail-card">
          <h4>Better framing</h4>
          <p className="soft-copy">{trait.betterFraming}</p>
        </article>
        <article className="detail-card">
          <h4>Scientific context</h4>
          <p className="soft-copy">{trait.scientificContext}</p>
        </article>
      </section>

      <section className="method-panel">
        <div>
          <p className="eyebrow">Methods</p>
          <h2>How scientists study this pattern</h2>
          <p>
            Genetic evidence reveals pattern, but it does not erase history, ethics,
            or social meaning.
          </p>
        </div>
        <div className="method-lines" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <article className="source-note">
          <strong>Research note</strong>
          <p>{trait.methodsNote}</p>
        </article>
        <article className="source-note">
          <strong>Wikipedia context</strong>
          <p>{wikiSummary}</p>
        </article>
      </section>
    </div>
  );
}

export default TraitPage;
