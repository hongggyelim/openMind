import styles from './FeedPage.module.css';
import { FeedList } from '../../components/FeedList/FeedList';
import { ModalWrapper } from '../../components/QuestionModal/ModalWrapper/ModalWrapper';
import { useEffect, useState } from 'react';
import { IsEmptyContext } from '../../context/IsEmptyContext';
import { ContentContext } from '../../context/ContentContext';
import { postQuestion } from '../../api/postQuestion';
import { getQuestion } from '../../api/api';
import ShareSNS from '../../components/ShareSNS/ShareSNS';

export function FeedPage() {
  const INITIAL_VALUE = '';
  const [modalOpen, setModalOpen] = useState(false);
  const [content, setContent] = useState(INITIAL_VALUE);
  const [isEmpty, setIsEmpty] = useState(true);
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    async function fetchList() {
      const { results } = await getQuestion();
      setFeedList(results);
    }
    fetchList();
  }, []);

  const handleClickModal = () => {
    setModalOpen(!modalOpen);
    setContent('');
  };

  const handleSubmitQuestion = e => {
    const data = content;
    e.preventDefault();
    postQuestion(data);
    setContent(INITIAL_VALUE);
    setModalOpen(!modalOpen);
  };

  const handleChangeContent = e => {
    const nextContent = e.target.value;
    setContent(() => nextContent);
    setIsEmpty(nextContent === '');
  };

  return (
    <ContentContext.Provider value={{ content, setContent }}>
      <IsEmptyContext.Provider value={{ isEmpty, setIsEmpty }}>
        <div className={styles.feed}>
          <div className="wrap-inner2">
            <ShareSNS />
            <div className={styles['feed-wrap']}>
              <p className={styles['total-count']}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 13.0619 3.95027 14.0753 4.31442 15.0057C4.50304 15.4876 4.596 16.0392 4.50106 16.603L3.91458 20.0854L7.39704 19.4989C7.96081 19.404 8.51241 19.497 8.99431 19.6856C9.92468 20.0497 10.9381 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C10.748 21.75 9.54935 21.5136 8.44759 21.0824C8.16576 20.9721 7.89114 20.9369 7.64615 20.9781L3.81731 21.6229C2.96976 21.7657 2.23435 21.0302 2.37708 20.1827L3.02189 16.3539C3.06315 16.1089 3.02791 15.8342 2.9176 15.5524C2.48637 14.4507 2.25 13.252 2.25 12Z"
                    fill="#542f1a"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.25 9.99976C7.25 9.58554 7.58579 9.24976 8 9.24976H16C16.4142 9.24976 16.75 9.58554 16.75 9.99976C16.75 10.414 16.4142 10.7498 16 10.7498H8C7.58579 10.7498 7.25 10.414 7.25 9.99976ZM7.25 13.9998C7.25 13.5855 7.58579 13.2498 8 13.2498H12C12.4142 13.2498 12.75 13.5855 12.75 13.9998C12.75 14.414 12.4142 14.7498 12 14.7498H8C7.58579 14.7498 7.25 14.414 7.25 13.9998Z"
                    fill="#542f1a"
                  />
                </svg>
                {feedList.length}개의 질문이 있습니다.
              </p>
              {feedList.map(item => {
                return (
                  <div key={item.id}>
                    <FeedList item={item} />
                  </div>
                );
              })}
            </div>
          </div>

          <span className={styles['btn-link']}>
            <button type="button" onClick={handleClickModal}>
              질문 작성하기
            </button>
          </span>

          {modalOpen && (
            <ModalWrapper
              onClick={handleClickModal}
              onSubmit={handleSubmitQuestion}
              onChange={handleChangeContent}
            />
          )}
        </div>
      </IsEmptyContext.Provider>
    </ContentContext.Provider>
  );
}
