"use strict";
app.controller("UserController", function($scope, $window, userFactory, $location, paymentTypeFactory, competitionFactory) {

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

	// *** All below are used to populate the user account detail page  *** //

	$scope.showPaymentByUser = () => {
		paymentTypeFactory.getPaymentTypesByUser().then(data => {
			console.log("payment types made it to user controller", data);
			$scope.paymentTypes = data;
		});
	};

	$scope.showUpcomingCompetitionsByUser = () => {
		competitionFactory.getUpcomingCompetitionsByUser().then(data => {
			console.log("upcoming competitions made it to user controller", data);
			$scope.upcomingCompetitions = data;
		});
	};

	$scope.deletePaymentType = (paymentTypeId) => {
		// console.log ("paymentTypeId", paymentTypeId);
		paymentTypeFactory.removePaymentType(paymentTypeId).then(data => {
			console.log ("deleted payment type", data);
		});
	};


	$scope.showPaymentByUser();
	$scope.showUpcomingCompetitionsByUser();
});