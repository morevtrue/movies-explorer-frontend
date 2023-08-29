import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ShowMore from '../ShowMore/ShowMore';
import Footer from '../Footer/Footer';
import MoviesCard from '../MoviesCard/MoviesCard';
import imageOne from '../../images/grid-image-1.jpg';
import imageTwo from '../../images/grid-image-2.jpg';
import imageThree from '../../images/grid-image-3.jpg';

function SavedMovies(props) {
  return (
    <>
      <Header loggedIn={props.loggedIn} isPageSave={true} />
      <section className="saved-movies">
        <SearchForm />
        <MoviesCardList>
          <MoviesCard image={imageOne} isSave={true} />
          <MoviesCard image={imageTwo} isSave={true} />
          <MoviesCard image={imageThree} isSave={true} />
        </MoviesCardList>
      </section>
      <Footer />
    </>
  )
}

export default SavedMovies;