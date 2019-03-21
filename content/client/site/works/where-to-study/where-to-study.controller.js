(function() {
	angular
		.module("client.site")
		.controller("whereToStudyController", WhereToStudyController);

	WhereToStudyController.$inject = [
		"$window",
		"$timeout",
		"$location",
		"$anchorScroll"
	];

	function WhereToStudyController($window, $timeout, $location, $anchorScroll) {
		var vm = this;

		init();

		function init() {
			// $timeout(() => $window.App().init())
			$window.themeAll();
			_scrollToTop();
		}

		function _scrollToTop() {
			$timeout(() => {
				$location.hash(".");
				$anchorScroll();
			});
		}
	}
})();
