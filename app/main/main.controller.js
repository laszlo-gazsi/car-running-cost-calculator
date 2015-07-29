(function(undefined){
	angular.module('TrueRunningCosts').
	controller('MainController', MainController);
	
	MainController.$inject = ['$scope'];
	
	function MainController($scope){

		$scope.carName = '';
		$scope.initialPrice = 0;
		$scope.yearsOfUsage = 0;
		$scope.currentPrice = 0;
		$scope.avgKMsPerYear = 0;
		$scope.avgFuelPrice = 0;
		$scope.avgFuelConsumption = 0;
		$scope.avgInsurranceCost = 0; 
		$scope.avgRevisionCost = 0;
		$scope.yearlyRecurrentTaxes = 0;
		$scope.extraCosts = 0;

		$scope.totalCosts = function() { 
			var carDevaluation = $scope.initialPrice - $scope.currentPrice;
			var taxes = $scope.yearsOfUsage * $scope.yearlyRecurrentTaxes;

			return carDevaluation + taxes + $scope.extraCosts 
		};

		$scope.costsPerYear = function() { return $scope.totalCosts() / $scope.yearsOfUsage };
		$scope.resultCostPerKm = function() { return $scope.costsPerYear() / $scope.avgKMsPerYear };
	}
})();