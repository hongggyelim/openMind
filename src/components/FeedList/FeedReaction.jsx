import styles from '../FeedList/FeedReaction.module.css';
import { useState, useEffect } from 'react';

export function FeedReaction({ id, like, dislike }) {
  const [countLike, setCountLike] = useState(() => {
    const savedLike = localStorage.getItem(`${id}_like`);
    return savedLike ? parseInt(savedLike) : like;
  });
  const [countDislike, setCountDislike] = useState(() => {
    const savedDislike = localStorage.getItem(`${id}_dislike`);
    return savedDislike ? parseInt(savedDislike) : dislike;
  });
  const [activeButton, setActiveButton] = useState(() => {
    const savedButton = localStorage.getItem(`${id}_activeButton`);
    return savedButton ? savedButton : null;
  });

  useEffect(() => {
    localStorage.setItem(`${id}_like`, countLike);
    localStorage.setItem(`${id}_dislike`, countDislike);
    localStorage.setItem(`${id}_activeButton`, activeButton);
  }, [countLike, countDislike, activeButton, id]);

  const onClickLike = () => {
    if (activeButton === 'like') {
      setActiveButton(null);
      setCountLike(prevCount => prevCount - 1);
    } else {
      if (activeButton === 'dislike') {
        setCountDislike(prevCount => prevCount - 1);
      }
      setActiveButton('like');
      setCountLike(prevCount => prevCount + 1);
    }
  };

  const onClickDislike = () => {
    if (activeButton === 'dislike') {
      setActiveButton(null);
      setCountDislike(prevCount => prevCount - 1);
    } else {
      if (activeButton === 'like') {
        setCountLike(prevCount => prevCount - 1);
      }
      setActiveButton('dislike');
      setCountDislike(prevCount => prevCount + 1);
    }
  };

  return (
    <div className={styles['btn-reaction']}>
      <button
        type="button"
        className={`${styles['btn']} ${styles['btn-like']} ${activeButton === 'like' ? styles['active'] : ''}`}
        onClick={onClickLike}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.3146 1.6954C10.435 1.42455 10.7036 1.25 11 1.25C11.9946 1.25 12.9484 1.64509 13.6517 2.34835C14.3549 3.05161 14.75 4.00544 14.75 5V8.25H19.6561C20.0532 8.24617 20.4464 8.32837 20.8087 8.49097C21.1724 8.6542 21.4962 8.89456 21.7578 9.19538C22.0194 9.4962 22.2125 9.8503 22.3236 10.2331C22.4347 10.616 22.4613 11.0184 22.4015 11.4125L21.0215 20.4125C21.0215 20.4125 21.0215 20.4124 21.0215 20.4125C20.9221 21.0681 20.589 21.6659 20.0836 22.0955C19.5794 22.524 18.9377 22.7564 18.2761 22.75H4C3.27065 22.75 2.57118 22.4603 2.05546 21.9445C1.53973 21.4288 1.25 20.7293 1.25 20V13C1.25 12.2707 1.53973 11.5712 2.05546 11.0555C2.57118 10.5397 3.27065 10.25 4 10.25H6.5126L10.3146 1.6954ZM7.75 11.1592L11.4657 2.79872C11.8888 2.88824 12.2806 3.09859 12.591 3.40901C13.0129 3.83097 13.25 4.40326 13.25 5V9C13.25 9.41421 13.5858 9.75 14 9.75H19.66L19.6685 9.74995C19.8497 9.7479 20.0292 9.78527 20.1945 9.85946C20.3598 9.93366 20.507 10.0429 20.6259 10.1796C20.7448 10.3164 20.8326 10.4773 20.8831 10.6514C20.9336 10.8253 20.9457 11.0081 20.9185 11.1871C20.9185 11.1872 20.9186 11.187 20.9185 11.1871L19.5385 20.1875C19.4933 20.4856 19.3419 20.7573 19.1122 20.9526C18.8825 21.1478 18.5899 21.2535 18.2885 21.25L7.75 21.25V11.1592ZM6.25 21.25V11.75H4C3.66848 11.75 3.35054 11.8817 3.11612 12.1161C2.8817 12.3505 2.75 12.6685 2.75 13V20C2.75 20.3315 2.8817 20.6495 3.11612 20.8839C3.35054 21.1183 3.66848 21.25 4 21.25H6.25Z"
            fill="black"
          />
        </svg>
        좋아요 {countLike !== 0 && countLike}
      </button>
      <button
        type="button"
        className={`${styles['btn']} ${styles['btn-dislike']} ${activeButton === 'dislike' ? styles['active'] : ''}`}
        onClick={onClickDislike}
      >
        <svg
          width="16"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.7269 3.12603C20.4369 2.87705 20.0655 2.74324 19.6833 2.75L19.67 2.75023L17.75 2.75012V12.2501H19.6833C20.0655 12.2569 20.4369 12.1232 20.7269 11.8742C21.0055 11.6351 21.1904 11.3059 21.25 10.9447V4.05557C21.1904 3.69438 21.0055 3.3651 20.7269 3.12603ZM16.25 12.841L12.5343 21.2014C12.1113 21.1119 11.7195 20.9015 11.409 20.5911C10.9871 20.1692 10.75 19.5969 10.75 19.0001V15.0001C10.75 14.5859 10.4142 14.2501 10 14.2501H4.34003L4.33154 14.2502C4.15035 14.2522 3.97087 14.2149 3.80556 14.1407C3.64024 14.0665 3.49303 13.9572 3.37413 13.8205C3.25522 13.6837 3.16747 13.5228 3.11695 13.3488C3.06648 13.1749 3.05437 12.9922 3.08146 12.8132C3.08143 12.8133 3.08149 12.813 3.08146 12.8132L4.46155 3.81257C4.50675 3.5145 4.65816 3.24282 4.88786 3.04757C5.11757 2.85232 5.4101 2.74666 5.71155 2.75007L16.25 2.75012V12.841ZM19.6639 1.25012C20.4111 1.23863 21.1368 1.50099 21.7039 1.98784C22.2729 2.47622 22.6428 3.15652 22.7433 3.89959C22.7478 3.93291 22.75 3.96649 22.75 4.00012V11.0001C22.75 11.0337 22.7478 11.0673 22.7433 11.1006C22.6428 11.8437 22.2729 12.524 21.7039 13.0124C21.1368 13.4992 20.4111 13.7616 19.6639 13.7501H17.4874L13.6854 22.3047C13.565 22.5756 13.2964 22.7501 13 22.7501C12.0055 22.7501 11.0516 22.355 10.3484 21.6518C9.64512 20.9485 9.25003 19.9947 9.25003 19.0001V15.7501H4.34398C3.9469 15.754 3.55368 15.6718 3.19136 15.5091C2.82766 15.3459 2.5038 15.1056 2.24222 14.8047C1.98063 14.5039 1.78758 14.1498 1.67643 13.767C1.56528 13.3841 1.5387 12.9817 1.59852 12.5876L2.97851 3.58767C2.97848 3.58788 2.97854 3.58745 2.97851 3.58767C3.07808 2.93218 3.41121 2.33406 3.91639 1.90466C4.42058 1.4761 5.06235 1.24374 5.72393 1.25012H19.6639Z"
            fill="black"
          />
        </svg>
        싫어요 {countDislike !== 0 && countDislike}
      </button>
    </div>
  );
}
