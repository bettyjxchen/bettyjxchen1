(function () {

    angular
        .module('client.admin')
        .controller('messagesController', MessagesController)

    MessagesController.$inject = ['$window']

    function MessagesController($window) {
        var vm = this

        init()

        function init() {
            // $window.themeAll()
        }

    }


})();