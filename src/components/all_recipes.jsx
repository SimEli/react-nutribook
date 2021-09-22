import React, { Component } from "react";
import RecipesList from "./recipes_list";
import recipes from "../assets/data_seed/recipes.js";

class AllRecipes extends Component {
  constructor(props){
		super(props);
		this.state = {
			selectedRecipe: recipes[0],
			recipes
		};
	}

	selectRecipe = (index) => {
    this.setState({ selectedRecipe: recipes[index] });
  }
  render() {
    return (
      <RecipesList
          recipes={this.state.recipes}
          selectedRecipe={this.state.selectedRecipe}
          selectRecipe={this.selectRecipe}
        />
    );
  }
}
 
export default AllRecipes;