const fs = require('fs');
const pdf = require('html-pdf');
const jade = require('jade');

exports.reservation = (req, res) => {
  res.render('reservation', {
    title: 'Reservation'
  });
};
