app.factory('services_lstorage', ['$rootScope', 'services', 'toastr', '$window', function ($rootScope, services, toastr, $window) {
    let service = { token_add, token_del }
    return service;

    function token_add(token) {
        token = token.substring(1, token.length -1);
        localStorage.setItem('token', token);
    }

    function token_del() {
        localStorage.removeItem('token');
    }

}]);