(function () {

    angular.module('client.admin', ['ui.router'])
    angular.module('client.admin').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            // .state('admin', {
            //     url: '/admin',
            //     templateUrl: 'client/site/code/code.html',
            //     controller: 'codeController as codeCtrl'

            //     views: {
            //         'content@site': {
            //             templateUrl: 'client/site/code/code.html',
            //             controller: 'codeController as codeCtrl'
            //         }
            //     }
            // })
           
    }



})();