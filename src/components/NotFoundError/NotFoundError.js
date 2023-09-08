import React from "react";
import './NotFoundError.css';
import { Link } from "react-router-dom";

function NotFoundError() {
  return (
    <main className="not-found-error">
      <div className="not-found-error__content">
        <h1 className="not-found-error__title">404</h1>
        <p className="not-found-error__text">Страница не найдена</p>
      </div>
      <Link to="/" className="not-found-error__link">Назад</Link>
    </main>
  )
}

export default NotFoundError;