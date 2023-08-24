import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox() {
  const [isCheckedCheckbox, setIsCheckedCheckbox] = React.useState(false);
  function clickActiveCheckbox() {
    if (isCheckedCheckbox) {
      setIsCheckedCheckbox(false);
    } else {
      setIsCheckedCheckbox(true);
    }
  }

  return (
    <label htmlFor="checkbox" className="filter-check-box">
      <input
        type="checkbox"
        className="filter-check-box__input"
        id="checkbox"
        onClick={clickActiveCheckbox}
      />
      <span className={`filter-check-box__text ${isCheckedCheckbox ? 'filter-check-box__text_type_active' : ''}`}>Короткометражки</span>
    </label>
  )
}

export default FilterCheckbox;