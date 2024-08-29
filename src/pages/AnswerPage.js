import { useEffect, useState } from 'react';
import { EmptyFeedList } from '../components/FeedList/EmptyFeedList';
import Header from '../components/Header/Header';
import styles from './AnswerPage.module.css';
import { getQuestion } from '../api/api';
import { ReactComponent as Message } from '../assets/icon/ic-messages.svg';
import { AnswerFeedList } from '../components/AnswerFeedList/AnswerFeedList';
import { useParams } from 'react-router';

export function AnswerPage() {
  const [feedList, setFeedList] = useState([]);

  const { id } = useParams(); // subject id

  useEffect(() => {
    async function fetchList() {
      const { results } = await getQuestion(id);
      setFeedList(results);
    }
    fetchList();
  }, [id]);

  return (
    <>
      <Header />
      <div className={styles.feed}>
        <div className="wrap-inner2">
          <div className={styles['btn-link']}>
            <button type="button">삭제하기</button>
          </div>
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
