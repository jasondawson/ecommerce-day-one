(function() {

angular
	.module('eCommerce')
	.controller('CartCtrl', CartCtrl);

function CartCtrl ($rootScope, mainService, cartRef, $location) {

	var vm = this;
	vm.test = "Hello";

	vm.cartItems = cartRef;
	console.log(vm.cartItems);

	$rootScope.count = mainService.getCart().length;
	
	vm.completeOrder = function() {
		// process the order

		// clear cart and show thank you page
		mainService.clearCart().then(function() {
			$rootScope.count = mainService.getCart().length;
			$location.path('/#/order/complete');
		})
	}

}

})();