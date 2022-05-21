app.factory('services_shop', ['services', '$rootScope', function (services, $rootScope) {
    let service = { filters, details }
    return service;

    function filters(filters) {
        console.log(filters);
        // services.post('shop', 'list_filters_products', {filters: filters})
        // .then(function(response) {
        //     $rootScope.list_products = response;
        //    // pagination(response);
        // }, function(error) {
        //     console.log(error);
        // });
    }

    function details(idcar) {
        console.log("details");

    }
}])