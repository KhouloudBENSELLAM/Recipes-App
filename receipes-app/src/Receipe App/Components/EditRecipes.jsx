import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditRecipe = () => {
    const { recipeId } = useParams(); 
    const [recipe, setRecipe] = useState({
        name: '',
        cuisine: '',
        image: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    
    const getRecipeById = async (id) => {
        try {
            const response = await fetch(`https://dummyjson.com/recipes/${id}`);
            if (!response.ok) {
                throw new Error('Recipe not found');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            setError(error.message);
            return null;
        }
    };
    
    useEffect(() => {
        const fetchRecipe = async () => {
            const fetchedRecipe = await getRecipeById(recipeId); 
            if (fetchedRecipe) {
                setRecipe(fetchedRecipe);
                setLoading(false);
            } else {
                setLoading(false);
                if (!error) {
                    navigate('/'); 
                }
            }
        };
        
        fetchRecipe();
    }, [recipeId, navigate, error]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe((prevRecipe) => ({
            ...prevRecipe,
            [name]: value,
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`https://dummyjson.com/recipes/${recipeId}`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(recipe), 
            });
            
            if (!response.ok) {
                throw new Error('Error updating recipe');
            }
            
            
            navigate('/');
        } catch (error) {
            console.error('Error:', error);
            setError(error.message);
        }
    };
    
    if (loading) {
        return <p>Loading...</p>;
    }
    
    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <h1>Edit Recipe</h1>
            
            <label htmlFor="name">Recipe name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={recipe.name}
                onChange={handleChange}
                required
            />
            
            <label htmlFor="cuisine">Cuisine:</label>
            <input
                type="text"
                id="cuisine"
                name="cuisine"
                value={recipe.cuisine}
                onChange={handleChange}
                required
            />
            
            <label htmlFor="image">Image URL:</label>
            <input
                type="text"
                id="image"
                name="image"
                value={recipe.image}
                onChange={handleChange}
            />
            
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditRecipe;