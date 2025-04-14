import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from '../features/RecipesSlice';

export const store = configureStore({
  reducer: {
    recipes: recipesReducer
  }
});
export default  store
