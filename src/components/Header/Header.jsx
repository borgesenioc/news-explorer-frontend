import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ theme }) {
  return (
    <header className={`header header_theme_${theme}`}>
      <div className="header__container">
        <p className="header__logo">NewsExplorer</p>
        <Navigation theme={theme} />
      </div>
    </header>
  );
}

export default Header;
