app.controller('ConfigController', [
		'$scope',
		'$rootScope',
		'applicationConfigurationService',
		'operationRegistryService',
		'sum2NumbersService',
		'sum3NumbersService',
		'minus2NumbersService',
		'multiple2NumbersService',
		'localStateService',
		function($scope, $rootScope, applicationConfigurationService,
				operationRegistryService, sum2NumbersService,
				sum3NumbersService, minus2NumbersService,
				multiple2NumbersService,localStateService) {

			
			$scope.configs = applicationConfigurationService.getConfigs();
			$scope.configsKeys = Object.keys($scope.configs);
			
			$scope.save = function() {
				applicationConfigurationService.setConfigs($scope.configs);
				localStateService.setItem('config', $scope.configs);
				$rootScope.go('/count');
			}
			
			$scope.getFields = function(key) {
				return Object.keys($scope.configs[key]);
			}
			
			
			
			
			
	
		} ]);