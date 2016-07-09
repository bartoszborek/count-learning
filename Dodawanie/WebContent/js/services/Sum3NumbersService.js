app.factory('sum3NumbersService',
		[
				'applicationConfigurationService',
				function(applicationConfigurationService) {

					var operationFactory = {
						createOperation : function() {
							var configObj = applicationConfigurationService
									.getConfig(this.name)

							var var1 = Math.floor((Math.random()
									* configObj.maxPos1 + 1));
							var var2 = Math.floor((Math.random()
									* configObj.maxPos2 + 1));

							var var3 = Math.floor((Math.random()
									* configObj.maxPos3 + 1));

							while (var1 + var2 + var3 > configObj.maxResult) {
								var1 = Math.floor((Math.random()
										* configObj.maxPos1 + 1));
								var2 = Math.floor((Math.random()
										* configObj.maxPos2 + 1));
								var3 = Math.floor((Math.random()
										* configObj.maxPos3 + 1));
							}
							return {
								operation : var1 + ' + ' + var2 + ' + ' + var3,
								correctResult : var1 + var2 + var3,
								result : null,
								computed : false,
								isValid : false
							}
						},
						getName : function() {
							return this.name;
						}
					}

					operationFactory.name = 'sum3NumbersService';

					return operationFactory;
				} ]);