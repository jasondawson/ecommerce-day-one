(function() {

angular
	.module('eCommerce')
	.controller('ProductsCtrl', ProductsCtrl);

function ProductsCtrl (productsRef) {

	var vm = this;

	vm.products = productsRef;
}

})();