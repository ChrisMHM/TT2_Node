exports.menuReporte = (request, response) => {
    response.render('fill_report/report-menu', {
        pageTitle: 'Llenar reporte',
        path: 'fill_report/report-menu'
    });
};

exports.formularioReporte = (request, response) => {
    response.render('fill_report/report-form', {
        pageTitle: 'Llenar formulario',
        path: 'fill_report/report-form'
    });
};

exports.formularioReportePost = (request, response) => {
    response.send('enviado');
}

exports.continuarReporte = (request, response) => {
    response.render('fill_report/continue-report', {
        pageTitle: 'Continuar llenado formulario',
        formTitle: 'Continuar Reporte',
        salir: './report-menu',
        enviar: './summary-form',
        path: 'fill_report/continue-report'
    });
};

exports.resumenFormulario = (request, response) => {
    response.render('fill_report/summary-form', {
        pageTitle: 'Resumen del reporte',
        regresar: './report-form',
        aceptar: './report-completed',
        path: 'fill_report/summary-form'
    });
};

exports.reporteCompletado = (request, response) => {
    response.render('fill_report/report-completed', {
        pageTitle: 'Reporte enviado',
        reportInfo: 'completado',
        tituloDictamen: 'preliminar',
        dictamen: 'Dictamen',
        path: 'fill_report/report-completed'
    });
};

exports.validarReporte = (request, response) => {
    response.render('fill_report/validate-report', {
        pageTitle: 'Seleccionar dictamen',
        selectTitle: 'validar',
        regresar: './report-menu',
        path: 'fill_report/validate-report'
    });
};

exports.seleccionarEdificacion = (request, response) => {
    response.render('fill_report/seleccionar-edificacion', {
        pageTitle: 'Seleccionar edificación',
        selectTitle: 'llenar',
        enlaceSiguiente: './report-form',
        regresar: './report-menu',
        path: 'fill_report/seleccionar-edificacion'
    });
};

exports.seleccionarEdificacionContinuar = (request, response) => {
    response.render('fill_report/seleccionar-edificacion-continuar', {
        pageTitle: 'Seleccionar edificación',
        selectTitle: 'continuar',
        enlaceSiguiente: './continue-report',
        regresar: './report-menu',
        path: 'fill_report/seleccionar-edificacion-continuar'
    });
};

exports.validacionResumen = (request, response) => {
    response.render('fill_report/summary-validation', {
        pageTitle: 'Resumen del reporte',
        regresar: './validate-report',
        aceptar: './finish-validation',
        path: 'fill_report/summary-validation'
    });
};

exports.finalizarValidacion = (request, response) => {
    response.render('fill_report/finish-validation', {
        pageTitle: 'Validar dictamen',
        tituloDictamen: 'preliminar',
        dictamen: 'Dictamen',
        path: 'fill_report/finish-validation'
    });
};