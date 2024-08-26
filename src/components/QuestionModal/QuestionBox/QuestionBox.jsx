import styles from './QuestionBox.module.css';
export function QuestionBox() {
  return (
    <textarea
      className={styles.questionTextarea}
      placeholder="질문을 입력해주세요"
    ></textarea>
  );
}
