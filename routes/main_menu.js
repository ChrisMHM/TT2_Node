const express = require('express');

const router = express.Router();

router.get('/main-menu', (request, response) => {
    response.render('main_menu/main-menu', {
        pageTitle: '¡Hola, Usuario!',
        path: '/main_menu/main-menu'
    });
});

module.exports = router;