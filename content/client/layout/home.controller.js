(function () {

    angular
        .module('homepage.layout')
        .controller('homepageController', HomepageController)

    HomepageController.$inject = ['messageService']

    function HomepageController(messageService) {
        var vm = this

        vm.formData = {}

        init()

        vm.submitMessage = _submitMessage

        function init() {
            console.log('home')    
        }

        function _submitMessage() {
            console.log('hi')
            return messageService.create(vm.formData)
                .then(() => {
                    vm.formData = {}
                })
        }

    }


})();