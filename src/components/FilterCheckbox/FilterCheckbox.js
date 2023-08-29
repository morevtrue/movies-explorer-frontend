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
    <form className="filter">
      <label htmlFor="checkbox" className="filter__check-box">
        <input
          type="checkbox"
          className="filter__check-box-input"
          id="checkbox"
          onClick={clickActiveCheckbox}
        />
        <span className={`filter__check-box-text ${isCheckedCheckbox ? 'filter__check-box-text_type_active' : ''}`}>Короткометражки</span>
      </label>
    </form>
  )
}

export default FilterCheckbox;