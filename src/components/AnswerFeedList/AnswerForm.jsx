import styles from './AnswerForm.module.css';

export function AnswerForm({ onSubmit, onChange, content, isEmpty }) {
  return (
    <form className={styles['answer-form']} onSubmit={onSubmit}>
      <div>
        <textarea
          type="text"
          className={styles['answer-textarea']}
          value={content}
          onChange={onChange}
          placeholder="답변을 입력해주세요"
        ></textarea>
      </div>
      <button
        disabled={isEmpty}
        type="submit"
        className={isEmpty ? styles['disabled-btn'] : styles['active-btn']}
      >
        답변 완료
      </button>
    </form>
  );
}
