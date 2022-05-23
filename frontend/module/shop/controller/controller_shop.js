app.controller('controller_shop', function ($scope, allcars, services_shop, $window) {
    console.log("aa");
    console.log(allcars);
    $scope.check = false;
    if (!localStorage.getItem('filters')) {
        $scope.allcars = allcars;
    } else {
        var todo = JSON.parse(localStorage.getItem('filters'));
        var puertas = todo[0].puertas[0];
        var color = todo[1].color;
        console.log(puertas);
        console.log(color);

        services_shop.filters(puertas, color, 'a')
        highlight();
    }

    $scope.filters = function () {
        let color = [];
        let puertas = [];
        let filters = [];

        // if (localStorage.getItem('filters')) {
        //     let filterss = JSON.parse(localStorage.getItem('filters'));
        //     console.log(filterss);

        //     for (row in filterss[1].color) {
        //         color.push(filterss[1].color[row]);
        //     }

        // }

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
            // console.log(value + name);
            if (value == true) {
                color.push(name)
            }
        });

        if (color.length != 0) {
            filters.push({ "color": color });
        } else {
            filters.push({ "color": "all" });
        }
        localStorage.setItem('filters', JSON.stringify(filters));
        console.log(filters)
        setInterval(function () {
            $window.location.reload()
        }, 10000);


    }

    $scope.details = function () {
        console.log("hola");
    }

    $scope.reset_all = function () {
        localStorage.removeItem('filters');
        localStorage.removeItem('marcas');
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