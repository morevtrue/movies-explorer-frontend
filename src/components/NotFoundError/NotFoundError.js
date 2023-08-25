import React from "react";
import './NotFoundError.css';
import { Link } from "react-router-dom";

function NotFoundError() {
  return (
    <section className="not-found-error">
      <h1 className="not-found-error__title">404</h1>
      <p className="not-found-error__text">Страница не найдена</p>
      <Link to="/" className="not-found-error__link">Назад</Link>
    </section>
  )
}

export default NotFoundError;