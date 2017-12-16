(function () {

    angular
        .module('client.layout')
        .controller('siteController', SiteController)

    SiteController.$inject = ['$window', '$timeout']

    function SiteController($window, $timeout) {
        var vm = this

        function init() {
            $timeout(() => $window.App().init())
        }

    }


})();