const BASE_URL = 'https://openmind-api.vercel.app/9-1/';

export async function getProfile({ offset = 0, limit = 8 }) {
  const query = `?limit=${limit}&offset=${offset}`;
  const response = await fetch(`${BASE_URL}subjects/${query}`);
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패했습니다');
  }
  const data = await response.json();
  return data;
}

// FeedPage fetch

export async function getQuestion({ subjectId, offset = 0, limit = 8 }) {
  const response = await fetch(
    `${BASE_URL}subjects/${subjectId}/questions/?limit=${limit}&offset=${offset}`,
  );
  const data = await response.json();
  return data;
}

// Answer fetch
