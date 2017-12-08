"use strict";

app.factory('competitionFactory', function ($q, $http, userFactory) {

const getAllCompetitions = () => {
	return $q((resolve, reject) => {
		$http.get(`http://localhost:3000/api/v1/competitions`, {
			headers: {'Authorization': `${userFactory.authTokenGetter()}`}
		}).then(results => {
			resolve(results.data);
		});
	});
};

const getSingleCompetition = (id) => {
	return $q((resolve, reject) => {
		$http.get(`http://localhost:3000/api/v1/competitions/${id}`, {
			headers: {'Authorization': `${userFactory.authTokenGetter()}`,
					  'contentType': "application/json; charset=utf-8",
     				  'dataType': "json"
					}
		}).then(results => {
			resolve(results.data);
		});
	});
};

const getTypes = () => {
	return $q((resolve, reject) => {
		$http.get(`http://localhost:3000/api/v1/competition_types`, {
			headers: {'Authorization': `${userFactory.authTokenGetter()}`}
		}).then(results => {
			resolve(results.data);
		});
	});
};

return {
	getAllCompetitions,
	getSingleCompetition,
	getTypes
};

});