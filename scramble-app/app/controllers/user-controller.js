"use strict";
app.controller("UserController", function($scope, $window, userFactory, $location) {

	$scope.headline = "Log In";

	$scope.account = {
		first_name: "",
		last_name: "",
		city: "",
		state: "",
		postal_code: "",
		email: "",
		password: "",
		password_confirmation: ""
	};

	$scope.creds = {
		email: "",
		password: ""
	};


	$scope.submitUser = function() {
		const finalAccountObj = {"user": $scope.account};
		const finalAccountObjString = JSON.stringify(finalAccountObj);
		userFactory.addUser(finalAccountObjString)
			.then((data) => {
				$location.url("/competitions");
				// console.log ("DATA FROM USER SUBMIT", data);
				
		});
	};

	$scope.logIn = function() {
		// console.log ("$scope.creds", $scope.creds);
		userFactory.authenticate($scope.creds)
			.then((data) => {
				$location.url("/competitions");
				// console.log ("DATA BACK TO CONTROLLER", data);
			});
	};

});