"use strict";

app.controller('singleCompetitionController', function($scope, competitionFactory, golfCourseFactory, $routeParams) {

// let latitude = 45.444;
// let longitude = -85.2233;

const initializeMap = function (latitude, longitude) {

	var mymap = L.map('mapid').setView([latitude, longitude], 13);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
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
      $scope.competition = data;
      initializeMap(latitude, longitude);
    });
};

showCompetition();

});