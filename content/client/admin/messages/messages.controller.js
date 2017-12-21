(function () {

    angular
        .module('client.admin')
        .controller('messagesController', MessagesController)

    MessagesController.$inject = ['messages', 'messageService']

    function MessagesController(messages, messageService) {
        var vm = this

        vm.messages = []

        vm.delete = _delete

        init()

        function init() {
            vm.messages = messages
            console.log(vm.messages)
        }

        function _delete($index) {
            let id = vm.messages[$index]._id
            return messageService.delete(id)
                .then(() =>
                    vm.messages.splice($index, 1)
                )
        }

    }


})();