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
      />
    </button>
  );
}

const { Kakao } = window;

function ShareSNS() {
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
        title: '유저 닉네임',
        description: '유저 닉네임의 질문지',
        imageUrl:
          'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      itemContent: {
        profileText: 'OpenMind',
        profileImageUrl:
          'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        titleImageUrl:
          'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        titleImageText: 'User Nickname',
        titleImageCategory: 'User',
        items: [
          {
            item: 'Cake1',
            itemOp: '1000원',
          },
          {
            item: 'Cake2',
            itemOp: '2000원',
          },
        ],
      },
      social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
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
