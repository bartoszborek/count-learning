var app = angular.module('LearningApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	   $routeProvider.
	   
	   when('/count', {
	      templateUrl: 'html/views/count.html', controller: 'LeariningController'
	   }).
	   
	   when('/config', {
	      templateUrl: 'html/views/config.html', controller: 'ConfigController'
	   }).
	   
	   otherwise({
	      redirectTo: '/count'
	   });
		
	}]);

//app.config(['$routeProvider', function($routeProvider) { 
//
//}])

app.run([ '$rootScope', '$location', function($rootScope, $location) {
	$rootScope.go = function(path) {
		$location.path(path);
	};
	
	
} ]);