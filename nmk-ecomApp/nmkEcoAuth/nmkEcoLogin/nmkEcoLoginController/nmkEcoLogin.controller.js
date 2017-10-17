(function(){
 'use strict';
 var nmkEcoApp = angular.module('nmkEco');
 nmkEcoApp.controller('nmkEcoLoginController',['$scope','nmkEcoAuthService','$localStorage','$timeout','$state','$rootScope',
                                               function($scope, nmkEcoAuthService,$localStorage,$timeout,$state,$rootScope){
   var vm = this;  
    $scope.Validator;
    $scope.PreloaderLogin;

    vm.UrlCate = "http://localhost:8080/user-api-service/api/v1/user/userId/";
    $scope.onLogin = function(form){
        vm.UserId = form.UserId.$viewValue;
        vm.Password = form.EcoPassword.$viewValue;
        vm.EventData = {
            'validator':true,
            'PreloaderLogin':'../../../../shared/Preloaders/Preloader_6.gif'
        };
        console.log(form);
        // $scope.$emit('LoginValidation',vm.EventData);  
    vm.onSuccess = function(response){     
         if(response){
             if(response.status === 200 && response.statusText === "OK"){                
                if(vm.UserId === response.data.userId && vm.Password === response.data.pwd){
                    $localStorage.userLoggedIn = {
                        'UserName':response.data.userId,
                        'IsLoggedIn': true
                    };
                    $localStorage.userInfo = {
                        "uid": response.data.ui,
                        "userId":response.data.userId,
                        "pwd":response.data.pwd,
                        "firstName":response.data.firstName,
                        "lastName": response.data.lastName,
                        "middleName":response.data.middleName,
                        "emailAddress":response.data.emailAddress,
                        "homePhone": response.data.homePhone,
                        "workPhone":response.data.workPhone,
                        "mobilePhone":response.data.mobilePhone,
                        "fax":response.data.fax                        
                    };
                    $rootScope.UserLoggedIn =$localStorage.userLoggedIn.IsLoggedIn;
                    $rootScope.UserName =$localStorage.userLoggedIn.UserName;
                    $state.go('LoggedIn',{IsSignedIn:$localStorage.userLoggedIn.IsLoggedIn});
                }
             }
         }
    }
    vm.onError = function(response){
        if(response){
        console.log(response);
        }
    }
    //  nmkEcoAuthService.ValidateUser($scope.apikey, $scope.params)
    nmkEcoAuthService.LoginService(vm.UrlCate+vm.UserId).then(vm.onSuccess, vm.onError);
    }

    $scope.userLogOut = function(){
        if($rootScope.UserLoggedIn){
            $rootScope.UserLoggedIn = false;
            $rootScope.UserName = "";
            $localStorage.$reset();
            $state.go('Home');
        }
    }

    $scope.$on('LoginValidation',function(event,data){
        $scope.Validator = data.validator;
        $scope.PreloaderLogin = data.PreloaderLogin;
    });
 }]);
})();