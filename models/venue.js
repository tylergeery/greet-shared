var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var venueSchema = new Schema({
  title:  String,
  contact: {
  	email: String,
  	name: String,
  	phone: String
  	title : String
  },
  images: [String],
  description: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  popularity: { type: Number, default: 0},
  reviews: {
  	name: Number, default: 0,
  	created_at: type: Date,
  	content: String
  },
  occupancy: Number // # of groups allowed
});

module.exports = mongoose.model('Venue', venueSchema);