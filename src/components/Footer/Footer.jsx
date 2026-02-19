import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          &copy; 2024 NewsExplorer, desenvolvido por Enio Borges
        </p>
        <ul className="footer__links">
          <li className="footer__item">
            <Link to="/" className="footer__link">Inicio</Link>
          </li>
          <li className="footer__item">
            <a
              href="https://tripleten.com"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              TripleTen
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
