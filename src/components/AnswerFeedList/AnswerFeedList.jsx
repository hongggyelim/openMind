import { useState, useEffect } from 'react';
import userProfile from '../../assets/images/user-profile.png';
import styles from './AnswerFeedList.module.css';
import { FeedReaction } from '../FeedList/FeedReaction';
import { timeAgo } from '../../utils/timeAgo';
import { AnswerForm } from './AnswerForm';
import { AnswerDropdown } from './AnswerDropdown';
import { postAnswer, updateAnswer } from '../../api/post'; // updateAnswer 함수 가져오기


export function AnswerFeedList({ id, item, userData, onDelete }) {
  //question id 를 받아옴

  const [content, setContent] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);
  const [answer, setAnswer] = useState(item.answer || null);
  const [isEditing, setIsEditing] = useState(false); // 수정 모드 상태
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem('info')) || {},
  );

//   useEffect(() => {
//     const userInfoFromStorage = localStorage.getItem('info');
//     if (userInfoFromStorage) {
//       setUserInfo(JSON.parse(userInfoFromStorage));
//     }
//   }, []);

  const handleChangeContent = e => {
    const nextContent = e.target.value;
    setContent(nextContent);
    setIsEmpty(nextContent.trim() === '');
  };

  const handleSubmitAnswer = async e => {
    e.preventDefault();

    try {
      const result = await postAnswer(id, content);
      setAnswer(result);
      setIsEditing(false); // 답변 제출 후 수정 모드 종료
    } catch (error) {
      console.error('답변 제출 중 오류 발생:', error);
      alert('답변 제출 중 오류가 발생했습니다.');
    }
  };

  const handleAnswerUpdate = updatedAnswer => {
    setAnswer(updatedAnswer);
  };


  const handleEditMode = editMode => {
    setIsEditing(editMode);
    if (editMode && answer) {
      setContent(answer.content); // 기존 답변 내용을 입력 필드에 세팅
      setIsEmpty(answer.content.trim() === '');
    }
  };

  const handleUpdateAnswer = async () => {
    if (!answer) {
      console.error('수정할 답변이 없습니다.');
      return;
    }

    try {
      const updatedAnswer = await updateAnswer(
        answer.id,
        content,
        answer.isRejected,
      );
      setAnswer(updatedAnswer);
      setIsEditing(false);
    } catch (error) {
      console.error('답변 수정 중 오류 발생:', error);
    }
  };

  return (
    <>
      <div className={styles['feed-box']}>
        <AnswerDropdown
          id={id}
          answer={answer}
          onUpdate={handleAnswerUpdate}
          onEdit={handleEditMode} // 수정 모드 활성화 핸들러 전달
          onDelete={onDelete}
        />
        {answer ? (
          <span className={`${styles['badge']} ${styles['answered']}`}>
            답변완료
          </span>
        ) : (
          <span className={styles['badge']}>미답변</span>
        )}
        <div className={styles['feed-contents']}>
          <div className={styles['question-box']}>
            <span className={styles['question-date']}>
              질문 · {timeAgo(item.createdAt)}
            </span>
            <p className={styles['question']}>{item.content}</p>
          </div>
          {answer && answer.content && !isEditing ? (
            <div className={styles['answer-box']}>
              <span className={styles['user-img']}>
                <img

                  src={userData.imageSource || userProfile} // userData.imageSource가 없으면 기본 이미지 사용

                  src={userData.imageSource}

                  width={48}
                  height={48}
                  alt="User Profile"
                />
              </span>
              <div className={styles['user-answer']}>
                <p className={styles.nickname}>

                  {userData.name || 'Unknown User'}

                  {userData.name}

                  <span className={styles['user-date']}>
                    {timeAgo(answer.createdAt)}
                  </span>
                </p>
                {answer.isRejected === true ? (
                  <p className={`${styles['contents']} ${styles['rejected']}`}>
                    답변거절
                  </p>
                ) : (
                  <p className={styles.contents}>{answer.content}</p>
                )}
              </div>
            </div>
          ) : (
            <div className={styles['answer-box']}>
              <span className={styles['user-img']}>
                <img

                  src={userData.imageSource || userProfile} // userData.imageSource가 없으면 기본 이미지 사용

                  src={userData.imageSource}

                  width={48}
                  height={48}
                  alt="User Profile"
                />
              </span>
              <div className={styles['user-answer']}>

                <p className={styles.nickname}>
                  {userData.name || 'Unknown User'}
                </p>

                <p className={styles.nickname}>{userData.name}</p>

                <AnswerForm
                  onChange={handleChangeContent}
                  onSubmit={isEditing ? handleUpdateAnswer : handleSubmitAnswer} // 수정 모드일 경우 업데이트 함수 호출
                  content={content}
                  isEmpty={isEmpty}
                />
              </div>
            </div>
          )}
        </div>
        <FeedReaction id={id} like={item.like} dislike={item.dislike} />
      </div>
    </>
  );
}
