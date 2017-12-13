"use strict";

app.controller('displayCompetitions', function($scope, competitionFactory, userFactory) {
	
	$scope.headline = "Competitions Map";


	const getAllCompetitions = () => {
		competitionFactory.getAllCompetitions().then(data => {
			$scope.isLoggedIn = userFactory.isAuthenticated();
			$scope.arrayOfCompetitions = data;
			// console.log ("data", data);
		});
	};

	getAllCompetitions();

	// This small timeout is allowing the allCompetitionsMap div to be loaded on the DOM so it can be recognized by the initializeMap function.
	// setTimeout(initializeMap, 50);

});