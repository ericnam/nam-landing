const sendGrid = require('../stores/sendgrid.store.js');  

class EmailController
 {
    static async send (req, res) {
        sendGrid.newUserEmail(req.body.email, req.body.name, req.body.message)
        res.send(200);
    }
 } 

 module.exports = EmailController;  