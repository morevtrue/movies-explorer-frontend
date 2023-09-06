import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Auth from "../Authorization/Auth";
// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFoundError from "../NotFoundError/NotFoundError";

function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/sign-up"
          element={
            <Auth
              isLogin={false}
              buttonText="Зарегистрироваться"
              text="Уже зарегистрированы?"
              linkText="Войти"
              title="Добро пожаловать!"
              link="/sign-in"
            />
          }
        />
        <Route
          path="/sign-in"
          element={
            <Auth
              isLogin={true}
              buttonText="Войти"
              text="Ещё не зарегистрированы?"
              linkText="Регистрация"
              title="Рады видеть!"
              link="/sign-up"
            />
          }
        />
        <Route
          path="/"
          element={
            <Main
              loggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="/movies"
          element={
            <Movies
              loggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="/saved-movies"
          element={
            <SavedMovies
              loggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              loggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="*"
          element={
            isLoggedIn
              ? <Navigate to="/" replace />
              : <Navigate to="/sign-in" replace />
          }
        />
        <Route
          path="/404"
          element={
            <NotFoundError />
          }
        />
      </Routes>

    </div>
  );
}

export default App;
