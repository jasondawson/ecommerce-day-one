(function() {

angular
	.module('eCommerce')
	.service('mainService', mainService);

function mainService ($http, $q) {

	var apiUrl = 'http://localhost:8080';

	this.getProducts = function() {
		dfd = $q.defer();
		$http.get(apiUrl + '/api/products')
			.success(function(res) {
				dfd.resolve(res);
			})
			.error(function(err) {
				dfd.reject(err);	
			})

		return dfd.promise;
	}

	this.getProduct = function(id) {
		dfd = $q.defer();
		$http.get(apiUrl + '/api/products/' + id)
			.success(function(res) {
				dfd.resolve(res);
			})
			.error(function(err) {
				dfd.reject(err);	
			})

		return dfd.promise;
	}

	this.addProduct = function(newProduct) {
		dfd = $q.defer();
		$http.post(apiUrl + '/api/products', newProduct)
			.success(function(res) {
				console.log(res);
				dfd.resolve(res);
			})
			.error(function(err) {
				dfd.reject(err);
			})

		return dfd.promise;
	}


	this.getCustomers = function() {
		dfd = $q.defer();
		$http.get(apiUrl + '/api/customers')
			.success(function(res) {
				dfd.resolve(res);
			})
			.error(function(err) {
				dfd.reject(err);	
			})

		return dfd.promise;
	}

	this.getCustomer = function(id) {
		dfd = $q.defer();
		$http.get(apiUrl + '/api/customers/' + id)
			.success(function(res) {
				dfd.resolve(res);
			})
			.error(function(err) {
				dfd.reject(err);	
			})

		return dfd.promise;
	}

	this.addCustomer = function(newCustomer) {
		dfd = $q.defer();
		$http.post(apiUrl + '/api/customers', newCustomer)
			.success(function(res) {
				console.log(res);
				dfd.resolve(res);
			})
			.error(function(err) {
				dfd.reject(err);
			})

		return dfd.promise;
	}


}

})();