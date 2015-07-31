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

		$scope.getTotalKilometers = function(){
			return $scope.car.yearsOfUsage * $scope.car.avgKMsPerYear;
		}

		$scope.getTotalYears = function(){
			return $scope.car.yearsOfUsage;
		}

		$scope.getTotalMonths = function(){
			return $scope.car.yearsOfUsage * 12;
		}

		$scope.getDevaluation = function(){
			return $scope.car.initialPrice - $scope.car.currentPrice;
		}

		$scope.getTotalFuelCost = function(){
			var fuelCostPer100Km = $scope.car.avgFuelPrice * $scope.car.avgFuelConsumption;
			return fuelCostPer100Km * $scope.getTotalKilometers() / 100;
		}

		$scope.getTotalTaxes = function(){
			return ($scope.car.avgRevisionCost + 
				$scope.car.avgInsurranceCost + 
				$scope.car.yearlyRecurrentTaxes) * $scope.getTotalYears();
		}

		$scope.getTotalCosts = function() { 
			return $scope.getDevaluation() +
				$scope.getTotalFuelCost() +
				$scope.getTotalTaxes();
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