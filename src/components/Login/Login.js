import React from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../Authorization/Auth";

function Login() {
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    navigate('/movies');
  }

  return (
    <>
      <Auth
        onSubmit={handleSubmit}
        isLogin={true}
        buttonText="Войти"
        text="Ещё не зарегистрированы?"
        linkText="Регистрация"
        title="Рады видеть!"
        link="/sign-up"
        nameRequired={false}
      />
    </>
  )
}

export default Login;