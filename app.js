//MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'NgResource'])

//ROUTES
.config(function ($routeProvider) {
  $routeProvider
  
  .when('/', {
    templateUrl: 'pages/home.html',
    controller: 'mainController'
  })
  
  .when('/forcast', {
    templateUrl: 'pages/forcast.html',
    controller: 'forcastController'
  })
});

.service('cityService', function() {
  this.city = "New York, NY"
})
//CONTROLERS
.controller('mainController', ['$scope', 'cityService' function($scope, cityService) {
  $scope.city = cityService;
                               $scope.watch('city' function() {
                               cityService =$scope.city;
                               })
}])

.controller('forcastController', ['$scope', 'cityService', function($scope, cityService) {
  $scope.city = cityService;
}]);
