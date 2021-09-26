import React from 'react';
import Recipe from './recipe.jsx';
import RecipeModal from "./recipe_modal";


const RecipesList = (props) => {
	const renderList = () => {
		return props.recipes.map((recipe,index) => {
			return (
				<Recipe 
					recipe={recipe}
					key={recipe.recipeName}
					selected={recipe.recipeName === props.selectedRecipe.recipeName}
					index={index}
					showSelectedRecipe={props.showSelectedRecipe} 
					openModal={props.openModal}
					closeModal={props.closeModal}
					deleteRecipe ={props.deleteRecipe}
				/>
			);
		});
	};
	
	return(
		<div className="recipes_list">
			{renderList()}
			<RecipeModal 
				show={props.show}
				showSelectedRecipe={props.showSelectedRecipe} 
				closeModal={props.closeModal}
				selected={props.selectedRecipe}
			/>
		</div>
	);
};

export default RecipesList;