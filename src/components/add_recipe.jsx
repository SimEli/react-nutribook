import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import UploadPicture from './upload_picture';
class AddRecipeForm extends Component{
	constructor(props) {
    super(props);
    this.state = {
      recipeName: '',
			recipeSteps: '',
			recipeUrlImage: '',
			recipeIngredients: []
    };
  }

  handleChange = (event) => {
		const value = event.target.value;
    this.setState({
			[event.target.name]: value});
  }

	setImageUrl = (data) => {
		this.setState({
			recipeUrlImage: data
		});
	}

	restructureRecipeIngredients = (allIngredients) => { //! for now no verification/exclusion if there isn't barcode (ex 2 spoons spices )
		class Ingredient {
			constructor(barcode, quantity, ingredientName) {
				this.barcode = barcode;
				this.quantity = quantity;
				this.ingredientName = ingredientName;
			}
		}
		let splittedLines = [];
		//recipeIngredients: "3125647896541 250 gr farfalle\n1231235647898 500 gr tomato sauce" 
		let ingredientsByLine = allIngredients.split('\n'); //ARRAY ["3125647896541 250 gr farfalle","1231235647898 500 gr tomato sauce"]
		let ingredientsArray=[];
		for (let i = 0; i < ingredientsByLine.length; i++) {
			const element = ingredientsByLine[i].split(' ');
			splittedLines.push(element);
		}
		for (let i = 0; i < splittedLines.length; i++) {
			const barcode = splittedLines[i][0];
			let quantity = splittedLines[i][1];
			// if (splittedLines[i][2] == 'gr') { //no need now because only grams supported
			// 	quantity += splittedLines[i][2]
			// }
			const ingredientName = splittedLines[i][3];
		//	const ingredientName = splittedLines[i].slice(3); //?not useful right now to have full ingredient name in this ingredient object
			const formattedIngredient = new Ingredient(barcode, quantity, ingredientName);
			ingredientsArray.push(formattedIngredient);
		}
		return ingredientsArray;
	}

	addNewRecipeToStorage = (event) => {//! make recipeIngredients without barcode to display in details
		const { recipeName, recipeSteps, recipeUrlImage, recipeIngredients } = this.state;
		event.preventDefault(); //! ADD VALIDATION to form on NAME 
		const ingredientsArray = this.restructureRecipeIngredients(recipeIngredients);//TODO keep 'recipeIngredients to paint as it is in modal ?
		let storedRecipes = JSON.parse(localStorage.getItem('recipes'));
		let newRecipe = { "recipeName": recipeName, "recipeSteps": recipeSteps, "recipeUrlImage": recipeUrlImage, "recipeIngredients": recipeIngredients, "ingredientsArray": ingredientsArray };
		let updatedRecipes = storedRecipes.concat(newRecipe);
		localStorage.setItem('recipes', JSON.stringify(updatedRecipes));
		this.props.history.push('/recipes');
	}

  handleSubmit = (event) => {
		if (event.target[0].value === "") {
		// 	return(<Alert variant="success">
		// 	<Alert.Heading>Hey, nice to see you</Alert.Heading>
		// 	<p></p>
		// 	<hr />
		// 	<p className="mb-0"></p>
		// </Alert>)
		} else {
			this.addNewRecipeToStorage(event);
		}
  }
	
  render() {
    return (
			<div className="container">
				<h2>Add your recipe</h2>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label>Recipe Name</label>
							<input
								className="form-control"
								type="text"
								name="recipeName"
								value={this.state.recipeName}
								onChange={this.handleChange}
								placeholder="Enter the name of your recipe"
							/>
					</div>
					<div className="form-group">
						<label>Recipe Steps</label>
							<textarea
								rows="6"
								className="form-control"
								name="recipeSteps"
								value={this.state.recipeSteps}
								onChange={this.handleChange}
								placeholder="Enter the steps of your recipe"
							/>
					</div>
					<div className="form-group">
						<label>Recipe Ingredients</label>
							<textarea
								rows="6"
								className="form-control"
								name="recipeIngredients"
								value={this.state.recipeIngredients}
								onChange={this.handleChange}
								placeholder={'Please enter barcode then quantity in grams then name of ingredient.\nOne ingredient by line\n3045320104127 250 gr farfalle\n5256879809864 350 gr tomato sauce'}
							/>
					</div>
					<div className="form-group">
						<label>Add a picture of the recipe</label>
							<UploadPicture
								recipeUrlImage={this.state.recipeUrlImage}
								setImageUrl={this.setImageUrl}
								 /> 
					</div>
						
							<button type="submit" className="btn btn-primary btn-block" value="">Add</button>
						
				</form>
			</div>
    );
  }
}

export default withRouter(AddRecipeForm);