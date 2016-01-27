import nodemailer from 'nodemailer';
import MAILCONFIG from '../mail.config.js';
import xoauth2 from 'xoauth2';

export function message(req, res) {
  const {
    firstName,
    lastName,
    email,
    subject,
    message
  } = req.body;

  const generator = xoauth2.createXOAuth2Generator({
    user: MAILCONFIG.user,
    clientId: MAILCONFIG.clientId,
    clientSecret: MAILCONFIG.clientSecret,
    refreshToken: MAILCONFIG.refreshToken,
  });


  generator.getToken(function(err, token, accessToken) {
    console.log(err, token, accessToken);
  });

  const mailOptions = {
    from: (firstName || '') + ' ' + (lastName || '') + ' <' + email + '>',
    to: 'buchanaf@gmail.com',
    subject: subject || 'No subject -- website',
    text: message,
  };

   const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        xoauth2: generator,
      },
  });

  transporter.sendMail(mailOptions, function(error, info){
    if(error) {
        console.log(error);
        res.status(500).send({error: error});
    } else {
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    };
  });
}

