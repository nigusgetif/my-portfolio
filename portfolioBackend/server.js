const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;


app.use(cors({
  origin: 'https://nigus-portfolio.netlify.app',
  methods: ['POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nigusgetif48@gmail.com',
    pass: 'ibke vrtc ebde hjbh',
  },
  tls: {
    rejectUnauthorized: false,
  },
});

app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'nigusgetif48@gmail.com',
    subject: `Message from ${name}`,
    text: `You have received a new message from: \n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      return res.status(500).json({ message: 'Failed to send email' });
    }
    console.log('Email sent:', info.response);
    return res.status(200).json({ message: 'Email sent successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
