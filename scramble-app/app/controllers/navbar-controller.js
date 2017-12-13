'use strict';

app.controller('navbarController', function($scope, $routeParams, userFactory, $window, $location, $route) {

 
	$scope.isLoggedIn = function () {
		return userFactory.isAuthenticated();
	};

 	$scope.logOut = function() {
		userFactory.logOut();
		// $location.url("/");
	};

 
});