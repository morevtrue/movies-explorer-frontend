import React from "react";
import './MoviesCard.css';

function MoviesCard(props) {
  const [isSaveMovie, setIsSaveMovie] = React.useState(false);

  function clickSaveButton() {
    if (isSaveMovie) {
      setIsSaveMovie(false);
    } else {
      setIsSaveMovie(true);
    }
  }

  return (
    <li className="movies-card">
      <ul className="movies-card__content">
        <li>
          <h2 className="movies-card__title">В погоне за Бенкси</h2>
        </li>
        <li>
          <p className="movies-card__duration">0ч 42м</p>
        </li>
      </ul>
      <img src={props.image} alt="обложка фильма" className="movies-card_image" />
      <button className={
        `movies-card__button-save 
        ${isSaveMovie ? 'movies-card__button-save_type_active'
          : ''}
        ${props.isSave ? 'movies-card__button-save_type_delete' : ''}`
      } onClick={clickSaveButton}>{
          isSaveMovie || props.isSave ? '' : 'Сохранить'
        }</button>
    </li>

  )
}

export default MoviesCard;