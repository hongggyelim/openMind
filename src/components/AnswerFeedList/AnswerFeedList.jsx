import userProfile from '../../assets/images/user-profile.png';
import styles from './AnswerFeedList.module.css';
import { FeedReaction } from '../FeedList/FeedReaction';
import { timeAgo } from '../../utils/timeAgo';
import { QuestionForm } from '../QuestionModal/QuestionForm/QuestionForm';
import { useContext } from 'react';
import { QuestionValueContext } from '../../context/QuestionValueContext';
import { IsEmptyContext } from '../../context/IsEmptyContext';

export function AnswerFeedList({ id, item }) {
  //question id 를 받아옴
  const { setQuestionValue } = useContext(QuestionValueContext);
  const { setIsEmpty } = useContext(IsEmptyContext);

  const answer = item.answer || '';

  const handleChangeContent = e => {
    const nextContent = e.target.value;
    setQuestionValue(() => nextContent);
    setIsEmpty(false);
  };

  const handleSubmitAnswer = async e => {
    e.preventDefault();

    try {
      const result = await postAnswer(id, content);

      // 서버 응답에서 받은 데이터로 상태를 업데이트
      setAnswer(result);
    } catch (error) {
      console.error('답변 제출 중 오류 발생:', error);
      alert('답변 제출 중 오류가 발생했습니다.');
    }
  };

  // 답변 업데이트 핸들러
  const handleAnswerUpdate = updatedAnswer => {
    setAnswer(updatedAnswer);
  };
  return (
    <>
      <div className={styles['feed-box']}>
        <AnswerDropdown id={id} answer={answer} onUpdate={handleAnswerUpdate} />
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
          {answer && answer.content ? (
            <div className={styles['answer-box']}>
              <span className={styles['user-img']}>
                <img
                  src={userProfile}
                  width={48}
                  height={48}
                  alt={userProfile}
                />
              </span>
              <div className={styles['user-answer']}>
                <p className={styles.nickname}>
                  아초는고양이
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
            // 답변 없는 경우 답변창 보여주기
            <div className={styles['answer-box']}>
              <span className={styles['user-img']}>
                <img
                  src={userProfile}
                  width={48}
                  height={48}
                  alt={userProfile}
                />
              </span>
              <div className={styles['user-answer']}>
                <p className={styles.nickname}>아초는고양이</p>
                <AnswerForm
                  onChange={handleChangeContent}
                  onSubmit={handleSubmitAnswer}
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
