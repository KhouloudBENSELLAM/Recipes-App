import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../features/RecipesSlice';
import RecipeCard from './RecipeCard';

const RecipesList = ({ setRecipe }) => {
    const dispatch = useDispatch();
    const { recipes } = useSelector((state) => state.recipes);
    const [nameRch, setNameRch] = useState('');
    const [ctg, setCtg] = useState('');
    const [names, setNames] = useState([]);

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    useEffect(() => {
        
        const recipeNames = [...new Set(recipes.map(recipe => recipe.name))];
        setNames(recipeNames);
    }, [recipes]);

    const filteredRecipes = recipes.filter(recipe => {
        const matchesIngredient = recipe.ingredients.some(ingredient => 
            ingredient.toLowerCase().includes(nameRch.toLowerCase())
        );
        
        const matchesCategory = ctg === '' || recipe.name === ctg;
        
        return matchesIngredient && matchesCategory;
    });

    return (
        <div className="recipes-container">
            <h2>Recipes List</h2>
            
            {/* Filters Section */}
            <div className="filters">
                <input
                    type="search"
                    placeholder="Search by ingredients"
                    value={nameRch}
                    onChange={(e) => setNameRch(e.target.value)}
                />
                <select value={ctg} onChange={(e) => setCtg(e.target.value)}>
                    <option value="">All Recipes</option>
                    {names.map((name, index) => (
                        <option key={index} value={name}>{name}</option>
                    ))}
                </select>
            </div>

            {/* Recipes List */}
            <div className="recipes-list">
                {filteredRecipes.length > 0 ? (
                    filteredRecipes.map((recipe) => (
                        <RecipeCard key={recipe.id} recipe={recipe} Editer={setRecipe} />
                    ))
                ) : (
                    <p>No recipes found. Try adjusting your search.</p>
                )}
            </div>
        </div>
    );
};

export default RecipesList;