exports.menuPrincipal = (request, response) => {
    response.render('main_menu/main-menu', {
        pageTitle: '¡Hola, Usuario!',
        path: '/main_menu/main-menu'
    });
};