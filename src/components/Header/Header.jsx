import styles from './Header.module.css';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import ShareSNS from '../ShareSNS/ShareSNS';

function Header({ userImg, userName, totalCount }) {
  return (
    <div className={styles['header-container']}>
      <div className={styles['header']}>
        <div className={styles['user-container']}>
          <h1>
            <Link to="/">
              <img className={styles['logo']} src={logo} alt="오픈마인드" />
            </Link>
          </h1>
          <img
            className={styles['user-profile']}
            src={userImg}
            width={136}
            height={136}
            alt={`${userName} 프로필`}
          />
          <strong className={styles['user-nickname']}>{userName}</strong>
          <ShareSNS
            userImg={userImg}
            userName={userName}
            totalCount={totalCount}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
