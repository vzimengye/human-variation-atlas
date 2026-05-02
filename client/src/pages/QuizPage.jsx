import { useEffect, useState } from 'react';
import { api } from '../api';
import { visualAssets } from '../visualData';

function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [scoreResult, setScoreResult] = useState(null);
  const [stats, setStats] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  async function saveScore() {
    if (!questions.length) {
      return;
    }

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

  const currentQuestion = questions[currentIndex];
  const selectedAnswer = currentQuestion ? answers[currentQuestion._id] : '';
  const isCorrect =
    currentQuestion && selectedAnswer === currentQuestion.correctAnswer;
  const answeredCount = questions.filter((question) => answers[question._id]).length;
  const progress = questions.length ? ((currentIndex + 1) / questions.length) * 100 : 0;

  return (
    <div className="canvas-page quiz-page">
      <section className="page-heading">
        <div>
          <h1>Test Your Assumptions</h1>
          <p>
            These questions are not meant to trick you. They are meant to help you
            notice when a common idea about race and biology is too simple.
          </p>
        </div>
        <div className="quiz-stat-strip">
          <span>{stats?.attemptCount ?? 0} attempts</span>
          <span>{stats?.averageScore ?? 0}% average</span>
        </div>
      </section>

      <section className="stepper" aria-label="Quiz progress">
        {questions.map((question, index) => (
          <button
            type="button"
            className={`step-dot ${index === currentIndex ? 'active' : ''} ${
              answers[question._id] ? 'answered' : ''
            }`}
            key={question._id}
            onClick={() => setCurrentIndex(index)}
          >
            {index + 1}
          </button>
        ))}
      </section>

      {currentQuestion && (
        <section className="quiz-card">
          <div className="progress-bar" aria-hidden="true">
            <span style={{ width: `${progress}%` }} />
          </div>
          <p className="mini-note">
            {currentIndex + 1} / {questions.length}
          </p>
          <h2>{currentQuestion.prompt}</h2>
          <div className="option-list">
            {currentQuestion.options.map((option, optionIndex) => (
              <label
                className={`answer-option ${
                  selectedAnswer === option ? 'selected' : ''
                }`}
                key={option}
              >
                <input
                  type="radio"
                  name={currentQuestion._id}
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={(event) =>
                    setAnswers((current) => ({
                      ...current,
                      [currentQuestion._id]: event.target.value,
                    }))
                  }
                />
                <span className="answer-letter">
                  {String.fromCharCode(65 + optionIndex)}
                </span>
                <span>{option}</span>
              </label>
            ))}
          </div>

          <section className={`feedback-panel ${selectedAnswer ? 'visible' : ''}`}>
            <div className="feedback-icon">{isCorrect ? 'OK' : 'i'}</div>
            <div>
              <h3>{isCorrect ? 'Correct!' : 'Keep thinking'}</h3>
              <p>
                {selectedAnswer
                  ? currentQuestion.feedback
                  : 'Choose an answer to reveal feedback.'}
              </p>
              {!isCorrect && selectedAnswer && (
                <p className="correct-answer-note">
                  Correct answer: {currentQuestion.correctAnswer}
                </p>
              )}
            </div>
            <div
              className="feedback-art"
              style={{ backgroundImage: `url(${visualAssets.hands})` }}
            />
          </section>

          <div className="quiz-controls">
            <button
              type="button"
              className="button secondary-button"
              onClick={() => setCurrentIndex((index) => Math.max(0, index - 1))}
              disabled={currentIndex === 0}
            >
              &lt; Previous
            </button>

            {currentIndex < questions.length - 1 ? (
              <button
                type="button"
                className="button primary-button"
                onClick={() =>
                  setCurrentIndex((index) => Math.min(questions.length - 1, index + 1))
                }
              >
                Next Question <span aria-hidden="true">-&gt;</span>
              </button>
            ) : (
              <button
                type="button"
                className="button primary-button"
                onClick={saveScore}
                disabled={answeredCount < questions.length}
              >
                Save Score <span aria-hidden="true">-&gt;</span>
              </button>
            )}
          </div>
        </section>
      )}

      <section className="info-callout">
        <span className="callout-dot">i</span>
        {scoreResult ? (
          <div className="result-copy">
            <h2>Your Result</h2>
            <h3>You are thinking beyond simple categories.</h3>
            <p>
              Human biological variation is real, but it is shaped by many
              overlapping factors: genetics, environment, migration, culture, diet,
              disease, and history. Race can affect people&apos;s lives socially,
              but it is not a precise biological system.
            </p>
            <p>
              <strong>Main takeaway:</strong> People are not less different than we
              think. They are different in more complicated ways than race can
              explain.
            </p>
          </div>
        ) : (
          <p>
            {answeredCount} of {questions.length} answered. Each question builds on
            key ideas about human variation and context.
          </p>
        )}
      </section>
    </div>
  );
}

export default QuizPage;
