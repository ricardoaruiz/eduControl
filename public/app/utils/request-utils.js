app.factory('RequestUtils', function() {

    return {

        jsonToQueryParams : function(json) {

            if(!json) {
                return '';
            }

            var params  = '?' + JSON.stringify(json)
                .replace(/":"/g, '=')
                .replace(/","/g, '&')
                .replace(/"|{|}/g, '');

            params += '&';
            params = params.replace(/\w*=&/g, '');
            params = params.substr(0, params.length -1);

            return params;
        }

    };

});