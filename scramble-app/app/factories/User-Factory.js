"use strict";

app.factory('userFactory', function ($q, $http) {

	let currentUserToken;
	let currentUserId;
	let loggedIn = false;

	const authTokenGetter = () => {
		return currentUserToken;
	};

	const currentUserIdGetter = () => {
		return currentUserId;
	};

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

	const addUser = function(userObject) {
		return $q((resolve, reject) => {
			console.log ("userObject", userObject);
			$http.post(`http://localhost:3000/api/v1/users`, userObject)
			.then( (data) => {
				currentUserId = data.data.id;
				console.log ("currentUserId", currentUserId);
				resolve(data);
			// }, (error) => {
			// 	let errorCode = error.code;
			// 	let errorMessage = error.message;
			// 	console.log ("error", errorCode, errorMessage);
			});

		});
	};

	const authenticate = (emailPasswordObject) => {
		return $q((resolve, reject) => {
			$http.post(`http://localhost:3000/api/v1/authenticate`, emailPasswordObject)
			// console.log("AUTHENTICATED DATA RETURN", data);
			.then(data => {
				// console.log("AUTHENTICATED DATA RETURN", data);
				currentUserToken = data.data.auth_token;
				currentUserId = data.data.user_id;
				loggedIn = true;
				console.log ("token", currentUserToken, "user_id", currentUserId);
				resolve(data);
				// console.log ("FOR USE THROUGHOUT SITE", authTokenGetter());
			// }, (error) => {
			// 	let errorCode = error.code;
			// 	let errorMessage = error.message;
			// 	console.log ("error", errorCode, errorMessage);
			});
		});
	};

	return {getAllUsers, addUser, authenticate, authTokenGetter, currentUserIdGetter};
});