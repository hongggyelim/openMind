import styles from './DropdownMenu.module.css';

function DropdownMenu({
  dropdown,
  toggleDropdown,
  order,
  handleNewestClick,
  handleNameClick,
}) {
  return (
    <div className={styles['order-wrap']}>
      <div>
        <button
        type='button'
          onClick={toggleDropdown}
          className={`${styles['order-btn']} ${dropdown ? styles['sorted'] : styles['']}`}
        >
          {order === '최신순' ? '최신순' : '이름순'}
          <i className={styles.icon}></i>
        </button>
        {dropdown && (
          <div className={`${styles['order-box']} ${styles['shadow-1']}`}>
            <div
              className={`${styles.order} ${order === '이름순' ? styles['sorting'] : styles['']}`}
              onClick={handleNameClick}
            >
              이름순
            </div>
            <div
              className={`${styles.order} ${order === '최신순' ? styles['sorting'] : styles['']}`}
              onClick={handleNewestClick}
            >
              최신순
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DropdownMenu;
