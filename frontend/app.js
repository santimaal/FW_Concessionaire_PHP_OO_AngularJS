var app = angular.module('angular_js', ['ngRoute', 'toastr', 'ui.bootstrap', 'infinite-scroll']);
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
                    allcars: function () { }
                }
            }).when("/login", {
                templateUrl: "frontend/module/login/view/login.html",
                controller: "controller_login"
            }).when("/register", {
                templateUrl: "frontend/module/login/view/register.html",
                controller: "controller_register"
            }).when("/register/activate/:token_activate", {
                templateUrl: "frontend/module/login/view/register.html",
                controller: "controller_register"
            }).when("/register/recover", {
                templateUrl: "frontend/module/login/view/register.html",
                controller: "controller_register"
            }).when("/register/recover/:token_recover", {
                templateUrl: "frontend/module/login/view/register.html",
                controller: "controller_register"
            }).otherwise("/contact", {
                templateUrl: "frontend/module/contact/view/contact.html",
                controller: "controller_contact"
            });
    }]);

app.run(function ($rootScope, services, services_search, services_login, services_social_login, services_activity, $window, toastr) {

    services_social_login.initialize();

    // search //
    localStorage.removeItem('marca');
    localStorage.removeItem('city');
    localStorage.removeItem('autocomplete');

    services_search.srch_marca();
    services_search.srch_city();

    $rootScope.click_marca = function () {
        services_search.srch_city(this.marca);
        localStorage.setItem('marca', this.marca);
        localStorage.removeItem('city');
        console.log(this.marca);
    }

    $rootScope.click_city = function () {
        localStorage.setItem('city', this.city);
    }

    $rootScope.click_autocomplete = function () {
        $rootScope.show_search = true;
        services_search.srch_autocomplete(this.marca, this.city, this.autocomplete);
    }

    $rootScope.click_prod = function (idcar) {
        $rootScope.show_search = false;
        $window.location.href = '#/shop/' + idcar;
    }

    $rootScope.search = function () {
        $rootScope.show_search = false;
        if (this.autocomplete) {
            localStorage.setItem('keyup', this.autocomplete);
        }
        $window.location.href = '#/shop/';
    }

    // users //

    $rootScope.show_nouser = false;
    $rootScope.show_user = false;
    if (localStorage.getItem('token')) {
        console.log("token");
        services_login.data_user(localStorage.getItem('token'));
        $rootScope.show_user = true;
    } else {
        console.log("notoken");
        $rootScope.show_nouser = true;
    }

    $rootScope.click_showusr = function (usr) {
        toastr.error("No se puede ver el profile", "ERROR");
    }

    $rootScope.logout = function () {
        services_login.logout();
        $window.location.reload();
    }


    // activity //

    if (localStorage.getItem('token')) {
        services_activity.protecturl();
        setInterval(function () {
            services_activity.activity();
            services_activity.protecturl();
        }, 10000);
        setInterval(function () {
            services_activity.refresh();
        }, 60000);

    }

});