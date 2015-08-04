(function(undefined){

	angular.module('TrueRunningCosts').service('StorageService', StorageService);

	StorageService.$inject = [];

	function StorageService(){

		this.loadData = function(key, callback){
			chrome.storage.sync.get("car", callback); 
		}

		this.saveData = function(key, value, callback){
			chrome.storage.sync.set({"car" : value}, callback);
		}

		this.clearData = function(){
			chrome.storage.sync.clear();
		}

		return this;
	}

}());