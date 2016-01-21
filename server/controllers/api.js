import nodemailer from 'nodemailer';
import MAILCONFIG from '../mail.config.js';

export function message(req, res) {
  const {
    firstName,
    lastName,
    email,
    subject,
    message
  } = req.body;

  const mailOptions = {
    from: (firstName || '') + ' ' + (lastName || '') + ' <' + email + '>',
    to: 'buchanaf@gmail.com',
    subject: subject || 'No subject -- website',
    text: message,
  };

   const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: MAILCONFIG.USER,
        pass: MAILCONFIG.PASSWORD,
      },
  });

  transporter.sendMail(mailOptions, function(error, info){
    if(error) {
        console.log(error);
        res.json({error: 'error'});
    } else {
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    };
  });
}

