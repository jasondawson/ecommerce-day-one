(function() {

angular
	.module('eCommerce')
	.controller('CustomerCtrl', CustomerCtrl);

function CustomerCtrl (customerRef) {

	var vm = this;

	vm.customer = customerRef[0];
		
}

})();