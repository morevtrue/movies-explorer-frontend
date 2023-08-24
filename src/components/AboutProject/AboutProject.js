import React from "react";
import './AboutProject.css';

function AboutProjects(props) {
  return (
    <section className="about-projects" id={props.id}>
      <h2 className="about-projects__title">О проекте</h2>
      <div className="about-projects__overview">
        <ul className="about-projects__column">
          <li>
            <h3 className="about-projects__subtitle">Дипломный проект включал 5 этапов</h3>
          </li>
          <li>
            <p className="about-projects__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
        </ul>
        <ul className="about-projects__column">
          <li>
            <h3 className="about-projects__subtitle">На выполнение диплома ушло 5 недель</h3>
          </li>
          <li>
            <p className="about-projects__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
      </div>
      <ul className="about-projects__duration-row">
        <li className="about-projects__column-one">
          <p className="about-projects__duration-text-backend">1 неделя</p>
        </li>
        <li className="about-projects__column-two">
          <p className="about-projects__duration-text-frontend">4 недели</p>
        </li>
      </ul>
      <ul className="about-projects__duration-row">
        <li className="about-projects__column-one">
          <p className="about-projects__duration-text-backend about-projects__duration-text-backend_type_row-two">Back-end</p>
        </li>
        <li className="about-projects__column-two">
          <p className="about-projects__duration-text-frontend about-projects__duration-text-backend_type_row-two">Front-end</p>
        </li>
      </ul>
    </section>
  )
}

export default AboutProjects;