var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var schema = new Schema({
	customerRef: {type: Schema.ObjectId, ref: 'Customers', required: true},
	billing_address: {type: String, required: true},
	shipping_address: {type: String, required: true},
	payment_info: {type: String, required: true},
	subtotal: {type: Number, required: true}
	tax: {type: Number, required: true, default: 0.07},
	total: {type: Number, required: true}
	items: {[Products], required: true},
	status: {type: String, enum: ['Received', 'Processed', 'Shipped'], default: 'Received'},
	createdAt: {type: Date, default: Date.now, required: true},
	updatedAt: {type: Date, default: Date.now, required: true}
})

module.exports = Mongoose.model('Order', schema);