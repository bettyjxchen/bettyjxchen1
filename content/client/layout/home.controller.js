(function () {

    angular
        .module('homepage.layout')
        .controller('homeController', HomeController)

    HomeController.$inject = ['messageService']

    function HomeController(messageService) {
        var vm = this

        vm.formData = {}

        init()

        vm.submitMessage = _submitMessage

        function init() {
            console.log('home')    
        }

        function _submitMessage() {
            return messageService.create(vm.formData)
                .then(() => {
                    vm.formData = {}
                })
        }

    }


})();