import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const foodRecipeApp = {
  appName: "Delish Recipes",
  description: "Découvrez des recettes du monde entier avec des instructions détaillées et des avis d’utilisateurs.",
  recipes: [
    {
      name: "Spaghetti Carbonara",
      description: "Un plat italien classique avec une sauce crémeuse aux œufs et au fromage.",
      author: "John Doe",
      rating: 4.8,
    },
    {
      name: "Salade César",
      description: "Une salade fraîche avec du poulet grillé, des croûtons et une sauce savoureuse.",
      author: "Fatin Malki",
      rating: 4.5,
    },
    {
      name: "Tarte Tatin",
      description: "Un dessert traditionnel avec des pommes caramélisées et une pâte croustillante.",
      author: "Khouloud Ben Sellam",
      rating: 4.7,
    },
    {
      name: "Couscous Royal",
      description: "Un couscous marocain garni de légumes et de viande tendre.",
      author: "Amina Rahmani",
      rating: 4.9,
    },
    {
      name: "Paella aux Fruits de Mer",
      description: "Une paella espagnole aux fruits de mer avec du riz safrané et des épices.",
      author: "Sofia Martinez",
      rating: 4.6,
    },
  ],
  reviews: [
    {
      user: "Alice Dupont",
      comment: "Super application ! Les recettes sont bien détaillées et faciles à suivre.",
      rating: 5,
    },
    {
      user: "Karim El Amrani",
      comment: "J'aime la diversité des plats proposés, j'aimerais voir plus de recettes végétariennes.",
      rating: 4.5,
    },
    {
      user: "Sophie Lemoine",
      comment: "Bonne interface et recettes intéressantes, mais certaines recettes pourraient être plus illustrées.",
      rating: 4,
    },
    {
      user: "Nour Abdallah",
      comment: "Une excellente application pour découvrir de nouvelles recettes. Je recommande !",
      rating: 5,
    },
  ],
};

export default function RecipeSlider() {
  const [index, setIndex] = useState(0);

  const nextRecipe = () => {
    setIndex((prev) => (prev + 1) % foodRecipeApp.recipes.length);
  };

  const prevRecipe = () => {
    setIndex((prev) => (prev - 1 + foodRecipeApp.recipes.length) % foodRecipeApp.recipes.length);
  };

  return (
    <div className="recipe-slider">
      <h1>Some Of Reviews About Our Service</h1>
      <p className="review-pargrph">
        Discover what our users think about <b>TastyThreads</b> ! Thanks to their valuable feedback, we continuously improve our app to offer a unique and intuitive culinary experience. Whether you're a cooking enthusiast or a beginner, our users share their thoughts to guide and inspire you.
      </p>
      <div className="recipe-card">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <p className="recipe-title">{foodRecipeApp.recipes[index].name}</p>
          <p className="recipe-author">Par : {foodRecipeApp.recipes[index].author}</p>
          <p className="recipe-rating">Note : {foodRecipeApp.recipes[index].rating} ⭐</p>
          <p className="recipe-description">"{foodRecipeApp.recipes[index].description}"</p>
        </motion.div>
      </div>
      <div className="recipe-controls">
        <button onClick={prevRecipe} className="control-button">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextRecipe} className="control-button">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
