'use strict';

angular.module('facebook-app', ['ngRoute']).constant('API_URL', 'https://facebookangular.firebaseio.com').config(function ($routeProvider) {
      $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'myWall',
            controllerAs: 'wallz'
      }).when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginCtrl',
            controllerAs: 'auth'
      }).when('/people/new', {
            templateUrl: 'views/register.html',
            controller: 'CreateProfile',
            controllerAs: 'newProfile'
      });
}).factory('Person', function ($http, API_URL) {
      return {
            create: function create(data, cb) {
                  $http.post('' + API_URL + '/people.json', data).success(cb);
            },
            getOne: function getOne(id, cb) {
                  $http.get('' + API_URL + '/people/' + id + '.json').success(cb);
            }
      };
});

//matt@fili.com 12345
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUNKLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUVuQyxRQUFRLENBQUMsU0FBUyxFQUFFLHdDQUF3QyxDQUFDLENBRTdELE1BQU0sQ0FBQyxVQUFVLGNBQWMsRUFBRTtBQUNqQyxvQkFBYyxDQUVaLElBQUksQ0FBQyxHQUFHLEVBQUU7QUFDVix1QkFBVyxFQUFFLGlCQUFpQjtBQUMzQixzQkFBVSxFQUFFLFFBQVE7QUFDcEIsd0JBQVksRUFBRSxPQUFPO09BQ3hCLENBQUMsQ0FFRCxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ2YsdUJBQVcsRUFBRSxrQkFBa0I7QUFDL0Isc0JBQVUsRUFBRSxXQUFXO0FBQ3ZCLHdCQUFZLEVBQUUsTUFBTTtPQUNwQixDQUFDLENBRUQsSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUNuQix1QkFBVyxFQUFFLHFCQUFxQjtBQUNsQyxzQkFBVSxFQUFFLGVBQWU7QUFDM0Isd0JBQVksRUFBRSxZQUFZO09BQzFCLENBQUMsQ0FBQztDQUdMLENBQUMsQ0FFRCxPQUFPLENBQUMsUUFBUSxFQUFFLFVBQVUsS0FBSyxFQUFFLE9BQU8sRUFBRTtBQUM1QyxhQUFPO0FBQ04sa0JBQU0sRUFBQSxnQkFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFO0FBQ2hCLHVCQUFLLENBQ0gsSUFBSSxNQUFJLE9BQU8sbUJBQWdCLElBQUksQ0FBQyxDQUNwQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDZDtBQUNELGtCQUFNLEVBQUEsZ0JBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUNWLHVCQUFLLENBQ0QsR0FBRyxNQUFJLE9BQU8sZ0JBQVcsRUFBRSxXQUFRLENBQ25DLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNqQjtPQUNKLENBQUE7Q0FDRCxDQUFDLENBQUEiLCJmaWxlIjoic3JjL2pzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyXG4gIC5tb2R1bGUoJ2ZhY2Vib29rLWFwcCcsIFsnbmdSb3V0ZSddKVxuICBcbiAgLmNvbnN0YW50KCdBUElfVVJMJywgJ2h0dHBzOi8vZmFjZWJvb2thbmd1bGFyLmZpcmViYXNlaW8uY29tJylcblxuICAuY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuICBcdCRyb3V0ZVByb3ZpZGVyXG5cbiAgXHRcdC53aGVuKCcvJywge1xuICBcdFx0XHR0ZW1wbGF0ZVVybDogJ3ZpZXdzL2hvbWUuaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdteVdhbGwnLCBcbiAgICAgICAgY29udHJvbGxlckFzOiAnd2FsbHonIFxuICBcdFx0fSlcblxuICBcdFx0LndoZW4oJy9sb2dpbicsIHtcbiAgXHRcdFx0dGVtcGxhdGVVcmw6ICd2aWV3cy9sb2dpbi5odG1sJyxcbiAgXHRcdFx0Y29udHJvbGxlcjogJ2xvZ2luQ3RybCcsIFxuICBcdFx0XHRjb250cm9sbGVyQXM6ICdhdXRoJyBcbiAgXHRcdH0pXG5cbiAgXHRcdC53aGVuKCcvcGVvcGxlL25ldycsIHtcbiAgXHRcdCBcdHRlbXBsYXRlVXJsOiAndmlld3MvcmVnaXN0ZXIuaHRtbCcsXG4gIFx0XHQgXHRjb250cm9sbGVyOiAnQ3JlYXRlUHJvZmlsZScsXG4gIFx0XHQgXHRjb250cm9sbGVyQXM6ICduZXdQcm9maWxlJ1xuICBcdFx0IH0pO1xuXG5cbiAgfSlcblxuICAuZmFjdG9yeSgnUGVyc29uJywgZnVuY3Rpb24gKCRodHRwLCBBUElfVVJMKSB7XG4gIFx0cmV0dXJuIHtcbiAgXHRcdGNyZWF0ZShkYXRhLCBjYikge1xuICBcdFx0XHQkaHR0cFxuICBcdFx0XHRcdC5wb3N0KGAke0FQSV9VUkx9L3Blb3BsZS5qc29uYCwgZGF0YSlcbiAgXHRcdFx0XHQuc3VjY2VzcyhjYik7XG4gIFx0XHR9LFxuICBcdFx0Z2V0T25lKGlkLCBjYikge1xuICAgICAgICBcdCRodHRwXG4gICAgICAgICAgXHRcdC5nZXQoYCR7QVBJX1VSTH0vcGVvcGxlLyR7aWR9Lmpzb25gKVxuICAgICAgICAgIFx0XHQuc3VjY2VzcyhjYik7XG4gICAgICBcdH1cbiAgXHR9XG4gIH0pXG5cblxuICAvL21hdHRAZmlsaS5jb20gMTIzNDVcblxuXG4gICJdfQ==
