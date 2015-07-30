(function(undefined){
	angular.module('TrueRunningCosts').
	controller('MainController', MainController);
	
	MainController.$inject = ['$scope'];
	
	function MainController($scope){

		$scope.car = {
			name: '',
			initialPrice: 0,
			yearsOfUsage: 0,
			currentPrice: 0,
			avgKMsPerYear: 0,
			avgFuelPrice: 0,
			avgFuelConsumption: 0,
			avgInsurranceCost: 0, 
			avgRevisionCost: 0,
			yearlyRecurrentTaxes: 0
		};

		$scope.totalCosts = function() { 
			var carDevaluation = $scope.car.initialPrice - $scope.car.currentPrice;
			var taxes = $scope.car.yearsOfUsage * $scope.car.yearlyRecurrentTaxes;

			return $scope.toDisplayNumber(carDevaluation + taxes); 
		};

		$scope.totalFuelCost = function(){
			var fuelCostPer100Km = $scope.car.avgFuelPrice * $scope.car.avgFuelConsumption;
			var totalKms = $scope.car.yearsOfUsage * $scope.car.avgKMsPerYear;
			return $scope.toDisplayNumber(fuelCostPer100Km * totalKms / 100);
		}

		$scope.costsPerYear = function() {
			return $scope.toDisplayNumber($scope.totalCosts() / $scope.car.yearsOfUsage);
		};

		$scope.costsPerMonth = function() {
			return $scope.toDisplayNumber($scope.costsPerYear() / 12);
		};

		$scope.resultCostPerKm = function() { 
			return $scope.toDisplayNumber($scope.costsPerYear() / $scope.car.avgKMsPerYear);
		};


		// utils
		$scope.toDisplayNumber = function(number){
			var result = 'N/A';

			if (!isNaN(number) && isFinite(number)){
				result = number.toFixed(2);
			}

			return result;
		}
	}
})();