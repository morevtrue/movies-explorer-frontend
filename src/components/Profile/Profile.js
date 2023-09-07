import React from 'react';
import './Profile.css';
import { useNavigate } from "react-router-dom";

import Header from '../Header/Header';

function Profile(props) {
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [valueName, setValueName] = React.useState('Вячеслав');
  const [valueEmail, setValueEmail] = React.useState('pochta@yandex.ru');
  const [titleForm, setTitleForm] = React.useState('Вячеслав');
  const [isError, setIsError] = React.useState(false);

  const navigate = useNavigate();

  function switchDisabled() {
    setIsDisabled(true);
    // if (isDisabled) {
    //   setIsDisabled(false);
    // } else {
    //   setIsDisabled(true);
    // }
  }

  function handleChangeName(evt) {
    setValueName(evt.target.value);
  }

  function handleChangeEmail(evt) {
    setValueEmail(evt.target.value);
  }

  function handleSubmitForm(evt) {
    evt.preventDefault();
    setTitleForm(valueName);
  }

  function signOut() {
    navigate('/');
  }

  return (
    <>
      <main className="profile">
        <Header loggedIn={props.loggedIn} />
        <form className="profile__form" name="profileForm" onSubmit={handleSubmitForm}>
          <h1 className="profile__form-title">Привет, {titleForm}!</h1>
          <ul className="profile__form-rows">
            <li className="profile__form-row">
              <label htmlFor="profile-input-name" className="profile__form-label">Имя</label>
              <input
                type="text"
                name="profileInputName"
                className={`profile__form-input ${isDisabled ? 'profile__form-input_type_active' : ''}`}
                id="profile-input-name"
                value={valueName}
                onChange={handleChangeName}
                minLength="2"
                maxLength="32"
                placeholder="Ваше имя..."
                readOnly={!isDisabled}
                required
              />
            </li>
            <li className="profile__form-row">
              <label htmlFor="profile-input-email" className="profile__form-label">E-mail</label>
              <input
                type="email"
                name="profileInputEmail"
                className={`profile__form-input ${isDisabled ? 'profile__form-input_type_active' : ''}`}
                id="profile-input-email"
                value={valueEmail}
                onChange={handleChangeEmail}
                placeholder="Ваш e-mail..."
                readOnly={!isDisabled}
                required
              />
            </li>
          </ul>
          <ul className="profile__form-buttons">
            <button
              className={`profile__edit-button ${isDisabled ? 'profile__edit-button_type_inactive' : ''}`}
              onClick={switchDisabled}>
              Редактировать
            </button>
            <button
              className={`profile__escape-button ${isDisabled ? 'profile__escape-button_type_inactive' : ''}`}
              onClick={signOut}>
              Выйти из аккаунта
            </button>
            <span className={`profile__error-text ${isError ? 'profile__error-text_type_active' : ''}`}>При обновлении профиля произошла ошибка.</span>
            <button
              type="submit"
              className={
                `profile__submit-button 
                ${!isDisabled ? 'profile__submit-button_type_active' : ''}
                ${isError ? 'profile__submit-button_type_error' : ''}`
              }
              onClick={switchDisabled}
            >
              Сохранить
            </button>
          </ul>
        </form>

      </main>
    </>
  )
}

export default Profile;