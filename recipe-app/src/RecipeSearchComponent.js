// RecipeSearchComponent.js
import React, { useState } from 'react';
import fetchRecipes from './RecipeSearch'; // Import the fetchRecipes function
import fetchRecipeSummary from './RecipeSummarySearch';

const RecipeSearchComponent = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const recipesData = await fetchRecipes(searchKeyword.trim());
      const recipesWithSummary = await Promise.all(
        recipesData.map(async (recipe) => {
          const summary = await fetchRecipeSummary(recipe.id);
          return { ...recipe, summary };
        })
      );
      setRecipes(recipesWithSummary);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
      <input
        type="text"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        placeholder="Enter a keyword"
      />
      <button onClick={handleSearch}>Search</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className='recipe-search-list'>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <img src={recipe.image} alt={recipe.title} />
              <p dangerouslySetInnerHTML={{ __html: recipe.summary }} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeSearchComponent;
