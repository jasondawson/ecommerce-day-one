var Express = require('express');
var BodyParser = require('body-parser');
var Mongoose = require('mongoose');
var Migration = require('migrate')
var Customer = require('./lib/models/CustomerModel');
var Product = require('./lib/models/ProductModel');
var Order = require('./lib/models/OrderModel');
var ProductCtrl = require('./lib/controllers/ProductCtrl.js');
var CustomerCtrl = require('./lib/controllers/CustomerCtrl.js');

var port = 8080;
var app = Express();
var mongoUri = 'mongodb://localhost:27034/eCommerce';

app.use(Express.static(__dirname + '/public'));
app.use(BodyParser.json());

Mongoose.connect(mongoUri);
db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('connected to db');
});


//endpoints

//products
app.get('/api/products', ProductCtrl.getProducts);
app.post('/api/products', ProductCtrl.postProduct);

//products/:id
app.get('/api/products/:id', ProductCtrl.getProductById);
app.put('/api/products/:id', ProductCtrl.updateProductById);
app.delete('/api/products/:id', ProductCtrl.deleteProductById);

//customers
app.get('/api/customers', CustomerCtrl.getCustomers);
app.post('/api/customers', CustomerCtrl.postCustomer);

//customers/:id
app.get('/api/customers/:id', CustomerCtrl.getCustomerById);
app.put('/api/customers/:id', CustomerCtrl.updateCustomerById);
app.delete('/api/customers/:id', CustomerCtrl.deleteCustomerById);



app.listen(port, function() {
	console.log('Listening on port ' + port);
})