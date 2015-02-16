(function() {

angular
	.module('eCommerce')
	.controller('ProductCtrl', ProductCtrl);

function ProductCtrl (productRef, mainService, $location) {

	var vm = this;

	vm.product = productRef[0];

	vm.addToCart = function(id) {
		mainService.addToCart(id)
			.then(function(res) {
				console.log(res);
				console.log(id + ' added to cart');
				$location.path('/order/cart');
			});
	}
}

})();