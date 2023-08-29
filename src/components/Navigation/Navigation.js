import React from "react";
import './Navigation.css';
import { Link } from "react-router-dom";

function Navigation(props) {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);

  function closeMenu() {
    setIsOpenMenu(false);
  }

  function openMenu() {
    setIsOpenMenu(true);
  }

  return (
    <div className={`navigation ${isOpenMenu ? 'navigation_type_overlay' : ''}`}>
      <button onClick={openMenu} className="navigation__menu-button"></button>
      <div className={`navigation__menu ${isOpenMenu ? 'navigation__menu_type_burger-menu' : ''}`}>
        <button onClick={closeMenu} className={`navigation__menu-close-button ${isOpenMenu ? 'navigation__menu-close-button_type_burger-menu' : ''} `}></button>
        <ul className="navigation__menu-links">
          <li className="navigation__menu-link-row navigation__menu-link-row_type_burger-menu">
            <Link to="/" className={`navigation__menu-link ${props.isPageMain ? 'navigation__menu-link_type_underline' : ''} navigation__menu-link_type_burger-menu`}>Главная</Link>
          </li>
          <li className="navigation__menu-link-row">
            <Link to="/movies" className={`navigation__menu-link ${props.isPageMovie ? 'navigation__menu-link_type_underline' : ''} navigation__menu-link_type_burger-menu`}>Фильмы</Link>
          </li>
          <li className="navigation__menu-link-row">
            <Link to="/saved-movies" className={`navigation__menu-link ${props.isPageSave ? 'navigation__menu-link_type_underline' : ''} navigation__menu-link_type_burger-menu`}>Сохранённые фильмы</Link>
          </li>
        </ul>
        <Link to="/profile" className="navigation__profile-button">
          <p className="navigation__profile-link-text">Аккаунт</p>
          <span className={
            `navigation__profile-logo
          ${props.isOpen ? 'navigation__profile-logo_theme-mainpage' : ''} `
          }></span>
        </Link>
        {/* <div className="navigation__profile-content">
        <Link to="/profile" className="navigation__profile-button">Аккаунт</Link>
        <div className="navigation__profile-icon-background">
          <img src={logoProfile} alt="логоттип профиля" className="navigation__logo-profile" />
        </div>
      </div> */}
      </div>
    </div>
  )
}

export default Navigation;