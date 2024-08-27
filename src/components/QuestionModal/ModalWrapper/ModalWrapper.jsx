import { useState } from 'react';
import { QuestionForm } from '../QuestionForm/QuestionForm';
import styles from './ModalWrapper.module.css';

export function ModalWrapper() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClickExitBtn = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.modalSpacer}>
      <div className={styles.modalWrapper}>
        <div className={styles.modalHeader}>
          <div className={styles.modalTitle}>
            <span className={styles.modalIcon}></span>
            질문을 작성하세요
          </div>
          <button
            type="button"
            onClick={handleClickExitBtn}
            className={styles.modalExitBtn}
          ></button>
        </div>

        {/* 나중에 유저 프로필 이미지, 이름 prop으로 받아오기 */}
        <div className={styles.modalToWhom}>
          <span className={styles.modalTo}>To.</span>
          <span className={styles.modalUserProfile}></span>
          아초는 고양이
        </div>
        <QuestionForm />
      </div>
    </div>
  );
}
