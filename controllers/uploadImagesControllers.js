const Direccion = require('../models/Direccion');

exports.infoEdificio = (request, response) => {
    response.render('upload_images/info-edificio', {
        pageTitle: 'Analizar edificio',
        path: '/upload_images/info-edificio'
    });
};

exports.infoEdificioPost = (request, response) => {
    response.send('Enviado');
};

exports.infoAreas = (request, response) => {
    response.render('upload_images/info-areas', {
        pageTitle: 'Información áreas edificio',
        path: '/upload_images/info-areas'
    });
};

exports.infoResumen = (request, response) => {
    response.render('upload_images/info-resumen', {
        pageTitle: 'Resumen de la información',
        path: '/upload_images/info-resumen'
    });
};

exports.infoRegistro = (request, response) => {
    response.render('upload_images/info-registro', {
        pageTitle: 'Resumen de la información',
        path: '/upload_images/info-registro'
    });
};