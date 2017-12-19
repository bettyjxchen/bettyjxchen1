(function () {

    angular
        .module('client.site')
        .controller('lasoController', LasoController)

    LasoController.$inject = ['$window', '$timeout']

    function LasoController($window, $timeout) {
        var vm = this

        function init() {
            $timeout(() => $window.App().init())
        }

    }


})();