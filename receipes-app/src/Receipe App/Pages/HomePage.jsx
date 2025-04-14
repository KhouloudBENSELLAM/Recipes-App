import React from "react";
import AboutUs from "./AboutUs";
import SkillsLearned from "./Culinary skills";
import QuoteSection from "./Quote section";
import ChiefSection from "./ChiefSection";
import Footer from "./Footer";
import RecipeSlider from "./RecipeReviews";
export default function HomePage(){

    return(
        <div >
        <div className="hero-section">
      {/* Texte principal */}
      <div className="hero-text">
        <h1>TastyThreads <br /> Connectez vos idées gourmandes.
        </h1>
        <p>
        Welcome to TastyThreads, your ultimate hub where culinary creativity thrives. Discover a vibrant world of flavors, share your most cherished recipes, and weave delightful  connections through the art of cooking. Whether you're a seasoned chef or a passionate food lover, TastyThreads is here to inspire, connect, and celebrate the joy of delicious meals together.       </p>
        
      </div>

      {/* Images */}
      <div className="hero-images">
        <div className="main-image">
          <img src="./pictures/download (13).jpeg" alt="food 1" />
          <img src="./pictures/download (15).jpeg" alt="food 2" className="second"/>
        </div>
        <div className="side-images">
          <img src="./pictures/download (17).jpeg" alt="food 4" className="first"/>
          <img src="./pictures/download (14).jpeg" alt="food 3"  />
        </div>
      </div>
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div>
        <SkillsLearned />
      </div>
      <div>
        <QuoteSection />
      </div>
      <div>
        <ChiefSection />
      </div>
      <div>
      <RecipeSlider />
      </div>
      <div>
        <Footer />
      </div>

      </div>
    )
}