export const NEWS_API_BASE_URL =
  import.meta.env.PROD
    ? 'https://nomoreparties.co/news/v2'
    : 'https://newsapi.org/v2';

export const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY || '';

export const INITIAL_CARD_COUNT = 3;
export const CARDS_PER_LOAD = 3;
export const API_PAGE_SIZE = 100;
export const SEARCH_DAYS_BACK = 7;
