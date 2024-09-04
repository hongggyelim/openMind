import { useEffect } from 'react';
import facebook from '../../assets/button/share-facebook.svg';
import kakao from '../../assets/button/share-kakao.svg';
import styles from './ShareSNS.module.css';
import ShareLink from './ShareLink';

function ShareButton({ src, alt, onClick }) {
  return (
    <button className={styles['share-button']} onClick={onClick} type="button">
      <img
        className={styles['share-img']}
        src={src}
        alt={alt}
        width={40}
        height={40}
        type="button"
      />
    </button>
  );
}

const { Kakao } = window;

function ShareSNS({ userImg, userName, totalCount }) {
  const resultUrl = window.location.href;

  const shareFacebook = () => {
    const sendUrl = encodeURIComponent(resultUrl);
    window.open('http://www.facebook.com/sharer/sharer.php?u=' + sendUrl);
  };

  // const shareNaver = () => {
  //   const sendUrl = encodeURIComponent(resultUrl);
  //   window.open(
  //     `https://share.naver.com/web/shareView?url=${sendUrl}&title=네이버 공유하기`,
  //   );
  // };

  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init('79d072d90835de5fab5d7743d0bbe702');
    }
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: userName,
        description: `${userName}님의 질문지`,
        imageUrl:
          'https://openmind9-1.netlify.app/static/media/logo.b5b22f505d24fba7fbc4.png',
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      itemContent: {
        profileText: 'OpenMind',
        profileImageUrl:
          'https://openmind9-1.netlify.app/static/media/background.e2efec4a94a1d1ba10cb.png',
        titleImageUrl: userImg,
        titleImageText: userName,
        titleImageCategory: 'Question Feed',
      },
      social: {
        likeCount: 0,
        commentCount: 0,
        sharedCount: 0,
      },
      buttons: [
        {
          title: '웹으로 이동',
          link: {
            mobileWebUrl: resultUrl,
            webUrl: resultUrl,
          },
        },
        {
          title: '앱으로 이동',
          link: {
            mobileWebUrl: resultUrl,
            webUrl: resultUrl,
          },
        },
      ],
    });
  };

  return (
    <div className={styles['shareSNS-container']}>
      <ShareLink />
      <ShareButton onClick={shareKakao} src={kakao} alt={'카카오'} />
      <ShareButton onClick={shareFacebook} src={facebook} alt={'페이스북'} />
    </div>
  );
}

export default ShareSNS;
