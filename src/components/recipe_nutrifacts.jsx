import React, { Component } from 'react';


class NutriFacts extends Component {

	sumUpNutriments = (nutrimentsKeys,nutrimentsOfAllIngredients,totalWeightrecipe) => {
		const total = {};
		nutrimentsOfAllIngredients.forEach(ingredient => { 
			for (let [key, value] of Object.entries(ingredient)) {
				if (total[key]) {
					total[key] += value;
				} else {
					total[key] = value;
				}
			}
		});

		// console.log('total',total);
		//calculate for all nutriments needed divided by total weight recipe * 100g too render nutrifacts per 100gr of the recipe
		for (let i=0; i < nutrimentsKeys.length; i++) { 
			total[nutrimentsKeys[i]]=((+total[nutrimentsKeys[i]]/totalWeightrecipe)*100).toFixed(2);
		}
		localStorage.setItem('totalNutri', JSON.stringify(total));

		this.props.inputNutriFacts(nutrimentsKeys,total);
		
		// return total;
	};
	 
	fetchNutriFacts = (barcode,quantity,nutrimentsKeys,nutrimentsOfAllIngredients,totalWeightrecipe) => {
		fetch(`https://be-fr.openfoodfacts.org/api/v0/product/${barcode}.json?fields=nutriments`, {
			method: "get"
		})
			.then(resp => resp.json())
			.then(data => {
			let nutriments = data.product.nutriments;
			for (let i=0; i < nutrimentsKeys.length; i++) { 
				if (!isNaN(nutriments[nutrimentsKeys[i]])) {
					nutriments[nutrimentsKeys[i]]=(nutriments[nutrimentsKeys[i]]/100)*quantity;
				}else{
					nutriments[nutrimentsKeys[i]] = 0;
				}
		 	}
		  nutrimentsOfAllIngredients.push(nutriments);
			console.log(nutriments);
			this.sumUpNutriments(nutrimentsKeys,nutrimentsOfAllIngredients,totalWeightrecipe);
			})
			.catch(err => console.log(err))
	};

	componentDidMount(){
		const currentRecipe = this.props.selectedRecipe.ingredientsArray;
		console.log(currentRecipe);
		let totalWeightrecipe = 0;
		var nutrimentsOfAllIngredients = [];
		var nutrimentsKeys = ["carbohydrates","energy-kcal","fat","proteins","sodium","saturated-fat","sugars","fiber"];
		for (let i = 0; i < currentRecipe.length; i++) {
			let barcode = currentRecipe[i].barcode;
			if (barcode.length === 13 && !isNaN(barcode)) { //!only take ingredients with barcode. No barcode = no nutrifacts -_-
				barcode = parseInt(barcode);
				const quantity = parseInt(currentRecipe[i].quantity);
				if (!isNaN(quantity)){
					totalWeightrecipe += quantity;
				}
				this.fetchNutriFacts(barcode,quantity,nutrimentsKeys,nutrimentsOfAllIngredients,totalWeightrecipe);
			}
		}
		// For var key in data  
		// Divide by 100 for 1g, then * quantity. 
		// Push it in array contains all correct data by correct quantity. Then iterate inside to paint at right place. 
		// for chaque ingredient dans array, take barcode in fetch api IF BARCODE PRESENT
		// extract and store result nutriments.
		// règle de 3 pour mettre par 100G avec quantity existante
	};

	render () {
		return (
			<div className="nutrifacts-box">
				<section className="performance-facts">
					<header className="performance-facts__header" >
						<h1 className="performance-facts__title">Nutrition Facts</h1>
						<p>Amount Per 100 gr</p>
					</header>
					<table className="performance-facts__table">
						<thead>
							<tr>
								<th colSpan="3" className="small-info">
									
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th colSpan="2">
									<b>Calories {this.props.energyKcal} kcal</b>
									
								</th>
								<td>
									<b>{this.props.energyKcal_percent} %</b>
								</td>
							</tr>
							<tr className="thick-row">
								<td colSpan="3" className="small-info">
									<b>% Daily Value*</b>
								</td>
							</tr>
							<tr>
								<th colSpan="2">
									<b>Total Fat {this.props.fat} g</b>
									
								</th>
								<td>
									<b>{this.props.fat_percent} %</b>
								</td>
							</tr>
							<tr>
								<td className="blank-cell">
								</td>
								<th>
									Saturated Fat {this.props.saturatedFat} g
									
								</th>
								<td>
									<b>{this.props.saturatedFat_percent} %</b>
								</td>
							</tr>
							<tr>
								<td className="blank-cell">
								</td>
								<td>
								</td>
							</tr>
							<tr>
								<th colSpan="2">
									<b>Sodium {this.props.sodium} g</b>
									
								</th>
								<td>
									<b>{this.props.sodium_percent} %</b>
								</td>
							</tr>
							<tr>
								<th colSpan="2">
									<b>Total Carbohydrate {this.props.carbohydrates} g</b>
									
								</th>
								<td>
									<b>{this.props.carbohydrates_percent} %</b>
								</td>
							</tr>
							<tr>
								<td className="blank-cell">
								</td>
								<th>
									Dietary Fiber {this.props.fiber} g
									
								</th>
								<td>
									<b>{this.props.fiber_percent} %</b>
								</td>
							</tr>
							<tr>
								<td className="blank-cell">
								</td>
								<th>
									Sugars {this.props.sugars} g
									
								</th>
								<td className="blank-cell">
									<b>{this.props.sugars_percent} %</b>
								</td>
							</tr>
							<tr className="thick-end">
								<th colSpan="2">
									<b>Protein {this.props.proteins} g</b>
									
								</th>
								<td>
									<b>{this.props.proteins_percent} %</b>
								</td>
							</tr>
						</tbody>
					</table>

					<p className="small-info">* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs:</p>
					
					<table className="performance-facts__table--small small-info">
						<thead>
							<tr>
								<td colSpan="2"></td>
								<th>Calories:</th>
								<th>2,000</th>
								<th>2,500</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th colSpan="2">Total Fat</th>
								<td>Less than</td>
								<td>65g</td>
								<td>80g</td>
							</tr>
							<tr>
								<td className="blank-cell"></td>
								<th>Saturated Fat</th>
								<td>Less than</td>
								<td>20g</td>
								<td>25g</td>
							</tr>
							<tr>
								<th colSpan="2">Sodium</th>
								<td>Less than</td>
								<td>2,400mg</td>
								<td>2,400mg</td>
							</tr>
							<tr>
								<th colSpan="3">Total Carbohydrate</th>
								<td>300g</td>
								<td>375g</td>
							</tr>
							<tr>
								<td className="blank-cell"></td>
								<th colSpan="2">Sugars</th>
								<td>Less than</td>
								<td>90g</td>
								<td>105g</td>
							</tr>
							<tr>
								<td className="blank-cell"></td>
								<th colSpan="2">Dietary Fiber</th>
								<td>More than</td>
								<td>25g</td>
								<td>30g</td>
							</tr>
						</tbody>
					</table>


					<p className="small-info">Tool provided by <b>OpenFoodFacts.org</b></p>
				</section>
			</div>
		);
	}
};

export default NutriFacts;