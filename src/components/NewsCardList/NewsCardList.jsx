import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList({ cards, totalArticles, displayedCount, onShowMore, savedArticles = [], onSave, title = 'Resultados da busca' }) {
  return (
    <section className="cards">
      <div className="cards__container">
        <h2 className="cards__title">{title}</h2>
        <ul className="cards__list">
          {cards.map((card, index) => (
            <li key={card.url || index} className="cards__item">
              <NewsCard
                card={card}
                isSaved={savedArticles.some((a) => a.url === card.url)}
                onSave={onSave}
              />
            </li>
          ))}
        </ul>
        {displayedCount < totalArticles && (
          <button className="cards__button" type="button" onClick={onShowMore}>
            Mostrar mais
          </button>
        )}
      </div>
    </section>
  );
}

export default NewsCardList;
