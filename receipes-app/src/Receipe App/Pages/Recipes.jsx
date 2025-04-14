import React, { useState } from 'react';
import RecipeForm from '../Components/recipeForm';
import RecipesList from '../Components/RecipesList';

const Recipes = () => {
    const [recipe, setRecipe] = useState(null);
  
    return (
      <div>
        <RecipeForm recipe={recipe} setRecipe={setRecipe} />
        <RecipesList setUser={setRecipe} />
      </div>
    );
  };

export default Recipes;