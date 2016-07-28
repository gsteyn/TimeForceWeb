'use strict';

angular.module('timeForceApp.Registration')

.controller('RegistrationCtrl', function(UserService, $location, FlashMessageService) {
    
    var $ctrl = this;
    
    $ctrl.register = function() {
        $ctrl.dataLoading = true;
        
        UserService.create($ctrl.user).then(function(data) {
            if (data.success) {
                FlashMessageService.success('Registration successful', true);
                $location.path('/login');
            } else {
                FlashMessageService.success(response.errorMessage);
                $ctrl.dataLoading = false;
            }
        });
    };
    
});