var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var groupSchema = new Schema({
  title: String,
  description: String,
  users: [{ body: String, date: Date }],
  location: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  dates: { type: Number, default: 0 },
  karma: { type: Number, default: 0 },
  messages: [{
    author: String,
    content: String,
    createdAt: { type: Date }
  }],
});

module.exports = mongoose.model('Group', groupSchema);