(function() {

angular
	.module('eCommerce')
	.controller('PCreateCtrl', PCreateCtrl);

function PCreateCtrl ($timeout, mainService) {

	var vm = this;
	vm.name = '';
	vm.description = '';
	vm.enteredName = '';
	vm.price = null;
	vm.created = false;
	vm.createForm = true;

	vm.addProduct = function() {
		
		var newProduct = {
			name: vm.name,
			description: vm.description,
			price: vm.price
		}

		console.log(newProduct);

		mainService.addProduct(newProduct)
			.then(function() {
				vm.enteredName = vm.name;
				console.log('blah')
				vm.created = true;
				vm.name = '';
				vm.description = '';
				vm.price = null;
				$timeout(function(){

				}, 3000)
					.then(function() {

						vm.created = false;
						vm.enteredName = '';
					});
			});
	}


}

})();