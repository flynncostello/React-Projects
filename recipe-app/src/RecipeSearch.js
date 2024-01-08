// RecipeSearch.js
const fetchRecipes = async (searchKeyword) => {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${searchKeyword}&number=10&apiKey=70b0e40415d244a6a2a182f00f366009`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data.results; // Assuming that the recipes are in the 'results' property
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};

export default fetchRecipes;
