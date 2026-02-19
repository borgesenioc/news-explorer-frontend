import './SavedNewsHeader.css';

function SavedNewsHeader({ savedCount }) {
  return (
    <div className="saved-news-header">
      <div className="saved-news-header__container">
        <p className="saved-news-header__label">Artigos salvos</p>
        <h2 className="saved-news-header__title">
          {savedCount === 0
            ? 'Nenhum artigo salvo ainda'
            : `${savedCount} ${savedCount === 1 ? 'artigo salvo' : 'artigos salvos'}`}
        </h2>
      </div>
    </div>
  );
}

export default SavedNewsHeader;
