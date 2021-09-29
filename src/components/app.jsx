import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import Home from "./home.jsx";
import AllRecipes from "./all_recipes.jsx";
import AddRecipeForm from "./add_recipe.jsx";
import Contact from "./contact.jsx";
import recipes from "../assets/data_seed/recipes.js";
class App extends Component {

	
	componentDidMount(){
		if (localStorage.length === 0) {
			localStorage.setItem('recipes',JSON.stringify(recipes))
		}
	}
	
  render() {
    return (
			<HashRouter>
        <div id="content-container">
          <ul className="header">
						<li></li>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/recipes">Recipes</NavLink></li>
            <li><NavLink to="/add_recipe">Add a recipe</NavLink></li>
						<li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
						<Route exact path="/" component={Home}/>
            <Route path="/recipes" component={AllRecipes}/>
            <Route path="/add_recipe" component={AddRecipeForm}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
			</HashRouter>
    );
  }
}
 
export default App;