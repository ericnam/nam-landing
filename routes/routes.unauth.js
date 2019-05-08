const express = require('express');
const EmailController = require('../controllers/email.controller');
const AccountController = require('../controllers/account.controller');
const MediaController = require('../controllers/media.controller');
const unauth = express.Router();

unauth
    .post('/email', EmailController.send)
    .post('/register', AccountController.register)
    .post('/login', AccountController.login)
    .post('/media/:id', MediaController.download)

module.exports = unauth;