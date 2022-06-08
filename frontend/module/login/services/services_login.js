app.factory('services_login', ['$rootScope', 'services', 'toastr', '$window', 'services_lstorage', function ($rootScope, services, toastr, $window, services_lstorage) {
    let service = { register, activate, login, recover, recover_newpass, data_user, logout }
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
                    toastr.success("User logged successfully");
                    services_lstorage.token_add(response);
                    setTimeout(function () {
                        localStorage.setItem('reload', "yes");
                        if (localStorage.getItem('callback')) {
                            localStorage.setItem('reload', 'yes');
                            $window.location.href = localStorage.getItem('callback');
                        } else {
                            $window.location.href = '#/home';
                        }
                    }, 1500);
                }
                console.log(response);
            }, function (error) {
                console.log(error);
            });
    }


    function recover(email) {
        services.post('login', 'recover', { 'email': email })
            .then(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
            });
    }

    function recover_newpass(pass, tk_email) {
        services.post('login', 'recover_pass', { 'token_email': tk_email, 'pass': pass })
            .then(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
            });
    }

    function data_user(token) {
        services.post('login', 'data_user', { 'token': token })
            .then(function (response) {
                console.log(response[0]);
                $rootScope.avatar = response[0].avatar;
                $rootScope.usr = response[0].username;
            }, function (error) {
                console.log(error);
            });
    }

    function logout() {
        services_lstorage.token_del();
    }

}]);