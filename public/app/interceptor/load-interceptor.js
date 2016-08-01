app.factory('LoadInterceptor', function($q, $rootScope, MensagemUtil) {

    return {

        request : function(config) {
            MensagemUtil.clearMessages();
            $rootScope.load = true;        
            return config;
        },

        requestError : function(rejection) {
            $rootScope.load = false;
            return $q.reject(rejection);
        },

        response : function(config) {
            $rootScope.load = false;
            return config;
        },

        responseError : function(rejection) {
            $rootScope.load = false;
            return $q.reject(rejection);            
        }

    }

    

})