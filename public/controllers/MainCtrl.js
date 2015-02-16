(function() {

angular
	.module('eCommerce')
	.controller('MainCtrl', MainCtrl);

function MainCtrl () {

	var main = this;
	main.count = 0;

	main.counter = function() {
		main.count++;
	}
	
}

})();