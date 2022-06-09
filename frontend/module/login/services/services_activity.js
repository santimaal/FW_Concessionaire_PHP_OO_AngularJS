app.factory('services_activity', ['$rootScope', 'services', 'toastr', '$window', 'services_lstorage', function ($rootScope, services, toastr, $window, services_lstorage) {
    let service = { protecturl, activity, refresh }
    return service;

    function protecturl() {

        services.post('login', 'controluser', { 'token': localStorage.getItem('token') })
            .then(function (data) {
                console.log(data);
                if (data == '"nookay"') {
                    toastr.error("Ha habido algun problema con el usuario");
                    setInterval(function () {
                        services_lstorage.token_del();
                        $window.location.reload();
                    }, 3000);
                } else if (data == '"okay"') {
                    console.log("okay");
                }
            }, function (error) {
                toastr.error("Ha habido algun problema con el usuario");
                setInterval(function () {
                    services_lstorage.token_del();
                    $window.location.reload();
                }, 3000);
            });

    }

    function activity() {

        services.post('login', 'actividad', {})
            .then(function (response) {
                if (response == '"timepo"') {
                    services_lstorage.token_del();
                    $window.location.reload();
                }
                else if (response == '"inactivo"') {
                    toastr.warning("Se ha cerrado la cuenta por inactividad");
                    setInterval(function () {
                        services_lstorage.token_del();
                        $window.location.reload();
                    }, 1000);
                }
            }, function (error) {
                console.log(error);
            });

    }

    function refresh() {

        
        services.post('login', 'refresh_token', { 'token': localStorage.getItem('token') })
            .then(function (data) {
                services_lstorage.token_add(data);
            }, function (error) {
                toastr.error("Ha habido algun problema con el usuario");
                setInterval(function () {
                    services_lstorage.token_del();
                    $window.location.reload();
                }, 3000);
            });

            services.post('login', 'refresh_cookie', {})
            .then(function (data) {
                console.log(data);
            });
    }


}]);