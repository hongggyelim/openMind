import styles from './QuestionForm.module.css';
export function QuestionForm() {
  return (
    <form className={styles.questionForm}>
      <textarea
        className={styles.questionTextarea}
        placeholder="질문을 입력해주세요"
      ></textarea>
      <button type="submit" className={styles.submitBtn}>
        질문 보내기
      </button>
    </form>
  );
}
