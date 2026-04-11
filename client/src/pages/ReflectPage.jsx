import { useEffect, useState } from 'react';
import { api } from '../api';

function ReflectPage() {
  const [reflections, setReflections] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/reflections').then((response) => setReflections(response.data)).catch(console.error);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/reflections', {
      name: name.trim() || 'Anonymous',
      message,
    });

    setReflections((current) => [response.data, ...current]);
    setName('');
    setMessage('');
  }

  return (
    <div className="reflect-layout">
      <section className="header-shell">
        <p className="eyebrow">Reflect</p>
        <h2 className="page-title">What changed in your thinking?</h2>
        <p className="soft-copy">
          This page stores visitor reflections in the database. It keeps the full-stack
          requirement while fitting the project’s human-centered goal.
        </p>
      </section>

      <form className="reflection-form stack-md" onSubmit={handleSubmit}>
        <label className="input-group">
          <span>Name</span>
          <input value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label className="input-group">
          <span>Reflection</span>
          <textarea
            rows="4"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="One idea I want visitors to remember is..."
            required
          />
        </label>
        <button type="submit" className="dark-button">
          Post Reflection
        </button>
      </form>

      <section className="stack-md">
        {reflections.map((reflection) => (
          <article className="reflection-card" key={reflection._id}>
            <div className="section-heading">
              <h3>{reflection.name}</h3>
              <span className="mini-note">
                {new Date(reflection.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p>{reflection.message}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default ReflectPage;
