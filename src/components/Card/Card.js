import React from "react";

import "./Card.scss";

const Card = ({ r, setSingleRecipe }) => {
  const clickHandler = () => {
    setSingleRecipe(r.recipe_id);
  };

  return (
    <div className="card" onClick={clickHandler}>
      <img src={r.image_url} alt="food" className="card__image"></img>
      <div className="card__details">
        <h3>{r.title}</h3>
        <h4>{r.publisher}</h4>
      </div>
    </div>
  );
};

export default Card;
