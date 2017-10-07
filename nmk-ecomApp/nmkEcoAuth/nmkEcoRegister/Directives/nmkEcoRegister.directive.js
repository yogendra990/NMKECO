(function(){
'use strict';

var PasswordValidation = function(){
    return{
        restrict:'EA',
        require:'?ngModel',
        link:function(scope,element, ngModel){
            if(!ngModel){ return ;}
            var validate = function(){
                var val1 = ngModel.$viewValue;
                var val2 = attrs.passwordVerify;
                ngModel.$setValidity('PasswordValidation', val1 === val2);
            }
            scope.$watch(attrs.ngModel,function(){
                validate();
            });
            atts.$observe('PasswordValidation',function(val){
                validate();
            })
        }
    }
}
angular.module('nmkEco').directive('PasswordValidation',PasswordValidation);
})();

// (function(){
//     'use strict';
//     var nmkEcoApp = angular.module('nmkEco');
//     nmkEcoApp.directive('PasswordValidation',function(){
//         return {
//             restrict:
//         }
//     })
// })();