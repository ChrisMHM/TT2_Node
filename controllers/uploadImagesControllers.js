const Direccion = require('../models/Direccion');
// const Areas = require('../models/Areas');

const direccionCollection = require('../db').db().collection('Direccion');
let direccion = {};

exports.infoEdificio = (request, response) => {
    response.render('upload_images/info-edificio', {
        pageTitle: 'Analizar edificio',
        path: '/upload_images/info-edificio',
        errores: request.flash('errores')
    });
};

exports.infoEdificioPost = (request, response) => {
    direccion = new Direccion(request.body);

    direccion.registrar()
        .then(() => {
            request.session.save(() => {
                // request.flash('Dirección registrada', info);
                response.redirect('/upload_images/info-areas');
            });
        })
        .catch(error => {
            request.flash('errores', error);
            request.session.save(() => {
                response.redirect('/upload_images/info-edificio');
            });
        });
    return direccion;
};


exports.infoResumen = (request, response) => {
    response.render('upload_images/info-resumen', {
        pageTitle: 'Resumen de la información',
        path: '/upload_images/info-resumen'
    });
};

exports.infoRegistro = (request, response) => {
    direccion.getId()
        .then(result => {
            console.log(result);
            response.render('upload_images/info-registro', {
                pageTitle: 'Registro exitoso',
                nombreTicket: `${result}`,
                path: '/upload_images/info-areas'
            });
        })
        .catch(error => {
            console.log(error)
        });
};

exports.infoAreas = (request, response) => {
    numAreas = direccion.getDatos().num_areas;
    const idDireccion = direccion.getId()
        .then(result => {
            console.log("idDireccion: " + result);
            return result;
        })
        .catch(error => {
            console.log(error)
            return error;
        });

    // direccionCollection.findOne({ "_id": `${idDireccion}`})
    //     .then(result => {
    //         console.log(result);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })

    response.render('upload_images/info-areas', {
        numAreas: numAreas,
        pageTitle: 'Información áreas edificio',
        path: '/upload_images/info-areas'
    });
};

exports.infoAreasPost = (request, response) => {
    const imagen = request.file;
    const nombreArea = request.body.nombre_area;

    request.session.save(() => {
        // request.flash('Dirección registrada', info);
        response.redirect('/upload_images/info-resumen');
    });

    console.log(imagen);
}