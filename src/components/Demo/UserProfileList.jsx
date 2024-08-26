import styles from './UserProfileList.module.css';
import Pagenation from './Pagenation';
import UserProfile from './UserProfile';
import DropdownMenu from './DropdownMenu';

function UserProfileList() {
  return (
    <>
      <h2 className={styles.title}>누구에게 질문할까요?</h2>
      <DropdownMenu />
      <div className={styles['list-box']}>
        <ul className={styles['profile-card-list']}>
          <li className={styles['profile-card']}>
            <UserProfile />
            <div className={styles['question-box']}>
              <div>
                <span className={styles['msg-text']}>받은 질문</span>
              </div>
              <span>9개</span>
            </div>
          </li>
          <li className={styles['profile-card']}>
            <UserProfile />
            <div className={styles['question-box']}>
              <div>
                <span className={styles['msg-text']}>받은 질문</span>
              </div>
              <span>9개</span>
            </div>
          </li>
          <li className={styles['profile-card']}>
            <UserProfile />
            <div className={styles['question-box']}>
              <div>
                <span className={styles['msg-text']}>받은 질문</span>
              </div>
              <span>9개</span>
            </div>
          </li>
          <li className={styles['profile-card']}>
            <UserProfile />
            <div className={styles['question-box']}>
              <div>
                <span className={styles['msg-text']}>받은 질문</span>
              </div>
              <span>9개</span>
            </div>
          </li>
          <li className={styles['profile-card']}>
            <UserProfile />
            <div className={styles['question-box']}>
              <div>
                <span className={styles['msg-text']}>받은 질문</span>
              </div>
              <span>9개</span>
            </div>
          </li>
          <li className={styles['profile-card']}>
            <UserProfile />
            <div className={styles['question-box']}>
              <div>
                <span className={styles['msg-text']}>받은 질문</span>
              </div>
              <span>9개</span>
            </div>
          </li>
          <li className={styles['profile-card']}>
            <UserProfile />
            <div className={styles['question-box']}>
              <div>
                <span className={styles['msg-text']}>받은 질문</span>
              </div>
              <span>9개</span>
            </div>
          </li>
          <li className={styles['profile-card']}>
            <UserProfile />
            <div className={styles['question-box']}>
              <div>
                <span className={styles['msg-text']}>받은 질문</span>
              </div>
              <span>9개</span>
            </div>
          </li>
        </ul>
        <Pagenation />
      </div>
    </>
  );
}

export default UserProfileList;
