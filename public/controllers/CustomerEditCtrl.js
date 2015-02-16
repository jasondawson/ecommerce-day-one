(function() {

angular
	.module('eCommerce')
	.controller('CustomerEditCtrl', CustomerEditCtrl);

function CustomerEditCtrl ($timeout, customerRef, mainService) {

	var vm = this;
	vm.created = false;
	vm.updateForm = true;

	vm.customer = customerRef[0];
	vm.name = vm.customer.name;
	vm.email = vm.customer.email;
	vm.phone = vm.customer.phone;
	vm.address = vm.customer.address;
	vm.radio = vm.customer.add_kind;
	vm.notifyMessage = ' has been updated!'

	vm.addCustomer = function() {
		var newCustomer = {
			name: vm.name,
			email: vm.email,
			phone: vm.phone,
			address: vm.address,
			add_kind: vm.radio
		}

		mainService.updateCustomerById(vm.customer._id, newCustomer)
				.then(function(res) {
					vm.customer = res;
					vm.name = vm.customer.name,
					vm.email = vm.customer.email,
					vm.phone = vm.customer.phone,
					vm.address = vm.customer.address,
					vm.radio = vm.customer.add_kind
					vm.created = true;
					vm.enteredName = vm.name;
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