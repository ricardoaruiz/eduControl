app.service('LivroService', function($http, AppConfig, RequestUtils) {

    this.buscar = function(filtro) {
        return $http.get(AppConfig.eduControlApi + '/livros' + RequestUtils.jsonToQueryParams(filtro));        
    };

    this.salvar = function(livro) {
        if(livro.preco) livro.preco = livro.preco.replace(/,/,'.');
        return $http.post(AppConfig.eduControlApi + '/livros', livro);
    }

})