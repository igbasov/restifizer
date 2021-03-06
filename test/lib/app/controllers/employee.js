'use strict';

var MongooseDataSource = require('restifizer-mongoose-ds');
var Employee = require('../models/employee');
var BaseController = require('./base');

module.exports = BaseController.extend({
	dataSource: new MongooseDataSource(Employee),
	path: '/api/employees',
	fields: [
		'name',
		'lastName',
		'phones',
		'emails',
		'hiredAt',
		'firedAt'
	],
	qFields: [
		'name',
		'lastName',
		'emails'
	]
});