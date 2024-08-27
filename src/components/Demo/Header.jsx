import styles from './Header.module.css';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

export function AnswerButton({ children }) {
  return <button className={styles['answer-btn']}>{children}</button>;
}

export function Header() {
  return (
    <div className={styles['question-header']}>
      <Link to="/">
        <img src={logo} alt="메인페이지로 가기" />
      </Link>
      <AnswerButton>답변하러 가기</AnswerButton>
    </div>
  );
}
