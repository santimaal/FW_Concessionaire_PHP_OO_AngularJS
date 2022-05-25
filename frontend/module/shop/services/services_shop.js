app.factory('services_shop', ['services', '$rootScope', function (services, $rootScope) {
    let service = { filters, details }
    return service;

    function filters(puertas, color, marca) {
        // console.log(filters);
        services.post('shop', 'filters', {'puertas': puertas, 'color':color, 'marca': marca})
        .then(function(response) {
            console.log(response);
            $rootScope.allcars = response;
            
           // pagination(response);
        }, function(error) {
            console.log(error);
        });
    }

    function details(idcar) {
        services.post('shop', 'details', {'id': idcar})
        .then(function(response) {
            console.log(response[0][0]);
            $rootScope.details1 = response;
            
           // pagination(response);
        }, function(error) {
            console.log(error);
        });
    }
}])