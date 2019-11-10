const express = require('express');
const mainControllers = require('../controllers/mainControllers');

const router = express.Router();

router.get('/about', mainControllers.about);

router.get('/login', mainControllers.login);
router.get('/registro', mainControllers.registro);
router.post('/registro-post', mainControllers.registroPost);
router.post('/login-post', mainControllers.loginPost);

module.exports = router;