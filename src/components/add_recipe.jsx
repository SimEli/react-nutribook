import React, { Component } from 'react';
 
class AddRecipeForm extends Component{
	constructor(props) {
    super(props);
    this.state = {
      recipeName: '',
			recipeSteps: '',
			recipeImage: '',
			recipeIngredients: ''
    };
  }

  handleChange = (event) => {
		const value = event.target.value;
    this.setState({
			[event.target.name]: value});
  }

  handleSubmit = (event) => {
    const { recipeName, recipeSteps, recipeImage, recipeIngredients } = this.state
		event.preventDefault();
		// alert(`
    //   New Recipe Added Successfully\n
    //   Recipe Name: ${recipeName}
    //   Steps: ${recipeSteps}
		// 	Image: ${recipeImage}
		// 	Ingredients: ${recipeIngredients}
    // `)
		// console.log(localStorage.length);

		let recipeId = (localStorage.length)+1;
		console.log(recipeId);
		let newRecipe = {"recipeName":recipeName, "recipeSteps":recipeSteps, "recipeImage":recipeImage, "recipeIngredients":recipeIngredients};
		localStorage.setItem('recipe_id_'+`${recipeId}`,JSON.stringify(newRecipe));

		this.setState = { //no reset to blank
      recipeName: '',
			recipeSteps: '',
			recipeImage: '',
			recipeIngredients: ''
    };
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
							/>
					</div>
					<div className="form-group">
						<label>Recipe Ingredients <p>Please enter barcode then quantity in grams then name of ingredient. One ingredient by line</p></label>
							<textarea
								rows="6"
								className="form-control"
								name="recipeIngredients"
								value={this.state.recipeIngredients}
								onChange={this.handleChange}
							/>
					</div>
					<div className="form-group">
					<label>Add a picture of the recipe</label>
						<input
							className="form-control-file"
							type="file"
							name="recipeImage"
							value={this.state.recipeImage}
							onChange={this.handleChange}
						/>
					</div>
							<button type="submit" className="btn btn-primary btn-block" value="">Add</button>
				</form>
			</div>
    );
  }
}

export default AddRecipeForm;