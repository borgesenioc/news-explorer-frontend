import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [displayedCount, setDisplayedCount] = useState(3);

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
            onSearch={() => {}}
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
