app.controller('controller_shop', function ($scope, allcars, services_shop) {
    console.log("aa");
    console.log(allcars);
    $scope.allcars = allcars;

    $scope.filters = function () {
        let color = [];
        let puertas = [];
        let filters = [];
        angular.forEach($scope.radio, function (value, name) {
            puertas = value;
        });
        if (puertas.length != 0) {
            filters.push({ "puertas": puertas });
        } else {
            filters.push({ "puertas": "all" });
        }
        $scope.radio = '';

        angular.forEach($scope.check, function (value, name) {
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
        parsefilt()
        // services_shop.filters(filters);
    }
    function parsefilt() {
        var todo = JSON.parse(localStorage.getItem('filters'));
        // var marca = JSON.parse(localStorage.getItem('marca'));


        var puertas = todo[0].puertas[0];
        var color = todo[1].color;
        console.log(puertas);
        console.log(color);

        services_shop.filters(puertas, color, 'a')
        

        // if (marca != null) {
        //     url = "asda";
        //     services_shop.filters(url);
        //     // ajaxForSearch('?Fs=shop&op=filter&puertas=' + puertas + '&color=' + colowr + '&marca=' + marca[0].marca[0]);
        //     ajaxForSearch('?page=shop&op=filters&puertas=' + puertas + '&color=' + color + '&marca=' + marca[0].marca[0]);
        // } else {
        //     ajaxForSearch('?page=shop&op=filters&puertas=' + puertas + '&color=' + color + '&marca=' + 'a');

        //     // ajaxForSearch('module/shop/controller/controller_shop.php?op=ss&puertas=' + puertas + '&color=' + color + '&marca=a');
        // }
    }
})