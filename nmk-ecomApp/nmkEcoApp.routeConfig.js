(function() {
    'use strict';
    var nmkEcoApp = angular.module('nmkEco');
    nmkEcoApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        var rootUrl = "nmk-ecomApp",
            homeUrl = '/nmkEcoHome/views/',
            brandUrl = "/nmkEcoBrands/views/",
            productUrl = "/nmkEcoProducts/views/",
            mycartUrl = "/nmkEcoMycart/views/",
            categoriesUrl = "/Categories/views/",
            fAQUrl = '/nmkEcoFAQ/views/',
            loginUrl = "/nmkEcoAuth/nmkEcoLogin/views/",
            registerUrl = "/nmkEcoAuth/nmkEcoRegister/views/",
            trackingUrl = "/nmkEcoTracking/views/",
            CheckOutUrl = "/nmkEcoCheckOut/views/",
            MyAccountUrl = "/nmkEcoMyAccount/views/";

        var Home = {
                name: 'Home',
                url: '/home',
                templateUrl: rootUrl + homeUrl + 'nmkEcoHome.html',
                controller: 'nmkEcoHomeController'
            },
            contactUs = {
                name: 'contactUs',
                url: '/contact',
                templateUrl: rootUrl + homeUrl + 'nmkEcoContactUs.html'
            },
            AboutUs = {
                name: 'AboutUs',
                url: '/About',
                templateUrl: rootUrl + homeUrl + 'nmkEcoAboutUs.html'
            },
            brands = {
                name: 'Brands',
                url: '/brands',
                templateUrl: rootUrl + brandUrl + 'nmkEcoBrands.html'
            },
            products = {
                name: 'Products',
                url: '/products',
                templateUrl: rootUrl + productUrl + 'nmkEcoProducts.html',
                controller:'nmkEcoProductController'
            },
            Tracking = {
                name: 'Tracking',
                url: '/Tracking',
                templateUrl: rootUrl + trackingUrl + 'nmkEcoTracking.html'
            },
            cart = {
                name: 'MyCart',
                url: '/MyCart',
                templateUrl: rootUrl + mycartUrl + 'nmkEcoMycart.html',
                controller: 'nmkEcomMyCartController'
            },
            Categories = {
                name: 'Categories',
                url: '/Categories',
                templateUrl: rootUrl + categoriesUrl + 'NmkEcoCategories.html'
            },
            FAQ = {
                name: 'FAQ',
                url: '/FAQ',
                templateUrl: rootUrl + fAQUrl + 'nmkEcoFAQ.html'
            },
            Login = {
                name: 'Login',
                url: '/Login',
                templateUrl: rootUrl + loginUrl + 'nmkEcoLogin.html',
                controller: 'nmkEcoLoginController'
            },
            Register = {
                name: 'Register',
                url: '/Register',
                templateUrl: rootUrl + registerUrl + 'nmkEcoRegister.html',
                controller: 'nmkEcoRegisterController'
            },
            productList = {
                name: 'selectedCategoryItem',
                url: '/selectedCategoryItem/:CategoryName',
                templateUrl: rootUrl + productUrl + 'nmkEcoProductsList.html',
                controller: 'nmkEcoProductController'
            },
            proceedToCheckOut = {
                name:'proceedToCheckOut',
                url:'/proceedToCheckOut/:image/:ProductName',
                templateUrl:rootUrl + CheckOutUrl + 'nmkEcoCheckout.html',
                controller:'nmkEcoCheckOutController'
            },
            OnSuccessLogin = {
                name:'LoggedIn',
                url:'/LoggedIn/:IsSignedIn',
                templateUrl: rootUrl + productUrl + 'nmkEcoProducts.html',
                controller:'nmkEcoProductController'
            },
            MyAccount = {
                name:'MyAccount',
                url:'/MyAccount',
                templateUrl:rootUrl+MyAccountUrl+'nmkEcoMyAccount.view.html',
                controller:'nmkEcoMyAccountController'
            };
        $stateProvider.state(Home);
        $stateProvider.state(contactUs);
        $stateProvider.state(AboutUs);
        $stateProvider.state(Categories);
        $stateProvider.state(brands);
        $stateProvider.state(products);
        $stateProvider.state(cart);
        $stateProvider.state(Tracking);
        $stateProvider.state(FAQ);
        $stateProvider.state(Login);
        $stateProvider.state(Register);
        $stateProvider.state(productList);
        $stateProvider.state(proceedToCheckOut);
        $stateProvider.state(OnSuccessLogin);
        $stateProvider.state(MyAccount);
        $urlRouterProvider.otherwise('/home');
    }])
})();