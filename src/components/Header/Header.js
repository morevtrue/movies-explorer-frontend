import React from "react";
import './Header.css';
import logo from '../../images/logo.svg';
import logoProfile from '../../images/logo-profile.svg';
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className={`header ${props.isOpen ? `header__type_page_main` : ``}`}>
      <div className="header__content">
        <Link to="/" className="header__link">
          <img src={logo} alt="логотип сайта" className="header__logo" />
        </Link>
        {
          props.loggedIn ? <div className="header__menu">
            <ul className="header__menu-links">
              <li>
                <Link to="/movies" className="header__menu-link">Фильмы</Link>
              </li>
              <li>
                <a href="#" className="header__menu-link">Сохранённые фильмы</a>
              </li>
            </ul>
            <div className="header__profile-content">
              <a href="#" className="header__profile-button">Аккаунт</a>
              <div className="header__profile-icon-background">
                <img src={logoProfile} alt="логоттип профиля" className="header__logo-profile" />
              </div>
            </div>
          </div>
            : <div className="header__auth-links">
              <a href="#" className="header__register-link">Регистрация</a>
              <a href="#" className="header__login-link">Войти</a>
            </div>
        }
      </div>
      {props.children}
    </header>
  )
}

export default Header;