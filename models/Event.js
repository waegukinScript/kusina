const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  bookName: String,
  emailAddress: String,
  phoneNumber: String,
  eventDate: Date,
  selectPeople: String,
  createdAt: String
}, { timestamps: true });


const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
