(function(undefined){
	
	angular.module('TrueRunningCosts', ['ui.router']).config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];

	function config($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('main', {
				url: '/',
				templateUrl: './app/main/main.template.html',
				controller: 'MainController'
			})
			.state('view',{
				url: '/view',
				templateUrl: './app/view/view.template.html',
				controller: 'MainController'
			});
	}
	
})();