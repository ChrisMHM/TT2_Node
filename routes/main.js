const express = require('express');

const router = express.Router();

router.get('/about', (request, response) => {
    response.render('main/about', {
        pageTitle: 'Acerca de',
        path: '/main/about'
    });
});

router.get('/login', (request, response) => {
    response.render('main/login', {
        pageTitle: 'Ingresar',
        path: '/main/login'
    });
});

router.get('/registro', (request, response) => {
    response.render('main/registro', {
        pageTitle: 'Registro',
        path: '/main/registro'
    });
});

module.exports = router;