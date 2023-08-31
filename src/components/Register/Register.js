import './Register.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/useForm';

import logo from '../../images/logo.svg';

function Register() {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  // function handleSubmit(evt) {
  //   evt.preventDefault();
  // }

  return (
    <section className="register">
      <div className="register__container">
        <Link to="/" className="register__link-main">
          <img src={logo} alt="на главную страницу" className="register__image" />
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form
          className="register__form"
          name="registerForm"
        >
          <label htmlFor="register-input-name" className="register__form-label">Имя</label>
          <input
            type="text"
            name="name"
            className="register__form-input register__text register__text_input_name"
            id="register-input-name"
            placeholder="Имя"
            minLength="2"
            maxLength="32"
            value={values.name || ""}
            onChange={handleChange}
            required
          />
          <span className="register__form-error" id="register-input-name-error">
            {errors.name || ""}
          </span>
          <label htmlFor="register-input-email" className="register__form-label">E-mail</label>
          <input
            type="email"
            name="email"
            className="register__form-input register__text register__text_input_email"
            id="register-input-email"
            placeholder="E-mail"
            value={values.email || ""}
            onChange={handleChange}
            required
          />
          <span className="register__form-error" id="register-input-email-error">
            {errors.email}
          </span>
          <label htmlFor="register-input-password" className="register__form-label">Пароль</label>
          <input
            type="password"
            name="password"
            className={`register__form-input register__text register__text_input_password ${errors.password ? 'register__form-input_type_error' : ''}`}
            id="register-input-password"
            placeholder="Пароль"
            minLength="6"
            value={values.password || ""}
            onChange={handleChange}
            required
          />
          <span className="register__form-error" id="register-input-password-error">
            {errors.password || ""}
          </span>
          <button
            type="submit"
            className={`register__submit-button ${!isValid ? 'register__submit-button_type_inactive' : ''}`}
            disabled={!isValid}
          >
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