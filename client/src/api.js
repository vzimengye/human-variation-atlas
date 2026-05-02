import axios from 'axios';

const API_BASE =
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.PROD ? '/api' : 'http://localhost:3001/api');

export const api = axios.create({
  baseURL: API_BASE,
});

export async function fetchWikipediaSummary(pageTitle) {
  const response = await axios.get('https://en.wikipedia.org/w/api.php', {
    params: {
      action: 'query',
      prop: 'extracts',
      exintro: true,
      explaintext: true,
      titles: pageTitle,
      format: 'json',
      origin: '*',
    },
  });

  const pages = response.data?.query?.pages ?? {};
  const firstPage = Object.values(pages)[0];

  return firstPage?.extract || 'No summary available yet.';
}
