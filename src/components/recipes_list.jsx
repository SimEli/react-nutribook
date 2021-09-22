import React, {Component} from 'react';
import Recipe from './recipe.jsx';

const RecipesList = (props) => {
	const renderList = () => {
		return props.recipes.map((recipe,index) => {
			return (
				<Recipe 
					recipe={recipe}
					key={recipe.lat}
					selected={recipe.name === props.selectedRecipe.name}
					index={index}
					selectRecipe={props.selectRecipe}
				/>
			);
		});
	};
	
	return(
		<div className="recipes_list">
			{renderList()}
		</div>
	);
};

export default RecipesList;