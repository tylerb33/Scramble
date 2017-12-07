"use strict";

app.factory('userFactory', function ($q, $http) {

		const getAllUsers = () => {
		let UsersArray = [];

		return $q((resolve, reject) => {
			$http.get(`http://localhost:3000/api/v1/users`, {
				headers: {'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozMSwiZXhwIjoxNTEyNzAxMzc2fQ.c1MkZkKsiYTPCpTTNM5TfxilwJs0Gn_uCYqTHuBp18Y'}
			}).then(results => {
				resolve(results.data);
			});
		});
	};
});