"use strict";

app.controller('createCompetitionController', function($scope, competitionFactory, golfCourseFactory, userFactory, $routeParams, $location) {


	$scope.competition_details = {
		user_id: `${userFactory.currentUserIdGetter()}`,
		description: "",
		competition_type_id: "",
		golf_course_id: "",
		title: "",
		date: "",
		time: "",
		contact_email: "",
		entry_fee: ""
	};

	$scope.submitCompetition = function() {
		console.log("competition date for editing", new Date($scope.competition_details.date));
		const finalCompetitionObj = {"competition": $scope.competition_details};
		console.log ("finalPaymentObj in controller", $scope.competition_details);
		const finalCompetitionObjString = JSON.stringify(finalCompetitionObj);
		competitionFactory.addCompetition(finalCompetitionObjString)
			.then((data) => {
				$location.url("/competitions");
				// console.log ("DATA FROM USER SUBMIT", data);			
		});
	};




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