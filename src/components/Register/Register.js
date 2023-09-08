import React from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../Authorization/Auth";

function Register(props) {
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    navigate('/sign-in');
  }

  return (
    <>
      <Auth
        onSubmit={handleSubmit}
        isLogin={false}
        buttonText="Зарегистрироваться"
        text="Уже зарегистрированы?"
        linkText="Войти"
        title="Добро пожаловать!"
        link="/sign-in"
        nameRequired={true}
      />
    </>
  )
}

export default Register;