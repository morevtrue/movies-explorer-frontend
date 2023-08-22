import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import AboutProjects from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main(props) {
  const [isOpenMainPage, setIsOpenMainPage] = React.useState(true);
  return (
    <>
      <Header loggedIn={props.loggedIn} isOpen={isOpenMainPage} />
      <AboutProjects />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </>
  )
}

export default Main;