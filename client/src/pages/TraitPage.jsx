import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api, fetchWikipediaSummary } from '../api';
import { visualAssets } from '../visualData';

const detailMaps = {
  'skin-color': visualAssets.skinMap,
  'lactose-tolerance': visualAssets.lactaseMap,
  'sickle-cell': visualAssets.skinMap,
  'ancestry-and-identity': visualAssets.ancestryMap,
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
    <div className="page-grid">
      <section className="detail-header">
        <div>
          <p className="eyebrow" style={{ color: 'var(--accent)' }}>
            {trait.category}
          </p>
          <h2 className="page-title">{trait.title}</h2>
          <p className="soft-copy">{trait.summary}</p>
        </div>
        <div
          className="detail-map"
          style={{ backgroundImage: `url(${detailMaps[slug] || visualAssets.skinMap})` }}
        />
      </section>

      <section className="detail-grid">
        <article className="detail-card">
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

      <section className="detail-context">
        <h3 className="context-title">How scientists study this pattern</h3>
        <p className="soft-copy">
          Genetic evidence always needs careful interpretation. Methods like FST,
          ancient DNA, admixture analysis, and evolutionary modeling reveal pattern, but
          they do not erase history, ethics, or social meaning.
        </p>
        <div className="line-stack">
          <div className="line" />
          <div className="line short" />
          <div className="line" />
          <div className="line tiny" />
        </div>
        <p className="soft-copy detail-method-note">
          {trait.methodsNote}
        </p>
        <p className="soft-copy" style={{ marginTop: '1rem' }}>
          {wikiSummary}
        </p>
      </section>
    </div>
  );
}

export default TraitPage;
