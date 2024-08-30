import { useEffect, useRef, useState } from 'react';
import { EmptyFeedList } from '../components/FeedList/EmptyFeedList';
import Header from '../components/Header/Header';
import styles from './AnswerPage.module.css';
import { getQuestion } from '../api/api';
import { ReactComponent as Message } from '../assets/icon/ic-messages.svg';
import { AnswerFeedList } from '../components/AnswerFeedList/AnswerFeedList';
import { useLocation, useParams } from 'react-router';

export function AnswerPage() {
  const [feedList, setFeedList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [hasMore, setHasMore] = useState(false);

  const lastElementRef = useRef(null);
  const observer = useRef();
  const limit = 8;

  const { id } = useParams(); // subject id

  //useLocation hook
  const location = useLocation();
  const { imageSource, username } = location.state || {};

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

  return (
    <>
      <Header userImg={imageSource} userName={username} />
      <div className={styles.feed}>
        <div className="wrap-inner2">
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
      </div>
    </>
  );
}
