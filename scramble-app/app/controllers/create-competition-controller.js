"use strict";

app.controller('createCompetition', function($scope, competitionFactory) {
	$scope.headline = "Create a Competition";
	
	// $scope.showAllCompetitions = () => {
	// 	competitionFactory.getAllCompetitions().then(data => {
	// 		$scope.allCompetitions = data;
	// 		console.log ("DATA", data);
	// 	});
	// };

	// $scope.showAllCompetitions();
});