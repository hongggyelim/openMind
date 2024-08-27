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
    <form className={styles['question-form']}>
      <label htmlFor="question" className={styles['blind']}>
        질문을 작성하세요
      </label>
      <textarea
        id="question"
        name="question"
        type="text"
        className={styles['question-textarea']}
        placeholder="질문을 입력해주세요"
        onChange={handleChangeContent}
        value={content}
      ></textarea>
      <button
        disabled={isEmpty}
        type="submit"
        className={isEmpty ? styles['disabled-btn'] : styles['active-btn']}
      >
        질문 보내기
      </button>
    </form>
  );
}
