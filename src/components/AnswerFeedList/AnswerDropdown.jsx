import { useState } from 'react';
import styles from './AnswerDropdown.module.css';
import menu from '../../assets/icon/ic-more.svg';
import { postAnswer } from '../../api/post';

export function AnswerDropdown({ id, answer, onUpdate, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const hasContent = answer && answer.content && answer.content.trim() !== '';

  // 답변 거절 처리 함수
  const handleReject = async () => {
    if (!id) {
      console.error('ID가 없습니다.');
      return;
    }

    try {
      // API 호출로 답변 거절 처리
      const result = await postAnswer(id, '답변 거절', true); // `true`를 전달하여 거절 처리
      // 부모 컴포넌트에 상태 업데이트 알림
      if (onUpdate) {
        onUpdate(result);
      }
      setIsOpen(false);
    } catch (error) {
      console.error('답변 거절 실패:', error);
    }
  };

  const handleDeleteQuestion = () => {
    onDelete(id);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles['dropdown-button']} onClick={toggleDropdown}>
        <img src={menu} width={26} height={26} alt="메뉴" />
      </button>
      {isOpen && (
        <div className={styles['dropdown-content']}>
          {hasContent ? (
            <button
              type="button"
              className={`${styles['btn-menu']} ${styles['btn-edit']}`}
            >
              수정하기
            </button>
          ) : (
            <button
              type="button"
              className={`${styles['btn-menu']} ${styles['btn-rejected']}`}
              onClick={handleReject}
            >
              답변 거절
            </button>
          )}
          <button
            type="button"
            className={`${styles['btn-menu']} ${styles['btn-delete']}`}
            onClick={handleDeleteQuestion}
          >
            삭제하기
          </button>
        </div>
      )}
    </div>
  );
}
