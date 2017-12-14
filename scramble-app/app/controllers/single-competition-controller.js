"use strict";

app.controller('singleCompetitionController', function($scope, competitionFactory, golfCourseFactory, userFactory, $routeParams, $location) {

// let latitude = 45.444;
// let longitude = -85.2233;

const initializeMap = function (latitude, longitude) {

	var mymap = L.map('mapid').setView([latitude, longitude], 15);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	    maxZoom: 18,
	    id: 'mapbox.streets',
	    accessToken: 'pk.eyJ1IjoidHlsZXJiMyIsImEiOiJjamF6Z3gwM3oxaHQ4MzJvOXhsZ3g3bDFlIn0.Jo7_JkWf41s181_JG0MCxQ'
	}).addTo(mymap);

};


// The below showCompetition function is retrieving a single competition from the competition factory, then it is pulling out the latitude and longitude + calling the initializeMap function passing in lat and long in order to set the maps center.
  const showCompetition = function() {
    competitionFactory.getSingleCompetition($routeParams.itemId).then(data => {
      // let golfCourseId = data.golf_course.id;
      let latitude = data.golf_course.latitude;
      let longitude = data.golf_course.longitude;
      console.log ("WHAT HERE", data);
      $scope.competition = data;
      initializeMap(latitude, longitude);
    });
  };


  const getUserAverageScoresOfCompetition = function() {
    let sumOfScores = 0;
    $scope.countOfScores = 0;

    competitionFactory.getUserAverageScoresOfCompetition($routeParams.itemId)
      .then((data) => {
        data.forEach(function (single_score) {
          sumOfScores += single_score.team_average_score;
          $scope.countOfScores++;
          $scope.averageOfScores = sumOfScores/$scope.countOfScores;
        });
    });
  };



   $scope.deleteCompetition = function (id) {
    competitionFactory.removeCompetition(id)
    .then((response) => {
            $location.url("/competitions");
          });
  };

  $scope.currentUserId = userFactory.currentUserIdGetter();


showCompetition();
getUserAverageScoresOfCompetition();

});