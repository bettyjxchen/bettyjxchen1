(function() {
	angular.module("client.site", ["ui.router"]);
	angular.module("client.site").config(RouteConfig);

	RouteConfig.$inject = ["$stateProvider"];

	function RouteConfig($stateProvider) {
		$stateProvider
			.state("site.dev", {
				url: "/dev",
				views: {
					"content@site": {
						templateUrl: "client/site/dev/dev.html",
						controller: "devController as devCtrl"
					}
				}
			})
			.state("site.works", {
				url: "/works",
				views: {
					"content@site": {
						templateUrl: "client/site/works/works.html",
						controller: "worksController as worksCtrl"
					}
				}
			})
			.state("site.snapple", {
				url: "/works/snapple",
				views: {
					"content@site": {
						templateUrl: "client/site/works/snapple/snapple.html",
						controller: "snappleController as snappleCtrl"
					}
				}
			})
			.state("site.laso", {
				url: "/works/laso",
				views: {
					"content@site": {
						templateUrl: "client/site/works/laso/laso.html",
						controller: "lasoController as lasoCtrl"
					}
				}
			})
			.state("site.login", {
				url: "/login",
				views: {
					"content@site": {
						templateUrl: "client/site/login/login.html",
						controller: "loginController as loginCtrl"
					}
				}
			});
	}
})();
