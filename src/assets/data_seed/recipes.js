const recipes = [
	{
	  recipeName: "Chicken Tikka Massala",
	  recipeSteps: "",
	  recipeUrlImage: "https://res.cloudinary.com/mealzzap/image/upload/v1632921856/bbxrldefcmhldgp4jvzt.jpg",
	  recipeIngredients: "2227171007616 400 gr blac poulet\n4002359654688 20 gr crème coco\n3270190180982 400 gr tomates concassées\n5201054016060 20 gr yaourt grec",
		ingredientsArray: [
			{"barcode": "2227171007616", "quantity": "400 gr", "ingredientName": "blanc poulet"},
			{"barcode": "4002359654688", "quantity": "20 gr", "ingredientName": "crème coco"},
			{"barcode": "3270190180982", "quantity": "400 gr", "ingredientName": "tomates concassées"}, 
			{"barcode": "5201054016060", "quantity": "20 gr", "ingredientName": "yaourt grec"}
		]
	},
	{
	  recipeName: "Fusilli aux courgettes, cresson et pesto de menthe",
	  recipeSteps: "Faites cuire les fusilli dans de l’eau salée selon les indications de l’emballage. Effeuillez la menthe et le basilic.\nDétaillez la courgette en demi-lunes. Faites chauffer un peu d’huile dans une poêle à feu moyen et faites sauter les courgettes 5 min. Mixez la menthe, le basilic, les pignons de pin grillés, l’ail, le jus de citron, la moitié du parmesan et l’huile d’olive jusqu’à obtention d’un pesto. Goûtez et rectifiez l’assaisonnement.\nÉgouttez l’eau des fusilli et conservez une tasse d’eau de cuisson. Mélangez le pesto, les pâtes et l’eau de cuisson jusqu’à ce que la sauce ait une consistance crémeuse. Incorporez ensuite les courgettes et le cresson et servez avec le reste du parmesan.",
	  recipeUrlImage: "https://res.cloudinary.com/mealzzap/image/upload/v1632917646/s6sw4qygt24987m1yoo6.jpg",
	  recipeIngredients: "8076802085981 200 gr fusilli\n6 gr menthe\n6 gr basilic\n150 gr courgette\n25 gr pignons de pin\n3560070514601 25 gr parmesan\n15 gr jus de citron\n4 gr huile olive",
		ingredientsArray: [
			{
					"barcode": "8076802085981",
					"quantity": "200",
					"ingredientName": "fusilli"
			},
			{
					"barcode": "6",
					"quantity": "gr"
			},
			{
					"barcode": "6",
					"quantity": "gr"
			},
			{
					"barcode": "150",
					"quantity": "gr"
			},
			{
					"barcode": "25",
					"quantity": "gr",
					"ingredientName": "de"
			},
			{
					"barcode": "3560070514601",
					"quantity": "25",
					"ingredientName": "parmesan"
			},
			{
					"barcode": "15",
					"quantity": "gr",
					"ingredientName": "de"
			},
			{
					"barcode": "4",
					"quantity": "gr",
					"ingredientName": "olive"
			}
	] 
	},
	{
	  recipeName: "Saumon miel-moutarde au pak-choï et au riz",
	  recipeSteps: "Faites cuire le riz dans de l’eau salée selon les indications de l’emballage.\nMélangez le miel, le jus de citron, la moutarde et un mince filet d’huile d’arachide. Enduisez le saumon de marinade et laissez reposer 5 min. Coupez le pak-choï en petits morceaux. Faites chauffer un peu d’huile dans une poêle à feu moyen et faites sauter le pak-choï environ 5 min. Ajoutez la sauce soja en fin de cuisson. Mélangez bien et poivrez.\nSortez le saumon de la marinade. Faites chauffer une poêle antiadhésive à feu moyen et disposez-y le saumon. En fonction de l’épaisseur, faites cuire le poisson environ 2-3 min. de chaque côté en l’enduisant régulièrement de marinade. Servez avec le riz et le pak-choï. Garnissez avec les oignons frits.",
	  recipeUrlImage: "https://res.cloudinary.com/mealzzap/image/upload/v1632871943/saumon_miel_moutarde_rpc67q.jpg",
	  recipeIngredients: "3560070837984 150 gr riz basmati\n3560070672707 15 gr miel fleur liquide\njus de citron vert 15 gr\n2266241008351 400 gr filet saumon\n5400119514859 400 gr chou pakchoi\n4002359654404 15 gr sauce soja\n5400141044966 30 gr oignons frits\n8712100325953 15 gr mmoutarde dijon\n3265472020056 15gr huile arachide\npoivre\nsel",
		ingredientsArray: [
			{
					"barcode": "3560070837984",
					"quantity": "150",
					"ingredientName": "riz"
			},
			{
					"barcode": "3560070672707",
					"quantity": "15",
					"ingredientName": "miel"
			},
			{
					"barcode": "2266241008351",
					"quantity": "400",
					"ingredientName": "filet"
			},
			{
					"barcode": "5400119514859",
					"quantity": "400",
					"ingredientName": "chou"
			},
			{
					"barcode": "4002359654404",
					"quantity": "15",
					"ingredientName": "sauce"
			},
			{
					"barcode": "5400141044966",
					"quantity": "30",
					"ingredientName": "oignons"
			},
			{
					"barcode": "8712100325953",
					"quantity": "15",
					"ingredientName": "mmoutarde"
			},
			{
					"barcode": "3265472020056",
					"quantity": "15",
					"ingredientName": "arachide"
			}
	]
	},
	{
	  recipeName: "Croque aux pommes, poires, chicons et fromage de Herve",
	  recipeSteps: "Préchauffez le four à 180 °C. Rincez les chicons, coupez-les en deux, retirez le cône amer à la base puis détaillez-les en fines lamelles. Faites-les colorer dans une noix de beurre fondu. Assaisonnez de sel, de poivre et de noix de muscade. Mélangez puis laissez mijoter à feu doux, sans couvercle jusqu’à évaporation du liquide. Réservez. \n\nPelez et coupez la pomme et la poire en tranches pas trop fines et faites-les dorer, des deux côtés, dans une noix de beurre fondu 5 à 7 min, jusqu’à tendreté. Coupez l’oignon en fines rondelles, saupoudrez-les de sucre et faites-les dorer à feu doux dans une noix de beurre fondu. Versez le vin rouge et laissez réduire. Salez, poivrez et ajoutez une pincée de sucre si nécessaire. \n\nCoupez le Herve en tranches. Répartissez-les sur la moitié des tranches de pain. Garnissez-les de chicon, d’oignon, de pomme et de poire. Recouvrez le tout d’une tranche de pain aux noix. Faites cuire les croques des deux côtés environ 5 min, à feu doux, dans une poêle allant au four puis enfournez-les encore 10 min. ",
	  recipeUrlImage: "http://res.cloudinary.com/mealzzap/image/upload/v1632921087/kjlbrp7x1rnkgsxmglty.jpg",
	  recipeIngredients: "5411021020208 200 gr fromage herve\n150 gr chicons\n50 gr pommes\n50 gr poires\n30 gr oignons rouge\n45 gr Sucre\n25 gr vin rouge\n10 gr pain aux noix\n10 gr beurre\n2 gr sel\n2 gr poivre",
		ingredientsArray: [
			{
					"barcode": "5411021020208",
					"quantity": "200",
					"ingredientName": "fromage"
			},
			{
					"barcode": "150",
					"quantity": "gr"
			},
			{
					"barcode": "50",
					"quantity": "gr"
			},
			{
					"barcode": "50",
					"quantity": "gr"
			},
			{
					"barcode": "30",
					"quantity": "gr",
					"ingredientName": "rouge"
			},
			{
					"barcode": "45",
					"quantity": "gr"
			},
			{
					"barcode": "25",
					"quantity": "gr",
					"ingredientName": "rouge"
			},
			{
					"barcode": "10",
					"quantity": "gr",
					"ingredientName": "aux"
			},
			{
					"barcode": "10",
					"quantity": "gr"
			},
			{
					"barcode": "2",
					"quantity": "gr"
			},
			{
					"barcode": "2",
					"quantity": "gr"
			}
	] 
	},
	{
	  recipeName: "Purée de carottes, graines de moutarde soufflées et saucisses fumées",
	  recipeSteps: "Pelez les pommes de terre et les carottes et coupez-les en morceaux. Faites-les cuire al dente dans une eau bouillante légèrement salée. Égouttez les carottes et les pommes de terre et laissez évaporer toute l’humidité. Épluchez et hachez finement les oignons puis faites-les suer dans une cocotte avec le beurre, le thym et le laurier. Ajoutez les carottes et les pommes de terre et laissez mijoter à feu doux en mélangeant. Retirez le thym et le laurier et réduisez la préparation en purée. Rectifiez l’assaisonnement et réservez. \n\nPréparez les graines de moutarde soufflées. Dans une casserole, amenez l’eau à ébullition. Ajoutez les graines de moutarde, le vinaigre et le sucre impalpable. Baissez le feu et laissez mijoter à feu doux et à couvert pendant environ 30 min. \n\nFaites griller les saucisses dans une poêle avec le beurre. Répartissez la purée dans les assiettes, garnissez-la de graines de moutarde et de cerfeuil frais. Servez avec une saucisse fumée. ",
	  recipeUrlImage: "http://res.cloudinary.com/mealzzap/image/upload/v1632872753/m9dh663elxdyswcspumq.jpg",
	  recipeIngredients: "3445420013495  400 gr Saucisses fumées\n5400101213975 75 gr Beurre\n5400141163544 200 gr cerfeuil frais\n5400141382129 1000 gr Pommes de terre\n5439500000008 1000 gr Carottes\n5400112395806 200 gr Oignons\n5400141098396 20gr brins thym frais\n5400101014046 3 gr feuilles Laurier\nSel\nPoivre\n200 ml Eau\n0801541506392 40 gr Graines moutarde\n3104185002631 45 gr Vinaigre Vin blanc\n5410256003208 30 gr Sucre Impalpable",
		ingredientsArray: [
			{
					"barcode": "3445420013495",
					"quantity": "400",
					"ingredientName": "Saucisse"
			},
			{
					"barcode": "5400101213975",
					"quantity": "75",
					"ingredientName": "Beurre"
			},
			{
					"barcode": "5400141382129",
					"quantity": "1000",
					"ingredientName": "Pommes"
			},
			{
					"barcode": "5439500000008",
					"quantity": "1000",
					"ingredientName": "Carottes"
			},
			{
					"barcode": "5400112395806",
					"quantity": "200",
					"ingredientName": "Oignons"
			},
			{
					"barcode": "5410256003208",
					"quantity": "30",
					"ingredientName": "Sucre"
			}
		]
	}
  ];
  
  export default recipes;
  