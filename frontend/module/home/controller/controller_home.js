app.controller('controller_home', function ($scope, carousel, categoria, type, books, $window) {
    console.log(carousel);
    console.log(books);
    $scope.show_btnmore = true;
    $scope.carousel = carousel;
    $scope.cat = categoria;
    $scope.type = type;
    $scope.books = books;
    $scope.myInterval = 3000;
    newsfor();

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

    $scope.click_book = function (book) {
        // console.log(book.volumeInfo.infoLink)
        window.open(book.volumeInfo.infoLink)
    }


    function newsfor(num = 4) {
        let limit = num;
        let book = [];



        for (i = 0; i < limit; i++) {
            if (books.items[i] != undefined) {
                book.push(books.items[i]);
            } else {
                i = limit - 1;
                $scope.show_btnmore = false;
            }
            console.log(book);
        }
        $scope.news = book;

        $scope.click_more = function () {
            newsfor(limit + 4);
        }
    }

});