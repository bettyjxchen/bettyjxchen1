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
                },
                resolve: {
                    authenticate: authenticate,
                    currentUser: getCurrentUser
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
                    messages: readAllMessages,
                    authenticate: authenticate
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
                    message: readMessage,
                    authenticate: authenticate
                }
            })
    }

    authenticate.$inject = ['$q', '$window', '$timeout', 'authenticationService']
    function authenticate($q, $window, $timeout, authenticationService) {
        let loginStatus = authenticationService.checkLoginStatus()
        if (loginStatus) {
            return $q.resolve()
        } else {
            $timeout(() => $window.location.href = "/login")
            return $q.reject()
        }
    }

    getCurrentUser.$inject = ['authenticationService']
    function getCurrentUser(authenticationService) {
        let currentUser = authenticationService.getCurrentUser()
        return currentUser
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