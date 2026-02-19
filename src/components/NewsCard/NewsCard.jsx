import './NewsCard.css';

function NewsCard({ card }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  return (
    <article className="card">
      <a
        className="card__link"
        href={card.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="card__image"
          src={card.urlToImage || '/placeholder.png'}
          alt={card.title}
        />
        <div className="card__content">
          <p className="card__date">{formatDate(card.publishedAt)}</p>
          <h2 className="card__title">{card.title}</h2>
          <p className="card__text">{card.description}</p>
          <p className="card__source">{card.source.name}</p>
        </div>
      </a>
      <button className="card__save" type="button" title="Faca o login para salvar os artigos">
        <span className="card__save-icon" />
      </button>
    </article>
  );
}

export default NewsCard;
