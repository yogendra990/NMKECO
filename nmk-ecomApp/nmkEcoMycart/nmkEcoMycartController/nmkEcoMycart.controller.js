(function() {
    'use strict';
    var nmkEcoApp = angular.module('nmkEco');
    nmkEcoApp.controller('nmkEcomMyCartController', ['$scope', '$state', '$rootScope', 'nmkEcoAuthService', '$localStorage', function($scope, $state, $rootScope, nmkEcoAuthService, $localStorage) {
        var vm = this;
        $scope.products = [];
        var cartValueLocal = 0;
        $rootScope.$on('CartValue', function(event, data) {
            $scope.Cartvalue = data;
        });
        if ($localStorage.productList) {
            angular.forEach($localStorage.productList, function(v, k) {
                $scope.products.push({
                    name: v.name,
                    ImagePath: v.ImagePath
                });
                cartValueLocal = cartValueLocal + 1;
            });
            nmkEcoAuthService.cartval = cartValueLocal;
            $rootScope.$broadcast('CartValue', cartValueLocal);
        }
        $scope.removeItem = function(p) {
            var index = $scope.products.indexOf(p);
            // nmkEcoAuthService.MyCart.splice(index,1);
            $localStorage.productList.splice(index, 1);
            $scope.products.splice(index, 1);
            console.log($localStorage.productList.length);
            $rootScope.$broadcast('CartValue', $localStorage.productList.length);
            $rootScope.$broadcast('upDataCartVal', $localStorage.productList.length);
        };
        $scope.Proceed = function(ImagePath,name){
          vm.ImagePath = ImagePath;
          vm.ProductName = name;
          $state.go("proceedToCheckOut",{image:vm.ImagePath,ProductName:vm.ProductName});
        }
    }])
})();