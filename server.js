var Express = require('express');
var BodyParser = require('body-parser');
var Mongoose = require('mongoose');
var Customer = require('./lib/models/CustomerModel');
var Product = require('./lib/models/ProductModel');
var Order = require('./lib/models/OrderModel');

var port = 8080;



app.listen(port, function() {
	console.log('Listening on port ' + port);
})