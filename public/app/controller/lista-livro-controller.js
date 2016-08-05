app.controller('ListaLivroController', 
            ['$scope', '$location', '$route', 'AppConfig', 'LivroService', 'MensagemUtil', 
    function( $scope,   $location,   $route,   AppConfig,   LivroService,   MensagemUtil) {  

    var montaFiltroPaginacao = function(filtro, pagina) {
        if(!pagina || pagina == 0) {
            $scope.pagina = 0;  
        } else {
            $scope.pagina = pagina-1;
        }       

        if(!filtro){
            filtro = {
                regPorPagina : new String(AppConfig.registrosPorPagina),
                pagina : new String($scope.pagina)
            }
        } else {
            filtro.regPorPagina = new String(AppConfig.registrosPorPagina);
            filtro.pagina = new String($scope.pagina);
        }
        return filtro;
    }

    var paginacao = function(filtro, pagina) {

       filtro = montaFiltroPaginacao(filtro, pagina);

        LivroService.paginacao(filtro).then(
            function(response) {
                console.log(response.data);
                $scope.paginacao = response.data;

                $scope.paginas = new Array();
                for(i=1; i<=response.data.paginas; i++) {
                    $scope.paginas.push(i);
                }
            },
            function(error) {
                console.log('erro');
            }
        );

    }

    var buscar = function(filtro, pagina, busca) {

        if(busca) {
            filtro = montaFiltroPaginacao(filtro, pagina);
            $scope.filtroEstatico = angular.copy(filtro);
        } else {
            filtro = angular.copy($scope.filtroEstatico);
        }

        paginacao(filtro, pagina);

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

    $scope.buscar = buscar; 

    $scope.limpar = function() {
        $route.reload();
    }

    $scope.novo = function() {
        $location.path('/livros/novo');
    }

}]);