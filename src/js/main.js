angular
  .module('facebook-app', ['ngRoute'])
  
  .constant('API_URL', 'https://facebookangular.firebaseio.com')

  .config(function ($routeProvider) {
  	$routeProvider

  		.when('/', {
  			templateUrl: 'views/home.html',
        controller: 'myWall', 
        controllerAs: 'wallz' 
  		})

  		.when('/login', {
  			templateUrl: 'views/login.html',
  			controller: 'loginCtrl', 
  			controllerAs: 'auth' 
  		})

  		.when('/people/new', {
  		 	templateUrl: 'views/register.html',
  		 	controller: 'CreateProfile',
  		 	controllerAs: 'newProfile'
  		 });


  })

  .factory('Person', function ($http, API_URL) {
  	return {
  		create(data, cb) {
  			$http
  				.post(`${API_URL}/people.json`, data)
  				.success(cb);
  		},
  		getOne(id, cb) {
        	$http
          		.get(`${API_URL}/people/${id}.json`)
          		.success(cb);
      	}
  	}
  })


  //matt@fili.com 12345


  