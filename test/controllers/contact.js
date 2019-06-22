// const nodemailer = require("nodemailer");
const Contact = require('../models/Contact');

/**
 * GET /contact
 * Contact form page.
 */
exports.getContact = (req, res) => {
  const unknownUser = !req.user;

  res.render("contact", {
    title: "Contact",
    unknownUser
  });
};

/**
 * POST /contact
 * Send a contact form via Nodemailer.
 */
exports.postContact = (req, res) => {
  console.log("req.body.contactName", req.body.contactName);
  console.log("req.body.emailAddress", req.body.emailAddress);
  console.log("req.body.phoneNumber", req.body.phoneNumber);
  console.log("req.body.postMessage", req.body.postMessage);


  const contact = new Contact({
    contactName: req.body.contactName,
    emailAddress: req.body.emailAddress,
    phoneNumber: req.body.phoneNumber,
    postMessage: req.body.postMessage
  });

  contact.save((err) => {
    if (err) { return next(err); }
    res.redirect('/contact');
  });


  // let fromName;
  // let fromEmail;
  // if (!req.user) {
  //   req.assert('name', 'Name cannot be blank').notEmpty();
  //   req.assert('email', 'Email is not valid').isEmail();
  // }
  // req.assert('message', 'Message cannot be blank').notEmpty();
  // const errors = req.validationErrors();
  // if (errors) {
  //   req.flash('errors', errors);
  //   return res.redirect('/contact');
  // }
  // if (!req.user) {
  //   fromName = req.body.name;
  //   fromEmail = req.body.email;
  // } else {
  //   fromName = req.user.profile.name || '';
  //   fromEmail = req.user.email;
  // }
  // let transporter = nodemailer.createTransport({
  //   service: 'SendGrid',
  //   auth: {
  //     user: process.env.SENDGRID_USER,
  //     pass: process.env.SENDGRID_PASSWORD
  //   }
  // });
  // const mailOptions = {
  //   to: 'your@email.com',
  //   from: `${fromName} <${fromEmail}>`,
  //   subject: 'Contact Form | Hackathon Starter',
  //   text: req.body.message
  // };
  // return transporter.sendMail(mailOptions)
  //   .then(() => {
  //     req.flash('success', { msg: 'Email has been sent successfully!' });
  //     res.redirect('/contact');
  //   })
  //   .catch((err) => {
  //     if (err.message === 'self signed certificate in certificate chain') {
  //       console.log('WARNING: Self signed certificate in certificate chain. Retrying with the self signed certificate. Use a valid certificate if in production.');
  //       transporter = nodemailer.createTransport({
  //         service: 'SendGrid',
  //         auth: {
  //           user: process.env.SENDGRID_USER,
  //           pass: process.env.SENDGRID_PASSWORD
  //         },
  //         tls: {
  //           rejectUnauthorized: false
  //         }
  //       });
  //       return transporter.sendMail(mailOptions);
  //     }
  //     console.log('ERROR: Could not send contact email after security downgrade.\n', err);
  //     req.flash('errors', { msg: 'Error sending the message. Please try again shortly.' });
  //     return false;
  //   })
  //   .then((result) => {
  //     if (result) {
  //       req.flash('success', { msg: 'Email has been sent successfully!' });
  //       return res.redirect('/contact');
  //     }
  //   })
  //   .catch((err) => {
  //     console.log('ERROR: Could not send contact email.\n', err);
  //     req.flash('errors', { msg: 'Error sending the message. Please try again shortly.' });
  //     return res.redirect('/contact');
  //   });
};