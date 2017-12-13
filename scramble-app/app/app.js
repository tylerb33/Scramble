"use strict";

const app = angular.module("ScrambleApp", ['ngRoute']);

//This checks to see if the user is logged in, isAuth sets a true of false variable that will be used to check if the route is okay. 
let isAuth = (userFactory) => {
	console.log ("value of isAuth function", userFactory.isAuthenticated());
	return userFactory.isAuthenticated();
};
// console.log ("value of isAuth", userFactory => userFactory.isAuthenticated());

app.config(($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/landingpage.html',
		controller: ''
	})
	.when('/login', {
		templateUrl: 'partials/login_form.html',
		controller: 'UserController',
	})
	.when('/competitions', {
		templateUrl: 'partials/display_competitions.html',
		controller: 'displayCompetitions'
	})
	.when('/create', {
		templateUrl: 'partials/create_competition_form.html',
		controller: 'createCompetitionController',
		resolve: {isAuth}
	})
	.when('/details/:itemId', {
		templateUrl: 'partials/competition_detail.html',
		controller: 'singleCompetitionController',
		resolve: {isAuth}
	})
	.when('/signup', {
		templateUrl: 'partials/signup_form.html',
		controller: 'UserController'
	})
	.when('/account', {
		templateUrl: 'partials/user_details.html',
		controller: 'UserController',
		resolve: {isAuth}
	})
	.when('/new_payment', {
		templateUrl: 'partials/create_payment_type_form.html',
		controller: 'paymentTypesController',
		resolve: {isAuth}
	})
	.when('/competitionmap', {
		templateUrl: 'partials/display_competitions_map.html',
		controller: 'displayCompetitionsMap'
	})
	.when('/paymentType/:itemId', {
		templateUrl: 'partials/create_payment_type_form.html',
		controller: 'editPaymentTypeController',
		resolve: {isAuth}
    })
	.when('/competition/:itemId', {
		templateUrl: 'partials/create_competition_form.html',
		controller: 'editCompetitionController'
    })
    .when('/participant/signup/:itemId', {
		templateUrl: 'partials/participation_registration_form.html',
		controller: 'participationRegistrationController',
		resolve: {isAuth}
    })
    .when('/registration/confirmation', {
		templateUrl: 'partials/registration_confirmation.html',
		controller: '',
		resolve: {isAuth}
    })
	.otherwise('/');
});
