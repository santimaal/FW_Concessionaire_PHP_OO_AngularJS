app.controller('controller_contact', function ($scope, services, toastr) {
    $scope.regName = /^[A-Za-z\s]{6,60}$/;
    $scope.regEmail = /^[A-Za-z0-9._-]{5,20}@[a-z]{3,6}.[a-z]{2,4}$/;
    $scope.regMatter = /^[A-Za-z-\s]{6,60}$/;
    $scope.regMessage = /^[A-Za-z0-9-\s.]{15,200}$/;

    $scope.send_email = function () {
        let email = { 'name': $scope.name, 'email': $scope.email, 'matter': $scope.matter, 'message': $scope.message };
        services.post('contact', 'send_contact_us', email)
            .then(function (response) {
                console.log(response);
                if (response == '"true"') {
                    toastr.success('The email has been sended, you will receive an answer as soon as posible.', 'Email sended');
                    $scope.full_name = null;
                    $scope.user_email = null;
                    $scope.email_matter = null;
                    $scope.email_message = null;
                } else {
                    toastr.error('Something happend when trying to send.', 'Error');
                }// end_else
            }, function (error) {
                console.log(error);
            });// end_request
    }// end_$sendEmail
});
