(function () {
    'use strict'
    angular
        .module('client.crud')
        .config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site.test', {
                url: '/test',
                views: {
                    'content': {
                        templateUrl: 'client/crud/test/index.html',
                        controller: 'testController as ctrl',
                    }
                }
            })
    }
})();