import { removeLocalstarage } from '../../utils/localstorageFunc';
import styles from './Login.module.css';
import { Link } from 'react-router-dom';
import { USER_KEY } from '../../constants/localstorage';

function Login({ userInfo }) {
  const logout = () => {
    removeLocalstarage(USER_KEY);
    window.location.replace('/');
  };
  return (
    <div className={styles.login}>
      <div className={styles['user-box']}>
        <span>{`${userInfo.name}님 안녕하세요!`}</span>
      </div>
      <div className={styles['btn-box']}>
        <Link to={`post/${userInfo.id}/answer`} className={styles['move-btn']}>
          답변페이지
        </Link>
        <button className={styles['move-btn']} onClick={logout}>
          로그아웃
        </button>
      </div>
    </div>
  );
}

export default Login;
