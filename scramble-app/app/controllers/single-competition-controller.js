"use strict";

app.controller('singleCompetitionController', function($scope, competitionFactory, golfCourseFactory, $routeParams) {



	var mymap = L.map('mapid').setView([51.505, -0.09], 13);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	    maxZoom: 18,
	    id: 'mapbox.streets',
	    accessToken: 'pk.eyJ1IjoidHlsZXJiMyIsImEiOiJjamF6Z3gwM3oxaHQ4MzJvOXhsZ3g3bDFlIn0.Jo7_JkWf41s181_JG0MCxQ'
	}).addTo(mymap);


const showCompetition = function() {
    competitionFactory.getSingleCompetition($routeParams.itemId).then(data => {
      $scope.competition = data;
    });
};


showCompetition();

});