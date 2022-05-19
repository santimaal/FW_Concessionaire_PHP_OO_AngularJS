var app = angular.module('angular_js', ['ngRoute', 'toastr']);
app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "frontend/module/home/view/home.html",
                controller: "controller_home",
                resolve: {
                    carousel: function (services) {
                        return services.get('home', 'homePageBrand');
                    },
                    categoria: function (services) {
                        return services.get('home', 'homePageCat');
                    },
                    type: function (services) {
                        return services.get('home', 'homePageType');
                    }
                }
            }).when("/contact", {
                templateUrl: "frontend/module/contact/view/contact.html",
                controller: "controller_contact"
            }).otherwise("/contact", {
                templateUrl: "frontend/module/contact/view/contact.html",
                controller: "controller_contact"
            });
    }]);

    // app.run(function($rootScope, services, services_search){
    //     console.log("aaa");
    // });