import React from "react";
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__search-place-form" name="search-form">
        <input
          type="text"
          name="searchFormInput"
          className="search-form__input"
          id="search-form-input"
          placeholder="Фильм"
        />
        <button type="submit" className="search-form__button">Поиск</button>
      </form>
      <FilterCheckbox />
    </section>
  )
}

export default SearchForm;