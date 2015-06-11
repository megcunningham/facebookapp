angular
  .module('facebook-app', [ ])
  
  .constant('API_URL', 'https://cohort9-fbapp.firebaseio.com/')

  .factory('Person', function ($http, API_URL) {
  	return {
  		create(data, cb) {
  			$http
  			.post(`${API_URL}/people.json`, data)
  			.success(cb);
  		}
  	}
  })

  .controller('CreateProfile', function (Person) {
  	var vm = this;

  	vm.saveAddress = function () {
  		console.log('hey');
  		Person.create(vm.people, function() {
  			console.log('hey')
  		})
  	};
  })
  