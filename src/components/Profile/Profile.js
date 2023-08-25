import React from 'react';
import './Profile.css';

import Header from '../Header/Header';

function Profile(props) {
  return (<>
    <Header loggedIn={props.loggedIn} />
    <section className="profile">
      <h1 className="profile__title">Привет, Вячеслав!</h1>
      <form className="profile__form" name="profileForm">
        <ul className="profile__form-rows">
          <li className="profile__form-row">
            <label htmlFor="profile-input-name" className="profile__form-label">Имя</label>
            <input
              type="text"
              name="profileInputName"
              className="profile__form-input profile__text profile__text_input_name"
              id="profile-input-name"
              value="Вячеслав"
              minLength="2"
              maxLength="32"
              required
            />
          </li>
          <li className="profile__form-row">
            <label htmlFor="profile-input-email" className="profile__form-label">E-mail</label>
            <input
              type="email"
              name="profileInputEmail"
              className="profile__form-input profile__text profile__text_input_email"
              id="profile-input-email"
              value="pochta@yandex.ru"
              required
            />
          </li>
        </ul>
        <button type="submit" className="profile__submit-button">
          Редактировать
        </button>
        <button type="submit" className="profile__escape-button">
          Выйти из аккаунта
        </button>
      </form>
    </section>
  </>
  )
}

export default Profile;