import React from "react";
import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <ul className="movies-card-list">
      {props.children}
    </ul>
  )
}

export default MoviesCardList;