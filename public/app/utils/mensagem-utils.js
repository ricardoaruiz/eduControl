app.factory('MensagemUtil', function($rootScope) {

    return {

        showSuccess : function(mensagem) {
            $rootScope.sucesso = true;
            $rootScope.mensagem = mensagem;
        },

        showError : function(mensagem) {
            $rootScope.erro = true;
            $rootScope.mensagem = mensagem;
        },

        clearMessages : function() {
            $rootScope.sucesso = false;
            $rootScope.erro = false;
            $rootScope.mensagem = '';
        }

    }

})