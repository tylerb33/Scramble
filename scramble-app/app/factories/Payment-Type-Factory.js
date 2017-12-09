"use strict";

app.factory('paymentTypeFactory', function ($q, $http, userFactory) {

	const getPaymentTypesByUser = () => {
		return $q((resolve, reject) => {
			$http.get(`http://localhost:3000/api/v1/users/${userFactory.currentUserIdGetter()}/payment_types`, {
				headers: {'Authorization': `${userFactory.authTokenGetter()}`}
			}).then(results => {
				resolve(results.data);
			});
		});
	};

	const removePaymentType = (paymentTypeId) => {
		return $q((resolve, reject) => {
			console.log ("PAYMENTtypeid", paymentTypeId);
			$http.delete(`http://localhost:3000/api/v1/users/${userFactory.currentUserIdGetter()}/payment_types/${paymentTypeId}`, {
				headers: {'Authorization': `${userFactory.authTokenGetter()}`}
			});
		});
	};

	const addPaymentType = (paymentObject) => {
		console.log ("paymentObject in factory", paymentObject);
		return $q((resolve, reject) => {
			$http.post(`http://localhost:3000/api/v1/users/${userFactory.currentUserIdGetter()}/payment_types`, paymentObject, {
				headers: {'Authorization': `${userFactory.authTokenGetter()}`}
			})
			.then( (data) => {
				resolve(data);
			});
		});
	};

	return {getPaymentTypesByUser, removePaymentType, addPaymentType};

});