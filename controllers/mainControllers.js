const DRO = require('../models/DRO');

exports.about = (request, response) => {
    response.render('main/about', {
        pageTitle: 'Acerca de',
        path: '/main/about'
    });
};

exports.login = (request, response) => {
    if (request.session.dro) {
        response.send("Bienvenido a la aplicación");
    } else {
        response.render('main/login', {
            pageTitle: 'Ingresar',
            path: '/main/login'
        });
    }
    
};

exports.loginPost = (request, response) => {
    let dro = new DRO(request.body);
    dro.login().then(resultado => {
        request.session.dro = {correo: dro.getDatos().correo}
        response.send(resultado);
    }).catch(error => {
        response.send(error);
    });
};

exports.registro = (request, response) => {
    response.render('main/registro', {
        pageTitle: 'Registro',
        path: '/main/registro'
    });
};

exports.registroPost = (request, response) => {
    let dro = new DRO(request.body);
    dro.registrar();
    if (dro.getErrores().length){
        response.send(dro.getErrores());
    } else {
        response.send("Registro exitoso");
    }
};