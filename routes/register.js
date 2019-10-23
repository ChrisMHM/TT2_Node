const express = require('express');

const router = express.Router();

router.get('/register-completed', (request, response) => {
    response.render('register/register-completed', {
        pageTitle: 'Registro exitoso',
        path: '/register/register-completed'
    });
});

router.get('/register-failed', (request, response) => {
    response.render('register/register-failed', {
        pageTitle: 'Registro fallido',
        path: '/register/register-failed'
    });
});

router.get('/register-summary', (request, response) => {
    response.render('register/register-summary', {
        pageTitle: 'Resumen del registro',
        path: '/register/register-summary'
    });
});

router.get('/password', (request, response) => {
    response.render('register/password', {
        pageTitle: 'Recuperar contraseña',
        path: '/register/password'
    });
});

module.exports = router;