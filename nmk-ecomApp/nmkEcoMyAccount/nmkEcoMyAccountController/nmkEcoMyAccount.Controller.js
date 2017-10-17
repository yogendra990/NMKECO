(function(){
 'use strict';
 var nmkEcoApp = angular.module('nmkEco');
 nmkEcoApp.controller('nmkEcoMyAccountController',['$scope','$localStorage','nmkEcoAuthService',function($scope,$localStorage,nmkEcoAuthService){
    var vm = this;
    $scope.uid;
    $scope.userId;
    $scope.pwd;
    $scope.firstName;
    $scope.lastName;
    $scope.middleName;
    $scope.emailAddress;
    $scope.homePhone;
    $scope.workPhone;
    $scope.mobilePhone;
    $scope.fax;
    $scope.userInformation = {
        'uid':$localStorage.userInfo.uid,
        'userId':$localStorage.userInfo.userId,
        'pwd':$localStorage.userInfo.pwd,
        'firstName':$localStorage.userInfo.firstName,
        'lastName':$localStorage.userInfo.lastName,
        'middleName':$localStorage.userInfo.middleName,
        'emailAddress':$localStorage.userInfo.emailAddress,
        'homePhone':$localStorage.userInfo.homePhone,
        'workPhone':$localStorage.userInfo.workPhone,
        'mobilePhone':$localStorage.userInfo.mobilePhone,
        'fax':$localStorage.userInfo.fax,
        }
    $scope.userIdd = function(data){$scope.userId = data};
    $scope.fristnamme = function(data){ $scope.firstName = data};
    $scope.lastnamme = function(data){ $scope.lastName = data};    
    $scope.mobilephonne = function(data){ $scope.mobilePhone = data};
    $scope.homephonne = function(data){ $scope.homePhone = data};
    $scope.password = function(data){ $scope.pwd = data};
    $scope.Email = function(data){$scope.emailAddress = data};
    $scope.UpdateInfo = function(uid,data){
        vm.url ="http://localhost:8080/user-api-service/api/v1/user";
        vm.userObj ={           
            "userId":$scope.userId || $localStorage.userInfo.userId,
            "pwd": $scope.pwd || $localStorage.userInfo.pwd,
            "firstName": $scope.firstName || $localStorage.userInfo.firstName,
            "lastName": $scope.lastName || $localStorage.userInfo.lastName,
            "middleName": $localStorage.userInfo.middleName,
            "emailAddress":$scope.emailAddress || $localStorage.userInfo.emailAddress,
            "homePhone": $scope.homePhone || $localStorage.userInfo.homePhone,
            "workPhone": "7078094152",
            "mobilePhone":$scope.mobilePhone || $localStorage.userInfo.mobilePhone,
            "fax": "6549874152",
            "status": "actv",
            "createdBy": "Hardik",
            "createDate": 1507618800000,
            "modifiedBy": "Hardik",
            "modifiedDate": 1507964400000
        }
        vm.OnSuccess = function(response){
            if(response){
                console.log(response);
            }
        };
        vm.OnError = function(response){
            if(response){
                console.log(response);
            }
        }
        nmkEcoAuthService.UpdateUserInfo(vm.url,vm.userObj).then(vm.OnSuccess,vm.OnError);
    };       
             console.log($localStorage.userInfo);
 }]);
})();