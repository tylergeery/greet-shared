'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
  facebookId : Number,
  facebookLink : String,
  name: String,
  email: String,
  gender: String,
  interestedIn : String,
  bio: String,
  images: [String],
  activeImages: [String],
  groups: [String],
  isAdmin : {type: Number, default: 0},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  karma: { type: Number, default: 0}
});

module.exports = mongoose.model('User', userSchema);