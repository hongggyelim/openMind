import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AskForm.module.css';
import { setLocalstorage } from '../../utils/localstorageFunc';
import USER_KEY from '../../constants/localstorage';

export function AskForm() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleInputChange = e => {
    setName(e.target.value);
  };

  const handleAskButtonClick = async () => {
    if (name) {
      try {
        const response = await fetch(
          'https://openmind-api.vercel.app/9-1/subjects/',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name }),
          },
        );

        if (!response.ok) {
          throw new Error('질문 대상 생성에 실패했습니다.');
        }

        const data = await response.json();
        const feedId = data.id; // 생성된 질문 대상의 id 사용
        setLocalstorage(USER_KEY, data);

        navigate(`/post/${feedId}/answer`, {
          // state: {
          //   imageSource: imageSource,
          //   name: userName,
          // },
        });
      } catch (error) {
        console.error('Error creating subject:', error);
        alert('질문 대상 생성 중 오류가 발생했습니다.');
      }
    } else {
      alert('이름을 입력하세요.');
    }
  };

  return (
    <div className={styles.formContainer}>
      <input
        type="text"
        id="nameInput"
        name="name"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={handleInputChange}
        className={styles.inputField}
      />
      <button onClick={handleAskButtonClick} className={styles.askButton}>
        질문받기
      </button>
    </div>
  );
}
