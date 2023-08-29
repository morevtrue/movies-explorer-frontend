import React from "react";
import { Link } from "react-router-dom";
import './AboutMe.css';
import imageMe from '../../images/image-me.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <ul className="about-me__overview">
        <li className="about-me__overview-row">
          <img src={imageMe} alt="моя личная фотография" className="about-me__overview-image" />
        </li>
        <li>
          <h3 className="about-me__overview-title">Вячеслав</h3>
        </li>
        <li>
          <p className="about-me__overview-subtitle">Фронтенд-разработчик, 27 лет</p>
        </li>
        <li>
          <p className="about-me__overview-paragraph">Я родился в Якутске, живу в Нижнем Новгороде, учился на радиофаке ННГУ. У меня есть жена. Я люблю слушать музыку, а ещё увлекаюсь пением, игрой на гитаре и компьютерными играми.</p>
        </li>
        <Link to="https://github.com/morevtrue" className="about-me__github-link" target="_blank">Github</Link>
      </ul>
    </section>
  )
}

export default AboutMe;