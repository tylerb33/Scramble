"use strict";

app.controller('singleCompetitionController', function($scope, competitionFactory, golfCourseFactory, $routeParams) {

const showCompetition = function() {
    competitionFactory.getSingleCompetition($routeParams.itemId).then(data => {
      $scope.competition = data;
    });
};

showCompetition();

});