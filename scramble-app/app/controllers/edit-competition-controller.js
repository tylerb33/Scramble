'use strict';

app.controller('editCompetitionController', function($scope, $routeParams, golfCourseFactory, competitionFactory, $window, $location, $route) {

  // $scope.newCaseTitle = 'Case Details';
  // $scope.submitButtonText = 'Submit Edited Case';

  $scope.competition_details = {
		description: "",
		competition_type_id: "",
		golf_course_id: "",
		title: "",
		date: "",
		time: "",
		contact_email: "",
		entry_fee: ""
	};

  $scope.showSingleCompetition = () => {
    competitionFactory.getSingleCompetition($routeParams.itemId).then(data => {
      $scope.competition_details = data;
    });
  };

  $scope.submitCompetition = function() {
    competitionFactory.submitUpdatedCompetition($routeParams.itemId, $scope.competition_details)
      .then((response) => {
        console.log ("response", response);
          $location.url("/account");
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

  
  // $scope.deleteCompetition = function (id) {
  //   competitionFactory.removeCompetition(id).then(data => {
  //     console.log("data from competition delete", id);
  //   });
  // };

	getCompetitionTypes();
	getGolfCourses();


  $scope.showSingleCompetition();
});

