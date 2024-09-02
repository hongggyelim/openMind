import { useNavigate } from 'react-router-dom';
import styles from './MainPage.module.css'; // MainPage 스타일 파일
import logo from '../assets/images/logo.png';
import iconRight from '../assets/icon/ic-arrow-right.png';
import { AskForm } from '../components/AskForm/AskForm'; // AskForm 컴포넌트 가져오기
import Login from '../components/Login/Login';

export default function MainPage() {
  const navigate = useNavigate();

  const handleQuestionListClick = () => {
    navigate('/list');
  };

  const userInfo = JSON.parse(localStorage.getItem('info'));

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <img
          src={logo}
          alt="Logo"
          width={456}
          height={180}
          className={styles.logo}
        />

        {userInfo ? <Login userInfo={userInfo} /> : <AskForm />}
      </div>
      <div className={styles['btn-wrap']}>
        <button
          onClick={handleQuestionListClick}
          className={styles.questionButton}
        >
          질문하러가기
          <img
            src={iconRight}
            alt="Arrow Right"
            width={24}
            height={24}
            className={styles.iconRight}
          />
        </button>
      </div>
    </main>
  );
}
