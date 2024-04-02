import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';

dotenv.config();

const emailRoutes = express.Router();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

emailRoutes.post('/send-email', (req, res) => {
  try {
    const { name, email, subject, text } = req.body;

    const from = `${name} ${email}`;

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: subject,
      text: `${text}\n\nFrom: ${from}`,
      replyTo: from,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res
          .status(500)
          .send(
            'Something went wrong while sending the email. Please use the email provided in header to send the email.'
          );
      } else {
        res.status(200).send('Email sent successfully');
      }
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(
        'Something went wrong while sending the email. Please use the email provided in header to send the email.'
      );
  }
});

export default emailRoutes;
