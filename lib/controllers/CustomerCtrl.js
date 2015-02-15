var Mongoose = require('mongoose');
var CustomerModel = require('./../models/CustomerModel');

module.exports.getCustomers = function(req, res) {
	
	CustomerModel
		.find()
		.exec()
		.then(function(response) {
			return res.status(200).json(response);
		})
}

module.exports.postCustomer = function(req, res) {
	
	var newCustomer = new CustomerModel(req.body);
	
	newCustomer
		.save(function(err, customer) {
			console.log(err);
			console.log(customer);
			if (!err) {
				return res.status(200).json(customer)
			} else {
				return res.status(400).json(err);
			}
		})
}

module.exports.getCustomerById = function(req, res) {

	CustomerModel
		.find({_id: req.params.id})
		.exec()
		.then(function(response) {
			return res.status(200).json(response);
		})
}


module.exports.updateCustomerById = function(req, res) {

	delete req.body.createdAt;
	//delete req.body.email;
	var newDate = Date.now();
	req.body.updatedAt = newDate;
	var update = req.body;
	var options = 'new: true';
	var callback = function(err, response) {
		if (!err) {
			return res.status(200).json(response);
		} else {
			return res.status(400).json(err);
		}
	}

	CustomerModel
		.findByIdAndUpdate(
			req.params.id,
			update,
			options,
			callback
			)
}

module.exports.deleteCustomerById = function(req, res) {

	var callback = function(err, response) {
		if (!err) {
			return res.status(200).json(response);
		} else {
			return res.status(400).json(err);
		}
	}

	CustomerModel
		.findByIdAndRemove(
			req.params.id,
			callback
			)
}