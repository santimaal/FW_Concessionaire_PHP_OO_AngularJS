app.factory('services_shop', ['services', '$rootScope', function (services, $rootScope) {
    let service = { filters, details, search }
    return service;

    function filters(puertas, color, marca) {
        // console.log(filters);
        services.post('shop', 'filters', { 'puertas': puertas, 'color': color, 'marca': marca })
            .then(function (response) {
                console.log(response);
                $rootScope.allcars = response;

                // pagination(response);
            }, function (error) {
                console.log(error);
            });
    }

    function details(idcar) {
        services.post('shop', 'details', { 'id': idcar })
            .then(function (response) {
                $rootScope.details1 = response;
            }, function (error) {
                console.log(error);
            });
    }

    function search() {
        services.post('search', 'autocomplete', { 'marca': localStorage.getItem('marca'), 'city': localStorage.getItem('city'), 'auto': localStorage.getItem('keyup') })
            .then(function (response) {
                console.log(response);
                $rootScope.allcars = response;
            }, function (error) {
                console.log(error);
            });
    }
}])