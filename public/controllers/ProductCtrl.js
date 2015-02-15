(function() {

angular
	.module('eCommerce')
	.controller('ProductCtrl', ProductCtrl);

function ProductCtrl (productRef) {

	var vm = this;

	vm.product = productRef[0];
}

})();