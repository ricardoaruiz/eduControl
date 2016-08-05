app.controller('NovoLivroController', 
           ['$scope', '$location', 'LivroService', 'MensagemUtil',
    function($scope,   $location,   LivroService,   MensagemUtil) {

    $scope.voltar = function() {
        $location.path('/livros');
    };

    $scope.salvar = function(livro) {
        
        if($scope.frmNovoLivro.$valid){
            LivroService.salvar(livro)
            .then(
                function(response) {
                    $scope.livro = {};
                    $scope.frmNovoLivro.$setPristine();
                    MensagemUtil.showSuccess('Livro inserido com sucesso.');
                    console.log('Livro Salvo');
                },
                function(error) {
                    if(error.status == 400) {
                        MensagemUtil.showError('Problema nos dados enviados para inserir o livro.');
                        console.log(error);
                    } else {
                        MensagemUtil.showError('Erro de servidor.');
                        console.log(error);
                    }
                }
            );
        }

    };

    $scope.maiorQueZero = function(valor) {
        return valor > 0;
    }

}]);