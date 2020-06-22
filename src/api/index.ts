/* eslint-disable import/prefer-default-export */
const baseUrl = 'https://hn.algolia.com/api/v1/search';

export const getNews = async <T>(page: number): Promise<T> => {
  try {
    const res = await fetch(`${baseUrl}?page=${page}`);
    return res.json();
  } catch (err) {
    throw new Error('Unable to fetch news');
  }
};
