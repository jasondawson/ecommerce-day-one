(function() {

angular
	.module('eCommerce')
	.controller('CustomersCtrl', CustomersCtrl);

function CustomersCtrl (customersRef, mainService) {

	var vm = this;

	vm.customers = customersRef;
		
	vm.canDelete = false;

	vm.delete = function(id) {
		mainService.deleteCustomerById(id)
			.then(function() {
				mainService.getCustomers()
					.then(function(res) {
						vm.customers = res;
					});
			});
	}	
}

})();