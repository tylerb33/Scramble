"use strict";

app.controller('displayCompetitionsMap', function($scope, competitionFactory, userFactory) {
	
	$scope.headline = "All Competitions";

	var mymap = L.map('allCompetitionsMap').setView([36.1326942, -86.7556608], 10);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	    maxZoom: 18,
	    id: 'mapbox.streets',
	    accessToken: 'pk.eyJ1IjoidHlsZXJiMyIsImEiOiJjamF6Z3gwM3oxaHQ4MzJvOXhsZ3g3bDFlIn0.Jo7_JkWf41s181_JG0MCxQ'
	}).addTo(mymap);


// The below function is looping through the competition data from the database and pulling out the latitude and longitude of the corresponding course. Then, it is pluggin those coordinates into the 'marker maker' method provided by Leaflet.
	const createMarkersForMap = function(data) {
		console.log ("inside createMarkersForMap", data);
		
		data.forEach(function(competition) {
		let markerLatitude = competition.golf_course.latitude;
		let markerLongitude = competition.golf_course.longitude;
		
		L.marker([markerLatitude, markerLongitude]).addTo(mymap)
		     .bindPopup(`${competition.title} <br> ${competition.golf_course.title} <br> <a href="#!/details/${competition.id}" class="card-link">Details</a>`);
		});
	};


	const getAllCompetitions = () => {
		competitionFactory.getAllCompetitions().then(data => {
			$scope.isLoggedIn = userFactory.isAuthenticated();
			$scope.arrayOfCompetitions = data;
			createMarkersForMap(data);
			// console.log ("data", data);
		});
	};

	getAllCompetitions();

	// This small timeout is allowing the allCompetitionsMap div to be loaded on the DOM so it can be recognized by the initializeMap function.
	// setTimeout(initializeMap, 50);

});