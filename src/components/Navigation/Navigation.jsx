import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ theme }) {
  return (
    <nav className={`navigation navigation_theme_${theme}`}>
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink exact to="/" className={`navigation__link navigation__link_theme_${theme}`} activeClassName="navigation__link_active">
            Início
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/saved-news" className={`navigation__link navigation__link_theme_${theme}`} activeClassName="navigation__link_active">
            Artigos salvos
          </NavLink>
        </li>
      </ul>

    </nav>
  );
}

export default Navigation;
