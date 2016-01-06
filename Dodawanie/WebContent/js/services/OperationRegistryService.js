app.factory('operationRegistryService', ['applicationConfigurationService', function(applicationConfigurationService) {
	
	var registry = {
		register : function(operation, config) {
			applicationConfigurationService.addConfig(operation.getName(), config);
			this.operations.push(operation)
		},
		createOperation : function() {
			var index = Math.floor((this.operations.length * Math.random()));
			// console.log(index);
			return this.operations[index].createOperation();
		}
	}
	registry.operations = [];
	return registry;
}]);