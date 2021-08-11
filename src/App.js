import React, { useEffect, useState } from "react";

import axios from "axios";

import Details from "./components/Details/Details";
import Header from "./components/Header/Header";
import List from "./components/List/List";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { recipes },
      } = await axios.get(
        `https://forkify-api.herokuapp.com/api/search?q=${query}`
      );

      setRecipes(recipes);

      console.log(recipes);
    };

    fetchData();
  }, [query]);

  return (
    <>
      <Header term={term} setTerm={setTerm} setQuery={setQuery} />
      <div className="container">
        <List recipes={recipes} />
        <Details />
      </div>
    </>
  );
};

export default App;
