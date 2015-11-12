/**
 * Created by igor on 20.10.15.
 */
'use strict';

var Mission = require('../models/mission');
var BaseController = require('./base');
var Bb = require('bluebird');

module.exports = BaseController.extend({
    dataSource: {
        type: 'mongoose',
        options: {
            model: Mission
        }
    },
    path: '/api/missions',
    fields: [
        '_id',
        'description',
        {
          name: 'agent',
          fields: [
            'name',
            'lastName',
            '_id'
          ]
        }
    ],
    qFields: [
        '_id',
        'description'
    ],
    queryPipe: function (query, scope) {
      if (scope.isUpdate() || scope.isInsert()) {
        return Bb.
          fromNode(function (callback) {
            return query.populate("agent", callback);
          });
      }
    }
});