import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';
import { Helmet } from 'react-helmet-async';
export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>OpenMind - 없는 페이지</title>
      </Helmet>
      <div className={styles['wrap-inner']}>
        <div className={styles.box}>
          <div className={styles['not-found']}>
            요청하신 페이지를 찾을 수 없습니다.
          </div>
          <div className={styles['move-wrap']}>
            <Link to="/" className={styles['move-btn']}>
              메인페이지로
            </Link>
            <Link to="/list" className={styles['move-btn']}>
              질문페이지로
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
