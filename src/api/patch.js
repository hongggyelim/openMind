const BASE_URL = 'https://openmind-api.vercel.app/9-1/';

export function postQuestion(content) {
  const payload = {
    subjectId: 7964, // url에서 받아와야함
    content: content,
    like: 0,
    dislike: 0,
    team: '9-1',
    answer: {
      content: '',
      isRejected: null,
    },
  };

  fetch(`${BASE_URL}subjects/7964/questions/`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
    .then(response => {
      if (!response.ok) {
        // 요청이 성공하지 않은 경우 처리
        throw new Error('Failed to post question');
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
