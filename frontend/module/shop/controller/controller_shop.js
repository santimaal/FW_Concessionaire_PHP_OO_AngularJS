app.controller('controller_shop', function ($scope, allcars, services_shop) {
    console.log("aa");
    console.log(allcars);
    $scope.allcars = allcars;
    var prueba = ['white', 'black']


    $scope.filters = function () {
        let color = []
        let pruebass = null;

        angular.forEach($scope.check, function (value, name) {
            // let color = [];
            console.log(value + name);

            if (value == true) {
                console.log(true);  
                color.push(name)
            } else {
                color.push('*')
            }
            console.log(color);
        });

        // console.log($scope.check.push(prueba[0]))
        // $scope.check.forEach(function(color) {
        //     console.log(color);
        // })

        // angular.forEach($scope.check, function (obj) {
        //     obj.check = $scope.check;
        //     console.log($scope.check)
        // });

        // for (row in prueba) {
        //     console.log($scope.check);
        //     // console.log($scope.check.row);
        //     // if ($scope.check.prueba[row])
        //     // console.log(prueba[row]);
        // }
        // // console.log($scope.check.white);
        // console.log("filt");
        // services_shop.filters("hoa");
    }
})