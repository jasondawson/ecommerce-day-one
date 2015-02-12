var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var schema = new Schema({
	name: {type: String, required: true},
	description: {type: String, required: true},
	price: {type: Number, required: true},
	active: {type: Boolean, required: true, default: true},
	createdAt: {type: Date, required: true, default: Date.now},
	updatedAt: {type: Date, required: true, default: Date.now}
})

module.exports = Mongoose.model('Product', schema);