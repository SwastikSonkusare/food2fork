import axios from "axios";

export const fetchRecipe = async (query) => {
  const {
    data: { recipes },
  } = await axios.get(
    `https://forkify-api.herokuapp.com/api/search?q=${query}`
  );

  return recipes;
};

export const fetchSingleRecipe = async (singleRecipe) => {
  const {
    data: { recipe },
  } = await axios.get(
    `https://forkify-api.herokuapp.com/api/get?rId=${singleRecipe}`
  );

  return recipe;
};
