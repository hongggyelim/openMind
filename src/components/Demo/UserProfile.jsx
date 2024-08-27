import styles from './UserProfile.module.css';
import arrow from '../../assets/icon/ic-arrow-left.svg';

function UserProfile() {
  return (
    <div className={styles.profile}>
      <img src={arrow} alt="화살표" className={styles['user-img']}></img>
      <span className={styles['user-nickname']}>아초는 고양이</span>
    </div>
  );
}

export default UserProfile;
