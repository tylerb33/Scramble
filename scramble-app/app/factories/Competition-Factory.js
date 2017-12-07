"use strict";

app.factory('competitionFactory', function ($q, $http) {

const getAllCompetitions = () => {
	let competitionsArray = [];

	return $q((resolve, reject) => {
		$http.get(`http://localhost:3000/api/v1/competitions`, {
			headers: {'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozMSwiZXhwIjoxNTEyNzAxMzc2fQ.c1MkZkKsiYTPCpTTNM5TfxilwJs0Gn_uCYqTHuBp18Y'}
		}).then(results => {
			resolve(results.data);
		});
	});
};

const getSingleCompetition = (id) => {
	return $q((resolve, reject) => {
		$http.get(`http://localhost:3000/api/v1/competitions/${id}`).then(results => {
			resolve(results.data);
		});
	});
};

return {
	getAllCompetitions,
	getSingleCompetition
};

});