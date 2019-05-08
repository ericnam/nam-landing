const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  sendgrid_api: process.env.SENDGRID_API_KEY,
  environment: process.env.NODE_ENV,
  port: process.env.PORT,
  personal_email: process.env.EMAIL
};