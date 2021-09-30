import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import NutriFacts from "./recipe_nutrifacts";
class RecipeModal extends Component {
	// constructor(props){
  //   super(props);

	// 	this.state = {
		
	// 	};
	// }
	hideModal = () => {
		this.props.closeModal();
	}

		refreshNutri = () => {
		this.props.inputNutriFacts();
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
						selectedRecipe={this.props.selected}
						carbohydrates={this.props.carbohydrates}
						carbohydrates_percent={this.props.carbohydrates_percent}
						energyKcal={this.props.energyKcal}
						fat={this.props.fat}	
						fat_percent={this.props.fat_percent}
						proteins={this.props.proteins}
						proteins_percent={this.props.proteins_percent}
						sodium={this.props.sodium}
						sodium_percent={this.props.sodium_percent}
						saturatedFat={this.props.saturatedFat}
						saturatedFat_percent={this.props.saturatedFat_percent}
						sugars={this.props.sugars}
						sugars_percent={this.props.sugars_percent}
						fiber={this.props.fiber}
						fiber_percent={this.props.fiber_percent}
						inputNutriFacts={this.props.inputNutriFacts} />
				</Modal.Body>
			</Modal>
		);
	}
};

export default RecipeModal;