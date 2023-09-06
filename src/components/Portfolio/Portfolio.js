import React from "react";
import { Link } from "react-router-dom";
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <Link to="https://github.com/morevtrue/how-to-learn" className="portfolio__link" target="_blank">
            <h3 className="portfolio__list-title">Статичный сайт</h3>
          </Link>
        </li>
        <li className="portfolio__list-item">
          <Link to="https://github.com/morevtrue/russian-travel" className="portfolio__link" target="_blank">
            <h3 className="portfolio__list-title">Адаптивный сайт</h3>
          </Link>
        </li>
        <li className="portfolio__list-item">
          <Link to="https://github.com/morevtrue/express-mesto-gha" className="portfolio__link" target="_blank">
            <h3 className="portfolio__list-title">Одностраничное приложение</h3>
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;