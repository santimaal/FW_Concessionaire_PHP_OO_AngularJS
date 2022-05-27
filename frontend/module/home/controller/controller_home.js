app.controller('controller_home', function ($scope, carousel, categoria, type, books, $window) {
    console.log(carousel);
    console.log(books);

    $scope.carousel = carousel;
    $scope.cat = categoria;
    $scope.type = type;
    $scope.books = books;
    $scope.myInterval = 3000;

    $scope.catclick = function (cat) {
        console.log(cat)
        localStorage.setItem('category', cat);
        $window.location.href = '#/shop';
    }

    $scope.tpclick = function (type) {
        console.log(type)
        localStorage.setItem('type', type);
        $window.location.href = '#/shop';
    }

    $scope.brdclick = function (brd) {
        console.log(brd)
        localStorage.setItem('marca', brd);
        $window.location.href = '#/shop';
    }

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