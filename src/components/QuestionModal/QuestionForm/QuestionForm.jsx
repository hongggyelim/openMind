import { forwardRef, useContext } from 'react';
import styles from './QuestionForm.module.css';
import { ContentContext } from '../../../context/ContentContext';
import { IsEmptyContext } from '../../../context/IsEmptyContext';

export const QuestionForm = forwardRef(
  ({ onSubmit, onChange, placeholder, btnText }, ref) => {
    const { content } = useContext(ContentContext);
    const { isEmpty } = useContext(IsEmptyContext);

    return (
      <form className={styles['question-form']} onSubmit={onSubmit}>
        <label htmlFor="question" className={styles['blind']}>
          질문을 작성하세요
        </label>
        <div className={styles['textarea-wrapper']}>
          <textarea
            ref={ref}
            id="question"
            name="question"
            type="text"
            className={styles['question-textarea']}
            placeholder={placeholder}
            onChange={onChange}
            value={content}
          ></textarea>
        </div>
        <button
          disabled={isEmpty}
          type="submit"
          className={isEmpty ? styles['disabled-btn'] : styles['active-btn']}
        >
          {btnText}
        </button>
      </form>
    );
  },
);
