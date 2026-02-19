import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import { newsApi } from '../../utils/ThirdPartyApi';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [displayedCount, setDisplayedCount] = useState(3);

  // Carrega resultados salvos ao iniciar
  useEffect(() => {
    const saved = localStorage.getItem('articles');
    if (saved) {
      setArticles(JSON.parse(saved));
      setHasSearched(true);
    }
  }, []);

  function handleSearch(keyword) {
    setIsLoading(true);
    setSearchError('');
    setHasSearched(true);
    setDisplayedCount(3);

    newsApi
      .searchNews(keyword)
      .then((data) => {
        const results = data.articles || [];
        setArticles(results);
        localStorage.setItem('articles', JSON.stringify(results));
        localStorage.setItem('lastKeyword', keyword);
      })
      .catch(() => {
        setSearchError(
          'Desculpe, algo deu errado durante a solicitação. Verifique sua conexão e tente novamente.'
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleShowMore() {
    setDisplayedCount((prev) => prev + 3);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header theme="dark" />
          <Main
            articles={articles.slice(0, displayedCount)}
            totalArticles={articles.length}
            displayedCount={displayedCount}
            isLoading={isLoading}
            searchError={searchError}
            hasSearched={hasSearched}
            onSearch={handleSearch}
            onShowMore={handleShowMore}
          />
        </Route>
        <Route path="/saved-news">
          <Header theme="light" />
          <SavedNews savedArticles={[]} />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
