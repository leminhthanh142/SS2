import { Routes, Route } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { PracticePage } from './pages/Practice';
import { TutorialsPage } from './pages/Tutorials';
import { Tutorial01 } from './pages/Tutorials/Tutorial01';
import { Tutorial02 } from './pages/Tutorials/Tutorial02';
import { Tutorial03 } from './pages/Tutorials/Tutorial03';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/tutorials" element={<TutorialsPage />} />
        <Route path="/tutorials/1" element={<Tutorial01 />} />
        <Route path="/tutorials/2" element={<Tutorial02 />} />
        <Route path="/tutorials/3" element={<Tutorial03 />} />
        <Route path="/practice/:id" element={<PracticePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
