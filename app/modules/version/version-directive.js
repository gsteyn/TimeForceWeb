'use strict';

angular.module('timeForceApp.version.version-directive', [])

.directive('appVersionDir', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);
