(function () {

    angular
        .module('client.admin')
        .controller('messagesController', MessagesController)

    MessagesController.$inject = ['messages', 'messageService', '$state', '$stateParams']

    function MessagesController(messages, messageService, $state, $stateParams) {
        var vm = this

        vm.messages = []
        vm.totalItems = null
        vm.currentPage = null

        vm.delete = _delete
        vm.pageChanged = _pageChanged

        init()

        function init() {
            vm.messages = messages.messages
            vm.totalItems = messages.count
            vm.currentPage = $stateParams.page

        }

        function _delete($index) {
            let id = vm.messages[$index]._id
            return messageService.delete(id)
                .then(() =>
                    vm.messages.splice($index, 1)
                )
        }

        function _pageChanged (currentPage) {
            $state.go(`admin.messages`, { page: currentPage }, {reload: true})
            window.scrollTo(0, 0)
        }   



    }


})();