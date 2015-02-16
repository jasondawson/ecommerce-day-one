(function() {

angular
	.module('eCommerce')
	.controller('ProductCreateCtrl', ProductCreateCtrl);

function ProductCreateCtrl () {

	var vm = this;
	vm.updated = false;

	/*vm.addProduct = function($timeout) {
		
		var newProduct = {
			name: vm.name,
			description: vm.description,
			price: vm.price
		}

		mainService.addProduct(newProduct)
			.then(function() {
				vm.created = true;
				$timeout(function(){
					vm.created = false;
				}, 3000);
			});
	}*/
	

}

})();