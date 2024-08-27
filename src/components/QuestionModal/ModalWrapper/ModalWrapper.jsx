import { useState } from 'react';
import { QuestionForm } from '../QuestionForm/QuestionForm';
import styles from './ModalWrapper.module.css';

export function ModalWrapper() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClickExitBtn = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles['modal-spacer']}>
      <div className={styles['modal-wrapper']}>
        <div className={styles['modal-header']}>
          <div className={styles['modal-title']}>
            <span className={styles['modal-icon']}></span>
            질문을 작성하세요
          </div>
          <button
            type="button"
            onClick={handleClickExitBtn}
            className={styles['modal-exit-btn']}
          ></button>
        </div>

        {/* 나중에 유저 프로필 이미지, 이름 prop으로 받아오기 */}
        <div className={styles['modal-addressee']}>
          <span className={styles['modal-to']}>To.</span>
          <span className={styles['modal-profile']}></span>
          아초는 고양이
        </div>
        <QuestionForm />
      </div>
    </div>
  );
}
