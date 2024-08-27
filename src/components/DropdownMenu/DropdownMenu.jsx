import styles from './DropdownMenu.module.css';

function DropdownMenu() {
  return (
    <div className={styles['order-wrap']}>
      <div>
        <button className={styles['order-btn']}>이름순</button>
        <div className={`${styles['order-box']} ${styles['shadow-1']}`}>
          <div className={styles.order}>이름순</div>
          <div className={styles.order}>최신순</div>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
