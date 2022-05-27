var app = angular.module('angular_js', ['ngRoute', 'toastr', 'ui.bootstrap']);
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
            }).otherwise("/contact", {
                templateUrl: "frontend/module/contact/view/contact.html",
                controller: "controller_contact"
            });
    }]);

app.run(function ($rootScope, services, services_search, $window) {
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
        localStorage.setItem('keyup', this.autocomplete);
        $rootScope.show_search= true;
        services_search.srch_autocomplete(this.marca, this.city, this.autocomplete);
    }

    $rootScope.click_prod = function (idcar) {
        $rootScope.show_search= false;
        $window.location.href = '#/shop/' + idcar;
    }

    $rootScope.search = function () {
        $rootScope.show_search= false;
        $window.location.href = '#/shop/';
    }

    // $rootScope.click_autocomplete = function(sexo = undefined, categoria = undefined, autocomplete){
    //     services_search.search_autocomplete(sexo, categoria, autocomplete);
    // }

    // $rootScope.click_search = function(sexo = undefined, categoria = undefined, autocomplete = undefined){ 
    //     services_search.search(sexo, categoria, autocomplete);
    // }
});