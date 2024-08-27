import { ModalWrapper } from '../../components/QuestionModal/ModalWrapper/ModalWrapper';
import styles from './TestPage.module.css';
export function TestPage() {
  return (
    <>
      <div className={styles.testPage}>
        <button type="button">질문 작성하기</button>
        <ModalWrapper />
      </div>
    </>
  );
}
