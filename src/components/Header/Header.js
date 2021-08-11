import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBookmark } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/logo.09084f39.png";

import "./Header.scss";

const Header = ({ term, setTerm, setQuery }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    setQuery(term);
  };

  return (
    <header className="header">
      <img className="header__image" src={logo} alt="food2fork"></img>
      <form className="header__form" onSubmit={submitHandler}>
        <input
          className="header__input"
          type="text"
          placeholder="Search for your favourite recipes"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        ></input>

        <div className="header__button">
          <FontAwesomeIcon
            icon={faSearch}
            size="2x"
            className="header__search"
          />
          <button type="submit">Search</button>
        </div>
      </form>

      <div className="header__bookmarks">
        <FontAwesomeIcon
          icon={faBookmark}
          size="2x"
          className="header__bookmarks-icon"
        />
        <h4>Bookmarks</h4>
      </div>
    </header>
  );
};

export default Header;
