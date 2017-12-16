(function () {

    angular
        .module('client.site')
        .controller('homeController', HomeController)

    HomeController.$inject = ['$window', '$timeout']

    function HomeController($window, $timeout) {
        var vm = this
        
        function init() {
            $timeout(() => $window.App.init())
        }

    }


})();