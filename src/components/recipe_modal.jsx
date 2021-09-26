import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";

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
					<div className="details-box">
						<h5 className="ingredients-title">Ingredients</h5>
							<p className="ingredients-details">
								{this.props.selected.recipeIngredients}
							</p>
					</div>
					<div className="details-box">
						<h5 className="steps-title">Steps</h5>
							<p className="steps-details">
								{this.props.selected.recipeSteps}
							</p>
					</div>
					<div className="image-box">
						{/* <h5 className="steps-title">Image</h5> */}
						<div className="card_recipe_img" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),url('${this.props.selected.recipeUrlImage}')`}}></div>
						</div>
				</Modal.Body>
				<Modal.Footer>This is the footer</Modal.Footer>
			</Modal>
		);
	}
};

export default RecipeModal;