(function() {
  'use strict';
  var nmkEco = angular.module('nmkEco', ['ui.router', 'ngSanitize', 'ngStorage',"xeditable"]);
  nmkEco.config(['$sceProvider','$httpProvider', function($sceProvider,$httpProvider) {
      $sceProvider.enabled(false);
  }]);
  nmkEco.run(['$rootScope','$localStorage','$transitions','editableOptions',function($rootScope,$localStorage,$transitions,editableOptions){
    editableOptions.theme = 'bs3';
    if($localStorage.userLoggedIn){
    $transitions.onSuccess({to:'*'},function(){    
    if($localStorage.userLoggedIn.IsLoggedIn){
      $rootScope.UserLoggedIn =$localStorage.userLoggedIn.IsLoggedIn;
      $rootScope.UserName =$localStorage.userLoggedIn.UserName;
    }
  })
};
  }]);
})();