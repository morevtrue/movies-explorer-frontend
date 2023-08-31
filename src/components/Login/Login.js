import './Login.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/useForm';

import logo from '../../images/logo.svg';

function Login() {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

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
            name="email"
            className="login__form-input login__text login__text_input_email"
            id="login-input-email"
            placeholder="E-mail"
            value={values.email || ""}
            onChange={handleChange}
            required
          />
          <span className="login__form-error" id="register-input-name-error">
            {errors.email || ""}
          </span>
          <label htmlFor="login-input-password" className="login__form-label">Пароль</label>
          <input
            type="password"
            name="password"
            className="login__form-input login__text login__text_input_password"
            id="login-input-password"
            minLength="6"
            placeholder="Пароль"
            value={values.password || ""}
            onChange={handleChange}
            required
          />
          <span className="login__form-error" id="register-input-name-error">
            {errors.password || ""}
          </span>
          <button
            type="submit"
            className={`login__submit-button ${!isValid ? 'login__submit-button_type_inactive' : ''}`}
            disabled={!isValid}
          >
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