app.controller('controller_shop', function ($scope, allcars, services_shop, $window, $routeParams,$rootScope, services_mapbox) {

    if (localStorage.getItem('reload') || localStorage.getItem('callback')) {
        localStorage.removeItem('callback');
        localStorage.removeItem('reload');
        if (localStorage.getItem('reload'))
        $window.location.reload();
    }

    const map_dt = services_mapbox.init('map_details');
    const map_all = services_mapbox.init('map');


    $scope.show_nolike =false;
    console.log($routeParams.id);
    $scope.filterlist = false;
    $scope.show_allcars = false;
    $scope.show_details = false;
    $scope.show_nolike = true;
    $scope.show_like = true;
    $scope.myInterval = 5000;
    $scope.details = allcars;
    $scope.show_map_allcars = true;

    for (row in allcars) {
        services_mapbox.addmark(allcars[row], 0, map_all);
    }

    var srchbrand = localStorage.getItem('marca') || false;
    var srchcity = localStorage.getItem('city') || false;
    var srchkeyup = localStorage.getItem('keyup') || false;
    var type = localStorage.getItem('type') || false;
    var category = localStorage.getItem('category') || false;

    if ($routeParams.id) {
        $scope.show_details = true;
        services_shop.details($routeParams.id, map_dt, $scope);
        $scope.show_map_allcars = false;
    } else if (type != false | category != false) {
        $scope.show_allcars = true;
        $scope.filterlist = true;
        if (type != false) {
            services_shop.srchtype(localStorage.getItem('type'), map_all);
        } else {
            services_shop.srchcat(localStorage.getItem('category'), map_all);
        }
        localStorage.removeItem('type');
        localStorage.removeItem('category');
    } else if (srchbrand != false | srchcity != false | srchkeyup != false) {
        $scope.marca = localStorage.getItem('marca');
        $scope.show_allcars = true;
        $scope.filterlist = true;
        services_shop.search(map_all);
        localStorage.removeItem('city');
        localStorage.removeItem('keyup');
    } else if (!localStorage.getItem('filters')) {
        $scope.show_allcars = true;
        $scope.filterlist = true;
        var count1 = 2;
        $rootScope.loadMore = function() {
            count1++;
            $rootScope.allcars = allcars.slice(0, count1);
            services_shop.loadlikes($scope.allcars);
        }
    } else {
        $scope.show_allcars = true;
        $scope.filterlist = true;
        var todo = JSON.parse(localStorage.getItem('filters'));
        var puertas = todo[0].puertas[0];
        var color = todo[1].color;

        services_shop.filters(puertas, color, 'a', map_all);
        highlight();
    }

    services_shop.loadlikes($scope.allcars);

    $scope.filters = function () {
        let color = [];
        let puertas = [];
        let filters = [];

        if (localStorage.getItem('filters')) {
            let filterss = JSON.parse(localStorage.getItem('filters'));
            console.log(filterss);

            for (row in filterss[1].color) {
                color.push(filterss[1].color[row]);
            }

        }

        angular.forEach($scope.radio, function (value, name) {
            puertas = value;
        });
        if (puertas.length != 0) {
            filters.push({ "puertas": puertas });
        } else {
            filters.push({ "puertas": "all" });
        }
        // $scope.radio = '';

        angular.forEach($scope.check, function (value, name) {
            console.log(value + name);
            if (value == true) {
                color.push(name);
            }
            // if (value == false) {
            //     // console.log("hola");
            //     delete color[name];
            //     // console.log(color.pull(name));
            // }
            console.log(color);
        });

        if (color.length != 0) {
            filters.push({ "color": color });
        } else {
            filters.push({ "color": "all" });
        }
        localStorage.setItem('filters', JSON.stringify(filters));
        console.log(filters)
        $window.location.reload()
    }

    $scope.details = function (id) {
        $window.location.href = '#/shop/' + id;
    }

    $scope.reset_all = function () {
        localStorage.removeItem('filters');
        localStorage.removeItem('marcas');
        localStorage.removeItem('marca');
        localStorage.removeItem('city');
        localStorage.removeItem('keyup');
        $window.location.reload();
    }

    function highlight() {
        const filters = JSON.parse(localStorage.getItem('filters'));
        const color = filters[1].color;
        // $scope[dos] = {checked : true};

        for (row in color) {
            console.log(color[row]);
            $scope[color[row]] = true;
            // $scope[check[color[row]]] = true;
        }
        console.log("high");
    }

    $scope.click_like = function () {
        console.log("click");
        let op = null;
        if (localStorage.getItem('token')) {
            console.log(this.data.fav_class);
            if (this.data.fav_class == "fa-solid fa-heart fa-xl right solid"){ 
                this.data.fav_class = "fa-regular fa-heart fa-xl right solid";
                op = 'unlike';
            } else {
                this.data.fav_class = "fa-solid fa-heart fa-xl right solid";
                op = 'like';
            }
            console.log(op);
            services_shop.likeoption(this.data.id, op);
        } else {
            localStorage.setItem('callback', '#/shop');
            $window.location.href = '#/login';
        }
    }

    if ($scope.allrelated){
        console.log("relateds esta cargado")
    }

        /// trying checkbox color ///
    $scope.prueba = function (color, check) {
        let pruebas = [];
        console.log(color);
        if (check == true) {
            pruebas.push(color);
            console.log(pruebas);
        } else {
            delete pruebas[color];
            console.log(pruebas);
        }
    }

});