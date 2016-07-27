'use strict';

angular.module('timeForceApp.version', [
  'timeForceApp.version.interpolate-filter',
  'timeForceApp.version.version-directive'
])

.value('version', '0.1');
