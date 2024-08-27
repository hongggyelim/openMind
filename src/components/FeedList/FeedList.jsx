import userProfile from '../../assets/images/user-profile.png';
import styles from '../FeedList/FeedList.module.css';
import { FeedReaction } from '../FeedList/FeedReaction';

// utils/timeAgo.js (또는 다른 파일에 생성 필요)
export function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now - date;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays < 1) {
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    if (diffInHours < 1) {
      const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
      if (diffInMinutes < 1) {
        return '방금 전';
      }
      return `${diffInMinutes}분 전`;
    }
    return `${diffInHours}시간 전`;
  }
  return `${diffInDays}일 전`;
}

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
        <FeedReaction />
      </div>
    </>
  );
}
