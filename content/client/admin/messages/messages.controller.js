(function () {

    angular
        .module('client.admin')
        .controller('messagesController', MessagesController)

    MessagesController.$inject = ['messages']

    function MessagesController(messages) {
        var vm = this

        vm.messages = []

        init()

        function init() {
           vm.messages = messages
        }

    }


})();