const sgMail = require('@sendgrid/mail');
const { sendgrid_api, personal_email } = require('../config/config');

sgMail.setApiKey(sendgrid_api); 

function newUserEmail(email, name, email_message){
  const message = { 
    to : personal_email, 
    from : 'noreply@ericnam.io',
    subject : `Message From Ericnam.io`,
    html: `
      <strong>Email:</strong> ${email} <br />
      <strong>Name:</strong> ${name} <br/>
      <br/>
    ` + email_message
  }

 sgMail.send(message)
 .then((sent) => {
   console.log("Email successfully sent.");
   return true;
 })
 .catch((error) => {
    console.log(error);
    return false;
  });
}

module.exports = {
 newUserEmail
}