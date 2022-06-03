app.controller('controller_shop', function ($scope, allcars, services_shop, $window, $routeParams) {
    console.log($routeParams.id);
    $scope.filterlist = false;
    $scope.show_allcars = false;
    $scope.show_details = false;
    $scope.myInterval = 5000;
    $scope.details = allcars;

    var srchbrand = localStorage.getItem('marca') || false;
    var srchcity = localStorage.getItem('city') || false;
    var srchkeyup = localStorage.getItem('keyup') || false;
    var type = localStorage.getItem('type') || false;
    var category = localStorage.getItem('category') || false;
    // $scope.show_details = false;
    // if ($scope.details) {
    // $scope.show_details = true;
    // $scope.show_allcars = false;
    // }
    if ($routeParams.id) {
        $scope.show_details = true;
        services_shop.details($routeParams.id);
    } else if (type != false | category != false) {
        $scope.show_allcars = true;
        $scope.filterlist = true;
        if (type != false) {
            services_shop.srchtype(localStorage.getItem('type'));
        } else {
            services_shop.srchcat(localStorage.getItem('category'));
        }
        localStorage.removeItem('type');
        localStorage.removeItem('category');
    } else if (srchbrand != false | srchcity != false | srchkeyup != false) {
        $scope.show_allcars = true;
        $scope.filterlist = true;
        services_shop.search();
        localStorage.removeItem('city');
        localStorage.removeItem('keyup');
    } else if (!localStorage.getItem('filters')) {
        $scope.show_allcars = true;
        $scope.filterlist = true;
        $scope.allcars = allcars;
    } else {
        $scope.show_allcars = true;
        $scope.filterlist = true;
        var todo = JSON.parse(localStorage.getItem('filters'));
        var puertas = todo[0].puertas[0];
        var color = todo[1].color;

        services_shop.filters(puertas, color, 'a');
        highlight();
    }

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


    // if (marca != null) {
    //     url = "asda";
    //     services_shop.filters(url);
    //     // ajaxForSearch('?Fs=shop&op=filter&puertas=' + puertas + '&color=' + colowr + '&marca=' + marca[0].marca[0]);
    //     ajaxForSearch('?page=shop&op=filters&puertas=' + puertas + '&color=' + color + '&marca=' + marca[0].marca[0]);
    // } else {
    //     ajaxForSearch('?page=shop&op=filters&puertas=' + puertas + '&color=' + color + '&marca=' + 'a');

    //     // ajaxForSearch('module/shop/controller/controller_shop.php?op=ss&puertas=' + puertas + '&color=' + color + '&marca=a');
    // 
});