(function() {

angular
	.module('eCommerce')
	.controller('CustomersCtrl', CustomersCtrl);

function CustomersCtrl (customersRef) {

	var vm = this;

	vm.customers = customersRef;
		
}

})();