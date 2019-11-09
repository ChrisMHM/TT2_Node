exports.menuCuenta = (request, response) => {
    response.render('account/account-menu', {
        pageTitle: 'Mi cuenta',
        path: '/account/account-menu'
    });
};

exports.cambiarNombre = (request, response) => {
    response.render('account/change-name', {
        pageTitle: 'Cambiar nombre',
        path: '/account/change-name'
    });
};

exports.cambiarCorreo = (request, response) => {
    response.render('account/change-email', {
        pageTitle: 'Cambiar email',
        path: '/account/change-email'
    });
};

exports.cambiarPassword = (request, response) => {
    response.render('account/change-password', {
        pageTitle: 'Cambiar contraseña',
        path: '/account/change-password'
    });
};