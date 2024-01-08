import './App.css';
import React, { useState } from 'react';
import AddRecipeForm from './AddRecipeForm';
import Recipe from './Recipe';
import RecipeSearchComponent from './RecipeSearchComponent';

function App() {
  const [recipes, setRecipes] = useState([]);
  /*
  Recipes has structure:
  [
    {
      id: 100,
      title: 'Apple pie',
      recipe: 'Step 1...'
    }
  ]
  */

  const addRecipe = newRecipe => {
    setRecipes(prevRecipes => [newRecipe, ...prevRecipes]);
  };

  const removeRecipe = recipeID => {
    setRecipes(prevRecipes => prevRecipes.filter(curRecipe => curRecipe.id !== recipeID));
  };

  return (
    <div className="App">
      <header className='App-header'>
        <h1>Recipe Book</h1>
      </header>
      <main>
        <div className='addRecipe'>
          <h2>Add New Reipces:</h2>
          <AddRecipeForm addRecipe={addRecipe} />
          <br/>
          <ul className='Recipes-list'>
            {recipes.map(recipe => (
              <Recipe key={recipe.id} recipe={recipe} removeRecipe={removeRecipe} />
            ))}
          </ul>
        </div>
        <div className='searchRecipe'>
          <h2>Recipe Search:</h2>
          <RecipeSearchComponent />
        </div>
        
      </main>
    </div>
  );
}

export default App;
