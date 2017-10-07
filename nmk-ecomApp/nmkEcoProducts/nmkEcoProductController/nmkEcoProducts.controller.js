(function() {
  'use strict';
  var nmkEcoApp = angular.module('nmkEco');
  nmkEcoApp.controller('nmkEcoProductController', ['$scope', '$state', '$stateParams', 'nmkEcoAuthService', '$rootScope', '$localStorage', function($scope, $state, $stateParams, nmkEcoAuthService, $rootScope, $localStorage) {
      var vm = this;
      $scope.productName = $stateParams.CategoryName;
      $scope.productList = [];
      angular.forEach($localStorage.product,function(v){
        $scope.productList.push({name:v.name,ImagePath:v.ImagePath});
      });    
      var onSuccess = function(response) {                 
          if (response) {
              angular.forEach(response.data.items, function(v, k) {
                  $scope.productName = v.categoryPath;
                  $scope.ImagePath = v.largeImage;
                  if($localStorage.product instanceof Array){
                    $localStorage.product.push({name:v.categoryPath,ImagePath:v.largeImage});
                  }else{
                    $localStorage.product = [{name:v.categoryPath,ImagePath:v.largeImage}];
                  }
              });           
          }
        }
      var onError = function(response) {
          if (response) {
              console.log(response)
          }
      };
      var urldatabase = {
          'mobile': "http://api.walmartlabs.com/v1/items?apiKey=yuuznuvvmbxchy8urbhssb7z&upc=190198051875&format=json",
          'Laptops': "http://api.walmartlabs.com/v1/items?apiKey=yuuznuvvmbxchy8urbhssb7z&upc=884116218746&format=json",
          'HouseAppliances': "Helloworld"
      }
      var url = ($stateParams.CategoryName === "Laptops") ? urldatabase.Laptops : ($stateParams.CategoryName === "Mobile Phones") ? urldatabase.mobile :
          urldatabase.HouseAppliances;
      nmkEcoAuthService.WalMart(url).then(onSuccess, onError);
      $scope.AddCart = function() {
          vm.cartObj = {
              name: $scope.productName,
              ImagePath: $scope.ImagePath
          }
          if ($localStorage.productList instanceof Array) {
              $localStorage.productList.push({
                  name: $scope.productName,
                  ImagePath: $scope.ImagePath
              });
          } else {
              $localStorage.productList = [{
                  name: $scope.productName,
                  ImagePath: $scope.ImagePath
              }];
          }
          nmkEcoAuthService.cartval = nmkEcoAuthService.cartval + 1;
          $rootScope.$broadcast('CartValue', nmkEcoAuthService.cartval);
      };
      $rootScope.$on('upDataCartVal', function(e, d) {
          nmkEcoAuthService.cartval = d;
      });
  }])
})();