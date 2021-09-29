import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import NutriFacts from "./recipe_nutrifacts";
class RecipeModal extends Component {
	constructor(props){
    super(props);

		this.state = {
			carbohydrates: 0,
			carbohydrates_percent: 0,
			energyKcal: 0,
			fat: 0,
			fat_percent: 0,
			proteins: 0,
			proteins_percent: 0,
			sodium: 0,
			sodium_percent: 0,
			saturatedFat: 0,
			saturatedFat_percent: 0,
			sugars: 0,
			sugars_percent: 0,
			fiber: 0,
			fiber_percent: 0
		};
	}
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
						selectedRecipe={this.props.selected}
						carbohydrates={this.state.carbohydrates}
						carbohydrates_percent={this.state.carbohydrates_percent}
						energyKcal={this.state.energyKcal}
						fat={this.state.fat}	
						fat_percent={this.state.fat_percent}
						proteins={this.state.proteins}
						proteins_percent={this.state.proteins_percent}
						sodium={this.state.sodium}
						sodium_percent={this.state.sodium_percent}
						saturatedFat={this.state.saturatedFat}
						saturatedFat_percent={this.state.saturatedFat_percent}
						sugars={this.state.sugars}
						sugars_percent={this.state.sugars_percent}
						fiber={this.state.fiber}
						fiber_percent={this.state.fiber_percent}
						inputNutriFacts={this.inputNutriFacts} />
				</Modal.Body>
			</Modal>
		);
	}
};

export default RecipeModal;