'use strict';

app.controller('participationRegistrationController', function($scope, $routeParams, userFactory, paymentTypeFactory, $window, $location, $route) {



$scope.registration = {
    user_id: `${userFactory.currentUserIdGetter()}`,
    title: "",
    payment_type_id: "",
    competition_id: $routeParams.itemId
  };

  $scope.submitRegistration = () => {
    console.log ("$scope.registration", $scope.registration);
  };


  $scope.showPaymentByUser = () => {
    paymentTypeFactory.getPaymentTypesByUser().then(data => {
      console.log("payment types made it to user controller", data);
      $scope.paymentTypes = data;
    });
  };

  $scope.showPaymentByUser();


});