import React, { Component } from "react";
import RecipesList from "./recipes_list";

class AllRecipes extends Component {
  constructor(props){
    super(props);
    this.storageRecipes = JSON.parse(localStorage.recipes);

		this.state = {
			recipes: this.storageRecipes,
			selectedRecipe: this.storageRecipes[0],
      show: false
		};
	}

	showSelectedRecipe = (index) => {
    this.setState({
      selectedRecipe: this.storageRecipes[index]
    });
    console.log(this.storageRecipes[index]);
  }

  openModal = () => {
    this.setState({
      show:true
    });
  }

  deleteRecipe = (index) => {
		this.state.recipes.splice(index, 1);
    localStorage.setItem('recipes',JSON.stringify(this.state.recipes))
		this.setState({
			recipes: this.state.recipes
		});
	}

  closeModal = () => {
    this.setState({ show: false });
  };
  // componentDidMount(){
  //   alert('mounted');
  //   this.userRecipes = JSON.parse(localStorage.recipes);

  //   this.setState({
  //     recipes: this.userRecipes
  //   })
  // }
  render() {
    return (
      <div className="container">
        <RecipesList
          recipes={this.state.recipes}
          selectedRecipe={this.state.selectedRecipe} //! check if needed active selected
          // selectRecipe={this.selectRecipe} 
          showSelectedRecipe={this.showSelectedRecipe} 
          openModal={this.openModal}
          closeModal={this.closeModal}
          deleteRecipe={this.deleteRecipe}
          show={this.state.show}

        />
        {/* <RecipeModal 
          show={this.state.show}
          showSelectedRecipe={this.showSelectedRecipe} 
          closeModal={this.closeModal}
        /> */}
      </div>  
    );
  }
}
 
export default AllRecipes;