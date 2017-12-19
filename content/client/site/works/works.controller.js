(function () {

    angular
        .module('client.layout')
        .controller('worksController', WorksController)

    WorksController.$inject = ['$window', '$timeout']

    function WorksController($window, $timeout) {
        var vm = this

        init()

        function init() {
            $window.themeAll()
            // $timeout(() => $window.App().init())
        }

    }


})();