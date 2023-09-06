import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ShowMore from '../ShowMore/ShowMore';
import Footer from '../Footer/Footer';
import MoviesCard from '../MoviesCard/MoviesCard';
import imageOne from '../../images/grid-image-1.jpg';
import imageTwo from '../../images/grid-image-2.jpg';
import imageThree from '../../images/grid-image-3.jpg';

function Movies(props) {
  return (
    <>
      <Header loggedIn={props.loggedIn} isPageMovie={true} />
      <main className="movies">
        <SearchForm />
        <MoviesCardList>
          <MoviesCard image={imageOne} />
          <MoviesCard image={imageTwo} />
          <MoviesCard image={imageThree} />
          <MoviesCard image={imageOne} />
          <MoviesCard image={imageTwo} />
          <MoviesCard image={imageThree} />
          <MoviesCard image={imageOne} />
          <MoviesCard image={imageTwo} />
          <MoviesCard image={imageThree} />
          <MoviesCard image={imageOne} />
          <MoviesCard image={imageTwo} />
          <MoviesCard image={imageThree} />
        </MoviesCardList>
        <ShowMore />
      </main>
      <Footer />
    </>
  )
}

export default Movies;