"use strict";

app.controller('paymentTypesController', function($scope, paymentTypeFactory, userFactory, $location) {

$scope.headline = "Add a Payment Type";

	$scope.showPaymentByUser = () => {
		paymentTypeFactory.getPaymentTypesByUser().then(data => {
			console.log ("made it to payment types controller", data);
		});
	};

	$scope.newPaymentType = {
		user_id: `${userFactory.currentUserIdGetter()}`,
		title: "",
		card_number: "",
		name_on_card: "",
		csc: ""
	};


	$scope.submitPaymentType = function() {
		const finalPaymentObj = {"payment_type": $scope.newPaymentType};
		console.log ("finalPaymentObj in controller", $scope.newPaymentType);
		const finalPaymentObjString = JSON.stringify(finalPaymentObj);
		paymentTypeFactory.addPaymentType(finalPaymentObjString)
			.then((data) => {
				$location.url("/account");
				// console.log ("DATA FROM USER SUBMIT", data);			
		});
	};

	$scope.showPaymentByUser();

});