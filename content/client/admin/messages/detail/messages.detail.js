(function () {

    angular
        .module('client.admin')
        .controller('messagesDetailController', MessagesDetailController)

    MessagesDetailController.$inject = ['message', 'messageService']

    function MessagesDetailController(message, messageService) {
        var vm = this

        vm.message = {}

        vm.toggleRead = _toggleRead
        vm.checkIsRead = _checkIsRead

        vm.red = 'red'

        init()

        function init() {
            vm.message = message
            console.log(vm.message)
            console.log(vm.message.isRead)
        }

        function _toggleRead() {
            console.log(`message read status changed to ${vm.message.isRead}`)
          
            messageService.update(vm.message)
                .then(data => {
                    console.log('updated')
                })
        }

    function _checkIsRead() {
        return vm.message.isRead
    }

    }


})();