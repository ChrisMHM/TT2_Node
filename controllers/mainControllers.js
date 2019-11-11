const DRO = require('../models/DRO');
const mainMenuControllers = require('./mainMenuControllers');
const registerControllers = require('./registerControllers');

exports.about = (request, response) => {
    response.render('main/about', {
        pageTitle: 'Acerca de',
        path: '/main/about'
    });
};

// Login

exports.login = (request, response) => {
    if (request.session.dro) {
        mainMenuControllers.menuPrincipal(request, response);
    } else {
        response.render('main/login', {
            pageTitle: 'Ingresar',
            path: '/main/login',
            errores: request.flash('errores')
        });
    }
};

exports.loginPost = (request, response) => {
    let dro = new DRO(request.body);

    dro.login().then(resultado => {
        request.session.dro = {correo: dro.getDatos().correo}
        request.session.save(() => {
            response.redirect('/main/login');
        });
    }).catch(error => {
        request.flash('errores', error);
        request.session.save(() => {
            response.redirect('/main/login');
        });
    });
};

// Registro

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
        registerControllers.registroCompletado(request, response);
    }
};