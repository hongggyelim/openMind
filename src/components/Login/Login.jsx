import styles from './Login.module.css';
import { Link } from 'react-router-dom';

function Login({ userInfo }) {
  console.log(userInfo);
  return (
    <div className={styles.login}>
      <div className={styles['user-box']}>
        {/* <img
          src={userInfo.imageSource}
          alt={userInfo.name}
          width={60}
          height={60}
          className={styles['user-profile']}
        /> */}
        <span>{`${userInfo.name}님 안녕하세요!`}</span>
      </div>
      <div className={styles['btn-box']}>
        <Link to={`post/${userInfo.id}/answer`} className={styles['move-btn']}>
          답변페이지
        </Link>
        <button className={styles['move-btn']}>로그아웃</button>
      </div>
    </div>
  );
}

export default Login;
