var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var schema = new Schema({
	name: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	address: {type: String, required: true},
	add_kind: {type: String, enum: ['Billing', 'Shipping', 'Both'], default: 'Both'},
	phone: {type: String, required: true},
	password: {type: String, required: true, default: '12345'},
	active: {type: Boolean, required: true, default: true},
	createdAt: {type: Date, default: Date.now, required: true},
	updatedAt: {type: Date, default: Date.now, required: true}
})

module.exports = Mongoose.model('Customer', schema);