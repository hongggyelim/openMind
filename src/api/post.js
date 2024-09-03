const BASE_URL = 'https://openmind-api.vercel.app/9-1/';

// 질문 등록하기
export function postQuestion(subjectId, questionValue, setFeedList) {
  const payload = {
    subjectId: subjectId, // url에서 받아와야함
    content: questionValue,
    like: 0,
    dislike: 0,
    team: '9-1',
    answer: {
      content: '',
      isRejected: null,
    },
  };

  fetch(`${BASE_URL}subjects/${subjectId}/questions/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then(response => {
      if (!response.ok) {
        // 요청이 성공하지 않은 경우 처리
        throw new Error('질문을 등록하는데 실패했습니다.');
      }
      return response.json(); // 서버에서 JSON 응답을 받을 것으로 가정
    })
    .then(data => {
      console.log('Success:', data); // 성공적인 요청에 대한 응답 데이터 처리
      setFeedList(prev => [data, ...prev]);
    })
    .catch(error => {
      console.error('Error:', error); // 에러 처리
    });
}

// question id에 like 상태 등록
export async function postReaction(id, type) {
  //전송되는 type에 + 1이 됨
  const payload = {
    type,
  };

  fetch(`${BASE_URL}questions/${id}/reaction/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then(response => {
      if (!response.ok) {
        // 요청이 성공하지 않은 경우 처리
        throw new Error(`댓글 반응 남기기에 실패했습니다.`);
      }
      return response.json(); // 서버에서 JSON 응답을 받을 것으로 가정
    })
    .then(data => {
      console.log('Success:', data); // 성공적인 요청에 대한 응답 데이터 처리
    })
    .catch(error => {
      console.error('Error:', error); // 에러 처리
    });
}

// postAnswer - questionId
export async function postAnswer(id, content, isRejected = false) {
  const payload = {
    questionId: id,
    content: content,
    isRejected: isRejected,
    team: '9-1',
  };

  try {
    const response = await fetch(`${BASE_URL}questions/${id}/answers/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('서버에 답변을 제출하는 데 실패했습니다.');
    }

    return await response.json(); // 서버에서 JSON 응답을 받음
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function updateAnswer(answerId, content, isRejected = false) {
  const payload = {
    content: content,
    isRejected: isRejected,
  };

  try {
    const response = await fetch(`${BASE_URL}answers/${answerId}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text(); // 서버에서 반환한 오류 메시지
      console.error('Server Error:', errorText); // 오류 메시지 출력
      throw new Error(`서버에 답변을 수정하는 데 실패했습니다: ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in updateAnswer function:', error);
    throw error;
  }
}
