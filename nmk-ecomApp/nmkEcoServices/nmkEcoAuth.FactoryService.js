(function() {
    'use strict';
    var nmkEcoApp = angular.module('nmkEco');
    nmkEcoApp.factory('nmkEcoAuthService', ['$http', '$q', function($http, $q) {
        var nmkEcoAuthService = {};
        var vm = this;      
        nmkEcoAuthService.LoginService = function(url){
            var defer = $q.defer();
            vm.OnSucess = function(response){
                if(response){
                    defer.resolve(response);
                }
            };
            vm.OnError = function(response){
                defer.reject(response);
            }            
            $http({
               method:'GET',
               url:url,
            //    headers:Header
            }).then(vm.OnSucess,vm.OnError);
            return defer.promise;
        };
        nmkEcoAuthService.RegisterUser = function(UrlBaseReg,UserRegObj) {
            var defer = $q.defer();

           vm.onSuccessRegister = function(response){
               if(response){ defer.resolve(response)}
           }
           vm.onError = function(response){
               if(response) { defer.reject(response)}
           };
            $http({
                url: UrlBaseReg,
                method: 'POST',                              
                data:UserRegObj,               
            }).then(vm.onSuccessRegister,vm.onError);
            return defer.promise;
        }

        nmkEcoAuthService.WalMart = function(urlInfo) {
            var defer = $q.defer();
            vm.onSuccess = function(response) {
                defer.resolve(response);
            };
            vm.onError = function(response) {
                if (response) {
                    defer.reject(response);
                }
            };
            $http({
                url: urlInfo,
                method: "GET",
                cache: true
            }).then(vm.onSuccess,vm.onError);
            return defer.promise;
        };
        nmkEcoAuthService.Category = function(urlCate){
            var defer = $q.defer();
            vm.onSuccess = function(response){
                defer.resolve(response);
            };
            vm.onError = function(response){
                defer.reject(response);
            }
            $http({
                url:urlCate,
                method:'GET',
                cache:true
            }).then(vm.onSuccess,vm.onError);
            return defer.promise;
            };
        nmkEcoAuthService.UpdateUserInfo = function(url,UserObj){
            var defer = $q.defer();
            vm.onSuccess = function(response){
                defer.resolve(response);
            }
            vm.onError = function(response){
                defer.reject(response);
            }
            $http({
                url:url,
                method:"PUT",
                data:UserObj,
                cache:true
            }).then(vm.onSuccess,vm.onError);
            return defer.promise;
        };
        nmkEcoAuthService.MyCart = [];
        nmkEcoAuthService.cartval = 0;

        return nmkEcoAuthService;
    }]);

})();