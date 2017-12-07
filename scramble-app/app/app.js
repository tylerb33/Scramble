"use strict";

const app = angular.module("ScrambleApp", ['ngRoute']);

app.config(($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/landingpage.html',
		controller: ''
	})
	.when('/competitions', {
		templateUrl: 'partials/display_competitions.html',
		controller: 'displayCompetitions'
	})
	.when('/create', {
		templateUrl: 'partials/create_competition_form.html',
		controller: 'createCompetition'
	})
	.when('/details/:itemId', {
		templateUrl: 'partials/competition_detail.html',
		controller: 'singleCompetitionController'
	})
	.when('/login', {
		templateUrl: 'partials/login_form.html',
		controller: 'UserController'
	})
	.otherwise('/');
});