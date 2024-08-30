import userProfile from '../../assets/images/user-profile.png';
import styles from './AnswerFeedList.module.css';
import { FeedReaction } from '../FeedList/FeedReaction';
import { timeAgo } from '../../utils/timeAgo';
import { AnswerForm } from './AnswerForm';
import { AnswerDropdown } from './AnswerDropdown';
import { useState } from 'react';

export function AnswerFeedList({ id, item }) {
  //question id 를 받아옴
  const [content, setContent] = useState(''); // 개별 상태 추가
  const [isEmpty, setIsEmpty] = useState(true); // 개별 상태 추가

  const answer = item.answer || '';

  const handleChangeContent = e => {
    const nextContent = e.target.value;
    setContent(nextContent);
    setIsEmpty(nextContent.trim() === ''); // 공백 체크 추가
  };

  const handleSubmitAnswer = e => {
    e.preventDefault();
    console.log('Answer submitted:', content);

    //postAnswer(content)
    //답변 보여주기 1)optimism update 2) useEffect 의존성 배열에 answer 넣기
    //
  };

  return (
    <>
      <div className={styles['feed-box']}>
        <AnswerDropdown />
        {item.answer === null ? (
          <span className={styles['badge']}>미답변</span>
        ) : (
          <span className={`${styles['badge']} ${styles['answered']}`}>
            답변완료
          </span>
        )}
        <div className={styles['feed-contents']}>
          <div className={styles['question-box']}>
            <span className={styles['question-date']}>
              질문 · {timeAgo(item.createdAt)}
            </span>
            <p className={styles['question']}>{item.content}</p>
          </div>
          {answer.content ? (
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
                {/* 답변 노출을 위해 ture 일때 보이는걸로 임시 변경 */}
                {answer.isRejected === true ? (
                  <p className={styles.contents}>{answer.content}</p>
                ) : (
                  <p className={`${styles['contents']} ${styles['rejected']}`}>
                    답변거절
                  </p>
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
