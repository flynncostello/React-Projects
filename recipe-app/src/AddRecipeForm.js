import React, { useState } from 'react';
import { generateId } from './utilities';

export default function AddRecipeForm({ addRecipe }) {
    const [ title, setTitle ] = useState('');
    const [ recipeText, setRecipeText ] = useState('');

    const handleTitleChange = event => setTitle(event.target.value);

    const handleRecipeTextChange = event => setRecipeText(event.target.value);

    const handleRecipeFormSubmit = event => {
        event.preventDefault();
        const newRecipe = {
            id: generateId(),
            title: title,
            recipeText: recipeText
        };
        if(title.length > 0 && recipeText.length > 0) {
            addRecipe(newRecipe); // Using parent file function passed through prop to add new reipce to main App display
        };
        setTitle('');
        setRecipeText('');
    };

    return (
        <form className='AddRecipeForm' onSubmit={handleRecipeFormSubmit}>
            <label htmlFor="recipeTitle">Name:</label>
            <input id='recipeTitle' type='text' name='recipeTitle' value={title} onChange={handleTitleChange}/>

            <label htmlFor="recipeText">Recipe:</label>
            <input id='recipeText' type='text' name='recipeText' value={recipeText} onChange={handleRecipeTextChange}/>

            <input type='submit' value='Add' />
        </form>
    )
}
