import React from "react";
import './AboutProject.css';

function AboutProject(props) {
  return (
    <section className="about-project" id={props.id}>
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__overview">
        <ul className="about-project__column">
          <li>
            <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
          </li>
          <li>
            <p className="about-project__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
        </ul>
        <ul className="about-project__column">
          <li>
            <h3 className="about-project__subtitle about-project__subtitle_type_row-two">На выполнение диплома ушло 5 недель</h3>
          </li>
          <li>
            <p className="about-project__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
      </div>
      <ul className="about-project__duration-row-one">
        <li className="about-project__column-one">
          <p className="about-project__duration-text-backend">1 неделя</p>
        </li>
        <li className="about-project__column-two">
          <p className="about-project__duration-text-frontend">4 недели</p>
        </li>
      </ul>
      <ul className="about-project__duration-row-two">
        <li className="about-project__column-one">
          <p className="about-project__duration-text-backend about-project__duration-text-backend_type_row-two">Back-end</p>
        </li>
        <li className="about-project__column-two">
          <p className="about-project__duration-text-frontend about-project__duration-text-backend_type_row-two">Front-end</p>
        </li>
      </ul>
    </section>
  )
}

export default AboutProject;