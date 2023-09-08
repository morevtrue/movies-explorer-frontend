import React from "react";
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form" name="search-form">
        <input
          type="text"
          name="searchFormInput"
          className="search__form-input"
          id="search-form-input"
          placeholder="Фильм"
        />
        <button type="submit" className="search__form-button">Поиск</button>
      </form>
      <FilterCheckbox />
    </section>
  )
}

export default SearchForm;