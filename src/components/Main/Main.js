import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import Header from '../Header/Header';
import AboutProjects from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import imageMain from '../../images/logo-mainpage.svg'

function Main(props) {
  const [isOpenMainPage, setIsOpenMainPage] = React.useState(true);
  return (
    <>
      <Header loggedIn={props.loggedIn} isOpen={true}>
        <div className="header__main-content">
          <img src={imageMain} alt="картинка с изображением планеты" className="header__image-main" />
          <h1 className="header__title-main">Учебный проект студента факультета</h1>
          <h2 className="header__title-main">Веб-разработки.</h2>
          <p className="header__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <a href="#about-projects" className="header__button-know">Узнать больше</a>
        </div>
      </Header>
      <AboutProjects id="about-projects" />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  )
}

export default Main;