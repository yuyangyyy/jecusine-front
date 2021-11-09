import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const Home = () => {
  return (
    <div className="home">
      <Logo />
      <Navigation />
      <div className="sous-home">
        <img className="home-img" src="./imgcuisine.jpeg" />
        <p>
          JeCuisine.com est une plateforme culinaire pour les gens qui aiment
          faire la cuisine, elle est aussi pour les gens qui ne savent pas faire
          la cuisine, les recettes sont très simples étape par étape pour
          préparer un bon dîner pour tout la semaine.
        </p>
      </div>
    </div>
  );
};

export default Home;
