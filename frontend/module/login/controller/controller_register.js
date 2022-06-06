app.controller('controller_register', function ($scope, $window, $location, services_login, $routeParams, toastr) {
    $scope.regex_username = /^[A-Za-z0-9._-]{5,15}$/;
    $scope.regex_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    $scope.regex_password = /^[A-Za-z0-9._-]{5,20}$/;

    $scope.show_error_usr = false;
    $scope.show_error_email = false;
    $scope.show_error_pass = false;
    $scope.show_register_form = true;
    $scope.show_pass_recover = false;
    $scope.show_recover_pass_form = false;
    $scope.show_recover_form = false;


    //////Si contiene $location.path la palabra 'recover'/////////
    if ($location.path().indexOf('recover') !== -1) {
        $scope.show_register_form = false;
        $scope.show_recover_form = true;
    }

    if ($routeParams.token_activate) {
        services_login.activate($routeParams.token_activate);
        $window.location.href = '#/home';
    } else if ($routeParams.token_recover) {
        $scope.show_register_form = false;
        $scope.show_recover_form = false;
        $scope.show_recover_pass_form = true;
        // $scope.show_pass_recover = true;
    }

    $scope.register = {
        usr: '',
        email: '',
        pass: '',
    }

    $scope.recover = {
        pass1: '',
        pass2: ''
    }

    $scope.click_register = function () {
        if (validate_register() != 0) {
            services_login.register($scope.register, $scope);
        }
    }

    $scope.click_send_recover = function () {
        var mail_exp = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
        if (!mail_exp.test($scope.recover.email)) {
            $scope.error_email = "Formato de email no correcto";
            $scope.show_error_email = true;
        } else {
            $scope.show_error_email = false;
            services_login.recover($scope.recover.email);
            toastr.success("Email sended");
            setTimeout(function () {
                $window.location.href = '#/home';
            }, 1000);
        }
    }

    $scope.click_recover = function () {

        if ($scope.recover.pass1.length == 0 && $scope.recover.pass2.length == 0) {
            $scope.error_pass_recover = 'Tienes que escribir una contraseña';
            $scope.show_error_pass = true;
        } else if ($scope.recover.pass1 != $scope.recover.pass2) {
            $scope.error_pass_recover = 'Las contraseñas son distintas';
            $scope.show_error_pass = true;
        } else if ($scope.recover.pass1.length < 8) {
            $scope.error_pass_recover = 'La contraseña debe tener mas de 8 caracteres';
            $scope.show_error_pass = true;
        } else {
            $scope.show_error_pass = false;
            services_login.recover_newpass($scope.recover.pass1, $routeParams.token_recover);
            toastr.warning("Activate your email account");
            toastr.success("Password changed");
            setTimeout(function () {
                $window.location.href = '#/home';
            }, 1500);
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
                $scope.error_email = "Formato de email no correcto";
                error = true;
                $scope.show_error_email = true;
            } else {
                $scope.show_error_email = false;
            }
        }

        if ($scope.register.pass.length === 0) {
            $scope.error_pass = "Tienes que escribir la contraseña";
            error = true;
            $scope.show_error_pass = true;
        } else {
            if ($scope.register.pass.length <= 3) {
                $scope.error_pass = "La contraseña debe tener minimo 4 caracteres";
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