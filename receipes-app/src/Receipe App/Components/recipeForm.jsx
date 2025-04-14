import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRecipeLocally, updateRecipeLocally } from '../features/RecipesSlice';

const RecipeForm = ({ recipe, setRecipe }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [prepTimeMinutes, setPrepTimeMinutes] = useState('');
  const [cookTimeMinutes, setCookTimeMinutes] = useState('');
  const [servings, setServings] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [tags, setTags] = useState('');
  const [mealType, setMealType] = useState('');
  const [image, setImage] = useState('');
  const [rating, setRating] = useState('');
  const [reviewCount, setReviewCount] = useState('');
  const [formError, setFormError] = useState('');

  const dispatch = useDispatch();
  const status = useSelector((state) => state.recipes.status);

  useEffect(() => {
    if (recipe) {
      setName(recipe.name || '');
      setIngredients(Array.isArray(recipe.ingredients) ? recipe.ingredients.join(', ') : '');
      setInstructions(Array.isArray(recipe.instructions) ? recipe.instructions.join(', ') : '');
      setPrepTimeMinutes(recipe.prepTimeMinutes || '');
      setCookTimeMinutes(recipe.cookTimeMinutes || '');
      setServings(recipe.servings || '');
      setDifficulty(recipe.difficulty || '');
      setCuisine(recipe.cuisine || '');
      setTags(Array.isArray(recipe.tags) ? recipe.tags.join(', ') : '');
      setMealType(Array.isArray(recipe.mealType) ? recipe.mealType.join(', ') : '');
      setImage(recipe.image || '');
      setRating(recipe.rating || '');
      setReviewCount(recipe.reviewCount || '');
    } else {
      initialiser();
    }
  }, [recipe]);

  const initialiser = () => {
    setName('');
    setIngredients('');
    setInstructions('');
    setPrepTimeMinutes('');
    setCookTimeMinutes('');
    setServings('');
    setDifficulty('');
    setCuisine('');
    setTags('');
    setMealType('');
    setImage('');
    setRating('');
    setReviewCount('');
    setFormError('');
    setRecipe(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    // Validation de base
    if (!name.trim()) {
      setFormError('Le nom de la recette est obligatoire');
      return;
    }

    if (!ingredients.trim()) {
      setFormError('Les ingrédients sont obligatoires');
      return;
    }

    if (!instructions.trim()) {
      setFormError('Les instructions sont obligatoires');
      return;
    }

    const recipeData = {
      name,
      ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()).filter(item => item), 
      instructions: instructions.split(',').map((instruction) => instruction.trim()).filter(item => item),
      prepTimeMinutes: parseInt(prepTimeMinutes) || 0,
      cookTimeMinutes: parseInt(cookTimeMinutes) || 0,
      servings: parseInt(servings) || 1,
      difficulty: difficulty || 'Medium',
      cuisine: cuisine || 'Other',
      tags: tags.split(',').map((tag) => tag.trim()).filter(item => item),
      mealType: mealType.split(',').map((meal) => meal.trim()).filter(item => item),
      image: image || '',
      rating: parseFloat(rating) || 0,
      reviewCount: parseInt(reviewCount) || 0,
    };

    if (recipe) {
      
      dispatch(updateRecipeLocally({ ...recipeData, id: recipe.id }));
    } else {
      
      dispatch(addRecipeLocally(recipeData));
    }

    
    initialiser();
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <h2>{recipe ? 'Modifier la recette' : 'Ajouter une nouvelle recette'}</h2>
      
      {formError && <div className="error-message">{formError}</div>}
      {status === 'failed' && <div className="error-message">Une erreur est survenue. Veuillez réessayer.</div>}
      
      <div className="form-group">
        <label htmlFor="name">Nom de la recette *</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nom de la recette"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="ingredients">Ingrédients *</label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Ingrédients (séparés par des virgules)"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="instructions">Instructions *</label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Instructions (séparées par des virgules)"
          required
        />
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="prepTimeMinutes">Temps de préparation (min)</label>
          <input
            id="prepTimeMinutes"
            type="number"
            value={prepTimeMinutes}
            onChange={(e) => setPrepTimeMinutes(e.target.value)}
            placeholder="Temps de préparation"
            min="0"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="cookTimeMinutes">Temps de cuisson (min)</label>
          <input
            id="cookTimeMinutes"
            type="number"
            value={cookTimeMinutes}
            onChange={(e) => setCookTimeMinutes(e.target.value)}
            placeholder="Temps de cuisson"
            min="0"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="servings">Portions</label>
          <input
            id="servings"
            type="number"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
            placeholder="Nombre de portions"
            min="1"
          />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="difficulty">Difficulté</label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="">Sélectionner</option>
            <option value="Easy">Facile</option>
            <option value="Medium">Moyen</option>
            <option value="Hard">Difficile</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="cuisine">Cuisine</label>
          <input
            id="cuisine"
            type="text"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            placeholder="Type de cuisine"
          />
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="tags">Tags</label>
        <input
          id="tags"
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags (séparés par des virgules)"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="mealType">Type de repas</label>
        <input
          id="mealType"
          type="text"
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
          placeholder="Type de repas (séparés par des virgules)"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="image">URL de l'image</label>
        <input
          id="image"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="URL de l'image"
        />
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="rating">Évaluation</label>
          <input
            id="rating"
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            placeholder="Évaluation (0-5)"
            min="0"
            max="5"
            step="0.1"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="reviewCount">Nombre d'avis</label>
          <input
            id="reviewCount"
            type="number"
            value={reviewCount}
            onChange={(e) => setReviewCount(e.target.value)}
            placeholder="Nombre d'avis"
            min="0"
          />
        </div>
      </div>
      
      <div className="form-actions">
        <button type="button" onClick={initialiser} className="btn-cancel">Annuler</button>
        <button type="submit" className="btn-submit">
          {recipe ? 'Mettre à jour' : 'Ajouter'}
        </button>
      </div>
    </form>
  );
};

export default RecipeForm;