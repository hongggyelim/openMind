import styles from './Header.module.css';
import logo from '../../assets/images/logo.svg';
import userProfile from '../../assets/images/user-profile.png';
import { Link } from 'react-router-dom';

//유저 데이터 가져오기전까지 고정 데이터로 대체
function Header() {
  return (
    <div className={styles['header']}>
      <div className={styles['user-container']}>
        <Link to="/">
          <img className={styles['logo']} src={logo} alt="로고" />
        </Link>
        <img
          className={styles['user-profile']}
          src={userProfile}
          width={136}
          height={136}
          alt="유저프로필"
        />
        <strong className={styles['user-nickname']}>아초는고양이</strong>
      </div>
    </div>
  );
}

export default Header;
