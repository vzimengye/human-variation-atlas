import cors from 'cors';
import express from 'express';
import {
  attemptsStore,
  initializeDatabase,
  quizStore,
  reflectionsStore,
  traitsStore
} from './data/db.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

app.get('/api/traits', async (req, res) => {
  const traits = await traitsStore.find({}).sort({ createdAt: 1 });
  res.json(traits);
});

app.get('/api/traits/:slug', async (req, res) => {
  const trait = await traitsStore.findOne({ slug: req.params.slug });

  if (!trait) {
    return res.status(404).json({ message: 'Trait not found.' });
  }

  return res.json(trait);
});

app.get('/api/quiz', async (req, res) => {
  const questions = await quizStore.find({}).sort({ createdAt: 1 });
  res.json(questions);
});

app.post('/api/quiz-attempts', async (req, res) => {
  const score = Number(req.body.score);

  if (Number.isNaN(score)) {
    return res.status(400).json({ message: 'A numeric score is required.' });
  }

  await attemptsStore.insert({ score });
  return res.json({ message: 'Your score has been saved to the database.' });
});

app.get('/api/quiz-attempts/stats', async (req, res) => {
  const attempts = await attemptsStore.find({});
  const attemptCount = attempts.length;
  const totalScore = attempts.reduce((sum, attempt) => sum + attempt.score, 0);
  const averageScore = attemptCount === 0 ? 0 : Math.round(totalScore / attemptCount);

  res.json({ attemptCount, averageScore });
});

app.get('/api/reflections', async (req, res) => {
  const reflections = await reflectionsStore.find({}).sort({ createdAt: -1 });
  res.json(reflections);
});

app.post('/api/reflections', async (req, res) => {
  const name = String(req.body.name || 'Anonymous').trim();
  const message = String(req.body.message || '').trim();

  if (!message) {
    return res.status(400).json({ message: 'Reflection text is required.' });
  }

  const reflection = await reflectionsStore.insert({ name, message });
  return res.status(201).json(reflection);
});

initializeDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to initialize database:', error);
    process.exit(1);
  });
