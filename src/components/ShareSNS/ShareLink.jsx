import { useState } from 'react';
import Toast from './Toast';
import shareLink from '../../assets/button/share-link.svg';
import styles from './ShareLink.module.css';

function ShareLink() {
  const [toast, setToast] = useState(false);

  const handleCopyUrl = async () => {
    try {
      const currentUrl = window.location.href;
      await navigator.clipboard.writeText(currentUrl);
      setToast(true);
    } catch (error) {
      console.error('URL 복사 실패:', error);
    }
  };

  return (
    <>
      <button
        className={styles['share-link-button']}
        onClick={handleCopyUrl}
        type="button"
      >
        <img
          className={styles['share-link-img']}
          src={shareLink}
          alt="공유하기"
        />
      </button>
      {toast && <Toast setToast={setToast} text="URL이 복사되었습니다" />}
    </>
  );
}

export default ShareLink;
