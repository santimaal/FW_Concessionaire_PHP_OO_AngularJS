app.controller('controller_login', function ($scope, $window, services_login, services_social_login) {

    $scope.show_error_usr = false;
    $scope.show_error_pass = false;

    $scope.login = {
        usr: '',
        pass: undefined
    }


    $scope.click_login = function () {
        if (validate_login() != 0) {
            services_login.login($scope.login, $scope);
        }
    }

    $scope.login_google = function() {
        services_social_login.google();
    };

    $scope.login_github = function() {
        services_social_login.github();
    };


    function validate_login() {
        var error = false;

        if ($scope.login.usr.length === 0) {
            $scope.error_usr = "Tienes que escribir el usuario";
            error = true;
            $scope.show_error_usr = true;
        } else {
            $scope.show_error_usr = false;
        }

        if ($scope.login.pass === undefined) {
            $scope.error_pass = "Tienes que escribir la contraseña";
            error = true;
            $scope.show_error_pass = true;
        } else {
            $scope.error_pass = "";
            $scope.show_error_pass = false;
        }

        if (error == true) {
            return 0;
        }
    }

});