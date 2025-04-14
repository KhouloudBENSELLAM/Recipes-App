import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Menu from "./Receipe App/Pages/Menu";
import HomePage from "./Receipe App/Pages/HomePage";

import SignUp from "./Receipe App/Pages/SignUp";
import AboutUs from "./Receipe App/Pages/AboutUs";
import Settings from "./Receipe App/Pages/Settings";
// import DesktopSidebar from "./Receipe App/Pages/SideBarActions";
import Recipes from "./Receipe App/Pages/Recipes";
import RecipeDetails from "./Receipe App/Components/RecipeDetails";
import Dashboard from "./Receipe App/Components/Dachboard";
import EditRecipe from "./Receipe App/Components/EditRecipes";
import LogoutButton from "./Receipe App/Components/Logout";


export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu/>}>
          <Route index element={<HomePage/>}></Route>
          <Route path='AboutUs' element={<AboutUs/>}></Route>
          <Route path='/Recipes' element={<Recipes/>}></Route>
          <Route path="/RecipeDetails/:id" element={<RecipeDetails />} />
          {/* <Route path='/Recipes' element={<Recipes/>}></Route> */}
          <Route path='/Settings' element={<Settings/>}></Route>
          <Route path="/edit-recipe/:recipeId" element={<EditRecipe />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/logout" element={<LogoutButton />} />

          <Route path='SignUp' element={<SignUp/>}></Route>
          {/* <Route path="*" element={<PageNotFound/>}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}