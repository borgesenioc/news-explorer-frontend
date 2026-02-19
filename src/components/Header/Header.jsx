import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ theme = 'dark' }) {
  return (
    <header className={`header header_theme_${theme}`}>
      <div className="header__container">
        <Link className="header__logo" to="/">NewsExplorer</Link>
        <Navigation theme={theme} />
      </div>
    </header>
  );
}

export default Header;
