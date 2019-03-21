(function() {
	angular
		.module("homepage.layout")
		.controller("homepageController", HomepageController);

	HomepageController.$inject = [
		"messageService",
		"$timeout",
		"$location",
		"$anchorScroll"
	];

	function HomepageController(
		messageService,
		$timeout,
		$location,
		$anchorScroll
	) {
		var vm = this;

		vm.formData = {};
		vm.isMessageSuccess = false;
		vm.isMessageSuccess = false;
		vm.submitMessage = _submitMessage;

		init();

		function init() {
			// $window.themeAll();
			// _scrollToTop();
		}

		function _scrollToTop() {
			$timeout(() => {
				$location.hash("0");
				$anchorScroll();
			});
		}

		function _submitMessage() {
			if (vm.contactForm.$valid) {
				messageService.create(vm.formData).then(() => {
					vm.formData = {};
					vm.isMessageSuccess = true;
					vm.isMessageError = false;
				});
			} else {
				vm.isMessageError = true;
			}
		}
	}
})();
