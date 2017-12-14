'use strict';

app.controller('participationRegistrationController', function($scope, $routeParams, userFactory, paymentTypeFactory, competitionFactory, $window, $location, $route) {



$scope.registration = {
    user_id: `${userFactory.currentUserIdGetter()}`,
    team_name: "",
    payment_type_id: "",
    team_average_score: "",
    competition_id: $routeParams.itemId
  };

  $scope.submitRegistration = () => {
    console.log ("submitting this object", $scope.registration);
    const finalRegistrationObj = {"competition_user": $scope.registration};
    const finalRegistrationObjString = JSON.stringify(finalRegistrationObj);
    competitionFactory.addRegistration(finalRegistrationObjString)
      .then((data) => {
        $location.url("/registration/confirmation");
      });
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

  $scope.showPaymentByUser = () => {
    paymentTypeFactory.getPaymentTypesByUser().then(data => {
      console.log("payment types made it to user controller", data);
      $scope.paymentTypes = data;
    });
  };

  $scope.showPaymentByUser();


});