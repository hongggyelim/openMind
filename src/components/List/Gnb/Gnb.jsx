import styles from './Gnb.module.css';
import logo from '../../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const userId = window.localStorage.getItem('id');

console.log(userId);

export function AnswerLinkButton({ children }) {
  return (
    <Link
      to={userId ? `/post/${userId}/answer` : '/'}
      className={styles['answer-btn']}
    >
      {children}
    </Link>
  );
}

export function Gnb() {
  return (
    <div className={styles['question-header']}>
      <Link to="/">
        <img src={logo} alt="메인페이지로 가기" />
      </Link>
      <AnswerLinkButton>답변하러 가기</AnswerLinkButton>
    </div>
  );
}
