import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import { QuestionListPage } from './pages/QuestionListPage';
import { FeedPage } from './pages/FeedPage/FeedPage';
import { AnswerPage } from './pages/AnswerPage';
import './style/reset.css';
import './style/common.css';
import { NotFoundPage } from './pages/NotFound/NotFoundPage';

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list" element={<QuestionListPage />} />
        <Route path="/post/:id/answer" element={<AnswerPage />} />
        <Route path="/post/:subjectId" element={<FeedPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainRouter />);
