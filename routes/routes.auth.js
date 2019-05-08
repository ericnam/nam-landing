const express = require('express');
const AccountController = require('../controllers/account.controller');
const auth = express.Router();

auth
    .get('/account', AccountController.self)
    .put('/account', AccountController.update)
    .delete('/account', AccountController.delete)

module.exports = auth;