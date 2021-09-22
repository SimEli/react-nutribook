import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import Home from "./home.jsx";
import AllRecipes from "./all_recipes.jsx";
import AddRecipe from "./add_recipe.jsx";
import Contact from "./contact.jsx";
 
class App extends Component {
	constructor(props){
		super(props);
	}
  render() {
    return (
			<HashRouter>
        <div>
          <h1>NutriBook</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/recipes">Recipes</NavLink></li>
            <li><NavLink to="/add_recipe">Add a recipe</NavLink></li>
						<li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
						<Route exact path="/" component={Home}/>
            <Route path="/recipes" component={AllRecipes}/>
            <Route path="/add_recipe" component={AddRecipe}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
			</HashRouter>
    );
  }
}
 
export default App;