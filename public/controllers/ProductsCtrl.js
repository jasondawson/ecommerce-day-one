(function() {

angular
	.module('eCommerce')
	.controller('ProductsCtrl', ProductsCtrl);

function ProductsCtrl (productsRef, mainService) {

	var vm = this;

	vm.products = productsRef;

	vm.canDelete = false;

	vm.delete = function(id) {
		mainService.deleteProductById(id)
			.then(function() {
				mainService.getProducts()
					.then(function(res) {
						vm.products = res;
					});
			});
	}
}

})();