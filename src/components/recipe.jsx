import React, { Component } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import Card from "react-bootstrap/Card"

class Recipe extends Component{
	handleClick = () => {
		this.props.showSelectedRecipe(this.props.index);
		this.props.openModal();
	}

	handleDelete = (event) => {
		event.stopPropagation();
		// event.preventDefault();
		this.props.deleteRecipe(this.props.index);
	}

	render() {
		return (
			<Card onClick={this.handleClick}>
				<Card.Img src={this.props.recipe.recipeUrlImage} />
					<div className="delete_recipe" ><FaRegTrashAlt id={this.props.index} onClick={this.handleDelete}/></div>
				<Card.Text>{this.props.recipe.recipeName}</Card.Text>
			</Card>
		)
	}
}

export default Recipe; //?bin white is FaRegTrashAlt