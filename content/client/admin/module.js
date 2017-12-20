(function () {

    angular.module('client.admin', ['ui.router'])
    angular.module('client.admin').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('admin.messages', {
                url: '/messages',
                views: {
                    'content@admin': {
                        templateUrl: 'client/admin/messages/messages.html',
                        controller: 'messagesController as msgCtrl'
                    }
                }
            })
    }

})();