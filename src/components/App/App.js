import React from "react";
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import './App.css';

import Register from '../Register/Register';
import Login from "../Login/Login";
// import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";

function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  return (
    <div className="app">
      <Routes>
        <Route
          path="/sign-up"
          element={
            <Register />
          }
        />
        <Route
          path="/sign-in"
          element={
            <Login />
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
            <Profile />
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
      </Routes>
    </div>
  );
}

export default App;
