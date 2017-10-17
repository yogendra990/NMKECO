(function(){
'use strict';
var nmkEcoApp = angular.module('nmkEco');
nmkEcoApp.controller('nmkEcoRegisterController',['$scope','nmkEcoAuthService','$state',function($scope,nmkEcoAuthService,$state){
    var vm = this;
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
    $scope.OnRegister = function(form){
       vm.UrlReg = 'http://localhost:8080/user-api-service/api/v1/user';
       vm.registerInfo = {
        "userId": form.UserName.$viewValue,
        "pwd":form.Password.$viewValue,
        "firstName":form.firstname.$viewValue,
        "lastName": form.lastname.$viewValue,
        "middleName":null,
        "emailAddress": form.email.$viewValue,
        "homePhone": null,
        "workPhone":null,
        "mobilePhone":form.mobile.$viewValue,
        "fax": null,
        "status": "active",
        "createdBy": "Yogendra",
        "createDate":1507618800000,
        "modifiedBy": "Yogendra",
        "modifiedDate":1507618800000    
    };
    console.log(vm.registerInfo);
    
    vm.OnSuccess = function(response){
        if(response.status === 201 && response.statusTex === "Created"){
            $rootScope.RegisterSuccessFull = "successfully registered please login now"            
            $state.go('Home');
        }
    }
    vm.OnError = function(response){
        console.log(response);
    }
    nmkEcoAuthService.RegisterUser(vm.UrlReg,vm.registerInfo).then(vm.OnSuccess,vm.OnError);
     console.log(vm.registerInfo);
    }
}]);

})();