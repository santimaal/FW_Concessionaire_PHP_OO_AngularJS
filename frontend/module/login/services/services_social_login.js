app.factory('services_social_login', ['$rootScope', 'services', 'toastr', '$window', 'services_lstorage', function ($rootScope, services, toastr, $window, services_lstorage) {
    let service = { initialize, google, github }
    return service;

    function initialize() {
        var firebaseConfig = {
            apiKey: "AIzaSyBTcYCXwCVU0TjnIQzmTUpEhtdijTvPtJY",
            authDomain: "concessionaire-santidaw.firebaseapp.com",
            databaseURL: "https://concessionaire-santidaw.firebaseio.com",
            projectId: "concessionaire-santidaw",
            storageBucket: "",
            messagingSenderId: "613764177727"
        };
        firebase.initializeApp(firebaseConfig);
    }

    function google() {
        console.log("google");
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('email');
        let authService = firebase.auth();

        authService.signInWithPopup(provider)
            .then(function (result) {
                console.log(result);
                services.post('login', 'sl_gmail', { 'id': result.user.uid, 'username': result.user.displayName, 'avatar': result.user.photoURL })
                    .then(function (response) {
                        services_lstorage.token_add(response);
                        localStorage.setItem('reload', 'yes')
                        $window.location.href = '#home';
                    }, function (error) {
                        console.log(error);
                    });

                // social_login({id:result.user.uid, username:result.user.displayName, email:result.user.email, avatar:result.user.photoURL});
            })
            .catch(function (error) {
                console.log('Se ha encontrado un error:', error);
            });
    }
    function github() {
        console.log("github");
        let provider = new firebase.auth.GithubAuthProvider();
        provider.addScope('email');
        let authService = firebase.auth();

        authService.signInWithPopup(provider)
            .then(function (result) {
                console.log(result);
                services.post('login', 'sl_github', { 'id': result.user.uid, 'username': result.user.displayName, 'avatar': result.user.photoURL })
                    .then(function (response) {
                        services_lstorage.token_add(response);
                        localStorage.setItem('reload', 'yes')
                        $window.location.href = '#home';
                    }, function (error) {
                        console.log(error);
                    });
            })
            .catch(function (error) {
                console.log('Se ha encontrado un error:', error);
            });
    }

}]);