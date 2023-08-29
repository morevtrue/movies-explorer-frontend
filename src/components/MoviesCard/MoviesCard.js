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
    <li className="movies__card">
      <ul className="movies__card-content">
        <li>
          <h2 className="movies__card-title">В погоне за Бенкси</h2>
        </li>
        <li>
          <p className="movies__card-duration">0ч 42м</p>
        </li>
      </ul>
      <img src={props.image} alt="обложка фильма" className="movies__card-image" />
      <button className={
        `movies__card-button-save 
        ${isSaveMovie ? 'movies__card-button-save_type_active'
          : ''}
        ${props.isSave ? 'movies__card-button-save_type_delete' : ''}`
      } onClick={clickSaveButton}>{
          isSaveMovie || props.isSave ? '' : 'Сохранить'
        }</button>
    </li>

  )
}

export default MoviesCard;