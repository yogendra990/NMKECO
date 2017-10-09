(function(){
 'use strict';
 var nmkEcoApp = angular.module('nmkEco');
 nmkEcoApp.controller('nmkEcoLoginController',['$scope','nmkEcoAuthService','$timeout',function($scope, nmkEcoAuthService,$timeout){
    $scope.login ='Yogendra';
    var vm = this;
    console.log($scope.login);
    $scope.Validator;
    $scope.PreloaderLogin;
    $scope.onLogin = function(form){
        vm.EventData = {
            'validator':true,
            'PreloaderLogin':'../../../../shared/Preloaders/Preloader_6.gif'
        };
        $scope.$emit('LoginValidation',vm.EventData);        
    console.log(form);
    $scope.apikey="JF5eMlrB2pr3XkySDpW1h7bAJbIkUw0ayHWjgJjG";
    $scope.params = "&per_page=8";
    var onSuccess = function(response){
     $timeout([function(){

     }]);
    console.log(response);
    }
    var onError = function(response){
        console.log(response);
    }
     nmkEcoAuthService.ValidateUser($scope.apikey, $scope.params).then(onSuccess, onError);
    }

    $scope.$on('LoginValidation',function(event,data){
        $scope.Validator = data.validator;
        $scope.PreloaderLogin = data.PreloaderLogin;
    });
 }]);
})();