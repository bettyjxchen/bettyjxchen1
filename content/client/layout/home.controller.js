(function () {

    angular
        .module('homepage.layout')
        .controller('homepageController', HomepageController)

    HomepageController.$inject = ['messageService', '$timeout', '$location', '$anchorScroll']

    function HomepageController(messageService, $timeout, $location, $anchorScroll) {
        var vm = this

        vm.formData = {}

        init()

        vm.submitMessage = _submitMessage

        function init() {
            _scrollToTop()   
        }

        function _submitMessage() {
            console.log(vm.formData)
            return messageService.create(vm.formData)
                .then(() => {
                    vm.formData = {}
                })
        }

        function _scrollToTop() {
            $timeout(() => {
                $location.hash('')
                $anchorScroll()
            })
        }

    }


})();