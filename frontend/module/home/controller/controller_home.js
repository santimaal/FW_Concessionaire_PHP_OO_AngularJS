app.controller('controller_home', function ($scope, carousel, categoria, type) {
    console.log(type);

    $scope.carousel = carousel;
    $scope.cat = categoria;
    $scope.type = type;

    // window.addEventListener('load', function () {
    //     new Glider(document.querySelector('.carousel__list'), {
    //         slidesToShow: 1,
    //         dots: '.carousel__indicator',
    //         draggable: true,
    //         arrows: {
    //             prev: '.carousel__prev',
    //             next: '.carousel__next'
    //         }
    //     });
    // });

    // angular.element($window).on('mousewheel', function () {
    //     let footerHeight = document.getElementById('container-footer').offsetHeight;
    //     let position = $window.scrollY + footerHeight;
    //     let bottom = document.body.scrollHeight - $window.innerHeight;

    //     if (position >= bottom) {
    //         if (loaded < total) {
    //             loaded += 3;
    //             $scope.brands = brands.slice(0, loaded);
    //             $scope.$apply();
    //         } else {
    //             angular.element($window).off('mousewheel');
    //         }
    //     }
    // });

    // $scope.redirect_shop = function (key, value) {
    //     var filters = [];
    //     filters.push({ key: key, value: [value] });
    //     localStorage.removeItem('filters');
    //     localStorage.setItem('filters', JSON.stringify(filters));
    //     location.href = "#/shop";
    // };

});