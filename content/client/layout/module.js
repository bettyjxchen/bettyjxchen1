/* global angular */
(function () {
    'use strict'

    angular.module('client.layout', ['ui.router'])
    angular.module('client.layout').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site', {
                views: {
                    'root': {
                        templateUrl: '/client/layout/site.tpl.html',
                        controller: 'siteController as siteCtrl',
                    }
                }
            })
    }
})();

/* global angular */
(function () {
    'use strict'

    angular.module('homepage.layout', ['ui.router'])
    angular.module('homepage.layout').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/homepage.html',
                controller: 'homeController as homeCtrl'
            })
    }
})();

/* global angular */
(function () {
    'use strict'

    angular.module('admin.layout', ['ui.router'])
    angular.module('admin.layout').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('admin', {
                url: '/admin',
                abstract: true,
                templateUrl: '/admin.html',
                controller: 'adminController as adminCtrl'
            })
    }
})();
