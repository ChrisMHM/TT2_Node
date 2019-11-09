const express = require('express');
const accountControllers = require('../controllers/accountControllers');

const router = express.Router();

router.get('/account-menu', accountControllers.menuCuenta);

router.get('/change-name', accountControllers.cambiarNombre);

router.get('/change-email', accountControllers.cambiarCorreo);

router.get('/change-password', accountControllers.cambiarPassword);

module.exports = router;