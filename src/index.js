const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
const mailConfig = require('./config/mail');

const transporter = nodemailer.createTransport({
  service: 'Zoho',
  host: mailConfig.host,
  port: mailConfig.port,
  secure: true,
  auth: {
    user: mailConfig.auth.user,
    pass: mailConfig.auth.pass,
  },
});

router.post('/send', (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const content = `<b>Nome: </b>${name} <br /><b>E-mail: </b>${email} <br /><b>Mensagem: </b>${message} `;

  const mailOptions = {
    from: '"everton" <everton@spedreal.com.br>',
    to: 'raphaeldefalcoayres@gmail.com',
    subject: 'Contato via Site',
    html: content,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        status: 'fail',
        err,
      });
    } else {
      res.json({
        status: 'success',
      });
    }
  });
});

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(3002);
