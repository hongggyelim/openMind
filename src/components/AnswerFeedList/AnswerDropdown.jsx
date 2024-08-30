import { useState } from 'react';
import styles from './AnswerDropdown.module.css';
import menu from '../../assets/icon/ic-more.svg';

export function AnswerDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles['dropdown-button']} onClick={toggleDropdown}>
        <img src={menu} width={26} height={26} alt="메뉴" />
      </button>
      {isOpen && (
        <div className={styles['dropdown-content']}>
          <button
            type="button"
            className={`${styles['btn-menu']} ${styles['btn-edit']}`}
          >
            수정하기
          </button>
          <button
            type="button"
            className={`${styles['btn-menu']} ${styles['btn-delete']}`}
          >
            삭제하기
          </button>
        </div>
      )}
    </div>
  );
}
