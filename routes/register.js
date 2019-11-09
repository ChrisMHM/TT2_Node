const express = require('express');
const registerControllers = require('../controllers/registerControllers');

const router = express.Router();

router.get('/register-completed', registerControllers.registroCompletado);

router.get('/register-failed', registerControllers.registroErroneo);

router.get('/register-summary', registerControllers.resumenRegistro);

router.get('/password', registerControllers.password);

module.exports = router;