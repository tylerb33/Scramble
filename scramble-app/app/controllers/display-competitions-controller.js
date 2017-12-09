"use strict";

app.controller('displayCompetitions', function($scope, competitionFactory) {
	$scope.headline = "All Competitions";
	

	const initializeMap = function () {

		var mymap = L.map('allCompetitionsMap').setView([38.2946272, -86.9749989], 13);

		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		    maxZoom: 18,
		    id: 'mapbox.streets',
		    accessToken: 'pk.eyJ1IjoidHlsZXJiMyIsImEiOiJjamF6Z3gwM3oxaHQ4MzJvOXhsZ3g3bDFlIn0.Jo7_JkWf41s181_JG0MCxQ'
		}).addTo(mymap);

	};

	const createMarkersForMap = function(data) {
		console.log ("inside createMarkersForMap", data);
	};

	$scope.showAllCompetitions = () => {
		competitionFactory.getAllCompetitions().then(data => {
			$scope.arrayOfCompetitions = data;
			createMarkersForMap(data);
			// console.log ("data", data);
		});
	};

	$scope.showAllCompetitions();

	// This small timeout is allowing the allCompetitionsMap div to be loaded on the DOM so it can be recognized by the initializeMap function.
	setTimeout(initializeMap, 50);

});