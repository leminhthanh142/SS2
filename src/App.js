import { Routes, Route } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
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
import { JavaTutorial06 } from './pages/Tutorials/Java/Tutorial06';
import { JavaTutorial07 } from './pages/Tutorials/Java/Tutorial07';
import { JavaTutorial08 } from './pages/Tutorials/Java/Tutorial08';
import { JsTutorialsPage } from './pages/Tutorials/JS';
import { ReactTutorialsPage } from './pages/Tutorials/React';
import { JsTutorial01 } from './pages/Tutorials/JS/Tutorial01';
import { PracticeSolutionsPage } from './pages/PracticeDetails/Solutions';
import { PracticePage } from './pages/PracticePage';
import { PracticePageDetails1 } from './pages/PracticeDetails/Tut1';
import { PracticePageDetails2 } from './pages/PracticeDetails/Tut2';
import { PracticePageDetails3 } from './pages/PracticeDetails/Tut3';
import { PracticePageDetails4 } from './pages/PracticeDetails/Tut4';
import { PracticePageDetails5 } from './pages/PracticeDetails/Tut5';
import { PracticePageDetails6 } from './pages/PracticeDetails/Tut6';
import { PracticePageDetails7 } from './pages/PracticeDetails/Tut7';
import { PracticePageDetails8 } from './pages/PracticeDetails/Tut8';

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
            <Route path="/java-tutorials/6" element={<JavaTutorial06 />} />
            <Route path="/java-tutorials/7" element={<JavaTutorial07 />} />
            <Route path="/java-tutorials/8" element={<JavaTutorial08 />} />
            <Route path="/practices/1" element={<PracticePageDetails1 />} />
            <Route path="/practices/2" element={<PracticePageDetails2 />} />
            <Route path="/practices/3" element={<PracticePageDetails3 />} />
            <Route path="/practices/4" element={<PracticePageDetails4 />} />
            <Route path="/practices/5" element={<PracticePageDetails5 />} />
            <Route path="/practices/6" element={<PracticePageDetails6 />} />
            <Route path="/practices/7" element={<PracticePageDetails7 />} />
            <Route path="/practices/8" element={<PracticePageDetails8 />} />
            <Route path="/practices" element={<PracticePage />} />
            <Route path="/practices/:id/solutions" element={<PracticeSolutionsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </FlashContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
