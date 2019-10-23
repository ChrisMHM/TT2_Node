const express = require('express');

const router = express.Router();

router.get('/report-menu', (request, response) => {
    response.render('fill_report/report-menu', {
        pageTitle: 'Llenar reporte',
        path: 'fill_report/report-menu'
    });
});

router.get('/report-form', (request, response) => {
    response.render('fill_report/report-form', {
        pageTitle: 'Llenar formulario',
        path: 'fill_report/report-form'
    });
});

router.get('/continue-report', (request, response) => {
    response.render('fill_report/continue-report', {
        pageTitle: 'Continuar llenado formulario',
        formTitle: 'Continuar Reporte',
        salir: './report-menu',
        enviar: './summary-form',
        path: 'fill_report/continue-report'
    });
});

router.get('/summary-form', (request, response) => {
    response.render('fill_report/summary-form', {
        pageTitle: 'Resumen del reporte',
        path: 'fill_report/summary-form'
    });
});

router.get('/report-completed', (request, response) => {
    response.render('fill_report/report-completed', {
        pageTitle: 'Reporte enviado',
        path: 'fill_report/report-completed'
    });
});

module.exports = router;