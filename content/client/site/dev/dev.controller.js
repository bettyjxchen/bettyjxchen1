(function() {
	angular.module("client.layout").controller("devController", DevController);

	DevController.$inject = ["$window", "$timeout", "$location", "$anchorScroll"];

	function DevController($window, $timeout) {
		var vm = this;

		init();

		function init() {
			// $timeout($window.themeAll)
			$window.themeAll();
		}

		function _scrollToTop() {
			$timeout(() => {
				$location.hash("");
				$anchorScroll();
			});
		}
	}
})();
