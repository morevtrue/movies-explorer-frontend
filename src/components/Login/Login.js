import './Login.css';
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <Link to="/" className="login__link-main">
          <img src={logo} alt="на главную страницу" className="login__image" />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" name="loginForm">
          <label htmlFor="login-input-email" className="login__form-label">E-mail</label>
          <input
            type="email"
            name="loginInputEmail"
            className="login__form-input login__text login__text_input_email"
            id="login-input-email"
            placeholder="E-mail"
            required
          />
          <label htmlFor="login-input-password" className="login__form-label">Пароль</label>
          <input
            type="password"
            name="loginInputPassword"
            className="login__form-input login__text login__text_input_password"
            id="login-input-password"
            placeholder="Пароль"
            required
          />
          <button type="submit" className="login__submit-button">
            Войти
          </button>
        </form>
        <div className="login__place-login">
          <h3 className="login__title-login">Ещё не зарегистрированы?</h3>
          <Link to="/sign-up" className="login__link-login">
            Регистрация
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;