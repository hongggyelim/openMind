import { useState } from 'react';
import styles from './AnswerDropdown.module.css';
import menu from '../../assets/icon/ic-more.svg';
import { postAnswer } from '../../api/post';

<<<<<<< HEAD
export function AnswerDropdown({ id, answer, onUpdate, onEdit, onDelete }) {
  // 수정 함수 추가
=======

// export function AnswerDropdown({ id, answer, onUpdate, onEdit }) {
  // 수정 함수 추가

export function AnswerDropdown({ id, answer, onUpdate, onDelete, onEdit }) {

>>>>>>> origin/develop
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
      const result = await postAnswer(id, '답변 거절', true); // true를 전달하여 거절 처리
      if (onUpdate) {
        onUpdate(result);
      }
      setIsOpen(false);
    } catch (error) {
      console.error('답변 거절 실패:', error);
    }
  };

<<<<<<< HEAD
=======

>>>>>>> origin/develop
  // 답변 수정 모드 활성화
  const handleEdit = () => {
    if (onEdit) {
      onEdit(true); // 수정 모드 활성화
    }
    setIsOpen(false);
<<<<<<< HEAD
  };

  const handleDeleteQuestion = () => {
    onDelete(id);
=======

  const handleDeleteQuestion = () => {
    onDelete(id);

>>>>>>> origin/develop
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles['dropdown-button']} onClick={toggleDropdown}>
        <img src={menu} width={26} height={26} alt="메뉴" />
      </button>
      {isOpen && (
        <div className={styles['dropdown-content']}>
          {hasContent ? (
            <>
              <button
                type="button"
                className={`${styles['btn-menu']} ${styles['btn-edit']}`}
                onClick={handleEdit}
              >
                수정하기
              </button>
              <button
                type="button"
                className={`${styles['btn-menu']} ${styles['btn-delete']}`}
              >
                삭제하기
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className={`${styles['btn-menu']} ${styles['btn-rejected']}`}
                onClick={handleReject}
              >
                답변거절
              </button>
              <button
                type="button"
                className={`${styles['btn-menu']} ${styles['btn-delete']}`}
                onClick={handleDeleteQuestion}
              >
                삭제하기
              </button>
            </>
          )}
<<<<<<< HEAD
=======


          <button
            type="button"
            className={`${styles['btn-menu']} ${styles['btn-delete']}`}
            onClick={handleDeleteQuestion}
          >
            삭제하기
          </button>

>>>>>>> origin/develop
        </div>
      )}
    </div>
  );
}
