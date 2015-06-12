angular 
	.module('facebook-app')

	.controller('loginCtrl', function ($rootScope, $scope, $location, API_URL) {
		var vm = this;

		vm.login = function () {
			console.log('worked')
			var fb = new Firebase(API_URL);

				fb.authWithPassword({
					email: vm.email,
					password: vm.password
				}, function (err, authData) {
						if (err) {
							console.log('Error', err)
					} 	else {
							$rootScope.auth = authData;
							$scope.$apply(function () {
								$location.path('/')
							});
						}
				})		
		}
	});