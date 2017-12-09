"use strict";

app.factory('golfCourseFactory', function ($q, $http, userFactory) {

	const getAllGolfCourses = () => {
		return $q((resolve, reject) => {
			$http.get(`http://localhost:3000/api/v1/golf_courses`, {
				headers: {'Authorization': `${userFactory.authTokenGetter()}`}
			}).then(results => {
				resolve(results.data);
			});
		});
	};

	const getSingleGolfCourse = (golfCourseId) => {
		return $q((resolve, reject) => {
			$http.get(`http://localhost:3000/api/v1/golf_courses/${golfCourseId}`, {
				headers: {'Authorization': `${userFactory.authTokenGetter()}`}
			}).then(results => {
				resolve(results.data);
			});
		});
	};


	return {getAllGolfCourses, getSingleGolfCourse};

});