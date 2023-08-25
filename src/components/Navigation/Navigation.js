import React from "react";
import './Navigation.css';
import logoProfile from '../../images/logo-profile.svg';
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation__menu">
      <ul className="navigation__menu-links">
        <li>
          <Link to="/movies" className="navigation__menu-link">Фильмы</Link>
        </li>
        <li>
          <Link to="/saved-movies" className="navigation__menu-link">Сохранённые фильмы</Link>
        </li>
      </ul>
      <Link to="/profile" className="navigation__profile-button">
        <p className="navigation__profile-link-text">Аккаунт</p>
        <span className={
          `navigation__profile-logo
          ${props.isOpen ? 'navigation__profile-logo_theme-mainpage' : ''}`
        }></span>
      </Link>
      {/* <div className="navigation__profile-content">
        <Link to="/profile" className="navigation__profile-button">Аккаунт</Link>
        <div className="navigation__profile-icon-background">
          <img src={logoProfile} alt="логоттип профиля" className="navigation__logo-profile" />
        </div>
      </div> */}
    </div>
  )
}

export default Navigation;