/* global angular */
(function () {
    'use strict'

    angular.module('client.layout', ['ui.router'])
    angular.module('client.layout').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('home', {
                // abstract: true,
                url: '/home',
                views: {
                    'root': {
                        templateUrl: '/homepage.html',
                        // controller: 'homepageController as homepageCtrl',
                    }
                }
            })
            .state('site', {
                // abstract: true,
                // url: '/',
                views: {
                    'root': {
                        templateUrl: '/client/layout/site.tpl.html',
                        controller: 'siteController as siteCtrl',
                    }
                }
            })

    }
})()