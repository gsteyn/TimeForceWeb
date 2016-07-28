'use strict';
  
angular.module('timeForceApp.Authentication')
  
.controller('LoginCtrl',
    ['$scope', '$rootScope', '$location', 'AuthenticationService', 'FlashMessageService',
    function ($scope, $rootScope, $location, AuthenticationService, FlashMessageService) {
        // reset login status
        AuthenticationService.clearCredentials();
  
        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.login($scope.username, $scope.password, function(response) {
                if(response.success) {
                    AuthenticationService.setCredentials($scope.username, $scope.password);
                    $location.path('/');
                } else {
                    FlashMessageService.error(response.message);
                    $scope.dataLoading = false;
                }
            });
        };

        $scope.cancel = function() {
            $scope.username = '';
            $scope.password = '';
        };
    }]);