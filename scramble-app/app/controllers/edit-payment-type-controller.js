'use strict';

app.controller('editPaymentTypeController', function($scope, $routeParams, paymentTypeFactory, $window, $location, $route) {

  $scope.headline = "Edit Payment Type";
  // $scope.newCaseTitle = 'Case Details';
  // $scope.submitButtonText = 'Submit Edited Case';

  $scope.newPaymentType = {
    title: "",
    card_number: "",
    name_on_card: "",
    csc: ""
  };

  $scope.showSinglePayment = () => {
    paymentTypeFactory.getSinglePayment($routeParams.itemId).then(data => {
      $scope.newPaymentType = data.data;
    });
  };

  $scope.submitPaymentType = function() {
    paymentTypeFactory.submitUpdatedPayment($routeParams.itemId, $scope.newPaymentType)
      .then((response) => {
        console.log ("response", response);
          $location.url("/account");
      });
  };


  $scope.showSinglePayment();
});