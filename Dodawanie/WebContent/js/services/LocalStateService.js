app.factory('localStateService', ['$rootScope', function ($rootScope) {

    var service = {

        setItem: function (key, val) {
            localStorage.setItem(key, angular.toJson(val));
        },

        getItem: function (key) {
        	return angular.fromJson(localStorage.getItem(key));
        },
        
        clearState: function (key) {
        	localStorage.removeItem(key);
        },
    }


    return service;
}]);