var Product = require('./../lib/models/ProductModel.js');
require('../server'); 

exports.up = function(next){
	var watch = new Product({
		name: 'Rolex Watch',
		description: 'One of the most expensive, luxurious items around.',
		price: 3500000,
		active: true
	});
	watch.save(function(err) {
		if (err) {
			console.log(err);
			next(err);
		}
		else {
			console.log("seed data included");
  			next();
		}
	});
};

exports.down = function(next){
  next();
};
