import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import TraitPage from './pages/TraitPage';
import QuizPage from './pages/QuizPage';
import SourcesPage from './pages/SourcesPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/traits/:slug" element={<TraitPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/sources" element={<SourcesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
