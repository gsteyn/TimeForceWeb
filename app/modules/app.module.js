'use strict';

// Declare app level module which depends on views, and components
angular.module('timeForceApp', [
    'ngRoute',
    'ngCookies',
    'timeForceApp.version',
    'timeForceApp.Authentication',
    'timeForceApp.Registration',
    'timeForceApp.Home'
])
.config(config)
.run(run);

config.$inject = ['$routeProvider'];
function config($routeProvider) {
    $routeProvider
        .when('/login', {
            controller: 'LoginCtrl',
            templateUrl: 'modules/authentication/views/login.html',
            controllerAs: '$ctrl'
        })
        .when('/', {
            controller: 'HomeCtrl',
            templateUrl: 'modules/home/views/home.html',
            controllerAs: '$ctrl'
        })
        .when('/register', {
            controller: 'RegistrationCtrl',
            templateUrl: 'modules/registration/views/registration.html',
            controllerAs: '$ctrl'
        })
        .otherwise({ redirectTo: '/login' });
}

run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
function run($rootScope, $location, $cookieStore, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
        var restrictedPage = ['/login', '/register'].indexOf($location.path()) === -1;
        var loggedIn = $rootScope.globals.currentUser;
        if (restrictedPage && !loggedIn) {
            $location.path('/login');
        }
    });
}
