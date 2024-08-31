import { useEffect, useRef, useState } from 'react';
import { EmptyFeedList } from '../components/FeedList/EmptyFeedList';
import Header from '../components/Header/Header';
import styles from './AnswerPage.module.css';
import { getQuestion } from '../api/api';
import { deleteAnswer } from '../api/delete';
import { ReactComponent as Message } from '../assets/icon/ic-messages.svg';
import { AnswerFeedList } from '../components/AnswerFeedList/AnswerFeedList';
import { useLocation, useParams, useNavigate } from 'react-router';
import { AnswerLinkButton } from '../components/List/Gnb/Gnb';

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
  const navigate = useNavigate();

  //useLocation hook
  const location = useLocation();
  const { imageSource, name } = location.state || {}; //답변페이지에서 렌더 안됨

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

  const handleDelete = async () => {
    try {
      await deleteAnswer(id);
    } catch (error) {
      console.error('삭제 중 오류가 발생했습니다:', error);
    } finally {
      alert('모든 질문이 삭제되었습니다.');
      navigate('/');
    }
  };

  return (
    <>
      <Header userImg={imageSource} userName={name} />
      <div className={styles.feed}>
        <div className="wrap-inner2">
          <div className={styles['btn-link']}>
            <button onClick={handleDelete} type="button">
              삭제하기
            </button>
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
      <span className={styles['to-list-btn']}>
        <AnswerLinkButton btnLink={'/list'}>질문하러 가기</AnswerLinkButton>
      </span>
    </>
  );
}
