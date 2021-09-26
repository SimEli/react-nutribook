import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import UploadPicture from './upload_picture';
import Alert from 'react-bootstrap/Alert';
class AddRecipeForm extends Component{
	constructor(props) {
    super(props);
    this.state = {
      recipeName: '',
			recipeSteps: '',
			recipeUrlImage: '',
			recipeIngredients: ''
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

  handleSubmit = (event,props) => {
		debugger
		if (event.target[0].value === "") {
		// 	return(<Alert variant="success">
		// 	<Alert.Heading>Hey, nice to see you</Alert.Heading>
		// 	<p>
		// 		Aww yeah, you successfully read this important alert message. This example
		// 		text is going to run a bit longer so that you can see how spacing within an
		// 		alert works with this kind of content.
		// 	</p>
		// 	<hr />
		// 	<p className="mb-0">
		// 		Whenever you need to, be sure to use margin utilities to keep things nice
		// 		and tidy.
		// 	</p>
		// </Alert>)
		} else {
			const { recipeName, recipeSteps, recipeUrlImage, recipeIngredients } = this.state
			event.preventDefault(); //! ADD VALIDATION to form on NAME 
			let storedRecipes = JSON.parse(localStorage.getItem('recipes'));
			// let recipeId = storedRecipes.length+1;
			let newRecipe = {"recipeName":recipeName, "recipeSteps":recipeSteps, "recipeUrlImage":recipeUrlImage, "recipeIngredients":recipeIngredients};
			let updatedRecipes = storedRecipes.concat(newRecipe);
			// localStorage.clear()
			localStorage.setItem('recipes',JSON.stringify(updatedRecipes));
			this.props.history.push('/recipes');
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