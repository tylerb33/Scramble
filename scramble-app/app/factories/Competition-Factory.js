"use strict";

app.factory('competitionFactory', function ($q, $http, userFactory) {

const getAllCompetitions = () => {
	let competitionsArray = [];

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
			headers: {'Authorization': `${userFactory.authTokenGetter()}`}
		}).then(results => {
			resolve(results.data);
		});
	});
};

return {
	getAllCompetitions,
	getSingleCompetition
};

});