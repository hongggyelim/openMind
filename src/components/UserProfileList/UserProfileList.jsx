import styles from './UserProfileList.module.css';
import Pagenation from '../Pagenation/Pagenation';
import UserProfile from '../UserProfile/UserProfile';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { getProfile } from '../../api/Api';
import { useEffect, useState } from 'react';

function UserProfileList() {
  const [profiles, setProfile] = useState([]);

  const getProfileList = async () => {
    const { results } = await getProfile();
    setProfile(results);
    console.log(results);
  };

  useEffect(() => {
    getProfileList();
  }, []);
  return (
    <>
      <h2 className={styles.title}>누구에게 질문할까요?</h2>
      <DropdownMenu />
      <div className={styles['list-box']}>
        <ul className={styles['profile-card-list']}>
          {profiles.map(profile => (
            <li key={profile.id} className={styles['profile-card']}>
              <UserProfile
                src={profile.imageSource}
                alt={profile.name}
                name={profile.name}
              />
              <div className={styles['question-box']}>
                <div>
                  <span className={styles['msg-text']}>받은 질문</span>
                </div>
                <span>{profile.questionCount}개</span>
              </div>
            </li>
          ))}
        </ul>
        <Pagenation />
      </div>
    </>
  );
}

export default UserProfileList;
