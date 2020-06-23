/* eslint-disable import/prefer-default-export */
const baseUrl = 'https://hn.algolia.com/api/v1/search';

export const getNews = async <T>(page: string): Promise<T> => {
  try {
    const res = await fetch(`${baseUrl}?page=${Number(page)}`);
    return res.json();
  } catch (err) {
    throw new Error('Unable to fetch news');
  }
};
