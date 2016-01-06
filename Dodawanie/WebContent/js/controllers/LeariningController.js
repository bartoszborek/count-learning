app.controller('LeariningController', [
		'$scope',
		'applicationConfigurationService',
		'operationRegistryService',
		'sum2NumbersService',
		'sum3NumbersService',
		'minus2NumbersService',
		'multiple2NumbersService',
		function($scope, applicationConfigurationService,
				operationRegistryService, sum2NumbersService,
				sum3NumbersService, minus2NumbersService,
				multiple2NumbersService) {

			$scope.summary = {
				valid : 0,
				invalid : 0,
				all : 0
			}
			$scope.zadania = [];

			operationRegistryService.register(sum2NumbersService, {
				maxPos1 : 20,
				maxPos2 : 20
			});
			operationRegistryService.register(sum3NumbersService, {
				maxPos1 : 10,
				maxPos2 : 10,
				maxPos3 : 10
			});
			operationRegistryService.register(minus2NumbersService, {
				maxPos1 : 20,
				maxPos2 : 20
			});
			operationRegistryService.register(multiple2NumbersService, {
				maxPos1 : 10,
				maxPos2 : 10
			});

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

			$scope.addNext(3);
		} ]);