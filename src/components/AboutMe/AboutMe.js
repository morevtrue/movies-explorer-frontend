import React from "react";
import { Link } from "react-router-dom";
import './AboutMe.css';
import imageMe from '../../images/image-me.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__content">
        <div className="about-me__overview">
          <h3 className="about-me__overview-title">Вячеслав</h3>
          <p className="about-me__overview-subtitle">Фронтенд-разработчик, 27 лет</p>
          <p className="about-me__overview-paragraph">Я родился в Якутске, живу в Нижнем Новгороде, учился на радиофаке ННГУ. У меня есть жена. Я люблю слушать музыку, а ещё увлекаюсь пением, игрой на гитаре и компьютерными играми.</p>
          <Link to="https://github.com/morevtrue" className="about-me__github-link" target="_blank">Github</Link>
        </div>
        <img src={imageMe} alt="моя личная фотография" className="about-me__image" />
      </div>
    </section>
  )
}

export default AboutMe;