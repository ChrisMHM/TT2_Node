const express = require('express');

const router = express.Router();

router.get('/change-menu', (request, response) => {
    response.render('change_report/change-menu', {
        pageTitle: 'Cambiar reporte o dictamen',
        path: 'change_report/change-menu'
    });
});

router.get('/select-report', (request, response) => {
    response.render('change_report/select-report', {
        pageTitle: 'Elegir reporte',
        path: 'change_report/select-report'
    });
});

router.get('/change-data', (request, response) => {
    response.render('change_report/change-data', {
        pageTitle: 'Modificar reporte',
        formTitle: 'Modificar reporte',
        salir: './select-report',
        enviar: './summary-report',
        path: 'change_report/change-data'
    });
});

router.get('/summary-form', (request, response) => {
    response.render('change_report/summary-form', {
        pageTitle: 'Resumen del reporte',
        regresar: './',
        enviar: './summary-report',
        path: 'change_report/summary-form'
    });
});

module.exports = router;