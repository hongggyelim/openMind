import userProfile from '../../assets/images/user-profile.png';
import styles from '../FeedList/FeedList.module.css';
import { FeedReaction } from '../FeedList/FeedReaction';
import { timeAgo } from '../../utils/timeAgo';
export function FeedList({ item }) {
  const answer = item.answer || '';
  return (
    <>
      <div className={styles['feed-box']}>
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
            ''
          )}
        </div>
        <FeedReaction like={item.like} dislike={item.dislike} />
      </div>
    </>
  );
}
