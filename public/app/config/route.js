app.config(function($routeProvider) {

    $routeProvider.when('/livros', {
        templateUrl : 'livro/lista.html',
        controller : 'ListaLivroController'
    });

    $routeProvider.when('/livros/novo', {
        templateUrl : 'livro/novo.html',
        controller : 'NovoLivroController'
    })

});