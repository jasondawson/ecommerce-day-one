(function() {

angular
	.module('eCommerce')
	.controller('CustomerAddCtrl', CustomerAddCtrl);

function CustomerAddCtrl ($timeout, mainService) {

	var vm = this;
	vm.name = '';
	vm.email = '';
	vm.enteredName = '';
	vm.address = '';
	vm.radio = 'Both';
	vm.created = false;
	vm.createForm = true;

	vm.addCustomer = function() {

		var newCustomer = {
			name: vm.name,
			email: vm.email,
			address: vm.address,
			phone: vm.phone,
			add_kind: vm.radio
		}

		console.log(newCustomer);

		mainService.addCustomer(newCustomer)
			.then(function() {
				vm.enteredName = vm.name;
				vm.created = true;
				vm.name = '';
				vm.email = '';
				vm.address = '';
				vm.phone = '';
				vm.radio = 'Both';
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