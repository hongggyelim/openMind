const BASE_URL = 'https://openmind-api.vercel.app/9-1/';

// 질문 등록하기
export function postQuestion(subjectId, content) {
  const payload = {
    subjectId: subjectId, // url에서 받아와야함
    content: content,
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
      console.log('Success:', data);
      return data; // 성공적인 요청에 대한 응답 데이터 처리
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
