import { NEWS_API_BASE_URL, NEWS_API_KEY, API_PAGE_SIZE, SEARCH_DAYS_BACK } from './constants';

class NewsApi {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(new Error(`Error: ${res.status}`));
  }

  searchNews(keyword) {
    if (!keyword || !keyword.trim()) {
      return Promise.reject(new Error('Search keyword must not be empty'));
    }

    const today = new Date();
    const from = new Date(today.getTime() - SEARCH_DAYS_BACK * 24 * 60 * 60 * 1000);

    return fetch(
      `${this._baseUrl}/everything?q=${encodeURIComponent(keyword)}&from=${from.toISOString()}&to=${today.toISOString()}&pageSize=${API_PAGE_SIZE}&apiKey=${this._apiKey}`
    )
      .then((res) => this._checkResponse(res))
      .catch((err) => {
        console.error(err);
        throw err;
      });
  }
}

export const newsApi = new NewsApi({
  baseUrl: NEWS_API_BASE_URL,
  apiKey: NEWS_API_KEY,
});
