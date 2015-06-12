angular.module('facebook-app').controller('CreateProfile', function (API_URL, Person, $scope) {
  var vm = this;
  var fb = new Firebase(API_URL + '/people')

  vm.saveProfile = function () {
  var emailz = vm.people.email.toString();
  var passwordz = vm.people.password.toString();
    
    Person.create(vm.people, function () {
      console.log('Logged to Firebase');
    })
    fb.createUser({
    	email: emailz,
    	password: passwordz
    }, function(error, userData) {
    	if (error) {
    		console.log('you done fucked up')
    	}
		else {
			console.log(userData)
		}    	
    })
  };
});