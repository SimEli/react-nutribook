import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import NutriFacts from "./recipe_nutrifacts";
class RecipeModal extends Component {
	hideModal = () => {
		this.props.closeModal();
	}

	render () {
		return (
			<Modal show={this.props.show} onHide={this.hideModal} centered >
				<Modal.Header closeButton>
					<Modal.Title>{this.props.selected.recipeName}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="details-box ingredients">
						<h5 className="ingredients-title">Ingredients</h5>
							<p className="ingredients-details">
								{this.props.selected.recipeIngredients}
							</p>
					</div>
					<div className="details-box steps">
						<h5 className="steps-title">Steps</h5>
							<p className="steps-details">
								{this.props.selected.recipeSteps}
							</p>
					</div>
					<div className="image-box">
						<div className="card_recipe_img" style={{backgroundImage:`url('${this.props.selected.recipeUrlImage}')`}}></div>
					</div>
					<NutriFacts
						selectedRecipe={this.props.selected} />
				</Modal.Body>
			</Modal>
		);
	}
};

export default RecipeModal;