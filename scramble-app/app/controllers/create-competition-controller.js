"use strict";

app.controller('createCompetitionController', function($scope, competitionFactory, golfCourseFactory, $routeParams) {

	const getCompetitionTypes = function() {
		competitionFactory.getTypes().then(data => {
			console.log ("data from competition types", data);
			$scope.competitionTypes = data;
		});
	};

	const getGolfCourses = function() {
		golfCourseFactory.getAllGolfCourses().then(data => {
			console.log ("data from golf courses", data);
			$scope.golfCourses = data;
		});
	};

	getCompetitionTypes();
	getGolfCourses();


});