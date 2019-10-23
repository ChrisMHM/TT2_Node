const express = require('express');

const router = express.Router();

router.get('/about', (request, response) => {
    response.render('main/about', {
        pageTitle: 'Acerca de',
        path: '/main/about'
    });
});

router.get('/contact', (request, response) => {
    response.render('main/contact', {
        pageTitle: 'Contacto',
        path: '/main/contact'
    });
});

router.get('/login', (request, response) => {
    response.render('main/login', {
        pageTitle: 'Ingresar',
        path: '/main/login'
    });
});

module.exports = router;