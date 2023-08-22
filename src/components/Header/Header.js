import React from "react";
import './Header.css';
import logo from '../../images/logo.svg';
import logoProfile from '../../images/logo-profile.svg';

function Header(props) {
  return (
    <header className={`header ${props.isOpen ? `header__type_page_main` : ``}`}>
      <div className="header__content">
        <img src={logo} alt="логотип сайта" className="header__logo" />
        {
          props.loggedIn ? <div className="header__menu">
            <ul className="header__menu-links">
              <li>
                <a href="#" className="header__menu-link">Фильмы</a>
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
    </header>
  )
}

export default Header;