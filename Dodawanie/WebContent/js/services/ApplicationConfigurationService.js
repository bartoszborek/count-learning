app.factory('applicationConfigurationService', function() {

	
	var config = {
		addConfig : function(name, configObj) {
			this.data[name] = configObj;
		},
		getConfig : function(name) {
			return this.data[name];
		},
		changeConfig : function(name, configObj) {
			this.data[name] = configObj;
		},
		getConfigs : function() {
			return this.data;
		}, 
		setConfigs : function(configs) {
			this.data = configs;
		}
	};
	
	config.data = {};

	return config;
});