exports.menuCambiar = (request, response) => {
    response.render('change_report/change-menu', {
        pageTitle: 'Cambiar reporte o dictamen',
        path: '/change_report/change-menu'
    });
};

exports.seleccionarReporte = (request, response) => {
    response.render('change_report/select-report', {
        pageTitle: 'Elegir reporte',
        path: '/change_report/select-report'
    });
};

exports.cambiarDatos = (request, response) => {
    response.render('change_report/change-data', {
        pageTitle: 'Modificar reporte',
        formTitle: 'Modificar reporte',
        salir: './select-report',
        enviar: './summary-form',
        path: '/change_report/change-data'
    });
};

exports.resumenFormulario = (request, response) => {
    response.render('change_report/summary-form', {
        pageTitle: 'Resumen del reporte',
        regresar: './change-data',
        aceptar: './change-success',
        path: '/change_report/summary-form'
    });
};

exports.cambioExitoso =(request, response) => {
    response.render('change_report/change-success', {
        pageTitle: 'Reporte modificado exitosamente',
        reportInfo: 'actualizado',
        tituloDictamen: 'actualizado',
        dictamen: 'Nuevo dictamen',
        path: '/change_report/change-success'
    });
};

exports.seleccionarReporteFinal =(request, response) => {
    response.render('change_report/select-final-report', {
        pageTitle: 'Seleccionar dictamen',
        selectTitle: 'actualizar',
        regresar: './change-menu',
        path: '/change_report/select-final-report'
    });
};

exports.validacionFinal = (request, response) => {
    response.render('change_report/finish-validation', {
        pageTitle: 'Modificar reporte',
        tituloDictamen: 'a cambiar',
        dictamen: 'Dictamen previo',
        path: '/change_report/finish-validation'
    });
};