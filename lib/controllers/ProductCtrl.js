var Mongoose = require('mongoose');
var ProductModel = require('./../models/ProductModel');

module.exports.getProducts = function(req, res) {

	ProductModel
		.find()
		.select('name description price')
		.exec()
		.then(function(response) {
			return res.status(200).json(response);
		})
}

module.exports.postProduct = function(req, res) {
	console.log(req.body);
	var newProduct = new ProductModel(req.body);

	newProduct
		.save(function(err, product) {
			if(!err) {
				return res.status(200).json(product);
			} else {
				return res.status(400).json(err);
			}
		})
}

module.exports.getProductById = function(req, res) {

	ProductModel
		.find({_id : req.params.id})
		.select('name description price')
		.exec()
		.then(function(response) {
			return res.status(200).json(response);
		})
}

module.exports.updateProductById = function(req, res) {

	var newDate = Date.now();
	req.body.updatedAt = newDate;
	var update = req.body;
	var options = "{new: true}"
	var callback = function(err, response) {
		if (!err) {
			return res.status(200).json(response);
		} else {
			return res.status(400).json(err);
		}
	}

	ProductModel
		.findByIdAndUpdate( 
			req.params.id,
			update,
			options,
			callback
		)
}

module.exports.deleteProductById = function(req, res) {

	var callback = function(err, response) {
		if (!err) {
			return res.status(200).json(response);
		} else {
			return res.status(400).json(err);
		}
	}

	ProductModel
		.findByIdAndRemove(
			req.params.id,
			callback
			)
}