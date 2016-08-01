app.controller('ListaLivroController', function($scope, $location, LivroService, MensagemUtil) {
    
    $scope.buscar = function(filtro) {

        LivroService.buscar(filtro).then(
            function(response) {
                $scope.livros = response.data;
                if(!response.data.length) {
                    MensagemUtil.showSuccess('Nenhum livro encontrado para o filtro informado.');
                }
            },
            function(response) {
                if(response.status == 400) {
                    MensagemUtil.showError('Problema com os dados que foram enviados.');
                    console.log(response);
                }
                if(response.status == 500) {
                    MensagemUtil.showError('Problema ao consultar os livros.');
                    console.log(response);
                }
            }
        );
    }

    $scope.limpar = function() {
        $scope.filtro = {};
        $scope.livros = [];
        MensagemUtil.clearMessages();
    }

    $scope.novo = function() {
        $location.path('/livros/novo');
    }

});