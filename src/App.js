import { Routes, Route } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { PracticePage } from './pages/Practice';
import { FlashContextProvider } from './context/flashContext';
import { Flash } from './components/Flash';
import { AuthContextProvider } from './context/authContext';
import { Course } from './pages/Course';
import { JavaTutorialsPage } from './pages/Tutorials/Java';
import { JavaTutorial01 } from './pages/Tutorials/Java/Tutorial01';
import { JavaTutorial02 } from './pages/Tutorials/Java/Tutorial02';
import { JavaTutorial03 } from './pages/Tutorials/Java/Tutorial03';
import { JavaTutorial04 } from './pages/Tutorials/Java/Tutorial04';
import { JavaTutorial05 } from './pages/Tutorials/Java/Tutorial05';
import { JsTutorialsPage } from './pages/Tutorials/JS';
import { ReactTutorialsPage } from './pages/Tutorials/React';
import { JsTutorial01 } from './pages/Tutorials/JS/Tutorial01';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <FlashContextProvider>
          <Flash />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/java-tutorials" element={<JavaTutorialsPage />} />
            <Route path="/js-tutorials" element={<JsTutorialsPage />} />
            <Route path="/js-tutorials/1" element={<JsTutorial01 />} />
            <Route path="/react-tutorials" element={<ReactTutorialsPage />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/java-tutorials/1" element={<JavaTutorial01 />} />
            <Route path="/java-tutorials/2" element={<JavaTutorial02 />} />
            <Route path="/java-tutorials/3" element={<JavaTutorial03 />} />
            <Route path="/java-tutorials/4" element={<JavaTutorial04 />} />
            <Route path="/java-tutorials/5" element={<JavaTutorial05 />} />
            <Route path="/practice/:id" element={<PracticePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </FlashContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
