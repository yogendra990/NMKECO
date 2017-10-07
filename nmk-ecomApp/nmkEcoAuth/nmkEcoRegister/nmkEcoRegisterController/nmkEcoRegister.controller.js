(function(){
'use strict';
var nmkEcoApp = angular.module('nmkEco');
nmkEcoApp.controller('nmkEcoRegisterController',['$scope',function($scope){
    $scope.register = "This is registration page";
    $scope.Password;
    $scope.PasswordMatch = true;
    $scope.confirmPassword;
    // $scope.$watch('confirmPassword',function(){
        $scope.OnChange = function(){
        if($scope.Password === $scope.confirmPassword && $scope.Password.length == $scope.confirmPassword.length){           
            $scope.PasswordMatch =false;            
        }
        else{ $scope.PasswordMatch = true; console.log($scope.PasswordMatch);}
    };
    console.log($scope.register);
}]);

})();