"use strict";

app.factory('competitionFactory', function ($q, $http, userFactory) {

	const getAllCompetitions = () => {
		return $q((resolve, reject) => {
			$http.get(`http://localhost:3000/api/v1/competitions`, {
				headers: {'Authorization': `${userFactory.authTokenGetter()}`}
			}).then(results => {
				console.log ("results", results);
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

	const getPlannedCompetitionsByUser = () => {
		return $q((resolve, reject) => {
			$http.get(`http://localhost:3000/api/v1/users/${userFactory.currentUserIdGetter()}/competitions`, {
				headers: {'Authorization': `${userFactory.authTokenGetter()}`}
			}).then(results => {
				resolve(results.data);
			});
		});
	};

	const getUpcomingCompetitionsByUser = () => {
		return $q((resolve, reject) => {		
			$http.get(`http://localhost:3000/api/v1/custom/${userFactory.currentUserIdGetter()}/competitions`, {
				headers: {'Authorization': `${userFactory.authTokenGetter()}`}
			}).then(results => {
				resolve(results.data);
			});
		});
	};

	const addCompetition = (competitionObject) => {
		return $q((resolve, reject) => {
			$http.post(`http://localhost:3000/api/v1/competitions`, competitionObject, {
				headers: {'Authorization': `${userFactory.authTokenGetter()}`}
			}).then( (data) => {
				resolve(data);
			});
		});
	};

	const submitUpdatedCompetition = function(competitionId, editedCompetition) {
	    return $q((resolve, reject) => {
	      let stringifyObject = JSON.stringify(editedCompetition);
	      $http
	        .patch(`http://localhost:3000/api/v1/competitions/${competitionId}`, stringifyObject, {
				headers: {'Authorization': `${userFactory.authTokenGetter()}`}
			})
	        .then(data => {
	          resolve(data);
	        })
	        .catch(error => {
	          reject(error);
	        });
	    });
  	};

	return {
		getUpcomingCompetitionsByUser,
		getPlannedCompetitionsByUser,
		submitUpdatedCompetition,
		getSingleCompetition,
		getAllCompetitions,
		addCompetition,
		getTypes
	};

});