exports.tablaReporteFinalizado = (request, response) => {
    response.render('imprimir/tabla-reportes-finalizados', {
        pageTitle: 'Imprimir formato',
        enlaceSiguiente: '#',
        regresar: '../main_menu/main-menu',
        path: 'imprimir/tabla-reportes-finalizados'
    });
};

exports.verResumen = (request, response) => {
    response.render('imprimir/ver-resumen', {
        pageTitle: 'Resumen del reporte',
        regresar: './tabla-reportes-finalizados',
        aceptar: './tabla-reportes-finalizados',
        path: 'imprimir/ver-resumen'
    });
};