import './Auth.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/useForm';

import logo from '../../images/logo.svg';

function Auth(props) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  // function handleSubmit(evt) {
  //   evt.preventDefault();
  // }

  return (
    <main className="auth">
      <form
        className="auth__form"
        name="authForm"
      >
        <Link to="/" className="auth__link-main">
          <img src={logo} alt="на главную страницу" className="auth__image" />
        </Link>
        <h1 className="auth__title">{props.title}</h1>
        <div className="auth__form-content">
          <label htmlFor="auth-input-name" className={`auth__form-label ${props.isLogin ? 'auth__form-label_type_inactive' : ''}`}>Имя</label>
          <input
            type="text"
            name="name"
            className={`auth__form-input auth__text auth__text_input_name ${props.isLogin ? 'auth__form-input_type_inactive' : ''}`}
            id="auth-input-name"
            placeholder="Имя"
            minLength="2"
            maxLength="32"
            value={values.name || ""}
            onChange={handleChange}
            required
          />
          <span className={`auth__form-error ${props.isLogin ? 'auth__form-error_type_inactive' : ''}`} id="auth-input-name-error">
            {errors.name || ""}
          </span>
          <label htmlFor="auth-input-email" className="auth__form-label">E-mail</label>
          <input
            type="email"
            name="email"
            className="auth__form-input auth__text auth__text_input_email"
            id="auth-input-email"
            placeholder="E-mail"
            value={values.email || ""}
            onChange={handleChange}
            required
          />
          <span className="auth__form-error" id="auth-input-email-error">
            {errors.email}
          </span>
          <label htmlFor="auth-input-password" className="auth__form-label">Пароль</label>
          <input
            type="password"
            name="password"
            className={`auth__form-input auth__text auth__text_input_password ${errors.password ? 'auth__form-input_type_error' : ''}`}
            id="auth-input-password"
            placeholder="Пароль"
            minLength="6"
            value={values.password || ""}
            onChange={handleChange}
            required
          />
          <span className="auth__form-error" id="auth-input-password-error">
            {errors.password || ""}
          </span>
        </div>
        <div className="auth__content-button">
          <button
            type="submit"
            className={`auth__submit-button ${!isValid ? 'auth__submit-button_type_inactive' : ''}`}
            disabled={!isValid}
          >
            {props.buttonText}
          </button>
          <div className="auth__place-login">
            <h3 className="auth__title-login">{props.text}</h3>
            <Link to={props.link} className="auth__link-login">
              {props.linkText}
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Auth;