const express = require('express');

const router = express.Router();

router.get('/account-menu', (request, response) => {
    response.render('account/account-menu', {
        pageTitle: 'Mi cuenta',
        path: '/account/account-menu'
    });
});

router.get('/change-name', (request, response) => {
    response.render('account/change-name', {
        pageTitle: 'Cambiar nombre',
        path: '/account/change-name'
    });
});

router.get('/change-email', (request, response) => {
    response.render('account/change-email', {
        pageTitle: 'Cambiar email',
        path: '/account/change-email'
    });
});

router.get('/change-password', (request, response) => {
    response.render('account/change-password', {
        pageTitle: 'Cambiar contraseña',
        path: '/account/change-password'
    });
});

module.exports = router;