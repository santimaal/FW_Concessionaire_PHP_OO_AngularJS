app.factory('services_login', ['$rootScope', 'services', function ($rootScope, services) {
    let service = { register, activate }
    return service;

    function register(form) {
        console.log(form);
        services.post('login', 'register', { 'username': form.usr, 'email': form.email, 'password': form.pass })
            .then(function (response) {
                console.log(response);
                if (response = "errorusr") {
                    console.log("aa");
                    $rootScope.error_usr = "El usuario ya existe";
                    $rootScope.show_error_usr = true;
                }
            }, function (error) {
                console.log(error);
            });
    }

    function activate(token) {
        services.post('login', 'update_activate', { 'token': token })
            .then(function (response) {
                console.log(response);
                if (response = "errorusr") {
                    console.log("aa");
                    $rootScope.error_usr = "El usuario ya existe";
                    $rootScope.show_error_usr = true;
                }
            }, function (error) {
                console.log(error);
            });
    }

}])