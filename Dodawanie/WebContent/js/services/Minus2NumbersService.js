app.factory('minus2NumbersService', [
		'applicationConfigurationService',
		function(applicationConfigurationService) {

			var operationFactory = {
				createOperation : function() {
					var configObj = applicationConfigurationService
							.getConfig(this.name)

					var var1 = Math
							.floor((Math.random() * configObj.maxPos1 + 1));
					var var2 = Math
							.floor((Math.random() * configObj.maxPos2 + 1));
					while(var2 > var1){
						  var2 = Math.floor((Math.random() * configObj.maxPos2 + 1));
					  }
					return {
						operation : var1 + ' - ' + var2,
						correctResult : var1 - var2,
						result : null,
						computed : false,
						isValid : false
					}
				},
				getName : function(){
					return this.name;
				},
				isAvailable : function() {
					return !!applicationConfigurationService
					.getConfig(this.name).isAvailable;
				}
			}

			operationFactory.name = 'minus2NumbersService';
			
			return operationFactory;
		} ]);