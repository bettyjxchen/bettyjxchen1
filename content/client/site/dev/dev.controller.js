(function() {
	angular.module("client.layout").controller("devController", DevController);

	DevController.$inject = ["$window", "$timeout", "$location", "$anchorScroll"];

	function DevController($window, $timeout, $location, $anchorScroll) {
		var vm = this;

		init();

		function init() {
			$window.themeAll();
			_scrollToTop();
		}

		function _scrollToTop() {
			$timeout(() => {
				$location.hash("0");
				$anchorScroll();
			});
		}
	}
})();
