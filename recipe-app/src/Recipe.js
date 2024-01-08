import React from 'react';

export default function Recipe(props) {
    const { recipe, removeRecipe } = props;

    const handleRemoveRecipt = () => {
        removeRecipe(recipe.id);
    };

    return (
        <li className='Recipe'>
            <div className='info'>
                <h2>{recipe.title}</h2>
                <div className='recipe-text'>{recipe.recipeText}</div>
            </div>
            <button aria-label="Remove thought" className="remove-button" onClick={handleRemoveRecipt}>
                &times;
            </button>
        </li>
    );
};