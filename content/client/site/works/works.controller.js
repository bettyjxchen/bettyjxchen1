(function () {

    angular
        .module('client.layout')
        .controller('worksController', WorksController)

    WorksController.$inject = ['$window', '$timeout']

    function WorksController($window, $timeout) {
        var vm = this

        function init() {
            $timeout(() => $window.App().init())
        }

    }


})();