import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Home = () => {
    const [Recipe, setRecipe] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    const getRecipe = async (query) => {
        try {
            setLoading(true);
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
            const data = await response.json();
            setRecipe(data.meals || []);
        } catch (error) {
            console.error("Error fetching recipes:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getRecipe('');
    }, []);

    const handleSearch = () => {
        getRecipe(search);
    };

    const saveToFavorites = (recipe) => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isDuplicate = favorites.some((fav) => fav.idMeal === recipe.idMeal);
        if (!isDuplicate) {
            localStorage.setItem('favorites', JSON.stringify([...favorites, recipe]));
            alert("Recipe added to favorites!");
        } else {
            alert("Recipe is already in favorites!");
        }
    };

    return (
        <div>
            <div className="search">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search your recipe"
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {loading && <p>Loading...</p>}
            <div className="container">
                {Recipe.length > 0 ? (
                    Recipe.map((item) => (
                        <div className="recipe" key={item.idMeal}>
                            <img src={item.strMealThumb} alt={item.strMeal} />
                            <h1>{item.strMeal}</h1>
                            <button onClick={() => saveToFavorites(item)}>Save to Favorites</button>
                        </div>
                    ))
                ) : (
                    !loading && <p>No recipes found. Try searching for something else!</p>
                )}
            </div>
        </div>
    );
};

export default Home;