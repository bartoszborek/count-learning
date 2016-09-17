app.factory('operationRegistryService', ['applicationConfigurationService', function(applicationConfigurationService) {
	
	var registry = {
		register : function(operation, config) {
			applicationConfigurationService.addConfig(operation.getName(), config);
			this.operations.push(operation)
		},
		createOperation : function() {
			var index;
			do {
				index = Math.floor((this.operations.length * Math.random()));
			} while(!this.operations[index].isAvailable()) 
			// console.log(index);
			
			return this.operations[index].createOperation();
		},
		getOperationList : function() {
			return this.operations;
		}
		
	}
	registry.operations = [];
	return registry;
}]);