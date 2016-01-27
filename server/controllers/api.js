import nodemailer from 'nodemailer';
import MAILCONFIG from '../mail.config.js';
import xoauth2 from 'xoauth2';

const generator = xoauth2.createXOAuth2Generator({
  user: MAILCONFIG.user,
  clientId: MAILCONFIG.clientId,
  clientSecret: MAILCONFIG.clientSecret,
  refreshToken: MAILCONFIG.refreshToken,
  accessToken: MAILCONFIG.accessToken
});

generator.on('token', function(token){
  console.log('New token for %s: %s', token.user, token.accessToken);
});

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
        xoauth2: generator,
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

