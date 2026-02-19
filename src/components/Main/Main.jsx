import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import './Main.css';

function Main({
  articles,
  totalArticles,
  displayedCount,
  isLoading,
  searchError,
  hasSearched,
  onSearch,
  onShowMore,
}) {
  return (
    <main className="main">
      <SearchForm onSearch={onSearch} />

      {isLoading && <Preloader />}

      {hasSearched && !isLoading && searchError && (
        <div className="main__status">
          <p className="main__status-text">{searchError}</p>
        </div>
      )}

      {hasSearched && !isLoading && !searchError && articles.length === 0 && (
        <div className="main__status">
          <p className="main__status-title">Nada encontrado</p>
          <p className="main__status-text">
            Desculpe, nao encontramos noticias com esse tema. Tente uma palavra-chave diferente.
          </p>
        </div>
      )}

      {hasSearched && !isLoading && !searchError && articles.length > 0 && (
        <NewsCardList
          cards={articles}
          totalArticles={totalArticles}
          displayedCount={displayedCount}
          onShowMore={onShowMore}
        />
      )}

      <About />
    </main>
  );
}

export default Main;
