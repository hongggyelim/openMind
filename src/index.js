import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import { QuestionListPage } from './pages/QuestionListPage';
import { FeedPage } from './pages/FeedPage/FeedPage';
import { AnswerPage } from './pages/AnswerPage';
import './style/reset.css';
import './style/common.css';
import { ContentContext } from './context/ContentContext';
import { IsEmptyContext } from './context/IsEmptyContext';
import { useState } from 'react';

function MainRouter() {
  const [content, setContent] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <ContentContext.Provider value={{ content, setContent }}>
      <IsEmptyContext.Provider value={{ isEmpty, setIsEmpty }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/list" element={<QuestionListPage />} />
            <Route path="/post/:id/answer" element={<AnswerPage />} />
            <Route path="/post/:subjectId" element={<FeedPage />} />
          </Routes>
        </BrowserRouter>
      </IsEmptyContext.Provider>
    </ContentContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainRouter />);
