const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    contactName: String,
    emailAddress: String,
    phoneNumber: String,
    postMessage: String,
}, { timestamps: true });


const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
