const express = require('express');
const mainMenuControllers = require('../controllers/mainMenuControllers');

const router = express.Router();

router.get('/main-menu', mainMenuControllers.menuPrincipal);


module.exports = router;