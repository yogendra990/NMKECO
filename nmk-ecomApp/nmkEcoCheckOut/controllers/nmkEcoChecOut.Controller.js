(function(){
'use strict';
var nmkEcoApp = angular.module('nmkEco');
nmkEcoApp.controller('nmkEcoCheckOutController',
                     ['$scope',
                      '$state',
                      '$stateParams',
                      'nmkEcoAuthService',
                      function($scope,$state,$stateParams,nmkEcoAuthService){
                          var vm = this;
                         $scope.ImagePath = $stateParams.image;
                         $scope.name = $stateParams.ProductName;
                         $scope.cardnumber;
                         $scope.MonthYear;
                         $scope.SameAsBillingAddress = true;
                         $scope.cardSpacing = function(){
                            vm.cardlength = $scope.cardnumber.length;
                            if(vm.cardlength < 5 ){
                                if(vm.cardlength % 4 == 0){
                                  $scope.cardnumber +="-";
                                }
                            }else {
                                if(vm.cardlength % 5 == 0){
                                    $scope.cardnumber += "-";
                                }
                            }
                         }
                         $scope.monthyear = function(){
                           vm.mothyearlength = $scope.MonthYear.length;
                           if(vm.mothyearlength < 3){
                               if(vm.mothyearlength % 2 == 0){
                                   $scope.MonthYear +="/";
                               }else{
                                   if(vm.monthyearlength % 3 == 0){
                                       $scope.MonthYear +="/";
                                   }
                               }
                           }
                         }
                         $scope.payment = function(paymentForm){
                           console.log(paymentForm);
                         }
                      }]);
})();