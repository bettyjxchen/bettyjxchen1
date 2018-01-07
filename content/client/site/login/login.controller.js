(function () {

    angular
        .module('client.layout')
        .controller('loginController', LoginController)

    LoginController.$inject = ['$window', '$timeout', '$state', 'userService']

    function LoginController($window, $timeout, $state, userService) {
        var vm = this

        vm.isLoginError = false
        vm.isRegisterError = false

        vm.newUser = {}
        vm.oldUser = {}

        vm.login = _login
        vm.register = _register
        vm.isInvalidInput = _isInvalidInput
        vm.isMatchingPassword = _isMatchingPassword

        init()

        function init() {
            // $timeout(() => $window.App().init())
            $window.themeAll()
        }

        function _login() {
            if (vm.loginForm.$valid) {
                userService.login(vm.oldUser)
                    .then(data => {
                        vm.isLoginError = false
                        clearForm()
                        $window.location.href = "/admin/home"
                    })
                    .catch(() => {
                        vm.isLoginError = true
                        clearForm()
                    })
            }
        }

        function _register() {
            if (vm.registerForm.$valid && vm.newUser.password === vm.newUser.password2) {
                console.log(vm.newUser)
                userService.create(vm.newUser)
                    .then(data => {
                        clearForm()
                        vm.isRegisterError = false
                        vm.isRegisterSuccess = true
                    })
            }
            else {
                vm.isRegisterError = true
            }
        }

        function clearForm() {
            vm.oldUser = {}
            vm.newUser = {}
            vm.registerForm.$setUntouched()
            vm.loginForm.$setUntouched()
        }

        function _isInvalidInput(input) {
            return input.$touched && input.$invalid
        }

        function _isMatchingPassword(password, password2) {
            return vm.newUser.password === vm.newUser.password2
        }

    }


})();