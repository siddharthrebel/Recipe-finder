import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Retrieve favorites from localStorage when the component loads
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length > 0 ? (
        <div className="favorites-container">
          {favorites.map((item) => (
            <div className="favorite-item" key={item.idMeal}>
              <img src={item.strMealThumb} alt={item.strMeal} />
              <h2>{item.strMeal}</h2>
              <h3>Ingredients:</h3>
              <ul>
                {Object.keys(item)
                  .filter((key) => key.startsWith('strIngredient') && item[key])
                  .map((key, index) => (
                    <li key={index}>{item[key]}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorites added yet. Start adding some recipes!</p>
      )}
    </div>
  );
};

export default Favorites;