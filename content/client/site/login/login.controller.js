(function () {

    angular
        .module('client.layout')
        .controller('loginController', LoginController)

    LoginController.$inject = ['$window', '$timeout', '$state']

    function LoginController($window, $timeout, $state) {
        var vm = this

        vm.username = null
        vm.password = null
        vm.loginError = false

        vm.login = _login

        init()
        
        function init() {
            // $timeout(() => $window.App().init())
            $window.themeAll()
        }

        function _login() {
            if (vm.username === "bettyjxchen" && vm.password === "hellobetty1117!") {
                clearForm()
                $state.go("admin.home")
            }
            else {
               vm.loginError = true
            }
        }

        function clearForm() {
            vm.username = null
            vm.password = null
        }

    }


})();