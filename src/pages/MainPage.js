import { useNavigate } from 'react-router-dom';
import styles from './MainPage.module.css'; // MainPage 스타일 파일
import logo from '../assets/images/logo.png';
import iconRight from '../assets/icon/ic-arrow-right.svg';
import { AskForm } from '../components/AskForm/AskForm'; // AskForm 컴포넌트 가져오기
import Login from '../components/Login/Login';
import { getLocalstoage } from '../utils/localstorageFunc';
import USER_KEY from '../constants/localstorage';

export default function MainPage() {
  const navigate = useNavigate();

  const handleQuestionListClick = () => {
    navigate('/list');
  };

  const userInfo = getLocalstoage(USER_KEY);

  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" className={styles.logo} />

      {userInfo ? <Login userInfo={userInfo} /> : <AskForm />}

      <button
        onClick={handleQuestionListClick}
        className={styles.questionButton}
      >
        질문하러가기
        <img src={iconRight} alt="Arrow Right" className={styles.iconRight} />
      </button>
    </div>
  );
}
