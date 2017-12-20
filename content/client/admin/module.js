(function () {

    angular.module('client.admin', ['ui.router'])
    angular.module('client.admin').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('admin.home', {
                url: '/home',
                views: {
                    'content@admin': {
                        templateUrl: 'client/admin/home/home.html',
                        controller: 'homeController as homeCtrl'
                    }
                }
            })
            .state('admin.messages', {
                url: '/messages',
                views: {
                    'content@admin': {
                        templateUrl: 'client/admin/messages/messages.html',
                        controller: 'messagesController as msgCtrl'
                    }
                },
                resolve: {
                    messages: readAllMessages
                }
            })
    }

    readAllMessages.$inject = ['messageService']
    function readAllMessages(messageService) {
        return messageService.readAll()
            .then(data => data.items)
    }

})();