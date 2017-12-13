"use strict";

app.factory('userFactory', function ($q, $http) {

	let currentUserToken;
	let currentUserId;
	let loggedIn = false;

    const isAuthenticated = () => {
    	console.log ("logged in status in user factory", loggedIn);
    	return loggedIn;
	};

	const authTokenGetter = () => {
		return currentUserToken;
	};

	const currentUserIdGetter = () => {
		return parseInt(currentUserId);
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

	const logOut = () => {
		loggedIn = false;
		console.log ("User is logged out.");
		currentUserToken = null;
		currentUserId = null;
		console.log ("Current User Info After Logout", "logged in?", loggedIn, "token?", currentUserToken, "user id?", currentUserId);	
	};

	const authenticate = (emailPasswordObject) => {
		return $q((resolve, reject) => {
			$http.post(`http://localhost:3000/api/v1/authenticate`, emailPasswordObject)
			// console.log("AUTHENTICATED DATA RETURN", data);
			.then(data => {
				loggedIn = true;
				// console.log("AUTHENTICATED DATA RETURN", data);
				currentUserToken = data.data.auth_token;
				currentUserId = data.data.user_id;
				console.log ("token", currentUserToken, "user_id", currentUserId, "logged in?", isAuthenticated());
				resolve(data);
			// }, (error) => {
			// 	let errorCode = error.code;
			// 	let errorMessage = error.message;
			// 	console.log ("error", errorCode, errorMessage);
			});
		});
	};

	return {getAllUsers, addUser, logOut, authenticate, authTokenGetter, currentUserIdGetter, isAuthenticated};
});