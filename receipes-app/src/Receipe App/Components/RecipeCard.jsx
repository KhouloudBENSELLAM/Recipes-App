
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeRecipeLocally } from '../features/RecipesSlice';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    const dispatch = useDispatch();
   
    
    const recipeImages = {
        "Classic Margherita Pizza": "./Recipes pictures/Pizza Margherita.jpeg",
        "Vegetarian Stir-Fry": "./Recipes pictures/Vegetarian Stir-Fry.jpeg",
       
    };
    
  
    const recipeImage = recipe.image || recipeImages[recipe.name] || "./Recipes pictures/default-image.jpeg";
    
    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete ${recipe.name}?`)) {
            dispatch(removeRecipeLocally(recipe.id));
        }
    };
    
    return (
        <section className="recipes-card">
            <div className="recipe-image">
                <img src={recipeImage} alt={recipe.name} />
            </div>
            <div className="header">
                <h2>Recipe name: {recipe.name}</h2>
                <h4>Cuisine: {recipe.cuisine}</h4>
            </div>
            <span className="recipe-actions">
                {/* Link to the details page with recipe ID */}
                <Link to={`/RecipeDetails/${recipe.id}`}>
                    <button>Show Details</button>
                </Link>
                <Link to={`/edit-recipe/${recipe.id}`}>
                    <button>Edit</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
            </span>
        </section>
    );
};

export default RecipeCard;