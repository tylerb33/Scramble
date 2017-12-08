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

	return {getPaymentTypesByUser};

});