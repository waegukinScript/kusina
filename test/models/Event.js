const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventName: String,
    eventDate: Date,
    eventTime: String,
    guest: String,
    budget: String,
    contactName: String,
    emailAddress: String,
    phoneNumber: String,
    postMessage: String,
}, { timestamps: true });


const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
