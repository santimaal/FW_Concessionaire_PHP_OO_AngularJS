app.factory('services_shop', ['services', '$rootScope', 'services_mapbox', function (services, $rootScope, services_mapbox) {
    let service = { filters, details, search, srchtype, srchcat }
    return service;

    function filters(puertas, color, marca, map) {
        // console.log(filters);
        services.post('shop', 'filters', { 'puertas': puertas, 'color': color, 'marca': marca })
            .then(function (response) {
                console.log(response);
                $rootScope.allcars = response;
                for (row in response) {
                    services_mapbox.addmark($rootScope.allcars[row], 0, map);
                }
                // pagination(response);
            }, function (error) {
                console.log(error);
            });
    }

    function details(idcar, map) {
        services.post('shop', 'details', { 'id': idcar })
            .then(function (response) {
                $rootScope.details1 = response;
                services_mapbox.addmark($rootScope.details1[0][0], null, map);
            }, function (error) {
                console.log(error);
            });
    }

    function search(map) {
        services.post('search', 'autocomplete', { 'marca': localStorage.getItem('marca'), 'city': localStorage.getItem('city'), 'auto': localStorage.getItem('keyup') })
            .then(function (response) {
                console.log(response);
                $rootScope.allcars = response;
                for (row in response) {
                    services_mapbox.addmark($rootScope.allcars[row], 0, map);
                }
            }, function (error) {
                console.log(error);
            });
    }

    function srchtype(type, map) {
        services.post('shop', 'filttype', { 'type': type })
            .then(function (response) {
                console.log(response);
                $rootScope.allcars = response;
                for (row in response) {
                    services_mapbox.addmark($rootScope.allcars[row], 0);
                }
            }, function (error) {
                console.log(error);
            });
    }

    function srchcat(cat, map) {
        services.post('shop', 'filtcategory', { 'category': cat })
            .then(function (response) {
                // console.log(response);
                $rootScope.allcars = response;
                for (row in response) {
                    services_mapbox.addmark($rootScope.allcars[row], 0, map);
                }
            }, function (error) {
                console.log(error);
            });
    }

}])