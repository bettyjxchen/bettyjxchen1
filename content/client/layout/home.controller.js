(function () {

    angular
        .module('homepage.layout')
        .controller('homepageController', HomepageController)

    HomepageController.$inject = ['messageService']

    function HomepageController(messageService) {
        var vm = this

        vm.formData = {}
        vm.submitMessage = _submitMessage

        init()

        function init() {
             
        }

        function _submitMessage() {
            console.log(vm.formData)
            return messageService.create(vm.formData)
                .then(() => {
                    vm.formData = {}
                })
        }


    }


})();