import { forwardRef, useContext } from 'react';
import styles from './QuestionForm.module.css';
import { ContentContext } from '../../../context/ContentContext';
import { IsEmptyContext } from '../../../context/IsEmptyContext';

export const QuestionForm = forwardRef(({ onSubmit, onChange }, ref) => {
  const { content } = useContext(ContentContext);
  const { isEmpty } = useContext(IsEmptyContext);

  return (
    <form className={styles['question-form']} onSubmit={onSubmit}>
      <label htmlFor="question" className={styles['blind']}>
        질문을 작성하세요
      </label>
      <textarea
        ref={ref}
        id="question"
        name="question"
        type="text"
        className={styles['question-textarea']}
        placeholder="질문을 입력해주세요"
        onChange={onChange}
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
});
