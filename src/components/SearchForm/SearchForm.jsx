import './SearchForm.css';

function SearchForm({ onSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    const keyword = e.target.keyword.value.trim();
    if (!keyword) return;
    onSearch(keyword);
  }

  return (
    <section className="search-form">
      <div className="search-form__container">
        <h1 className="search-form__title">O que esta acontecendo no mundo?</h1>
        <p className="search-form__subtitle">
          Encontre as ultimas noticias sobre qualquer tema e salve-as na sua conta pessoal.
        </p>
        <form className="search-form__form" onSubmit={handleSubmit} noValidate>
          <input
            className="search-form__input"
            type="text"
            name="keyword"
            placeholder="Digite um tema"
          />
          <button className="search-form__button" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
