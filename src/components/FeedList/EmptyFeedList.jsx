import EmptyBox from '../../assets/images/feed-box-noquestion.png';
import styles from './EmptyFeedList.module.css';
export function EmptyFeedList() {
  return (
    <div className={styles['empty-box']}>
      <img src={EmptyBox} width={150} height={154} alt="질문이 없습니다." />
    </div>
  );
}
