app.controller('controller_register', function ($scope, $window, services_login, $routeParams) {
    $scope.regex_username = /^[A-Za-z0-9._-]{5,15}$/;
    $scope.regex_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    $scope.regex_password = /^[A-Za-z0-9._-]{5,20}$/;

    $scope.show_error_usr = false;
    $scope.show_error_email = false;
    $scope.show_error_pass = false;

    if ($routeParams.token) {
        services_login.activate($routeParams.token);
        $window.location.href = '#/home';
    }
    console.log($routeParams);

    $scope.register = {
        usr: '',
        email: '',
        pass: ''
    }

    $scope.click_register = function () {
        if (validate_register() != 0) {
            services_login.register($scope.register);
        }
    }

    function validate_register() {
        var mail_exp = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
        var error = false;

        if ($scope.register.usr.length === 0) {
            $scope.error_usr = "Tienes que escribir el usuario";
            error = true;
            $scope.show_error_usr = true;
        } else {
            if ($scope.register.usr.length <= 3) {
                $scope.error_usr = "El nombre de usuario debe tener minimo 4 caracteres";
                error = true;
                $scope.show_error_usr = true;
            } else {
                $scope.show_error_usr = false;
            }
        }

        if ($scope.register.email.length === 0) {
            $scope.error_email = "El nombre de usuario debe tener minimo 4 caracteres";
            error = true;
            $scope.show_error_email = true;
        } else {
            if (!mail_exp.test($scope.register.email)) {
                $scope.error_email = "asd";
                error = true;
                $scope.show_error_email = true;
            } else {
                $scope.show_error_email = false;
            }
        }

        if ($scope.register.pass.length === 0) {
            $scope.error_pass = "Tienes que escribir el usuario";
            error = true;
            $scope.show_error_pass = true;
        } else {
            if ($scope.register.pass.length <= 3) {
                $scope.error_pass = "El nombre de usuario debe tener minimo 4 caracteres";
                error = true;
                $scope.show_error_pass = true;
            } else {
                $scope.show_error_pass = false;
            }
        }

        if (error == true) {
            return 0;
        }
    }

});