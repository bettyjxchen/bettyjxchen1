(function () {

    angular
        .module('client.admin')
        .controller('messagesDetailController', MessagesDetailController)

    MessagesDetailController.$inject = ['message', 'messageService']

    function MessagesDetailController(message, messageService) {
        var vm = this

        vm.message = {}

        vm.toggle = _toggle

        init()

        function init() {
            vm.message = message
            // console.log(vm.message)
            console.log(vm.message.isUnread)
    
        }

        function _toggle() {
            console.log('hi')
        }


    }


})();