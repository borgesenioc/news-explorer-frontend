import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList({ cards, totalArticles, displayedCount, onShowMore }) {
  return (
    <section className="cards">
      <div className="cards__container">
        <h2 className="cards__title">Resultados da busca</h2>
        <ul className="cards__list">
          {cards.map((card, index) => (
            <li key={card.url || index} className="cards__item">
              <NewsCard card={card} />
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
