(function () {

    angular
        .module('client.admin')
        .controller('homeController', HomeController)

    HomeController.$inject = ['$window']

    function HomeController($window) {
        var vm = this

        init()

        function init() {
           
        }

    }


})();