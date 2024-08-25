import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { QuestionListPage } from './pages/QuestionListPage';
import { FeedPage } from './pages/FeedPage';
import { AnswerPage } from './pages/AnswerPage';

function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/post/:id/answer" element={<AnswerPage />}></Route>
        <Route path="/list" element={<QuestionListPage />}></Route>
        <Route path="/post/:id" element={<FeedPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainRouter />);
