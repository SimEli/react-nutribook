import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div className="container">
        <h2>Welcome to NutriBook !</h2>
        <br></br>
          <p className="home">Our NutriBook will store your favorite recipes with all the ingredients and steps.</p>
          <p className="home">When your recipes are added, you can even view their nutrifacts !</p>
      </div>
    );
  }
}
 
export default Home;