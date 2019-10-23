const express = require('express');

const router = express.Router();

router.get('/images-menu', (request, response) => {
    response.render('upload_images/images-menu', {
        pageTitle: 'Subir imágenes',
        path: '/upload_images/images-menu'
    });
});

router.get('/images-data', (request, response) => {
    response.render('upload_images/images-data', {
        pageTitle: 'Ingresar datos',
        path: '/upload_images/images-data'
    });
});

router.get('/images-summary', (request, response) => {
    response.render('upload_images/images-summary', {
        pageTitle: 'Resumen de datos',
        path: '/upload_images/images-summary'
    });
});

router.get('/images-sent', (request, response) => {
    response.render('upload_images/images-sent', {
        pageTitle: 'Imágenes enviadas',
        path: '/upload_images/images-sent'
    });
});

module.exports = router;