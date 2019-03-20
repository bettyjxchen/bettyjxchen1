(function() {
	angular.module("admin.layout").controller("adminController", AdminController);

	AdminController.$inject = ["userService", "$window"];

	function AdminController(userService, $window) {
		var vm = this;

		vm.logout = _logout;

		init();

		function init() {}

		function _logout() {
			console.log("click logout");
			userService.logout().then(data => {
				$window.location.href = "/";
			});
		}
	}
})();
