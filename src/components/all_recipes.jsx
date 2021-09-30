import React, { Component } from "react";
import RecipesList from "./recipes_list";

class AllRecipes extends Component {
  constructor(props){
    super(props);
    this.storageRecipes = JSON.parse(localStorage.recipes);

		this.state = {
			recipes: this.storageRecipes,
			selectedRecipe: this.storageRecipes[0],
      show: false,
      carbohydrates: 0,
			carbohydrates_percent: 0,
			energyKcal: 0,
      energyKcal_percent: 0,
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

  	showSelectedRecipe = (index) => {
    this.setState({
      selectedRecipe: this.storageRecipes[index]
    });
    // console.log(this.storageRecipes[index]);
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

  
	inputNutriFacts = (nutrimentsKeys) => {
    let total = JSON.parse(localStorage.getItem('totalNutri'));
		// for (let i = 0; i < nutrimentsKeys.length; i++) {
			console.log('X',total['carbohydrates']);
		this.setState({
			// nutrimentsKeys[i]: total[nutrimentsKeys[i]]
			carbohydrates: total['carbohydrates'],
			carbohydrates_percent: ((+total['carbohydrates']/270)*100).toFixed(1),
			energyKcal: total['energy-kcal'],
      energyKcal_percent:((+total['energy-kcal']/2000)*100).toFixed(1),
			fat: total['fat'],
			fat_percent: ((+total['fat']/70)*100).toFixed(1),
			proteins: total['proteins'],
			proteins_percent: ((+total['proteins']/50)*100).toFixed(1),
			sodium: total['sodium'],
			sodium_percent:((+total['sodium']/2.4)*100).toFixed(1),
			saturatedFat: total['saturated-fat'],
			saturatedFat_percent: ((+total['saturated-fat']/200)*100).toFixed(1),
			sugars: total['sugars'],
			sugars_percent: ((+total['sugars']/900)*100).toFixed(1),
			fiber: total['fiber'],
			fiber_percent: ((+total['fiber']/25)*100).toFixed(1)
		});
		// }
	}

  render() {
    return (
      <div className="container">
        <h2>All your recipes</h2>
        <RecipesList
          recipes={this.state.recipes}
          selectedRecipe={this.state.selectedRecipe} //! check if needed active selected
          // selectRecipe={this.selectRecipe} 
          showSelectedRecipe={this.showSelectedRecipe} 
          openModal={this.openModal}
          closeModal={this.closeModal}
          deleteRecipe={this.deleteRecipe}
          show={this.state.show}
          carbohydrates={this.state.carbohydrates}
          carbohydrates_percent={this.state.carbohydrates_percent}
          energyKcal={this.state.energyKcal}
          energyKcal_percent={this.state.energyKcal_percent}
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
          inputNutriFacts={this.inputNutriFacts}
        />
      </div>  
    );
  }
}
 
export default AllRecipes;