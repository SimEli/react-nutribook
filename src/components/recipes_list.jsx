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
					carbohydrates={props.carbohydrates}
          carbohydrates_percent={props.carbohydrates_percent}
          energyKcal={props.energyKcal}
          fat={props.fat}	
          fat_percent={props.fat_percent}
          proteins={props.proteins}
          proteins_percent={props.proteins_percent}
          sodium={props.sodium}
          sodium_percent={props.sodium_percent}
          saturatedFat={props.saturatedFat}
          saturatedFat_percent={props.saturatedFat_percent}
          sugars={props.sugars}
          sugars_percent={props.sugars_percent}
          fiber={props.fiber}
          fiber_percent={props.fiber_percent}
          inputNutriFacts={props.inputNutriFacts}
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
				carbohydrates={props.carbohydrates}
				carbohydrates_percent={props.carbohydrates_percent}
				energyKcal={props.energyKcal}
				fat={props.fat}	
				fat_percent={props.fat_percent}
				proteins={props.proteins}
				proteins_percent={props.proteins_percent}
				sodium={props.sodium}
				sodium_percent={props.sodium_percent}
				saturatedFat={props.saturatedFat}
				saturatedFat_percent={props.saturatedFat_percent}
				sugars={props.sugars}
				sugars_percent={props.sugars_percent}
				fiber={props.fiber}
				fiber_percent={props.fiber_percent}
				inputNutriFacts={props.inputNutriFacts}
			/>
		</div>
	);
};

export default RecipesList;