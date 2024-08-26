import styles from '../FeedList/FeedReaction.module.css';

export function FeedReaction() {
  return (
    <div className={styles['btn-reaction']}>
      <button
        type="button"
        className={`${styles['btn']} ${styles['btn-like']}`}
      >
        좋아요
      </button>
      <button
        type="button"
        className={`${styles['btn']} ${styles['btn-dislike']}`}
      >
        싫어요
      </button>
    </div>
  );
}
