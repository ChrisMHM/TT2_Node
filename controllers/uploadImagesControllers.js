exports.menuImagenes = (request, response) => {
    response.render('upload_images/images-menu', {
        pageTitle: 'Subir imágenes',
        path: '/upload_images/images-menu'
    });
};

exports.datosImagenes = (request, response) => {
    response.render('upload_images/images-data', {
        pageTitle: 'Ingresar datos',
        path: '/upload_images/images-data'
    });
};

exports.resumenImagenes = (request, response) => {
    response.render('upload_images/images-summary', {
        pageTitle: 'Resumen de datos',
        path: '/upload_images/images-summary'
    });
};

exports.enviarImagenes = (request, response) => {
    response.render('upload_images/images-sent', {
        pageTitle: 'Imágenes enviadas',
        path: '/upload_images/images-sent'
    });
};

exports.infoEdificio = (request, response) => {
    response.render('upload_images/info-edificio', {
        pageTitle: 'Analizar edificio',
        path: '/upload_images/info-edificio'
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