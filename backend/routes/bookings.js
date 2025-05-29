const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    //u must create or enter a real email address and password 
    //   here to make the sender's email the email to which the 
    //   booking confirmation will be sent. When the customer 
    //   enters their email address.
    user: 'your-email@gmail.com',     
    pass: 'app-password-here'
  }
});

router.post('/', async (req, res) => {
  const { name, date, email } = req.body; 
  try {
    const booking = await Booking.create({ name, date, email });


    const mailOptions = {
        // u emil here to
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Booking Confirmation',
      text: `Hello ${name}, your booking for ${new Date(date).toLocaleString()} is confirmed.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: 'Failed to book' });
  }
});

router.get('/', async (req, res) => {
  const bookings = await Booking.findAll();
  res.json(bookings);
});

module.exports = router;
