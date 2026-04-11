import Datastore from 'nedb-promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { seedQuizQuestions, seedTraits } from './seed.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createStore(filename) {
  return Datastore.create({
    filename: path.join(__dirname, filename),
    autoload: true,
    timestampData: true
  });
}

export const traitsStore = createStore('traits.db');
export const quizStore = createStore('quiz-questions.db');
export const attemptsStore = createStore('quiz-attempts.db');
export const reflectionsStore = createStore('reflections.db');

export async function initializeDatabase() {
  await traitsStore.remove(
    { slug: { $nin: seedTraits.map((trait) => trait.slug) } },
    { multi: true }
  );

  for (const trait of seedTraits) {
    await traitsStore.update(
      { slug: trait.slug },
      { $set: trait },
      { upsert: true }
    );
  }

  await quizStore.remove(
    { prompt: { $nin: seedQuizQuestions.map((question) => question.prompt) } },
    { multi: true }
  );

  for (const question of seedQuizQuestions) {
    await quizStore.update(
      { prompt: question.prompt },
      { $set: question },
      { upsert: true }
    );
  }
}
