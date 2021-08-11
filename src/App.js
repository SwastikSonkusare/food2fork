import React, { useEffect, useState } from "react";
import { fetchRecipe, fetchSingleRecipe } from "./apis/recipeApi";

import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import List from "./components/List/List";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("pizza");
  const [term, setTerm] = useState("");
  const [singleRecipe, setSingleRecipe] = useState(47746);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    fetchRecipe(query).then((data) => {
      setRecipes(data);
      setQuery("");
    });
  }, [query]);

  useEffect(() => {
    if (singleRecipe) {
      fetchSingleRecipe(singleRecipe).then((data) => {
        setRecipe(data);
        setSingleRecipe("");
      });
    }
  }, [singleRecipe]);

  return (
    <main>
      <Header term={term} setTerm={setTerm} setQuery={setQuery} />
      <div className="container">
        <List recipes={recipes} setSingleRecipe={setSingleRecipe} />
        <Details recipe={recipe} />
      </div>
    </main>
  );
};

export default App;
