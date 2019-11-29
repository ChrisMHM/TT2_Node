const DRO = require('../models/DRO');
const droCollection = require('../db').db().collection('DRO');

exports.salir = (request, response) => {
    request.session.destroy(() => {
        response.redirect('/main/login');
    })
}

exports.menuPrincipal = (request, response) => {
    droCollection.findOne({})
        .then(result => {
            if(result) {
                let nombre = result.nombres.nombre0;
                nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1)
                // console.log(`Successfully found document: ${nombre}.`);
                response.render('main_menu/main-menu', {
                    nombreDRO: `${nombre}`,
                    pageTitle: 'Bienvenido',
                    path: '/main_menu/main-menu'
                });
              } else {
                console.log("No document matches the provided query.");
              }
        })
        .catch(error => {
            console.error(`Failed to find document: ${err}`)
        })
};