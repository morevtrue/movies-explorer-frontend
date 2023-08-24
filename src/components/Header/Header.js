import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import Navigation from "../Navigation/Navigation";
import logo from '../../images/logo.svg';

function Header(props) {
  return (
    <header className={`header ${props.isOpen ? `header__type_page_main` : ``}`}>
      <div className="header__content">
        <Link to="/" className="header__link">
          <img src={logo} alt="логотип сайта" className="header__logo" />
        </Link>
        {
          props.loggedIn
            ? <Navigation />
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