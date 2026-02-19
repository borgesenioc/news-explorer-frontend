import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

function SavedNews({ savedArticles }) {
  return (
    <main className="saved-news">
      <SavedNewsHeader savedCount={savedArticles.length} />
      {savedArticles.length > 0 && (
        <NewsCardList
          cards={savedArticles}
          totalArticles={savedArticles.length}
          displayedCount={savedArticles.length}
          onShowMore={() => {}}
        />
      )}
    </main>
  );
}

export default SavedNews;
