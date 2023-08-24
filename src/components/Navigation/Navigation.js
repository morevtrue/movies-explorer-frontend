import React from "react";
import './Navigation.css';
import logoProfile from '../../images/logo-profile.svg';
import { Link } from "react-router-dom";

function Navigation() {
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
      <div className="navigation__profile-content">
        <a href="#" className="navigation__profile-button">Аккаунт</a>
        <div className="navigation__profile-icon-background">
          <img src={logoProfile} alt="логоттип профиля" className="navigation__logo-profile" />
        </div>
      </div>
    </div>
  )
}

export default Navigation;