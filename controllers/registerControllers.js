exports.registroCompletado = (request, response) => {
    response.render('register/register-completed', {
        pageTitle: 'Registro exitoso',
        path: '/register/register-completed'
    });
};

exports.registroErroneo = (request, response) => {
    response.render('register/register-failed', {
        pageTitle: 'Registro fallido',
        path: '/register/register-failed'
    });
};

exports.resumenRegistro = (request, response) => {
    response.render('register/register-summary', {
        pageTitle: 'Resumen del registro',
        path: '/register/register-summary'
    });
};

exports.password = (request, response) => {
    response.render('register/password', {
        pageTitle: 'Recuperar contraseña',
        path: '/register/password'
    });
};