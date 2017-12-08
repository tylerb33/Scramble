"use strict";

app.factory('golfCourseFactory', function ($q, $http, userFactory) {

	const getAllGolfCourses = () => {
		let golfCoursesArray = [];

		return $q((resolve, reject) => {
			$http.get(`http://localhost:3000/api/v1/golf_courses`, {
				headers: {'Authorization': `${userFactory.authTokenGetter()}`}
			}).then(results => {
				resolve(results.data);
			});
		});
	};


	return {getAllGolfCourses};

});