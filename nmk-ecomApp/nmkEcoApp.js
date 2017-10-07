(function() {
  'use strict';
  var nmkEco = angular.module('nmkEco', ['ui.router', 'ngSanitize', 'ngStorage']);
  nmkEco.config(['$sceProvider', function($sceProvider) {
      $sceProvider.enabled(false);
  }])
})();