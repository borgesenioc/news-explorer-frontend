import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

function SavedNews({ savedArticles = [], onSave }) {
  return (
    <main className="saved-news">
      <SavedNewsHeader savedCount={savedArticles.length} />
      {savedArticles.length > 0 && (
        <NewsCardList
          cards={savedArticles}
          totalArticles={savedArticles.length}
          displayedCount={savedArticles.length}
          onShowMore={() => {}}
          savedArticles={savedArticles}
          onSave={onSave}
          title="Artigos salvos"
        />
      )}
    </main>
  );
}

export default SavedNews;
