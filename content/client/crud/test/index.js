
(function () {
    'use strict'

    angular.module('client.crud')
        .controller('testController', TestController)

    TestController.$inject = ['hackerService']

    function LocationIndexController(hackerService) {
        var vm = this
        vm.testArray = null

        init()

        function init() {
            hackerService.readAll()
                .then(array => {
                    console.log(array)
                    vm.testArray = array
                })
        }
    }
})();