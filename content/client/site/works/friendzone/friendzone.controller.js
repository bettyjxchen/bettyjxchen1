(function() {
	angular
		.module("client.site")
		.controller("friendzoneController", FriendzoneController);

	FriendzoneController.$inject = [
		"$window",
		"$timeout",
		"$location",
		"$anchorScroll"
	];

	function FriendzoneController($window, $timeout, $location, $anchorScroll) {
		var vm = this;

		init();

		function init() {
			// $timeout(() => $window.App().init())
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
