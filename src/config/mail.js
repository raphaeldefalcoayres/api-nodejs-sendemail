require('dotenv/config');
module.exports = {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  secure: false,
  default: {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
  },
};
