import { API_KEY, endpoint, country } from '../config/api';

export async function getArticles(category = 'general') {
  const response = await fetch(
    `${endpoint}?country=${country}&category=${category}`,
    {
      headers: {
        'X-API-Key': API_KEY
      }
    }
  );

  const data = await response.json();

  return data.articles;
}
