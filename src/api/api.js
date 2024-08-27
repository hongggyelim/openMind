const BASE_URL = 'https://openmind-api.vercel.app/9-1/';

export async function getProfile() {
  const response = await fetch(`${BASE_URL}subjects/`);
  const data = await response.json();
  return data;
}

// FeedPage fetch
export async function getQuestion() {
  const response = await fetch(`${BASE_URL}subjects/7964/questions/`);
  const data = await response.json();
  return data;
}
