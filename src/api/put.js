const BASE_URL = 'https://openmind-api.vercel.app/9-1/';

const payload = {
  like: like + 1,
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

// 질문 id에 like 업데이트하기
export async function updateLike({ id = 13553, like }) {
  const response = await fetch(`${BASE_URL}questions/${id}/reaction/`);
  const data = await response.json();
  const questionList = data.result;

  //question id가 일치하는 배열 반환하기
  let questionUpdated = questionList.filter(question => {
    question.id.includes('13553');
  });
}
