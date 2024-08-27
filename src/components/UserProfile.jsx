import styles from './UserProfile.module.css';
import profile from '../../assets/images/user-profile.png';

function UserProfile() {
  return (
    <div className={styles.profile}>
      <img src={profile} alt="화살표" className={styles['user-img']}></img>
      <span className={styles['user-nickname']}>아초는 고양이</span>
    </div>
  );
}

export default UserProfile;
