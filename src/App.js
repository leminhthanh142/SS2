import { Routes, Route } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { PracticePage } from './pages/Practice';
import { TutorialsPage } from './pages/Tutorials';
import { TutorialDetailPage } from './pages/TutorialDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/tutorials" element={<TutorialsPage />} />
        <Route path="/tutorials/:id" element={<TutorialDetailPage />} />
        <Route path="/practice/:id" element={<PracticePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
