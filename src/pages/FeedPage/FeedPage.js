import styles from './FeedPage.module.css';
import { FeedList } from '../../components/FeedList/FeedList';
import { ModalWrapper } from '../../components/QuestionModal/ModalWrapper/ModalWrapper';
import { useContext, useEffect, useRef, useState } from 'react';
import { postQuestion } from '../../api/post';
import { getQuestion } from '../../api/api';
import { EmptyFeedList } from '../../components/FeedList/EmptyFeedList';
import Header from '../../components/Header/Header';
import Toast from '../../components/ShareSNS/Toast';
import { useParams } from 'react-router';
import { ContentContext } from '../../context/ContentContext';
import { IsEmptyContext } from '../../context/IsEmptyContext';
import { useLocation } from 'react-router';
import { ScrollTop } from '../../components/ScrollTop/ScrollTop';
import { ReactComponent as Message } from '../../assets/icon/ic-messages.svg';
import { ReactComponent as Top } from '../../assets/icon/ic-arrow-up-copy.svg';

export function FeedPage() {
  const INITIAL_VALUE = '';
  const [modalOpen, setModalOpen] = useState(false);
  const [feedList, setFeedList] = useState([]);
  const [toast, setToast] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [toTop, setToTop] = useState(false);

  const { content, setContent } = useContext(ContentContext);
  const { setIsEmpty } = useContext(IsEmptyContext);

  const questionRef = useRef();
  const lastElementRef = useRef(null);
  const observer = useRef();
  const limit = 8;

  const { subjectId } = useParams();

  // 모달 열렸을때 body에 overflow : hidden 스타일 지정
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  //useLocation hook
  const location = useLocation();
  const { imageSource, name } = location.state || {};

  useEffect(() => {
    async function fetchList() {
      if (isLoading) return;

      setIsLoading(true);
      try {
        const { results, next, count } = await getQuestion({
          subjectId,
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
  }, [offset, subjectId]); // eslint-disable-line react-hooks/exhaustive-deps

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

  // 모달창 열렸을때 인풋에 포커스
  useEffect(() => {
    if (modalOpen) {
      questionRef.current.focus();
    }
  }, [modalOpen]);

  // 특정 스크롤 위치에서 toTop 버튼 렌더링

  const handleClickModal = () => {
    setContent(INITIAL_VALUE);
    setModalOpen(!modalOpen);
    setIsEmpty(true);
  };

  const handleSubmitQuestion = e => {
    e.preventDefault();
    postQuestion(subjectId, content);
    setContent(INITIAL_VALUE);
    setModalOpen(!modalOpen);
    setToast(true);
  };

  const handleChangeContent = e => {
    const nextContent = e.target.value;
    setContent(() => nextContent);
    setIsEmpty(nextContent === '');
  };

  return (
    <>
      <Header userImg={imageSource} userName={name} />
      <main className={styles.feed}>
        <div className="wrap-inner2">
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
              feedList.map((item, index) => (
                <div
                  key={item.id}
                  ref={index === feedList.length - 1 ? lastElementRef : null}
                >
                  <FeedList id={item.id} item={item} />
                </div>
              ))
            )}
          </div>
        </div>
        <ScrollTop>
          <Top fill="#542f1a" width="36" height="36" />
        </ScrollTop>
      </main>

      <span className={styles['btn-link']}>
        <button type="button" onClick={handleClickModal}>
          질문 작성하기
        </button>
      </span>
      {modalOpen && (
        <ModalWrapper
          ref={questionRef}
          onClick={handleClickModal}
          onSubmit={handleSubmitQuestion}
          onChange={handleChangeContent}
          placehorder="질문을 입력해주세요"
          btnText="질문 보내기"
          name={name}
          image={imageSource}
        />
      )}
      {toast && <Toast setToast={setToast} text="질문이 등록되었습니다" />}
    </>
  );
}
