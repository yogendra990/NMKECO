(function () {
    'use strict';
    var nmkEcoApp = angular.module('nmkEco');
    nmkEcoApp.config(['stateHelperProvider','$urlRouterProvider',function(stateHelperProvider,$urlRouterProvider){
        var rootUrl="nmk-ecomApp",
         homeUrl='/nmkEcoHome/views/',
        brandUrl="/nmkEcoBrands/views/",
        productUrl="/nmkEcoProducts/views/",
        mycartUrl="/nmkEcoMycart/views/",
        categoriesUrl="/Categories/views/",
        fAQUrl ='/nmkEcoFAQ/views/',
        loginUrl ="/nmkEcoAuth/nmkEcoLogin/views/",
        registerUrl ="/nmkEcoAuth/nmkEcoRegister/views/",
        trackingUrl ="/nmkEcoTracking/views/";

        var Home ={
            name:'Home',
            url:'/home',
            templateUrl:rootUrl+homeUrl+'nmkEcoHome.html',
            controller:'nmkEcoHomeController'
        },contactUs={
            name:'contactUs',
            url:'/contact',
            templateUrl:rootUrl+homeUrl+'nmkEcoContactUs.html'
        },brands={
            name:'Brands',
            url:'/brands',
            templateUrl:rootUrl+brandUrl+'nmkEcoBrands.html'
        },products={
            name:'Products',
            url:'/products',
            templateUrl:rootUrl+productUrl+'nmkEcoProducts.html'
        },Tracking={
            name:'Tracking',
            url:'/Tracking',
            templateUrl:rootUrl+trackingUrl+'nmkEcoTracking.html'
        },cart={
            name:'MyCart',
            url:'/MyCart',
            templateUrl:rootUrl+mycartUrl+'nmkEcoMycart.html'
        },Categories={
            name:'Categories',
            url:'/Categories',
            templateUrl:rootUrl+categoriesUrl+'NmkEcoCategories.html'
        },FAQ={
                name:'FAQ',
                url:'/FAQ',
                templateUrl:rootUrl+fAQUrl+'nmkEcoFAQ.html'
            },Login={
            name:'Login',
            url:'/Login',
            templateUrl:rootUrl+loginUrl+'nmkEcoLogin.html'
            },Register = {
            name:'Register',
            url:'/Register',
            templateUrl:rootUrl+registerUrl+'nmkEcoRegister.html'
            };
        stateHelperProvider.state(Home);
        stateHelperProvider.state(contactUs);
        stateHelperProvider.state(Categories);
        stateHelperProvider.state(brands);
        stateHelperProvider.state(products);
        stateHelperProvider.state(cart);
        stateHelperProvider.state(Tracking);
        stateHelperProvider.state(FAQ);
        stateHelperProvider.state(Login);
        stateHelperProvider.state(Register);
        $urlRouterProvider.otherwise('/home');
    }])
})();