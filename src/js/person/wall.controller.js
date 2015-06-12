angular
	.module('facebook-app')

	.controller('myWall', function ($routeParams, Person) {
		var vm = this;
		vm.id = $routeParams.id

		vm.getWall = function () {
			Person.getOne(vm.id, function (data) {
				vm.myProfile = data;
				console.log('pulled your wall');
				console.log(vm.id);
				console.log(vm.myProfile)
				console.log($routeParams.id)
			})
		}

		// fb.onAuth(function (authData, myWall) {
  // 			if (authData) {
  //   			console.log("Bitch you in!");
  //   			vm.getWall();
  // 			} else {
  //   			console.log("Nah Son")
  // 			}
		// });

	})

