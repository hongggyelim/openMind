import { useEffect, useRef, useState } from 'react';
import { EmptyFeedList } from '../components/FeedList/EmptyFeedList';
import Header from '../components/Header/Header';
import styles from './AnswerPage.module.css';
import { getQuestion } from '../api/api';
import { ReactComponent as Message } from '../assets/icon/ic-messages.svg';
import { AnswerFeedList } from '../components/AnswerFeedList/AnswerFeedList';
import { useParams } from 'react-router';
import { AnswerLinkButton } from '../components/List/Gnb/Gnb';
import { throttle } from '../utils/throttle';
import { ScrollTop } from '../components/ScrollTop/ScrollTop';
import { ReactComponent as Top } from '../assets/icon/ic-arrow-up-copy.svg';

export function AnswerPage() {
  const [feedList, setFeedList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [toTop, setToTop] = useState(false);

  const lastElementRef = useRef(null);
  const observer = useRef();
  const limit = 8;

  const { id } = useParams(); // subject id

  const userInfo = JSON.parse(localStorage.getItem('info'));

  useEffect(() => {
    async function fetchList() {
      if (isLoading) return;

      setIsLoading(true);
      try {
        const { results, next, count } = await getQuestion({
          subjectId: id,
          offset,
          limit,
        });
        setFeedList(prev => [...prev, ...results]);
        setHasMore(next !== null);
        setTotalCount(count);
      } catch (error) {
        console.error('Error fetching questions:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchList();
  }, [offset, id]); // eslint-disable-line react-hooks/exhaustive-deps

  //무한스크롤
  useEffect(() => {
    if (isLoading) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setOffset(prevOffset => prevOffset + limit);
      }
    });

    if (lastElementRef.current) {
      observer.current.observe(lastElementRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [isLoading, hasMore]);

  //위로가기 버튼 렌더 (스크롤 감지)
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setToTop(true); //버튼 렌더
    } else {
      setToTop(false);
    }
  };

  const throttleHandleScroll = throttle(handleScroll, 200);

  useEffect(() => {
    window.addEventListener('scroll', throttleHandleScroll);
    return () => {
      window.removeEventListener('scroll', throttleHandleScroll);
    };
  }, []);

  //위로가기 버튼 동작
  const handleClickTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <Header userImg={userInfo.imageSource} userName={userInfo.name} />
      <main className={styles.feed}>
        <div className={`wrap-inner2 ${styles['delete-btn-wrap']}`}>
          <div className={styles['btn-link']}>
            <button type="button">삭제하기</button>
          </div>
          <div className={styles['feed-wrap']}>
            <p className={styles['total-count']}>
              <Message fill={'var(--brown-40)'} />
              {totalCount === 0
                ? '아직 질문이 없습니다'
                : `${totalCount}개의 질문이 있습니다.`}
            </p>
            {feedList.length === 0 ? (
              <EmptyFeedList />
            ) : (
              feedList.map(item => (
                <div key={item.id}>
                  <AnswerFeedList id={item.id} item={item} />
                </div>
              ))
            )}
          </div>
        </div>
        {toTop && (
          <ScrollTop onClick={handleClickTop}>
            <Top fill="#542f1a" width="36" height="36" />
          </ScrollTop>
        )}
      </main>
      <span className={styles['to-list-btn']}>
        <AnswerLinkButton btnLink={'/list'}>질문하러 가기</AnswerLinkButton>
      </span>
    </>
  );
}
