app.factory('services_search', ['services', '$rootScope', function (services, $rootScope) {
    let service = { srch_marca: srch_marca, srch_city: srch_city, srch_autocomplete: srch_autocomplete };
    return service;

    function srch_marca() {
        services.post('search', 'marcas')
            .then(function (response) {
                $rootScope.srchmarca = response;
            }, function (error) {
                console.log(error);
            });
    }

    function srch_city(marca = null) {
        let op = null;
        if (marca) {
            op = 'ciudades_m';
            // services.post('search', 'ciudades')
        } else {
            op = 'ciudades';
            // services.post('search', 'ciudades')
        }
        console.log(op);
        services.post('search', op, { 'marca': marca })
            .then(function (response) {
                console.log(response);
                $rootScope.srchcity = response;
            }, function (error) {
                console.log(error);
            });
    }

    function srch_autocomplete(marca = null, city = null, auto) {
        services.post('search', 'autocomplete', { 'marca': marca, 'city': city, 'auto': auto })
            .then(function (response) {
                console.log(response);
                $rootScope.srchauto = response;
            }, function (error) {
                console.log(error);
            });
    }
}]);