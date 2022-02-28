import { Routes, Route } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { DashBoard } from './pages/DashBoard';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
