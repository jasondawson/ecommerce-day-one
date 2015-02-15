(function() {

angular
	.module('eCommerce', ['ngRoute'])
	.config(config);

function config($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: '/views/main.html',
			controller: 'MainCtrl',
			controllerAs: 'vm'
		})
		.when('/products', {
			templateUrl: '/views/products.html',
			controller: 'ProductsCtrl',
			controllerAs: 'vm',
			resolve: {
				productsRef: function(mainService) {
					return mainService.getProducts();
				}
			}
		})
		.when('/products/:id', {
			templateUrl: '/views/productDetails.html',
			controller: 'ProductCtrl',
			controllerAs: 'vm',
			resolve: {
				productRef: function($route, mainService) {
					return mainService.getProduct($route.current.params.id);
				}
			}
		})
		.when('/customers', {
			templateUrl: '/views/customers.html',
			controller: 'CustomersCtrl',
			controllerAs: 'vm',
			resolve: {
				customersRef: function(mainService) {
					return mainService.getCustomers();
				}
			}
		})
		.when('/customers/:id', {
			templateUrl: '/views/customerDetails.html',
			controller: 'CustomerCtrl',
			controllerAs: 'vm',
			resolve: {
				customerRef: function($route, mainService) {
					return mainService.getCustomer($route.current.params.id);
				}
			}
		})
		.otherwise('/');
}

})();