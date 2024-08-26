import userProfile from '../../assets/images/user-profile.png';
import styles from '../FeedList/FeedList.module.css';
import { FeedReaction } from '../FeedList/FeedReaction';
export function FeedList() {
  return (
    <>
      <div className={styles['feed-box']}>
        <span className={styles['badge']}>미답변</span>
        <div className={styles['feed-contents']}>
          <div className={styles['question-box']}>
            <span className={styles['question-date']}>질문 · 2주전</span>
            <p className={styles['question']}>
              좋아하는 동물은?좋아하는 동물은?좋아하는 동물은? 좋아하는 동물은?
            </p>
          </div>
          <div className={styles['answer-box']}>
            <span className={styles['user-img']}>
              <img src={userProfile} width={48} height={48} alt={userProfile} />
            </span>
            <div className={styles['user-answer']}>
              <p className={styles.nickname}>
                아초는고양이<span>2주전</span>
              </p>
              <p className={styles.contents}>
                그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다.
                찾아다녀도, 전인 방황하였으며, 대한 바이며, 이것이야말로 가치를
                청춘의 따뜻한 그리하였는가? 몸이 열락의 청춘의 때문이다. 천고에
                피어나는 간에 밝은 이상, 인생의 만물은 피다. 대중을 이성은
                방황하여도, 그리하였는가? 크고 평화스러운 품에 방황하였으며,
                말이다. 이상은 들어 예수는 크고 긴지라 역사를 피다. 얼음에
                있음으로써 꽃 보배를 곧 가는 교향악이다. 우는 새 예가 우리의
                것은 피다. 피가 그것을 어디 앞이 기쁘며, 이상의 열락의 위하여서
                끝까지 것이다. 있는 봄바람을 방황하여도, 우리의 것은 작고 아니한
                영원히 듣기만 운다.
              </p>
            </div>
          </div>
        </div>
        <FeedReaction />
      </div>
    </>
  );
}
