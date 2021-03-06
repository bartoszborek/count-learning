app.controller('LeariningController', [
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
				multiple2NumbersService, localStateService) {

			var isRestored = false;
			var init = function() {
				if (localStateService.getItem('summary')
						&& localStateService.getItem('zadania')) {
					$scope.summary = localStateService.getItem('summary');
					$scope.zadania = localStateService.getItem('zadania');
					isRestored = true;
				} else {
					$scope.summary = {
						valid : 0,
						invalid : 0,
						all : 0
					}
					$scope.zadania = [];
				}
			}

			var prepareOperationService = function() {
				if (!$rootScope.operationConfigExists) {
					var operationConfig = localStateService.getItem('summary');
					if (!!operationConfig) {
						var operationConfig = localStateService
								.getItem('summary');
						operationRegistryService.register(sum2NumbersService,
								operationConfig[sum2NumbersService.getName()]);
						operationRegistryService.register(sum3NumbersService,
								operationConfig[sum3NumbersService.getName()]);
						operationRegistryService
								.register(minus2NumbersService,
										operationConfig[minus2NumbersService
												.getName()]);
						operationRegistryService.register(
								multiple2NumbersService,
								operationConfig[multiple2NumbersService
										.getName()]);

					} else {

						operationRegistryService.register(sum2NumbersService, {
							maxPos1 : 10,
							maxPos2 : 10,
							maxResult : 20,
							isAvailable : true
						});
						operationRegistryService.register(sum3NumbersService, {
							maxPos1 : 10,
							maxPos2 : 10,
							maxPos3 : 10,
							maxResult : 20,
							isAvailable : true
						});
						operationRegistryService.register(minus2NumbersService,
								{
									maxPos1 : 10,
									maxPos2 : 10,
									isAvailable : true
								});
						operationRegistryService.register(
								multiple2NumbersService, {
									maxPos1 : 10,
									maxPos2 : 10,
									maxResult : 20,
									isAvailable : true
								});
					}
					$rootScope.operationConfigExists = true;
				}
			}

			init();

			prepareOperationService();

			var saveInLocalStorage = function() {
				localStateService.setItem('summary', $scope.summary);
				localStateService.setItem('zadania', $scope.zadania);
			}

			$scope.clearStorage = function() {
				localStateService.clearState('summary');
				localStateService.clearState('zadania');
				// init();
			}

			$scope.checkResult = function(index) {
				var obj = $scope.zadania[index];
				if (!obj.result && obj.result !== 0) {
					return;
				}
				obj.computed = true;
				obj.isValid = obj.correctResult == obj.result;
				if (obj.isValid) {
					$scope.summary.valid = $scope.summary.valid + 1;
				} else {
					$scope.summary.invalid = $scope.summary.invalid + 1;
				}

				if ($scope.summary.all <= $scope.summary.valid
						+ $scope.summary.invalid + 1) {
					$scope.addNext($scope.summary.valid
							+ $scope.summary.invalid + 1 - $scope.summary.all)
				}

				saveInLocalStorage();

			};

			$scope.addNext = function(multipler) {
				var mult = 1;
				if (multipler) {
					mult = multipler;
				}
				for (var i = 0; i < mult; i++) {
					$scope.summary.all += 1;
					$scope.zadania.push(operationRegistryService
							.createOperation());
				}
			}

			$scope.getImage = function(zad) {
				if (zad.isValid) {
					return "images/good.jpg";
				}
				return "images/bad.jpg";
			}

			if (!isRestored) {
				$scope.addNext(3);
			}

			// zyczenie Artura
			// $scope.zadania = [{
			// operation : 1 + ' - ' + 1,
			// correctResult : 0,
			// result : 0,
			// computed : true,
			// isValid : true
			// },
			// {
			// operation : 13 + ' + ' + 5,
			// correctResult : 18,
			// result : 18,
			// computed : true,
			// isValid : true
			// },
			// {
			// operation : 8 + ' + ' + 20,
			// correctResult : 28,
			// result : null,
			// computed : false,
			// isValid : false
			// }];
			// $scope.summary = {
			// valid : 2,
			// invalid : 0,
			// all : 2
			// }
			// $scope.addNext(1);
		} ]);