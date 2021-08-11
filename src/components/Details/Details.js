import React from "react";

import {
  faBookmark,
  faCheck,
  faClock,
  faMinus,
  faPlus,
  faTicketAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Details.scss";

const Details = ({ recipe }) => {
  return (
    <>
      <div className="details">
        <div className="details__fig">
          <img
            src={recipe.image_url}
            alt="food"
            className="details__image"
          ></img>

          <h1 className="details__heading">
            <span>{recipe.title}</span>
          </h1>
        </div>

        <div className="details__container">
          {/* <div className="details__info">
            <FontAwesomeIcon
              icon={faClock}
              size="2x"
              className="details__logo"
            />
            <span>{recipe.cooking_time}</span>
            <span>Minutes</span>
          </div> */}

          <div className="details__info">
            <FontAwesomeIcon
              icon={faUser}
              size="2x"
              className="details__logo"
            />
            <span>{recipe.servings}</span>
            <span>servings</span>
            <FontAwesomeIcon
              icon={faMinus}
              size="2x"
              className="details__logo"
            />
            <FontAwesomeIcon
              icon={faPlus}
              size="2x"
              className="details__logo"
            />
          </div>

          <button className="details__bookmark">
            <FontAwesomeIcon
              icon={faBookmark}
              size="2x"
              className="details__logo"
            />
          </button>
        </div>

        <div className="recipe">
          <h1>
            <span>recipe ingredients</span>
          </h1>
          <ul className="recipe__ingredient-list">
            {recipe?.ingredients?.map((ing) => (
              <li className="recipe__ingredient">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="2x"
                  className="recipe__icon"
                />
                <span className="recipe__quantity">{ing.quantity}</span>
                <div className="recipe__description">{ing.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Details;
