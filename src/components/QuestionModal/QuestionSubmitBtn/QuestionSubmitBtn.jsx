import styles from './QuestionSubmitBtn.module.css';
export function QuestionSubmitBtn() {
  return (
    <button type="submit" className={styles.submitBtn}>
      질문 보내기
    </button>
  );
}
