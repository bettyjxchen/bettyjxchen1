(function () {

    angular.module('client.site', ['ui.router'])
    angular.module('client.site').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
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
            .state('site.gallery', {
                url: '/gallery',
                views: {
                    'content@site': {
                        templateUrl: 'client/site/gallery/gallery.html',
                        controller: 'galleryController as galleryCtrl'
                    }
                }
            })

    }



})();