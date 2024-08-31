import styles from './Gnb.module.css';
import logo from '../../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

// const userId = window.localStorage.getItem('id');

export function AnswerLinkButton({ btnLink, children }) {
  return (
    <Link to={btnLink} className={styles['answer-btn']}>
      {children}
    </Link>
  );
}

export function Gnb({ hasLogo = true, btnLink, btnText }) {
  return (
    <div className={styles['question-header']}>
      <div>
        {hasLogo && (
          <Link to="/">
            <img src={logo} alt="메인페이지로 가기" />
          </Link>
        )}
      </div>
      <AnswerLinkButton btnLink={btnLink}>{btnText}</AnswerLinkButton>
    </div>
  );
}
