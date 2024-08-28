const BASE_URL = 'https://openmind-api.vercel.app/9-1/';

export async function getProfile({ offset = 0, limit = 8 }) {
  const query = `?limit=${limit}&offset=${offset}`;
  const response = await fetch(`${BASE_URL}subjects/${query}`);
  const data = await response.json();
  return data;
}
