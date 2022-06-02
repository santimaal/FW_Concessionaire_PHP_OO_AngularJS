app.factory('services_login', ['$rootScope', 'services', 'toastr', '$window', 'services_lstorage',  function ($rootScope, services, toastr, $window, services_lstorage) {
    let service = { register, activate, login }
    return service;

    function register(form, scope) {
        services.post('login', 'register', { 'username': form.usr, 'email': form.email, 'password': form.pass })
            .then(function (response) {
                console.log(response);
                if (response == '"errorusr"') {
                    scope.error_usr = "El usuario ya existe";
                    scope.show_error_usr = true;
                } else if (response == '"errorem"') {
                    console.log("erroremail");
                    scope.error_email = "El email ya existe";
                    scope.show_error_email = true;
                } else if (response == '"ok"') {
                    toastr.success("User created");
                    toastr.warning("Activate your email account");
                    setTimeout(function () {
                        $window.location.href = '#/home';
                    }, 1500);
                }
            }, function (error) {
                console.log(error);
            });
    }

    function activate(token) {
        services.post('login', 'update_activate', { 'token': token })
            .then(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
            });
    }


    ///////////Yolanda esto es la millora per a poder mostrar el error de user/password...//////////

    function login(form, scope) {
        services.post('login', 'login', { 'username': form.usr, 'password': form.pass })
            .then(function (response) {
                if (response == '"username"') {
                    scope.error_usr = "El usuario no existe";
                    scope.show_error_usr = true;
                } else if (response == '"error_passwd"') {
                    scope.error_pass = "Contraseña incorrecta";
                    scope.show_error_pass = true;
                    // $rootScope.show_error_pass = true;
                } else {
                    services_lstorage.token_add(response);
                }
                console.log(response);
            }, function (error) {
                console.log(error);
            });
    }

}])