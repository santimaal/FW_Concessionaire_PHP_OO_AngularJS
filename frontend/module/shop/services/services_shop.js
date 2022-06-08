app.factory('services_shop', ['services', '$rootScope', 'services_mapbox', function (services, $rootScope, services_mapbox) {
    let service = { filters, details, search, srchtype, srchcat, loadlikes, likeoption }
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

    function loadlikes(scope) {
        if (localStorage.getItem('token')) {
            services.post('login', 'likeoption', { 'token': localStorage.getItem('token'), 'op': 'like_select' })
                .then(function (response) {
                    console.log(scope)
                    let carids = [];
                    for (row in response) {
                        carids.push(response[row].id_car);
                    }
                    for (row in scope) {
                        if (carids.includes(scope[row].id)) {
                            scope[row].fav_class = "fa-solid fa-heart fa-xl right solid";
                        } else {
                            scope[row].fav_class = "fa-regular fa-heart fa-xl right solid";
                        }
                    }
                }, function (error) {
                    console.log(error);
                });
        } else {
            for (row in scope) {
                scope[row].fav_class = "fa-regular fa-heart fa-xl right solid";
            }
            console.log("notoken");
        }
    }

    function likeoption(idcar, op) {
        services.post('login', 'likeoption', { 'token': localStorage.getItem('token'), 'op': op, 'idcar': idcar })
            .then(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
            });
    }

}])