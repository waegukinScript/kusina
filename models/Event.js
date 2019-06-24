const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  date: Date,
  time: String,
  persons: String,
  createdAt: String
}, { timestamps: true });


const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
