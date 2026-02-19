import './Preloader.css';

function Preloader() {
  return (
    <div className="preloader" role="status" aria-label="Buscando noticias...">
      <div className="preloader__circle" aria-hidden="true" />
      <p className="preloader__text" aria-hidden="true">Buscando noticias...</p>
    </div>
  );
}

export default Preloader;
