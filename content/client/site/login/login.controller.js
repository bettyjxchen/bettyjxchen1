(function () {

    angular
        .module('client.layout')
        .controller('loginController', LoginController)

    LoginController.$inject = ['$window', '$timeout', '$state']

    function LoginController($window, $timeout, $state) {
        var vm = this

        vm.loginError = false
        vm.isError = false
        vm.newUser = {}
        vm.oldUser = {}

        vm.login = _login
        vm.register = _register

        init()

        function init() {
            // $timeout(() => $window.App().init())
            $window.themeAll()
        }

        function _login() {
            if (vm.oldUser.username == "bettyjxchen" && vm.oldUser.password == "hellobetty") {
                vm.isError = false
                clearForm()
                $window.location.href = "/admin/home"
            }
            else {
                vm.isError = true
                clearForm()
            }
        }

        function _register() {
            if (vm.username == "bettyjxchen" && vm.password == "hellobetty") {
                vm.isError = false
                clearForm()
                $window.location.href = "/admin/home"
            }
            else {
                vm.isError = true
                clearForm()
            }
        }


        function clearForm() {
            vm.oldUser = {}
            vm.newUser = {}
        }

    }


})();