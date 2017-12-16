(function () {

    angular.module('client.site', ['ui.router'])
    angular.module('client.site').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('site.home', {
                url: '/home',
                views: {
                    'content': {
                        templateUrl: '/client/site/home/home.html',
                        controller: 'homeController as homeCtrl'
                    }
                }
            })
            .state('site.about', {
                url: '/about',
                views: {
                    'content@site': {
                        templateUrl: 'client/site/about/about.html',
                        controller: 'aboutController as aboutCtrl'
                    }
                }
            })
            .state('site.code', {
                url: '/code',
                views: {
                    'content@site': {
                        templateUrl: 'client/site/code/code.html',
                        controller: 'codeController as codeCtrl'
                    }
                }
            })
            .state('site.works', {
                url: '/works',
                views: {
                    'content@site': {
                        templateUrl: 'client/site/works/works.html',
                        controller: 'worksController as worksCtrl'
                    }
                }
            })

    }



})();