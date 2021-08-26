import { API_KEY, ENDPOINT, COUNTRY } from '@env';

export async function getArticles(category = 'general') {
  const response = await fetch(
    `${ENDPOINT}?country=${COUNTRY}&category=${category}`,
    {
      headers: {
        'X-API-Key': API_KEY
      }
    }
  );

  const data = await response.json();

  return data.articles;
}
