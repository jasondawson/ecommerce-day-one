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
	vm.notifyMessage = ' updated in database';

	vm.addProduct = function() {
		
		var newProduct = {
			name: vm.name,
			description: vm.description,
			price: vm.price
		}

		mainService.addProduct(newProduct)
			.then(function() {
				vm.enteredName = vm.name;
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