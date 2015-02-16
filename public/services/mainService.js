(function() {

angular
	.module('eCommerce')
	.service('mainService', mainService);

function mainService ($http, $q) {

	var cart = [];

	this.getCart = function() {
		return cart;
	}

	this.addToCart = function(id) {
		dfd = $q.defer();
		cart.push(id);
		dfd.resolve(cart);

		return dfd.promise;
	}

	this.clearCart = function() {
		dfd = $q.defer();
		cart = [];
		dfd.resolve();
		return dfd.promise;
	}

	var apiUrl = 'http://localhost:8080';

	this.getCartDetails = function() {
		dfd = $q.defer();

		if (!cart.length) {
			dfd.resolve();
			return dfd.promise;
		}
		console.log(cart);
		$http({
			method: 'GET',
			url: apiUrl + '/api/order/cartDetails',
			params: {
   			 "id[]": cart
  			}
  		})
		.success(function(res) {
			dfd.resolve(res);
		})
		.error(function(err) {
			dfd.reject(err);
		})
		return dfd.promise;
	}

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
				dfd.resolve(res);
			})
			.error(function(err) {
				dfd.reject(err);
			})

		return dfd.promise;
	}

	this.updateProductById = function(id, newProduct) {
		dfd = $q.defer();
		$http.put(apiUrl + '/api/products/' + id, newProduct)
			.success(function(res) {
				dfd.resolve(res);
			})
			.error(function(err) {
				dfd.reject(err);
			})
		return dfd.promise;
	}

	this.deleteProductById = function(id) {
		dfd = $q.defer();
		$http.delete(apiUrl + '/api/products/' + id)
			.success(function(res) {
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
				dfd.resolve(res);
			})
			.error(function(err) {
				dfd.reject(err);
			})

		return dfd.promise;
	}

	this.updateCustomerById = function(id, newCustomerInfo) {
		dfd = $q.defer();
		$http.put(apiUrl + '/api/customers/' + id, newCustomerInfo)
			.success(function(res) {
				dfd.resolve(res);
			}) 
			.error(function(err) {
				dfd.reject(err);
			})
		return dfd.promise;
	}

	this.deleteCustomerById = function(id) {
		dfd = $q.defer();
		$http.delete(apiUrl + '/api/customers/' + id)
			.success(function(res) {
				dfd.resolve(res);
			})
			.error(function(err) {
				dfd.reject(err);
			})
		return dfd.promise;
	}


}

})();