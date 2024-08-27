import styles from './UserProfile.module.css';
import profile from '../../assets/images/user-profile.png';

function UserProfile({ src, alt, name }) {
  return (
    <div className={styles.profile}>
      <img src={src} alt={alt} className={styles['user-img']}></img>
      <span className={styles['user-nickname']}>{name}</span>
    </div>
  );
}

export default UserProfile;
