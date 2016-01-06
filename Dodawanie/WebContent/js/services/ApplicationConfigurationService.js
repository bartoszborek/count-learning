app.factory('applicationConfigurationService', function() {

	
	var config = {
		addConfig : function(name, configObj) {
			this.data[name] = configObj;
		},
		getConfig : function(name) {
			return this.data[name];
		}
	};
	
	config.data = [];

	return config;
});