import styles from './UserProfileList.module.css';
import Pagenation from '../Pagenation/Pagenation';
import UserProfile from '../UserProfile/UserProfile';
import { getProfile } from '../../../api/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ListDropdownMenu from '../ListDropdownMenu/ListDropdownMenu';

const getLimit = () => {
  const width = window.innerWidth;
  if (width < 1200) {
    return 6;
  } else {
    return 8;
  }
};

function UserProfileList() {
  const [profiles, setProfile] = useState([]);
  const [count, setCount] = useState(); // 전체 데이터 개수
  const [offset, setOffset] = useState(0);
  const [totalPage, setTotalPage] = useState();
  const [limit, setLimit] = useState(getLimit());
  const [loadingError, setLoadingError] = useState(null);

  const selectOptionList = [
    { id: 'option1', option: '최신순', func: handleNameClick },
    { id: 'option2', option: '이름순', func: handleNewestClick },
  ];

  function handleNameClick() {
    const sortedName = profiles.sort((a, b) => (a.name > b.name ? 1 : -1));
    setProfile([...sortedName]);
  }

  function handleNewestClick() {
    const sortedNewest = profiles.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    );
    setProfile([...sortedNewest]);
  }

  const onChange = offsetNum => {
    setOffset(offsetNum);
  };

  useEffect(() => {
    const getProfileList = async queryOption => {
      try {
        const { count, results } = await getProfile(queryOption);
        setCount(count);
        setProfile(results);
        setTotalPage(Math.ceil(count / limit));
      } catch (error) {
        setLoadingError(error);
        return;
      }
    };
    getProfileList({ offset, limit });

    const handleResize = () => {
      setLimit(getLimit());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.addEventListener('resize', handleResize);
    };
  }, [offset, limit]);

  return (
    <>
      <div className={styles['title-box']}>
        <h2 className={styles.title}>누구에게 질문할까요?</h2>

        <ListDropdownMenu selectOptionList={selectOptionList} />
      </div>
      {loadingError?.message && <p>{loadingError.message}</p>}
      <div className={styles['list-box']}>
        <ul className={styles['profile-card-list']}>
          {profiles.map(profile => (
            <li key={profile.id} className={styles['profile-card']}>
              <Link
                to={`/post/${profile.id}`}
                state={{
                  imageSource: profile.imageSource,
                  name: profile.name,
                }}
              >
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
              </Link>
            </li>
          ))}
        </ul>
        <Pagenation
          count={count}
          offset={offset}
          totalPage={totalPage}
          onChange={onChange}
          limit={limit}
        />
      </div>
    </>
  );
}

export default UserProfileList;
