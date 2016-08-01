app.directive('rarMonetario', function() {

    return {

        restrict : 'A',
        require: 'ngModel',
        link : function(scope, element, attr, ngModel) {

            element.on('keyup', function(event) {
                
                var value = element.val();
                if(event.key.match(/Home|Shift|Tab|Arrow\w*/)) return;

                var coma1 = value.indexOf('\,');
                var coma2 = value.lastIndexOf('\,');

                if(coma1 != coma2) {
                    value = value.substr(0,value.length-1);
                }

                if(value.substr(coma1).length > 3) {
                    value = value.substr(0, coma1+3);
                }

                value = value.replace(/[^0-9.,]/g, '').replace(/\./, ',');

                element.val(value);
                ngModel.$setViewValue(value);
            });

            element.on('blur', function() {

                var value = element.val();
                var coma1 = value.indexOf(',');

                if(value.length) {
                    if(coma1 > 0) {
                        if(value.substr(coma1).length == 1) {
                            value = element.val() + '00';
                        }
                        if(value.substr(coma1).length == 2) {
                            value = value + '0';
                        }
                    } else if(coma1 == 0){
                        if(value.substr(coma1).length == 0) {
                            value = '0,00';
                        }
                        if(value.substr(coma1).length == 1) {
                            value = '0' + value + '00';
                        }                    
                        if(value.substr(coma1).length == 2) {
                            value = '0' + value + '0';
                        }
                        if(value.substr(coma1).length == 3) {
                            value = '0' + value;
                        }                    
                    } else {
                        value = value + ',00';
                    }

                    if(parseFloat(value) <= 0.0) {
                        ngModel.$setValidity('menorIgualZero', false);
                    } else {
                        ngModel.$setValidity('menorIgualZero', true);
                    }

                    element.val(value);
                    ngModel.$setViewValue(value);
                }
            });

        }

    }

});