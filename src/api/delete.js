const BASE_URL = 'https://openmind-api.vercel.app/9-1/';

export async function deleteAnswer(id) {
  const response = await fetch(`${BASE_URL}subjects/${id}/`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('답변을 삭제하는데 실패했습니다.');
  }

  const contentLength = response.headers.get('content-length');
  if (contentLength && contentLength !== '0') {
    const data = await response.json();
    return data;
  }

  return {};
}

export async function deleteQuestion(id) {
  const response = await fetch(`${BASE_URL}questions/${id}/`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('질문을 삭제하는데 실패했습니다.');
  }

  const contentLength = response.headers.get('content-length');
  if (contentLength && contentLength !== '0') {
    const data = await response.json();
    return data;
  }

  return {};
}
