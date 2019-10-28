const express = require('express');

const router = express.Router();

router.get('/change-menu', (request, response) => {
    response.render('change_report/change-menu', {
        pageTitle: 'Cambiar reporte o dictamen',
        path: '/change_report/change-menu'
    });
});

router.get('/select-report', (request, response) => {
    response.render('change_report/select-report', {
        pageTitle: 'Elegir reporte',
        path: '/change_report/select-report'
    });
});

router.get('/change-data', (request, response) => {
    response.render('change_report/change-data', {
        pageTitle: 'Modificar reporte',
        formTitle: 'Modificar reporte',
        salir: './select-report',
        enviar: './summary-form',
        path: '/change_report/change-data'
    });
});

router.get('/summary-form', (request, response) => {
    response.render('change_report/summary-form', {
        pageTitle: 'Resumen del reporte',
        regresar: './change-data',
        aceptar: './change-success',
        path: '/change_report/summary-form'
    });
});

router.get('/change-success', (request, response) => {
    response.render('change_report/change-success', {
        pageTitle: 'Reporte modificado exitosamente',
        reportInfo: 'actualizado',
        tituloDictamen: 'actualizado',
        dictamen: 'Nuevo dictamen',
        path: '/change_report/change-success'
    });
});

router.get('/select-final-report', (request, response) => {
    response.render('change_report/select-final-report', {
        pageTitle: 'Seleccionar dictamen',
        selectTitle: 'actualizar',
        regresar: './change-menu',
        path: '/change_report/select-final-report'
    });
});

router.get('/finish-validation', (request, response) => {
    response.render('change_report/finish-validation', {
        pageTitle: 'Modificar reporte',
        tituloDictamen: 'a cambiar',
        dictamen: 'Dictamen previo',
        path: '/change_report/finish-validation'
    });
});

module.exports = router;