import { QuestionForm } from '../QuestionForm/QuestionForm';
import styles from './ModalWrapper.module.css';

export function ModalWrapper() {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalHeader}>
        <div className={styles.modalTitle}>
          <span className={styles.modalIcon}></span>
          질문을 작성하세요
        </div>
        <button className={styles.modalExitBtn}></button>
      </div>

      {/* 나중에 유저 프로필 이미지, 이름 prop으로 받아오기 */}
      <div className={styles.modalToWhon}>
        <span className={styles.modalTo}>To.</span>
        <span className={styles.modalUserProfile}></span>
        아초는 고양이
      </div>
      <QuestionForm />
    </div>
  );
}
