/* global angular */
/* https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md#application-structure */

(function () {
    ["client", "homepage", "admin"].forEach(function (appName) {
        'use strict';
        angular.module(appName, [
            // 3rd party
            'ui.router',
            'ui.bootstrap',

            //base / common
            `${appName}.layout`,
            'client._common',

            //services
            'client.authentication',
            'client.services',

            //views /controllers
            'client.crud',
            'client.hackers',
            'client.site',
            'client.admin'
        ])

        angular.module(appName)
            .config(RouteConfig)
            .run(StateErrorHandler)

        StateErrorHandler.$inject = ['$rootScope', '$log', '$state', '$window']

        function StateErrorHandler($rootScope, $log, $state, $window) {
            $rootScope.$on('$stateChangeError', info => $log.log(info))
            $rootScope.$on('$stateChangeSuccess', () => $window.localStorage.removeItem("reload"))
        }

        RouteConfig.$inject = [
            '$stateProvider',
            '$urlRouterProvider',
            '$locationProvider'
        ];

        function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise(($injector, $location) => {
                var $window = $injector.get('$window')
                if ($window.localStorage.getItem("reload")) {
                    $window.location.href = "/error"
                    $window.localStorage.removeItem("reload")
                }
                else {
                    $window.localStorage.setItem("reload", "true")
                    $window.location.reload()
                }
            });
            $locationProvider.html5Mode(true);

        }
    })

})();
