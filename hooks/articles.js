import { useEffect, useState } from 'react';

import { getArticles } from '../services/services';

export const useGetArticles = (category = 'general') => {
  const [articles, setArticles] = useState([]);

  console.log('Articles => ', articles);

  useEffect(() => {
    getArticles(category)
      .then(articles => setArticles(articles))
      .catch(error => alert(error));
  }, []);

  return articles;
};
