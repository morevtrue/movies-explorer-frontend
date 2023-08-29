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
          <img src={logo} alt="на главную страницу" className="header__logo" />
        </Link>
        {
          props.loggedIn
            ? <Navigation isOpen={props.isOpen} isPageMain={props.isPageMain} isPageMovie={props.isPageMovie} isPageSave={props.isPageSave} />
            : <div className="header__auth-links">
              <Link to="/sign-up" className="header__register-link">Регистрация</Link>
              <Link to="/sign-in" className="header__login-link">Войти</Link>
            </div>
        }
      </div>
      {props.children}
    </header>
  )
}

export default Header;