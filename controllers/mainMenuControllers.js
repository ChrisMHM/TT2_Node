const droCollection = require('../db').db().collection('DRO');

exports.salir = (request, response) => {
    request.session.destroy(() => {
        response.redirect('/');
    })
}

exports.menuPrincipal = (request, response) => {
    
    response.render('main_menu/main-menu', {
        nombreDRO: request.session.dro.correo,
        pageTitle: 'Bienvenido',
        path: '/main_menu/main-menu'
    });
};