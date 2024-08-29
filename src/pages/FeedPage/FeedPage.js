import styles from './FeedPage.module.css';
import { FeedList } from '../../components/FeedList/FeedList';
import { ModalWrapper } from '../../components/QuestionModal/ModalWrapper/ModalWrapper';
import { useEffect, useRef, useState } from 'react';
import { IsEmptyContext } from '../../context/IsEmptyContext';
import { ContentContext } from '../../context/ContentContext';
import { postQuestion } from '../../api/postQuestion';
import { getQuestion } from '../../api/api';
import { EmptyFeedList } from '../../components/FeedList/EmptyFeedList';
import Header from '../../components/Header/Header';
import Toast from '../../components/ShareSNS/Toast';
import { ReactComponent as Message } from '../../assets/icon/ic-messages.svg';

export function FeedPage() {
  const INITIAL_VALUE = '';
  const [modalOpen, setModalOpen] = useState(false);
  const [content, setContent] = useState(INITIAL_VALUE);
  const [isEmpty, setIsEmpty] = useState(true);
  const [feedList, setFeedList] = useState([]);
  const [toast, setToast] = useState(false);

  const questionRef = useRef();

  useEffect(() => {
    async function fetchList() {
      const { results } = await getQuestion();
      setFeedList(results);
    }
    fetchList();
  }, []);

  useEffect(() => {
    if (modalOpen) {
      questionRef.current.focus();
    }
  }, [modalOpen]);

  const handleClickModal = () => {
    setContent(INITIAL_VALUE);
    setModalOpen(!modalOpen);
    setIsEmpty(true);
  };

  const handleSubmitQuestion = e => {
    e.preventDefault();
    postQuestion(content);
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
    <ContentContext.Provider value={{ content, setContent }}>
      <IsEmptyContext.Provider value={{ isEmpty, setIsEmpty }}>
        <Header />
        <div className={styles.feed}>
          <div className="wrap-inner2">
            <div className={styles['feed-wrap']}>
              <p className={styles['total-count']}>
                <Message fill={'var(--brown-40)'} />
                {feedList.length === 0
                  ? '아직 질문이 없습니다'
                  : `${feedList.length}개의 질문이 있습니다.`}
              </p>
              {feedList.length === 0 ? (
                <EmptyFeedList />
              ) : (
                feedList.map(item => (
                  <div key={item.id}>
                    <FeedList item={item} />
                  </div>
                ))
              )}
            </div>
          </div>
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
            />
          )}
          {toast && <Toast setToast={setToast} text="질문이 등록되었습니다" />}
        </div>
      </IsEmptyContext.Provider>
    </ContentContext.Provider>
  );
}
