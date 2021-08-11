import React from "react";

import "./List.scss";

const List = ({ recipes }) => {
  return (
    <div className="list">
      {recipes?.length &&
        recipes.map((r) => (
          <div className="card">
            <img src={r.image_url} alt="food" className="card__image"></img>
            <div className="card__details">
              <h3>{r.title}</h3>
              <h4>{r.publisher}</h4>
            </div>
          </div>
        ))}
    </div>
  );
};

export default List;
