(function () {

    angular
        .module('client.site')
        .controller('snappleController', SnappleController)

    SnappleController.$inject = ['$window', '$timeout']

    function SnappleController($window, $timeout) {
        var vm = this

        function init() {
            $timeout(() => $window.App().init())
        }

    }


})();