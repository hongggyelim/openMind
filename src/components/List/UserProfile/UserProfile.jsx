import styles from './UserProfile.module.css';

function UserProfile({ src, alt, name }) {
  return (
    <div className={styles.profile}>
      <img src={src} alt={alt} className={styles['user-img']} />
      <span className={styles['user-nickname']}>{name}</span>
    </div>
  );
}

export default UserProfile;
