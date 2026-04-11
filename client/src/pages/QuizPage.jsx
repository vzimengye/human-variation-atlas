import { useEffect, useState } from 'react';
import { api } from '../api';
import { visualAssets } from '../visualData';

function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [scoreResult, setScoreResult] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function loadQuiz() {
      const [questionsResponse, statsResponse] = await Promise.all([
        api.get('/quiz'),
        api.get('/quiz-attempts/stats'),
      ]);
      setQuestions(questionsResponse.data);
      setStats(statsResponse.data);
    }

    loadQuiz().catch(console.error);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    let correct = 0;
    questions.forEach((question) => {
      if (answers[question._id] === question.correctAnswer) {
        correct += 1;
      }
    });

    const score = Math.round((correct / questions.length) * 100);
    const response = await api.post('/quiz-attempts', { score });
    setScoreResult({ score, message: response.data.message });

    const statsResponse = await api.get('/quiz-attempts/stats');
    setStats(statsResponse.data);
  }

  return (
    <div className="quiz-page">
      <section className="header-shell">
        <p className="eyebrow" style={{ color: 'var(--accent)' }}>
          Interactive
        </p>
        <h2 className="page-title">Test your assumptions</h2>
        <p className="soft-copy">
          A short quiz on low human differentiation, clines, selection, admixture, and
          careful interpretation.
        </p>
      </section>

      <section className="metric-row">
        <article className="metric-card">
          <p className="metric-label">Attempts</p>
          <p className="metric-value">{stats?.attemptCount ?? 0}</p>
        </article>
        <article className="metric-card">
          <p className="metric-label">Average score</p>
          <p className="metric-value">{stats?.averageScore ?? 0}%</p>
        </article>
        <article className="metric-card">
          <p className="metric-label">What this quiz measures</p>
          <p className="metric-value">concept recognition</p>
        </article>
      </section>

      <form className="quiz-stack" onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <article key={question._id} className="question-shell">
            <div className="question-head">
              <span className="question-mark">Q{index + 1}</span>
              <div className="question-copy">
                <h3 className="question-title">{question.prompt}</h3>
                <div className="option-list">
                  {question.options.map((option) => (
                    <label className="option-row" key={option}>
                      <input
                        type="radio"
                        name={question._id}
                        value={option}
                        checked={answers[question._id] === option}
                        onChange={(event) =>
                          setAnswers((current) => ({
                            ...current,
                            [question._id]: event.target.value,
                          }))
                        }
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}

        <div className="quiz-footer">
          <button type="submit" className="dark-button">
            Save the Answer
          </button>

          <div
            className="answer-thumb"
            style={{ backgroundImage: `url(${visualAssets.hands})` }}
          />

          {scoreResult ? (
            <section className="result-shell">
              <h3 className="result-title">Result Report</h3>
              <p className="soft-copy">
                You scored {scoreResult.score}%. Human difference becomes clearer when
                it is read trait by trait, method by method, and in historical context.
              </p>
            </section>
          ) : (
            <section className="result-shell">
              <h3 className="result-title">Result Report</h3>
              <p className="soft-copy">
                Submit your answers to see how the quiz connects biology with the need to avoid racial simplification.
              </p>
            </section>
          )}
        </div>
      </form>
    </div>
  );
}

export default QuizPage;
