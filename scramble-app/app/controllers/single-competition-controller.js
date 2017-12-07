"use strict";

app.controller('singleCompetitionController', function($scope, competitionFactory, $routeParams) {

const showCompetition = function() {
    competitionFactory.getSingleCompetition($routeParams.itemId).then(data => {
      $scope.competition = data;
    });
  };

showCompetition();

});