'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var locationSchema = new Schema({
  alias: String
});

module.exports = mongoose.model('Location', locationSchema);