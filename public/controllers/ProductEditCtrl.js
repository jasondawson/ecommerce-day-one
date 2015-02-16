(function() {

angular
	.module('eCommerce')
	.controller('PEditCtrl', PEditCtrl);

function PEditCtrl (productRef, mainService) {

	var vm = this;
	vm.created = false;
	vm.updateForm = true;

	vm.product = productRef[0];
	vm.name = vm.product.name;
	vm.description = vm.product.description;
	vm.price = vm.product.price;
	vm.notifyMessage = ' has been updated!';
	
	vm.addProduct = function($timeout) {
		var newProduct = {
			name: vm.name,
			description: vm.description,
			price: vm.price
		}

		mainService.updateProductById(vm.product._id, newProduct)
				.then(function(res) {
					vm.product = res;
					vm.name = vm.product.name;
					vm.description = vm.product.description;
					vm.price = vm.product.price;
					vm.created = true;
					vm.enteredName = vm.name
					$timeout(function(){

				}, 3000)
					.then(function() {

						vm.created = false;
						vm.enteredName = '';
					});
				})
	} 
	
}

})();