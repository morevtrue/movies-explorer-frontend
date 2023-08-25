import './Register.css';
import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <Link to="/" className="register__link-main">
          <img src={logo} alt="на главную страницу" className="register__image" />
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form" name="registerForm">
          <label htmlFor="register-input-name" className="register__form-label">Имя</label>

          <input
            type="text"
            name="registerInputName"
            className="register__form-input register__text register__text_input_name"
            id="register-input-name"
            placeholder="Имя"
            minLength="2"
            maxLength="32"
            required
          />
          <label htmlFor="register-input-email" className="register__form-label">E-mail</label>
          <input
            type="email"
            name="registerInputEmail"
            className="register__form-input register__text register__text_input_email"
            id="register-input-email"
            placeholder="E-mail"
            required
          />
          <label htmlFor="register-input-password" className="register__form-label">Пароль</label>
          <input
            type="password"
            name="registerInputPassword"
            className="register__form-input register__text register__text_input_password"
            id="register-input-password"
            placeholder="Пароль"
            required
          />
          <button type="submit" className="register__submit-button">
            Зарегистрироваться
          </button>
        </form>
        <div className="register__place-login">
          <h3 className="register__title-login">Уже зарегистрированы?</h3>
          <Link to="/sign-in" className="register__link-login">
            Войти
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Register;