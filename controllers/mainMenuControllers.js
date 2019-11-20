const DRO = require('../models/DRO');
const droCollection = require('../db').db().collection('DRO');

exports.salir = (request, response) => {
    request.session.destroy(() => {
        response.redirect('/main/login');
    })
}

exports.menuPrincipal = (request, response) => {
    response.render('main_menu/main-menu', {
        nombreDRO: 'usuario',                       //Revisar cómo consultar la BD para sacar el nombre del usuario
        pageTitle: 'Bienvenido',
        path: '/main_menu/main-menu'
    });
};