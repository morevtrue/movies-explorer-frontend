import React from 'react';
import './Profile.css';

import Header from '../Header/Header';

function Profile(props) {
  const [isDisabled, setIsDisabled] = React.useState(false);

  function switchDisabled() {
    if (isDisabled) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    console.log('click')
  }

  return (
    <>
      <main className="profile">
        <Header loggedIn={props.loggedIn} />
        <form className="profile__form" name="profileForm">
          <h1 className="profile__form-title">Привет, Вячеслав!</h1>
          <ul className="profile__form-rows">
            <li className="profile__form-row">
              <label htmlFor="profile-input-name" className="profile__form-label">Имя</label>
              <input
                type="text"
                name="profileInputName"
                className="profile__form-input profile__text profile__text_input_name"
                id="profile-input-name"
                // value=""
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
                className="profile__form-input profile__text profile__text_input_email"
                id="profile-input-email"
                // value="pochta@yandex.ru"
                placeholder="Ваш e-mail..."
                readOnly={!isDisabled}
                required
              />
            </li>
          </ul>
        </form>
        <ul className="profile__form-buttons">
          <button type="submit" className={`profile__edit-button ${isDisabled ? 'profile__edit-button_type_inactive' : ''}`} onClick={switchDisabled}>
            Редактировать
          </button>
          <button type="submit" className={`profile__escape-button ${isDisabled ? 'profile__escape-button_type_inactive' : ''}`}>
            Выйти из аккаунта
          </button>
          <button type="submit" className={`profile__submit-button ${!isDisabled ? 'profile__submit-button_type_active' : ''}`} onClick={switchDisabled}>Сохранить</button>
        </ul>
      </main>
    </>
  )
}

export default Profile;