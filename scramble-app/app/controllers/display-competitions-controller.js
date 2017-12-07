"use strict";

app.controller('displayCompetitions', function($scope, competitionFactory) {
	$scope.headline = "All Competitions";
	
	$scope.showAllCompetitions = () => {
		competitionFactory.getAllCompetitions().then(data => {
			$scope.arrayOfCompetitions = data;
			console.log ("data", data);
		});
	};

	$scope.showAllCompetitions();
});