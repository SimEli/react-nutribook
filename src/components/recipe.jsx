import React, { Component } from "react";
import RecipeDetails from "./recipe_details";

class Recipe extends Component{
	handleClick = () => {
		this.props.selectRecipe(this.props.index);
		// RecipeDetails();
	}

	render() {
		return (
			<div className={`card_recipe${this.props.selected ? ' active ' : ''}`} onClick={this.handleClick}>
				<div className="card_recipe_img" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),url('${this.props.recipe.imageUrl}')`}}></div>
				<div className="card_recipe_infos">
					<div className="card_description">
						<h2>{this.props.recipe.name}</h2>
					</div>
					{/* <a className="card_link" href="#" ></a> */}
				</div>
			</div>
		)
	}
}

export default Recipe;