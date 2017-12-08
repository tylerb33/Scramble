"use strict";

app.controller('paymentTypesController', function($scope, paymentTypeFactory) {

	$scope.showPaymentByUser = () => {
		paymentTypeFactory.getPaymentTypesByUser().then(data => {
			console.log ("made it to payment types controller", data);
		});
	};

	$scope.showAllCompetitions();

});