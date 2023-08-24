import React from 'react';
import './Movies.css';
import Header from '../Header/Header';

function Movies(props) {
  return (
    <Header loggedIn={props.loggedIn} />
  )
}

export default Movies;