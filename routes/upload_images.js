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

router.get('/info-edificio', (request, response) => {
    response.render('upload_images/info-edificio', {
        pageTitle: 'Analizar edificio',
        path: '/upload_images/info-edificio'
    });
});

router.get('/info-areas', (request, response) => {
    response.render('upload_images/info-areas', {
        pageTitle: 'Información áreas edificio',
        path: '/upload_images/info-areas'
    });
});

router.get('/info-resumen', (request, response) => {
    response.render('upload_images/info-resumen', {
        pageTitle: 'Resumen de la información',
        path: '/upload_images/info-resumen'
    });
});

router.get('/info-registro', (request, response) => {
    response.render('upload_images/info-registro', {
        pageTitle: 'Resumen de la información',
        path: '/upload_images/info-registro'
    });
});

module.exports = router;