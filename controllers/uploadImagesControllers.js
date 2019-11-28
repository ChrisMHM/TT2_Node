const Direccion = require('../models/Direccion');

exports.infoEdificio = (request, response) => {
    response.render('upload_images/info-edificio', {
        pageTitle: 'Analizar edificio',
        path: '/upload_images/info-edificio',
        registroErrores: request.flash('registroErrores'),
        errores: request.flash('errores')
    });
};

exports.infoEdificioPost = (request, response) => {
    let direccion = new Direccion(request.body);

    direccion.registrar()
    .then(() => {
        request.flash('Registro completado');
        request.session.save(() => {
            response.redirect('/upload_images/info-registro');
        });
    })
    .catch(registroErrores => {
        registroErrores.forEach(error => {
            request.flash('registroErrores', error);
        });
        request.session.save(() => {
            response.redirect('/upload_images/info-edificio')
        });
    });
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