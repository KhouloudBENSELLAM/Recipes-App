import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRecipes } from "../features/RecipesSlice";

const RecipeDetails = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();

  
  const recipes = useSelector((state) => state.recipes.recipes);
  const status = useSelector((state) => state.recipes.status);

  
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRecipes());
    }
  }, [status, dispatch]);

  
  const recipe = recipes?.find((r) => r.id.toString() === id);

  
  if (!recipe) {
    return <p>Loading recipe...</p>;
  }

  const recipeImages = {
    "Classic Margherita Pizza": "./Recipes pictures/Pizza Margherita.jpeg",
    "Vegetarian Stir-Fry": "./Recipes pictures/Vegetarian Stir-Fry.jpeg",
    "Chocolate Chip Cookies": "./Recipes pictures/Chocolate Chip Cookies.jpeg",
    "Chicken Alfredo Pasta": "./Recipes pictures/Chicken Alfredo Pasta.jpeg",
    "Mango Salsa Chicken": "./Recipes pictures/Mango Salsa Chicken.jpeg",
    "Quinoa Salad with Avocado": "./Recipes pictures/Quinoa Salad with Avocado.jpeg",
    "Tomato Basil Bruschetta": "./Recipes pictures/Tomato Basil Bruschetta.jpeg",
    "Beef and Broccoli Stir-Fry": "./Recipes pictures/Beef and Broccoli Stir-Fry.jpeg",
    "Caprese Salad": "./Recipes pictures/Caprese Salad.jpeg",
    "Shrimp Scampi Pasta": "./Recipes pictures/Shrimp Scampi Pasta.jpeg",
    "Chicken Biryani": "./Recipes pictures/Chicken Biryani.jpeg",
    "Chicken Karahi": "./Recipes pictures/Chicken Karahi.jpeg",
    "Aloo Keema": "./Recipes pictures/Aloo Keema.jpeg",
    "Chapli Kebabs": "./Recipes pictures/Chapli Kebabs.jpeg",
    "Saag (Spinach) with Makki di Roti": "./Recipes pictures/Saag (Spinach) with Makki di Roti.jpeg",
    "Japanese Ramen Soup": "./Recipes pictures/Japanese Ramen Soup.jpeg",
    "Moroccan Chickpea Tagine": "./Recipes pictures/Moroccan Chickpea Tagine.jpeg",
    "Korean Bibimbap": "./Recipes pictures/Korean Bibimbap.jpeg",
    "Greek Moussaka": "./Recipes pictures/Greek Moussaka.jpeg",
    "Butter Chicken (Murgh Makhani)": "./Recipes pictures/Butter Chicken (Murgh Makhani).jpeg",
    "Thai Green Curry": "./Recipes pictures/Thai Green Curry.jpeg",
    "Mango Lassi": "./Recipes pictures/Mango Lassi.jpeg",
    "Italian Tiramisu": "./Recipes pictures/Italian Tiramisu.jpeg",
    "Turkish Kebabs": "./Recipes pictures/Turkish Kebabs.jpeg",
    "Blueberry Banana Smoothie": "./Recipes pictures/Blueberry Banana Smoothie.jpeg",
    "Mexican Street Corn (Elote)": "./Recipes pictures/Mexican Street Corn (Elote).jpeg",
    "Russian Borscht": "./Recipes pictures/Russian Borscht.jpeg",
    "South Indian Masala Dosa": "./Recipes pictures/South Indian Masala Dosa.jpeg",
    "Lebanese Falafel Wrap": "./Recipes pictures/Lebanese Falafel Wrap.jpeg",
    "Brazilian Caipirinha": "./Recipes pictures/Brazilian Caipirinha.jpeg"
};

  const recipeImage = recipe.image || recipeImages[recipe.name] || "./Recipes pictures/default-image.jpeg";

  return (
    <section className="recipe-card">
      <div className="recipe-image">
        <img src={recipeImage} alt={recipe.name} />
      </div>
      <div className="header">
        <h2>Recipe name: {recipe.name}</h2>
        <h4>Cuisine: {recipe.cuisine}</h4>
        <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins</p>
        <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins</p>
        <p><strong>Servings:</strong> {recipe.servings}</p>
        <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
        <p><strong>Calories per serving:</strong> {recipe.caloriesPerServing}</p>
      </div>

      <div className="ingredients">
        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="instructions">
        <h3>Instructions:</h3>
        <ol>
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default RecipeDetails;
