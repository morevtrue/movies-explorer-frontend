import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main(props) {
  // const [isOpenMainPage, setIsOpenMainPage] = React.useState(true);
  return (
    <>
      <Header loggedIn={props.loggedIn} isOpen={true} isPageMain={true}>
        <Promo />
      </Header>
      <main className="main">
        <AboutProject id="about-projects" />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}

export default Main;