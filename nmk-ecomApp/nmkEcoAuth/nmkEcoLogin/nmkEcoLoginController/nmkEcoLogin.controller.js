(function(){
 'use strict';
 var nmkEcoApp = angular.module('nmkEco');
 nmkEcoApp.controller('nmkEcoLoginController',['$scope','nmkEcoAuthService',function($scope, nmkEcoAuthService){
    $scope.login ='Yogendra';
    console.log($scope.login);
    $scope.onLogin = function(form){
    console.log(form);
    $scope.apikey="JF5eMlrB2pr3XkySDpW1h7bAJbIkUw0ayHWjgJjG";
    $scope.params = "&per_page=8";
    var onSuccess = function(response){
    console.log(response);
    }
    var onError = function(response){
        console.log(response);
    }
     nmkEcoAuthService.ValidateUser($scope.apikey, $scope.params).then(onSuccess, onError);
    }
 }]);
})();