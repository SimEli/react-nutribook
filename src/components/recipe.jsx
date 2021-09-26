import React, { Component } from "react";
import { FaTrashAlt } from "react-icons/fa";

class Recipe extends Component{
	handleClick = () => {
		this.props.showSelectedRecipe(this.props.index);
		this.props.openModal();
		// RecipeDetails();
	}

	handleDelete = (event) => {
		event.preventDefault();
		this.props.deleteRecipe(this.props.index);
	}

	render() {
		return (
			<div className="card_recipe" onClick={this.handleClick}>
				<div className="card_recipe_img" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),url('${this.props.recipe.recipeUrlImage}')`}}>
					<div className="delete_recipe" ><FaTrashAlt id={this.props.index} onClick={this.handleDelete}/></div>
				</div>
				<div className="card_recipe_infos">
					<div className="card_description">
						<h2>{this.props.recipe.recipeName}</h2>
					</div>
				</div>
			</div>
		)
	}
}

export default Recipe; //?bin white is FaRegTrashAlt