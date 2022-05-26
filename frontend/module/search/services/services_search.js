app.factory('services_search', ['services', '$rootScope', function (services, $rootScope) {
    let service = { srch_marca: srch_marca, srch_city: srch_city, srch_autocomplete: srch_autocomplete };
    return service;

    function srch_marca() {
        services.post('search', 'marcas')
            .then(function (response) {
                console.log(response);
                   $rootScope.srchmarca = response;
            }, function (error) {
                console.log(error);
            });
    }

    function srch_city() {
        console.log("hola");
    }

    function srch_autocomplete() {
        console.log("hola");
    }
}]);