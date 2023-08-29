import React from "react";
import './Promo.css';
import imagePromo from '../../images/logo-mainpage.svg'

function Promo() {
  return (
    <section className="promo">
      <img src={imagePromo} alt="картинка с изображением планеты" className="promo__image" />
      <h1 className="promo__title">Учебный проект студента факультета <span className="promo_web">Веб-разработки.</span></h1>
      <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <a href="#about-projects" className="promo__button-know">Узнать больше</a>
    </section>
  )
}

export default Promo;