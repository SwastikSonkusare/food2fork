import React from "react";
import Card from "../Card/Card";

import "./List.scss";

const List = ({ recipes, setSingleRecipe }) => {
  return (
    <div className="list">
      {recipes?.length &&
        recipes.map((r) => <Card r={r} setSingleRecipe={setSingleRecipe} />)}
    </div>
  );
};

export default List;
