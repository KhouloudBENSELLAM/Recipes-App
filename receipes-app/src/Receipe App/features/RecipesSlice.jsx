import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://dummyjson.com/recipes';

// Récupération des recettes
export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
});

// Ajout d'une recette - modification pour fonctionner avec l'API DummyJSON
export const addRecipe = createAsyncThunk('recipes/addRecipe', async (recipe) => {
  try {
    const response = await axios.post(`${apiUrl}/add`, recipe, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding recipe:', error);
    throw error;
  }
});

// Mise à jour d'une recette - correction pour DummyJSON
export const updateRecipe = createAsyncThunk('recipes/updateRecipe', async (recipe) => {
  try {
    const response = await axios.put(`${apiUrl}/${recipe.id}`, recipe, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating recipe:', error);
    throw error;
  }
});

// Suppression d'une recette - correction pour DummyJSON
export const deleteRecipe = createAsyncThunk('recipes/deleteRecipe', async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/${id}`);
    return id; // Retourne l'ID pour la mise à jour du state
  } catch (error) {
    console.error('Error deleting recipe:', error);
    throw error;
  }
});

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipes: [],
    status: 'idle',
    error: null
  },
  reducers: {
    // Permet de supprimer localement une recette (sans appel API)
    removeRecipeLocally: (state, action) => {
      state.recipes = state.recipes.filter(recipe => recipe.id !== action.payload);
    },
    // Permet d'ajouter localement une recette (sans appel API)
    addRecipeLocally: (state, action) => {
      // Génération d'un ID temporaire
      const newRecipe = {
        ...action.payload,
        id: Date.now() // Utilise timestamp comme ID temporaire
      };
      state.recipes.push(newRecipe);
    },
    // Permet de modifier localement une recette (sans appel API)
    updateRecipeLocally: (state, action) => {
      const index = state.recipes.findIndex(recipe => recipe.id === action.payload.id);
      if (index !== -1) {
        state.recipes[index] = action.payload;
      }
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Récupération des recettes
      .addCase(fetchRecipes.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        
        if (action.payload && Array.isArray(action.payload.recipes)) {
          state.recipes = action.payload.recipes;
        } else {
          console.error("Error: 'recipes' is not a valid array in the API response");
          state.recipes = []; 
          state.error = "Format de données invalide reçu de l'API";
        }
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || "Échec de récupération des recettes";
      })
      
      // Ajout d'une recette
      .addCase(addRecipe.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addRecipe.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.recipes.push(action.payload);
      })
      .addCase(addRecipe.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || "Échec d'ajout de la recette";
      })
      
      // Mise à jour d'une recette
      .addCase(updateRecipe.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateRecipe.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.recipes.findIndex((recipe) => recipe.id === action.payload.id);
        if (index !== -1) {
          state.recipes[index] = action.payload;
        }
      })
      .addCase(updateRecipe.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || "Échec de mise à jour de la recette";
      })
      
      // Suppression d'une recette
      .addCase(deleteRecipe.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteRecipe.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.recipes = state.recipes.filter((recipe) => recipe.id !== action.payload);
      })
      .addCase(deleteRecipe.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || "Échec de suppression de la recette";
      });
  }
});

export const { clearError, removeRecipeLocally, addRecipeLocally, updateRecipeLocally } = recipesSlice.actions;
export default recipesSlice.reducer;