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
                    },
                    books: function (services) {
                        return services.get_api('https://www.googleapis.com/books/v1/volumes?q=Vehicles')
                    }
                }
            }).when("/contact", {
                templateUrl: "frontend/module/contact/view/contact.html",
                controller: "controller_contact"
            }).when("/shop", {
                templateUrl: "frontend/module/shop/view/shop.html",
                controller: "controller_shop",
                resolve: {
                    allcars: function (services) {
                        // return"hola";
                        return services.get('shop', 'allcars');
                    }
                }
            }).when("/shop/:id", {
                templateUrl: "frontend/module/shop/view/shop.html",
                controller: "controller_shop",
                resolve: {
                    allcars: function () {}
                }
            }).otherwise("/contact", {
                templateUrl: "frontend/module/contact/view/contact.html",
                controller: "controller_contact"
            });
    }]);

    // app.run(function($rootScope, services, services_search){
    //     console.log("aaa");
    // });