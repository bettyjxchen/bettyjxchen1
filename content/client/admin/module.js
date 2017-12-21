(function () {

    angular.module('client.admin', ['ui.router'])
    angular.module('client.admin').config(RouteConfig)

    RouteConfig.$inject = ['$stateProvider']

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('admin.home', {
                url: '/home',
                views: {
                    'content@': {
                        templateUrl: 'client/admin/home/home.html',
                        controller: 'homeController as homeCtrl'
                    }
                }
            })
            .state('admin.messages', {
                url: '/messages',
                views: {
                    'content@': {
                        templateUrl: 'client/admin/messages/messages.html',
                        controller: 'messagesController as msgCtrl'
                    }
                },
                resolve: {
                    messages: readAllMessages
                }
            })
            .state('admin.messages.detail', {
                url: '/:id',
                views: {
                    'content@': {
                        templateUrl: 'client/admin/messages/detail/messages-detail.html',
                        controller: 'messagesDetailController as detailCtrl'
                    }
                },
                resolve: {
                    message: readMessage
                }
            })
    }

    readAllMessages.$inject = ['messageService']
    function readAllMessages(messageService) {
        return messageService.readAll()
            .then(data => data.items)
    }

    readMessage.$inject = ['messageService', '$stateParams']
    function readMessage(messageService, $stateParams) {
        return messageService.readById($stateParams.id)
            .then(data => data.item)
    }

})();