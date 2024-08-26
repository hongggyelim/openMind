import { useState } from 'react';
import styles from './QuestionForm.module.css';
export function QuestionForm() {
  const [content, setContent] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  const handleChangeContent = e => {
    const nextContent = e.target.value;
    setContent(() => nextContent);

    if (nextContent !== '') {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  return (
    <form className={styles.questionForm}>
      <textarea
        className={styles.questionTextarea}
        placeholder="질문을 입력해주세요"
        onChange={handleChangeContent}
        value={content}
      ></textarea>
      <button
        disabled={isEmpty}
        type="submit"
        className={isEmpty ? styles.disabledBtn : styles.activeBtn}
      >
        질문 보내기
      </button>
    </form>
  );
}
