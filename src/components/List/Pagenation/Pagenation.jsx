import styles from './Pagenation.module.css';

function Pagenation() {
  return (
    <div className={styles['btn-box']}>
      <button
        className={`${styles['pagenation-btn']} ${styles['left-arrow']}`}
      ></button>
      <button className={styles['pagenation-btn']}>1</button>
      <button className={styles['pagenation-btn']}>2</button>
      <button className={styles['pagenation-btn']}>3</button>
      <button className={styles['pagenation-btn']}>4</button>
      <button className={styles['pagenation-btn']}>5</button>
      <button
        className={`${styles['pagenation-btn']} ${styles['right-arrow']}`}
      ></button>
    </div>
  );
}

export default Pagenation;
