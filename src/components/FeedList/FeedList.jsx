import userProfile from '../../assets/images/user-profile.png';
import styles from '../FeedList/FeedList.module.css';
import { FeedReaction } from '../FeedList/FeedReaction';
import { timeAgo } from '../../utils/timeAgo';

export function FeedList({ id, item, userData }) {
  const answer = item.answer || '';
<<<<<<< HEAD
  // console.log(item);
=======
>>>>>>> 9c1293ea37269897e5207b36afb943a2dc63fa28
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
                  src={userData?.imageSource}
                  width={48}
                  height={48}
                  alt={userProfile}
                />
              </span>
              <div className={styles['user-answer']}>
                <p className={styles.nickname}>
                  {userData?.name}
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
            ''
          )}
        </div>
        <FeedReaction id={id} like={item.like} dislike={item.dislike} />
      </div>
    </>
  );
}
