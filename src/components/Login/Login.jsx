import styles from './Login.module.css';

function Login({ name, src, alt }) {
  return (
    <div className={styles.login}>
      <img
        src={src}
        alt={alt}
        width={60}
        height={60}
        className={styles['user-profile']}
      />
      {`${name}님 안녕하세요!`}
    </div>
  );
}

export default Login;
