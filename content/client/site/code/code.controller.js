(function () {

    angular
        .module('client.layout')
        .controller('codeController', CodeController)

    CodeController.$inject = ['$window', '$timeout']

    function CodeController($window, $timeout) {
        var vm = this

        function init() {
            $timeout(() => $window.App().init())
        }

    }


})();