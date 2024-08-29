import { useEffect, useRef, useState } from 'react';
import { EmptyFeedList } from '../components/FeedList/EmptyFeedList';
import { FeedList } from '../components/FeedList/FeedList';
import Header from '../components/Header/Header';
import { ContentContext } from '../context/ContentContext';
import { IsEmptyContext } from '../context/IsEmptyContext';
import styles from './AnswerPage.module.css';
import { getQuestion } from '../api/api';
import { postQuestion } from '../api/post';
import { ReactComponent as Message } from '../assets/icon/ic-messages.svg';

export function AnswerPage() {
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
        </div>
      </IsEmptyContext.Provider>
    </ContentContext.Provider>
  );
}
