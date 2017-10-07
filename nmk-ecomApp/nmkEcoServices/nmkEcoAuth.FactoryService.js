(function() {
    'use strict';
    var nmkEcoApp = angular.module('nmkEco');
    nmkEcoApp.factory('nmkEcoAuthService', ['$http', '$q', function($http, $q) {
        var nmkEcoAuthService = {};
        nmkEcoAuthService.ValidateUser = function(apiKey, params) {
            var defer = $q.defer();
            var urlBaseUser = 'https://api.ed.gov/data/mbk-highschool-dropout?api_key=' + apiKey + params;
            var headers = {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
            var onSuccess = function(response) {
                if (response) {
                    return defer.resolve(response);
                }
            };
            var onError = function(response) {
                if (response) {
                    return defer.reject(response);
                }
            }

            return $http({
                method: 'GET',
                url: urlBaseUser,
                headers: headers,
                cache: true
            }).then(onSuccess, onError);
            return defer.promise();
        };
        nmkEcoAuthService.Register = function(UserRegObj) {
            var defer = $q.defer();
            return $http({
                method: 'POST',
                url: urlBaseReg
            });
        }

        nmkEcoAuthService.WalMart = function(urlInfo) {
            var defer = $q.defer();
            var onSuccess = function(response) {
                defer.resolve(response);
            };
            var onError = function(response) {
                if (response) {
                    defer.reject(response);
                }
            };
            $http({
                url: urlInfo,
                method: "GET",
                cache: true
            }).then(onSuccess, onError);
            return defer.promise;
        };
        nmkEcoAuthService.MyCart = [];
        nmkEcoAuthService.cartval = 0;

        return nmkEcoAuthService;
    }]);

})();