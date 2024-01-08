// RecipeSummarySearch.js
const fetchRecipeSummary = async (recipeID) => {
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/${recipeID}/summary?apiKey=70b0e40415d244a6a2a182f00f366009`);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        return data.summary;
    } catch (error) {
        throw new Error(`Error fetching recipe summary for ID ${recipeID}: ${error.message}`);
    }
}

export default fetchRecipeSummary;
