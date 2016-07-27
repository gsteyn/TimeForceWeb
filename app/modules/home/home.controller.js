'use strict';
  
angular.module('timeForceApp.Home', [])
  
.controller('HomeCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    
    $scope.message = 'Welcome ' + $rootScope.globals.currentUser.username + '!';
    
}]);