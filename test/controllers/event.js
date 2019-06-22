// const nodemailer = require("nodemailer");
const Event = require('../models/Event');

/**
 * POST /event
 */
exports.postEvent = (req, res) => {

  const obj = req.body;

  //Here, I have set default value
  //obj.eventTime = "1";
  //obj.guest = "1";

  const event = new Event({
    eventName: obj.eventName,
    eventDate: obj.eventDate,
    eventTime: obj.eventTime,
    guest: obj.guest,
    budget: obj.budget,
    contactName: obj.contactName,
    emailAddress: obj.emailAddress,
    phoneNumber: obj.phoneNumber,
    postMessage: obj.postMessage,
  });

  event.save((err) => {
    if (err) { return next(err); }
    res.redirect('/');
  });

};